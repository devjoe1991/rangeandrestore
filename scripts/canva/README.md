# Canva Connect pipeline

Renders the Instagram posts in `content/instagram/posts.json` to PDF, then imports them into
Canva as **editable designs** inside a folder called `rangeandrestore`.

---

## What this can and can't do

The Connect API **cannot lay out a design.** `POST /v1/designs` only creates a blank canvas at a
given size, optionally with one image dropped in — there's no endpoint for placing text, setting
colours, or positioning elements.

`POST /v1/imports` **does** accept a PDF and convert it into an editable Canva design. That's the
route this pipeline takes:

```
posts.json → HTML (brand tokens) → headless Chrome → PDF → Canva import → editable design
```

**What you get:** designs in the right folder, at the right size, in the right colours and font,
that you can open and edit in Canva.

**The caveat:** PDF import fidelity isn't perfect. Text usually arrives as editable text boxes, but
Canva sometimes converts unusual glyphs to outlines, and grouping won't match what you'd get from
hand-building. Treat the imported designs as a very strong starting point, not as untouchable
finals. If a specific post needs to be pixel-perfect, rebuild that one by hand from the T1–T5
templates in `content/canva_plan.md`.

---

## One-time setup

### 1. Enable MFA on your Canva account

Canva won't let you create an integration without it.
Canva → Settings → Login & security → Login verification.

### 2. Create the integration

1. Go to the [Developer Portal](https://www.canva.com/developers/) → **Your integrations** →
   **Create an integration**.
2. Choose **Public**.

   > **Why not Private?** Private integrations require a **Canva Enterprise** plan. Public is the
   > right choice for a single-clinic setup. "Public" only means it *could* be listed for all Canva
   > users after review — you don't have to submit it. Unreviewed, it works fine against your own
   > account, which is all we need.

3. Accept the Developer Terms and create it.

### 3. Name it and get credentials

On **Configure your integration**:

- Set a name — `Range and Restore Content Pipeline` is fine.
- Copy the **Client ID**.
- Click **Generate secret** and copy it. **You can't view it again**, so save it now.

### 4. Set scopes

Under **Scopes**, tick exactly these:

| Scope | Why |
|---|---|
| `folder:read` | Check whether a folder already exists before creating it |
| `folder:write` | Create the `rangeandrestore` tree, move designs into it |
| `asset:read` | Read uploaded asset metadata |
| `asset:write` | Upload photos from `public/` |
| `design:content:write` | Import PDFs as designs |
| `design:meta:read` | Read design metadata after import |
| `profile:read` | `whoami`, to verify the connection |

Scopes are **not** implied — `asset:write` does not grant `asset:read`. Tick both.

### 5. Set the redirect URL

Under **Authentication** → **Authorized redirects**, add exactly:

```
http://127.0.0.1:3001/oauth/redirect
```

Must be `127.0.0.1`, not `localhost` — Canva rejects `localhost`.

### 6. Add credentials locally

Add to `.env.local` (already gitignored):

```sh
CANVA_CLIENT_ID=your-client-id
CANVA_CLIENT_SECRET=your-client-secret
```

---

## Running it

All commands need `--env-file=.env.local` so the credentials are loaded.

```sh
# One-time: authorise this machine. Opens a browser.
node --env-file=.env.local scripts/canva/canva.mjs auth

# Verify the connection
node --env-file=.env.local scripts/canva/canva.mjs whoami

# Create the rangeandrestore folder tree
node --env-file=.env.local scripts/canva/canva.mjs folders

# Render posts to PDF — no Canva account needed for this step
node scripts/canva/canva.mjs render

# Import the rendered PDFs into Canva
node --env-file=.env.local scripts/canva/canva.mjs push

# Or all three in sequence
node --env-file=.env.local scripts/canva/canva.mjs all
```

Limit any command to specific posts by passing IDs:

```sh
node scripts/canva/canva.mjs render A1 D1 G8
node --env-file=.env.local scripts/canva/canva.mjs push A1
```

**Start with one post.** Run `render A1` then `push A1`, open it in Canva, and check the import
quality before pushing all 55.

---

## Files

| Path | What it is |
|---|---|
| `canva.mjs` | CLI entry point |
| `lib/auth.mjs` | OAuth 2.0 PKCE flow, token cache and refresh |
| `lib/api.mjs` | Connect API client — rate limiting, async job polling |
| `lib/render.mjs` | HTML templates T1–T3 and the Chrome PDF renderer |
| `out/` | Rendered HTML + PDF (gitignored, regenerate any time) |
| `../../content/instagram/posts.json` | Design data — what gets rendered onto each post |
| `../../content/canva_plan.md` | Brand kit, colours, type scale, template specs |

Generated locally and gitignored: `.canva-tokens.json` (OAuth tokens, chmod 600),
`.canva-state.json` (folder and design IDs, so `folders` and `push` are safe to re-run).

---

## Adding a post

Add an entry to `content/instagram/posts.json`, then `render` and `push` it.

```jsonc
{
  "id": "A8",
  "slug": "short-kebab-slug",
  "template": "T2",            // T1 photo+headline · T2 poster/price · T3 carousel
  "format": "feed",            // feed 1080×1350 · square 1080×1080 · story 1080×1920
  "folder": "03-posts-feed",   // or 04-posts-carousel, 05-stories
  "eyebrow": "SMALL LIME LABEL",
  "headline": "The main line",
  "price": "£19",              // T2 only
  "priceUnit": "45 minutes",   // T2 only
  "sub": "Supporting line.",   // T1/T2
  "cta": "BOOK ONLINE",        // T2/T3
  "photo": "path/relative/to/public.jpg",
  "slides": [                  // T3 only
    { "heading": "Slide title", "body": "Slide body copy." }
  ]
}
```

The caption and hashtags for each post live in `content/instagram/content-pack.md`, keyed by the
same ID. They deliberately aren't in the JSON — captions get pasted into Instagram, not rendered
onto the image.

---

## Troubleshooting

**`CANVA_CLIENT_ID and CANVA_CLIENT_SECRET must be set`**
You forgot `--env-file=.env.local`, or the values aren't in that file.

**`Port 3001 is in use`**
Something else is on 3001. Free it, or change `REDIRECT_PORT` in `lib/auth.mjs` **and** add the
matching redirect URL in the Developer Portal.

**`invalid_request` / `redirect_uri_mismatch` during auth**
The redirect URL in the Portal doesn't match exactly. It must be
`http://127.0.0.1:3001/oauth/redirect` — no trailing slash, not `localhost`.

**Fonts look wrong in the PDF**
Chrome fetches DM Sans from Google Fonts at render time, so the render step needs internet. If it's
consistently falling back, raise `--virtual-time-budget` in `lib/render.mjs`.

**Chrome not found**
Set `CHROME_PATH` to your Chrome binary:
```sh
CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" node scripts/canva/canva.mjs render
```

**Rate limited**
The client throttles to ~19 requests/minute against Canva's documented 20/min limit, and honours
`Retry-After` if it still hits one. A full 55-post push takes roughly 6–8 minutes. That's expected.

**Imported design is the wrong size**
The PDFs are 810×1012.5pt, which is exactly 1080×1350px at 96 dpi — the correct physical
description. If Canva imports at a different pixel size, use Canva's own Resize on the design
rather than changing the renderer.
