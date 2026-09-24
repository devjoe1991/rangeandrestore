#!/usr/bin/env node
/**
 * Opens every Jane booking link in lib/constants.ts in headless Chrome and
 * reports the ones that no longer land where they should.
 *
 * Jane gives no error for a dead link: an unknown treatment link is sent to
 * the front page, and an unknown section link just sits at the top of it. So
 * a treatment or staff link passes when Jane keeps its address, and a section
 * link passes when Jane scrolls down to that section.
 *
 * Run after changing anything in Jane:  npm run check:booking
 * Needs Google Chrome installed (set CHROME_PATH if it isn't in /Applications).
 */
import { spawn } from 'node:child_process'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { BOOKING_URLS } from '../lib/constants.ts'

const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const PORT = 9555
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const profile = mkdtempSync(path.join(tmpdir(), 'booking-check-'))
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, 'about:blank'], { stdio: 'ignore' })

let wsUrl
for (let i = 0; i < 40 && !wsUrl; i++) {
  await sleep(250)
  try {
    const targets = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json()
    wsUrl = targets.find((t) => t.type === 'page')?.webSocketDebuggerUrl
  } catch {}
}
if (!wsUrl) {
  console.error('Could not start Chrome. Set CHROME_PATH to your Chrome executable.')
  process.exit(1)
}

const ws = new WebSocket(wsUrl)
await new Promise((r) => ws.addEventListener('open', r))
let id = 0
const pending = new Map()
ws.addEventListener('message', (e) => {
  const m = JSON.parse(e.data)
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id) }
})
const send = (method, params = {}) =>
  new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })) })

const failures = []
for (const [key, url] of Object.entries(BOOKING_URLS)) {
  if (!url.includes('#/')) { console.log(`skip  ${key}`); continue }
  await send('Page.navigate', { url: 'about:blank' })
  await send('Page.navigate', { url })
  await sleep(7000)
  const res = await send('Runtime.evaluate', { expression: 'JSON.stringify([location.href, scrollY])', returnByValue: true })
  const [href, scrollY] = JSON.parse(res.result.value)
  const isSection = !/#\/(discipline|staff_member|list)\b/.test(url)
  const ok = isSection ? href === url && scrollY > 0 : href === url
  console.log(`${ok ? 'ok   ' : 'FAIL '} ${key}${ok ? '' : `  → landed on ${href}${isSection ? ` (scrolled ${scrollY}px)` : ''}`}`)
  if (!ok) failures.push(key)
}

ws.close()
const exited = new Promise((r) => chrome.once('exit', r))
chrome.kill()
await exited
rmSync(profile, { recursive: true, force: true, maxRetries: 5 })

if (failures.length) {
  console.error(`\n${failures.length} booking link(s) no longer reach the right place in Jane: ${failures.join(', ')}`)
  console.error('Find the new address in Jane and update BOOKING_URLS in lib/constants.ts.')
  process.exit(1)
}
console.log('\nAll booking links land in the right place.')
