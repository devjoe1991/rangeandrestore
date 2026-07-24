// Thin client for the Canva Connect REST API.
// Docs: https://www.canva.dev/docs/connect/api-reference/
//
// Two things this handles that the raw API doesn't:
//   1. Rate limiting — most write endpoints are 20 requests/minute per user.
//   2. Async jobs — asset uploads and design imports return a job you have to poll.

import fs from 'node:fs/promises'
import { getAccessToken } from './auth.mjs'

const BASE = 'https://api.canva.com/rest/v1'

// Canva's documented limit is 20/min on designs, folders and imports.
// 3.2s between calls keeps us under it with room to spare.
const MIN_INTERVAL_MS = 3200
let lastCall = 0

async function throttle() {
  const wait = lastCall + MIN_INTERVAL_MS - Date.now()
  if (wait > 0) await new Promise((r) => setTimeout(r, wait))
  lastCall = Date.now()
}

async function request(method, endpoint, { json, body, headers = {}, rateLimit = true } = {}) {
  if (rateLimit) await throttle()
  const token = await getAccessToken()

  const res = await fetch(`${BASE}${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(json ? { 'Content-Type': 'application/json' } : {}),
      ...headers,
    },
    body: json ? JSON.stringify(json) : body,
  })

  // 429 shouldn't happen given the throttle, but honour Retry-After if it does.
  if (res.status === 429) {
    const retryAfter = Number(res.headers.get('retry-after') || 30)
    console.log(`  Rate limited. Waiting ${retryAfter}s…`)
    await new Promise((r) => setTimeout(r, retryAfter * 1000))
    return request(method, endpoint, { json, body, headers, rateLimit })
  }

  const text = await res.text()
  const parsed = text ? JSON.parse(text) : {}
  if (!res.ok) {
    throw new Error(`${method} ${endpoint} failed (${res.status}): ${JSON.stringify(parsed)}`)
  }
  return parsed
}

/** Poll an async job endpoint until it succeeds or fails. */
async function pollJob(endpoint, key, { timeoutMs = 180_000, intervalMs = 3000 } = {}) {
  const deadline = Date.now() + timeoutMs
  while (Date.now() < deadline) {
    await new Promise((r) => setTimeout(r, intervalMs))
    const { job } = await request('GET', endpoint, { rateLimit: false })
    if (job.status === 'success') return job.result[key]
    if (job.status === 'failed') {
      throw new Error(`Job failed: ${job.error?.code} — ${job.error?.message}`)
    }
  }
  throw new Error(`Job timed out after ${timeoutMs / 1000}s: ${endpoint}`)
}

// ---------------------------------------------------------------- users

export const getCurrentUser = () => request('GET', '/users/me', { rateLimit: false })

// -------------------------------------------------------------- folders

/** Create a folder. parentId is `root` for top level, or another folder's ID. */
export async function createFolder(name, parentId = 'root') {
  const { folder } = await request('POST', '/folders', {
    json: { name, parent_folder_id: parentId },
  })
  return folder
}

export async function listFolderItems(folderId, itemTypes) {
  const params = new URLSearchParams()
  if (itemTypes) params.set('item_types', itemTypes)
  const query = params.toString()
  return request('GET', `/folders/${folderId}/items${query ? `?${query}` : ''}`, {
    rateLimit: false,
  })
}

/**
 * Create a folder only if one with the same name isn't already there.
 * Makes the whole setup safe to re-run — Canva happily creates duplicates otherwise.
 */
export async function ensureFolder(name, parentId = 'root') {
  const { items = [] } = await listFolderItems(parentId, 'folder')
  const existing = items.find((i) => i.folder?.name === name)
  if (existing) return { folder: existing.folder, created: false }
  return { folder: await createFolder(name, parentId), created: true }
}

export const moveFolderItem = (itemId, toFolderId) =>
  request('POST', '/folders/move', { json: { item_id: itemId, to_folder_id: toFolderId } })

// --------------------------------------------------------------- assets

/** Upload a local image. Returns the asset once the async job completes. */
export async function uploadAsset(filePath, name) {
  const bytes = await fs.readFile(filePath)
  const { job } = await request('POST', '/asset-uploads', {
    body: bytes,
    headers: {
      'Content-Type': 'application/octet-stream',
      // Asset name travels in a header, base64'd so it can carry any character.
      'Asset-Upload-Metadata': JSON.stringify({
        name_base64: Buffer.from(name).toString('base64'),
      }),
    },
  })
  if (job.status === 'success') return job.result.asset
  return pollJob(`/asset-uploads/${job.id}`, 'asset')
}

// -------------------------------------------------------------- imports

/**
 * Import a PDF (or PSD/PPTX/etc) as a new, editable Canva design.
 *
 * This is the only route to a laid-out design via the API — POST /designs can
 * only create a blank canvas, optionally with a single image dropped in.
 */
export async function importDesign(filePath, title, mimeType = 'application/pdf') {
  const bytes = await fs.readFile(filePath)
  const { job } = await request('POST', '/imports', {
    body: bytes,
    headers: {
      'Content-Type': 'application/octet-stream',
      'Import-Metadata': JSON.stringify({
        // Canva caps unencoded design titles at 50 characters.
        title_base64: Buffer.from(title.slice(0, 50)).toString('base64'),
        mime_type: mimeType,
      }),
    },
  })
  const designs = job.status === 'success' ? job.result.designs : await pollJob(`/imports/${job.id}`, 'designs')
  return designs
}
