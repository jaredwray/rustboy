---
title: "Writing in the open"
description: "Why the blog is public, how drafts work, and what a finished post is allowed to look like."
pubDate: 2026-09-04
tags: ["writing", "rustboy"]
---

Writing in the open is a constraint. You cannot hide behind a private doc forever, and you cannot endlessly rewrite a sentence nobody will see.

A post here is finished when it has a title, a date, and a point. It does not need a hero image. It does not need a thread of follow-ups. It needs to be readable in one sitting.

## Drafts

Set `draft: true` in frontmatter. The post shows up in `astro dev` and drops out of `pnpm build`. That is the whole workflow. There is no CMS.

## Tags

Tags are short and few. They exist so an archive can be filtered, not so a post can be filed under twelve topics. If you cannot pick two, pick one.

## What not to do

Do not paste a changelog. Do not write a teaser for a post that never arrives. Do not commit screenshots "for later" into the repo — they belong in R2, or they do not belong.
