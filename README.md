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

Site metadata, navigation, and the ink flags live in [`src/config.ts`](src/config.ts). Posts are Markdown or MDX in [`src/content/blog/`](src/content/blog/).

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

## Pull request checks

[`.github/workflows/ci.yaml`](.github/workflows/ci.yaml) runs on every pull request and on `main`:

- `pnpm install --frozen-lockfile`
- `pnpm check`
- `pnpm build`
- upload `dist/` as a workflow artifact

PRs do not deploy.

## Deploy to Cloudflare Workers

Merging to `main` (or running the workflow manually) builds the site and deploys the `rustboy` Worker. Custom domains **rustboy.ai** and **www.rustboy.ai** are set in [`wrangler.jsonc`](wrangler.jsonc) (`custom_domain: true`), so `wrangler deploy` attaches DNS and certificates.

Add these GitHub Actions secrets before the first deploy:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

`rustboy.ai` must already be a zone in that Cloudflare account. Remove any conflicting DNS records on the apex or `www` first — wrangler will refuse to attach a custom domain over an existing record.

```bash
pnpm build
pnpm exec wrangler deploy
```
