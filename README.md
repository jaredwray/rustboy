# rustboy

Home page and blog for [rustboy.ai](https://rustboy.ai).

The site is [Astro 7](https://astro.build/) with the [Sumi](https://github.com/kpab/astro-sumi) theme (MIT, [kpab](https://github.com/kpab)) — ink, washi paper, and a WebGL fluid simulation on the front page. Article pages ship no client JavaScript.

Requires **Node.js 22.12 or newer** (even-numbered releases: 22 or 24). Package manager is **pnpm**, pinned in `package.json`.

| Command        | Does                                     |
| -------------- | ---------------------------------------- |
| `pnpm install` | Install dependencies                     |
| `pnpm dev`     | Dev server on `localhost:4321`           |
| `pnpm check`   | Type-check with `astro check`            |
| `pnpm build`   | Build static output to `./dist`          |
| `pnpm preview` | Serve the built site locally             |

Site metadata, navigation, and the ink flags live in [`src/config.ts`](src/config.ts). Posts are Markdown or MDX in [`src/content/blog/`](src/content/blog/). The film board is [`/storyboard`](https://rustboy.ai/storyboard/) — sequential plates driven by [`src/content/storyboard/plates.json`](src/content/storyboard/plates.json).

## Media (do not store images or videos in git)

This repository does **not** store images or videos. Agents and humans must upload media to the designated Cloudflare R2 bucket with **wrangler**, which is a pinned dev dependency. Do not `git add` screenshots, heroes, or recordings. Do not install a second wrangler globally — use the one in this repo.

| | |
| --- | --- |
| Bucket | `rustboy-media` |
| Public URL | `https://media.rustboy.ai` |

### One-time bucket setup

These commands need a Cloudflare account where `rustboy.ai` is already a zone, plus a logged-in wrangler (`pnpm exec wrangler login` locally, or API token in CI).

```bash
pnpm exec wrangler r2 bucket create rustboy-media
pnpm exec wrangler r2 bucket dev-url enable rustboy-media
pnpm exec wrangler r2 bucket domain add rustboy-media --domain media.rustboy.ai --zone-id <cloudflare-zone-id>
```

`r2.dev` public development URLs are rate-limited and are not for production. Use `https://media.rustboy.ai`.

### Upload a file

```bash
pnpm exec wrangler r2 object put rustboy-media/blog/post-slug/hero.jpg \
  --file ./hero.jpg \
  --content-type image/jpeg \
  --remote
```

Then reference the object by its public URL, never by a path in this repo:

```markdown
![Hero](https://media.rustboy.ai/blog/post-slug/hero.jpg)
```

Optional post frontmatter:

```yaml
heroImage: https://media.rustboy.ai/blog/post-slug/hero.jpg
heroImageAlt: "A short description"
```

`heroImage` must be an absolute `https://` URL. Local image files under `src/content/` are gitignored.

Scratch files can sit in `uploads/` while you wrangle them; that directory is gitignored too.

## Storyboard plates

[`/storyboard`](https://rustboy.ai/storyboard/) is a production board: sequential public plates 1–24 left to right, each cell a slate plus a 16:9 frame. The working spine is purpose unknown → help (wrong answers in the keep, nature as school, tide channel + help still Waiting). Live picture bridge is threshold → path (no gold roof, no cliff plunge). CUT plates are a footnote, not sequential cells. Empty frames stay empty until a public media URL is set. Do not invent local image paths. CDN ship objects often need a `.b` sibling — use the URL Chronicle published.

Plates live in one collection file so Writer/Chronicle can plug media without touching the page:

[`src/content/storyboard/plates.json`](src/content/storyboard/plates.json)

Each object:

| Field | Notes |
| --- | --- |
| `id` | Unique string (`"01"`…`"25"`). Required by the Astro file loader. |
| `n` | Sequence number. The board sorts on this. |
| `act` | `"I"`, `"II"`, or `"III"`. |
| `title` | Short slate title. |
| `line` | One or two sentences. |
| `status` | `finished`, `parked`, `waiting`, or `cut` — shown as those words on the page. `cut` is out of picture, not a reshoot. |
| `kf` | Optional keyframe stem, e.g. `kf11j-threshold`. |
| `still` | Optional `{ "src", "alt" }`. `src` must be `https://media.rustboy.ai/…`. |
| `clip` | Optional `{ "src" }`. Same URL rule. Omit both to keep the empty slot. |

To add a still or clip for a plate that is already on the board:

1. Upload to R2 (see above). Example:

```bash
pnpm exec wrangler r2 object put rustboy-media/stills/ship/kf21-fox.b.png \
  --file ./kf21-fox.b.png \
  --content-type image/png \
  --remote
```

2. Edit that plate in `plates.json`. Add only public URLs:

```json
"still": {
  "src": "https://media.rustboy.ai/stills/ship/kf21-fox.b.png",
  "alt": "kf21 fox — leftover recognizes leftover"
},
"clip": {
  "src": "https://media.rustboy.ai/clips/ship/kf21-fox.b.mp4"
}
```

3. Leave `still` and `clip` off until the object is on the bucket. An empty frame is honest; a broken image is not. Finished plates without a public URL stay empty and read “Finished in the cut.” Do not point at an older leftover take. Gold/roof (`kf12`) and cliff-down (`kf13`) are cut — do not put them back on the sequential board.

The page reads the collection via `getCollection("storyboard")` in [`src/pages/storyboard.astro`](src/pages/storyboard.astro). Schema lives in [`src/content.config.ts`](src/content.config.ts).

## Pull request checks

[`.github/workflows/ci.yaml`](.github/workflows/ci.yaml) runs on every pull request and on `main`:

- `pnpm install --frozen-lockfile`
- `pnpm check`
- `pnpm build`
- upload `dist/` as a workflow artifact

PRs do not deploy.

## Deploy to Cloudflare Workers

Merging to `main` (or running the workflow manually) runs an Aikido `scan-release` gate, then builds the site and deploys the `rustboy` Worker. Custom domains **rustboy.ai** and **www.rustboy.ai** are set in [`wrangler.jsonc`](wrangler.jsonc) (`custom_domain: true`), so `wrangler deploy` attaches DNS and certificates.

Add these GitHub Actions secrets before the first deploy:

- `AIKIDO_CLIENT_API_KEY` — from [Aikido Continuous Integration settings](https://app.aikido.dev/settings/integrations/continuous-integration). Used only to query scan results; it cannot publish.
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

`rustboy.ai` must already be a zone in that Cloudflare account. Remove any conflicting DNS records on the apex or `www` first — wrangler will refuse to attach a custom domain over an existing record.

```bash
pnpm build
pnpm exec wrangler deploy
```
