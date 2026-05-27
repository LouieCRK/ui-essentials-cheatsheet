'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'UI Fundamentals', href: '/' },
  { label: 'Layout Systems', href: '/layout-systems' },
  {label: 'Typography',href: '/typography',},
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 px-6 py-4 backdrop-blur-xl sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Link href="/" className="text-sm font-bold tracking-tight text-white">
          UI Essentials
        </Link>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-emerald-400 text-zinc-950'
                    : 'text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}