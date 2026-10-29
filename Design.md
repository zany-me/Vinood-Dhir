# Design Specification: Dhir Consultancy Services (Industrial QMS & Manufacturing Excellence)

This document establishes the design system, visual hierarchy, layout architecture, typography, and component specifications for **Dhir Consultancy Services**, led by **Vinood Dhir** (34+ Years Industrial Leadership).

The design prioritizes executive authority, precision engineering aesthetics, generous negative space, centered typographical balance, and intuitive interactivity for plant heads, quality directors, and engineering candidates.

---

## 1. Visual Philosophy & Design Pillars

1. **Executive Industrial Authority**: Deep precision slates and architectural off-whites evoke high reliability, rigorous automotive compliance (IATF 16949, MACE Green, VDA 6.3), and senior plant mastery.
2. **Symmetrical & Balanced Hierarchy**: Structured center-aligned section titles with uppercase tracked kickers (`tracking-[0.25em]`) establishing clarity and poise.
3. **Generous Spacing (Negative Space)**: Ample padding (`py-20` to `py-28`) preventing cognitive clutter, reflecting premium corporate advisory standards.
4. **Precision Metallic & Industrial Palette**: High-contrast contrast ratios adhering to WCAG AAA standards with industrial brass/gold badges and cobalt audit markers.

---

## 2. Color Palette & Foundations

### Primary Core
* **Deep Executive Slate (`#0A1120`)**: Anchor dark color used for Header, Hero background, Credential badges, and Footer.
* **Architectural Canvas (`#F8FAFC` / `#FAF9F5`)**: Primary light background providing warmth and modern contrast.
* **Charcoal Body (`#0F172A`)**: Sharp, readable text with optimal contrast.

### Accents & Indicators
* **Industrial Brass / Warm Gold (`#C5A059` / `#D97706`)**: Reserved for trust badges, MACE Green highlights, active tabs, and primary CTAs.
* **Precision Cobalt (`#1E3A8A` / `#2563EB`)**: Technical auditing markers, secondary links, and engineering highlights.
* **Verified Emerald (`#059669` / `#10B981`)**: MACE Green audit badge, status tickers, and WhatsApp actions.

---

## 3. Typography Hierarchy

| Style | Font Family | Weight | Size / Line-Height | Tracking | Alignment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Headline** | Plus Jakarta Sans | 800 (ExtraBold) | `44px` – `64px` / `1.15` | `-0.025em` | Centered / Left Responsive |
| **Section Title (H2)** | Plus Jakarta Sans | 800 (Bold) | `32px` – `44px` / `1.2` | `-0.02em` | Centered |
| **Kicker / Badge** | Inter / Outfit | 700 (Bold) | `11px` – `12px` / `1.0` | `+0.25em` (Uppercase) | Centered / Inline |
| **Executive Quote** | Plus Jakarta Sans / Playfair | 600 (SemiBold) | `20px` – `26px` / `1.4` | `-0.01em` | Centered / Lead |
| **Body Regular** | Inter | 400 / 500 | `14px` – `15px` / `1.65` | Normal | Left / Centered |
| **Data & Pricing** | Inter | 700 / 800 | `16px` – `28px` (Tabular) | `-0.01em` | Tabular alignment |

---

## 4. Component & Layout Architecture

### 1. Navigation Shell
* **Top Utility Strip**: Minimalist bar displaying direct mobile phone (+91 8264207907), email, Ludhiana headquarters, and instant WhatsApp trigger.
* **Glassmorphic Sticky Nav**: Translucent white backdrop (`backdrop-blur-md`) with modern monogram logo (`VD`), clean section anchors, and a dedicated `"Book Consultation"` CTA.

### 2. High-Impact Hero Canvas
* Deep slate foundation (`#0A1120`) with subtle radial engineering grid pattern.
* Left: Bold headline emphasizing **34+ Years of Proven Shopfloor Mastery**, MACE Green sustenance, and IATF 16949.
* Right: Executive credential badge card featuring verified plant management records (500+ workforce, 5 plants, Tier-1 OEM audit defense).

### 3. Symmetrical Section Layouts
* Every section features a centered header with an uppercase gold kicker (`AUDIT STANDARDS`, `INDUSTRIAL CURRICULUM`, `LEADERSHIP & TRACK RECORD`).
* Generous margins and responsive container max-widths (`max-w-7xl`).

### 4. Interactive Modules
* **Audit & Standards Matrix**: Tabbed navigation between Automotive Standards, ISO Systems, and Shopfloor Lean Tools.
* **Course Catalog**: Dynamic search and category filters across all 29 modules with fee structures and batch capacities.
* **Budget Estimator**: Interactive calculator allowing clients to load curated packages or select modules with live total days and investment tally.
* **Dual Staffing Portal**: Tabbed interface for Industrial Employers and Engineering Candidates.
* **Direct RFQ & WhatsApp Dispatch**: Automated message generator pre-formatting plant details for instant consultation booking.