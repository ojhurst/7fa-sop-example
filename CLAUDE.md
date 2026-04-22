# 7fa-sop-example

> Inherits from the global CLAUDE.md (`~/.claude/CLAUDE.md`). This file covers repo-specific conventions only.

## What This Is
A starter wiki for a seven-figure agency — forty SOP stubs across paid acquisition, organic, sales, onboarding, operations, measurement, and creative. Intended to be cloned and filled in.

## Tech Stack
Astro 6 + Starlight 0.38. Markdown content in `src/content/docs/`, sidebar hand-registered in `astro.config.mjs`, deploys as a static site.

## Build Number
- Stored in `build.txt` (plain integer, root of repo)
- Bump on every commit: `echo $(($(cat build.txt) + 1)) > build.txt`
- Commit message format: `Build X: short summary`
- **Always announce after bumping:** "Build X: short summary" — spoken and written

## Dev Workflow
- `npm install` once.
- `npm run dev` → localhost:4321, hot reload.
- `npm run build` must pass before committing.
- Iterate locally, commit when stable.

## Stub Shape — Keep It
Every SOP page follows this four-heading format:
- **What** — one paragraph on purpose and trigger.
- **Who owns it** — a role, not a person (survives turnover).
- **Steps** — three numbered steps minimum.
- **Definition of done** — how you know it worked.

Do not vary the shape. Consistency is the whole value proposition.

## Sidebar Is Hand-Registered
The sidebar lives in `astro.config.mjs`. When adding a new stub:
1. Write the markdown file in the right subdirectory.
2. Register it in the sidebar with the matching slug.
3. Restart `npm run dev` if the sidebar does not pick it up.

## Deploy
- This is a starter repo, deploy target is agency-specific.
- Recommended: Cloudflare Pages via GitHub Actions (see `~/apps/cc/templates/cloudflare-pages-deploy.yml`).
- Never leave Cloudflare Pages on direct-upload — use the GH Actions workflow.
