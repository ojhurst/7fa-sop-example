# Vision — 7fa-sop-example

## The problem

Most seven-figure agencies run on tribal knowledge. The founder knows how things work. One or two senior people know most of it. Everyone else is guessing, asking in Slack, or doing it wrong. When a key person leaves, a chunk of the business walks out the door with them.

The fix is an internal wiki — a single place where every repeatable task is documented, owned, and kept current. Most agencies never build one because it feels like a big project. It is not. The hard part is starting.

## What this is

A starter kit. Forty SOP stubs, pre-categorized and pre-titled, that cover the core functions of a seven-figure agency. Clone it, rename it, and the wiki already has a skeleton. The team just has to fill in the flesh.

Built with Astro plus Starlight so students (or agency teams) get a modern documentation site with search, a nice sidebar, mobile support, and one-line deploy to Cloudflare Pages or Vercel. Markdown in, static HTML out.

## What this is NOT

- **Not prescriptive.** The stubs are scaffolding, not best practices. Every agency fills them in differently.
- **Not a training course.** It is a blank canvas with section headers, not a curriculum.
- **Not a SaaS.** It is a repo. The team owns it, ships it, and controls it.
- **Not exhaustive.** Forty stubs is a starting point. Agencies will add their own as the business grows.

## Phases

**Phase 1 — Scaffold (this repo).** Forty stubs in six sections, Starlight site, ready to clone.

**Phase 2 — Use it live.** Fill in the stubs for a real agency. Prove the format works.

**Phase 3 — Share it.** Open source the starter, teach other agencies how to use it, collect feedback, improve the stubs.

**Phase 4 — Optional — turn it into a template generator.** CLI that asks a few questions (agency name, services, team size) and emits a customized scaffold.

## Non-negotiables

- **Stays a static site.** No CMS, no database, no JS framework beyond Astro. Markdown or bust.
- **Stubs match the format.** Every stub has: What, Who owns it, Steps, Definition of done. That shape is the whole point.
- **Sidebar tells the story.** Sections are grouped by agency function, not alphabetical. The sidebar IS the map.
- **Private by default.** Agency wikis have payroll, margins, and client lists. Private repo, access-controlled deploy.
