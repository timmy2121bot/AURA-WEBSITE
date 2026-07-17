'use client';

import { useState } from 'react';
import { Reveal } from './Reveal';
import { SplitWords } from './SplitWords';
import { ArrowUpRight } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-32 lg:py-48 bg-ivory-100">
      <div className="container-lux grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="eyebrow text-gold-700">Private Appointment</div>
          </Reveal>
          <Reveal delay={0.1}>
            <SplitWords
              as="h2"
              text="Visit the house. We will be expecting you."
              className="mt-6 font-display text-title text-ink-900 text-balance"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-body text-ink-700 max-w-md font-sans font-light text-pretty">
              AURA is not a store. It is a house with a door, a small kitchen, and a tailor
              who will know your name. Tell us a little, and we will write to arrange a moment.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 space-y-6">
              {[
                { k: 'Atelier',     v: 'AURA House · Juba, South Sudan' },
                { k: 'By Mail',     v: 'concierge@aura.fashion' },
                { k: 'By Telephone',v: '+211 92 000 0000  ·  By Appointment' },
                { k: 'Hours',       v: 'Tuesday — Saturday  ·  11 — 19' },
              ].map((r) => (
                <div key={r.k} className="flex items-baseline gap-8 border-b border-ink-900/10 pb-4">
                  <span className="text-eyebrow uppercase tracking-widest2 text-ink-500 w-28">{r.k}</span>
                  <span className="font-serif text-lg text-ink-900 italic">{r.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="bg-ivory-50 border border-ink-900/8 p-10 lg:p-12"
            >
              {!submitted ? (
                <>
                  <div className="eyebrow text-gold-700 mb-8">Request an Invitation</div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="First Name" name="first" />
                    <Field label="Family Name" name="last" />
                    <Field label="Email" name="email" type="email" />
                    <Field label="Telephone" name="phone" />
                  </div>
                  <div className="mt-6">
                    <label className="block text-eyebrow uppercase tracking-widest2 text-ink-500 mb-2">A few words</label>
                    <textarea
                      rows={4}
                      placeholder="A moment, a place, a feeling…"
                      className="w-full bg-transparent border-b border-ink-900/20 focus:border-gold-600 outline-none py-2 font-serif text-lg italic text-ink-900 placeholder:text-ink-500/70"
                    />
                  </div>
                  <div className="mt-10 flex items-center justify-between">
                    <p className="text-[0.7rem] text-ink-500 max-w-xs">
                      We treat every word with discretion. You will hear from us within two working days.
                    </p>
                    <button className="btn-lux-primary">
                      Send
                      <ArrowUpRight size={14} strokeWidth={1.4} />
                    </button>
                  </div>
                </>
              ) : (
                <div className="py-16 text-center">
                  <div className="font-display text-4xl text-ink-900">Thank you.</div>
                  <p className="mt-4 text-ink-700 font-serif italic text-lg">
                    A letter will arrive shortly, from the house.
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text' }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-eyebrow uppercase tracking-widest2 text-ink-500 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required
        className="w-full bg-transparent border-b border-ink-900/20 focus:border-gold-600 outline-none py-2 font-serif text-lg text-ink-900 placeholder:text-ink-500/70"
      />
    </div>
  );
}
