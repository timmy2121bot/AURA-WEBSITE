'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { AuraLogo } from './AuraLogo';
import { SplitWords } from './SplitWords';

function Reveal({ children, delay = 0, y = 28 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add('is-in'), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <div
      ref={ref}
      className="reveal"
      style={{ ['--y' as any]: `${y}px` }}
    >
      {children}
    </div>
  );
}

const PROMPTS = [
  'Dress me for a destination wedding.',
  'Create a wardrobe for executive travel.',
  'What should I wear for a luxury dinner in Nairobi?',
  'Build my capsule wardrobe.',
  'Help me discover AURA.',
];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [promptIdx, setPromptIdx] = useState(0);
  const [typed, setTyped] = useState('');

  // Rotating placeholder text inside the AI input
  useEffect(() => {
    const text = PROMPTS[promptIdx];
    let i = 0;
    setTyped('');
    const id = setInterval(() => {
      i++;
      setTyped(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setTimeout(() => setPromptIdx((p) => (p + 1) % PROMPTS.length), 2400);
      }
    }, 38);
    return () => clearInterval(id);
  }, [promptIdx]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.play().catch(() => {});
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-ink-900">
      {/* Cinematic video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover scale-105"
        />
        {/* Warm ivory wash + vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/55 via-ink-900/20 to-ink-900/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.55)_100%)]" />
        <div className="absolute inset-0 mix-blend-multiply" style={{ background: 'linear-gradient(180deg, rgba(247,242,234,0.04), rgba(247,242,234,0.10))' }} />
      </div>

      {/* Top centered logo */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10">
        <AuraLogo variant="light" showTagline={false} />
      </div>

      {/* Centered copy */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-16">
        <div className="flex items-center gap-3 mb-8 text-ivory-100/80 text-eyebrow uppercase tracking-widest2">
          <span className="h-px w-10 bg-ivory-100/40" />
          <span>Juba · South Sudan · Est. 2024</span>
          <span className="h-px w-10 bg-ivory-100/40" />
        </div>

        <SplitWords
          as="h1"
          text="Crafted for the moments that define a life."
          className="font-display text-[clamp(2.5rem,6.8vw,5.8rem)] font-light text-ivory-50 max-w-[18ch] mx-auto text-balance"
          stagger={0.05}
        />

        <Reveal delay={1.1}>
          <p className="mt-8 text-ivory-100/85 text-body-lg max-w-xl font-sans font-light">
            The Fashion &amp; Design House of Juba — a quiet dialogue between
            African craftsmanship and the international language of luxury.
          </p>
        </Reveal>

        <Reveal delay={1.3} y={20}>
          <form
            id="concierge"
            onSubmit={(e) => e.preventDefault()}
            className="mt-14 w-full max-w-2xl"
          >
            <label className="eyebrow text-ivory-100/70 mb-3 flex items-center justify-center gap-2">
              <Sparkles size={12} strokeWidth={1.4} className="text-gold-400" />
              AURA · Private Concierge
            </label>
            <div className="group relative flex items-center bg-ivory-50/95 backdrop-blur-sm border border-ivory-50/20 rounded-full overflow-hidden">
              <input
                aria-label="Describe your style aspiration"
                placeholder={typed || ' '}
                className="flex-1 bg-transparent px-7 py-5 text-ink-900 placeholder:text-ink-500/70 font-serif text-lg italic outline-none"
              />
              <button
                type="submit"
                className="m-2 px-6 py-3 rounded-full bg-ink-900 text-ivory-50 text-eyebrow uppercase font-sans tracking-widest2 hover:bg-gold-600 hover:text-ink-900 transition-colors duration-700"
              >
                Begin
              </button>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.7rem] text-ivory-100/65 tracking-widest2 uppercase">
              {PROMPTS.map((p, i) => (
                <span key={p} className={i === promptIdx ? 'text-gold-400' : 'opacity-60'}>
                  {i === promptIdx ? p : '·'}
                </span>
              ))}
            </div>
          </form>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ivory-100/70">
        <span className="text-[0.62rem] uppercase tracking-widest2">Discover</span>
        <ChevronDown size={18} strokeWidth={1.2} className="animate-breath" />
      </div>

      {/* corner index */}
      <div className="hidden md:flex absolute bottom-8 left-8 z-10 items-end gap-3 text-ivory-100/65 text-[0.66rem] uppercase tracking-widest2">
        <div>
          <div className="text-gold-400">N 04° 51′</div>
          <div>Juba, South Sudan</div>
        </div>
      </div>
      <div className="hidden md:flex absolute bottom-8 right-8 z-10 items-end gap-3 text-ivory-100/65 text-[0.66rem] uppercase tracking-widest2 text-right">
        <div>
          <div>Chapter I</div>
          <div className="text-gold-400">A Quiet Arrival</div>
        </div>
      </div>
    </section>
  );
}
