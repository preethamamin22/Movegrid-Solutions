export type ServiceDetailContent = {
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export const serviceDetailsMap: Record<string, ServiceDetailContent> = {
  'web-design-development': {
    benefits: [
      {
        title: 'Modern Tech Stack & Speed',
        desc: 'Engineered with Next.js, React, and optimized styling for sub-second load times and exceptional Core Web Vitals.',
      },
      {
        title: 'Conversion-Focused Architecture',
        desc: 'Strategic user funnels, intuitive navigation hierarchies, and responsive layouts that maximize lead inquiries and transactions.',
      },
      {
        title: 'Enterprise Security & Scale',
        desc: 'Built with clean code, secure APIs, automated CI/CD deployment pipelines, and proactive maintenance protocols.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Architecture & Wireframes',
        desc: 'Mapping site hierarchy, page templates, content structure, and technical requirements.',
      },
      {
        step: '02',
        title: 'UI Design & System',
        desc: 'High-fidelity visual designs, typography scales, component libraries, and responsive prototypes.',
      },
      {
        step: '03',
        title: 'Full-Stack Development',
        desc: 'Clean frontend coding, CMS/database integration, API connections, and thorough device testing.',
      },
      {
        step: '04',
        title: 'Launch & Optimization',
        desc: 'DNS configuration, SSL setup, SEO audit, analytics tracking, and post-launch maintenance.',
      },
    ],
    faqs: [
      {
        q: 'What types of websites do you build?',
        a: 'We build corporate websites, high-converting landing pages, custom e-commerce platforms, web applications, and customer portals tailored to enterprise requirements.',
      },
      {
        q: 'Do you provide ongoing website maintenance?',
        a: 'Yes, we provide ongoing maintenance packages covering security updates, performance monitoring, content updates, and continuous improvements.',
      },
      {
        q: 'How long does a typical web development project take?',
        a: 'A bespoke business website or landing page typically takes 2 to 4 weeks, while complex custom web applications take 6 to 10 weeks depending on scope.',
      },
    ],
  },

  'ui-ux-design': {
    benefits: [
      {
        title: 'User-First Methodology',
        desc: 'Deep user journey analysis and behavioral wireframing to eliminate friction and elevate user delight.',
      },
      {
        title: 'Scalable Design Systems',
        desc: 'Production-ready Figma token libraries, accessible color palettes, and modular component systems.',
      },
      {
        title: 'Cross-Platform Consistency',
        desc: 'Seamless visual and interaction continuity across desktop browsers, iOS, and Android mobile applications.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'User Research & Mapping',
        desc: 'Defining user personas, competitive analysis, and mapping end-to-end task flows.',
      },
      {
        step: '02',
        title: 'Wireframes & Low-Fi Flows',
        desc: 'Iterative low-fidelity wireframing to validate user journeys and content hierarchy.',
      },
      {
        step: '03',
        title: 'High-Fidelity Visual UI',
        desc: 'Polished interface screens, micro-interactions, responsive states, and cohesive iconography.',
      },
      {
        step: '04',
        title: 'Interactive Prototyping',
        desc: 'Clickable Figma prototypes for stakeholder alignment, user testing, and developer handoff.',
      },
    ],
    faqs: [
      {
        q: 'What design tools does your team use?',
        a: 'Our primary design and prototyping suite is Figma, complemented by FigJam for user journey mapping and Adobe Creative Cloud for specialized assets.',
      },
      {
        q: 'Do you deliver developer-ready design files?',
        a: 'Yes. All designs include complete component tokens, responsive constraints, autolayout, exportable assets, and developer handoff documentation.',
      },
      {
        q: 'Can you redesign an existing live application?',
        a: 'Absolutely. We conduct heuristic evaluations, UX friction audits, and conversion drop-off reviews before proposing an enhanced redesign.',
      },
    ],
  },

  'rider-onboarding': {
    benefits: [
      {
        title: 'Hyperlocal Sourcing Channels',
        desc: 'Multi-channel recruitment pipelines across targeted metropolitan and Tier-2 clusters to secure active delivery partners.',
      },
      {
        title: 'Rigorous Verification Coordination',
        desc: 'Streamlined collection and verification assistance for KYC, driving licenses, vehicle documents, and bank details.',
      },
      {
        title: 'Faster Time-to-First-Delivery',
        desc: 'Structured onboarding and activation briefings that minimize drop-offs and accelerate first-order completion.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Demand Planning & Sourcing',
        desc: 'Aligning with your fleet targets by geography, vehicle type (2-wheeler, EV), and operational shift hours.',
      },
      {
        step: '02',
        title: 'Candidate Screening & Sourcing',
        desc: 'Candidate outreach, preliminary eligibility checks, and orientation scheduling.',
      },
      {
        step: '03',
        title: 'Document Collection Coordination',
        desc: 'Systematic collection of IDs, driving licenses, vehicle RC, bank account data, and compliance records.',
      },
      {
        step: '04',
        title: 'Activation & Onboarding Support',
        desc: 'App installation guidance, platform orientation, safety briefing, and active fleet tracking.',
      },
    ],
    faqs: [
      {
        q: 'Which sectors do you provide rider onboarding for?',
        a: 'We support logistics networks, quick-commerce groceries, food delivery platforms, e-commerce courier fleets, and hyper-local delivery startups.',
      },
      {
        q: 'How do you ensure candidate document compliance?',
        a: 'We implement standardized verification checklists ensuring that KYC, driver permits, and vehicle documents are cross-checked before partner activation.',
      },
      {
        q: 'Can you scale up sourcing for festival or peak sales periods?',
        a: 'Yes, we specialize in high-velocity surge staffing and seasonal recruitment coordination across multiple city hubs.',
      },
    ],
  },

  'vendor-management': {
    benefits: [
      {
        title: 'Targeted Merchant Discovery',
        desc: 'Proactive scouting and relationship building with suppliers, wholesalers, and retail merchants.',
      },
      {
        title: 'Hassle-Free Registration Assistance',
        desc: 'Guiding vendors through regulatory documentation, GST details, catalog readiness, and platform agreements.',
      },
      {
        title: 'Sustained Operational Alignment',
        desc: 'Continuous coordination between merchant partners and enterprise procurement or catalog management teams.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Category & Vendor Profiling',
        desc: 'Identifying supplier criteria, pricing benchmarks, and category expansion requirements.',
      },
      {
        step: '02',
        title: 'Outreach & Partnership Pitch',
        desc: 'Direct commercial outreach, presentation of value propositions, and preliminary merchant interest.',
      },
      {
        step: '03',
        title: 'Onboarding & Document Handling',
        desc: 'Assistance with compliance paperwork, tax registrations, contract execution, and banking details.',
      },
      {
        step: '04',
        title: 'Cataloging & Activation Support',
        desc: 'Catalog coordination, inventory readiness checks, and platform transition assistance.',
      },
    ],
    faqs: [
      {
        q: 'What types of vendors do you help onboard?',
        a: 'We assist with retail merchants, FMCG distributors, restaurant partners, wholesale suppliers, and third-party marketplace sellers.',
      },
      {
        q: 'Do you assist with vendor compliance documentation?',
        a: 'Yes, we coordinate the collection of GST certificates, PAN, FSSAI licenses (for food), bank cancelled cheques, and partnership contracts.',
      },
      {
        q: 'Can you handle ongoing vendor communication?',
        a: 'Yes, we provide ongoing vendor relationship coordination to handle updates, queries, and catalog adjustments.',
      },
    ],
  },

  'digital-marketing': {
    benefits: [
      {
        title: 'Data-Backed Lead Generation',
        desc: 'Multi-touch funnels combining search, social advertising, and tailored landing pages to drive verified buyer inquiries.',
      },
      {
        title: 'High-Impact Brand Storytelling',
        desc: 'Consistent visual branding and thought leadership content across LinkedIn, Instagram, and digital channels.',
      },
      {
        title: 'Measurable ROI & Transparent Dashboards',
        desc: 'Clear performance metrics tracking customer acquisition cost (CAC), lead volume, and campaign effectiveness.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Audience & Competitor Audit',
        desc: 'Analyzing your market segment, customer pain points, keyword opportunities, and competitors.',
      },
      {
        step: '02',
        title: 'Campaign Strategy & Funnel Design',
        desc: 'Formulating channel mix, ad budgets, audience segments, creative themes, and landing page strategy.',
      },
      {
        step: '03',
        title: 'Creative Production & Launch',
        desc: 'Designing ad creatives, writing persuasive copy, configuring tracking pixels, and initiating campaigns.',
      },
      {
        step: '04',
        title: 'A/B Testing & Scaling',
        desc: 'Iterative testing of ad hooks, targeting tweaks, bid management, and monthly performance reporting.',
      },
    ],
    faqs: [
      {
        q: 'Which advertising platforms do you manage?',
        a: 'We manage Meta Ads (Facebook & Instagram), Google Search & Display Ads, LinkedIn Ads for B2B, and YouTube video promotions.',
      },
      {
        q: 'Do you create the ad creatives and copywriting?',
        a: 'Yes, our in-house creative team designs all graphic banners, carousel creatives, video hooks, and persuasive ad copy.',
      },
      {
        q: 'How do you report campaign performance?',
        a: 'We provide bi-weekly and monthly performance reports highlighting lead volume, conversion rates, cost per lead (CPL), and return on ad spend.',
      },
    ],
  },

  'videography-editing': {
    benefits: [
      {
        title: 'Cinematic Production Quality',
        desc: 'Professional 4K camera gear, studio lighting, clear audio capture, and artistic art direction for commercial-grade output.',
      },
      {
        title: 'Short-Form Viral Expertise',
        desc: 'Pacing, hooks, and kinetic typography optimized specifically for high retention on Instagram Reels and YouTube Shorts.',
      },
      {
        title: 'Full Post-Production Pipeline',
        desc: 'Color grading, sound design, motion graphics, captions, and multi-format exports for web and mobile displays.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Concept & Scriptwriting',
        desc: 'Developing storyboard concepts, hook ideas, interview questions, and production logistics.',
      },
      {
        step: '02',
        title: 'Production & Filming',
        desc: 'On-location or studio video shoot with professional lighting, multi-cam angles, and high-fidelity audio.',
      },
      {
        step: '03',
        title: 'Editing & Motion Design',
        desc: 'A-roll / B-roll assembly, dynamic cut pacing, subtitle animation, music scoring, and color grading.',
      },
      {
        step: '04',
        title: 'Review & Multi-Platform Export',
        desc: 'Stakeholder feedback rounds, format adjustments (16:9 widescreen, 9:16 vertical reels, 1:1 square), and final delivery.',
      },
    ],
    faqs: [
      {
        q: 'Can you produce Instagram reels and short-form social videos?',
        a: 'Yes, we specialize in high-retention vertical reels, product showcase clips, and thought-leadership talking-head shorts designed for social algorithms.',
      },
      {
        q: 'Do you provide editing if we already have raw footage?',
        a: 'Yes, we offer standalone video editing, color grading, caption animation, and motion graphic packaging for client-supplied raw footage.',
      },
      {
        q: 'What is the typical turnaround time for a video project?',
        a: 'Short-form social reels are typically edited within 3 to 5 business days, while comprehensive corporate brand films take 10 to 14 business days from shoot to delivery.',
      },
    ],
  },
};
