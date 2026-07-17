'use client';

import { Reveal } from './Reveal';
import { SplitWords } from './SplitWords';

const STEPS = [
  {
    n: 'I',
    title: 'The Sketch',
    body: 'A line is drawn in ink. It is the first conversation between an idea and a body. We do not design on screens.',
  },
  {
    n: 'II',
    title: 'The Cloth',
    body: 'Cotton from Kasai. Wool from Biella. Silk from our small partner in Kandy. Cloth is chosen by hand, never by yard.',
  },
  {
    n: 'III',
    title: 'The Hand',
    body: 'Every seam is finished by a single tailor. A jacket has 47 components and one signature.',
  },
  {
    n: 'IV',
    title: 'The Press',
    body: 'The piece rests for seven days before final press. Rushing a garment is the same as forgetting a name.',
  },
];

export function Craftsmanship() {
  return (
    <section id="craftsmanship" className="relative py-32 lg:py-48 bg-ivory-300 grain">
      <div className="container-lux">
        <div className="grid lg:grid-cols-12 gap-12 mb-20 lg:mb-32">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow text-gold-700">Craftsmanship</div>
            </Reveal>
            <Reveal delay={0.1}>
              <SplitWords
                as="h2"
                text="Twelve hands. One piece."
                className="mt-6 font-display text-title text-ink-900 text-balance"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.2}>
              <p className="text-body text-ink-700 max-w-md font-sans font-light text-pretty">
                We do not measure speed. We measure time spent with the cloth.
                Every AURA garment carries an interior label — a hand-numbered mark,
                a date, and the name of the four who finished it.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} y={32}>
              <article className="group relative h-full bg-ivory-50 p-8 border border-ink-900/8 transition-all duration-700 hover:border-gold-600">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-5xl text-gold-600 font-light">{s.n}</span>
                  <span className="text-[0.66rem] uppercase tracking-widest2 text-ink-500">Atelier</span>
                </div>
                <h3 className="mt-10 font-display text-2xl text-ink-900">{s.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-700 font-sans font-light">
                  {s.body}
                </p>
                <div className="mt-8 h-px w-12 bg-gold-600 transition-all duration-700 group-hover:w-20" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
