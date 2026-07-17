'use client';

import { AuraLogo } from './AuraLogo';
import { Instagram, Send, Mail } from 'lucide-react';

const COLS = [
  {
    title: 'The House',
    links: ['Our Story', 'The Atelier', 'Craftsmanship', 'Press', 'Sustainability'],
  },
  {
    title: 'Collections',
    links: ['Women', 'Men', 'Accessories', 'Bespoke', 'Bridal'],
  },
  {
    title: 'Services',
    links: ['Private Concierge', 'Bespoke Tailoring', 'Wardrobe Edit', 'Travel Atelier', 'The Journal'],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-ivory-300 text-ink-900 border-t border-ink-900/10">
      <div className="container-lux py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <AuraLogo showTagline={false} className="!items-start" />
            <p className="mt-8 text-body text-ink-700 max-w-sm font-sans font-light text-pretty">
              The Fashion &amp; Design House of Juba. Composed quietly for those who
              believe a wardrobe is a long sentence — never a shout.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <SocialIcon><Instagram size={16} strokeWidth={1.4} /></SocialIcon>
              <SocialIcon><Send size={16} strokeWidth={1.4} /></SocialIcon>
              <SocialIcon><Mail size={16} strokeWidth={1.4} /></SocialIcon>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {COLS.map((c) => (
              <div key={c.title}>
                <div className="eyebrow text-gold-700 mb-6">{c.title}</div>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-ink-700 hover:text-gold-700 transition-colors duration-500 text-[0.95rem]">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 lux-rule" />

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.7rem] uppercase tracking-widest2 text-ink-500">
          <div>© 2026 AURA · The Fashion &amp; Design House · Juba, South Sudan</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold-700">Privacy</a>
            <a href="#" className="hover:text-gold-700">Terms</a>
            <a href="#" className="hover:text-gold-700">Cookies</a>
            <a href="#" className="hover:text-gold-700">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="h-10 w-10 rounded-full border border-ink-900/15 flex items-center justify-center text-ink-900 hover:bg-ink-900 hover:text-ivory-50 transition-colors duration-500"
    >
      {children}
    </a>
  );
}
