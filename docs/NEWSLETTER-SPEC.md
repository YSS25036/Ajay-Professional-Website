# Newsletter — Requirements & Provider Decision

Status: **draft for review** (2026-07-18)
Owner: Ajay · Author: Claude Code session

---

## 1. Current state (the problem)

The site has a newsletter *signup form* (`src/components/NewsletterSignup.astro`, shown on
the homepage and the held-back `/ai-sdlc` page) but no newsletter *system*:

- The form POSTs to **Formspree** — the same form ID as the contact form, distinguished
  only by a hidden `form-type: newsletter-signup` field.
- Subscriber sees Formspree's generic hosted "thank you" page; **no confirmation or
  welcome email** is sent.
- Emails accumulate in the Formspree submissions archive, mixed with contact enquiries.
  Free tier caps at ~50 submissions/month.
- **There is no way to send an article to subscribers.** No list management, no
  unsubscribe mechanism, no compliance footer.

## 2. Goals

1. A subscriber who signs up gets a proper double opt-in confirmation and lands back on
   (or stays on) ajaykmadan.in with a clear "check your inbox" / "you're in" message.
2. Ajay gets notified of each new subscriber (or can see the list on a dashboard).
3. Subscribers are stored in a real list with unsubscribe handled automatically and
   legally (unsubscribe link in every email, suppression list).
4. Publishing an article to the full list is a **≤10-minute manual step** that reuses the
   markdown already written for the site — no reformatting into a drag-and-drop editor.
5. Cadence is irregular ("no schedule, no spam. Only when I write") — so the system must
   cost nothing/near-nothing in idle months.

## 3. Non-goals

- No paid subscriptions, tiers, or monetisation.
- No automation sequences / drip campaigns (a single welcome email is enough).
- No migration of the site itself — it stays a static Astro site on Netlify; the
  newsletter provider is an external service reached by a form POST.
- The contact form stays on Formspree unchanged.

## 4. Functional requirements

| # | Requirement |
|---|-------------|
| F1 | Signup form embedded in the existing `NewsletterSignup.astro` component, styled as today (no third-party iframe/JS widget; plain HTML `<form action=…>` POST). |
| F2 | Double opt-in: provider sends a confirmation email; only confirmed addresses join the list. |
| F3 | After submit, the visitor is redirected to a small `/subscribed` page on the site ("Check your inbox to confirm") rather than a provider-branded page. |
| F4 | Admin visibility: notification email per new subscriber, or at minimum a dashboard count. |
| F5 | Send flow: paste/import the article's markdown, add a one-line intro, send to all confirmed subscribers. |
| F6 | Every email has a working unsubscribe link; unsubscribes are handled by the provider with no action from Ajay. |
| F7 | Existing signups sitting in Formspree are exported and imported into the new list once (flagged as imported, not re-confirmed — or re-invited, Ajay's call; see Open decisions). |
| F8 | Optional, later: public archive of past issues hosted by the provider, linkable from the site. |

## 5. Non-functional requirements

| # | Requirement |
|---|-------------|
| N1 | Works with a fully static site — no serverless functions, no API keys in client code. |
| N2 | Free at current scale (list starts near zero); acceptable cost ceiling ~$10/month once the list justifies it. |
| N3 | Professional sender reputation: emails come from the provider's established sending infrastructure; later option to send from `@ajaykmadan.in` (requires DNS DKIM/SPF records — one-time Netlify DNS edit). |
| N4 | Minimal provider branding in emails; audience is enterprise decision-makers. |
| N5 | GDPR-sane: double opt-in, unsubscribe, provider acts as processor. |

## 6. Provider comparison

Evaluated against: markdown-first send flow (F5), plain-HTML form POST (F1), free at
small scale (N2), minimal branding (N4).

| | **Buttondown** | **Kit (ConvertKit)** | **MailerLite** | **Substack** |
|---|---|---|---|---|
| Free tier | 100 subscribers | 10,000 subscribers | 1,000 subscribers | Unlimited |
| Then | $9/mo | $25+/mo | $10+/mo | Free (takes 10% only if paid subs) |
| Markdown send | **Native — paste markdown, done** | No (block editor) | No (drag-drop editor) | No (own editor) |
| Plain form POST to own-site form | **Yes, documented pattern** | Possible but geared to their JS embeds/landing pages | JS embed or API | No — form lives on substack.com |
| Branding in emails | Tiny footer link on free | "Powered by Kit" on free | MailerLite logo on free | Heavy Substack framing |
| Fit for irregular essay cadence | Excellent — built for exactly this | Fine | Fine, marketing-oriented | Pushes you onto their platform/domain |
| Risk | Small company (solo-founder origin, now a team) | Feature overkill | Feature overkill | Content lives off ajaykmadan.in — undercuts the site & GEO work |

### Recommendation: **Buttondown**

- The send flow matches how the content is already produced: articles are markdown files
  in this repo; Buttondown emails **are** markdown. Publishing = copy file contents,
  paste, send. That is the whole F5 requirement met natively.
- Its documented embed pattern is a plain HTML form POST
  (`https://buttondown.com/api/emails/embed-subscribe/<username>`) — drop-in replacement
  for the current Formspree `action`, keeping the existing component and styling (F1),
  with `redirect` support for the `/subscribed` page (F3).
- Double opt-in is the default (F2); unsubscribe automatic (F6); email-per-subscriber
  notifications available (F4); hosted archive available (F8).
- Cost: free to 100 subscribers, then $9/mo — inside the N2 ceiling, and the paywall
  point (100 real confirmed subscribers) is exactly when $9/mo is justified.

**Runner-up — Kit:** choose it only if staying free up to a large list matters more than
the markdown workflow. The tradeoff is composing every issue in their block editor and a
pushier marketing-tool feel.

**Rejected — Substack:** it would hollow out the site. The repositioning work (GEO,
llms.txt, /ai-sdlc hub) assumes ajaykmadan.in is the canonical home of the content.

## 7. Implementation plan (on approval)

1. **Ajay (manual, ~10 min):** create Buttondown account, set newsletter name/description,
   enable double opt-in (default) and new-subscriber notifications, note the username.
2. Add `PUBLIC_BUTTONDOWN_USERNAME` to `.env` and Netlify env vars.
3. Rewrite `NewsletterSignup.astro` form action to Buttondown's embed-subscribe endpoint;
   add hidden `embed=1` and redirect field pointing at `/subscribed`.
4. Create `src/pages/subscribed.astro` — "Almost there — check your inbox to confirm."
   Exclude from sitemap.
5. Delete the empty `src/components/nl-temp.astro` leftover.
6. One-time: export Formspree submissions CSV, filter `form-type=newsletter-signup`,
   import into Buttondown (per Open decision D2).
7. Verify: `npm run build`, live signup test end-to-end (form → confirm email → list →
   test send → unsubscribe link).
8. Document the publishing runbook in this file (§8) once verified.

## 8. Publishing runbook (target state)

1. Write/commit the article in `src/content/blog/` or `src/content/resourcesArticles/`
   as usual; push → Netlify deploys it.
2. In Buttondown: New email → paste the article markdown (or an excerpt + link to the
   canonical page — better for driving traffic and for GEO) → send.
3. Done. Unsubscribes, bounces, archive handled by Buttondown.

*Later option:* add an RSS feed to the site (`@astrojs/rss` — none exists today) and use
Buttondown's RSS automation to pre-draft emails from new posts automatically.

## 9. Open decisions (for Ajay)

- **D1 — Full article in email, or excerpt + link?** Recommendation: excerpt + link
  (drives readers to the site the repositioning is built around).
- **D2 — Existing Formspree signups:** import silently, or send a one-time "confirm you
  still want this" re-invite? Recommendation: if it's only a handful, import directly.
- **D3 — Sender address:** start with Buttondown's default sending domain, or set up
  DKIM/SPF now to send as `newsletter@ajaykmadan.in`? Recommendation: default first;
  custom domain when the list is real.
