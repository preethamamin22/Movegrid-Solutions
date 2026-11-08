import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';

const base = 'https://movegridsolutions.com';

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: 'Movegrid Solutions | Moving Businesses Forward',
    template: '%s | Movegrid Solutions',
  },
  description:
    'Movegrid Solutions is a premier multi-service corporate solutions partner combining digital innovation, operational logistics excellence and creative growth.',
  keywords: [
    'Website Development Company India',
    'UI UX Design Services',
    'Rider Onboarding Services India',
    'Delivery Partner Recruitment',
    'Vendor Management Services',
    'Digital Marketing Agency',
    'Corporate Videography',
    'Video Editing Services',
    'Movegrid Solutions',
  ],
  authors: [{ name: 'Movegrid Solutions', url: base }],
  creator: 'Movegrid Solutions',
  publisher: 'Movegrid Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Movegrid Solutions',
    title: 'Movegrid Solutions — Moving Businesses Forward',
    description:
      'Digital Innovation. Smarter Operations. Creative Growth. End-to-end solutions for startups, SMEs and global enterprises.',
    url: base,
    images: [
      {
        url: '/brand/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Movegrid Solutions — Moving Businesses Forward',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Movegrid Solutions | Moving Businesses Forward',
    description:
      'Digital Innovation. Smarter Operations. Creative Growth. Connecting technology, logistics and brand storytelling.',
    images: ['/brand/og-image.svg'],
  },
  alternates: { canonical: base },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Movegrid Solutions',
  url: 'https://movegridsolutions.com',
  logo: 'https://movegridsolutions.com/brand/movegrid-symbol.svg',
  description:
    'A multi-service business solutions company combining digital innovation, operational excellence and creative growth.',
  slogan: 'Moving Businesses Forward.',
  email: 'preetham@movegridsolutions.com',
  telephone: '+918296748983',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  areaServed: ['IN', 'Global'],
  sameAs: ['https://movegridsolutions.com'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Movegrid Solutions Capabilities',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Design & Development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UI/UX Design',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Rider Onboarding',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vendor Management',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Marketing',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Videography & Editing',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
