# Content awaiting confirmation

Facts the site states or omits because they have not been confirmed. Nothing here is published
until it is confirmed; update the page and remove the line.

## Projects

**SnackTroops** (`src/content/projects/snacktroops.md`)
- [ ] Current status (live, pilot, completed, paused)?
- [ ] Exactly what the platform does and what I built (features, roles, users)?
- [ ] Who is the client, and may they be named as the client?
- [ ] Any screenshots that may be published?

**OpsFirst** (`src/content/projects/opsfirst.md`)
- [ ] Confirm iDine may be named publicly as the client.
- [ ] Current status, and my exact role (sole builder, lead, part of a team)?
- [ ] Capabilities listed (customer accounts, departments, teams, categories, issue routing) are all implemented?

**OpsDone** (`src/content/projects/opsdone.md`)
- [ ] Status: released, in beta, or in development? Public product URL?
- [ ] Confirm each listed feature is implemented (issue types and priorities, ownership, response-time targets, escalation, activity tracking, attachments, work logs).
- [ ] Planned features to list separately as "planned", if any.

**Veyrafy** (`src/content/projects/veyrafy.md`)
- [x] Capabilities and limitations taken from the Veyrafy repository documentation (README, PRODUCTION-READINESS, ERP-API).
- [ ] Link to veyrafy.com and the public demo (demo.veyrafy.com, per the Veyrafy docs)? Not linked until confirmed live.
- [x] Screenshots are from the local demo with made-up data (fixtures), cropped to exclude the organisation name in the sidebar.
- [ ] Any ERP integration now verified with a real customer? (Currently stated: not yet.)

**FreshRoute Produce (pseudonym)** (`src/content/projects/freshroute-produce.md`)
- [ ] Which systems are used for inventory, data workflows and payments, and the role of each (can be described generically, e.g. "a cloud inventory system").
- [ ] Which integrations are complete and tested, in progress, or planned.
- [ ] Add the client's real name to the `BLOCKED_TERMS` repository secret so the build fails if it ever appears.

## Featured projects

- [ ] Featured now: Veyrafy, FreshRoute Produce (pseudonym), OpsFirst. Confirm, or choose the projects that best represent the work you want more of.

## About and contact

- [ ] Background to add to the About page (career, years of experience, previous roles, where based).
- [ ] LinkedIn and other profile URLs (`SITE.sameAs` in `src/data/site.ts`).
- [ ] A professional photo. The home page shows an "AP" monogram until one is provided (`.person__photo`).
- [ ] Form service to use (Formspree, Web3Forms or another) and the receiving email address.
- [ ] Privacy notice reviewed; it assumes a form service forwards enquiries by email.
- [ ] Analytics: Plausible (no cookie banner needed) or Google Analytics 4?

## Services

- [ ] Confirm the delivery model wording (AI-assisted development plus coordinated developers and specialists).
- [ ] Confirm statements in the FAQs: written agreement on ownership of commissioned work; disclosure of commercial interest in recommended products.

## Country pages (/uae/, /new-zealand/)

- [ ] Confirm the working arrangement stated: remote delivery, calls within the client's business hours, no local office.
- [ ] Confirm the markets listed site-wide: UAE, New Zealand, Australia, Saudi Arabia, Singapore, India.
- [ ] Local systems lists are "widely used" names only, with no partnership implied. Add any you have actually worked with.
- [ ] Next country pages only when there is real substance for them (Australia, Saudi Arabia, Singapore).

## Wider capabilities

- [ ] Confirm the "Beyond the core services" list (`src/data/capabilities.ts`): add or remove areas (for example digital marketing, SEO, IoT, blockchain) to match what you will take on.
- [ ] Any of them to promote to a full service page later? (Add a file to `src/content/services/`.)

## Insights

- [ ] Review the draft "What Is Systems Integration?" (`src/content/insights/what-is-systems-integration.md`) and set `draft: false` to publish.
