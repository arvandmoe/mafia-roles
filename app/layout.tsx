import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'See users lists here',
};

const vazirFont = localFont({
  src: './vazir.ttf',
  display: 'auto',
  variable: '--font-vazir',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' dir='rtl' className={`${vazirFont.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
