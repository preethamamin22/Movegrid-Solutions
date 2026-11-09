import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, canonical, keywords }) {
  const location = useLocation();

  useEffect(() => {
    // Update Document Title
    const fullTitle = title 
      ? `${title} | Movegrid Solutions` 
      : 'Movegrid Solutions | Premium BPO, Digital Agency & Web Development';
    document.title = fullTitle;

    // Update Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.content = description;

      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.content = description;
    }

    // Update Keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) metaKeywords.content = keywords;
    }

    // Update Canonical and Open Graph URLs
    const url = canonical || `https://movegridsolutions.com${location.pathname === '/' ? '' : location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = url;

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = url;

    const twUrl = document.querySelector('meta[name="twitter:url"]');
    if (twUrl) twUrl.content = url;

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = fullTitle;

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.content = fullTitle;

    // Scroll to top on page navigation for optimal UX and Core Web Vitals
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [title, description, canonical, keywords, location.pathname]);

  return null;
}
