#!/usr/bin/env node
/**
 * Sync /emails/*.html to Mailchimp as reusable templates.
 * Reads MAILCHIMP_API_KEY from .env.local (format: key-usXX).
 * Creates new templates, or updates existing ones matched by name.
 * NEVER sends anything. Templates only.
 *
 * Usage: node scripts/sync-mailchimp-templates.mjs
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
  'welcome': 'R&R — Welcome / Onboarding',
  'newsletter': 'R&R — Newsletter / Recovery Notes',
  'reengagement': 'R&R — Re-engagement / Rebooking',
  'collab-dynamic-spud': 'R&R — Community × The Dynamic Spud',
  'collab-alis-quiff-barber': "R&R — Community × Ali's Quiff Barber",
  'collab-nc-osteopathy': 'R&R — Community × NC Osteopathy',
  'collab-sol-centre': 'R&R — Community × Sol Centre',
  'collab-alaric-yoga': 'R&R — Community × Alaric Yoga',
  'collab-reliable-scan': 'R&R — Community × Reliable Scan',
  'community-roundup': 'R&R — Community Roundup',
  'service-recovery-suite': 'R&R — Recovery Suite',
  'service-msk-ultrasound-massage': 'R&R — MSK Scan + Clinical Massage',
  'service-sports-pain': 'R&R — Sports & Pain Relief',
  'service-community-tuesday-clinic': 'R&R — Community Tuesday Clinic',
  'service-restore-memberships': 'R&R — Restore+ Memberships',
  'service-massage-bundles': 'R&R — Massage Bundles',
  'team-introduction': 'R&R — Meet the Team',
  'event-marathon': 'R&R — Marathon / Event Recovery',
  'gift-cards-bundles': 'R&R — Gift Cards & Bundles',
  'announcement': 'R&R — Announcement (flexible)',
  'announcement-carlos-annual-leave': 'R&R — Carlos Annual Leave (Aug 2026)',
  'award-prestige-2026': 'R&R — Award / Prestige 2026',
  'gallery-showcase': 'R&R — Gallery Showcase',
  // Seasonal / holiday / event (batch 2)
  'seasonal-christmas': 'R&R — Christmas',
  'seasonal-new-year': 'R&R — New Year',
  'seasonal-closure-notice': 'R&R — Closure Notice (editable)',
  'seasonal-black-friday': 'R&R — Black Friday',
  'seasonal-cyber-monday': 'R&R — Cyber Monday',
  'seasonal-valentines': "R&R — Valentine's Day",
  'seasonal-mothering-sunday': 'R&R — Mothering Sunday',
  'seasonal-fathers-day': "R&R — Father's Day",
  'seasonal-st-patricks': "R&R — St Patrick's Day",
  'seasonal-st-georges': "R&R — St George's Day",
  'seasonal-easter': 'R&R — Easter',
  'seasonal-new-year-reset': 'R&R — New Year Reset / Blue Monday',
  'seasonal-halloween': 'R&R — Halloween',
  'seasonal-bonfire-night': 'R&R — Bonfire Night',
  'seasonal-summer-bank-holiday': 'R&R — Summer Bank Holiday',
  'seasonal-clocks-change': 'R&R — Clocks Change',
  'seasonal-marathon-day': 'R&R — Marathon Day',
  'event-arsenal-champions': 'R&R — Arsenal Champions (North London)',
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

  const files = readdirSync(EMAILS_DIR).filter(f => f.endsWith('.html') && f !== '_MASTER.html')
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
