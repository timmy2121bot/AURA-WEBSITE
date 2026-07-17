import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AURA · The Fashion & Design House of Juba',
  description:
    'A quiet, world-class luxury fashion and design house from Juba, South Sudan.',
};

export const viewport: Viewport = {
  themeColor: '#F7F2EA',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@200;300;400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
