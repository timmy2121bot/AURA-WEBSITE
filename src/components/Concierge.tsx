'use client';

import { useEffect, useRef, useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { SplitWords } from './SplitWords';
import { Reveal } from './Reveal';

type Message = {
  id: string;
  role: 'user' | 'aura';
  text: string;
};

const SCRIPTED_REPLIES: { match: RegExp; reply: (q: string) => string }[] = [
  {
    match: /destination wedding/i,
    reply: (q) =>
      `A destination wedding asks for one piece that travels beautifully and disappears into the setting. I would begin with a silk wrap dress in a hand-finished ivory — quietly architectural, never bridal. Pair it with our hand-woven gold cuff and low block-heeled sandals; bring a structured raffia tote for the long day. Would you like me to assemble the look and reserve a private fitting in our Juba atelier?`,
  },
  {
    match: /executive travel|capsule|wardrobe/i,
    reply: (q) =>
      `For a considered capsule, eight pieces, four days of light, and one rule: nothing should need ironing. I would build around our relaxed two-piece in superfine wool, a fluid ivory shell, three precise knits, one statement coat, and a softly tailored trouser. Every piece is interlined in our Juba atelier. May I prepare your private edit?`,
  },
  {
    match: /nairobi|dinner|evening/i,
    reply: (q) =>
      `For an evening in Nairobi, I would think of the air, not just the room. A column dress in deep claret, bias-cut, falls in a single line; with our hammered gold ear and a soft slipper. The result is composed, never loud. Shall I arrange a private appointment at our Nairobi residence?`,
  },
  {
    match: /discover|hello|hi|concierge|aura/i,
    reply: (q) =>
      `Welcome to AURA. I am your private concierge. Tell me where you are going, how you wish to feel, and the room you are stepping into — and I will compose a wardrobe to match. There is no rush here.`,
  },
];

function composeReply(q: string): string {
  for (const r of SCRIPTED_REPLIES) {
    if (r.match.test(q)) return r.reply(q);
  }
  return `Thank you. I will treat your words with care. To begin, would you tell me a single moment you are dressing for — a place, an occasion, a feeling — and I will compose a quiet wardrobe around it.`;
}

export function Concierge() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'a0',
      role: 'aura',
      text: 'Welcome to AURA. I am your private concierge. Describe a moment — a place, a season, a feeling — and I will compose a wardrobe around it.',
    },
  ]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const scroller = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: 'smooth' });
  }, [messages, thinking]);

  const send = (text?: string) => {
    const value = (text ?? input).trim();
    if (!value) return;
    const userMsg: Message = { id: `u-${Date.now()}`, role: 'user', text: value };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setThinking(true);
    setTimeout(() => {
      const reply = composeReply(value);
      setMessages((m) => [...m, { id: `a-${Date.now()}`, role: 'aura', text: reply }]);
      setThinking(false);
    }, 1100);
  };

  const chips = [
    'Dress me for a destination wedding.',
    'Build a capsule wardrobe.',
    'Dress me for a dinner in Nairobi.',
    'Help me discover AURA.',
  ];

  return (
    <section className="relative py-32 lg:py-48 bg-ivory-200 grain overflow-hidden">
      <div className="container-lux grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <Reveal>
            <div className="eyebrow text-gold-700">The AURA Concierge</div>
          </Reveal>

          <Reveal delay={0.1}>
            <SplitWords
              as="h2"
              text="A conversation, not a catalogue."
              className="mt-6 font-display text-title text-ink-900 max-w-xl text-balance"
            />
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 text-body text-ink-700 max-w-md font-sans font-light text-pretty">
              Our private concierge is composed like a stylist, a fashion editor, and a
              long-time friend. Describe a moment — and we will quietly assemble a
              wardrobe to match. There is no rush here.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 space-y-3 text-eyebrow uppercase text-ink-700">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold-600" />
                Personal Stylist
              </div>
              <div className="flex items-center gap-3 pl-11">
                <span className="h-px w-0" /> Fashion Editor
              </div>
              <div className="flex items-center gap-3 pl-11">
                <span className="h-px w-0" /> Creative Director
              </div>
              <div className="flex items-center gap-3 pl-11">
                <span className="h-px w-0" /> Luxury Concierge
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="bg-ivory-50 border border-ink-900/8 rounded-sm shadow-[0_60px_120px_-60px_rgba(31,31,31,0.25)]">
              <div className="flex items-center justify-between border-b border-ink-900/8 px-7 py-4">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-600 animate-breath" />
                  <span className="eyebrow text-ink-700">AURA · Atelier Concierge</span>
                </div>
                <span className="text-[0.66rem] uppercase tracking-widest2 text-ink-500">Encrypted · Private</span>
              </div>

              <div ref={scroller} className="h-[420px] overflow-y-auto px-7 py-8 space-y-6 mask-fade-tb">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-5 py-4 text-[0.95rem] leading-relaxed ${
                        m.role === 'user'
                          ? 'bg-ink-900 text-ivory-50 rounded-2xl rounded-br-sm'
                          : 'bg-ivory-100 text-ink-900 border border-ink-900/8 rounded-2xl rounded-bl-sm font-serif italic'
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
                {thinking && (
                  <div className="flex justify-start">
                    <div className="px-5 py-4 bg-ivory-100 border border-ink-900/8 rounded-2xl rounded-bl-sm">
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold-600 animate-breath" />
                        <span className="h-1.5 w-1.5 rounded-full bg-gold-600 animate-breath" style={{ animationDelay: '0.2s' }} />
                        <span className="h-1.5 w-1.5 rounded-full bg-gold-600 animate-breath" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-ink-900/8 px-7 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex-1 flex items-center gap-3 border border-ink-900/15 rounded-full px-5 py-3 focus-within:border-gold-600 transition-colors duration-500">
                    <Sparkles size={14} strokeWidth={1.4} className="text-gold-600" />
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && send()}
                      placeholder="Describe a moment…"
                      className="flex-1 bg-transparent outline-none text-ink-900 placeholder:text-ink-500 font-sans text-sm"
                    />
                  </div>
                  <button
                    onClick={() => send()}
                    aria-label="Send"
                    className="h-11 w-11 rounded-full bg-ink-900 text-ivory-50 flex items-center justify-center hover:bg-gold-600 hover:text-ink-900 transition-colors duration-700"
                  >
                    <Send size={16} strokeWidth={1.4} />
                  </button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <button
                      key={c}
                      onClick={() => send(c)}
                      className="text-[0.7rem] uppercase tracking-widest2 text-ink-700 border border-ink-900/15 px-3.5 py-1.5 rounded-full hover:border-gold-600 hover:text-gold-700 transition-colors duration-500"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
