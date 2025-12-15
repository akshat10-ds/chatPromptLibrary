import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agreement Analysis | Docusign AI Prompts',
  description: 'AI-powered prompts to analyze contracts, identify risks, extract clauses, and accelerate agreement review. Built for Legal, Sales, HR, and Compliance teams.',
  keywords: ['contract analysis', 'agreement review', 'legal AI', 'Docusign', 'contract management', 'risk analysis', 'compliance'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <div className="gradient-mesh" />
          {children}
          <div className="noise-overlay" />
        </Providers>
      </body>
    </html>
  );
}
