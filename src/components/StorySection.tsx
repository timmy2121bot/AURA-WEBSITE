'use client';

import { Reveal } from './Reveal';
import { SplitWords } from './SplitWords';

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  align?: 'left' | 'right';
  cta?: string;
  chapter?: string;
};

export function StorySection({ eyebrow, title, body, image, imageAlt, align = 'left', cta, chapter }: Props) {
  const textCol = (
    <div className="flex flex-col justify-center py-10 lg:py-0">
      {chapter && (
        <Reveal>
          <div className="eyebrow text-gold-700 mb-6">{chapter}</div>
        </Reveal>
      )}
      <Reveal>
        <div className="eyebrow text-ink-700 mb-6">{eyebrow}</div>
      </Reveal>
      <Reveal delay={0.1}>
        <SplitWords
          as="h2"
          text={title}
          className="font-display text-title text-ink-900 text-balance"
        />
      </Reveal>
      <Reveal delay={0.25}>
        <p className="mt-8 text-body text-ink-700 max-w-md font-sans font-light text-pretty">
          {body}
        </p>
      </Reveal>
      {cta && (
        <Reveal delay={0.4}>
          <a href="#" className="link-lux mt-10 self-start">
            {cta}
          </a>
        </Reveal>
      )}
    </div>
  );

  const imgCol = (
    <Reveal y={40}>
      <div className="relative overflow-hidden bg-ivory-300 aspect-[4/5]">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.04]"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-ink-900/5" />
      </div>
    </Reveal>
  );

  return (
    <div className="container-lux grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      {align === 'left' ? (
        <>
          <div className="lg:col-span-7">{imgCol}</div>
          <div className="lg:col-span-5">{textCol}</div>
        </>
      ) : (
        <>
          <div className="lg:col-span-5 order-2 lg:order-1">{textCol}</div>
          <div className="lg:col-span-7 order-1 lg:order-2">{imgCol}</div>
        </>
      )}
    </div>
  );
}
