"use client";

import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="text-base font-semibold tracking-wide text-white">
          GUILD ACRE
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          <Link href="/" className="text-white/70 hover:text-white">Home</Link>
          <Link href="/about" className="text-white/70 hover:text-white">About</Link>
          <Link href="/listings" className="text-white/70 hover:text-white">Listings</Link>
          <Link href="/gurgaon" className="text-white/70 hover:text-white">Gurgaon</Link>
          <Link href="/dealers/join" className="text-white/70 hover:text-white">Partners</Link>
          <Link href="/contact" className="text-white/70 hover:text-white">Contact</Link>
          <Link href="/admin" className="text-white/70 hover:text-white">Admin</Link>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">

          {/* Dealer Login Button */}
          <Link
            href="/dealers/login"
            className="rounded-full border border-cyan-300/30 px-4 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-400/10"
          >
            Dealer Login
          </Link>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20book%20a%20private%20advisory."
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Book Private Advisory
          </a>

        </div>
      </div>
    </header>
  );
}