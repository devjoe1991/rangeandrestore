# Community Partner Page Template

How to write a new `/community/[partner-slug]` page that matches the vibe of the Dynamic Spud page, holds up for SEO, and reads like Joe, not like a marketing agency.

Use this as the starting point for every new partner. Copy the Spud page, then work through this doc section by section.

---

## 1. The vibe in one paragraph

We are a local clinic talking about a local business we genuinely work with. We are not selling them, we are not selling ourselves. We are explaining why two small independents in Archway look after each other and what that looks like in a normal week. Warm, concrete, neighbourly. No marketing voice. If a sentence could appear on any business's website, rewrite it so it could only appear on Range and Restore's.

Think of the reader as a regular Archway local who already knows both businesses by sight, plus a Google crawler reading the page for ranking signals. Both should feel at home.

---

## 2. Hard rules (non-negotiable)

These apply to every word on the page.

- **No em-dashes.** Ever. Use commas, full stops, or rewrite the sentence. Search the finished page for the em-dash character (Unicode U+2014) before publishing. There should be zero matches. Run: `grep -P '\x{2014}' app/community/[slug]/page.tsx`.
- **No AI bloat.** No "in today's world". No "discover the power of". No "passionate about". No three-adjective stacks. No hedging filler. No buzzwords.
- **Short sentences.** If a sentence is long, break it. Two short sentences almost always beat one long one.
- **Concrete nouns.** Junction Road, not "our location". Karen, not "the owner". Wednesday, not "midweek".
- **Real people, real places.** Name the owner. Name the street. Name the postcode. Name the tube stop. Name the day of the week. Specificity is the voice.
- **One continuous thought per section.** Each section is a small paragraph, not a benefits list. Bullet points are for the index page, not the partnership story.
- **Editorial outbound link.** The link to the partner site must NOT be `rel="nofollow"`. That is the entire point of the page.

---

## 3. The page structure (every partner uses this)

The Spud page is the template. Every section has a job. Don't add sections that don't do work.

### Block 1. Hero band (top of page, sage background)

- Small uppercase eyebrow: `Local Partner · [Their neighbourhood]`
- H1: `[Their Name] and Range and Restore` (or `Range and Restore × [Their Name]` if it reads better)
- One-line subhead. Plain English summary of the relationship. Around 15 to 25 words.

The H1 is doing SEO work. It associates two brand names in one phrase, which is what Google needs to understand the relationship. Don't get cute with it.

### Block 2. Header tile (the emerald card or logo)

The card on the community index page always uses the naming format `Range and Restore × [Their Name]`, exactly like the Dynamic Spud card. This is the rule, not a fallback.

- If you have the partner's logo, use it on a sage background, but the card text/label still reads `Range and Restore × [Their Name]`.
- If you don't have a logo yet, use the emerald-green text tile already built into [PartnerCard](../components/PartnerCard.tsx) with the same `Range and Restore × [Their Name]` text.

The `×` is the multiplication sign (Unicode U+00D7), not the letter `x`.

### Block 3. About [Partner Name]

One short paragraph. Three to five sentences. Cover:

- What they actually do.
- Where they sit (street, neighbourhood, tube).
- One specific detail that proves you've actually been there. (The kind of food they do. The class they run. The hours. The atmosphere.)
- A line that signals they're a known quantity in the area.

Do NOT review them. Do NOT list their menu or services. Do NOT use words like "vibrant", "welcoming", "passionate". One real detail beats five generic adjectives.

### Block 4. Why we work together

One paragraph. This is where the partnership angle lives. Cover:

- The natural overlap. What does a normal client week look like with both businesses in it?
- Shared values. Both small. Both independent. Both serving the same community.
- A statement about the local community, not a sales pitch.

This is where you mention the wider community without it sounding like keyword stuffing. Archway, North London, the type of clients you both share.

### Block 5. How we look out for each other

One paragraph. This is the trust signal. Cover:

- Honest referrals, both ways. Be specific about when we send people their way (after a session, when clients ask about food, etc.) and when they send people ours.
- No formal scheme. No vouchers, no commissions, no marketing dance.
- The phrase "just neighbours" or similar. The relationship is human, not transactional.

End with one short follow-up sentence that lifts the whole thing into a community statement. Look at the Spud page for the cadence: "That's what we mean when we say we're rooted in the Archway community. It isn't a slogan. It's the actual day to day."

### Block 6. Visit [Partner Name] CTA (emerald-green block)

A bright green call-to-action block with:

- H2: `Visit [Partner Name]` (short and direct)
- One sentence telling locals where they are and what they should do (stop in for a class, grab lunch, etc.)
- A button labelled `Visit [theirdomain.com]` linking to their site. `target="_blank"`, `rel="noopener"`, NO `nofollow`.

This is the backlink. Make it prominent. Make the anchor text descriptive (their domain or their brand name, not "click here").

### Block 7. Related links

Three or four internal links:

- "Back to Our Archway Community" pointing to `/community`
- "About Carlos and Range and Restore" pointing to `/about`
- One or two contextual links that make sense for this partner. (For a café, maybe areas served. For a yoga studio, maybe the recovery suite. For a clinic, maybe MLD or clinical massage.)

---

## 4. SEO checklist for the page

Each partner page needs all of this. Skipping any of it leaves SEO value on the table.

### Metadata (via `buildMetadata`)

- **Title:** `[Partner Name] and Range and Restore | Archway Local Partners`
- **Description:** Around 150 to 160 characters. Mention both brand names, Archway, North London, and the type of partnership. Plain English.
- **Path:** `/community/[partner-slug]`

### Schema.org JSON-LD

Two scripts at the top of the page, exactly like the Spud page does it.

1. **Organization schema** for the partner.
   - `@type: 'Organization'`
   - `name`, `url` (their site), short `description`
   - `areaServed`: `{ '@type': 'Place', name: 'Archway, London N19' }` (or their actual neighbourhood)
   - `memberOf`: `{ '@id': `${BASE_URL}/#business` }`. This is the critical part. It links the partner to our `businessSchema` and declares the partnership to crawlers.

2. **BreadcrumbList schema** via `buildBreadcrumbs` from [lib/seo.ts](../lib/seo.ts).
   - First crumb: `Community` → `/community`
   - Second crumb: `[Partner Name]` → `/community/[partner-slug]`

### Keyword presence (natural, not stuffed)

Make sure these phrases appear somewhere on the page, used in normal sentences:

- The partner's brand name (multiple times, in different positions)
- "Archway"
- "North London"
- Their neighbourhood if different from Archway
- "Range and Restore" (multiple times)
- One of: "local independent", "local community", "rooted in", "neighbour", "small businesses"

If a phrase has to be forced in, leave it out. Google has been smart about this for years.

### Outbound link rules

- `target="_blank"` so the user keeps our tab.
- `rel="noopener"` for the security baseline.
- NO `rel="nofollow"`. The link must pass authority. That is the entire reason for the page.
- Anchor text should be their domain or their brand name. NEVER "click here", NEVER "visit website".

### Sitemap

Add the new partner URL to [app/sitemap.ts](../app/sitemap.ts):

```ts
{
  url: `${BASE_URL}/community/[partner-slug]`,
  lastModified,
  changeFrequency: 'monthly',
  priority: 0.6,
},
```

### Index page

Add a new entry to the `partners` array in [app/community/page.tsx](../app/community/page.tsx). Either provide a `logo` path under `/public/partners/[partner-slug].png` or rely on the emerald `headerText` tile. Either way, the card's display label follows the `Range and Restore × [Their Name]` format, matching the Dynamic Spud card.

#### Card blurb formula (IMPORTANT)

Every card on the community index page uses a one-or-two-sentence blurb that names both businesses up front and ties them together with what we jointly deliver. This is the intro punch. No "Karen's independent café" style soft openers, no description that could sit on the partner's own About page. The card has to say what the partnership is for, in plain words, in the first six words.

**Formula (sentence 1):** `Range and Restore and [Partner Name] bring you [the shared benefit, in concrete nouns].`

**Formula (sentence 2, optional):** One short follow-on that names a specific detail. The neighbourhood, the type of food, the type of class, the street. Anchors the partnership in place.

**Examples already on the site:**

- The Dynamic Spud: *"Range and Restore and The Dynamic Spud bring you good health, real recovery, and hearty, vital Irish food from Dublin to Archway. Two independents looking after the same North London community."*
- Sol Centre: *"Range and Restore and Sol Centre bring you health and wellbeing in Archway. Movement, rest and recovery under one community, from the yoga mat on Fairbridge Road to the treatment room on Junction Road."*

**Rules:**

- Lead with both names in the first sentence. Do not start with the partner's name alone, or a generic descriptor of them.
- The shared benefit must be specific to this partnership. "Good food and good recovery" beats "wellness in the community". "Movement, rest and recovery" beats "health and wellbeing".
- Around 25 to 40 words total. If it's longer, cut it.
- No em-dashes. No "passionate about", no "vibrant", no three-adjective stacks.
- Name a place if you can. A street, a neighbourhood, a tube stop. Specificity is the voice.

---

## 5. Writing the body copy, step by step

Open the Spud page as a reference. Then fill out a working doc with these prompts. The answers become the page.

1. **Name and category.** Who are they and what are they in one sentence? ("Karen's independent café in Archway.")
2. **The specific detail.** Name one thing only a regular would know. (The food. The opening hours. The decor. The vibe of the room.)
3. **The natural overlap.** Why does a Range and Restore client end up in their place, or vice versa? Describe a normal week.
4. **The shared values line.** What do you have in common beyond geography? Small. Independent. Family-run. Run by a single person. Serving the same neighbourhood.
5. **The referral pattern.** When do we send people their way? When do they send people ours? Be specific. ("When clients ask where to eat after a session.")
6. **The closer.** One short sentence that lifts the partnership into a community statement. The Spud closer is: "That's what we mean when we say we're rooted in the Archway community. It isn't a slogan. It's the actual day to day."

Write these out plain. Then drop them into the page structure. Then re-read everything aloud. If a sentence sounds like LinkedIn, rewrite it.

---

## 6. Pre-publish checklist

Run through this before merging.

- [ ] No em-dashes anywhere in the page (`grep -P '\x{2014}' app/community/[slug]/page.tsx` returns nothing).
- [ ] No AI bloat phrases. Read the page aloud. If anything feels generic, rewrite.
- [ ] The partner's name appears in the H1, body, and CTA button.
- [ ] Archway and North London are mentioned naturally.
- [ ] The outbound link has `target="_blank"`, `rel="noopener"`, and does NOT have `nofollow`.
- [ ] Both JSON-LD scripts (Organization + BreadcrumbList) are at the top of the page.
- [ ] `memberOf` in the Organization schema points to `${BASE_URL}/#business`.
- [ ] The partner is in the `partners` array in [app/community/page.tsx](../app/community/page.tsx).
- [ ] The partner URL is in [app/sitemap.ts](../app/sitemap.ts).
- [ ] Logo file is in `/public/partners/[partner-slug].png` (or the emerald `headerText` tile is used as a fallback).
- [ ] `npm run build` passes.
- [ ] Page renders in both light and dark mode using the existing theme toggle.
- [ ] Page is responsive at mobile, tablet, and desktop widths.

After deploy:

- [ ] Submit the new URL in Google Search Console for indexing.
- [ ] Email the partner the live link so they can backlink to it from their site. Their inbound link is what closes the loop.

---

## 7. Quick reference: file paths

| Thing | Path |
| --- | --- |
| Index page | [app/community/page.tsx](../app/community/page.tsx) |
| Template subpage to copy | [app/community/the-dynamic-spud/page.tsx](../app/community/the-dynamic-spud/page.tsx) |
| Card component | [components/PartnerCard.tsx](../components/PartnerCard.tsx) |
| SEO helpers | [lib/seo.ts](../lib/seo.ts) |
| Sitemap | [app/sitemap.ts](../app/sitemap.ts) |
| Logo directory | [public/partners/](../public/partners/) |

---

## 8. One more thing

Every partner page should feel written by someone who actually drinks coffee at the café, takes the yoga class, or has been to the bar after work. If you don't have that connection yet, build it first. The page is supposed to be the evidence of a real partnership, not the start of one.

The SEO works because the writing is real. Skip the real bit and the rest of it stops working too.
