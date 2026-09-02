import React, { useEffect } from 'react';
import { BUSINESS_CONFIG } from '../config/siteConfig';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  schemaType?: 'Pharmacy' | 'LocalBusiness' | 'AboutPage' | 'ContactPage' | 'MedicalWebPage';
  breadcrumbs?: Array<{ name: string; path: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = BUSINESS_CONFIG.seo.defaultTitle,
  description = BUSINESS_CONFIG.seo.defaultDescription,
  canonicalPath = '/',
  schemaType = 'Pharmacy',
  breadcrumbs = [{ name: 'Home', path: '/' }],
  faqs = []
}) => {
  const fullCanonicalUrl = `${BUSINESS_CONFIG.seo.siteUrl}${canonicalPath}`;

  useEffect(() => {
    // Update Page Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OG Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update or create JSON-LD Schema
    const scriptId = 'json-ld-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    // Comprehensive Schema
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["Pharmacy", "LocalBusiness", "MedicalBusiness"],
          "@id": `${BUSINESS_CONFIG.seo.siteUrl}/#pharmacy`,
          "name": BUSINESS_CONFIG.name,
          "alternateName": BUSINESS_CONFIG.shortName,
          "description": BUSINESS_CONFIG.tagline,
          "url": BUSINESS_CONFIG.seo.siteUrl,
          "telephone": BUSINESS_CONFIG.phone,
          "priceRange": "₹₹",
          "image": `${BUSINESS_CONFIG.seo.siteUrl}/icons/icon-512.svg`,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Railway Station, Taregna Station Rd",
            "addressLocality": "Masaurhi",
            "addressRegion": "Bihar",
            "postalCode": "804452",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.352418",
            "longitude": "85.023242"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "07:00",
              "closes": "22:30"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Sunday"],
              "opens": "07:30",
              "closes": "22:00"
            }
          ],
          "sameAs": [
            BUSINESS_CONFIG.socialLinks.facebook,
            BUSINESS_CONFIG.socialLinks.instagram,
            BUSINESS_CONFIG.socialLinks.justdial,
            BUSINESS_CONFIG.socialLinks.indiamart
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `${BUSINESS_CONFIG.seo.siteUrl}${crumb.path}`
          }))
        },
        ...(faqs.length > 0 ? [{
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }] : [])
      ]
    };

    scriptTag.textContent = JSON.stringify(schemaData);
  }, [title, description, canonicalPath, schemaType, breadcrumbs, faqs]);

  return null;
};
