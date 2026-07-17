import type { Metadata } from 'next';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Concierge } from '@/components/Concierge';
import { Marquee } from '@/components/Marquee';
import { Collections } from '@/components/Collections';
import { DesignHouse } from '@/components/DesignHouse';
import { Craftsmanship } from '@/components/Craftsmanship';
import { Journal } from '@/components/Journal';
import { WorldOfAura } from '@/components/WorldOfAura';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AURA · The Fashion & Design House of Juba',
  description:
    'A quiet, world-class luxury fashion and design house from Juba, South Sudan. Crafted for the moments that define a life.',
};

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <Navigation />
      <main className="bg-ivory-100 text-ink-900">
        <Hero />
        <Marquee />
        <Concierge />
        <Collections />
        <DesignHouse />
        <Craftsmanship />
        <Journal />
        <WorldOfAura />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
