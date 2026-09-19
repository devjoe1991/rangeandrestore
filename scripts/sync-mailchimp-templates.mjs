#!/usr/bin/env node
/**
 * Sync /emails/*.html to Mailchimp as reusable templates.
 * Reads MAILCHIMP_API_KEY from .env.local (format: key-usXX).
 * Creates new templates, or updates existing ones matched by name.
 * NEVER sends anything. Templates only.
 *
 * Usage: node scripts/sync-mailchimp-templates.mjs [file-name]
 *   Pass a file name without .html (e.g. corporate-wellbeing) to sync only that one.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const EMAILS_DIR = join(ROOT, 'emails')

// --- read API key from .env.local ---
function getKey() {
  if (process.env.MAILCHIMP_API_KEY) return process.env.MAILCHIMP_API_KEY
  const env = readFileSync(join(ROOT, '.env.local'), 'utf8')
  const m = env.match(/^MAILCHIMP_API_KEY=(.+)$/m)
  if (!m) throw new Error('MAILCHIMP_API_KEY not found in .env.local')
  return m[1].trim().replace(/^["']|["']$/g, '')
}

const KEY = getKey()
const DC = KEY.split('-')[1]
if (!DC) throw new Error('API key missing data-center suffix (-usXX)')
const BASE = `https://${DC}.api.mailchimp.com/3.0`
const AUTH = 'Basic ' + Buffer.from(`anystring:${KEY}`).toString('base64')

// file name -> Mailchimp template name
const NAME_MAP = {
  'welcome': 'Range and Restore — Welcome / Onboarding',
  'newsletter': 'Range and Restore — Newsletter / Recovery Notes',
  'reengagement': 'Range and Restore — Re-engagement / Rebooking',
  'aftercare-first-visit': 'Range and Restore — Aftercare / First Session',
  'birthday': 'Range and Restore — Birthday',
  'milestone-visits': 'Range and Restore — Milestone Thank You',
  'thank-you-google-review': 'Range and Restore — Thank You / Google Review',
  'corporate-wellbeing': 'Range and Restore — Corporate Wellbeing',
  'collab-dynamic-spud': 'Range and Restore — Community × Dynamic Spud',
  'collab-alis-quiff-barber': "Range and Restore — Community × Ali's Quiff",
  'collab-nc-osteopathy': 'Range and Restore — Community × NC Osteopathy',
  'collab-sol-centre': 'Range and Restore — Community × Sol Centre',
  'collab-alaric-yoga': 'Range and Restore — Community × Alaric Yoga',
  'collab-reliable-scan': 'Range and Restore — Community × Reliable Scan',
  'community-roundup': 'Range and Restore — Community Roundup',
  'community-partners': 'Range and Restore — Community Partners',
  'service-recovery-suite': 'Range and Restore — Recovery Suite',
  'service-msk-ultrasound-massage': 'Range and Restore — MSK Scan + Clinical Massage',
  'service-sports-pain': 'Range and Restore — Sports & Pain Relief',
  'service-community-tuesday-clinic': 'Range and Restore — Community Tuesday Clinic',
  'service-restore-memberships': 'Range and Restore — Restore+ Memberships',
  'service-infrared-sauna-memberships': 'Range and Restore — Infrared Sauna & Memberships',
  'service-massage-bundles': 'Range and Restore — Massage Bundles',
  'book-a-session': 'Range and Restore — Book a Session',
  'team-introduction': 'Range and Restore — Meet the Team',
  'event-marathon': 'Range and Restore — Marathon / Event Recovery',
  'gift-cards-bundles': 'Range and Restore — Gift Cards & Bundles',
  'announcement': 'Range and Restore — Announcement (flexible)',
  'announcement-carlos-annual-leave': 'Range and Restore — Carlos Annual Leave Aug 2026',
  'award-prestige-2026': 'Range and Restore — Award / Prestige 2026',
  'gallery-showcase': 'Range and Restore — Gallery Showcase',
  // Seasonal / holiday / event (batch 2)
  'seasonal-christmas': 'Range and Restore — Christmas',
  'seasonal-new-year': 'Range and Restore — New Year',
  'seasonal-closure-notice': 'Range and Restore — Closure Notice (editable)',
  'seasonal-black-friday': 'Range and Restore — Black Friday',
  'seasonal-cyber-monday': 'Range and Restore — Cyber Monday',
  'seasonal-valentines': "Range and Restore — Valentine's Day",
  'seasonal-mothering-sunday': 'Range and Restore — Mothering Sunday',
  'seasonal-fathers-day': "Range and Restore — Father's Day",
  'seasonal-st-patricks': "Range and Restore — St Patrick's Day",
  'seasonal-st-georges': "Range and Restore — St George's Day",
  'seasonal-easter': 'Range and Restore — Easter',
  'seasonal-new-year-reset': 'Range and Restore — New Year Reset / Blue Monday',
  'seasonal-halloween': 'Range and Restore — Halloween',
  'seasonal-bonfire-night': 'Range and Restore — Bonfire Night',
  'seasonal-summer-bank-holiday': 'Range and Restore — Summer Bank Holiday',
  'seasonal-clocks-change': 'Range and Restore — Clocks Change',
  'seasonal-marathon-day': 'Range and Restore — Marathon Day',
  'event-arsenal-champions': 'Range and Restore — Arsenal Champions',
}

async function mc(path, opts = {}) {
  const res = await fetch(BASE + path, {
    ...opts,
    headers: { Authorization: AUTH, 'Content-Type': 'application/json', ...(opts.headers || {}) },
  })
  const text = await res.text()
  let json
  try { json = text ? JSON.parse(text) : {} } catch { json = { raw: text } }
  if (!res.ok) throw new Error(`${res.status} ${json.title || ''}: ${json.detail || text}`)
  return json
}

async function listExisting() {
  const all = {}
  let offset = 0
  while (true) {
    const data = await mc(`/templates?type=user&count=100&offset=${offset}`)
    for (const t of data.templates || []) all[t.name] = t.id
    if (!data.templates || data.templates.length < 100) break
    offset += 100
  }
  return all
}

async function main() {
  console.log(`Data center: ${DC}`)
  const existing = await listExisting()
  console.log(`Existing user templates: ${Object.keys(existing).length}`)

  const only = process.argv[2]
  const files = readdirSync(EMAILS_DIR)
    .filter(f => f.endsWith('.html') && f !== '_MASTER.html')
    .filter(f => !only || f === `${only}.html`)
  if (only && !files.length) throw new Error(`No emails/${only}.html`)
  const results = []

  for (const file of files.sort()) {
    const base = file.replace(/\.html$/, '')
    const name = NAME_MAP[base]
    if (!name) { console.log(`SKIP (no name mapping): ${file}`); continue }
    const html = readFileSync(join(EMAILS_DIR, file), 'utf8')
    try {
      if (existing[name]) {
        const t = await mc(`/templates/${existing[name]}`, { method: 'PATCH', body: JSON.stringify({ name, html }) })
        console.log(`UPDATED  ${name}  (id ${t.id}, responsive:${t.responsive})`)
        results.push({ file, name, id: t.id, action: 'updated' })
      } else {
        const t = await mc(`/templates`, { method: 'POST', body: JSON.stringify({ name, html }) })
        console.log(`CREATED  ${name}  (id ${t.id}, responsive:${t.responsive})`)
        results.push({ file, name, id: t.id, action: 'created' })
      }
    } catch (e) {
      console.error(`FAILED   ${name}: ${e.message}`)
      results.push({ file, name, error: e.message })
    }
  }

  console.log('\n=== SUMMARY ===')
  console.log(`created: ${results.filter(r => r.action === 'created').length}`)
  console.log(`updated: ${results.filter(r => r.action === 'updated').length}`)
  console.log(`failed:  ${results.filter(r => r.error).length}`)
}

main().catch(e => { console.error(e); process.exit(1) })
