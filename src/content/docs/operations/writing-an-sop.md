---
title: Writing a New SOP
description: How to add or update a page in this wiki using GitHub.
---

## What

The rule from the README: if a question gets asked twice, it becomes a page here. This SOP covers the mechanics. How a teammate without GitHub experience signs up, finds the right file, edits it in the four-heading format, and opens a pull request for review.

Triggered any time a recurring question, decision, or process needs to be written down.

## Who owns it

Operations Lead. They review every pull request before merge to keep the format consistent.

## Steps

1. **Sign up for GitHub.** Go to [github.com/signup](https://github.com/signup), enter your work email, pick a username that matches your real name, and verify the email. The free tier is fine.
2. **Find the page or create one.** To edit an existing page, click into it on the live wiki and click the GitHub pencil icon. To create a new page, open `src/content/docs/<section>/` on GitHub and choose "Add file → Create new file." Name it with a kebab-case slug ending in `.md`.
3. **Write in the four-heading format.** Use these four sections in this order: `## What`, `## Who owns it`, `## Steps`, `## Definition of done`. Steps need at least three numbered items. Do not vary the format. Consistency is the whole point.
4. **Register the page in the sidebar.** Open `astro.config.mjs` and add an entry to the matching section's `items` array. The slug must match the file path under `src/content/docs/` without the `.md`. Skip this step and the page will not appear in navigation.
5. **Open a pull request.** Click "Propose changes," write a one-line title that names what you added or changed, then click "Create pull request." Tag the Operations Lead for review. Once approved and merged, Cloudflare Pages auto-deploys in about 30 seconds.

## Definition of done

The new page is live on the production site, the sidebar entry routes to it, and the four headings are present in the correct order. For stub pages, every TODO has been replaced with how the agency actually works.
