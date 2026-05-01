---
title: Adding Users to Your Wiki Repo
description: How the agency owner invites a teammate to the GitHub repo, and what the teammate does to accept and start contributing.
---

The wiki lives in GitHub. To let a teammate read SOPs and propose changes, the owner adds them as a collaborator on the repo. The teammate then signs in (or signs up) and accepts the invite. Once they have push access, they edit pages directly in the browser and open pull requests for review.

![Roles in an AI-documented agency](/img/install-guides/github-users/shot-01-role-diagram.png)

## Who does what

- **Owner** — sets up the repo, invites teammates, approves merges.
- **Team Member** — reads SOPs, proposes pull requests when something needs to change.
- **Claude** — writes, updates, and merges on command.

## What the owner does

### 1. Open the repo's Collaborators page

In your repo on GitHub, go to **Settings → Access → Collaborators**. The URL pattern is `github.com/<your-org>/<your-repo>/settings/access`.

### 2. Click "Add people" and enter their email

Use the work email you want them to log in with. GitHub looks for an existing account on that email. If it finds one, the invite goes there. If not, GitHub still sends an invite email and the teammate can finish account setup from the link.

![Collaborators and teams settings page](/img/install-guides/github-users/shot-02-collaborators.png)

### 3. Wait for them to accept

The new entry shows up under **Manage access** with a "Pending Invite" badge until the teammate accepts. Once they do, they have push access to the repo.

:::tip
Use one work email per person. Personal Gmail accounts get tangled up across freelance work — the email tied to the GitHub login is the audit trail for every commit they make on your wiki.
:::

## What the teammate does

### 1. Open the invitation email

GitHub sends an email titled "<owner> invited you to <owner>/<repo>." It comes from `noreply@github.com`. Click the green **Accept invitation** button.

![GitHub invitation email](/img/install-guides/github-users/shot-03-invitation-email.png)

### 2. Sign in or sign up

If the teammate already has a GitHub account on that email, they sign in. If not, the link drops them into `github.com/signup` with the email pre-filled. Pick a username, set a password, verify the email with the launch code GitHub sends.

:::note
Use the **same email** the owner used in the invite. A different email creates a new GitHub account that does not have access to the repo.
:::

### 3. Confirm push access

After accepting, the repo opens with a green banner: "You now have push access to the <owner>/<repo> repository." That confirms the invite landed.

![Push access banner on the repo home](/img/install-guides/github-users/shot-04-push-access.png)

### 4. Edit a page in the browser

Navigate to the file in the repo (under `src/content/docs/<section>/`), click the **pencil icon** in the top right of the file view, make the change, scroll to the bottom, and click **Propose changes**. GitHub creates a new branch named `<username>-patch-N` and routes you straight to the pull request screen.

### 5. Open a pull request

Fill in a one-line title that names the change and a short description that explains why. Click **Create pull request**.

![Open a pull request screen](/img/install-guides/github-users/shot-05-open-pr.png)

## Owner reviews and merges

The owner gets a notification, opens the pull request, reviews the diff, leaves comments if needed, and clicks **Merge pull request** when it is good to go. Cloudflare Pages auto-deploys the change in about 30 seconds.

![Merged pull request](/img/install-guides/github-users/shot-06-merged-pr.png)

## Definition of done

- The teammate's username appears under **Settings → Access → Collaborators** without a "Pending Invite" badge.
- The teammate has merged at least one pull request that is now visible on the live wiki.
