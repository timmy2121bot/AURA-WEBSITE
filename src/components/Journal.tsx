'use client';

import { Reveal } from './Reveal';
import { SplitWords } from './SplitWords';
import { ArrowUpRight } from 'lucide-react';

const ENTRIES = [
  {
    eyebrow: 'Editorial',
    date: 'July · 2026',
    title: 'On the colour of a Juba afternoon.',
    excerpt: 'Notes on warm light, gold, and the meaning of an unhurried wardrobe.',
    image: '/images/journal-01.jpg',
  },
  {
    eyebrow: 'Craft',
    date: 'June · 2026',
    title: 'A conversation with the loom.',
    excerpt: 'Inside our partnership with the last hand-weaving cooperative in Yei.',
    image: '/images/journal-02.jpg',
  },
  {
    eyebrow: 'Travel',
    date: 'May · 2026',
    title: 'What to pack for an African summer.',
    excerpt: 'A 12-piece wardrobe designed to breathe, to dry, to age beautifully.',
    image: '/images/journal-03.jpg',
  },
];

export function Journal() {
  return (
    <section id="journal" className="relative py-32 lg:py-44 bg-ivory-100">
      <div className="container-lux">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16 lg:mb-24">
          <div className="max-w-xl">
            <Reveal>
              <div className="eyebrow text-gold-700">The Journal</div>
            </Reveal>
            <Reveal delay={0.1}>
              <SplitWords
                as="h2"
                text="A letter, from the house."
                className="mt-6 font-display text-title text-ink-900 text-balance"
              />
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a href="#" className="link-lux self-start lg:self-end flex items-center gap-2">
              All Entries
              <ArrowUpRight size={14} strokeWidth={1.4} />
            </a>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {ENTRIES.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1} y={40}>
              <a href="#" className="group block">
                <div className="relative overflow-hidden bg-ivory-300 aspect-[4/5] mb-6">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-4 text-[0.66rem] uppercase tracking-widest2 text-ink-500">
                  <span className="text-gold-700">{e.eyebrow}</span>
                  <span>·</span>
                  <span>{e.date}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-ink-900 leading-tight text-balance">
                  {e.title}
                </h3>
                <p className="mt-3 text-[0.95rem] text-ink-700 font-sans font-light leading-relaxed">
                  {e.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-widest2 text-ink-900 group-hover:text-gold-700 transition-colors duration-500">
                  Read <ArrowUpRight size={12} strokeWidth={1.4} />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
