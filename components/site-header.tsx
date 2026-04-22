"use client";

import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#061017]/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-base font-semibold tracking-[0.18em] text-white">
          GUILD ACRE
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link href="/listings" className="text-sm font-medium text-slate-200 transition hover:text-white">
            Listings
          </Link>
          <Link href="/listings?collection=BUY" className="text-sm font-medium text-slate-200 transition hover:text-white">
            Buy
          </Link>
          <Link href="/listings?collection=RENT" className="text-sm font-medium text-slate-200 transition hover:text-white">
            Rent
          </Link>
          <Link href="/gurgaon" className="text-sm font-medium text-slate-200 transition hover:text-white">
            Gurgaon Hub
          </Link>
          <Link href="/dealers/join" className="text-sm font-medium text-slate-200 transition hover:text-white">
            List Property
          </Link>
        </nav>
      </div>
    </header>
  );
}
