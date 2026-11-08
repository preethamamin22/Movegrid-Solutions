# Movegrid Solutions — Premium Corporate Website

> **Tagline:** "Moving Businesses Forward."  
> **Supporting Message:** "Digital Innovation. Smarter Operations. Creative Growth."  
> **Official Domain:** [https://movegridsolutions.com](https://movegridsolutions.com)  
> **Official Email:** [preetham@movegridsolutions.com](mailto:preetham@movegridsolutions.com)  
> **WhatsApp Support:** [+91 82967 48983](https://wa.me/918296748983)

---

## 🏢 1. Company Profile & Overview

**Movegrid Solutions** is a multi-service business solutions company combining digital engineering, operational logistics infrastructure, and creative marketing growth for startups, SMEs, and enterprise organizations in India and international markets.

### The 3 Core Business Divisions

```
MOVEGRID SOLUTIONS
│
├── DIVISION 01: DIGITAL STUDIO
│   ├── Web Design & Development (/services/web-design-development)
│   └── UI/UX Design (/services/ui-ux-design)
│
├── DIVISION 02: OPERATIONS & PARTNERSHIPS
│   ├── Rider Onboarding & Fleet Sourcing (/services/rider-onboarding)
│   └── Vendor Management & Sourcing (/services/vendor-management)
│
└── DIVISION 03: CREATIVE & GROWTH
    ├── Digital Marketing & Lead Funnels (/services/digital-marketing)
    └── Videography & Video Editing (/services/videography-editing)
```

---

## 🎨 2. Brand Identity & Design System

The visual identity is built around a modern geometric symbol combining an **M**-inspired movement grid with a dynamic forward-pointing node.

### Color Tokens

| Role | Color Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Dark Background** | Deep Slate | `#020617` / `#0F172A` | Hero sections, dark cards, footer, mobile drawer |
| **Primary Accent** | Electric Indigo | `#4F46E5` | Primary buttons, active tabs, Digital Studio division |
| **Secondary Accent** | Sky Blue | `#0EA5E9` | Badges, forward arrow highlight, Operations division |
| **Creative Accent** | Iris / Violet | `#8B5CF6` | Creative & Growth division, social badges |
| **Operational Accent**| Emerald | `#10B981` | Verification markers, success states, WhatsApp widget |
| **Surface** | Off-White Tint | `#F8FAFF` | Clean, accessible background for text readability |
| **Body Typography** | Slate 900 | `#0F172A` | High-contrast, sharp corporate typography |

### Brand Assets

- **Full Horizontal Logo (Light Backgrounds):** `/public/brand/movegrid-logo.svg`
- **Full Horizontal Logo (Dark Backgrounds):** `/public/brand/movegrid-logo-light.svg`
- **Icon Symbol (Dark Container):** `/public/brand/movegrid-symbol.svg`
- **Icon Symbol (Light Container):** `/public/brand/movegrid-symbol-light.svg`
- **Favicon & Apple Touch Icon:** `/src/app/icon.svg`

---

## 🛠️ 3. Technical Architecture

- **Framework:** Next.js 15 (App Router, Static Site Generation)
- **Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`) with custom token extensions
- **Icons:** Lucide React
- **SEO & Structured Data:** Schema.org `ProfessionalService` JSON-LD, Open Graph, Twitter Cards, `sitemap.ts`, `robots.ts`

---

## 🚀 4. Local Development

```bash
# Clone the repository
git clone <repository-url>
cd "Movegrid Solutions"

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 5. Production Build

To verify that all 17 routes compile and render as static HTML:

```bash
npm run build
npm run start
```

---

## 🌐 6. Deploying to Vercel & Connecting `movegridsolutions.com`

### Step 1: Push to GitHub / Git Provider
```bash
git init
git add .
git commit -m "feat: complete Movegrid Solutions corporate website"
git branch -M main
git remote add origin <your-git-remote-url>
git push -u origin main
```

### Step 2: Import Project on Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** &rarr; **"Project"**.
3. Import your `Movegrid Solutions` repository.
4. Framework Preset will auto-detect as **Next.js**.
5. Click **"Deploy"**.

### Step 3: Connect Custom Domain
1. In your Vercel Project Dashboard, navigate to **Settings** &rarr; **Domains**.
2. Enter `movegridsolutions.com` and `www.movegridsolutions.com`.
3. In your DNS provider (e.g. GoDaddy, Namecheap, Cloudflare), configure:
   - **A Record:** `@` points to `76.76.21.21`
   - **CNAME Record:** `www` points to `cname.vercel-dns.com`
4. Once DNS propagates (typically 5 to 30 minutes), Vercel will automatically provision SSL certificates.

---

## 📬 7. Contact Channels

- **Official Email:** [preetham@movegridsolutions.com](mailto:preetham@movegridsolutions.com)
- **WhatsApp Business:** [+91 82967 48983](https://wa.me/918296748983)
- **Website:** [https://movegridsolutions.com](https://movegridsolutions.com)

