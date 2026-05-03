"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Listings", href: "/listings" },
  { label: "Gurgaon", href: "/gurgaon" },
  { label: "Partners", href: "/dealers/join" },
  { label: "Contact", href: "/contact" },
  { label: "Admin", href: "/admin" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <div className="relative flex items-center gap-3">
      <nav className="hidden items-center gap-5 lg:flex">
        {navItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative text-sm font-medium tracking-wide transition ${
                active ? "text-cyan-300" : "text-white/75 hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-cyan-300 transition-all duration-300 ${
                  active
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                }`}
              />
            </Link>
          );
        })}

        <Link
          href="/dealers/join"
          className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-400 hover:text-slate-950"
        >
          Dealer Login
        </Link>
      </nav>

      <a
        href="https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20book%20a%20private%20advisory."
        target="_blank"
        rel="noreferrer"
        className="hidden rounded-full border border-cyan-300/20 bg-gradient-to-r from-cyan-400/10 to-sky-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/40 hover:bg-cyan-400/15 hover:text-white lg:inline-flex"
      >
        Book Private Advisory
      </a>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span className="flex flex-col gap-1.5">
          <span className={`block h-0.5 w-5 rounded bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 rounded bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 rounded bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-14 z-50 w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
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
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/dealers/join"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-3 text-center text-sm font-semibold text-cyan-200"
            >
              Dealer Login
            </Link>

            <a
              href="https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20book%20a%20private%20advisory."
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Book Private Advisory
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
