# rustboy

Home and blog for rustboy.ai.

## Agentic conventions

- Issue tracker: GitHub Issues
- Labels: bug, enhancement, documentation, security
- ADR directory: docs/adr/
- CHANGELOG: CHANGELOG.md
- Default branch: main
- Package manager: pnpm

## Media

Do not commit images or videos. Upload them to the `rustboy-media` R2 bucket with the pinned wrangler CLI and reference `https://media.rustboy.ai/…`. See [README.md](README.md).

## Safe Chain

Package installs in this environment go through Aikido Safe Chain shims. Never bypass them:

- Keep `~/.safe-chain/shims` first on `PATH`.
- Do not call unshimmed `npm`, `pnpm`, `npx`, or `pnpx`.
- Do not install packages with `curl | sh` or by pointing at a package manager outside the shim directory.
