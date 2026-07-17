'use client';

import { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: keyof JSX.IntrinsicElements;
};

export function Reveal({ children, className, delay = 0, y = 28, as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const target = e.target as HTMLElement;
            setTimeout(() => target.classList.add('is-in'), delay);
            io.unobserve(target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);

    return () => io.disconnect();
  }, [delay]);

  // Build a ref-compatible element
  const Component = Tag as any;
  return (
    <Component
      ref={ref as any}
      className={`reveal ${className ?? ''}`}
      style={{ ['--y' as any]: `${y}px` }}
    >
      {children}
    </Component>
  );
}
