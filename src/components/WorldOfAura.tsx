'use client';

import { Reveal } from './Reveal';
import { SplitWords } from './SplitWords';

const PLACES = [
  { city: 'Juba',    country: 'South Sudan', tag: 'Atelier · House' },
  { city: 'Nairobi', country: 'Kenya',       tag: 'Private Residence' },
  { city: 'Lagos',   country: 'Nigeria',     tag: 'Coming · 2026' },
  { city: 'Paris',   country: 'France',      tag: 'By Appointment' },
  { city: 'Milan',   country: 'Italy',       tag: 'By Appointment' },
  { city: 'New York',country: 'United States', tag: 'Coming · 2027' },
];

export function WorldOfAura() {
  return (
    <section id="world" className="relative py-32 lg:py-48 bg-ink-900 text-ivory-50 grain overflow-hidden">
      {/* warm spotlight */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[840px] rounded-full bg-gold-600/10 blur-3xl pointer-events-none" />

      <div className="container-lux relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-20 lg:mb-32">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="eyebrow text-gold-400">The World of AURA</div>
            </Reveal>
            <Reveal delay={0.1}>
              <SplitWords
                as="h2"
                text="A house without a single address."
                className="mt-6 font-display text-title text-ivory-50 text-balance"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <Reveal delay={0.2}>
              <p className="text-body text-ivory-100/80 max-w-md font-sans font-light text-pretty">
                AURA lives quietly in six cities and travels by invitation. Our clients
                come to us, and we come to them — with a single suitcase and a long memory.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory-50/10 border border-ivory-50/10">
          {PLACES.map((p, i) => (
            <Reveal key={p.city} delay={(i % 3) * 0.1}>
              <div className="group bg-ink-900 p-10 lg:p-12 transition-colors duration-700 hover:bg-ink-800">
                <div className="flex items-baseline justify-between">
                  <span className="text-[0.66rem] uppercase tracking-widest2 text-gold-400">{p.tag}</span>
                  <span className="text-[0.66rem] uppercase tracking-widest2 text-ivory-100/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="mt-12 font-display text-4xl lg:text-5xl text-ivory-50 font-light">{p.city}</div>
                <div className="mt-2 text-eyebrow uppercase tracking-widest2 text-ivory-100/60">{p.country}</div>
                <div className="mt-10 h-px w-12 bg-gold-400 transition-all duration-700 group-hover:w-20" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
