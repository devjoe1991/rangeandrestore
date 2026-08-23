#!/usr/bin/env bash
# One-off cleanup (23 Aug 2026): removes untracked images in public/ that are
# byte-identical (md5-verified) duplicates of files already committed under
# SEO-friendly names. None of these are referenced anywhere in app/, lib/,
# components/ or llms.txt. Safe to delete this script after running it.
set -euo pipefail
cd "$(dirname "$0")/../public"

rm -v \
  IMG_7054-original.jpeg IMG_7054.jpeg \
  IMG_7057-original.jpeg IMG_7057.jpeg \
  IMG_7067-original.jpeg IMG_7067.jpeg \
  "WhatsApp Image 2026-03-24 at 22.35.09.jpeg" \
  "WhatsApp Image 2026-03-25 at 18.24.49.jpeg" \
  "WhatsApp Image 2026-06-11 at 18.15.55 (1).jpeg" \
  "WhatsApp Image 2026-06-11 at 18.15.55.jpeg" \
  "WhatsApp Image 2026-07-26 at 12.38.32.jpeg" \
  "WhatsApp Image 2026-07-26 at 12.38.32 (1).jpeg" \
  "WhatsApp Image 2026-07-26 at 12.38.32 (2).jpeg" \
  "WhatsApp Image 2026-07-26 at 12.38.32 (3).jpeg" \
  "WhatsApp Image 2026-07-26 at 12.38.32 (4).jpeg" \
  "WhatsApp Image 2026-07-26 at 12.38.32 (5).jpeg" \
  "WhatsApp Image 2026-07-26 at 12.38.32 (6).jpeg" \
  "WhatsApp Image 2026-07-26 at 12.38.32 (7).jpeg" \
  "WhatsApp Image 2026-07-26 at 12.38.32 (8).jpeg" \
  "WhatsApp Image 2026-07-26 at 12.38.32 (9).jpeg" \
  "giving-back/WhatsApp Image 2026-07-25 at 13.47.15.jpeg" \
  "giving-back/WhatsApp Image 2026-07-25 at 13.47.22.jpeg" \
  "giving-back/WhatsApp Image 2026-07-25 at 13.47.22 (1).jpeg" \
  "giving-back/WhatsApp Image 2026-07-25 at 13.47.22 (2).jpeg" \
  "giving-back/WhatsApp Image 2026-07-25 at 13.47.22 (3).jpeg" \
  "giving-back/WhatsApp Image 2026-07-25 at 13.47.22 (4).jpeg" \
  "giving-back/WhatsApp Image 2026-07-25 at 13.47.22 (5).jpeg" \
  "giving-back/WhatsApp Image 2026-07-25 at 13.47.22 (6).jpeg" \
  "giving-back/WhatsApp Image 2026-07-25 at 13.47.22 (7).jpeg" \
  "giving-back/WhatsApp Image 2026-07-25 at 13.47.22 (8).jpeg" \
  "giving-back/WhatsApp Image 2026-07-25 at 13.47.22 (9).jpeg" \
  "giving-back/WhatsApp Image 2026-07-25 at 13.49.20.jpeg" \
  "giving-back/WhatsApp Image 2026-07-25 at 13.49.20 (1).jpeg" \
  "giving-back/WhatsApp Image 2026-07-25 at 13.49.20 (2).jpeg"

echo "Done. Remaining untracked files in public/:"
git status --short --untracked-files=all .
