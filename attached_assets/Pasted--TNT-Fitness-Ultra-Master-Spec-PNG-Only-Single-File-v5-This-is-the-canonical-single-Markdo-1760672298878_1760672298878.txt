# TNT Fitness — Ultra Master Spec (PNG‑Only, Single‑File) v5

**This is the canonical, single Markdown that contains _everything_** (design tokens, full copy for every page, flows, file tree, asset names/sizes, build rules). No other .md files are required. All site text is embedded here verbatim. Assets will be generated as **PNGs only** (no SVG) per the queue at the end of this document.

---

## 0) Non‑Negotiables
- **Functional code only** — if a media file isn’t ready, include a `.PLACE-HERE.txt` with the exact target name; do not ship placeholder UI text.
- **Docker‑first** — Node builder → Nginx runner; print timestamped logs at build start/end and server start.
- **Whole‑file returns** — when any file changes, return the entire file content.
- **Accessibility** — WCAG AA contrast; keyboard navigation; visible focus; `prefers-reduced-motion` fallback for hero video.
- **Performance** — lazy video/images; lean CSS/JS; static rendering where possible.

---

## 1) Design System — Tokens (authoritative)
### 1.1 CSS Tokens (`/public/tokens.css`)
```css
:root{
  --tnt-navy:#0B2545;  /* primary brand navy */
  --tnt-indigo:#243B6B;/* accents, strokes */
  --tnt-gold:#D4A017;  /* highlights/CTAs */
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
/* utility */
body{font-family:var(--font-body);color:var(--tnt-navy)}
h1,h2,h3,.display{font-family:var(--font-display)}
a{color:var(--tnt-indigo)} a:hover{opacity:.9}
.button{display:inline-flex;gap:8px;align-items:center;padding:12px 20px;border-radius:14px;font-weight:600}
.button--primary{background:var(--tnt-gold);color:#000}
.button--outline{border:1px solid rgba(255,255,255,.5);color:#fff}
.card{border-radius:20px;background:#fff;box-shadow:var(--shadow-1)}
```

### 1.2 JSON Tokens (`/docs/design-tokens.json`)
```json
{
  "colors":{
    "navy":"#0B2545","indigo":"#243B6B","gold":"#D4A017","white":"#FFFFFF","black":"#0B0D10"
  },
  "fonts":{"display":"Montserrat","body":"Inter"},
  "spacing":[4,8,12,16,24,32,48,64],
  "radii":{"sm":10,"md":14,"lg":20},
  "shadows":{"1":"0 2px 6px rgba(0,0,0,.12)","2":"0 10px 30px rgba(0,0,0,.18)"}
}
```

**Palette (for reference):** Navy `#0B2545`, Indigo `#243B6B`, Gold `#D4A017`, White `#FFFFFF`, Black `#0B0D10`.

**Typography:** Headlines → Montserrat ExtraBold (800–900). Body → Inter (400–600). Buttons → Montserrat 700.

---

## 2) Information Architecture (routes)
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

## 3) Exact Site Copy (embed verbatim — no external files)
### 3.1 Home
**Headline:** TODAY, NOT TOMORROW  
**Subcopy:** Immediate, focused coaching across **boxing**, **strength**, **calisthenics**, **flexibility**, and **fat loss**—engineered for accountability and results.  
**CTA‑Primary:** Schedule Assessment  
**CTA‑Secondary:** View Programs  
**Programs intro:** Choose a proven path. Each track pairs technique with conditioning and smart recovery.  
**Coach snippet:** Fitness is wellness for mind, spirit, and body.  
**Assessment kicker:** A quick call + movement screen to tailor your plan. No hard sell—just clarity.

### 3.2 Programs (Index)
- **Calisthenics** — Control your body, master movement.  
- **Flexibility** — Mobility work to move pain‑free.  
- **Boxing** — Conditioning + technique for ring stamina.  
- **Strength Training** — Progressive overload, durable gains.  
- **Fat Loss** — Nutrition guidance + metabolic conditioning.

### 3.3 Program Detail — Filled Content
**Calisthenics** — *You’ll achieve:* Core control · Skill progressions · Full‑body strength.  
*Weekly structure:* 3 days/week · 45–60 min · Pull/Push/Legs + skill.  
*Gear:* Rings, bar, floor space.  
*CTA:* Start with an assessment to baseline pull‑ups, dips, and hollow body.

**Flexibility** — *You’ll achieve:* Mobility flows · Joint health · Pain‑free range.  
*Weekly structure:* 3–4 days/week · 30–45 min · Spine/hips/shoulders blocks.  
*Gear:* Mat, strap.  
*CTA:* Assessment screens ankles, hips, and thoracic rotation.

**Boxing** — *You’ll achieve:* Footwork & guard · Pad rounds · Conditioning.  
*Weekly structure:* 3 days/week · 60 min · Drills + conditioning finisher.  
*Gear:* Gloves, wraps, jump rope.  
*CTA:* Assessment sets stance and guard; we progress safely to pad work.

**Strength Training** — *You’ll achieve:* Progressive overload · Form & safety · Durable gains.  
*Weekly structure:* 3–4 days/week · 60–75 min · Lower/Upper split.  
*Gear:* Barbell/dumbbells or kettlebells.  
*CTA:* Assessment verifies hinge/squat patterns and load tolerance.

**Fat Loss** — *You’ll achieve:* Nutrition guidance · Energy balance · Metabolic circuits.  
*Weekly structure:* 4 days/week · 45–60 min · Circuits + LISS.  
*Gear:* Minimal; bodyweight + dumbbells.  
*CTA:* Assessment personalizes nutrition and cardio adherence plan.

### 3.4 Trainer — Revelation & Evolution (site copy)
**Revelation — Why I Became a Trainer**  
I was born into a fight for breath. Asthma dominated my childhood. Thanks to my mother’s job at Mount Sinai East, I spent too many hours in emergency rooms. At ten, I chose to put down the inhaler and chase sport. Coaches worried, benched me, and in that frustration I found fuel—fuel to perform, to prove, to keep showing up.  
In 2019 a freight elevator door collapsed on my head at work. The MRI read: **severe brain contusions and concussion; cervical spine damage (C1–C5); lumbar damage (L5–L7)**. I spent two years in cognitive and physical therapy, and a year and a half learning to walk without support.

**Evolution — What I Do Now**  
Rebuilding my mind, spirit, and body became non‑negotiable. In 2024 I formalized that work, returning to school, earning **three personal trainer certifications** and a **nutritionist certification**, and studying human performance every day. My coaching is built on that recovery: *breath before load, posture before power, consistency over everything.*  
**Philosophy**  
Fitness is more than reps. It is capacity—mental, spiritual, physical. It served and saved me—now it’s your turn. **Are you ready?**

**(Verbatim archive as provided by client)**  
_Revelation:_  
My road to becoming a trainer wasn’t necessarily an upbeat story, although with all trails and tribulations “To the VICTOR must come the SPOILS”.

First day of my existence came with an asthma attack, over and over as a child asthma was biggest enemy.

Greatful for my mother’s employment at the Mt Sinai east I was frequently seen without having to wait in the ER. At the age of 10 I made the decision to stop taking my albuterol medication . As a youth I was engaged in many sports programs and my Coaches were always in constant worry about my health  so this would compel them to sit me out of games This fueled my early passion to produce and perform, this passion, years later , would soon heal me

In July 2019 , while working ,a freight elevator door collapsed on my head due to faulty wires. It landed me in the hospital. I left the hospital with a MRI scan reading my brain has severe Brain contusions concussion , Cervical spine damage (vertebrae 1-5 ) Lumbar spine damage (vertebrae  5-7) .  This injury forced me into 2 years of Cognitive and Physical therapy and a year and a half of struggling walking with support.

MRI read severe Brain Contusions Concussed.  Cervical spine damage 1-5
Lumber spine 5-7. 2years of cognitive and physical therapy, a year and a half of walking with Support.

_EVOLUTION:_  
In 2024, my journey of repairing my mental , spiritual and Physical wellness led me to wanting to know more, so I began to learn about the human body. Myself - study, later developed me returning to school earning me three Physical trainer Certification and a Nutritionist Certification.  

Fitness is more than lifting weights it’s more than aesthetic pleasure, fitness is wellness for the Mind ,Spirit and Body.

Fitness has Served and Saved me and now it’s your turn,  

Are you ready ?

### 3.5 Assessment
**Explainer:** 20‑min call · Movement screen · Program fit · Next steps.  
**Form labels:** Name · Email/Instagram · Goals (calisthenics, flexibility, boxing, strength, fat‑loss) · Notes · Preferred time.  
**Validation:** Require name + contact; email format or IG handle; show inline error text.  
**Success copy:** Thanks! We’ll reply within 24 hours with next steps.

### 3.6 Results
**Headline:** Consistency compounds.  
**Body:** See what clients achieved in 8–12 weeks.  
**Modules:** testimonials (quote + metric) and before/after grid.

### 3.7 Instagram
**Headline:** Stay accountable.  
**Body:** Latest posts and behind‑the‑scenes training.  
**CTA:** Follow on Instagram.

### 3.8 Contact
**Headline:** Let’s talk.  
**Body:** Send a quick message with your goals. We’ll respond within 24 hours.  
**Form:** Name, Email, Message → POST `/api/contact`.

### 3.9 Legal
**Privacy** & **Terms** shell pages (replace with counsel‑approved content).

---

## 4) Hero Video — Parallax Prompts & Filenames
**Desktop (3840×2160 @ 24fps; 10s loop)** — Industrial training space with depth; blurred foreground (ropes/kettlebells), mid‑ground athlete, hazy background; slow dolly‑in and slight vertical drift; palette Navy **#0B2545**, Indigo **#243B6B**, Gold **#D4A017**; no text/logos; clean grain; no flicker/banding.

**Mobile (1080×1920 @ 24fps; 10s loop)** — same palette; compose subject right third; left 35% darker for headline/CTA.  
**Actions:** kettlebell swings / battle ropes / deadlift / jump rope / sled push.  
**Files:** `/public/videos/hero_kettlebell.mp4`, `/public/videos/hero_ropes.mp4`.

---

## 5) **PNG Asset Inventory** (No SVG)
> Transparent backgrounds for icons; opaque for thumbnails/posters/OG. All hex values must match tokens.

### 5.1 Brand → `/public/brand/`
- `icon_1A_1024.png`, `icon_1A_512.png`, `icon_1A_256.png`, `icon_1A_128.png`, `icon_1A_64.png`
- `icon_1B_1024.png`, `icon_1B_512.png`, `icon_1B_256.png`, `icon_1B_128.png`, `icon_1B_64.png`
- `horizontal_1A_dark_FIX.png`, `horizontal_1A_dark_FIX_transparent.png`
- `horizontal_1A_light_FIX.png`, `horizontal_1A_light_FIX_transparent.png`

### 5.2 Favicons (square) → `/public/`
- `favicon-512.png`, `favicon-192.png`, `favicon-180.png`, `favicon-128.png`, `favicon-64.png`, `favicon-48.png`, `favicon-32.png`, `favicon-16.png`

### 5.3 Program Icons (transparent, 512×512) → `/public/icons/png/`
- `kettlebell.png` · `stretch-band.png` · `boxing-glove.png` · `barbell.png` · `heart-rate.png` · `stopwatch.png`

### 5.4 Program Thumbnails (opaque, 1200×800) → `/public/images/`
- `thumb_calisthenics.png` · `thumb_flexibility.png` · `thumb_boxing.png` · `thumb_strength.png` · `thumb_fat-loss.png`

### 5.5 Hero Posters & OG
- `/public/images/hero_poster_desktop.jpg` (1920×1080)  
- `/public/images/hero_poster_mobile.jpg` (1080×1920)  
- `/public/og-image.png` (1200×630)

---

## 6) Flows (in‑document)

### 6.1 Site Flow (Mermaid)
```mermaid
flowchart LR
Home-->Programs-->Assessment-->Success
Home-->Trainer-->Assessment
Trainer-->Assessment
Assessment-->Success
Success-->Conversion{Book Package}
```

### 6.2 Trainer Journey (Mermaid)
```mermaid
flowchart TD
Asthma-->Passion-->Injury2019-->Rehab(2y Therapy)-->Study2024-->Philosophy(Breath→Posture→Power)-->Coaching-->Impact
```

### 6.3 Content Mapping (JSON, inline reference only)
```json
{
  "home":{"video_desktop":"public/videos/hero_kettlebell.mp4","video_mobile":"public/videos/hero_ropes.mp4"},
  "programs":{"details":["calisthenics","flexibility","boxing","strength","fat-loss"]},
  "trainer":{"source":"(trainer copy embedded above)"},
  "assessment":{},
  "results":{},
  "instagram":{},
  "contact":{}
}
```

---

## 7) Build & Docker Commands
```bash
npm i && npm run dev
npm run build && npm run preview
# Docker
docker build -t tnt-fitness .
docker run --rm -p 8080:80 tnt-fitness
```

---

## 8) Acceptance Checklist
- Hero video renders (desktop+mobile) with safe text region & motion fallback.  
- All pages route and render the copy above exactly.  
- Header/Footer match spec; forms validate; success state works.  
- Tokens & colors match hex values.  
- Favicons + OG present.  
- Accessibility passes (contrast, focus, keyboard).  
- Docker image serves SPA with fallback.

---

## 9) **PNG Generation Queue (one‑by‑one)**
**Order:**
1) `/public/brand/icon_1A_1024.png` — letterless TNT box + flexed arms; **Navy #0B2545** body; **Gold #D4A017** arms; **Indigo #243B6B** fuse; gold starburst; **transparent background**.
2) `/public/brand/icon_1B_1024.png` — alternative arm proportions; same palette; **transparent**.
3) `/public/brand/horizontal_1A_dark_FIX.png` — dark navy background (opaque); wordmark + icon 1A; **no clipping**.
4) `/public/brand/horizontal_1A_light_FIX.png` — light background (opaque); wordmark + icon 1A; **no clipping**.
5) Favicons `/public/favicon-*.png` (square, opaque) derived from **icon 1A**.
6) Program icons (512×512 transparent): `kettlebell.png`, `stretch-band.png`, `boxing-glove.png`, `barbell.png`, `heart-rate.png`, `stopwatch.png`.
7) Program thumbnails (1200×800 opaque): `thumb_calisthenics.png`, `thumb_flexibility.png`, `thumb_boxing.png`, `thumb_strength.png`, `thumb_fat-loss.png`.
8) Posters: `hero_poster_desktop.jpg` (1920×1080), `hero_poster_mobile.jpg` (1080×1920).
9) Social: `og-image.png` (1200×630 opaque).

**After each image:** return that single PNG/JPG and wait for confirmation before generating the next.

