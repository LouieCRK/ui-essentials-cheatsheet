'use client'

import { motion } from 'framer-motion';
import Navbar from '../components/navbar';

/**
 * Typography Playground
 * ---------------------
 * Suggested file path:
 * app/typography/page.tsx
 *
 * Purpose:
 * Typography is one of the fastest ways to make UI look better.
 * This page teaches the fundamentals by showing visual examples you can tweak.
 *
 * What this page covers:
 * - font size hierarchy
 * - font weight hierarchy
 * - line-height / readability
 * - letter spacing
 * - readable max-widths
 * - contrast hierarchy
 * - bad vs good typography
 * - real UI text patterns
 *
 * Learning rule:
 * Change one class at a time.
 * If you change size, weight, colour, spacing, and width together,
 * you will not understand what actually improved the design.
 */

const fontSizes = [
  { label: 'text-sm', className: 'text-sm', usage: 'Metadata, labels, small supporting text' },
  { label: 'text-base', className: 'text-base', usage: 'Default body text' },
  { label: 'text-lg', className: 'text-lg', usage: 'Larger body text or intro copy' },
  { label: 'text-xl', className: 'text-xl', usage: 'Small section headings' },
  { label: 'text-3xl', className: 'text-3xl', usage: 'Section titles' },
  { label: 'text-5xl', className: 'text-5xl', usage: 'Hero headlines' },
]

const fontWeights = [
  { label: 'font-light', className: 'font-light' },
  { label: 'font-normal', className: 'font-normal' },
  { label: 'font-medium', className: 'font-medium' },
  { label: 'font-semibold', className: 'font-semibold' },
  { label: 'font-bold', className: 'font-bold' },
]

const contrastLevels = [
  { label: 'Primary', className: 'text-white', description: 'Main headings and important content' },
  { label: 'Secondary', className: 'text-white/75', description: 'Useful supporting copy' },
  { label: 'Muted', className: 'text-white/55', description: 'Descriptions, helper text, extra context' },
  { label: 'Subtle', className: 'text-white/35', description: 'Metadata, timestamps, quiet information' },
]

function CodePill({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-sky-200">
      {children}
    </code>
  )
}

function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300/80">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-white/60">{children}</p>
    </div>
  )
}

function ExampleCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <article className={`rounded-3xl border border-white/10 bg-white/[0.04] p-6 ${className}`}>{children}</article>
}

export default function TypographyPlayground() {
  return (
  <main className="min-h-screen bg-zinc-950 text-white">
    <Navbar />

    <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12">
        {/* Decorative background glow. */}
        <div className="pointer-events-none absolute left-[-12rem] top-[-12rem] h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-12rem] right-[-12rem] h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-violet-300/80">
              Typography Playground
            </p>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Learn how type creates hierarchy, rhythm, and clarity.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Typography is not just picking a nice font. It is how you tell users what matters,
              what to read first, and what can sit quietly in the background.
            </p>
          </motion.div>

          {/* SECTION 1: FONT SIZE */}
          <section className="mt-20">
            <SectionHeader eyebrow="01 / Font size" title="Size creates the first layer of hierarchy.">
              A clear type scale helps users understand the page quickly. Do not make everything big.
              If everything shouts, the interface turns into visual soup.
            </SectionHeader>

            <div className="mt-8 grid gap-4">
              {fontSizes.map((item) => (
                <ExampleCard key={item.label}>
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      {/*
                        The className below changes the rendered size.
                        Try swapping text-5xl for text-4xl, or text-sm for text-xs.
                      */}
                      <p className={`${item.className} font-semibold tracking-tight text-white`}>The quick brown fox jumps</p>
                      <p className="mt-2 text-sm text-white/50">{item.usage}</p>
                    </div>

                    <CodePill>{item.label}</CodePill>
                  </div>
                </ExampleCard>
              ))}
            </div>
          </section>

          {/* SECTION 2: FONT WEIGHT */}
          <section className="mt-24">
            <SectionHeader eyebrow="02 / Font weight" title="Weight should guide attention, not bully the page.">
              Beginners overuse bold. Good UI usually relies on subtle weight differences:
              normal for body, medium for labels, semibold for headings, bold only when needed.
            </SectionHeader>

            <div className="mt-8 grid gap-4 md:grid-cols-5">
              {fontWeights.map((item) => (
                <ExampleCard key={item.label}>
                  <p className={`${item.className} text-2xl tracking-tight text-white`}>Aa</p>
                  <p className={`${item.className} mt-4 text-lg text-white`}>Product analytics</p>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Same size. Different visual importance.
                  </p>
                  <div className="mt-5">
                    <CodePill>{item.label}</CodePill>
                  </div>
                </ExampleCard>
              ))}
            </div>
          </section>

          {/* SECTION 3: LINE HEIGHT */}
          <section className="mt-24">
            <SectionHeader eyebrow="03 / Line height" title="Line height decides whether body copy feels readable or cramped.">
              Paragraphs need breathing room. Tight line-height can work for huge headings,
              but body text usually needs more vertical space.
            </SectionHeader>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <ExampleCard className="border-red-400/20 bg-red-400/5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-red-100">Too tight</h3>
                  <CodePill>leading-tight</CodePill>
                </div>
                <p className="text-base leading-tight text-white/65">
                  This paragraph technically works, but the lines feel cramped together. It creates
                  friction for the reader and makes the interface feel less calm.
                </p>
              </ExampleCard>

              <ExampleCard>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-white">Better</h3>
                  <CodePill>leading-7</CodePill>
                </div>
                <p className="text-base leading-7 text-white/65">
                  This paragraph has more breathing room. The text is easier to scan and feels more
                  comfortable inside the card.
                </p>
              </ExampleCard>

              <ExampleCard className="border-emerald-400/20 bg-emerald-400/5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-emerald-100">Roomy</h3>
                  <CodePill>leading-8</CodePill>
                </div>
                <p className="text-base leading-8 text-white/65">
                  This works well for intro copy, long-form sections, or anything that needs a softer,
                  more editorial feel.
                </p>
              </ExampleCard>
            </div>
          </section>

          {/* SECTION 4: LETTER SPACING */}
          <section className="mt-24">
            <SectionHeader eyebrow="04 / Letter spacing" title="Tracking adds polish when used carefully.">
              Letter spacing is especially useful for uppercase labels and large headings. Overdo it
              and your UI starts looking like a fake luxury watch advert.
            </SectionHeader>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <ExampleCard>
                <CodePill>tracking-tight</CodePill>
                <h3 className="mt-5 text-4xl font-semibold tracking-tight text-white">Dashboard overview</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">Tighter tracking often works well on large headings.</p>
              </ExampleCard>

              <ExampleCard>
                <CodePill>tracking-normal</CodePill>
                <h3 className="mt-5 text-4xl font-semibold tracking-normal text-white">Dashboard overview</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">Normal tracking is usually best for body and standard UI text.</p>
              </ExampleCard>

              <ExampleCard>
                <CodePill>tracking-[0.25em]</CodePill>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Section label</p>
                <p className="mt-3 text-sm leading-6 text-white/55">Wide tracking works nicely for short uppercase labels.</p>
              </ExampleCard>
            </div>
          </section>

          {/* SECTION 5: READABLE WIDTH */}
          <section className="mt-24">
            <SectionHeader eyebrow="05 / Readable width" title="Long lines make users work harder.">
              The wider the paragraph, the harder it is to read. Use max-width utilities to control
              the reading experience.
            </SectionHeader>

            <div className="mt-8 space-y-6">
              <ExampleCard className="border-red-400/20 bg-red-400/5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-red-100">Bad: full width paragraph</h3>
                  <CodePill>no max-width</CodePill>
                </div>
                <p className="text-base leading-7 text-white/60">
                  This paragraph is allowed to stretch across the full card. On large screens this can become awkward to read because each line is too long. The reader has to track a lot of horizontal distance, which makes the layout feel less polished even if the colours and spacing are decent.
                </p>
              </ExampleCard>

              <ExampleCard className="border-emerald-400/20 bg-emerald-400/5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-emerald-100">Good: controlled width</h3>
                  <CodePill>max-w-2xl</CodePill>
                </div>
                <p className="max-w-2xl text-base leading-7 text-white/65">
                  This paragraph is constrained with max-w-2xl. The line length is more comfortable,
                  the section feels calmer, and the content becomes easier to scan.
                </p>
              </ExampleCard>
            </div>
          </section>

          {/* SECTION 6: CONTRAST HIERARCHY */}
          <section className="mt-24">
            <SectionHeader eyebrow="06 / Contrast" title="Not all text deserves the same visual volume.">
              Contrast creates priority. Primary content should be clear. Supporting content should be
              quieter. Metadata should be quietest.
            </SectionHeader>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {contrastLevels.map((item) => (
                <ExampleCard key={item.label}>
                  <p className={`${item.className} text-xl font-semibold`}>{item.label}</p>
                  <p className={`${item.className} mt-3 text-sm leading-6`}>{item.description}</p>
                  <div className="mt-5">
                    <CodePill>{item.className}</CodePill>
                  </div>
                </ExampleCard>
              ))}
            </div>
          </section>

          {/* SECTION 7: BAD VS GOOD */}
          <section className="mt-24">
            <SectionHeader eyebrow="07 / Bad vs good" title="Typography is usually fixed by restraint, not decoration.">
              If a section feels messy, do not instantly add icons, glows, and animations. First fix
              hierarchy, spacing, line-height, and contrast.
            </SectionHeader>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <ExampleCard className="border-red-400/20 bg-red-400/5">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-200">Bad example</p>
                <h3 className="mt-4 text-4xl font-bold leading-none tracking-wide text-white">
                  EVERYTHING IS IMPORTANT HERE
                </h3>
                <p className="mt-4 text-xl font-bold leading-tight text-white">
                  This section uses too much weight, too much size, cramped line-height, and no clear
                  hierarchy. It feels loud for no good reason.
                </p>
                <p className="mt-4 text-lg font-bold text-white">Last updated · Product UI · Dashboard</p>
              </ExampleCard>

              <ExampleCard className="border-emerald-400/20 bg-emerald-400/5">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-200/80">Good example</p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white">
                  Clear hierarchy makes the content easier to understand.
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                  This version uses a quieter label, a controlled heading, readable paragraph spacing,
                  and muted metadata. It feels more intentional without needing extra decoration.
                </p>
                <p className="mt-5 text-sm text-white/40">Last updated · Product UI · Dashboard</p>
              </ExampleCard>
            </div>
          </section>

          {/* SECTION 8: REAL UI PATTERNS */}
          <section className="mt-24">
            <SectionHeader eyebrow="08 / Real UI patterns" title="Typography decisions repeat across product interfaces.">
              Once you understand the patterns, you stop guessing. Dashboards, landing pages, cards,
              forms, and settings screens all reuse the same typography logic.
            </SectionHeader>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <ExampleCard>
                <p className="text-sm font-medium text-white/45">Dashboard header</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">Welcome back, Louie</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">Here is what changed across your projects this week.</p>
              </ExampleCard>

              <ExampleCard>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300/80">Feature</p>
                <h3 className="mt-3 text-xl font-semibold text-white">Reusable components</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">Build patterns once, then reuse them with predictable variants.</p>
              </ExampleCard>

              <ExampleCard>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-white/45">Monthly revenue</p>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-white">£4,280</p>
                  </div>
                  <p className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">+12%</p>
                </div>
                <p className="mt-5 text-sm leading-6 text-white/50">Stat cards need clear numbers, quiet labels, and useful context.</p>
              </ExampleCard>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="mt-24 rounded-3xl bg-gradient-to-br from-violet-400 to-sky-300 p-8 text-zinc-950">
            <h2 className="text-3xl font-bold tracking-tight">Typography rule worth remembering</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-900/75">
              Most typography problems are hierarchy problems. Make the important thing obvious,
              make supporting text comfortable to read, and make metadata quieter. That alone fixes
              a shocking amount of bad UI.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
