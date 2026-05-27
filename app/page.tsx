'use client'
import { motion } from 'framer-motion';
import Navbar from './components/navbar';

/**
 * UI Design Fundamentals Cheatsheet
 * --------------------------------
 * Built for: Next.js / React / TypeScript-ish thinking / Tailwind / Framer Motion
 *
 * Goal:
 * This page is not just a pretty UI.
 * It is a learning reference you can copy, tweak, break, and rebuild.
 *
 * What to look for:
 * - spacing decisions
 * - typography scale
 * - colour contrast
 * - reusable card patterns
 * - button hierarchy
 * - grid layouts
 * - visual rhythm
 * - hover/focus states
 * - simple animation
 */

const principles = [
  {
    title: "Spacing",
    description:
      "Good UI usually feels clean because the spacing is consistent, not because it has loads of effects.",
    tweak: "Try changing gap-6 to gap-3 or gap-10 and watch how cramped or loose it feels.",
  },
  {
    title: "Typography",
    description:
      "Use size, weight, and colour to create hierarchy. Not everything should scream for attention.",
    tweak: "Try changing text-5xl to text-3xl, or font-semibold to font-bold.",
  },
  {
    title: "Colour",
    description:
      "Use one strong accent colour, then support it with neutrals. Too many colours makes UI look amateur.",
    tweak: "Swap emerald classes for blue, violet, rose, amber, etc.",
  },
  {
    title: "Cards",
    description:
      "Cards group related information. Padding, border, shadow, and radius decide how premium they feel.",
    tweak: "Try rounded-xl vs rounded-3xl, p-4 vs p-8, shadow-sm vs shadow-xl.",
  },
  {
    title: "Buttons",
    description:
      "Buttons need hierarchy. Primary actions should be obvious. Secondary actions should be quieter.",
    tweak: "Try swapping the primary and secondary button styles below.",
  },
  {
    title: "Animation",
    description:
      "Animation should guide attention, not turn the page into a circus. Keep it subtle.",
    tweak: "Change duration, y, and delay values in the motion components.",
  },
];

const cardExamples = [
  {
    label: "Basic Card",
    className: "rounded-2xl border border-white/10 bg-white/5 p-6",
  },
  {
    label: "Soft Card",
    className: "rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl shadow-black/20",
  },
  {
    label: "Accent Card",
    className:
      "rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-6 shadow-xl shadow-emerald-950/40",
  },
];

export default function UIDesignFundamentalsCheatsheet() {
  return (
    
    <main className="min-h-screen bg-zinc-950 text-white">
  <Navbar />

{/*
        PAGE BACKGROUND
        bg-zinc-950 = near black, softer than pure black.
        text-white = default text colour.
        overflow-hidden stops background blobs from causing scrollbars.
      */}
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12">
        {/*
          DECORATIVE BACKGROUND BLOBS
          These add depth without needing images.
          pointer-events-none means users can't accidentally interact with them.
          blur-3xl makes them soft and atmospheric.
        */}
        <div className="pointer-events-none absolute left-[-10rem] top-[-10rem] h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-12rem] right-[-8rem] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/*
            HERO SECTION
            This sets the visual tone of the page.
            max-w-3xl keeps text readable instead of stretching too wide.
          */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-emerald-300/80">
              UI Design Fundamentals
            </p>

            {/*
              TYPOGRAPHY HIERARCHY
              text-5xl = strong desktop headline
              sm:text-6xl = bigger on larger screens
              leading-tight = tighter line spacing for large headings
            */}
            <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              A practical cheatsheet for building cleaner interfaces.
            </h1>

            {/*
              BODY COPY
              text-white/65 makes this less important than the heading.
              leading-8 improves readability.
            */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Use this page as a visual reference while building with Next.js,
              Tailwind, and Framer Motion. Change the classes, reload the page,
              and actually notice what each decision does.
            </p>

            {/*
              BUTTON ROW
              flex-wrap stops buttons breaking badly on small screens.
              gap-3 controls spacing between buttons.
            */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-zinc-950">
                Primary action
              </button>

              <button className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/85 transition hover:border-white/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-zinc-950">
                Secondary action
              </button>
            </div>
          </motion.div>

          {/*
            PRINCIPLES GRID
            grid-cols-1 = one column on mobile
            md:grid-cols-2 = two columns on medium screens
            lg:grid-cols-3 = three columns on large screens
          */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07]"
              >
                {/*
                  SMALL NUMBER BADGE
                  Creates structure and makes each card feel intentional.
                */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400/10 text-sm font-bold text-emerald-300 ring-1 ring-emerald-400/20">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h2 className="text-xl font-semibold tracking-tight text-white">
                  {item.title}
                </h2>

                <p className="mt-3 leading-7 text-white/60">{item.description}</p>

                {/*
                  TWEAK NOTE
                  This is deliberately quieter but useful.
                  border-l creates a note/callout feel.
                */}
                <p className="mt-5 border-l border-emerald-300/30 pl-4 text-sm leading-6 text-emerald-100/70">
                  {item.tweak}
                </p>
              </motion.article>
            ))}
          </div>

          {/*
            TWO-COLUMN LEARNING SECTION
            This teaches layout contrast:
            left side = explanation
            right side = visual examples
          */}
          <section className="mt-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
                Layout rule
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Most UI is just boxes, spacing, and hierarchy.
              </h2>

              <p className="mt-5 leading-8 text-white/60">
                When a section looks bad, don’t randomly add gradients and icons.
                Check the basics first: is the spacing consistent? Is the main
                content obvious? Are related things grouped together? Is there
                enough contrast?
              </p>

              {/*
                CHECKLIST
                list-disc is fine, but custom rows often look cleaner in UI.
              */}
              <div className="mt-6 space-y-3">
                {["One clear main action", "Consistent padding", "Readable line length", "Obvious visual grouping"].map(
                  (point) => (
                    <div key={point} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      <span>{point}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {cardExamples.map((card) => (
                <div key={card.label} className={card.className}>
                  <p className="text-sm font-semibold text-white">{card.label}</p>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    Same content, different treatment. This is how padding,
                    border, radius, colour, and shadow change the feel.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/*
            COMPONENT STATES SECTION
            Good UI needs default, hover, active, disabled, and focus states.
          */}
          <section className="mt-20 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300/80">
                Interactive states
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Buttons should feel alive, but not desperate.
              </h2>
              <p className="mt-4 leading-8 text-white/60">
                Hover states give feedback. Focus states help keyboard users.
                Disabled states stop unavailable actions looking clickable.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-zinc-200 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-950">
                Default
              </button>

              <button className="rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-950/40 transition hover:-translate-y-0.5 hover:bg-emerald-300 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-zinc-950">
                Strong CTA
              </button>

              <button className="rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-zinc-950">
                Quiet action
              </button>

              <button disabled className="cursor-not-allowed rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white/30">
                Disabled
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
      