---
title: "How this site is built"
description: "Astro 7, the Sumi theme, static HTML, and a Worker that only has to serve files."
pubDate: 2026-09-02
tags: ["astro", "rustboy"]
---

The stack is intentionally boring.

The site is [Astro 7](https://astro.build/) with the [Sumi](https://github.com/kpab/astro-sumi) theme. Pages are static HTML. Article pages ship no client JavaScript. The only motion on the front page is a WebGL ink simulation, and even that is skipped when the visitor prefers reduced motion or the browser lacks WebGL2.

## Content collections

Posts live in `src/content/blog/` as Markdown or MDX. Frontmatter is typed: title, description, date, tags, an optional remote hero image. A malformed tag or a missing date fails `pnpm build`. Files that start with an underscore are ignored. Set `draft: true` to preview a post in `astro dev` without publishing it.

## What runs in production

`pnpm build` writes `dist/`. Cloudflare Workers serves that directory as assets. There is no adapter and no server render. Custom domains `rustboy.ai` and `www.rustboy.ai` are declared in `wrangler.jsonc` so a deploy attaches DNS and certificates.

Pull requests type-check and build. Merges to `main` deploy.
