---
title: "A quiet stack"
description: "pnpm, Astro, wrangler, and two GitHub Actions. The moving parts are named so they can stay few."
pubDate: 2026-09-05
tags: ["astro", "cloudflare"]
---

The moving parts on this site are named so they can stay few.

## Local

- **pnpm** is the package manager. The version is pinned in `package.json`.
- **Astro** builds the site. `pnpm dev`, `pnpm check`, `pnpm build`.
- **wrangler** is a dev dependency. It deploys the Worker and it uploads media to R2. Do not install a second copy globally "because it is faster".

## CI

Pull requests run `ci`: install with a frozen lockfile, type-check, build, and keep `dist/` as an artifact. That is how you know a change did not break the site.

## Deploy

Merges to `main` run `deploy-site`. Same install and build, then `pnpm exec wrangler deploy`. The Worker name is `rustboy`. Custom domains are `rustboy.ai` and `www.rustboy.ai`.

Secrets the workflow needs, once, in the GitHub repo:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Without those, the deploy job cannot talk to Cloudflare. The domain must already be a zone in that account.
