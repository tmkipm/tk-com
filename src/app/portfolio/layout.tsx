import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Tyler Knibbs',
  description: 'View my portfolio of data analysis, data engineering, and web development projects. Showcasing my skills in SQL, Power BI, Azure, Python, and more.',
  openGraph: {
    title: 'Portfolio - Tyler Knibbs',
    description: 'View my portfolio of data analysis, data engineering, and web development projects.',
    images: ['/images/portfolio-og-image.jpg'],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 