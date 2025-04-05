import Script from 'next/script';

interface StructuredDataProps {
  type: 'Person' | 'Organization' | 'WebSite' | 'WebPage';
  data: Record<string, any>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function PersonSchema() {
  const personData = {
    name: 'Tyler Knibbs',
    jobTitle: 'Data Analyst & Developer',
    url: 'https://tylerknibbs.com',
    sameAs: [
      'https://www.linkedin.com/in/tyler-knibbs/',
      'https://github.com/tmkipm'
    ],
    image: 'https://tylerknibbs.com/images/tyler-knibbs.jpg',
    description: 'Data Analyst & Developer specializing in SQL, Power BI, Python, and Azure.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB'
    },
    email: 'listed-14.tags@icloud.com'
  };

  return <StructuredData type="Person" data={personData} />;
}

export function WebSiteSchema() {
  const websiteData = {
    name: 'Tyler Knibbs - Data Analyst & Developer',
    url: 'https://tylerknibbs.com',
    description: 'Portfolio of Tyler Knibbs, Data Analyst & Developer.',
    author: {
      '@type': 'Person',
      name: 'Tyler Knibbs'
    },
    publisher: {
      '@type': 'Person',
      name: 'Tyler Knibbs'
    }
  };

  return <StructuredData type="WebSite" data={websiteData} />;
} 