import { cn } from '@/lib/cn';

type LogoProps = {
  className?: string;
  variant?: 'dark' | 'light' | 'gold';
  showTagline?: boolean;
};

export function AuraLogo({ className, variant = 'dark', showTagline = true }: LogoProps) {
  const color = variant === 'light' ? '#FBF8F2' : variant === 'gold' ? '#B9975B' : '#1F1F1F';
  const sub   = variant === 'light' ? 'rgba(251,248,242,0.7)' : variant === 'gold' ? 'rgba(185,151,91,0.85)' : 'rgba(31,31,31,0.65)';

  return (
    <div className={cn('flex flex-col items-center select-none', className)}>
      <svg
        viewBox="0 0 240 80"
        className="h-12 sm:h-14 md:h-16 w-auto"
        aria-label="AURA"
      >
        {/* Monogram — a refined 'A' enclosed in a thin oval */}
        <g>
          <ellipse cx="32" cy="40" rx="28" ry="22" fill="none" stroke={color} strokeWidth="0.9" />
          <path
            d="M22 52 L32 24 L42 52 M26 44 L38 44"
            fill="none"
            stroke={color}
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="40" r="1.2" fill={color} />
        </g>

        {/* Wordmark */}
        <g>
          <text
            x="72"
            y="50"
            fill={color}
            fontFamily="'Cormorant Garamond', 'Times New Roman', serif"
            fontWeight="300"
            fontSize="34"
            letterSpacing="14"
          >
            AURA
          </text>
        </g>
      </svg>

      {showTagline && (
        <div
          className="mt-2 text-[0.62rem] sm:text-[0.66rem] uppercase font-sans"
          style={{ color: sub, letterSpacing: '0.42em' }}
        >
          The Fashion &amp; Design House
        </div>
      )}
    </div>
  );
}
