import Providers from '@/shared/components/providers';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'لیست نقش ها',
  description: 'نقش های مافیا',
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
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
