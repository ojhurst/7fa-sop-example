# 7fa-sop-example

> **Sync:** studio, mbp
>
> Inherits from the global CLAUDE.md (`~/.claude/CLAUDE.md`). This file covers repo-specific conventions only.

## What This Is
A starter wiki for a seven-figure agency — 58 SOP stubs across paid acquisition, organic, sales, onboarding, operations, measurement, and creative. Intended to be cloned and filled in.

Live preview at [7fa-sop-example.themarketingshow.com](https://7fa-sop-example.themarketingshow.com/) so visitors can browse the stubs before forking.

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
- Cloudflare Pages project `7fa-sop-example`, deploys via `.github/workflows/deploy.yml` on every push to `main`.
- Default URL: `7fa-sop-example.pages.dev`. Custom domain: `7fa-sop-example.themarketingshow.com` (CNAME in `themarketingshow.com` zone, proxied).
- Repo secrets `CLOUDFLARE_API_TOKEN` (= `CF_PAGES_DEPLOY_TOKEN`) and `CLOUDFLARE_ACCOUNT_ID` are set on the GitHub repo.
- Never leave the CF Pages project on direct-upload — the GH Actions workflow is the only deploy path.
- For forks: replace the project name in `deploy.yml`, set the same two secrets, point your own subdomain at it.


## No time estimates, no stamina commentary
Do not estimate how long something will take. Do not comment on James's energy, time of day, or how long the session has run. Do not suggest pausing, saving for tomorrow, or coming back fresh. James decides when he is done. Just do the next thing.
