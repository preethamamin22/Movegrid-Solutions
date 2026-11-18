import {
  Globe2,
  PenTool,
  Users,
  Network,
  Megaphone,
  Clapperboard,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  short: string;
  category: string;
  icon: LucideIcon;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: 'web-design-development',
    title: 'Web Design & Development',
    short: 'High-performance websites and custom web applications built to convert.',
    category: 'Digital Studio',
    icon: Globe2,
    description:
      'We engineer bespoke corporate websites, scalable e-commerce storefronts, and tailored web applications built with modern frontend architecture, robust security, and conversion-focused UX.',
    items: [
      'Corporate & enterprise websites',
      'High-converting business websites',
      'Scalable e-commerce web applications',
      'Targeted landing pages & campaign microsites',
      'Custom full-stack web applications',
      'Ongoing website maintenance, updates & SLA support',
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    short: 'Intuitive interfaces and comprehensive design systems built for scale.',
    category: 'Digital Studio',
    icon: PenTool,
    description:
      'From in-depth user journey research and interactive wireframes to production-ready design systems, we craft user experiences that delight customers and drive business metrics.',
    items: [
      'Website UI/UX architecture & interface design',
      'iOS & Android mobile application interfaces',
      'Information architecture & low-fidelity wireframing',
      'Interactive Figma prototypes & user testing',
      'Modular design systems & component UI kits',
      'User experience optimization & conversion rate audits',
    ],
  },
  {
    slug: 'rider-onboarding',
    title: 'Rider Onboarding & Dark Store Fleet',
    short: 'High-velocity rider sourcing, KYC verification, and dark store fleet activation for quick-commerce.',
    category: 'Operations & Partnerships',
    icon: Users,
    description:
      'Enterprise-grade recruitment, digital KYC verification, and on-ground workforce activation tailored for quick-commerce dark stores (Zepto, Blinkit, Instamart) and e-commerce delivery hubs (Flipkart, Amazon).',
    items: [
      'Dark store & 10-minute delivery fleet sourcing',
      'Hyperlocal rider recruitment across Tier 1 & Tier 2 clusters',
      'Digital KYC verification (Aadhaar, DL, PAN, Vehicle RC, BGV)',
      'EV & 2-wheeler delivery partner network sourcing',
      'Day-1 dark store attendance & app activation coordination',
      'Peak season & festival surge fleet scaling (50 to 500+ riders)',
    ],
  },
  {
    slug: 'vendor-management',
    title: 'Vendor Management',
    short: 'Structured supplier sourcing, onboarding workflows, and merchant coordination.',
    category: 'Operations & Partnerships',
    icon: Network,
    description:
      'We assist marketplaces, supply chains, and retail enterprises with discovering, onboarding, and coordinating trusted vendor networks with seamless documentation.',
    items: [
      'Strategic vendor & supplier sourcing',
      'End-to-end merchant & vendor onboarding workflows',
      'Vendor registration assistance & compliance checks',
      'Commercial business partnerships coordination',
      'Ongoing vendor communication & relationship management',
      'Continuous operational logistics & inventory support',
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    short: 'Performance marketing, social media growth, and multi-channel lead generation.',
    category: 'Creative & Growth',
    icon: Megaphone,
    description:
      'Connect your brand with the right audience through tailored search, paid acquisition campaigns, and cohesive social media content engineered for measurable return on ad spend.',
    items: [
      'Data-driven digital marketing campaigns',
      'End-to-end social media management & scheduling',
      'B2B & B2C targeted lead generation funnels',
      'Strategic brand awareness & positioning campaigns',
      'Multi-channel performance campaign management',
      'Growth marketing strategy & analytics reporting',
      'High-converting social media creatives & ad design',
    ],
  },
  {
    slug: 'videography-editing',
    title: 'Videography & Editing',
    short: 'Cinematic corporate videos, viral Instagram reels, and brand storytelling.',
    category: 'Creative & Growth',
    icon: Clapperboard,
    description:
      'From corporate brand films and product showcase videos to viral vertical reels and ad commercials, our creative production team crafts video content that commands attention.',
    items: [
      'Corporate videography & executive interviews',
      'Promotional launch & brand campaign videos',
      'High-impact product videos & feature demonstrations',
      'Viral Instagram reels & short-form TikTok/YouTube Shorts',
      'Commercial advertisement videos for digital & web',
      'Professional post-production video editing & color grading',
      'Brand storytelling & cinematic motion design',
    ],
  },
];

export type Project = {
  title: string;
  type: string;
  tag: string;
  number: string;
  tone: string;
  placeholder?: boolean;
  metric?: string;
  impact?: string;
  stack?: string[];
  clientUrl?: string;
  clientName?: string;
};

export const projects: Project[] = [
  {
    title: 'Xennov Scientific — Corporate Digital Platform',
    type: 'Web Engineering & Architecture',
    tag: 'Digital Studio',
    number: '01',
    tone: 'blue',
    metric: 'Enterprise Scientific Portal',
    impact: 'End-to-end scientific research instrumentation showcase, responsive product catalog, and global business inquiry engine.',
    stack: ['Corporate Web Platform', 'Product Catalog', 'Responsive UI/UX', 'SEO Optimization'],
    clientUrl: 'https://www.xennovscientific.com/',
    clientName: 'Xennov Scientific',
    placeholder: false,
  },
  {
    title: 'Quick-Commerce Dark Store Fleet Mobilization (Bengaluru & NCR)',
    type: 'Fleet & Rider Operations',
    tag: 'Operations',
    number: '02',
    tone: 'cyan',
    metric: '250+ Verified Riders',
    impact: 'Turnkey 48-hour dark store fleet sourcing across 12 micro-fulfillment centers with 98% Day-1 shift attendance.',
    stack: ['Aadhaar KYC', 'BGV Verification', 'EV Fleet Matching', 'Dark Store Ops'],
    placeholder: true,
  },
  {
    title: 'Enterprise Multi-Channel Brand Growth Campaign',
    type: 'Performance Marketing',
    tag: 'Creative & Growth',
    number: '03',
    tone: 'purple',
    metric: '4.6x ROAS Lift',
    impact: 'Data-driven paid customer acquisition funnels, retargeting matrices, and creative content strategy.',
    stack: ['Paid Acquisition', 'Meta Ads', 'Funnel Optimization', 'Lead Gen'],
    placeholder: true,
  },
  {
    title: 'SaaS Design System & Mobile UI Architecture',
    type: 'UI/UX Design',
    tag: 'Digital Studio',
    number: '04',
    tone: 'blue',
    metric: '80+ Reusable Tokens',
    impact: 'Comprehensive multi-platform UI architecture, responsive design tokens, and developer-ready Figma libraries.',
    stack: ['Figma Tokens', 'Micro-Interactions', 'iOS & Android Kits', 'Design System'],
    placeholder: true,
  },
  {
    title: 'Supplier Partner Sourcing & Verification Portal',
    type: 'Vendor Management',
    tag: 'Operations',
    number: '05',
    tone: 'cyan',
    metric: '500+ Active Vendors',
    impact: 'Streamlined merchant documentation workflows, KYC compliance audits, and partner catalog management.',
    stack: ['Vendor Due Diligence', 'Compliance Audits', 'Partner SLAs', 'Merchant Ops'],
    placeholder: true,
  },
  {
    title: 'Cinematic Product Launch & Viral Reel Series',
    type: 'Videography & Editing',
    tag: 'Creative & Growth',
    number: '06',
    tone: 'purple',
    metric: '3.2M Impressions',
    impact: 'High-production brand launch films, executive founder interviews, and viral short-form social reels.',
    stack: ['4K Corporate Video', 'Motion Design', 'Short-Form Reels', 'Color Grading'],
    placeholder: true,
  },
];

export const categories = [
  'All work',
  'Digital Studio',
  'Operations',
  'Creative & Growth',
];
