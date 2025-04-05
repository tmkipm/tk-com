import { Metadata } from 'next';
import { PersonSchema, WebSiteSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Tyler Knibbs - Data Analyst & Developer',
  description: 'Portfolio of Tyler Knibbs, Data Analyst & Developer specializing in SQL, Power BI, Python, and Azure, with expertise in data migrations and analytics automation.',
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PersonSchema />
      <WebSiteSchema />
      {children}
    </>
  );
} 