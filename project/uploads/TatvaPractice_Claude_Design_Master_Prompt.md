# TatvaPractice — Master Build Brief for Claude Design

> Paste this entire brief into Claude design as your initial prompt. Iterate from the output, then move to Claude code for Next.js conversion.

---

## 1. ROLE & GOAL

You are a senior SaaS product designer building the marketing website for **TatvaPractice**, an AI-first EMR for Indian doctors and hospitals. Build the full site as production-grade, conversion-focused HTML+CSS using TailwindCSS. Output must be clean, semantic, accessible, and structured so it can be lifted into a Next.js 14 app with App Router with minimal refactor.

**You are not a generic AI startup site builder.** This is a healthcare product for a risk-averse, time-poor audience (Indian doctors). Trust beats novelty. Specificity beats abstraction. Every page must answer three questions in the first viewport: *What problem does this solve? How is it different from other tools? Why should an Indian doctor trust this?*

---

## 2. PRODUCT CONTEXT

**TatvaPractice** is an AI-first, ABDM-certified EMR + practice management platform built for Indian OPD reality. It replaces 5–6 disconnected tools (notes, billing, queue, reminders, lab, patient comms) with one connected workflow.

**Three flagship AI input modes** (this is the real differentiator):
- **VoiceRx** — speak the consultation, AI structures it into a prescription in 30 seconds. Works in 9 Indian languages including Hindi-English mixed.
- **SmartSync** — write on a digital pen as you always have. AI converts handwriting into a structured Rx in real time. Zero learning curve.
- **SnapRx** — photograph any handwritten prescription. Healthcare-grade OCR digitises it.

**Plus AI agents:** DoctorAgent (DDx, drug interactions, lab interpretation, guidelines), Receptionist Agent (front desk automation), Agent Amaya (note structuring).

**Plus core EMR:** Appointments, Queue, Billing, Patient History, Lab Integration, Telehealth, Vaccination, Analytics.

**Plus India-specific moats:** ABDM/ABHA integration, NHA approval, DHIS government incentive scheme (doctors *earn* per digital Rx), 9 Indian languages, 25+ specialties, 200+ cities, 10,000+ doctors, 12 lakh+ digital Rx generated.

**Audience — three ICPs:**
1. **Independent specialists** (solo doctors, primary CTA = Start Free Trial)
2. **Multi-doctor clinics** (clinic owners + practice managers, CTA = Free Trial or Demo)
3. **Small/mid hospitals** (CXO/IT/Clinical leads, primary CTA = Book Demo)

**Tone:** professional, warm, reassuring, simple English. Avoid "transform / leverage / synergy / empower / cutting-edge." Use Indian-relevant references (₹, OPD, Ahmedabad/Mumbai/Delhi, MBBS, Gujarati/Hindi/Tamil).

**Master positioning (do not paraphrase or soften):**
> *Less typing. More treating. The AI-first EMR built for Indian OPD reality.*

---

## 3. BRAND TOKENS — USE EXACTLY. DO NOT INVENT NEW COLOURS OR FONTS.

### Colour primitives

```
TP Blue (Primary — CTAs, links, focus, primary brand)
  blue-50:  #EEEEFF   blue-100: #D8D8FA   blue-200: #B5B4F2
  blue-300: #8E8DE8   blue-400: #6C6BDE   blue-500: #4B4AD5  ← brand anchor
  blue-600: #3C3BB5   blue-700: #2E2D96   blue-800: #212077   blue-900: #161558

TP Violet (Secondary — AI identity ONLY. Never used for CTAs, never for body chrome.)
  violet-50: #FAF5FE   violet-500: #A461D8   violet-700: #703A9E   violet-900: #3E1C64

TP Amber (Tertiary — minimised. Only for rare highlights: e.g., "DHIS earnings" badge, single stat callout.)
  amber-500: #F5B832

TP Slate (Neutrals)
  slate-0:   #FFFFFF (page bg, cards)
  slate-50:  #FAFAFB (subtle sections, zebra)
  slate-100: #F1F1F5 (page canvas alt)
  slate-200: #E2E2EA (borders, separators)
  slate-300: #D0D5DD
  slate-500: #717179 (default icons, meta)
  slate-600: #545460 (labels, captions)
  slate-700: #454551 (body text default)
  slate-800: #2C2C35 (strong emphasis, headings)
  slate-900: #171725 (deepest text)

Semantic
  success: #10B981   warning: #F59E0B   error: #E11D48
```

### Typography

- **Headings:** `Mulish`, weights 600/700/800
- **Body:** `Inter`, weight 400 (and 500 for emphasis)
- Type scale: Display XL 56/64, Display 48/56, H1 36/44, H2 30/38, H3 24/32, H4 20/28, H5 16/24, Body XL 20/32, Body LG 18/28, Body Base 16/24, Body SM 14/20
- Letter spacing: Display/H1/H2 negative (−0.02 to −0.03em), Body 0

### Spacing & radius

- Base unit: 2px. Cards default to 18px internal padding.
- Section vertical padding (desktop): 96px top + bottom for major sections, 64px for tight sections.
- Section vertical padding (mobile): 56px / 40px.
- Card corner radius: 20px (feature cards), 24px (hero cards/banners), 12px (CTAs default), 42px (pill buttons), full (avatars/dots).

### Shadows

```
shadow-xs:  0 1px 2px 0 rgba(23,23,37,0.04)         → inputs, small cards
shadow-sm:  default card shadow, dropdowns
shadow-md:  elevated cards, modals, popovers
shadow-lg:  floating elements, prominent modals
shadow-xl:  hero overlays, command palettes
```

### Buttons (anatomy)

- Sizes: S=36px, M=42px, L=48px height. Padding scales with size.
- Variants: **Solid (primary, filled blue-500)**, **Outline**, **Ghost**, **Link**.
- Default CTA on the site is **Solid Primary, size L, radius 12px**.
- Icon-text gap: 6px. Default icon size: 20px (inside L button).

---

## 4. AESTHETIC RULES (THIS IS WHERE PAST OUTPUTS WENT WRONG — READ CAREFULLY)

**The single most important rule:** indigo-violet is an **accent**, not a **background**.

### DO

- **Page backgrounds are predominantly white (#FFFFFF) and slate-50 (#FAFAFB).** Alternate sections between white and slate-50 for rhythm.
- Use TP Blue 500 for: primary CTAs, active links, focus rings, primary icons inside cards, the active nav state, badges that need to pop.
- Use TP Blue 50/100 (very pale lavender) for: subtle background tints behind feature spotlights, callout boxes, AI-feature highlight surfaces, badge backgrounds with `text-blue-700`.
- Use TP Violet only when explicitly marking AI features (a small "AI" pill, an AI-generated content surface, an icon for an AI module).
- Use TP Amber once or twice per page maximum — for the DHIS earnings callout and possibly one hero stat.
- **Use the heavy indigo gradient (blue-700 → blue-900 or blue-600 → violet-700) ONCE per page maximum.** Reserve it for the final pre-footer CTA band ("Start your free 7-day trial"). Not for hero. Not for feature page banners.
- Show real product UI inside laptop/phone frames against light backgrounds. The UI chrome itself can be indigo-accented (sidebar nav, active rows) — that's where indigo earns its place.
- Show real Indian context: a clinic OPD scene, a doctor in white coat with stethoscope, a Hindi/Gujarati prescription on screen, a ₹ symbol in pricing. Stock "smiling young white-coat doctor in front of grey wall" is forbidden.

### DO NOT

- ❌ Do not use full-bleed indigo or violet gradients as section backgrounds, especially heroes. The current Claude design's mistake.
- ❌ Do not put white text on dark indigo as the page-level treatment. White-on-indigo is fine *only* inside the one pre-footer CTA band and inside small badges.
- ❌ Do not repeat the same hero-banner-on-purple template across every feature page. Each feature page hero gets a different layout (split / centered / device-led / quote-led — see Section 7).
- ❌ Do not use TP Violet for primary CTAs. Buttons are TP Blue 500 always (the brand guide is explicit).
- ❌ Do not use neon glows, mesh gradients, or animated background blobs. Subtle radial fade behind a feature spotlight is the maximum allowed.
- ❌ Do not use generic emoji icons (📅 💊 🔬) as the icon system. Use Lucide or Heroicons (line, 24px, 1.5px stroke), TP Blue 500. Emoji are only acceptable inside the existing FAQ source content if you keep them.
- ❌ Do not invent new section patterns. Use the patterns specified in Section 7.
- ❌ Do not write generic SaaS copy. The copy in Section 8 is the copy. Use it. If a section needs copy not specified, mirror the voice and length of what's already provided.

---

## 5. ICONS, IMAGERY, BACKGROUNDS

**Icons:** Lucide React (or Heroicons), line style, stroke 1.5–2px, size 20–24px in cards, 32px in feature spotlights. Default colour TP Blue 500 inside white surfaces; TP Blue 700 inside blue-50 tinted surfaces. Never multi-coloured. Never emoji except where explicitly noted.

**Imagery hierarchy (from highest priority to lowest):**
1. **Real product UI screenshots** in laptop/phone device frames. (Use named placeholders for v1; see Section 9.)
2. **Real Indian doctor and clinic photographs** — mid-shot, mid-action, real OPD context, real waiting area, doctor explaining to patient. Diverse: men + women, varied ages, varied specialties, varied skin tones representative of India.
3. **Lifestyle context shots** — patient checking phone with appointment reminder, pharmacist with Rx printout, receptionist at front desk.
4. **Illustration / iconography** — only as accent, never as the primary visual.
5. **Stock corporate photos** — last resort.

**Backgrounds:**
- Default: white (#FFFFFF) or slate-50 (#FAFAFB).
- Subtle texture allowed once per page (very faint medical-cross or grid pattern at 3% opacity).
- Heavy gradient: ONE per page, only on the pre-footer CTA band. Direction: 135deg, blue-600 → blue-800. Decorative SVG overlay shapes at 8–12% opacity.

---

## 6. COMPONENT LIBRARY (BUILD AS REUSABLE COMPONENTS)

Build these named components. Use the same exact name throughout the site so the dev team can map them 1:1 to React components later.

| Component | Purpose | Where used |
|---|---|---|
| `<TopNav>` | Sticky header, logo + nav + dual CTA | All pages |
| `<HeroSplit>` | Left copy, right product UI mock | Homepage, Solutions pages |
| `<HeroCentered>` | Centered headline, dual CTA, single product visual below | Most feature pages |
| `<HeroQuote>` | Centered quote-led hero with doctor photo | Pricing, Customer stories |
| `<TrustBar>` | Horizontal compliance + customer logo strip | Below every hero |
| `<ProblemCallout>` | Two-stat problem framing block | Homepage, feature pages |
| `<FeatureSpotlight>` | Alternating left/right text + screenshot rows | Homepage, Product Overview |
| `<FeatureCard>` | Icon + title + 2-line description, optional link | Module grids |
| `<FeatureGrid>` | 3- or 4-column wrapper for FeatureCards | Multiple |
| `<HowItWorksSteps>` | Numbered horizontal steps (1→2→3→4), with mini illustrations | Feature pages |
| `<ICPSplitBlock>` | Two-column "For solo / For hospital" with separate CTAs | Homepage |
| `<TestimonialCard>` | Quote + doctor photo + name + designation + city | Multiple |
| `<TestimonialGrid>` | 3-up testimonial layout | Homepage, feature pages |
| `<StatStrip>` | 4-column horizontal stat band (number + label) | Homepage, hospital page |
| `<PricingCard>` | Tier card with price + included features + CTA | Pricing |
| `<FAQAccordion>` | Single-question accordion, open one at a time | Feature pages, FAQ |
| `<CTABand>` | Final pre-footer block, the only place the heavy gradient lives | Every page |
| `<ComplianceBadge>` | NHA / ABDM / ISO etc. — vivid, named, with a 1-line tooltip | TrustBar, Security page |
| `<SiteFooter>` | Multi-column links + compliance row + social + legal | All pages |

For each component, include thoughtful hover, focus, and disabled states using the brand-guide hover/focus tokens.

---

## 7. SECTION PATTERNS (USE THESE; DO NOT INVENT NEW)

### Pattern A — `HeroSplit` (Homepage, Solutions pages)
- Left 55%: small eyebrow tag (e.g., "AI-First EMR for India") in `text-blue-600`, H1 (Display, Mulish 700, slate-900), subhead (Body XL, slate-600, max-width 560px), 12px gap, dual CTA (primary blue-500 solid + outline secondary), micro-proof line below ("10,000+ doctors · 12 lakh+ digital Rx · 200+ cities").
- Right 45%: device frame containing real product UI screenshot. Beneath it, small floating badge cards highlighting one feature ("VoiceRx active", "Rx ready in 28s").
- Background: white. Optional very faint blue-50 radial behind the device.

### Pattern B — `HeroCentered` (Most feature pages)
- Centered eyebrow → H1 (Display, max 720px wide) → subhead (Body LG, max 640px) → dual CTA → device mock or short video preview below, full width with `shadow-lg`.
- Background: slate-50.

### Pattern C — `HeroQuote` (Pricing, About)
- Real doctor headshot (circular, 96px) → quote in H3 italic → doctor name + city → CTA below.
- Background: white with optional warm amber-50 tint behind quote.

### Pattern D — `TrustBar`
- Section padding: 32px vertical only. White or slate-50 background.
- Two rows: top row = compliance badges (NHA-Approved, ABDM-Certified, ABHA-Compliant, ISO 27001, DPDPA-Compliant, Google Partner) — vivid coloured badges with icon + label, NOT grey. Bottom row = customer/partner logos (Zydus, Cliantha Research, Guardian Health, Zydus Wellness, Sentiss Pharma, AliveCor) — desaturated logos at 60% opacity, hover to 100%.

### Pattern E — `FeatureSpotlight` (alternating)
- Two-column section, alternating left-text/right-image and right-text/left-image down the page.
- Text side: small icon (32px, blue-500) → H2 → 3-line description → 3-bullet checklist with checkmark icon → "Learn more →" link.
- Image side: device mock with real UI. Optional floating sub-card overlay.

### Pattern F — `StatStrip`
- Single row, 4 columns equal. Each: large number (Display, blue-500), label below (Body SM, slate-600).
- Background: blue-50 with subtle texture, OR white with `border-t border-b slate-200`.

### Pattern G — `ICPSplitBlock` (Homepage Section 5)
- Two large cards side by side, equal width.
- Card 1 (white bg, blue border): "For solo specialists & clinics" → 4 bullets → primary CTA "Start Free Trial".
- Card 2 (slate-50 bg): "For hospitals & multi-location" → 4 bullets → primary CTA "Book a Demo".
- This is the only place CTA primacy flips by audience.

### Pattern H — `CTABand` (every page, pre-footer)
- Full-width gradient 135deg blue-600 → blue-800.
- Decorative SVG shapes at low opacity in background.
- Centered: H2 white, subhead white-80, dual CTA (white solid + outline white).
- This is the *only* heavy gradient on the page.

---

## 8. PAGE BRIEFS (FULL CONTENT — USE VERBATIM WHERE QUOTED)

### 8.1 HOMEPAGE — `/`

**Eyebrow:** AI-First EMR for India  
**H1:** Less typing. More treating.  
**Subhead:** The AI-first EMR built for Indian OPD reality. Document faster, work smarter, stay focused on the patient.  
**CTAs:** [Start Free Trial — primary] [Book a Demo — outline]  
**Micro-proof:** Trusted by 10,000+ doctors · 12 lakh+ digital Rx generated · 200+ cities · ABDM-certified

**Section order:**
1. `HeroSplit` (above)
2. `TrustBar` (compliance + partner logos)
3. `ProblemCallout` — "The average specialist in India spends 2+ hours a day on documentation. That's 10 hours a week not spent on patients." Two stats: "2+ hrs/day on docs" / "38% drop in documentation time with TatvaPractice"
4. `FeatureSpotlight` row 1 — **VoiceRx**: "Speak. We'll write the prescription." Bullets: 9 Indian languages · Drug interaction alerts on the fly · Specialty-aware structure · Audit-ready Rx in 30 seconds
5. `FeatureSpotlight` row 2 — **SmartSync**: "Write naturally. Save digitally." Bullets: Use a digital pen the way you always have · Works offline at camps and OPD · Multi-branch sync · No learning curve
6. `FeatureSpotlight` row 3 — **AI Agents (DoctorAgent + Amaya + Receptionist)**: "Your clinical co-pilot, plus a virtual front desk." Bullets: DDx engine on Indian protocols · Real-time drug interaction checks · Auto-structured SOAP notes · Front-desk reminders & WhatsApp comms
7. `FeatureGrid` 4-up — **Built for Indian OPD reality**: 9 languages · 25+ specialties · ABDM-certified · Mobile-first
8. `ICPSplitBlock` — For solo & clinics (Free Trial CTA) | For hospitals (Demo CTA)
9. `TestimonialGrid` — three testimonials (use the exact ones from project content):
   - "TatvaPractice has cut our prescription time by 70%. The VoiceRx feature alone has transformed how we manage OPD." — *Dr. Rajesh Patel, Cardiologist, HeartCare Clinic, Ahmedabad*
   - "We moved 3 clinics to TatvaPractice in under a week. The onboarding was seamless and the team is incredibly responsive." — *Dr. Priya Sharma, Clinic Director, Wellness First, Mumbai*
   - "The DDx Engine has been a game-changer for my residents. It helps them think through differentials more systematically." — *Dr. Anand Kumar, HOD Medicine, City General Hospital, Delhi*
10. `StatStrip` — **Real outcomes**: 22% productivity ↑ · 38% docs time ↓ · 12% throughput ↑ · 16% retention ↑
11. **DHIS earnings callout** (Amber-tinted card, full-width): "Earn through the DHIS scheme. The government pays Indian doctors for every consultation digitised through an NHA-approved EMR. TatvaPractice is NHA-approved and ABDM-certified." [Learn how →]
12. `CTABand` — H2: "Start your free 7-day trial." Sub: "No credit card required. Get started in under 2 minutes." Dual CTA.
13. `SiteFooter`

---

### 8.2 PRODUCT OVERVIEW — `/product`

**H1:** Everything you need to run a modern Indian practice.  
**Subhead:** 20+ integrated modules. One connected workflow. Replace 5 disconnected tools with one platform built for how Indian doctors actually work.

**Sections:**
1. `HeroCentered` with the H1/sub above + a single panoramic product UI mock
2. `TrustBar`
3. `FeatureGrid` 4×3 — twelve module cards, each links to its detailed page:
   - AI Workflows · VoiceRx · SmartSync · SnapRx · AI Agents · Core EMR · Appointments & Queue · Billing · Analytics · Integrations · Digital Presence · Security & Compliance
4. **"How they work together"** — `HowItWorksSteps`: Patient walks in → Queue managed → Consultation via VoiceRx → Lab order sent → Follow-up reminder automated → Bill generated. All connected.
5. `TestimonialGrid` — clinic-focused testimonial
6. `CTABand`
7. `SiteFooter`

---

### 8.3 FEATURE — `/product/voicerx`

**Eyebrow:** AI Prescription Mode  
**H1:** Speak. We'll write the prescription.  
**Subhead:** VoiceRx structures medical voice notes into clean, audit-ready prescriptions in 30 seconds. In 9 Indian languages, including Hindi-English mixed.  
**CTAs:** [Start Free Trial] [Book a Demo]

**Sections:**
1. `HeroCentered` + device mock placeholder showing VoiceRx in action
2. `TrustBar`
3. `ProblemCallout` — "Specialists spend 2+ hours a day on documentation. VoiceRx gives that time back." Stats: "30 seconds avg Rx generation" / "9 Indian languages supported"
4. **What VoiceRx solves** — `FeatureGrid` 4-up:
   - **Typing fatigue** — Stop typing. Speak naturally. AI structures it.
   - **Regional language gap** — Switch between Hindi, Gujarati, Tamil, Marathi mid-sentence. We understand.
   - **Structured Rx** — Drug name, dosage, frequency, duration, instructions. Auto-validated.
   - **Drug safety** — Real-time interaction checks across all prescribed medications.
5. `HowItWorksSteps` — 1. Speak → 2. AI transcribes & structures → 3. You verify (1 tap) → 4. Patient gets digital Rx
6. **Built for Indian doctors** callout — 9 languages, mixed Hindi-English handling, regional accents, medical abbreviation support (BD, TDS, OD, SOS, HS).
7. **Designed for every specialty** — chip cloud: General Practice, Pediatrics, Cardiology, Orthopedics, Gynaecology, Dermatology, Ophthalmology, Dentistry, ENT, Psychiatry, Endocrinology, … & 20+ more.
8. `TestimonialCard` — Dr. Rajesh Patel quote, larger format
9. `FAQAccordion` — 5 questions:
   - How accurate is VoiceRx in Indian medical contexts?
   - Does it work in regional languages?
   - What about drug safety checks?
   - Is the Rx legally valid?
   - How long does setup take?
10. `CTABand`
11. `SiteFooter`

---

### 8.4 FEATURE — `/product/smartsync`

**H1:** Write naturally. Save digitally.  
**Subhead:** SmartSync turns your handwritten notes and prescriptions into structured digital records. Use the digital pen the way you always have — we handle the rest.

Sections mirror VoiceRx with these differences:
- **What SmartSync solves**: Zero learning curve · Offline-first (camps, rural OPD) · Multi-branch sync · Audit trail with conflict resolution
- **Real-world use cases**: Multi-branch clinics · Field & camp settings · Hospital OPD · Hybrid practices (some doctors type, some write)
- FAQ: timestamp conflict resolution, offline mode, DPDPA compliance, multi-branch sync.

---

### 8.5 FEATURE — `/product/snaprx`

**H1:** Photograph any prescription. We'll digitise it.  
**Subhead:** SnapRx is a healthcare-grade OCR engine purpose-built for the messy reality of handwritten Indian prescriptions.

Sections mirror the pattern with these distinctives:
- **What SnapRx solves**: Healthcare-grade OCR (not generic) · Drug name resolution (brand → generic) · Indian abbreviation handling · 100K+ drug DB cross-reference
- StatStrip: Extraction accuracy / Prescriptions trained on / Avg processing time / Drugs cross-referenced

---

### 8.6 FEATURE — `/product/ai-agents`

**H1:** Your AI clinical co-pilot.  
**Subhead:** DoctorAgent gives you real-time differential diagnoses, drug interaction alerts, lab interpretation, and evidence-based suggestions — grounded in Indian clinical guidelines.

Sub-features grouped:
- DoctorAgent (DDx, drug safety, lab AI, clinical Q&A)
- Agent Amaya (auto-structured SOAP notes from voice/ambient capture)
- Receptionist Agent (appointment reminders, WhatsApp comms, queue updates)

---

### 8.7 FEATURE — `/product/emr`

**H1:** Your complete patient record. Always within reach.  
**Subhead:** Patient history, SOAP notes, vaccination, lab integration, telehealth — one connected view across every visit.

---

### 8.8 SOLUTIONS — `/solutions/clinics`

**Eyebrow:** For Clinics  
**H1:** Go digital from day one.  
**Subhead:** Whether you're a solo practitioner or running a small clinic, TatvaPractice gives you everything you need to manage patients, prescriptions, and billing — without the complexity.  
**Primary CTA:** Start Free Trial  
**Secondary CTA:** Watch Demo

Sections:
1. `HeroSplit` (clinic-focused product UI mock)
2. `TrustBar`
3. `FeatureGrid` 6-up — Smart Scheduling, AI Prescriptions, Patient Records, Billing & Payments, Lab Integration, Patient Engagement
4. **"Up and running in under a week"** — `HowItWorksSteps`: Sign up → Setup (30 sec eClinic) → Onboarding call → Go live
5. **Pricing teaser** — 2 plan cards (Solo / Clinic) with "View full pricing →" link
6. `TestimonialGrid` — clinic-specific testimonials (Dr. Priya Sharma)
7. `CTABand` (Free Trial primary)
8. `SiteFooter`

---

### 8.9 SOLUTIONS — `/solutions/hospitals`

**Eyebrow:** For Hospitals & Multi-Location  
**H1:** Enterprise-grade. India-ready.  
**Subhead:** Multi-department, multi-location, ABDM-compliant. Built for hospitals that run 500+ OPD a day and need every system to talk to every other system.  
**Primary CTA:** Book a Demo  
**Secondary CTA:** Download Brochure

Sections:
1. `HeroSplit` (hospital UI mock — IPD discharge summary or queue dashboard)
2. `TrustBar` (with hospital partner logos prominent)
3. **By Department** — `FeatureGrid` 5-up: OPD, IPD, Pharmacy, Billing, Lab Integrations
4. **By Stakeholder** — 3-card row: For CXO (ROI focus) · For IT (security & compliance) · For Clinical Ops (workflow & quality)
5. **Real outcomes** `StatStrip` — 22% productivity · 45% OPD utilisation · 38% docs time ↓ · 16% retention ↑
6. **DHIS earnings callout** (amber-tinted) — "The government pays for digitisation. We help you collect."
7. `TestimonialCard` — Dr. Anand Kumar quote (hospital-scale)
8. **Compliance & Security strip** — link out to /security
9. `CTABand` (Demo primary)
10. `SiteFooter`

---

### 8.10 PRICING — `/pricing`

**H1:** Simple pricing. Indian-priced.  
**Subhead:** Pay monthly or annually. Start with a 7-day free trial. No credit card required.

Three pricing tiers as `PricingCard`:

**Solo** — for solo specialists  
₹X,XXX / month [Most popular for specialists]  
- All AI Rx modes (VoiceRx, SmartSync, SnapRx)  
- Appointment booking & reminders  
- Basic billing & GST invoices  
- Patient records, history, prescriptions  
- WhatsApp messaging  
- Email + chat support  
[Start Free Trial]

**Clinic** — for multi-doctor clinics  
₹XX,XXX / month [Best value]  
- Everything in Solo, plus  
- Multi-doctor & multi-staff roles  
- OPD queue management  
- Advanced billing, GST, reconciliation  
- Lab integration  
- Custom clinic website + Google My Business  
- Priority phone support  
[Start Free Trial]

**Hospital** — for hospitals & chains  
Custom pricing  
- Everything in Clinic, plus  
- IPD, pharmacy, lab modules  
- Multi-location, role-based access  
- Centralised reporting  
- ABDM/HIS integrations  
- Dedicated account manager + SLA  
- On-site onboarding  
[Book a Demo]

(Replace ₹X,XXX with actual pricing — leave bracketed placeholder if not yet locked.)

Below pricing cards:
- Annual billing strip — "Save 2 months when you pay annually."
- DHIS earnings callout — "Earn back your subscription via DHIS government incentives."
- Feature comparison table (collapsible) — full feature matrix across the 3 tiers.
- `FAQAccordion` — pricing-specific FAQ.
- `CTABand`.

---

### 8.11 CONTACT / DEMO — `/contact`

**H1:** Talk to us.  
**Subhead:** Tell us a bit about your practice and we'll get back within 1 working day.

Two-column layout:
- Left: form with fields — Name (required), Designation (dropdown: Doctor / Practice Manager / Hospital Admin / Other), Clinic/Hospital name, City, Phone (required, +91 prefix), Email (required), Practice size (Solo / 2–10 doctors / 11–50 / 50+), Message (textarea, 280 char max). Consent checkbox. Submit button.
- Right: alternative contact methods — Direct line (number), Email (info@), WhatsApp link, "Find us on" map placeholder. Below: response promise card "We respond within 1 working day. No call centre. You'll talk to a real product specialist."

The form must POST to a `/api/contact` placeholder endpoint (the dev team will wire it up). All inputs styled per brand-guide button/input conventions.

---

### 8.12 ABOUT — `/company/about`

**H1:** We're building the EMR India deserves.  
**Subhead:** TatvaPractice is part of TatvaCare, a healthcare technology company solving India's care delivery gaps end-to-end.

Sections:
1. `HeroQuote` or `HeroCentered` with team photo placeholder
2. **Our story** — 2 paragraphs of plain text
3. **Our values** — 4-card grid:
   - Patient-First — Every product decision begins and ends with patient outcomes.
   - AI-Native — AI is not an add-on. It's the foundation.
   - India-Built — Designed for Indian healthcare realities — multi-language, ABDM, GST, pricing for every clinic size.
   - Data-Secure — End-to-end encryption, role-based access, full regulatory compliance.
4. **The TatvaCare suite** — small horizontal: TatvaPractice, MedEco, PillUp, Visit Health (with 1-line each).
5. **Investors & advisors** — placeholder logo strip.
6. **Careers teaser** — link to /careers.
7. `CTABand`.

---

### 8.13 SECURITY & COMPLIANCE — `/security`

**H1:** Your data is safe. Patient trust is sacred.  
**Subhead:** TatvaPractice is built on enterprise-grade security and full Indian regulatory compliance.

Sections:
1. `HeroCentered`
2. **Compliance certifications grid** — vivid badges with explanation:
   - **NHA-Approved** — Approved by the National Health Authority of India
   - **ABDM-Certified** — Full integration with Ayushman Bharat Digital Mission
   - **ABHA-Compliant** — ABHA ID creation, health record linking, consent-based sharing
   - **ISO 27001** — Information security management
   - **DPDPA-Compliant** — Digital Personal Data Protection Act
   - **HIPAA-Aligned** — For international standards
3. **How we secure your data** — 3-row `FeatureSpotlight`:
   - Encryption at rest & in transit
   - Role-based access control with full audit logs
   - India data residency — your data never leaves India
4. **Audit & monitoring** — block on logging, anomaly detection, breach response.
5. **Documentation** — Download SOC reports, DPA, security whitepaper.
6. `CTABand`.

---

## 9. VARIANT PAGE TEMPLATES (FOR ~20 ADDITIONAL PAGES)

For pages not detailed above, generate from these three templates. The dev team will populate content per page.

### Template A — `SpecialtyPageTemplate` (`/solutions/clinics/[specialty]`)
Slots: `{specialty}` (Dentist, Dermatology, Paediatrics, Orthopedics, Gynaecology…)
- Hero: "TatvaPractice for {specialty}" + image of {specialty} clinic
- "Built for the way {specialty} clinics work" — 4 cards with specialty-specific concerns
- Feature spotlight: 2 specialty-relevant modules
- Specialty testimonial slot
- Pricing teaser
- CTA band

### Template B — `StakeholderPageTemplate` (`/solutions/hospitals/[stakeholder]`)
Slots: `{stakeholder}` (CXO, IT, Clinical Ops)
- Hero: "TatvaPractice for {stakeholder}" with role-specific subhead
- "What matters to a {stakeholder}" — 4 stakeholder-specific cards (CXO=ROI, IT=security/integrations, Clinical=workflow/quality)
- Stakeholder-specific stat strip
- Stakeholder testimonial
- CTA band

### Template C — `GeoPageTemplate` (`/international/[country]`)
Slots: `{country}` (Philippines, Indonesia, ASEAN…)
- Hero: "TatvaPractice for {country}"
- Localisation cues — language support, regulatory alignment
- Local partners
- CTA band — country-specific contact

---

## 10. IMAGE / PRODUCT-UI PLACEHOLDER STRATEGY

Real product UI screenshots will be added later. For v1, every product UI slot must use a clearly labelled placeholder div so it's obvious what to swap in.

Use this exact pattern:

```html
<div
  data-placeholder="ui-screenshot"
  data-replace-with="VoiceRx active session — left sidebar showing patient queue, main panel showing live transcription with structured Rx forming on the right"
  data-aspect="16/10"
  class="rounded-3xl border border-slate-200 bg-slate-50 shadow-lg overflow-hidden"
>
  <!-- placeholder visual: light gradient + central icon -->
</div>
```

The same pattern for doctor photos:

```html
<div
  data-placeholder="doctor-photo"
  data-replace-with="Dr. Rajesh Patel — real customer headshot, mid-50s male cardiologist, white coat, neutral background"
  class="rounded-full ..."
>
</div>
```

Do not generate AI imagery for v1. Use these labelled placeholders. Real photos and screenshots will be inserted later.

---

## 11. RESPONSIVE BEHAVIOR

- Breakpoints: `sm 640px / md 768px / lg 1024px / xl 1280px / 2xl 1536px`. Design for mobile-first.
- Mobile hero: H1 drops to Display (48/56), subhead to Body LG, CTAs stack full-width with 12px gap, primary on top.
- Mobile section padding: 56px top + bottom for major sections.
- Mobile feature grids collapse to single column. Testimonial grids become a horizontal swipe carousel below `md`.
- Mobile nav: hamburger menu opens full-screen drawer with all links + dual CTA pinned to bottom of drawer.
- Sticky CTA bar on mobile (appears after scrolling past the hero): "Book Demo" button pinned bottom-right, dismissible.

---

## 12. ACCESSIBILITY & HANDOFF NOTES (NON-NEGOTIABLE)

- All images: `alt` text mandatory.
- All form inputs: `<label>` properly associated, error states with `aria-describedby`.
- Colour contrast: minimum WCAG AA. Verify TP Blue 500 on white passes AA for body and AAA for large text.
- Focus states: visible 2px ring in TP Blue 400, never removed.
- Heading order: never skip levels. One H1 per page.
- All interactive elements: keyboard accessible, focus visible, hit area minimum 44×44px on mobile.
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` used correctly.

**Output expectations for clean Next.js handoff:**
- Use semantic HTML throughout. No `<div>`-only structures where a semantic element exists.
- Tailwind classes only. No inline styles. No `<style>` blocks except for critical above-fold tokens.
- Component-friendly markup — each component in Section 6 should be a clearly delineated section that maps 1:1 to a future React component.
- Add a `<head>` section with placeholder `<title>`, `<meta name="description">`, `<meta property="og:*">`, `<meta name="twitter:*">`, and `<link rel="canonical">` tags. Use `{{ }}` template placeholders the dev team will fill per page.
- Add `<script type="application/ld+json">` placeholder for Organisation + WebSite + Product + FAQPage structured data on relevant pages.
- No JS frameworks in v1 output. Plain HTML+Tailwind. Animations: Tailwind `transition` utilities only. No external animation libs.

---

## 13. ACCEPTANCE CRITERIA (SCORE OUT OF 10 PER PAGE BEFORE SHIPPING)

For each page, the output must score ≥7 on each axis:

1. **Trust** — Compliance badges visible above the fold, real Indian context, no generic AI-startup vibe.
2. **Clarity** — A doctor reading the first viewport for 8 seconds knows: what this is, who it's for, what to do next.
3. **Differentiation** — At least one element on the page that no competitor (Practo, HealthPlix, generic EMR) can credibly claim.
4. **India-relevance** — At least 3 explicit Indian cues per page (₹, ABDM, Indian doctor name, Indian city, Hindi/regional language reference, OPD, DHIS, etc.).
5. **Conversion intent** — One clear primary CTA per page; no museum sections; CTA repeated at top, mid, and pre-footer.

If any page scores below 7 on any axis, revise that page only — do not regenerate the whole site.

---

## 14. DELIVERABLES

1. Full HTML+Tailwind output for all 12 pages in Section 8 (each as a separate file `index.html`, `product.html`, `voicerx.html`, etc., or as separate routes if Next.js).
2. Three variant page templates from Section 9 with one example populated each.
3. A `components.html` reference file showing each component from Section 6 in isolation with all states (default, hover, focus, disabled).
4. A `tokens.css` file declaring all colour, spacing, radius, shadow, and type tokens as CSS custom properties matching the brand guide.

---

## 15. WHAT TO IGNORE FROM PAST OUTPUTS

If you've seen an earlier version of TatvaPractice with full-bleed indigo gradient hero banners, abstract device mocks, repetitive 6-card "Why Doctors Choose X" templates, and grey-washed compliance badges — ignore that pattern entirely. This brief overrides it.

---

**End of brief. Begin building.**
