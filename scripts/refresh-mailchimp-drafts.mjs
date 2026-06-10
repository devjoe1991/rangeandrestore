#!/usr/bin/env node
/**
 * Refresh every R&R draft campaign's content from its (updated) saved template.
 * Mailchimp snapshots template HTML into a campaign at creation, so after editing
 * templates we must re-apply the template to each draft. NEVER sends.
 * Only touches campaigns whose title starts with "R&R — " and status === "save".
 */
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
function getKey() {
  if (process.env.MAILCHIMP_API_KEY) return process.env.MAILCHIMP_API_KEY
  const m = readFileSync(join(ROOT, '.env.local'), 'utf8').match(/^MAILCHIMP_API_KEY=(.+)$/m)
  return m[1].trim().replace(/^["']|["']$/g, '')
}
const KEY = getKey(); const DC = KEY.split('-')[1]
const BASE = `https://${DC}.api.mailchimp.com/3.0`
const AUTH = 'Basic ' + Buffer.from(`anystring:${KEY}`).toString('base64')

async function mc(path, opts = {}) {
  const res = await fetch(BASE + path, { ...opts, headers: { Authorization: AUTH, 'Content-Type': 'application/json', ...(opts.headers || {}) } })
  const t = await res.text(); let j; try { j = t ? JSON.parse(t) : {} } catch { j = { raw: t } }
  if (!res.ok) throw new Error(`${res.status}: ${j.detail || t}`)
  return j
}

async function templatesByName() {
  const map = {}; let off = 0
  while (true) {
    const d = await mc(`/templates?type=user&count=100&offset=${off}`)
    for (const t of d.templates || []) map[t.name] = t.id
    if (!d.templates || d.templates.length < 100) break; off += 100
  }
  return map
}
async function draftCampaigns() {
  const out = []; let off = 0
  while (true) {
    const d = await mc(`/campaigns?count=100&offset=${off}&status=save`)
    for (const c of d.campaigns || []) out.push(c)
    if (!d.campaigns || d.campaigns.length < 100) break; off += 100
  }
  return out
}

async function main() {
  const tpls = await templatesByName()
  const drafts = await draftCampaigns()
  let done = 0, skip = 0, fail = 0
  for (const c of drafts) {
    const title = c.settings?.title || ''
    if (!title.startsWith('R&R — ')) { skip++; continue }
    // template name is the part before "  [send:"
    const tplName = title.split('  [send:')[0]
    const tplId = tpls[tplName]
    if (!tplId) { console.log(`SKIP (no template): ${title}`); skip++; continue }
    try {
      await mc(`/campaigns/${c.id}/content`, { method: 'PUT', body: JSON.stringify({ template: { id: tplId } }) })
      console.log(`REFRESHED  ${c.id}  ${tplName}`)
      done++
    } catch (e) { console.error(`FAILED  ${title}: ${e.message}`); fail++ }
  }
  console.log(`\nrefreshed: ${done} | skipped: ${skip} | failed: ${fail}`)
  console.log('All still DRAFT. Nothing sent.')
}
main().catch(e => { console.error(e); process.exit(1) })
