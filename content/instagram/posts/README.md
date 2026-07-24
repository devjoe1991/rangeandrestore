# Upload-ready Instagram posts

131 PNGs, all exactly **1080 × 1080** (square). Drag straight into Instagram — no Canva needed.

> **On-image text lives in [`../posts.json`](../posts.json), which is the source of truth.**
> The "On-image" lines in `content-pack.md` are from the first draft and are now out of date —
> the headlines were rewritten as hooks. The **captions and hashtags in `content-pack.md` are
> still current** and are what you paste into Instagram.

## How to find the caption for an image

Every filename starts with its post ID. Look that ID up in
[`../content-pack.md`](../content-pack.md) for the caption, hashtags and CTA.

```
D1-sciatica-03.png
│  │        └── slide 3 of the carousel
│  └── slug
└── post ID → search "### D1" in content-pack.md
```

## Single images vs carousels

- **No number suffix** = single image post. `A1-sauna-19.png`
- **Numbered suffix** = carousel. Upload in numerical order:
  `D1-sciatica-01.png`, `-02`, `-03`… Instagram keeps the order you add them in.

## Posting order

[`../posting-schedule.md`](../posting-schedule.md) has a 16-week calendar. Week 1 is
**D1 sciatica** (Mon), **A1 sauna £19** (Wed), **G1 award** (Sat).

> G1 is the official Prestige Awards graphic — it isn't in this folder because it's
> posted unmodified from `public/range-and-restore-…-prestige-awards-winner-…jpg`.

## Before you post

1. Check the price on the image against §1 of `../content-pack.md`
2. Write alt text (Instagram → Advanced settings → Write alt text)
3. Tag the location: **Archway, London**
4. Client consent for any identifiable person — see `../photo-inventory.md`

## Regenerating

These are build output. Edit the design data in `../posts.json`, then:

```sh
node scripts/canva/canva.mjs images          # all of them
node scripts/canva/canva.mjs images A1 D1    # just these
```

Colours, fonts and layout live in `scripts/canva/lib/render.mjs`, matching the brand kit
in `../../canva_plan.md`.
