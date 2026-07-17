'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AuraLogo } from './AuraLogo';
import { cn } from '@/lib/cn';

const NAV = [
  { label: 'Women',     href: '#women' },
  { label: 'Men',       href: '#men' },
  { label: 'Design House', href: '#design-house' },
  { label: 'Craftsmanship', href: '#craftsmanship' },
  { label: 'Journal',   href: '#journal' },
  { label: 'World',     href: '#world' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-700',
          scrolled
            ? 'bg-ivory-100/85 backdrop-blur-md border-b border-ink-900/5'
            : 'bg-transparent'
        )}
      >
        <div className="container-lux flex items-center justify-between h-20 lg:h-24">
          <a href="#top" className="flex items-center gap-3">
            <AuraLogo showTagline={false} className="!items-start" />
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="link-lux">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a href="#concierge" className="link-lux">Concierge</a>
            <a href="#contact" className="btn-lux-ghost !py-3 !px-6">
              Book a Private Appointment
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="lg:hidden p-2 text-ink-900"
          >
            <Menu size={22} strokeWidth={1.2} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-ivory-100 transition-all duration-700',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="container-lux h-20 lg:h-24 flex items-center justify-between">
          <AuraLogo showTagline={false} className="!items-start" />
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
            <X size={24} strokeWidth={1.2} />
          </button>
        </div>
        <div className="container-lux mt-12 flex flex-col gap-6">
          {NAV.map((n, i) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-ink-900"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {n.label}
            </a>
          ))}
          <div className="lux-rule my-6" />
          <a href="#concierge" onClick={() => setOpen(false)} className="font-display text-3xl text-gold-700">
            Concierge
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="font-display text-3xl text-gold-700">
            Private Appointment
          </a>
        </div>
      </div>
    </>
  );
}
