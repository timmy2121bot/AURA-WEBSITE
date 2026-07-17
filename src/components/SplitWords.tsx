'use client';

import { useEffect, useRef, type ElementType } from 'react';

type Props = {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  stagger?: number;
  trigger?: boolean;
};

export function SplitWords({ text, className, delay = 0, as: Tag = 'h2', stagger = 0.06, trigger = true }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!trigger) return;
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLSpanElement>('.word');

    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            started = true;
            words.forEach((w, i) => {
              setTimeout(() => w.classList.add('in'), delay + i * stagger * 1000);
            });
            io.disconnect();
          }
        }
      },
      { threshold: 0.18 }
    );
    io.observe(el);

    return () => io.disconnect();
  }, [delay, stagger, trigger]);

  const words = text.split(' ');
  const TagAny = Tag as ElementType;

  return (
    <TagAny ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="word">
          <span>{w}{i < words.length - 1 ? ' ' : ''}</span>
        </span>
      ))}
    </TagAny>
  );
}
