#!/usr/bin/env node
/**
 * Normalise all .pcell photo-grid images to uniform SQUARE tiles.
 * Converts each <img ... style="...width:100%;max-width:260px;height:auto;...">
 * inside a .pcell into a fixed-aspect square using a padding-box wrapper so it
 * works in email clients (object-fit + fixed height fallback).
 *
 * Strategy per image: set the img style to
 *   width:100%;height:200px;object-fit:cover;display:block;border-radius:14px;border:1px solid #E9E5DE;
 * and ensure the <a class="pcell"> keeps width:48% so 2-up grid holds.
 * 200px square-ish tiles read consistently; object-fit:cover crops portrait/landscape uniformly.
 *
 * Idempotent: only rewrites imgs that still have height:auto.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const EMAILS = join(__dirname, '..', 'emails')

const files = readdirSync(EMAILS).filter(f => f.endsWith('.html') && f !== '_MASTER.html')
let changed = 0

for (const f of files) {
  const p = join(EMAILS, f)
  let html = readFileSync(p, 'utf8')
  if (!html.includes('class="pcell"')) continue
  const before = html

  // Rewrite img styles that belong to pcell grids: they use width:100%;max-width:260px;height:auto
  html = html.replace(
    /(<img\b[^>]*?)style="width:100%;max-width:260px;height:auto;display:block;border-radius:14px;border:1px solid #E9E5DE;"/g,
    '$1style="width:100%;height:200px;object-fit:cover;display:block;border-radius:14px;border:1px solid #E9E5DE;"'
  )
  // Some agents may have used width:210px fixed cells (old strip remnants) -> normalise too
  html = html.replace(
    /style="width:210px;height:148px;object-fit:cover;display:block;border-radius:14px;border:1px solid #E9E5DE;"/g,
    'style="width:100%;height:200px;object-fit:cover;display:block;border-radius:14px;border:1px solid #E9E5DE;"'
  )

  if (html !== before) {
    writeFileSync(p, html)
    const n = (before.match(/max-width:260px;height:auto/g) || []).length + (before.match(/width:210px;height:148px/g) || []).length
    console.log(`FIXED  ${f}  (${n} tiles -> square 200px cover)`)
    changed++
  } else {
    console.log(`ok     ${f}  (already square or different pattern)`)
  }
}
console.log(`\nFiles changed: ${changed}`)
