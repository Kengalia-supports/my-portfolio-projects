# Kengalia Website — Project Context

## Who & What
**Client/Owner:** Uzodinma Godspower Ikedi — Founder, Kengalia Concepts / Kengalia Technologies. Nigeria.
**Site:** `kengalia.com` — multi-division company site for Kengalia Concepts and its arms.
**Template base:** Medio by Untree.co (Bootstrap 5, dark theme). Do not fight the template — extend via `css/dark-theme.css`.

---

## Brand System

**Colours:** Brand green `#2e9d63` · Dark bg `#0a0a0a` · Text dim `rgba(255,255,255,0.45)`
**Fonts loaded:** Dancing Script 700 · Cormorant Garamond 300/600 · Raleway 300/800

### Logo CSS classes
| Class | Use |
|---|---|
| `.logo-kengalia-main` | "Kengalia" in Dancing Script green |
| `.logo-kengalia-sub` | Sub-label wrapper (line + division name) |
| `.logo-kengalia-line` | Vertical separator line |
| `.logo-kengalia-concepts` | Division name — uppercase Raleway 300, green |

Division name pattern: `<span style="font-size:13px;">F</span>irst` (first letter smaller)

### Perfcent wordmark (portfolio.html)
Bricolage Grotesque 800 + IBM Plex Mono 600. Class `.perfcent-c::before/::after` stems: `top:3%; bottom:-13%; width:0.055em; left:34%/60%`.

---

## Two Nav Patterns

**`<body class="kengalia-home">`** — All parent brand pages (index, about, portfolio, art, attire, marketplace, about-godspower).
- Logo: Dancing Script "Kengalia" wordmark with division sub-label
- Nav pill: `.nav-kengalia-link` — green bg, white text, Dancing Script

**`<body class="kengtec-page">`** — Technologies service pages (service-*.html).
- Logo: Dancing Script 700 "Kengtec" + Raleway 300 "kengalia technologies" label beneath (NOT Pacifico — old doc was wrong)
- Back link at top: `&larr; All Services` → technologies.html

---

## File Structure

```
index.html              — Kengalia Technologies homepage (main entry)
about.html              — About Kengalia Concepts + divisions + partners
about-godspower.html    — Founder bio page
portfolio.html          — Work: Perfcent SaaS + UBA Global case studies
technologies.html       — Services overview page
service-web.html        — Web Design & Development
service-branding.html   — Visual Branding & Design
service-marketing.html  — Digital Marketing
service-it.html         — IT Support & Maintenance
service-consulting.html — Consulting & Training
service-data.html       — Data Analysis
art.html                — Kengalia Art hub (gallery landing)
art-night-eye.html      — Night Eye gallery (50 owl art pieces, full masonry)
attire.html             — Kengalia Attire (holding page — not live yet)
marketplace.html        — Kengalia Marketplace (holding page — not live yet)
tasks.txt               — Handoff log (done / waiting-on-client / next-time / deploy notes) — check this first on resume
css/dark-theme.css      — ALL custom styles go here (append only, never edit style.css)
sitemap.xml             — Keep updated when adding pages
robots.txt              — Standard allow all
```

### Art images
```
images/kegaliaArt/night-eye/   — 50 owl art files (kengalia-art-night-eye-01.png … -45.png, -anim-01/02/03.gif, -owl-01/02.png)
images/kegaliaArt/freestyle/   — 13 files (kengalia-art-freestyle-01…09.png, -dog-01/02, -lion, -wolf)
```
All art images are CSS `background-image` only (not `<img>`) — download protection. Class `.art-protected` + JS contextmenu block.

---

## Key CSS Classes (dark-theme.css)

| Class | Purpose |
|---|---|
| `.list-2col` | Responsive 2-column list (1-col on mobile) |
| `.partner-logo-box` | 72px-height flex container for partner logos |
| `.partner-invert` | `filter:invert(1)` for white-bg logos on dark pages |
| `.btn-cta-row` | CTA button row (stacks vertically on mobile) |
| `.art-hero` | Full-viewport art hero with CSS slideshow |
| `.art-slide .s1-.s5` | Hero slide items (30s cycle, `artFade` keyframe) |
| `.art-masonry` | CSS columns masonry grid (4→3→2 col responsive) |
| `.art-card` | `break-inside:avoid` masonry item |
| `.art-img` | CSS background-image art container (aspect-ratio 3/4 default) |
| `.art-img.sq` | 1:1 square variant |
| `.art-img.p45` | 4:5 variant |
| `.art-strip` | Horizontal scrolling freestyle image strip |
| `.art-tag` | Green uppercase Raleway label |
| `.art-h1 / .art-h2` | Cormorant Garamond headings for art pages |
| `.art-back` | Back link style (← Art) |
| `.art-protected` | Drag + context-menu blocked via JS |

---

## Completed Work

- Full dark theme site on Medio template
- All 6 service pages + technologies overview
- Portfolio: Perfcent SaaS + UBA Global case studies
- About page: team, divisions, 6 partner logos
- Founder bio page (godspower.jpg missing — placeholder emoji shown)
- Art gallery: art.html hub + art-night-eye.html (50 pieces, lazy-loaded masonry)
- All 63 art images renamed with SEO slugs
- Encoding fixed sitewide (Â·, â€", â€º, â†' all corrected)
- Mobile responsive: list-2col, partner logo sizing, gy-* gutters
- SEO: OG tags, canonical, JSON-LD, sitemap, robots.txt on all pages
- Active nav state on technologies.html
- Image download protection on all art pages

---

## Deploy / Hosting (live as of 2026-06-18)

- **Domain:** kengalia.com — registered AND hosted with qservers.ng (cPanel). SSL active (AutoSSL), HTTP→HTTPS redirect confirmed working.
- **Deploy model:** manual upload. Build a zip of the repo (excluding `.git`, `CLAUDE.md`, `tasks.txt`, `README.txt`, `LICENSE.txt`, `.vscode`) with files at the zip root, extract into `public_html` via cPanel File Manager.
- Both `.htaccess` files (root + `images/kegaliaArt/`) must survive the upload — confirm hidden files are shown in cPanel.
- After any local fix: rebuild the zip and re-upload — there is no git-deploy/CI on this project.

## Pending / Known Gaps

- **Founder photo** — `images/godspower.jpg` missing. about.html + about-godspower.html show a fallback emoji placeholder. Drop the file in and the layout is ready.
- **Contact form** — index.html `action="#"` needs a Formspree endpoint. User must create account at formspree.io and provide form ID.
- **Attire page** — holding page only. Will need its own gallery when ready (same pattern as art-night-eye.html).
- **Marketplace page** — holding page only.
- **Second art album** — user plans another art album. Create `art-[name].html` following the art-night-eye.html pattern. Add card on art.html.
- **Performance pass in progress** (started 2026-06-18) — see tasks.txt for the live Lighthouse baseline and what's left (font subsetting, async CSS, accessibility).

---

## Key Decisions / Rules

- Never edit `css/style.css` — all custom CSS goes in `css/dark-theme.css` (append to end).
- No AI language in copy ("AI-powered", "leverages AI", etc.).
- **No em-dashes in body copy/prose** — reads as AI-written. Title-style "X — Y" labels (page `<title>`, case-study h2/h3 headings, image captions) are fine and intentionally kept; flowing sentences are not. If you must join two clauses, use a period, comma, or colon instead.
- Prices in ₦ when shown. Nigerian market context applies.
- WhatsApp contact: `+2347026550798`
- GitHub remote: `https://github.com/Kengalia-supports/my-portfolio-projects.git`
- Branch: `main`
- **Bootstrap gutter trap:** never put a bare `g-5` (or any `g-*`/`gx-*` larger than the implicit default) on a `.row` that's a direct child of `.container` — the container's padding is fixed at the default gutter (12px/side) and won't grow to match, causing real horizontal overflow. Use `g-4` (1.5rem) which equals the default and always cancels cleanly. `gy-*` (vertical-only) is unaffected and safe at any size.
- **Hero sections using `min-height:100vh; display:flex; align-items:center;`** under the absolutely-positioned `.site-nav` need explicit `padding-top`/`padding-bottom` on that same flex container (not just relying on centering) or content can render clipped behind the nav on short viewports. Current safe value: `padding-top:120px; padding-bottom:40px;`.
- **Visual bugs:** don't guess from reading CSS/HTML alone — screenshot the actual rendered page (Puppeteer via `puppeteer-core` pointed at the real Chrome install works well on this Windows box; use a local `python -m http.server` to test fixes before they're live, since the deploy model has no staging). Wait for `document.fonts.ready` before screenshotting or icon/logo fonts render blank.
