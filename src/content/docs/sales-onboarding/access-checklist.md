---
title: Client Access Checklist
description: Master checklist for collecting all platform access before starting work on a new client. Never start paid campaigns until all ad platform access is confirmed.
---

## What

A comprehensive list of every platform access an agency needs at onboarding. This checklist is worked through live on the kickoff call and completed within the first 7 days of engagement.

**Non-negotiable rules:**
- Never ask for a client's password. Always use official platform sharing/access features.
- Never start paid ad campaigns (Google Ads, Meta Ads) without confirmed admin access to those platforms. Running campaigns you can't control or audit is a liability.
- Always add your agency as a user — not the account manager's personal account. If that person leaves, access stays with the agency.

## Who Owns It

**Account Manager** — responsible for collecting and confirming every item before work begins. Escalate to the owner if a client is unresponsive for more than 48 hours on a critical access item.

---

## Steps

Work through every row below. Mark each item Confirmed, Pending, or N/A. Log status in [YOUR CRM] under the client record.

---

### Google Properties

#### Google Ads

| Field | Detail |
|---|---|
| Role needed | Admin |
| How to request | Client goes to Google Ads → Tools → Access & Security → Users → Invite. Provide your agency Google Ads Manager account ID (MCC). |
| How to grant (if no MCC) | Client invites agency Gmail address as Admin under Tools → Access & Security → Users |
| Smoke test | Log into your MCC and confirm client account appears. Or log in with invited email and confirm you can create/edit campaigns. |

**Blockers:** Client has never set up Google Ads → you will create the account for them. Use their business email as the owner and link to your MCC immediately.

---

#### Google Analytics 4 (GA4)

| Field | Detail |
|---|---|
| Role needed | Administrator |
| How to request | Client goes to GA4 → Admin → Account Access Management → Add users. Invite agency email with Administrator role. |
| Smoke test | Log in to GA4 and confirm you can view reports, edit settings, and see real-time data. |

**Blockers:** GA4 not set up → create a new property, install the tag via Google Tag Manager (see below), and verify data is flowing within 24 hours.

---

#### Google Search Console (GSC)

| Field | Detail |
|---|---|
| Role needed | Owner (not just Full user — Owner allows you to submit sitemaps and manage verification) |
| How to request | Client logs into GSC → Settings → Users and permissions → Add user. Set permission to Owner. |
| Smoke test | Log in and confirm you can submit a sitemap, request indexing, and view all reports. |

**Blockers:** Property not verified → verify via Google Analytics connection or DNS TXT record. DNS method requires domain registrar access (see below).

---

#### Google Business Profile (GBP)

| Field | Detail |
|---|---|
| Role needed | Manager |
| How to request | Client logs into Google Business Profile → Business Profile Settings → Managers → Add. Invite agency Gmail as Manager. |
| Smoke test | Log in and confirm you can edit business info, add photos, respond to reviews, and create posts. |

**Blockers:** Profile not claimed → walk client through the claim and verification process (postcard or phone verification). Do not proceed with GBP optimization until ownership is confirmed.

---

#### Google Tag Manager (GTM)

| Field | Detail |
|---|---|
| Role needed | Admin |
| How to request | Client logs into GTM → Admin → User Management → Add User. Invite agency email with Admin permissions on both Account and Container level. |
| Smoke test | Log in and confirm you can create, edit, and publish tags and triggers. Test Preview mode. |

**Blockers:** GTM not installed on site → install the GTM snippet in the site's `<head>` and `<body>`. Requires CMS access (see below).

---

### Meta (Facebook/Instagram)

#### Meta Business Manager

| Field | Detail |
|---|---|
| Role needed | Admin on the Ad Account. Admin on the Facebook Page. |
| How to request | Client logs into Meta Business Manager (business.facebook.com) → Settings → Ad Accounts → Assign Partners. Enter your agency Business Manager ID. Repeat for Pages. |
| Smoke test | Log into your agency Business Manager and confirm client's ad account and page appear under your assets. Verify you can create campaigns, access the ad account billing, and publish to the page. |

**Blockers:** Client has no Business Manager → create one for them at business.facebook.com using their business email. Make them the primary owner, add your agency as partner admin.

---

#### Facebook Page

| Field | Detail |
|---|---|
| Role needed | Admin (through Meta Business Manager, not personal page roles) |
| How to request | Granted through Meta Business Manager asset assignment (see above). |
| Smoke test | Confirm you can create and schedule posts, respond to messages, and access Page Insights. |

---

#### Instagram (connected to Meta BM)

| Field | Detail |
|---|---|
| Role needed | Connected to Meta Business Manager and linked to the Facebook page |
| How to request | In Meta BM → Settings → Accounts → Instagram Accounts → Add. Walk client through linking their Instagram business account. |
| Smoke test | Confirm Instagram account appears as an asset in BM and can be selected when creating Meta ad campaigns. |

**Blockers:** Instagram is a personal account → client must convert it to a Professional account first (Instagram Settings → Account → Switch to Professional Account).

---

### Website

#### Website CMS

| Field | Detail |
|---|---|
| Role needed | Administrator (WordPress) or equivalent highest-level role |
| How to request | Client logs into CMS admin panel → Users → Add New. Invite agency email as Administrator. |
| Smoke test | Log in and confirm you can install plugins, edit pages, add posts, and modify theme settings. |

**Platforms and how to add users:**
- **WordPress:** Users → Add New → Role: Administrator
- **Wix:** Dashboard → Settings → Roles & Permissions → Invite Team Member
- **Squarespace:** Settings → Permissions → Invite Contributor (choose Administrator)
- **Webflow:** Project Settings → Collaborators → Invite

---

#### Website Hosting (FTP / cPanel)

| Field | Detail |
|---|---|
| Role needed | FTP credentials or cPanel access (only needed if making server-level changes or installing GTM manually) |
| How to request | Client logs into hosting control panel and creates a new FTP user or shares cPanel login details via a secure method (not email — use LastPass Send, 1Password Share, or similar). |
| Smoke test | Connect via FTP client (FileZilla or similar) and confirm you can navigate to the site's root directory. |

**When this is needed:** Custom code installation, server-side redirects, .htaccess edits, manual plugin installation. If all work happens through the CMS admin, cPanel access is typically not required.

---

#### Domain Registrar

| Field | Detail |
|---|---|
| Role needed | Access sufficient to add/edit DNS records (TXT, CNAME, A records) |
| How to request | Client logs into their registrar (GoDaddy, Namecheap, Cloudflare, Porkbun, etc.) → DNS Management → Add you as a collaborator, or share a secure note with login credentials. |
| Smoke test | Log in and confirm you can view and edit DNS records for the domain. |

**When this is needed:** GSC verification via DNS, adding SPF/DKIM records for email deliverability, setting up a subdomain for landing pages, pointing to a new host.

---

### Marketing & Communication Platforms

#### Email Marketing Platform

| Field | Detail |
|---|---|
| Role needed | Admin or Manager (whatever allows creating/sending campaigns and viewing all contacts) |
| How to request | Varies by platform. Most have Settings → Users or Team → Invite. |
| Smoke test | Log in and confirm you can view all contacts, create a campaign, and access reporting. |

**Common platforms:** Mailchimp (Audiences → Manage Audience → Settings → Users), ActiveCampaign (Settings → Users → New User), Klaviyo (Settings → Team → Invite User), GoHighLevel (sub-account access via agency account).

---

#### CRM

| Field | Detail |
|---|---|
| Role needed | Admin or appropriate role to view all contacts, deals, and pipeline |
| How to request | Varies by platform. Most enterprise CRMs have Settings → Users → Invite. |
| Smoke test | Log in and confirm you can view all contacts, deals/pipelines, and activity logs. |

---

#### Call Tracking Platform

| Field | Detail |
|---|---|
| Role needed | Admin (to create tracking numbers, view call recordings, and run reports) |
| How to request | If using an existing platform (CallRail, CallTrackingMetrics): Settings → Users → Invite Agency. If not set up: create an account for the client — they own it, you manage it. |
| Smoke test | Log in and confirm you can create a new tracking number, assign it to a campaign, and see inbound call data. |

**Why call tracking matters:** Without call tracking, leads generated by your campaigns that result in phone calls are invisible. This is the single most common reason clients underestimate agency ROI.

---

## Access Status Tracker

Use this table in the client's [YOUR CRM] record or in a shared Google Sheet:

| Platform | Role Required | Granted | Date Confirmed | Notes |
|---|---|---|---|---|
| Google Ads | Admin | | | |
| Google Analytics 4 | Administrator | | | |
| Google Search Console | Owner | | | |
| Google Business Profile | Manager | | | |
| Google Tag Manager | Admin | | | |
| Meta Business Manager (Ad Account) | Admin | | | |
| Meta Business Manager (Page) | Admin | | | |
| Instagram | Connected to BM | | | |
| Website CMS | Administrator | | | |
| Website Hosting / FTP | FTP User | N/A if not needed | | |
| Domain Registrar | DNS Edit Access | | | |
| Email Marketing Platform | Admin | | | |
| CRM | Admin | | | |
| Call Tracking | Admin | | | |

---

## Definition of Done

- All applicable rows marked Confirmed in the access tracker
- No paid ad campaigns running until Google Ads and Meta BM access confirmed
- Outstanding items assigned with specific due dates and follow-up tasks in [YOUR CRM]
- Agency email used for all access — never a personal team member account
- Access tracker link stored in client record in [YOUR CRM]
