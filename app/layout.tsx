import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/shared/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cyberguard.africa'),
  title: 'CyberGuard — AI-Native Cybersecurity Built for Africa',
  description:
    'CyberGuard unifies AI SOC, EDR, NDR, SIEM, SOAR, Threat Intelligence, and Compliance into one intelligent platform. Enterprise-grade cybersecurity built for Africa.',
  keywords: [
    'cybersecurity Africa',
    'AI SOC',
    'EDR',
    'NDR',
    'SIEM',
    'SOAR',
    'threat intelligence',
    'compliance monitoring',
    'CyberGuard',
  ],
  openGraph: {
    title: 'CyberGuard — AI-Native Cybersecurity Built for Africa',
    description: 'One Platform. Zero Blind Spots. Cybersecurity Built for Africa.',
    type: 'website',
    url: 'https://cyberguard.africa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyberGuard — AI-Native Cybersecurity Built for Africa',
    description: 'One Platform. Zero Blind Spots. Cybersecurity Built for Africa.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-sans antialiased min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
