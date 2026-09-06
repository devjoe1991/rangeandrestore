# Range and Restore — Email Templates

Branded, email-safe HTML campaign templates synced to Mailchimp via
`scripts/sync-mailchimp-templates.mjs`. Authored here (version-controlled),
then pushed to Mailchimp as **templates**. Nothing is ever sent automatically.
Preview and test-send yourself from the Mailchimp UI.

## The library (16 templates, all live in Mailchimp, account us20)

**Core lifecycle**
- `welcome.html` — Welcome / onboarding (photo strip + FAQ)
- `newsletter.html` — Recurring "Recovery Notes" (merge-field content slots)
- `reengagement.html` — Win-back / rebooking, premium, no offer

**Retention / triggered** (added 6 Sep 2026 — until then every template was a
broadcast, so nothing in the library was triggered by client behaviour)
- `aftercare-first-visit.html` — 24 to 48h after a first session. Trigger on `VISITS` = 1.
- `birthday.html` — Uses the `BIRTHDAY` merge field. Deliberately carries no offer.
- `milestone-visits.html` — Thanks regulars and surfaces bundles / Restore+. Trigger on a `VISITS` threshold.

All three depend on live `VISITS` / `LVISITDATE` / `BIRTHDAY` data, which means
the Jane sync has to be running (it is currently a stale one-off Dec 2025
import). They are templates only. The automations themselves have to be built in
Mailchimp's Customer Journey builder, which the API does not expose.

**Community / collaboration** (one per real partner, punchy `×` header)
- `collab-dynamic-spud.html` — The Dynamic Spud (logo image)
- `collab-alis-quiff-barber.html` — Ali's Quiff Barber (text tile)
- `collab-nc-osteopathy.html` — NC Osteopathy (text tile)
- `collab-sol-centre.html` — Sol Centre (text tile, SVG not email-safe)
- `collab-alaric-yoga.html` — Alaric Yoga (framed photo)
- `collab-reliable-scan.html` — Reliable Scan (logo image)
- `community-roundup.html` — Overall "Our Archway Community" (logo grid + why local partners matter)

**Service / conversion**
- `service-recovery-suite.html` — Sauna + Normatec spotlight (photo strip + FAQ)
- `service-sports-pain.html` — Sports & deep-tissue / pain relief (photo strip + FAQ)
- `service-community-tuesday-clinic.html` — Community Tuesday Clinic (60 min £60 / 90 min £85, every Tuesday; community-focused, not a discount)
- `service-restore-memberships.html` — Restore+ Memberships (sauna £49/£79/£119 + performance £69/£130/£99/£179 price tiles; CTA is call/email, memberships are NOT bookable online)
- `service-massage-bundles.html` — Massage Bundles (5/10 × 60 min £350/£650, 5/10 × 90 min £500/£950; save + per-session + validity; CTA to Jane `#packages`)
- `event-marathon.html` — Marathon prep & recovery (reusable each season)
- `gift-cards-bundles.html` — Gift cards + bundles
- `announcement.html` — Flexible "Now open" style, merge-field slots
- `gallery-showcase.html` — Photo-led clinic showcase (swipe strips + FAQ)

**Seasonal / holiday / event** (UK calendar, dates editable, themed per occasion)
- `seasonal-christmas.html` · `seasonal-new-year.html` · `seasonal-new-year-reset.html` (Blue Monday)
- `seasonal-valentines.html` · `seasonal-mothering-sunday.html` · `seasonal-fathers-day.html`
- `seasonal-st-patricks.html` (Dynamic Spud tie-in) · `seasonal-st-georges.html` · `seasonal-easter.html`
- `seasonal-halloween.html` · `seasonal-bonfire-night.html` · `seasonal-summer-bank-holiday.html`
- `seasonal-clocks-change.html` · `seasonal-marathon-day.html`
- `seasonal-black-friday.html` · `seasonal-cyber-monday.html` (commercial, editable `*|OFFER|*` slot)
- `seasonal-closure-notice.html` — universal editable closure (`*|CLOSURE_REASON|*`, `*|CLOSED_FROM|*`, `*|REOPEN_DATE|*`, `*|CLOSURE_NOTE|*`)
- `event-arsenal-champions.html` — North London / football-community celebration (red accents, no club marks)

`_MASTER.html` is the shared skeleton (header/hero/footer + the reusable photo block). Not pushed.

## Photo blocks: responsive grid + swipe
Photo blocks use a hybrid pattern: `.pcell` inline-block cells at ~48% width that wrap to a
**2-up grid in every client** (Gmail/Outlook included) and **stack to 1-up under 430px**, inside an
`overflow-x:auto` container so Apple Mail/iOS can still swipe. No `white-space:nowrap` strips
(those clipped in Gmail). Caption: "Tap a photo to view". The `.pcell` media queries live in each
file's `<style>` and in `_MASTER.html`.

## Design tokens (match the site)
forest `#1a3d3a` · forest-deep `#122a28` · teal `#2ab4b8` · dark-teal `#1a9aa0`
· lime `#7dd94a` · body `#1a2330` · muted `#4f5866` · page-bg `#FCFBF9`
· sage `#F2EDE4` · card border `#E9E5DE`. Font: DM Sans → Arial/Helvetica.
Pill buttons (`border-radius:9999px`). 600px, mobile-responsive, dark-mode aware.

## House rules (baked into every template)
- Logo on every email (colour logo on a cream pill, forest header).
- NO `@import` (breaks Mailchimp's CSS parser — this caused the original error).
- NO em-dashes. NO AI bloat. NO exclamation marks. British spelling.
- Name-optional greeting: `*|IF:FNAME|*Hi *|FNAME|*,*|ELSE:|*Hi there,*|END:IF|*`
- Footer: address, phone, email, BTEC L5 + 5★ trust line, `*|UNSUB|*`, `*|UPDATE_PROFILE|*`.
- Photo strips: horizontal scroll (swipe on Apple Mail/iOS, tidy row elsewhere).
- FAQ blocks: static styled Q&A (accordions do not work in most email clients).

## Sending rules (added 6 Sep 2026, from Search Console + Mailchimp report data)

**Do NOT re-send a campaign to non-openers.** This was tried on five campaigns
between June and August 2026 and failed every time:

| Re-send | Open | Click |
| --- | --- | --- |
| Recovery Suite | 13.2% | 1.9% |
| Meet the Team | 8.3% | 0% |
| Community Tuesday | 20.4% | 0% |
| Restore+ Memberships | 8.0% | 0% |
| Carlos Annual Leave | 9.1% | 0% |

Against a 37.6% list open rate, every one of those underperformed by 2-4x and
four produced zero clicks. Unsubscribes went 12 → 14 → 18 → 21 across the same
months, having sat flat at 3-8 for the six months before. The list gained 12 net
subscribers in nine months and lost 18 to unsubscribes.

**Segment before sending.** All 37 drafts currently target all 90 subscribers,
including `reengagement.html` ("Re-engagement / Rebooking — lapsed clients"),
which is aimed at the whole list rather than lapsed clients. Engagement is
strongly bimodal: a core opens 85-100% while a tail sits at 0-12%. Mailing the
tail repeatedly is what converts it into unsubscribes.

**What actually performs.** The two best campaigns were operational, not
promotional: "We've moved — new clinic location" (56% open, 7.1% click — triple
any promo) and "I am away from 14 August" (62.5% open). Restore+ Memberships
managed 1.1% and Community Tuesday 1.2%. Specific, personal and time-bound beats
campaign-style content on this list by roughly 3-6x.

## Booking links (Jane), from `lib/constants.ts`
- General / all services: `https://rangeandrestoresportsmassage.janeapp.co.uk/#/list`
- Recovery Suite:         `…/#/recovery-suite`
- Gift cards:             `…/online_gift_cards/new`
- Bundles / packages:     `…/#packages`

## Images (live site, absolute https)
All under `https://rangeandrestore.co.uk`. Key files: `/rangeandrestorelogo.png`,
`/sports-massage-soft-tissue-therapy-archway-north-london.jpeg`,
`/vidalux-infrared-sauna-recovery-suite-archway-north-london.jpg`,
`/recovery-suite/normatec-compression-therapy-archway.jpg`,
`/recovery-suite/recovery-suite-room-archway.jpg`,
`/range-and-restore-sports-massage-clinic-130-junction-road-archway-london.jpeg`,
`/cycling-recovery-sports-massage-archway-north-london.jpg`,
`/Gallery/IMG_1828.jpeg`, `/Gallery/IMG_1552.jpeg`, `/Gallery/IMG_1311.jpeg`.
Partner logos: `/the_dynamic_spud_logo.png`, `/Reliabale-scan.webp`, `/alaric_yoga.jpg`.

## Syncing to Mailchimp
Edit any `.html` here, then run:

```
node scripts/sync-mailchimp-templates.mjs
```

It reads `MAILCHIMP_API_KEY` from `.env.local`, creates new templates and
updates existing ones by name (mapping in the script). Byte-exact, no
transcription risk. It NEVER sends. Templates only.
