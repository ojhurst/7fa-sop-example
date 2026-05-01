---
title: Paid — Pixel and CAPI Debugging
description: How we diagnose and fix broken conversion tracking on Meta and Google.
---

## What

TODO — the repeatable process for catching pixel drift, CAPI mismatches, and dropped events before they tank a campaign.

## Who owns it

TODO — Analytics Engineer, with Paid Media reviewing.

## Steps

1. TODO — run the platform's diagnostic tool (Meta Events Manager Test Events, Google Tag Assistant) against the live site.
2. TODO — fire each conversion path manually, confirm browser pixel and server CAPI both register the event with matching IDs.
3. TODO — fix the broken trigger, deploy, re-test, and document the fix in the client's tracking log.

## Definition of done

TODO — every conversion event fires in both browser and server, deduplication is working, EMQ score above 8 on Meta.

:::note[Stub]
This page is a stub. Replace every TODO with how your agency actually does it.
:::
