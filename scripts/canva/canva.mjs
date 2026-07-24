#!/usr/bin/env node
// Canva Connect API pipeline for Range and Restore Instagram content.
//
//   node --env-file=.env.local scripts/canva/canva.mjs <command>
//
//   auth      Authorise this machine against your Canva account (once)
//   whoami    Verify the connection
//   folders   Create the `rangeandrestore` folder tree
//   render    Render posts to PDF locally (no Canva account needed)
//   push      Import rendered PDFs into Canva as editable designs
//   all       folders → render → push
//
// Setup steps are in scripts/canva/README.md.

import fs from 'node:fs/promises'
import path from 'node:path'
import { authorise } from './lib/auth.mjs'
import { REPO_ROOT } from './lib/auth.mjs'
import { getCurrentUser, ensureFolder, importDesign, moveFolderItem } from './lib/api.mjs'
import { renderPost, renderPostPNG, OUT_DIR, PNG_DIR } from './lib/render.mjs'

const POSTS_FILE = path.join(REPO_ROOT, 'content/instagram/posts.json')
// Caches folder IDs and imported design IDs so folders/push are safe to re-run.
const STATE_FILE = path.join(REPO_ROOT, '.canva-state.json')

const SUBFOLDERS = [
  '00-brand-kit',
  '01-templates',
  '02-photos',
  '03-posts-feed',
  '04-posts-carousel',
  '05-stories',
  '06-reels',
  '07-archive',
]

const loadPosts = async () => JSON.parse(await fs.readFile(POSTS_FILE, 'utf8'))

async function loadState() {
  try {
    return JSON.parse(await fs.readFile(STATE_FILE, 'utf8'))
  } catch {
    return { folders: {}, designs: {} }
  }
}
const saveState = (s) => fs.writeFile(STATE_FILE, JSON.stringify(s, null, 2))

/** Only render/push the posts named as CLI args; all of them if none given. */
function selected(posts, args) {
  const ids = args.filter((a) => !a.startsWith('-')).map((a) => a.toUpperCase())
  if (!ids.length) return posts
  const picked = posts.filter((p) => ids.includes(p.id.toUpperCase()))
  if (!picked.length) throw new Error(`No posts matched: ${ids.join(', ')}`)
  return picked
}

// ------------------------------------------------------------------ commands

async function cmdAuth() {
  await authorise()
  const { team_user } = await getCurrentUser()
  console.log(`Connected as user ${team_user.user_id} (team ${team_user.team_id}).`)
}

async function cmdWhoami() {
  const { team_user } = await getCurrentUser()
  console.log(`user_id: ${team_user.user_id}\nteam_id: ${team_user.team_id}`)
}

async function cmdFolders() {
  const state = await loadState()
  console.log('Creating folder tree…\n')

  const root = await ensureFolder('rangeandrestore', 'root')
  console.log(`  rangeandrestore  ${root.created ? '(created)' : '(already there)'}  ${root.folder.id}`)
  state.folders.root = root.folder.id

  for (const name of SUBFOLDERS) {
    const sub = await ensureFolder(name, root.folder.id)
    console.log(`    ${name}  ${sub.created ? '(created)' : '(already there)'}`)
    state.folders[name] = sub.folder.id
  }

  await saveState(state)
  console.log('\nDone. Folder IDs cached in .canva-state.json')
}

async function cmdRender(args) {
  const { posts, formats } = await loadPosts()
  const list = selected(posts, args)
  console.log(`Rendering ${list.length} post(s) to PDF…\n`)

  const failures = []
  for (const post of list) {
    try {
      const pdf = await renderPost(post, formats)
      console.log(`  ${post.id.padEnd(4)} ${path.basename(pdf)}`)
    } catch (err) {
      failures.push(post.id)
      console.error(`  ${post.id.padEnd(4)} FAILED — ${err.message}`)
    }
  }

  console.log(`\n${list.length - failures.length}/${list.length} rendered into scripts/canva/out/`)
  if (failures.length) console.log(`Failed: ${failures.join(', ')}`)
}

async function cmdImages(args) {
  const { posts, formats } = await loadPosts()
  const list = selected(posts, args)
  console.log(`Exporting ${list.length} post(s) to PNG…\n`)

  const failures = []
  let files = 0

  for (const post of list) {
    try {
      const written = await renderPostPNG(post, formats)
      files += written.length
      const label = written.length > 1 ? `${written.length} slides` : '1 image'
      console.log(`  ${post.id.padEnd(4)} ${post.slug.padEnd(28)} ${label}`)
    } catch (err) {
      failures.push(post.id)
      console.error(`  ${post.id.padEnd(4)} FAILED — ${err.message}`)
    }
  }

  console.log(`\n${files} image(s) from ${list.length - failures.length}/${list.length} posts.`)
  console.log(`Ready to upload: ${path.relative(REPO_ROOT, PNG_DIR)}/`)
  if (failures.length) console.log(`Failed: ${failures.join(', ')}`)
}

async function cmdPush(args) {
  const { posts } = await loadPosts()
  const state = await loadState()
  if (!state.folders?.root) {
    throw new Error('Run the `folders` command first — no folder IDs cached.')
  }

  const list = selected(posts, args)
  console.log(`Importing ${list.length} design(s) into Canva…\n`)

  const failures = []
  for (const post of list) {
    const pdf = path.join(OUT_DIR, `${post.id}-${post.slug}.pdf`)
    try {
      await fs.access(pdf)
    } catch {
      console.log(`  ${post.id.padEnd(4)} skipped — no PDF. Run \`render ${post.id}\` first.`)
      continue
    }

    // Skip anything already imported so the command is safe to re-run.
    if (state.designs[post.id]) {
      console.log(`  ${post.id.padEnd(4)} already imported — ${state.designs[post.id].edit_url}`)
      continue
    }

    try {
      const [design] = await importDesign(pdf, `${post.id} ${post.slug}`)
      const target = state.folders[post.folder]
      if (target) await moveFolderItem(design.id, target)

      state.designs[post.id] = { id: design.id, edit_url: design.urls.edit_url }
      await saveState(state)
      console.log(`  ${post.id.padEnd(4)} imported → ${post.folder}`)
    } catch (err) {
      failures.push(post.id)
      console.error(`  ${post.id.padEnd(4)} FAILED — ${err.message}`)
    }
  }

  console.log('\nDone. Open Canva → Projects → rangeandrestore.')
  if (failures.length) console.log(`Failed: ${failures.join(', ')}`)
}

// ---------------------------------------------------------------------- main

const [command, ...args] = process.argv.slice(2)

const COMMANDS = {
  images: cmdImages,
  auth: cmdAuth,
  whoami: cmdWhoami,
  folders: cmdFolders,
  render: cmdRender,
  push: cmdPush,
  all: async (a) => {
    await cmdFolders()
    await cmdRender(a)
    await cmdPush(a)
  },
}

const handler = COMMANDS[command]
if (!handler) {
  console.log(
    'Usage: node scripts/canva/canva.mjs <command> [postIds…]\n\n' +
      '  images    Export upload-ready PNGs — this is the one you want\n\n' +
      '  Canva route (needs credentials — see README.md):\n' +
      '  auth      Authorise this machine against your Canva account (once)\n' +
      '  whoami    Verify the connection\n' +
      '  folders   Create the `rangeandrestore` folder tree\n' +
      '  render    Render posts to PDF\n' +
      '  push      Import rendered PDFs into Canva as editable designs\n' +
      '  all       folders → render → push\n\n' +
      'Pass post IDs to limit scope, e.g.  images A1 D1 G8\n'
  )
  process.exit(command ? 1 : 0)
}

handler(args).catch((err) => {
  console.error(`\n${err.message}\n`)
  process.exit(1)
})
