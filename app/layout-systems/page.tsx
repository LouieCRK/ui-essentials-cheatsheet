'use client'

import { motion } from 'framer-motion';
import Navbar from '../components/navbar';

/**
 * Layout Systems Playground
 * -------------------------
 * Built for: Next.js App Router + Tailwind + Framer Motion
 *
 * Suggested file path:
 * src/app/layout-systems/page.tsx
 *
 * Purpose:
 * This page teaches the layout fundamentals that show up in nearly every UI:
 * - containers
 * - flexbox
 * - CSS grid
 * - responsive columns
 * - alignment
 * - spacing rhythm
 * - common layout mistakes
 *
 * How to learn from this:
 * Change one Tailwind class at a time.
 * Do not randomly spam classes and hope it looks good. That is how you stay stuck.
 */

const flexExamples = [
  {
    title: 'justify-between',
    description: 'Pushes items apart across the available horizontal space.',
    className: 'justify-between',
  },
  {
    title: 'justify-center',
    description: 'Groups items together in the centre of the row.',
    className: 'justify-center',
  },
  {
    title: 'items-start',
    description: 'Aligns items to the top of the cross axis.',
    className: 'items-start',
  },
  {
    title: 'items-center',
    description: 'Vertically centres items in the row.',
    className: 'items-center',
  },
]

const gridExamples = [
  {
    title: 'Fixed 3-column grid',
    description: 'Useful when you know exactly how many columns you want on desktop.',
    className: 'grid-cols-1 md:grid-cols-3',
  },
  {
    title: 'Asymmetric content grid',
    description: 'Useful for hero sections, dashboards, and content plus preview layouts.',
    className: 'grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]',
  },
  {
    title: 'Dense dashboard grid',
    description: 'Useful for stats, cards, panels, and product UI blocks.',
    className: 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-4',
  },
]

const spacingScale = ['gap-2', 'gap-4', 'gap-6', 'gap-8']

function DemoBox({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`flex min-h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-sm font-semibold text-white/75 ${className}`}
    >
      {label}
    </div>
  )
}

function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300/80">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-white/60">{children}</p>
    </div>
  )
}

export default function LayoutSystemsPlayground() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
  <Navbar />

{/*
        PAGE WRAPPER
        px-6 gives mobile breathing room.
        py-20 gives vertical breathing room.
        max-w-7xl keeps the content from stretching too wide on big screens.
      */}
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12">
        {/* Background glow. Decorative only. */}
        <div className="pointer-events-none absolute left-[-12rem] top-[-12rem] h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-12rem] right-[-12rem] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-sky-300/80">
              Layout Systems Playground
            </p>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Learn how real interfaces are structured before they are styled.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Layout is the skeleton of UI. If the structure is weak, no amount of gradients,
              icons, or animations will save it. This page shows the core patterns you will use
              constantly in landing pages, dashboards, portfolios, and SaaS products.
            </p>
          </motion.div>

          {/* SECTION 1: CONTAINERS */}
          <section className="mt-20">
            <SectionHeader eyebrow="01 / Containers" title="Control width before you control style.">
              A container keeps your content readable. Without one, your page stretches across the
              full screen and starts looking like a dodgy internal admin panel from 2008.
            </SectionHeader>

            <div className="mt-8 space-y-6">
              {/* Bad example: full-width text */}
              <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-6">
                <p className="mb-3 text-sm font-semibold text-red-200">Bad: content allowed to run too wide</p>
                <p className="text-sm leading-7 text-white/55">
                  This text is inside a wide container. On large screens, long lines become harder to
                  read because the eye has to travel too far from left to right. This is one of those
                  quiet mistakes that instantly makes a page feel less polished.
                </p>
              </div>

              {/* Good example: max-width controlled */}
              <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-6">
                <p className="mb-3 text-sm font-semibold text-emerald-200">Good: readable max-width</p>
                <p className="max-w-2xl text-sm leading-7 text-white/65">
                  This text uses max-w-2xl, so the line length is controlled. It feels calmer,
                  easier to read, and more intentional.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: FLEXBOX */}
          <section className="mt-24">
            <SectionHeader eyebrow="02 / Flexbox" title="Use flexbox for one-dimensional layouts.">
              Flexbox is best when you are arranging items in a row or a column. Navbars, button
              groups, icon rows, form controls, and simple alignment problems are usually flexbox jobs.
            </SectionHeader>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {flexExamples.map((example, index) => (
                <motion.article
                  key={example.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">{example.description}</p>

                  {/*
                    DEMO ROW
                    h-32 makes vertical alignment visible.
                    flex turns this into a flex container.
                    gap-3 controls space between children.
                    The example.className changes the alignment behaviour.
                  */}
                  <div className={`mt-5 flex h-32 gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 ${example.className}`}>
                    <DemoBox label="A" className="w-16" />
                    <DemoBox label="B" className="w-16" />
                    <DemoBox label="C" className="w-16" />
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* SECTION 3: GRID */}
          <section className="mt-24">
            <SectionHeader eyebrow="03 / CSS Grid" title="Use grid for two-dimensional layouts.">
              Grid is best when you care about rows and columns at the same time. Card grids,
              dashboards, galleries, and complex page sections are usually grid jobs.
            </SectionHeader>

            <div className="mt-8 space-y-6">
              {gridExamples.map((example) => (
                <article key={example.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/55">{example.description}</p>
                    </div>

                    <code className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-sky-200">
                      {example.className}
                    </code>
                  </div>

                  {/*
                    The className below changes the grid behaviour.
                    gap-4 keeps the spacing consistent between cards.
                  */}
                  <div className={`grid gap-4 ${example.className}`}>
                    <DemoBox label="Panel 1" />
                    <DemoBox label="Panel 2" />
                    <DemoBox label="Panel 3" />
                    <DemoBox label="Panel 4" />
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* SECTION 4: SPACING RHYTHM */}
          <section className="mt-24">
            <SectionHeader eyebrow="04 / Spacing rhythm" title="Spacing is not decoration. It is structure.">
              Most messy UIs are not missing fancy visuals. They are missing consistent spacing.
              Pick a spacing rhythm and stick to it.
            </SectionHeader>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {spacingScale.map((gapClass) => (
                <article key={gapClass} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{gapClass}</h3>
                    <code className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">gap</code>
                  </div>

                  {/*
                    Change gapClass to see how spacing affects the visual density.
                    Smaller gaps feel tighter.
                    Larger gaps feel calmer but can waste space if overused.
                  */}
                  <div className={`grid ${gapClass}`}>
                    <DemoBox label="Item" />
                    <DemoBox label="Item" />
                    <DemoBox label="Item" />
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* SECTION 5: COMMON PAGE LAYOUT PATTERNS */}
          <section className="mt-24">
            <SectionHeader eyebrow="05 / Common patterns" title="Most pages are built from repeatable layout patterns.">
              Stop treating every section as a one-off masterpiece. Most professional interfaces reuse
              a small set of reliable structures.
            </SectionHeader>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold">Hero split layout</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Text on one side, visual/demo/product preview on the other.
                </p>
                <div className="mt-5 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
                  <DemoBox label="Copy" className="min-h-28" />
                  <DemoBox label="Visual" className="min-h-28" />
                </div>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold">Feature card grid</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Great for services, features, learning topics, and dashboard modules.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <DemoBox label="1" />
                  <DemoBox label="2" />
                  <DemoBox label="3" />
                  <DemoBox label="4" />
                </div>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold">Sidebar layout</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Common in SaaS dashboards, settings pages, and admin panels.
                </p>
                <div className="mt-5 grid grid-cols-[0.35fr_0.65fr] gap-3">
                  <DemoBox label="Nav" className="min-h-32" />
                  <DemoBox label="Content" className="min-h-32" />
                </div>
              </article>
            </div>
          </section>

          {/* SECTION 6: QUICK RULES */}
          <section className="mt-24 rounded-3xl bg-gradient-to-br from-sky-400 to-emerald-300 p-8 text-zinc-950">
            <h2 className="text-3xl font-bold tracking-tight">Layout rules worth drilling into your skull</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                'Use containers to control readable width.',
                'Use flexbox for rows and simple alignment.',
                'Use grid for cards, dashboards, and two-dimensional layouts.',
                'Use consistent gaps before reaching for visual effects.',
                'Design mobile first, then enhance for larger screens.',
                'If everything is important, nothing is important.',
              ].map((rule) => (
                <div key={rule} className="rounded-2xl bg-zinc-950/10 p-4 text-sm font-semibold text-zinc-950/80">
                  {rule}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

      