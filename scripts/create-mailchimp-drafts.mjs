#!/usr/bin/env node
/**
 * Create one DRAFT campaign per template in Mailchimp.
 * - Attaches the existing audience as a placeholder (Mailchimp requires a list to
 *   create a campaign). Carlos changes the audience per draft before scheduling.
 * - Sets subject, preview text, From name, reply-to, and an internal title that
 *   includes the recommended send window.
 * - NEVER sends or schedules. Every campaign is left in "save" (draft) status.
 * - Idempotent: skips creating a draft whose internal title already exists.
 *
 * Usage: node scripts/create-mailchimp-drafts.mjs
 */
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

function getKey() {
  if (process.env.MAILCHIMP_API_KEY) return process.env.MAILCHIMP_API_KEY
  const env = readFileSync(join(ROOT, '.env.local'), 'utf8')
  const m = env.match(/^MAILCHIMP_API_KEY=(.+)$/m)
  if (!m) throw new Error('MAILCHIMP_API_KEY not found in .env.local')
  return m[1].trim().replace(/^["']|["']$/g, '')
}

const KEY = getKey()
const DC = KEY.split('-')[1]
const BASE = `https://${DC}.api.mailchimp.com/3.0`
const AUTH = 'Basic ' + Buffer.from(`anystring:${KEY}`).toString('base64')

const FROM_NAME = 'Carlos at Range and Restore'
const REPLY_TO = 'carlos@rangeandrestore.co.uk'
const AUDIENCE_ID = '942aa5d8ac' // placeholder; Carlos changes per draft before scheduling

async function mc(path, opts = {}) {
  const res = await fetch(BASE + path, {
    ...opts,
    headers: { Authorization: AUTH, 'Content-Type': 'application/json', ...(opts.headers || {}) },
  })
  const text = await res.text()
  let json; try { json = text ? JSON.parse(text) : {} } catch { json = { raw: text } }
  if (!res.ok) throw new Error(`${res.status} ${json.title || ''}: ${json.detail || text}`)
  return json
}

// templateName -> { subject, preview, send (recommended window) }
// templateName must match the NAME_MAP names in sync-mailchimp-templates.mjs
const CAMPAIGNS = {
  // Core lifecycle (evergreen — send as needed)
  'R&R — Welcome / Onboarding': { subject: 'Welcome to Range and Restore', preview: 'What to expect, and how to book your first session.', send: 'Evergreen / on signup' },
  'R&R — Newsletter / Recovery Notes': { subject: 'Recovery Notes from Range and Restore', preview: 'A recovery tip, and what is new in the clinic.', send: 'Evergreen / monthly' },
  'R&R — Re-engagement / Rebooking': { subject: 'It has been a while', preview: 'Your body misses good hands. Pick up where you left off.', send: 'Evergreen / lapsed clients' },
  // Community / collaboration (evergreen)
  'R&R — Community × The Dynamic Spud': { subject: 'Two Archway independents looking after you', preview: 'Recovery and good food, the same week in Archway.', send: 'Evergreen' },
  "R&R — Community × Ali's Quiff Barber": { subject: 'Looking after Archway, inside and out', preview: 'Sports massage on Junction Road, barbering up the road.', send: 'Evergreen' },
  'R&R — Community × NC Osteopathy': { subject: 'Whole-person care in North London', preview: 'Two complementary disciplines, honest referrals both ways.', send: 'Evergreen' },
  'R&R — Community × Sol Centre': { subject: 'Movement, rest and recovery in Archway', preview: 'From the yoga mat to the treatment room.', send: 'Evergreen' },
  'R&R — Community × Alaric Yoga': { subject: 'Movement, recovery and longevity', preview: 'Working side by side with Alaric Yoga.', send: 'Evergreen' },
  'R&R — Community × Reliable Scan': { subject: 'Scan and treatment under one roof', preview: 'Sharing the building at 130 Junction Road.', send: 'Evergreen' },
  'R&R — Community Roundup': { subject: 'Our Archway community', preview: 'The local independents we work with, and why.', send: 'Evergreen / quarterly' },
  // Service / conversion (evergreen)
  'R&R — Recovery Suite': { subject: 'Recover faster with the Recovery Suite', preview: 'Infrared sauna and Normatec compression in Archway.', send: 'Evergreen' },
  'R&R — Sports & Pain Relief': { subject: 'Get to the root of your pain', preview: 'Assessment-led sports and deep-tissue massage.', send: 'Evergreen' },
  'R&R — Marathon / Event Recovery': { subject: 'Marathon prep and recovery', preview: 'Pre-race preparation and post-race recovery.', send: 'Race season' },
  'R&R — Gift Cards & Bundles': { subject: 'Give the gift of recovery', preview: 'Gift cards and massage bundles.', send: 'Evergreen' },
  'R&R — Announcement (flexible)': { subject: 'News from Range and Restore', preview: 'A quick update from the clinic.', send: 'Flexible / reusable' },
  'R&R — Award / Prestige 2026': { subject: 'We have been named Clinic of the Year', preview: 'Recognised at the 2026/27 London and South East England Prestige Awards.', send: 'On award announcement' },
  'R&R — Gallery Showcase': { subject: 'A look inside Range and Restore', preview: 'The clinic, the Recovery Suite, and what to expect.', send: 'Evergreen' },
  'R&R — Meet the Team': { subject: 'Meet the team behind Range and Restore', preview: 'Carlos, Darael and Mateja. The qualified hands looking after you in Archway.', send: 'Evergreen / one-off introduction' },
  // Seasonal / holiday / event (dated)
  'R&R — Summer Bank Holiday': { subject: 'Before the bank holiday weekend', preview: 'Book in before we close for the long weekend.', send: 'approx 24 Aug 2026 (BH Mon 31 Aug)' },
  'R&R — Halloween': { subject: 'Do not let tight muscles haunt you', preview: 'An autumn nudge from the clinic.', send: 'approx 28 Oct 2026 (Halloween 31 Oct)' },
  'R&R — Bonfire Night': { subject: 'Cold nights, stiff muscles', preview: 'Looking after your body as it gets colder.', send: 'approx 3 Nov 2026 (Bonfire 5 Nov)' },
  'R&R — Black Friday': { subject: 'Gift cards and bundles this weekend', preview: 'A simple gift that gets used.', send: 'Fri 27 Nov 2026' },
  'R&R — Cyber Monday': { subject: 'The easiest gift to send', preview: 'Online gift cards, delivered instantly.', send: 'Mon 30 Nov 2026' },
  'R&R — Christmas': { subject: 'Merry Christmas from Range and Restore', preview: 'A thank you, gift cards, and our festive hours.', send: 'approx 15 Dec 2026' },
  'R&R — New Year': { subject: 'A fresh start for the new year', preview: 'Recovery as a routine, not a resolution.', send: 'approx 1 to 3 Jan 2027' },
  'R&R — New Year Reset / Blue Monday': { subject: 'The January reset', preview: 'Looking after your body and mind this month.', send: 'approx 18 Jan 2027 (Blue Monday)' },
  "R&R — Valentine's Day": { subject: 'Treat someone you love, or yourself', preview: 'Gift a session, or book the sauna for two.', send: 'approx 7 Feb 2027 (Valentine 14 Feb)' },
  'R&R — Mothering Sunday': { subject: 'Something Mum will actually use', preview: 'A gift card for Mothering Sunday.', send: 'approx 28 Feb 2027 (Mother Sun 7 Mar)' },
  "R&R — St Patrick's Day": { subject: 'Celebrating St Patrick in Archway', preview: 'Good Irish food next door, recovery round the corner.', send: 'approx 14 Mar 2027 (St Patrick 17 Mar)' },
  'R&R — Easter': { subject: 'Our Easter hours, and a spring reset', preview: 'When we are closed, and when we are back.', send: 'approx 22 Mar 2027 (Good Fri 26 Mar)' },
  "R&R — St George's Day": { subject: "A proper British treat for St George's Day", preview: 'Celebrating England with a sports massage.', send: 'approx 20 Apr 2027 (St George 23 Apr)' },
  'R&R — Marathon Day': { subject: 'Marathon day in London', preview: 'Recovery starts the moment you cross the line.', send: 'approx 20 Apr 2027 (Marathon 25 Apr)' },
  'R&R — Clocks Change': { subject: 'The clocks have changed', preview: 'A seasonal MOT for your body.', send: 'approx 28 Mar 2027 / 25 Oct 2026' },
  'R&R — Closure Notice (editable)': { subject: 'Our opening hours over the break', preview: 'When we are closed, and when we are back.', send: 'Reusable for any closure' },
  'R&R — Arsenal Champions (North London)': { subject: 'Champions of North London', preview: 'Celebrating with the local football community.', send: 'On the day Arsenal win the league' },
}

async function listTemplates() {
  const map = {}
  let offset = 0
  while (true) {
    const d = await mc(`/templates?type=user&count=100&offset=${offset}`)
    for (const t of d.templates || []) map[t.name] = t.id
    if (!d.templates || d.templates.length < 100) break
    offset += 100
  }
  return map
}

async function listDraftTitles() {
  const titles = new Set()
  let offset = 0
  while (true) {
    const d = await mc(`/campaigns?count=100&offset=${offset}`)
    for (const c of d.campaigns || []) titles.add(c.settings?.title)
    if (!d.campaigns || d.campaigns.length < 100) break
    offset += 100
  }
  return titles
}

async function main() {
  console.log(`Data center: ${DC} | audience (placeholder): ${AUDIENCE_ID}`)
  const templates = await listTemplates()
  const existingTitles = await listDraftTitles()
  const results = []

  for (const [tplName, cfg] of Object.entries(CAMPAIGNS)) {
    const tplId = templates[tplName]
    if (!tplId) { console.log(`SKIP (template not found): ${tplName}`); continue }
    const title = `${tplName}  [send: ${cfg.send}]`
    if (existingTitles.has(title)) { console.log(`EXISTS  ${title}`); results.push({ title, action: 'exists' }); continue }
    try {
      const c = await mc('/campaigns', {
        method: 'POST',
        body: JSON.stringify({
          type: 'regular',
          recipients: { list_id: AUDIENCE_ID },
          settings: {
            title,
            subject_line: cfg.subject,
            preview_text: cfg.preview,
            from_name: FROM_NAME,
            reply_to: REPLY_TO,
            template_id: tplId,
            auto_footer: false,
          },
        }),
      })
      console.log(`DRAFT   ${c.id}  ${title}`)
      results.push({ title, id: c.id, action: 'created' })
    } catch (e) {
      console.error(`FAILED  ${title}: ${e.message}`)
      results.push({ title, error: e.message })
    }
  }

  console.log('\n=== SUMMARY ===')
  console.log(`created: ${results.filter(r => r.action === 'created').length}`)
  console.log(`exists:  ${results.filter(r => r.action === 'exists').length}`)
  console.log(`failed:  ${results.filter(r => r.error).length}`)
  console.log('\nAll drafts are in DRAFT status. Nothing scheduled or sent.')
  console.log('Carlos: open each draft, choose the audience/segment, then Schedule for the date in its title.')
}

main().catch(e => { console.error(e); process.exit(1) })
