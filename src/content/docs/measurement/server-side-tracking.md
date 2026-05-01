---
title: Analytics — Server-side Tracking Standard
description: When we run server-side tracking and how we set it up.
---

## What

TODO — the standard for moving conversion tracking server-side to recover signal lost to browser restrictions and ad blockers.

## Who owns it

TODO — Analytics Engineer.

## Steps

1. TODO — provision the server-side container, configure the endpoint and authentication.
2. TODO — mirror the browser-side events server-side with deduplication IDs to avoid double-counting.
3. TODO — verify event match quality on the platform side, document the setup in the client's tracking log.

## Definition of done

TODO — server-side container live, dedup working, EMQ above 8 on Meta, signal recovery measurable against the pre-implementation baseline.

:::note[Stub]
This page is a stub. Replace every TODO with how your agency actually does it.
:::
