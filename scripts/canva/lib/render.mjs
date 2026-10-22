// Renders post data (content/instagram/posts.json) to PNG/PDF via headless Chrome.
//
// Design direction: loud. Type fills the frame edge to edge, key words sit in a lime
// highlighter bar, badges are tilted. Minimal whitespace — the earlier airy version
// read as a design-system demo rather than a clinic chasing bookings.
//
// Colours are the site's own tokens from app/globals.css. See content/canva_plan.md.

import fs from 'node:fs/promises'
import path from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { REPO_ROOT } from './auth.mjs'

const run = promisify(execFile)

const CHROME =
  process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

export const OUT_DIR = path.join(REPO_ROOT, 'scripts/canva/out')
// Upload-ready PNGs land here, separate from the PDF/HTML working files.
export const PNG_DIR = path.join(REPO_ROOT, 'content/instagram/posts')
const PUBLIC_DIR = path.join(REPO_ROOT, 'public')

// --- brand tokens (app/globals.css) ---------------------------------------
const C = {
  green: '#1a3d3a',
  greenDark: '#122a28',
  teal: '#0f767a',
  lime: '#7dd94a',
  cream: '#f5fbfc',
  bg: '#FCFBF9',
  sand: '#F7F5F0',
  ink: '#1a2330',
  muted: '#4f5866',
  border: '#E9E5DE',
  nearBlack: '#0d1a18',
}

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Strip ==highlight== markers to measure real text length. */
const plain = (s = '') => String(s).replace(/==/g, '')

/**
 * Render ==marked== spans as a lime highlighter bar.
 * box-decoration-break keeps the bar intact when the span wraps across lines.
 */
function hl(text, bg = C.lime, fg = C.nearBlack) {
  return esc(text).replace(
    /==(.+?)==/g,
    `<span style="background:${bg};color:${fg};padding:.01em .13em;margin:0 -.05em;
      border-radius:8px;box-decoration-break:clone;-webkit-box-decoration-break:clone">$1</span>`
  )
}

/** Scale the headline so long and short lines both fill the frame. */
function headlineSize(text, base = 1) {
  const n = plain(text).length
  const px = n < 18 ? 168 : n < 28 ? 146 : n < 42 ? 122 : n < 58 ? 104 : n < 78 ? 88 : 76
  return Math.round(px * base)
}

/** Inline an image as a data URI — headless Chrome's file:// sibling access is unreliable. */
async function dataUri(relPath) {
  const abs = path.join(PUBLIC_DIR, relPath)
  const ext = path.extname(abs).toLowerCase()
  const mime = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg'
  const bytes = await fs.readFile(abs)
  return `data:${mime};base64,${bytes.toString('base64')}`
}

const HANDLE = `<div style="position:absolute;right:56px;bottom:44px;color:#ffffff8c;
  font-size:26px;font-weight:700;letter-spacing:.02em">@rangeandrestore</div>`

/** Tilted sticker badge — the main thing that stops this reading as a template. */
const badge = (text, { bg = C.lime, fg = C.nearBlack, rotate = -3, size = 30 } = {}) =>
  `<span style="display:inline-block;transform:rotate(${rotate}deg);background:${bg};color:${fg};
    font-size:${size}px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;
    padding:14px 26px;border-radius:10px">${esc(text)}</span>`

function shell(pages, w, h) {
  return `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700;9..40,800&display=swap" rel="stylesheet">
<style>
  @page { size: ${w}px ${h}px; margin: 0; }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:'DM Sans',system-ui,sans-serif; -webkit-font-smoothing:antialiased; }
  .page { width:${w}px; height:${h}px; position:relative; overflow:hidden;
          page-break-after:always; break-after:page; }
  .page:last-child { page-break-after:auto; break-after:auto; }
  /* 1.06 not 0.94 — highlight bars have vertical padding and collide at tighter leading. */
  .hl { font-weight:800; text-transform:uppercase; line-height:1.06; letter-spacing:-.035em; }
</style></head><body>${pages.join('')}</body></html>`
}

// --- T1: photo, heavy darken, headline filling the lower frame -------------
async function T1(post, w, h) {
  const img = post.photo ? await dataUri(post.photo) : null
  const size = headlineSize(post.headline, 0.94)

  return `<div class="page" style="background:${C.nearBlack}">
    ${img ? `<img src="${img}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">` : ''}
    <!-- Flat darken lifts contrast everywhere; the ramp anchors the type block. -->
    <div style="position:absolute;inset:0;background:${C.nearBlack};opacity:.28"></div>
    <div style="position:absolute;inset:0;background:linear-gradient(to top,
      ${C.nearBlack}fa 0%, ${C.nearBlack}f0 22%, ${C.nearBlack}c9 40%,
      ${C.nearBlack}80 56%, ${C.nearBlack}2b 72%, ${C.nearBlack}00 88%)"></div>

    ${post.eyebrow ? `<div style="position:absolute;left:56px;top:64px">${badge(post.eyebrow)}</div>` : ''}

    <div style="position:absolute;left:56px;right:56px;bottom:${post.cta ? 152 : 96}px">
      <div class="hl" style="color:#fff;font-size:${size}px">${hl(post.headline)}</div>
      ${post.sub ? `<div style="color:#ffffffe6;font-size:36px;line-height:1.35;margin-top:26px;max-width:26ch">${esc(post.sub)}</div>` : ''}
    </div>

    ${
      // Photo posts need the price and location too, or they read as a mood board.
      post.cta
        ? `<div style="position:absolute;left:0;right:0;bottom:0;background:${C.lime};
             padding:30px 56px;display:flex;align-items:center;justify-content:space-between">
             <span style="color:${C.nearBlack};font-size:32px;font-weight:800;
               text-transform:uppercase;letter-spacing:-.01em">${esc(post.cta)}</span>
             <span style="color:${C.nearBlack}b3;font-size:24px;font-weight:700">@rangeandrestore</span>
           </div>`
        : HANDLE
    }
  </div>`
}

// --- T2: poster / price, type edge to edge --------------------------------
async function T2(post, w, h) {
  const img = post.photo ? await dataUri(post.photo) : null
  // With a photo the text column is ~55% width, so the headline needs to come down.
  const size = headlineSize(post.headline, img ? 0.74 : 0.92)

  return `<div class="page" style="background:${C.nearBlack}">
    ${
      img
        ? `<img src="${img}" style="position:absolute;right:0;top:0;width:46%;height:100%;object-fit:cover">
           <div style="position:absolute;right:0;top:0;width:62%;height:100%;
             background:linear-gradient(to right,${C.nearBlack} 26%,${C.nearBlack}d9 52%,${C.nearBlack}40 100%)"></div>`
        : ''
    }

    <div style="position:absolute;left:56px;top:56px;bottom:${post.cta ? 148 : 56}px;
      ${img ? 'right:40%' : 'right:56px'};display:flex;flex-direction:column;justify-content:space-between">
      <div>
        ${post.eyebrow ? `<div style="margin-bottom:34px">${badge(post.eyebrow)}</div>` : ''}
        <div class="hl" style="color:#fff;font-size:${size}px">${hl(post.headline)}</div>
      </div>
      <div>
        ${post.price ? `<div class="hl" style="color:${C.lime};font-size:190px;letter-spacing:-.05em;line-height:.86">${esc(post.price)}</div>` : ''}
        ${post.priceUnit ? `<div style="color:#ffffffa6;font-size:34px;font-weight:600;margin-top:12px">${esc(post.priceUnit)}</div>` : ''}
        ${post.sub ? `<div style="color:${C.cream};font-size:36px;line-height:1.35;margin-top:26px;max-width:24ch">${esc(post.sub)}</div>` : ''}
      </div>
    </div>

    ${
      post.cta
        ? `<div style="position:absolute;left:0;right:0;bottom:0;background:${C.lime};
             padding:34px 56px;display:flex;align-items:center;justify-content:space-between">
             <span style="color:${C.nearBlack};font-size:40px;font-weight:800;
               text-transform:uppercase;letter-spacing:-.01em">${esc(post.cta)}</span>
             <span style="color:${C.nearBlack}b3;font-size:26px;font-weight:700">@rangeandrestore</span>
           </div>`
        : HANDLE
    }
  </div>`
}

// --- T3: carousel — hook cover, numbered slides, CTA outro ----------------
async function T3(post, w, h) {
  const total = (post.slides?.length || 0) + 2
  const size = headlineSize(post.headline, 1)

  const cover = `<div class="page" style="background:${C.nearBlack}">
    <div style="position:absolute;left:56px;right:56px;top:50%;transform:translateY(-54%)">
      <div class="hl" style="color:#fff;font-size:${size}px">${hl(post.headline)}</div>
    </div>
    <div style="position:absolute;left:56px;bottom:56px">${badge('swipe →', { rotate: -4, size: 34 })}</div>
    <div style="position:absolute;right:56px;bottom:60px;color:#ffffff8c;font-size:26px;font-weight:700">
      1/${total} · @rangeandrestore
    </div>
  </div>`

  const slides = (post.slides || []).map((s, i) => `<div class="page" style="background:${C.bg}">
    <!-- Oversized ghost numeral: gives each slide an anchor without adding clutter. -->
    <!-- Mostly cropped off-frame and low opacity, so body copy stays readable over it. -->
    <div style="position:absolute;right:-150px;bottom:-230px;font-size:620px;font-weight:800;
      color:${C.lime};opacity:.2;line-height:1;letter-spacing:-.06em">${i + 1}</div>

    <div style="position:absolute;left:56px;right:56px;top:50%;transform:translateY(-52%)">
      <div style="width:120px;height:12px;background:${C.teal};margin-bottom:40px"></div>
      <div class="hl" style="color:${C.ink};font-size:${headlineSize(s.heading, 0.9)}px;
        text-transform:none;letter-spacing:-.03em;line-height:1.0">${hl(s.heading, C.lime, C.ink)}</div>
      <div style="color:${C.ink};opacity:.72;font-size:44px;line-height:1.35;margin-top:30px;font-weight:500">${esc(s.body)}</div>
    </div>

    <div style="position:absolute;right:56px;bottom:56px;color:${C.muted};font-size:26px;font-weight:700">
      ${i + 2}/${total}
    </div>
  </div>`)

  const outro = `<div class="page" style="background:${C.green}">
    <div style="position:absolute;left:56px;right:56px;top:50%;transform:translateY(-58%)">
      <div class="hl" style="color:#fff;font-size:104px">Book it.</div>
      <div style="color:${C.lime};font-size:44px;font-weight:800;margin-top:26px">
        ${esc(post.cta || 'BOOK ONLINE')}
      </div>
      <div style="color:#ffffffa6;font-size:32px;line-height:1.5;margin-top:40px">
        130 Junction Road, Archway N19 5LB<br>07890 716154
      </div>
    </div>
    <div style="position:absolute;left:56px;bottom:56px">${badge('link in bio', { rotate: -3 })}</div>
    ${HANDLE}
  </div>`

  return [cover, ...slides, outro]
}

const TEMPLATES = { T1, T2, T3 }

/** Build every page of a post as an array of HTML strings (carousels have several). */
async function buildPages(post, fmt) {
  const build = TEMPLATES[post.template]
  if (!build) throw new Error(`${post.id}: unknown template "${post.template}"`)
  const pages = await build(post, fmt.width, fmt.height)
  return Array.isArray(pages) ? pages : [pages]
}

/**
 * Render a post to PNG — one file per slide, at exact Instagram pixel dimensions.
 * This is what you upload. Returns the PNG paths in upload order.
 */
export async function renderPostPNG(post, formats) {
  const fmt = formats[post.format] || formats.square
  const pages = await buildPages(post, fmt)
  await fs.mkdir(PNG_DIR, { recursive: true })
  await fs.mkdir(OUT_DIR, { recursive: true })

  const base = `${post.id}-${post.slug}`
  const written = []

  for (const [i, page] of pages.entries()) {
    // Singles get a bare name; carousels are numbered so upload order is obvious.
    const suffix = pages.length > 1 ? `-${String(i + 1).padStart(2, '0')}` : ''
    const htmlPath = path.join(OUT_DIR, `${base}${suffix}.page.html`)
    const pngPath = path.join(PNG_DIR, `${base}${suffix}.png`)

    await fs.writeFile(htmlPath, shell([page], fmt.width, fmt.height))

    await run(CHROME, [
      '--headless',
      '--disable-gpu',
      '--no-sandbox',
      // Without this a scrollbar gutter appears down the right edge of the capture.
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      // Give Chrome time to pull DM Sans from Google Fonts before capturing.
      '--virtual-time-budget=8000',
      `--window-size=${fmt.width},${fmt.height}`,
      `--screenshot=${pngPath}`,
      `file://${htmlPath}`,
    ])

    await fs.rm(htmlPath, { force: true })
    written.push(pngPath)
  }

  return written
}

/** Render a post to a single PDF (all slides as pages) — for the Canva import route. */
export async function renderPost(post, formats) {
  const fmt = formats[post.format] || formats.square
  const pages = await buildPages(post, fmt)
  const html = shell(pages, fmt.width, fmt.height)

  await fs.mkdir(OUT_DIR, { recursive: true })
  const base = `${post.id}-${post.slug}`
  const htmlPath = path.join(OUT_DIR, `${base}.html`)
  const pdfPath = path.join(OUT_DIR, `${base}.pdf`)
  await fs.writeFile(htmlPath, html)

  await run(CHROME, [
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
    '--virtual-time-budget=8000',
    `--print-to-pdf=${pdfPath}`,
    '--no-pdf-header-footer',
    `file://${htmlPath}`,
  ])

  return pdfPath
}
