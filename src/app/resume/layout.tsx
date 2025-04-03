import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume - Tyler Knibbs',
  description: 'Professional resume of Tyler Knibbs, Data Analyst & Developer specializing in SQL, Power BI, and cloud technologies.',
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 