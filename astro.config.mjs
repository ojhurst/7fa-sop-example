// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: '7FA SOP Example',
			description: 'A starter wiki for a seven-figure agency — paid, organic, sales, ops, measurement, creative.',
			customCss: ['./src/styles/custom.css'],
			components: {
				Footer: './src/components/BuildFooter.astro',
				SiteTitle: './src/components/SiteTitleWithBuild.astro',
				PageTitle: './src/components/PageTitle.astro',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/ojhurst/7fa-sop-example',
				},
			],
			sidebar: [
				{ label: 'Home', slug: 'index' },
				{
					label: 'Paid Acquisition',
					items: [
						{ label: 'Google Ads — Search Campaign Setup', slug: 'paid-acquisition/google-ads-search-setup' },
						{ label: 'Google Ads — Performance Max Playbook', slug: 'paid-acquisition/google-ads-pmax' },
						{ label: 'Google Ads — Keyword Research Process', slug: 'paid-acquisition/google-ads-keyword-research' },
						{ label: 'Google Ads — Negative Keyword Hygiene', slug: 'paid-acquisition/google-ads-negatives' },
						{ label: 'Facebook Ads — Campaign Structure', slug: 'paid-acquisition/fb-ads-structure' },
						{ label: 'Facebook Ads — Creative Testing Framework', slug: 'paid-acquisition/fb-ads-creative-testing' },
						{ label: 'Facebook Ads — Audience Targeting Playbook', slug: 'paid-acquisition/fb-ads-audiences' },
						{ label: 'Facebook Ads — Conversions API Setup', slug: 'paid-acquisition/fb-ads-capi' },
						{ label: 'YouTube Ads — Video Ad Production', slug: 'paid-acquisition/youtube-ads-production' },
					],
				},
				{
					label: 'Organic Acquisition',
					items: [
						{ label: 'SEO — On-page Checklist', slug: 'organic/seo-onpage' },
						{ label: 'SEO — Content Pillar Strategy', slug: 'organic/seo-pillars' },
						{ label: 'Local SEO — Google Business Profile', slug: 'organic/local-seo-gbp' },
						{ label: 'Content — Blog Post Production SOP', slug: 'organic/blog-production' },
						{ label: 'Social — LinkedIn Content Cadence', slug: 'organic/linkedin-cadence' },
					],
				},
				{
					label: 'Sales and Onboarding',
					items: [
						{ label: 'Sales — Discovery Call Framework', slug: 'sales-onboarding/discovery-call' },
						{ label: 'Sales — Proposal Template', slug: 'sales-onboarding/proposal-template' },
						{ label: 'Onboarding — Day 1 Kickoff', slug: 'sales-onboarding/onboarding-day-one' },
						{ label: 'Onboarding — Access Collection Checklist', slug: 'sales-onboarding/access-checklist' },
						{ label: 'Onboarding — Week 1 Strategy Deck', slug: 'sales-onboarding/week-one-strategy' },
						{ label: 'Client Management — Weekly Report Format', slug: 'sales-onboarding/weekly-report' },
						{ label: 'Client Management — Quarterly Business Review', slug: 'sales-onboarding/qbr' },
					],
				},
				{
					label: 'Operations',
					items: [
						{ label: 'Client Management — Escalation Ladder', slug: 'operations/escalation-ladder' },
						{ label: 'Client Offboarding — Graceful Exit', slug: 'operations/offboarding' },
						{ label: 'Billing — Invoice and Collections SOP', slug: 'operations/billing' },
						{ label: 'Contracts — MSA and SOW Templates', slug: 'operations/contracts' },
						{ label: 'Team — Hiring Scorecard', slug: 'operations/hiring-scorecard' },
						{ label: 'Team — 90-day Ramp Plan', slug: 'operations/ramp-plan' },
						{ label: 'Team — Weekly One on Ones', slug: 'operations/weekly-one-on-ones' },
					],
				},
				{
					label: 'Measurement',
					items: [
						{ label: 'Project Management — ClickUp Setup', slug: 'measurement/clickup-setup' },
						{ label: 'Analytics — GA4 Setup Standard', slug: 'measurement/ga4-setup' },
						{ label: 'Analytics — GTM Implementation', slug: 'measurement/gtm-implementation' },
						{ label: 'Analytics — Conversion Tracking Audit', slug: 'measurement/conversion-audit' },
						{ label: 'Reporting — Looker Studio Dashboard', slug: 'measurement/looker-studio' },
					],
				},
				{
					label: 'Creative and Strategy',
					items: [
						{ label: 'Tools — Tech Stack Overview', slug: 'creative-strategy/tech-stack' },
						{ label: 'Creative — Video Ad Production Pipeline', slug: 'creative-strategy/video-production' },
						{ label: 'Creative — Brand Guideline Kit', slug: 'creative-strategy/brand-guidelines' },
						{ label: 'Creative — Landing Page Template Library', slug: 'creative-strategy/landing-page-library' },
						{ label: 'Strategy — Ideal Client Profile', slug: 'creative-strategy/icp' },
						{ label: 'Strategy — Positioning and Offer Design', slug: 'creative-strategy/positioning' },
						{ label: 'Growth — Referral Program Playbook', slug: 'creative-strategy/referral-program' },
					],
				},
			],
		}),
	],
});
