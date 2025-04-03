import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Tyler Knibbs',
  description: 'Get in touch with Tyler Knibbs, Data Analyst & Developer. Fill out the contact form or reach out via email or LinkedIn.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 