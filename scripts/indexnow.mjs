#!/usr/bin/env node
/**
 * Tell Bing, Yandex and the AI search tools that use Bing's index (ChatGPT
 * search, Copilot) that pages have changed, via IndexNow. Google ignores it.
 *
 * The key lives in public/<KEY>.txt so the engines can check we own the site.
 * Run AFTER a deploy is live — the engines fetch that file before accepting.
 *
 * Usage: node scripts/indexnow.mjs [--dry-run] [/path ...]
 *   No paths: submits every URL in the live sitemap.
 *   Paths:    submits only those, e.g. /blog/new-post /services
 */
const HOST = 'rangeandrestore.co.uk'
const SITE = `https://${HOST}`
const KEY = '1640352123964fb1e2b0f7776bbfc079'
const KEY_URL = `${SITE}/${KEY}.txt`

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const paths = args.filter((a) => a.startsWith('/'))

// The engines reject everything if the key file isn't live, so check first.
const keyRes = await fetch(KEY_URL)
const keyLive = keyRes.ok && (await keyRes.text()).trim() === KEY
if (!keyLive && !dryRun) {
  console.error(`Key file not live at ${KEY_URL} (HTTP ${keyRes.status}). Deploy first.`)
  process.exit(1)
}

let urls
if (paths.length) {
  urls = paths.map((p) => SITE + p)
} else {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text()
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
}
if (!urls.length) {
  console.error('No URLs to submit.')
  process.exit(1)
}

console.log(`Key file live: ${keyLive ? 'yes' : 'NO'}`)
console.log(`${urls.length} URL(s):\n  ${urls.join('\n  ')}`)
if (dryRun) {
  console.log('Dry run — nothing sent.')
  process.exit(0)
}

// One call to api.indexnow.org is shared with every participating engine.
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_URL, urlList: urls }),
})
// 200 = accepted, 202 = accepted, key check pending. Anything else is a failure.
console.log(`IndexNow responded ${res.status} ${res.statusText}`)
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text())
  process.exit(1)
}
