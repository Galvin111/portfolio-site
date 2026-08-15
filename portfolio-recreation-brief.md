# Portfolio Recreation Brief
Inspired by: emilianmisera.com

---

## 1. What the reference site actually does (structure breakdown)

Reading through emilianmisera.com, here's the section-by-section anatomy worth studying:

**Header / Nav**
- Fixed logo (top-left), simple horizontal nav: Home / Work / Resume / Contact
- Contact is a `mailto:` link, not a form page

**Hero Section**
- Big lowercase headline treatment: "say hello to your ~~creative developer~~" — the role/title is the visual focus, styled distinctly (looks like it's animated/highlighted)
- A single soft CTA: "Have a look" (likely scroll-cue, not a button)
- An Awwwards badge/link — social proof, subtle

**"About / Journey" Section**
- Told as a short narrative timeline, not a bulleted resume:
  - "7 years ago" → "I started in graphic design, focusing on logos and visual identity."
  - "Then I discovered UI/UX — and loved it."
  - "I started building what I design" (paired with a code-snippet visual — `useEffect`, `"use client"`, JSX — as a design motif, not literal documentation)
  - "and I stuck with it."
- This is the signature element: origin story as scroll-triggered narrative, code snippets used as *decoration/proof of craft*, not instruction

**Closing CTA (mid-page)**
- "Let's create something together." + Contact button
- Short, direct, breathing room around it

**Selected Work Section**
- Grid/carousel of 3 projects, each with: project number, client name, one-line description, 1-2 tags (e.g. "Web Design", "Development")
- Example: `Project 1 — Blumenbühne – Flower Shop Website — Web Design, Development`
- Each links to a dedicated case-study page

**Footer**
- Social links only (LinkedIn, Instagram) — no clutter

**Overall feel:** minimal, confident, lets the work + a strong personal narrative carry it. Code snippets are used as a *visual signature* for a developer — this detail matters because it's specific to his craft (dev), and you'll want your own equivalent signature.

---

## 2. Your signature element: Platform Iconography

Instead of his floating code snippets (`useEffect`, JSX, `"use client"`), your visual texture is built from the marks of the platforms you actually work in — a play button, a story ring, a like/heart, a share arrow. Used the same way he uses code: as subtle, semi-transparent background texture near the About/Journey section, not literal UI chrome.

**How to execute it without it reading as generic:**
- Use only 3-4 icon marks, repeated sparingly, not a busy icon soup
- Outline/stroke style (not filled), low opacity (10-20%), tinted in your blue or a muted grey — never full-color social brand icons, that reads as a "follow us" bar, not a design signature
- Let one icon "activate" (turn solid, pick up the red accent) on scroll or hover near the relevant story beat — e.g. the play button lights up red right as you mention video editing
- Keep it out of the hero — save it for the Journey section and maybe as a faint recurring corner mark across Work cards, so it threads the whole page without being loud anywhere

---

## 3. Design tokens (adapted to your palette: black, blue, red, white)

| Role | Suggested value | Notes |
|---|---|---|
| Background (primary) | `#0B0C10` (near-black) | Matches his near-black base tone |
| Background (section alt) | `#111318` | Subtle depth between sections |
| Text (primary) | `#F5F5F7` (off-white) | Not pure white — softer on dark bg |
| Accent (blue) | `#1E3A8A` (deep navy) — LOCKED | Primary CTA / link color |
| Accent (red) | `#E63946` | Used sparingly — one highlight word, one hover state, tag pills |
| Divider / hairline | `#2A2D35` | For section rules, card borders |

**Typography**
- Display face: something with character for the hero headline — condensed sans or a geometric sans with personality (avoid default Inter/Arial look)
- Body face: a clean, highly legible sans for descriptions
- Utility face (tags, labels, numbers): monospace — echoes his code-snippet motif, works well for "Project 01" style labels or post-metrics

**Layout concept**
- Hero: full-height, headline-dominant, one soft CTA
- About/Journey: narrative scroll section, told in short story beats (yours: "started as a hobby → managing real client accounts → now full creative pipeline")
- Work: 3-4 case studies (Go Go Curry, Hello Lumpia, + any personal/design projects), same card pattern — number, client, one-liner, 2 tags
- Closing CTA + footer with socials only

---

## 4. Section-by-section content plan (personalized)

**Tone across all copy: confident & minimal.** Short lines. No filler adjectives. Let the work carry weight, not the wording.

### Hero headline (LOCKED)
**"the one who designs it, posts it, and builds where it lives"**

Soft CTA under it, same pattern as reference: **"Have a look"** or a version like **"See the work"**

### Journey narrative (short beats, matches your real timeline)
Mirrors his "7 years ago →" structure, but honest to your path:

1. **"5 years ago"** — Started in graphic design.
2. **"Video followed."** — Picked up editing. Same eye, moving footage.
3. **"Then I went where the work lives."** — Started managing social — not just making the asset, owning the account.
4. **"So I learned to build the rest."** — Websites came last — the platforms these brands actually run on.

Keep each beat to one line, exactly like the reference. Don't over-explain — the punchiness IS the signature.

### Work grid — 3 projects
1. **Go Go Curry** — Japanese curry restaurant, Times Square NYC. Tags: *Social Media, Web*
2. **Hello Lumpia** — Filipino restaurant, Jacksonville FL. Tags: *Social Media, Web*
3. **This site** — your own portfolio, listed as a project in itself. Tags: *Web Design, Development* — a confident, minimal move: proving the build by including the build.

One-liners for each should stay short — mirror his pattern: `Client — one line — 2 tags`.

### Closing CTA (LOCKED)
**"Got a brand that needs a feed, a face, and a site? Let's talk."**

### Footer
Socials/handles only — no extra links, matches reference's restraint.

---


---

## 6. Prompt to give Antigravity

Copy/paste everything below into Antigravity as your starting prompt. Attach this md file too if it supports file attachments.

```
Build me a single-page personal portfolio website. I'm a social media manager /
graphic designer / video editor / web builder for restaurant clients.

DESIGN DIRECTION
- Dark, sleek theme: near-black background (#0B0C10), off-white text (#F5F5F7)
- Accent colors: deep navy blue (#1E3A8A) as primary accent, red (#E63946) used
  sparingly for highlights/hover states only
- Typography: a characterful display/sans font for headlines (not default
  Inter/Arial look), clean legible body font, monospace font for small labels
  and project numbers
- Minimal, confident, lots of breathing room — not busy or maximalist
- Fully responsive down to mobile
- Reduced-motion friendly; keep animation restrained to scroll-reveals and
  hover states, no constant motion

STRUCTURE (build section by section, let me review each before moving to the next):

1. HERO
   - Headline: "the one who designs it, posts it, and builds where it lives"
   - Soft CTA under it: "Have a look" (scroll cue, not a heavy button)
   - No image needed here, type-driven

2. JOURNEY / ABOUT (this is the signature section)
   - Short narrative beats, one line each, revealed on scroll:
     "5 years ago" — Started in graphic design.
     "Video followed." — Picked up editing. Same eye, moving footage.
     "Then I went where the work lives." — Started managing social — not just
       making the asset, owning the account.
     "So I learned to build the rest." — Websites came last — the platforms
       these brands actually run on.
   - Background texture: subtle outline-style platform icons (play button,
     story ring, heart/like icon, share arrow) at 10-20% opacity, tinted navy
     blue, NOT full-color brand icons. Have one icon "activate" (turn solid,
     pick up the red accent) as its matching story beat scrolls into view —
     e.g. the play button lights up red near the video editing line.

3. WORK (3 project cards)
   - Card 1: Go Go Curry — Japanese curry restaurant, Times Square NYC —
     tags: Social Media, Web
   - Card 2: Hello Lumpia — Filipino restaurant, Jacksonville FL —
     tags: Social Media, Web
   - Card 3: This Portfolio — tags: Web Design, Development
   - Format each like: project number, client name, one short line, 2 tags
   - Since I don't have real photos yet, generate placeholder images for now:
     for Go Go Curry go with a moody dark shot suggesting Japanese curry /
     Times Square energy; for Hello Lumpia a warm shot suggesting Filipino
     comfort food; for the portfolio card, an abstract dark navy/red gradient
     graphic. Keep all three visually consistent with the site's dark theme
     so they don't look like stock photos dropped in.

4. CLOSING CTA
   - Line: "Got a brand that needs a feed, a face, and a site? Let's talk."
   - Contact button/link below it

5. FOOTER
   - Just social links, minimal, no extra nav clutter

Build the Hero and Journey sections first and show me before continuing to
Work and the closing CTA/footer.
```

