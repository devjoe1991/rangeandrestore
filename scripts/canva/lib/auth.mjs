// OAuth 2.0 Authorization Code flow with PKCE (S256) for the Canva Connect API.
// Docs: https://www.canva.dev/docs/connect/authentication/
//
// Tokens are cached in .canva-tokens.json at the repo root (gitignored).
// Access tokens are short-lived, so every call goes through getAccessToken(),
// which refreshes automatically when the cached token is within 60s of expiry.

import crypto from 'node:crypto'
import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import { exec } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
export const REPO_ROOT = path.resolve(HERE, '../../..')
const TOKEN_FILE = path.join(REPO_ROOT, '.canva-tokens.json')

const AUTH_BASE = 'https://www.canva.com/api/oauth/authorize'
const TOKEN_URL = 'https://api.canva.com/rest/v1/oauth/token'

// Must exactly match a redirect URL registered in the Developer Portal.
// Canva rejects `localhost` — it has to be the loopback IP.
const REDIRECT_PORT = 3001
export const REDIRECT_URI = `http://127.0.0.1:${REDIRECT_PORT}/oauth/redirect`

// Scopes are additive and must be requested explicitly — asset:write does NOT imply asset:read.
export const SCOPES = [
  'folder:read',
  'folder:write',
  'asset:read',
  'asset:write',
  'design:content:write',
  'design:meta:read',
  'profile:read',
]

function credentials() {
  const id = process.env.CANVA_CLIENT_ID
  const secret = process.env.CANVA_CLIENT_SECRET
  if (!id || !secret) {
    throw new Error(
      'CANVA_CLIENT_ID and CANVA_CLIENT_SECRET must be set.\n' +
        'Add them to .env.local, then run with: node --env-file=.env.local scripts/canva/canva.mjs <command>\n' +
        'See scripts/canva/README.md for how to get them.'
    )
  }
  return { id, secret }
}

function basicAuthHeader() {
  const { id, secret } = credentials()
  return 'Basic ' + Buffer.from(`${id}:${secret}`).toString('base64')
}

async function readTokens() {
  try {
    return JSON.parse(await fs.readFile(TOKEN_FILE, 'utf8'))
  } catch {
    return null
  }
}

async function writeTokens(payload) {
  const record = {
    access_token: payload.access_token,
    refresh_token: payload.refresh_token,
    // expires_in is seconds from now; store an absolute epoch-ms deadline instead
    expires_at: Date.now() + payload.expires_in * 1000,
    scope: payload.scope,
  }
  await fs.writeFile(TOKEN_FILE, JSON.stringify(record, null, 2))
  // Tokens act on behalf of the user — keep them owner-readable only.
  await fs.chmod(TOKEN_FILE, 0o600)
  return record
}

async function exchange(body) {
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: basicAuthHeader(),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(body),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(`Token request failed (${res.status}): ${JSON.stringify(json)}`)
  }
  return writeTokens(json)
}

/** Full interactive authorisation. Opens a browser and waits for the redirect. */
export async function authorise() {
  const { id } = credentials()

  const codeVerifier = crypto.randomBytes(96).toString('base64url')
  const codeChallenge = crypto.createHash('sha256').update(codeVerifier).digest('base64url')
  const state = crypto.randomBytes(96).toString('base64url')

  const url =
    `${AUTH_BASE}?` +
    new URLSearchParams({
      code_challenge: codeChallenge,
      code_challenge_method: 's256',
      scope: SCOPES.join(' '),
      response_type: 'code',
      client_id: id,
      state,
      redirect_uri: REDIRECT_URI,
    })

  const code = await new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const incoming = new URL(req.url, `http://127.0.0.1:${REDIRECT_PORT}`)
      if (incoming.pathname !== '/oauth/redirect') {
        res.writeHead(404).end()
        return
      }

      const returnedState = incoming.searchParams.get('state')
      const returnedCode = incoming.searchParams.get('code')
      const error = incoming.searchParams.get('error')

      const finish = (status, message) => {
        res.writeHead(status, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(
          `<!doctype html><meta charset="utf-8"><title>Canva</title>` +
            `<body style="font-family:system-ui;background:#FCFBF9;color:#1a2330;padding:64px;max-width:32rem">` +
            `<h1 style="color:#0f767a">${message}</h1>` +
            `<p style="color:#4f5866">You can close this tab and go back to the terminal.</p>`
        )
        server.close()
      }

      if (error) {
        finish(400, 'Authorisation failed')
        reject(new Error(`Canva returned an error: ${error}`))
        return
      }
      // CSRF check — if state doesn't round-trip, the response isn't ours.
      if (returnedState !== state) {
        finish(400, 'State mismatch')
        reject(new Error('State mismatch — aborting. Run the command again.'))
        return
      }
      if (!returnedCode) {
        finish(400, 'No authorisation code')
        reject(new Error('No authorisation code in the redirect.'))
        return
      }

      finish(200, 'Connected to Canva')
      resolve(returnedCode)
    })

    server.on('error', (err) =>
      reject(
        err.code === 'EADDRINUSE'
          ? new Error(`Port ${REDIRECT_PORT} is in use. Free it and try again.`)
          : err
      )
    )

    server.listen(REDIRECT_PORT, '127.0.0.1', () => {
      console.log('\nOpening Canva to authorise. If the browser does not open, paste this URL:\n')
      console.log(url + '\n')
      const opener =
        process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start ""' : 'xdg-open'
      exec(`${opener} "${url}"`)
    })
  })

  const tokens = await exchange({
    grant_type: 'authorization_code',
    code,
    code_verifier: codeVerifier,
    redirect_uri: REDIRECT_URI,
  })
  console.log('Authorised. Tokens cached in .canva-tokens.json (gitignored).')
  return tokens
}

/** Returns a valid access token, refreshing or prompting for authorisation as needed. */
export async function getAccessToken() {
  const tokens = await readTokens()
  if (!tokens) {
    throw new Error('Not authorised yet. Run:  node --env-file=.env.local scripts/canva/canva.mjs auth')
  }
  // 60s of slack so a token can't expire mid-request.
  if (Date.now() < tokens.expires_at - 60_000) return tokens.access_token

  console.log('Access token expired, refreshing…')
  const refreshed = await exchange({
    grant_type: 'refresh_token',
    refresh_token: tokens.refresh_token,
  })
  return refreshed.access_token
}
