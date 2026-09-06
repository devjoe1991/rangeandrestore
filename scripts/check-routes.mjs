/**
 * Route integrity guard.
 *
 * Two checks, both cheap enough to run on every build:
 *   1. Every value in lib/routes.ts resolves to a real app/**\/page.tsx.
 *   2. Every internal href literal in the codebase resolves to a real route.
 *
 * Check 2 is the one that earns its keep: it catches a mistyped path in a page
 * that has not been migrated to ROUTES yet, which is exactly the failure that
 * otherwise ships silently as a 404.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = process.cwd()
const SCAN_DIRS = ['app', 'components', 'lib']

function walk(dir, test, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry)
    if (entry === 'node_modules' || entry === '.next') continue
    const s = statSync(p)
    if (s.isDirectory()) walk(p, test, out)
    else if (test(p)) out.push(p)
  }
  return out
}

// ── 1. The routes that actually exist ────────────────────────────────────────
const pageFiles = walk(join(ROOT, 'app'), (p) => p.endsWith('page.tsx'))
const realRoutes = new Set(
  pageFiles.map((p) => {
    const r = relative(join(ROOT, 'app'), p).replace(/\/?page\.tsx$/, '')
    return '/' + r
  }).map((r) => (r === '/' ? '/' : r.replace(/\/$/, '')))
)
// Dynamic segments match anything under their parent; record them separately.
const dynamicPrefixes = [...realRoutes].filter((r) => r.includes('['))

const errors = []

// ── 2. ROUTES values point at real pages ─────────────────────────────────────
const routesSrc = readFileSync(join(ROOT, 'lib/routes.ts'), 'utf8')
const declared = [...routesSrc.matchAll(/'(\/[^']*)'/g)].map((m) => m[1])
for (const r of declared) {
  if (!realRoutes.has(r)) errors.push(`lib/routes.ts declares "${r}" but no page.tsx exists for it`)
}

// ── 2b. Every real page has a token (so new pages cannot be forgotten) ───────
const declaredSet = new Set(declared)
for (const r of realRoutes) {
  if (r.includes('[')) continue
  if (!declaredSet.has(r)) {
    errors.push(`app${r === '/' ? '' : r}/page.tsx has no entry in lib/routes.ts — add one`)
  }
}

// ── 2c. Token keys must be valid JS identifiers ──────────────────────────────
for (const m of routesSrc.matchAll(/^\s{2,4}([^\s:]+):/gm)) {
  const key = m[1]
  if (!/^[A-Za-z_$][\w$]*$/.test(key)) {
    errors.push(`lib/routes.ts key "${key}" is not a valid identifier (a slug starting with a digit?)`)
  }
}

// ── 3. Every internal href literal resolves ──────────────────────────────────
const files = SCAN_DIRS.flatMap((d) =>
  walk(join(ROOT, d), (p) => /\.(tsx|ts)$/.test(p) && !p.endsWith('routes.ts'))
)

const IGNORE = /^(https?:|mailto:|tel:|#|\/\/)/

for (const file of files) {
  const src = readFileSync(file, 'utf8')
  const lines = src.split('\n')
  lines.forEach((line, i) => {
    for (const m of line.matchAll(/href="([^"]+)"/g)) {
      const raw = m[1]
      if (IGNORE.test(raw)) continue
      if (!raw.startsWith('/')) continue
      // strip hash + query, and any file-ish route (sitemap.xml, robots.txt…)
      const path = raw.split(/[?#]/)[0].replace(/\/$/, '') || '/'
      if (/\.\w{2,4}$/.test(path)) continue
      if (realRoutes.has(path)) continue
      if (dynamicPrefixes.some((d) => path.startsWith(d.split('[')[0]))) continue
      errors.push(`${relative(ROOT, file)}:${i + 1}  href="${raw}" does not match any page`)
    }
  })
}

if (errors.length) {
  console.error(`\n✗ route check failed (${errors.length}):\n`)
  for (const e of errors) console.error('  ' + e)
  console.error('')
  process.exit(1)
}
console.log(`✓ routes ok — ${realRoutes.size} pages, ${declared.length} tokens, ${files.length} files scanned`)
