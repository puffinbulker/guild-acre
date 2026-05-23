"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Listings", href: "/listings" },
  { label: "Gurgaon", href: "/gurgaon" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <div className="relative flex items-center gap-4">
      <nav className="hidden items-center gap-8 lg:flex">
        {navItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative rounded-md text-[13px] font-medium uppercase tracking-[0.18em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] ${
                active ? "text-[#D4AF37]" : "text-[#E5E7EB]/72 hover:text-[#E5E7EB]"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-3 left-0 h-px rounded-full bg-[#C6A76A] transition-all duration-300 ${
                  active
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      <a
        href="https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20book%20a%20private%20advisory."
        target="_blank"
        rel="noreferrer"
        className="hidden rounded-full border border-[#C6A76A]/45 bg-[#D4AF37]/10 px-5 py-3 text-sm font-semibold text-[#F6E7B7] transition duration-300 hover:border-[#D4AF37]/80 hover:bg-[#D4AF37] hover:text-[#020617] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] lg:inline-flex"
      >
        Book Private Advisory
      </a>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[#C6A76A]/50 hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] lg:hidden"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute right-0 top-16 z-50 w-[min(320px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-white/10 bg-[#020617]/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href="https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20book%20a%20private%20advisory."
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl border border-[#C6A76A]/45 bg-[#D4AF37] px-4 py-3 text-center text-sm font-semibold text-[#020617] transition hover:bg-[#C6A76A]"
            >
              Book Private Advisory
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
