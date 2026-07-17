'use client';

import { Reveal } from './Reveal';
import { SplitWords } from './SplitWords';

const ITEMS = [
  { img: '/images/collection-01.jpg', name: 'Ivory Wrap Dress',          category: 'Women · Atelier', price: 'Upon Request' },
  { img: '/images/collection-02.jpg', name: 'Soft Tailored Coat',         category: 'Women · Atelier', price: 'Upon Request' },
  { img: '/images/collection-03.jpg', name: 'Quiet Suit · Charcoal',     category: 'Men · Atelier',   price: 'Upon Request' },
  { img: '/images/collection-04.jpg', name: 'Hand-stitched Loafer',      category: 'Men · Accessories', price: 'Upon Request' },
  { img: '/images/collection-05.jpg', name: 'Civil Collection · Look 04', category: 'Editorial',       price: 'View Look' },
  { img: '/images/collection-06.jpg', name: 'SarLon · Traveller',        category: 'Men · Ready',     price: 'Upon Request' },
  { img: '/images/collection-07.jpg', name: 'SarLon · Two-Piece',        category: 'Men · Ready',     price: 'Upon Request' },
  { img: '/images/collection-08.jpg', name: 'SarLon · Evening',          category: 'Men · Ready',     price: 'Upon Request' },
];

export function Collections() {
  return (
    <section className="relative py-32 lg:py-44 bg-ivory-100">
      <div className="container-lux">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-24 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="eyebrow text-gold-700">The Collections</div>
            </Reveal>
            <Reveal delay={0.1}>
              <SplitWords
                as="h2"
                text="A wardrobe, considered."
                className="mt-6 font-display text-title text-ink-900 max-w-2xl text-balance"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-body text-ink-700 max-w-md font-sans font-light text-pretty">
                Each piece is hand-finished in our Juba atelier from natural fibres
                sourced across East Africa and Italy. Nothing is rushed. Nothing is
                repeated.
              </p>
              <div className="mt-6 flex gap-6">
                <a href="#women" className="link-lux">Women</a>
                <a href="#men" className="link-lux">Men</a>
                <a href="#" className="link-lux">Accessories</a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ITEMS.map((item, i) => (
            <Reveal key={item.name} delay={(i % 4) * 0.08} y={40}>
              <a href="#" className="group block">
                <div className="relative overflow-hidden bg-ivory-300 aspect-[3/4] mb-5">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-ink-900/5" />
                  <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                    <span className="text-[0.66rem] uppercase tracking-widest2 text-ivory-50 bg-ink-900/70 backdrop-blur-sm px-3 py-1.5">
                      View Piece
                    </span>
                  </div>
                </div>
                <div className="text-[0.66rem] uppercase tracking-widest2 text-ink-500 mb-1">{item.category}</div>
                <div className="font-display text-xl text-ink-900">{item.name}</div>
                <div className="mt-1 text-[0.78rem] text-gold-700 tracking-widest2 uppercase">{item.price}</div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-ink-900/10 pt-10">
            <p className="font-serif italic text-ink-700 max-w-md text-center sm:text-left">
              “We do not sell garments. We compose wardrobes.”
              <span className="block mt-2 text-[0.7rem] uppercase tracking-widest2 text-gold-700 not-italic">
                — Adhieu Ajang, Creative Director
              </span>
            </p>
            <a href="#concierge" className="btn-lux-ghost">Request the Full Lookbook</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
