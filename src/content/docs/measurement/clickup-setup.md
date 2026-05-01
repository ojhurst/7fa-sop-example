---
title: ClickUp Workspace Setup SOP
description: How to structure a ClickUp workspace for a niche marketing agency — one workspace, consistent hierarchy, custom fields, and automations that keep nothing falling through the cracks.
---

## What

A documented ClickUp structure that every team member understands, every client has visibility into (where appropriate), and every deliverable lives in. The goal is a single system where anyone on the team can answer "what's the status of [X] for [client]?" in under 10 seconds.

**Core rule:** One ClickUp task per deliverable. Never use ClickUp as a document editor. Documents live in Google Drive or your wiki. ClickUp tracks work — it does not store work.

## Who Owns It

**Operations Lead / Owner** — sets up the initial workspace structure. Account managers maintain their client folders on an ongoing basis.

---

## Steps

### Workspace Hierarchy

Use this exact hierarchy. Do not add levels beyond what's described here — complexity kills adoption.

```
Workspace (your agency name)
├── Space: [CLIENT CATEGORY A]        (e.g., "Active Clients" or by niche segment)
│   ├── Folder: [Client Name]
│   │   ├── List: Onboarding
│   │   ├── List: SEO
│   │   ├── List: Ads
│   │   ├── List: Content
│   │   └── List: Reporting
├── Space: [CLIENT CATEGORY B]        (e.g., "Inactive / Churned" for archiving)
├── Space: Internal — Operations
│   ├── Folder: Sales
│   │   ├── List: Prospects
│   │   └── List: Proposals
│   ├── Folder: Team
│   │   ├── List: Hiring
│   │   └── List: Training
│   └── Folder: Agency Growth
│       ├── List: Marketing
│       └── List: Systems
└── Space: Internal — Recurring
    └── List: Weekly SOPs (for automated recurring tasks)
```

**Why Spaces per client category, not per client:** If you create a Space per client, you'll have 30+ spaces and lose the ability to use Workload view across all clients. Keep clients in Folders inside category Spaces.

---

### Standard Client Folder: Lists

Every client folder gets these 5 lists and no others:

**Onboarding**
Used only during the first 30 days. Contains access checklist tasks, kickoff call prep, and initial setup deliverables. Archive this list (not delete) once onboarding is complete.

**SEO**
All organic search tasks: on-page optimization, content creation, link building, local citation work, GBP management, monthly audit tasks.

**Ads**
All paid media tasks: campaign builds, ad copy creation, landing page builds, bid adjustments, weekly/monthly optimizations.

**Content**
Blog posts, email campaigns, social posts, video scripts. If your agency doesn't handle content for a client, leave this list empty — don't delete it (consistency matters for templates).

**Reporting**
Weekly report tasks, monthly report tasks, QBR prep tasks. Each recurring report is a task that gets recreated or cloned weekly.

---

### Custom Fields — Every Task Must Have These

Apply these custom fields at the **Workspace level** so they appear on every task across all spaces:

| Field Name | Field Type | Options / Notes |
|---|---|---|
| Client Name | Text or Dropdown | Name of the client this task belongs to |
| Assignee | Person | Always assigned — never unassigned tasks |
| Due Date | Date | Every task has a due date. No exceptions. |
| Priority | Dropdown | Urgent / High / Normal / Low |
| Status | Status field (see below) | |
| Billable Hours | Number | Estimated hours for this task (used for capacity tracking) |
| Service Type | Dropdown | SEO / Ads / Content / Reporting / Onboarding / Internal |

**Do not over-engineer custom fields.** Six fields are enough. More fields means less adoption.

---

### Default Task Statuses

Apply this status set to every list. Customize the color but keep the names consistent across the workspace:

| Status | Color | Meaning |
|---|---|---|
| To Do | Gray | Task created, not started |
| In Progress | Blue | Actively being worked on |
| Review | Yellow | Completed by assignee, waiting for internal or client review/approval |
| Done | Green | Fully completed and confirmed |
| Blocked | Red | Cannot proceed — needs something from client, another team member, or an external platform |

**Blocked is a critical status.** Any task in Blocked for more than 48 hours should trigger a notification to the account manager. See Automations below.

---

### Views to Create

Set up these views at the Workspace and Folder level. Save them so every team member has consistent access.

**Board View** — Visual pipeline
- Group by: Status
- Filter: Assigned to [current user] or All
- Use: Daily standup, seeing what's in-flight vs. stuck
- Where: Every client folder, every list

**Table View** — Deadline management
- Sort by: Due Date (ascending)
- Columns: Task name, Assignee, Due Date, Priority, Status
- Filter: Status is not Done
- Use: Monday morning planning, finding overdue tasks
- Where: Each client folder (shows all lists at once)

**My Tasks View** — Per team member
- Each team member has their own My Tasks view filtered to their assignments
- Sort by: Due Date
- Group by: Client Name
- Use: Individual daily workflow
- Where: Personal (each user sets this up for themselves)

**Workload View** — Capacity planning
- Group by: Assignee
- Show: Estimated hours per person per week
- Use: Preventing bottlenecks, making sure one person isn't carrying everything
- Where: Internal Operations space

**Overdue View** — Nothing slips
- Filter: Due Date is past + Status is not Done
- Sort by: Due Date ascending
- Use: Weekly account manager review — what got missed?
- Where: Internal Operations space, visible to account managers and owner

---

### Automations to Configure

Set these up at the Workspace level so they apply everywhere:

**Automation 1: Review notification**
- Trigger: Status changes to "Review"
- Action: Notify the account manager assigned to the task
- Message: "Task [task name] for [Client Name] is ready for review."

**Automation 2: Overdue flag**
- Trigger: Due date passes AND status is not "Done"
- Action: Change Priority to "Urgent" + notify the task assignee + notify the account manager
- Use: Catches dropped tasks before the client notices

**Automation 3: Blocked escalation**
- Trigger: Status is set to "Blocked" AND 48 hours pass without status change
- Action: Notify the account manager with a message: "Task [task name] has been Blocked for 48+ hours. Action required."

**Automation 4: Onboarding list archive reminder**
- Trigger: Task "Final Access Confirmation" is marked Done in Onboarding list
- Action: Create a task in Internal — Operations: "Archive Onboarding list for [Client Name]"
- Assignee: Account manager

---

### Integrations

**Slack or Discord (required)**
Connect ClickUp to your team's communication platform. Set up a dedicated channel (e.g., `#task-notifications`) to receive:
- Tasks moved to Review
- Tasks marked Blocked
- Overdue tasks

Do not pipe every task notification into a shared channel — it creates noise that gets ignored. Only status changes that require action from another person should trigger notifications.

**Google Drive (recommended)**
Link Google Drive assets to ClickUp tasks. Use the attachment feature on tasks to include the Google Drive link to any document associated with the deliverable (ad copy doc, blog post draft, report PDF). This keeps everything findable without storing files inside ClickUp.

**[YOUR CRM] (if applicable)**
If your CRM supports it, trigger ClickUp task creation from CRM deal stages. Example: when a deal moves to "Closed Won" in [YOUR CRM], automatically create a new client folder in ClickUp using a template. This eliminates the manual setup step and ensures nothing is skipped.

---

### Recurring Task Setup

For weekly and monthly recurring deliverables, use ClickUp's recurring task feature — do not re-create tasks manually.

Standard recurring tasks to set up for every client:

| Task Name | Frequency | Assignee | Due |
|---|---|---|---|
| Weekly Report — [Client Name] | Weekly | Account Manager | Every Monday by 8am |
| Weekly GBP post — [Client Name] | Weekly | SEO specialist | Every Tuesday |
| Monthly ad optimization — [Client Name] | Monthly | Ads specialist | 1st of month |
| Monthly reporting — [Client Name] | Monthly | Account Manager | First Monday of month |
| QBR prep — [Client Name] | Quarterly | Account Manager | 2 weeks before QBR date |

---

### Naming Conventions

Consistent naming makes search work. Use these conventions across all tasks:

- Client deliverable tasks: `[Client Name] — [Deliverable]` → `ABC Plumbing — Publish April Blog Post`
- Internal tasks: `[Department] — [Task]` → `Sales — Follow Up: Smith HVAC Proposal`
- Recurring tasks: Include the date in the task name when cloning → `ABC Plumbing — Weekly Report Apr 28`

---

## Definition of Done

- Workspace has Spaces, Folders, and Lists matching the hierarchy above
- All 6 custom fields applied at Workspace level
- All 5 default statuses in place across all lists
- Board, Table, My Tasks, Workload, and Overdue views created and saved
- Automations 1–4 active and tested
- Slack or Discord integration connected with task notification channel active
- Every active client has a folder with 5 lists and at least their recurring tasks created
- All team members have been invited, roles assigned, and My Tasks views set up
