'use client';

import { Reveal } from './Reveal';
import { SplitWords } from './SplitWords';

export function DesignHouse() {
  return (
    <section id="design-house" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-ink-900">
      <video
        src="/videos/design-house.mp4"
        autoPlay loop muted playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-80 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-transparent to-ink-900/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.55)_100%)]" />

      <div className="relative z-10 h-full container-lux flex flex-col justify-end pb-20 lg:pb-28">
        <div className="max-w-2xl">
          <Reveal>
            <div className="eyebrow text-gold-400">The Design House</div>
          </Reveal>
          <Reveal delay={0.1}>
            <SplitWords
              as="h2"
              text="A quiet house. A long conversation."
              className="mt-6 font-display text-title text-ivory-50 text-balance"
            />
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 text-body-lg text-ivory-100/85 max-w-xl font-sans font-light text-pretty">
              Founded in Juba, AURA is a house of four ateliers — pattern, cut, finish,
              and press. Every piece passes through twelve hands before it is signed.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
              {[
                { k: '01', v: 'Pattern' },
                { k: '02', v: 'Cut' },
                { k: '03', v: 'Finish' },
                { k: '04', v: 'Press' },
              ].map((s) => (
                <div key={s.k} className="flex items-center gap-3 text-ivory-100/80">
                  <span className="font-display text-2xl text-gold-400">{s.k}</span>
                  <span className="text-eyebrow uppercase tracking-widest2">{s.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
