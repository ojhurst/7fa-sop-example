# 7fa-sop-example

A starter wiki for a seven-figure agency. Forty SOP stubs covering paid acquisition, organic, sales, onboarding, operations, measurement, and creative. Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build). Fork it, rename it, fill the stubs in with how your agency actually works.

## Get started

```bash
git clone <your-fork-url>
cd 7fa-sop-example
npm install
npm run dev   # localhost:4321
```

Edit markdown in `src/content/docs/`. The sidebar lives in `astro.config.mjs`.

## Build and deploy

```bash
npm run build       # outputs to ./dist
npm run preview     # preview the build locally
```

Deploy the `dist/` folder to Cloudflare Pages, Vercel, or Netlify. For Cloudflare Pages with GitHub Actions, see `.github/workflows/deploy.yml` (add your secrets).

## The 40 stubs

Grouped in six sections: Paid Acquisition (9), Organic Acquisition (5), Sales and Onboarding (7), Operations (7), Measurement (5), Creative and Strategy (7). Each stub has the same shape: What, Who owns it, Steps, Definition of done. Replace every TODO with how your agency does it.

## The rule

If a question gets asked twice, it becomes a page here. No exceptions.
