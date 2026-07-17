'use client';

const WORDS = [
  'Juba', 'Atelier', 'Hand-finished', 'Quiet Luxury', 'East Africa',
  'Craftsmanship', 'Nairobi', 'Lagos', 'Milan', 'Paris', 'By Appointment',
  'A House, Not A Label',
];

export function Marquee() {
  const items = [...WORDS, ...WORDS];
  return (
    <section aria-hidden className="relative bg-ivory-200 py-10 border-y border-ink-900/8 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {items.map((w, i) => (
          <div key={i} className="flex items-center gap-12 px-12 text-ink-700">
            <span className="font-display text-3xl md:text-4xl italic">{w}</span>
            <span className="h-1 w-1 rounded-full bg-gold-600" />
          </div>
        ))}
      </div>
    </section>
  );
}
