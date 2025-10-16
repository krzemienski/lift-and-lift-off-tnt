# TNT Fitness — Master Build Prompt (Complete Copy, Assets, Flows)

**Objective:** Build a production‑ready TNT Fitness marketing site (desktop + mobile) using the copy, assets, and flows below. Follow **Docker‑first**, include **timestamped logging**, and always return **whole files** (no diffs). Use the file names and structure as specified so other agents can consume them automatically.

**Stack target:** Vite + React + Tailwind (or equivalent), Nginx container for prod.

---

## 0) Non‑negotiables
- **Functional code only** — no placeholders.
- **Docker‑first** — include a Dockerfile (Node build → Nginx serve).
- **Logging** — print timestamped messages at build start/end and server start.
- **Whole‑file returns** — whenever a file changes, output the entire file content.
- **Accessibility** — WCAG AA contrast, keyboard nav, visible focus, motion‑reduced fallback.
- **Performance** — lazy video/images, light CSS/JS, static rendering where possible.

---

## 1) Design Tokens (authoritative)
```css
:root{
  --tnt-navy:#0B2545; /* primary brand navy */
  --tnt-indigo:#243B6B; /* accents, strokes */
  --tnt-gold:#D4A017; /* highlights/CTAs */
  --tnt-white:#FFFFFF; /* text on dark */
  --tnt-black:#0B0D10; /* reverse bg */

  --font-display:"Montserrat",ui-sans-serif,system-ui;
  --font-body:"Inter",ui-sans-serif,system-ui;

  --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px;
  --space-6:24px; --space-8:32px; --space-12:48px; --space-16:64px;

  --radius-sm:10px; --radius-md:14px; --radius-lg:20px;
  --shadow-1:0 2px 6px rgba(0,0,0,.12);
  --shadow-2:0 10px 30px rgba(0,0,0,.18);
}
```
**Typography**: Headlines → Montserrat ExtraBold (800–900). Body → Inter (400–600). Buttons → Montserrat 700.

---

## 2) Brand Assets (file names to use)
Place under `/public/brand/`:
- Icon (no text) — **two variants approved**
  - `icon_1A_clean_256.png`, `icon_1B_clean_256.png` (use 1A by default)
- Lockups (for reference/OG only)
  - `horizontal_1A_dark_FIX.png`, `horizontal_1A_light_FIX.png` (and transparent twins)
- Favicons (root of `/public/`): `favicon-512.png`, `favicon-192.png`, `favicon-180.png`, `favicon-128.png`, `favicon-64.png`, `favicon-48.png`, `favicon-32.png`, `favicon-16.png`
- Social: `/public/og-image.png`

**Program icons (duotone, monoline) — generate and place under `/public/icons/`**
- `kettlebell-gold.svg`, `boxing-glove-gold.svg`, `barbell-gold.svg`, `stretch-band-gold.svg`, `heart-rate-gold.svg`, `stopwatch-gold.svg`

---

## 3) Parallax Hero Video (desktop & mobile) — Generation Prompts
**Desktop (4K, 24fps, 10s seamless loop):**
> Industrial training space with depth: blurred foreground ropes/kettlebells, mid‑ground athlete in motion, soft hazy background. Slow dolly‑in, subtle vertical drift. Foreground moves fastest for parallax. Palette: Navy **#0B2545**, Indigo **#243B6B**, Gold **#D4A017**. No text/logos. Clean grain, no flicker/banding.
> Actions (choose 1 per render): kettlebell swings / battle ropes / deadlift / jump rope / sled push.
> Export MP4 high bitrate; silent. Loop seamlessly.

**Mobile (1080×1920, 24fps, 10s seamless loop):**
> Same scene & palette. Re‑compose for vertical: subject on right third; keep left 35% darker for headline/CTA. Actions as above. Loop seamlessly.

**File names**
- `/public/videos/hero_kettlebell.mp4`
- `/public/videos/hero_ropes.mp4`

---

## 4) Information Architecture (routes)
```
/                        Home (hero video, programs grid, coach snippet, results, IG)
/programs                Programs index (grid + links)
/programs/:slug          Program detail (5: calisthenics, flexibility, boxing, strength, fat-loss)
/trainer                 Coach Rico — Revelation & Evolution
/assessment              Process + form (validated); success state
/results                 Testimonials + before/after gallery
/instagram               Embedded grid + follow
/contact                 Simple contact form
/privacy, /terms         Legal
/404                     Not found
```

---

## 5) Components & States (build exactly)
- **Header**: left logo (icon 1A), right nav (Programs, Trainer, Assessment, Results, Instagram) + CTA **Get Started**. Sticky, translucent navy, border‑bottom white/10.
- **Footer**: three columns (brand; site links; legal).
- **Hero**: full‑bleed video, navy overlay 55%. Headline, subcopy, two CTAs. Motion‑reduction: swap to poster image and freeze parallax.
- **ProgramCard**: image (or color block), title, blurb; card radius 20px; hover shadow‑2.
- **TestimonialCard**: quote, name, result metric; subtle gold accent.
- **Forms**: 12px radius, 1.5px border indigo; focus ring gold/indigo; error texts red‑700.

---

## 6) Exact Copy (site text)
### 6.1 Home
**Headline:** TODAY, NOT TOMORROW  
**Subcopy:** Immediate, focused coaching across **boxing**, **strength**, **calisthenics**, **flexibility**, and **fat loss**—engineered for accountability and results.  
**CTA‑Primary:** Schedule Assessment  
**CTA‑Secondary:** View Programs

**Programs intro:** Choose a proven path. Each track pairs technique with conditioning and smart recovery.  
**Coach snippet:** Fitness is wellness for mind, spirit, and body.  
**Assessment kicker:** A quick call + movement screen to tailor your plan. No hard sell—just clarity.

### 6.2 Programs (index)
- **Calisthenics** — Control your body, master movement.  
- **Flexibility** — Mobility work to move pain‑free.  
- **Boxing** — Conditioning + technique for ring stamina.  
- **Strength Training** — Progressive overload, durable gains.  
- **Fat Loss** — Nutrition guidance + metabolic conditioning.

### 6.3 Program Detail (per track)
**Structure for each page**:
- *You’ll achieve* (3 bullets)  
- *Weekly structure* (days/week, minutes, split)  
- *Gear*  
- *CTA* (Start with an Assessment)

**Calisthenics**  
You’ll achieve: Core control · Skill progressions · Full‑body strength.  
Weekly structure: 3 days/week · 45–60 min · Pull/Push/Legs + skill.  
Gear: Rings, bar, floor space.  
CTA: Start with an assessment to baseline pull‑ups, dips, and hollow body.

**Flexibility**  
You’ll achieve: Mobility flows · Joint health · Pain‑free range.  
Weekly structure: 3–4 days/week · 30–45 min · Spine/hips/shoulders blocks.  
Gear: Mat, strap.  
CTA: Assessment screens ankles, hips, and thoracic rotation.

**Boxing**  
You’ll achieve: Footwork & guard · Pad rounds · Conditioning.  
Weekly structure: 3 days/week · 60 min · Drills + conditioning finisher.  
Gear: Gloves, wraps, jump rope.  
CTA: Assessment sets stance and guard; we progress safely to pad work.

**Strength Training**  
You’ll achieve: Progressive overload · Form & safety · Durable gains.  
Weekly structure: 3–4 days/week · 60–75 min · Lower/Upper split.  
Gear: Barbell/dumbbells or kettlebells.  
CTA: Assessment verifies hinge/squat patterns and load tolerance.

**Fat Loss**  
You’ll achieve: Nutrition guidance · Energy balance · Metabolic circuits.  
Weekly structure: 4 days/week · 45–60 min · Circuits + LISS.  
Gear: Minimal; bodyweight + dumbbells.  
CTA: Assessment personalizes nutrition and cardio adherence plan.

### 6.4 Trainer — Revelation & Evolution (site copy)
**Revelation — Why I Became a Trainer**  
I was born into a fight for breath. Asthma dominated my childhood. Thanks to my mother’s job at Mount Sinai East, I spent too many hours in emergency rooms. At ten, I chose to put down the inhaler and chase sport. Coaches worried, benched me, and in that frustration I found fuel—fuel to perform, to prove, to keep showing up.  
In 2019 a freight elevator door collapsed on my head at work. The MRI read: **severe brain contusions and concussion; cervical spine damage (C1–C5); lumbar damage (L5–L7)**. I spent two years in cognitive and physical therapy, and a year and a half learning to walk without support.

**Evolution — What I Do Now**  
Rebuilding my mind, spirit, and body became non‑negotiable. In 2024 I formalized that work, returning to school, earning **three personal trainer certifications** and a **nutritionist certification**, and studying human performance every day. My coaching is built on that recovery: *breath before load, posture before power, consistency over everything.*  
**Philosophy**  
Fitness is more than reps. It is capacity—mental, spiritual, physical. It served and saved me—now it’s your turn. **Are you ready?**

*(Archive verbatim text is stored separately in `src/content/trainer_story_raw.md`.)*

### 6.5 Assessment
**Explainer:** 20‑min call · Movement screen · Program fit · Next steps.  
**Form labels:** Name · Email/Instagram · Goals (calisthenics, flexibility, boxing, strength, fat‑loss) · Notes · Preferred time.  
**Validation:** Require name + contact; email format or IG handle; show inline error text.  
**Success copy:** Thanks! We’ll reply within 24 hours with next steps.

### 6.6 Results
**Headline:** Consistency compounds.  
**Body:** See what clients achieved in 8–12 weeks.  
**Modules:** testimonials (quote + metric) and before/after grid.

### 6.7 Instagram
**Headline:** Stay accountable.  
**Body:** Latest posts and behind‑the‑scenes training.  
**CTA:** Follow on Instagram.

### 6.8 Contact
**Headline:** Let’s talk.  
**Body:** Send a quick message with your goals. We’ll respond within 24 hours.  
**Form:** Name, Email, Message → POST `/api/contact`.

### 6.9 Legal
**Privacy** & **Terms** shell pages (replace with counsel‑approved content).

---

## 7) File/Folder Structure to Generate
```
public/
  tokens.css
  brand/
    icon_1A_clean_256.png
    icon_1B_clean_256.png
    horizontal_1A_dark_FIX.png
    horizontal_1A_light_FIX.png
  icons/
    kettlebell-gold.svg
    boxing-glove-gold.svg
    barbell-gold.svg
    stretch-band-gold.svg
    heart-rate-gold.svg
    stopwatch-gold.svg
  videos/
    hero_kettlebell.mp4
    hero_ropes.mp4
  og-image.png
  favicon-32.png ... favicon-512.png

src/
  content/
    home.md
    programs.md
    assessment.md
    results.md
    instagram.md
    contact.md
    trainer_story_raw.md
    trainer_story_longform.md
    programs/
      calisthenics.md
      flexibility.md
      boxing.md
      strength.md
      fat-loss.md
  components/ (Header, Footer, Hero, ProgramCard, TestimonialCard)
  routes/ (Home, Programs, ProgramDetail, Trainer, Assessment, Results, Instagram, Contact, Legal, NotFound)
  lib/ (md renderer, logger)

flows/
  site_flow.mmd
  trainer_journey.mmd
  content_mapping.json

prompts/
  AI_ASSEMBLY_PROMPT.md
  PROMPT_SORA_PARALLAX.md
  PROMPT_COPY_STYLE.md

Dockerfile, vite.config.ts, tailwind.config.js, postcss.config.js,
index.html, package.json, scripts/log.mjs, README.md
```

---

## 8) Build & Docker Commands (enforce logging)
```bash
npm i && npm run dev                      # dev
npm run build && npm run preview          # prod preview
# Docker
docker build -t tnt-fitness .
docker run --rm -p 8080:80 tnt-fitness
```
Add timestamped console logs via `scripts/log.mjs` in `predev`, `prebuild`, and `postbuild`.

---

## 9) Acceptance Checklist
- Parallax hero renders (desktop & mobile) with safe text region.
- All pages route and render the Markdown copy above exactly.
- Header/Footers match spec; forms validate; success state works.
- Tokens & colors match hex values.
- Favicons + OG present.
- Accessibility checks pass (contrast, focus, keyboard).
- Docker image serves SPA with fallback.

---

## 10) Output Rules (critical)
1) **Return whole files** on creation or modification.  
2) **No placeholders** — if a media file is missing, include a `.PLACE-HERE.txt` marker with exact target name.  
3) Use the **exact file names** and **paths** defined above.  
4) After finishing, produce a **single ZIP** of the full site.

---

## 11) Next Actions (for the agent)
1) Generate `/public/tokens.css`, `/docs/design-tokens.json`.  
2) Generate **all** Markdown files under `/src/content/` (use the copy in §6 verbatim).  
3) Generate icons listed in §2 (duotone SVGs) with file names under `/public/icons/`.  
4) Build components and routes exactly as in §5 and §7.  
5) Provide Dockerfile and scripts with timestamped logging.  
6) Produce ZIP of the project, then return links to **each individual file** (and the ZIP) in order.

