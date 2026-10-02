# Staffroom Review — Newsletter System

## Purpose

The Staffroom Letter is a weekly editorial product built on the existing Staffroom story system.

The workflow is:

**Story Registry → weekly curation → newsletter draft → verification/preflight → editorial approval → final rendered check → final approval → manual activation → Vercel weekly Cron → Resend segmented Broadcasts**

The initial launch deliberately uses the existing Vercel project plus Resend's current free capabilities. No separate application database is required at this stage.

## Free-first stack

### Resend

Resend's current free marketing offering advertises up to 1,000 contacts and provides Contacts, Broadcasts and unsubscribe handling.

Official references:
- https://resend.com/products/marketing-emails
- https://resend.com/pricing/

Resend Contacts support custom properties and segmentation. Staffroom Review uses:
- `plan=free`
- `plan=paid`

Two segments are used:
- Staffroom Free
- Staffroom Paid

Contacts in multiple segments count as a single contact under Resend's current Contacts model.

### Vercel Cron

The existing Vercel project uses a weekly Cron on the Hobby plan.

The default schedule is **Sunday at 09:00 IST**, represented in Vercel Cron as:

`30 3 * * 0`

Vercel Hobby Cron runs no more than once per day and is hourly rather than minute-precise.

Official references:
- https://vercel.com/docs/cron-jobs/usage-and-pricing
- https://vercel.com/docs/cron-jobs/manage-cron-jobs

The Cron route requires `CRON_SECRET`.

## Subscriber database

Resend Contacts is the authoritative subscriber store for the initial launch.

A free signup creates/updates a Contact with:
- email
- optional first name
- `plan=free`
- `newsletter=staffroom-letter`
- `source=staffroom-review.com`

Unsubscribe handling is delegated to Resend.

Paid status is intentionally manual at launch. A paid Contact uses:
- `plan=paid`
- Staffroom Paid segment

Payment processing is deferred until the paid audience justifies the additional service.

## Weekly content model

Each weekly issue stores:
- issue ID
- week start/end
- scheduled send time
- subject
- preview text
- editorial opening
- free Story IDs
- premium Story ID
- premium teaser
- premium article body
- approval history
- preflight/final check history
- manual activation state
- sent state

The premium piece is a real Story Registry record, not an anonymous email-only article.

## The 2/3 free + 1/3 paid rule

The target is measured by content volume rather than the number of story links:

- approximately two-thirds free;
- approximately one-third paid;
- tolerance of ±8 percentage points in the automated first-pass validator.

The free section is curated directly from stories published in the stated week and requires:
- published status;
- newsletter eligibility;
- publication date in the newsletter week;
- real article URL.

The paid section can be an expanded original treatment, deeper synthesis, analysis or another substantive editorial piece.

## Story retrieval and contradiction protection

Before an issue is approved:
- retrieve the week's eligible stories;
- use the Story Registry to find related work;
- run Story Verification on the premium story/newly drafted material;
- check for repeated angles, arguments, examples, audience mismatch and possible contradictions.

The verification result is advisory. It does not replace editorial judgment.

## Two-step approval system

### Step 1 — Editorial approval

I prepare the complete newsletter from:
- stories published that week;
- your instructions/theme;
- relevant Story Registry history;
- any additional editorial inputs you provide.

I prepare:
- subject line;
- preview text;
- editorial opening;
- curated free section;
- premium section;
- Free email version;
- Paid email version.

I then run the preflight checks.

You approve the editorial draft or request changes.

### Step 2 — Final send approval

After any revisions, I render the exact Free and Paid email versions again.

I then run the final checks for:
- story eligibility;
- duplicate selection;
- real URLs;
- free/paid content balance;
- premium-story existence;
- overlap warnings;
- subject line;
- presence of the unsubscribe mechanism;
- required approval state.

You approve the final send version.

## Manual activation

After Step 2, the issue remains:

`sendArmed: false`

Only after you explicitly instruct me to activate the issue do we change it to:

`sendArmed: true`

The scheduled Cron cannot send an issue merely because the scheduled time has arrived.

## Automated sending

The weekly Cron calls:

`/api/newsletter/cron`

It will send only when all of the following are true:
- the issue is armed;
- the send time has arrived;
- editorial approval is true;
- final approval is true;
- preflight is passed;
- final check is passed;
- Resend configuration exists.

It then creates/sends two Broadcasts:
- Free segment → free version + premium teaser;
- Paid segment → free version + complete premium section.

The route checks recent Broadcasts before sending to reduce accidental duplicate sends.

Resend's Broadcast API supports targeting segments and creating/sending a Broadcast through the API:
- https://resend.com/changelog/create-and-send-broadcasts-via-api
- https://resend.com/features/broadcasts

## Subscriber threshold and upgrade

The initial free-launch ceiling is treated as **1,000 contacts** based on Resend's current free marketing offering.

An internal review alert is set at **750 contacts**.

At that point review:
- total contacts;
- paid contacts;
- engagement;
- sending requirements;
- whether payment processing is now justified.

Do not upgrade purely because the threshold is reached.

## One-time setup required before first live send

The implementation is in the repository, but the external services still require connection.

1. Create/connect the Resend account.
2. Verify the Staffroom Review sending domain.
3. Create a Resend API key.
4. Create the Staffroom Free and Staffroom Paid segments.
5. Add the five environment variables in `.env.example` to the Vercel project.
6. Redeploy.
7. Test a free signup.
8. Run a non-sending Cron/preflight test.

No newsletter is sent during this setup unless the issue is fully approved and manually activated.

## Weekly editor/agent interaction

Normal weekly interaction:

**You:** give me the theme, priorities and any additional instructions.

**Me:** retrieve the week's published stories → verify related material → curate → write → render Free + Paid → run Step 1 checks → show you the draft.

**You:** approve or request revisions.

**Me:** revise → render again → run Step 2 → show final versions.

**You:** approve the final version.

**You:** explicitly activate that week's send.

**Automation:** the scheduled Cron performs the actual Resend delivery.

## Implementation files

- `data/newsletter-config.js`
- `data/newsletter-workflow.js`
- `data/story-registry.js`
- `lib/newsletter-system.js`
- `lib/story-verification.js`
- `app/newsletter/page.js`
- `app/api/newsletter/subscribe/route.js`
- `app/api/newsletter/cron/route.js`
- `vercel.json`
- `.env.example`

## Future paid expansion

Later, after sufficient paid demand:
- payment provider integration;
- automatic paid-status updates;
- member accounts;
- premium website archive;
- topic subscriptions;
- analytics;
- specialist newsletters;
- Pro tier.

The two approvals plus manual activation remain the default safeguard unless you explicitly change that policy.
