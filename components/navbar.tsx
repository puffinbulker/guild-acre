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
              className={`group relative rounded-md text-[13px] font-medium uppercase tracking-[0.18em] transition duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bda56a] ${
                active ? "text-[#d4c083]" : "text-[#efe7d6]/68 hover:text-[#efe7d6]"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-3 left-0 h-px rounded-full bg-[#bda56a] transition-all duration-500 ${
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
        className="hidden rounded-full border border-[#bda56a]/45 bg-[#bda56a]/10 px-5 py-3 text-sm font-semibold text-[#efe7d6] transition duration-500 hover:border-[#bda56a] hover:bg-[#bda56a] hover:text-[#050505] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bda56a] lg:inline-flex"
      >
        Request Consultation
      </a>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#efe7d6]/10 bg-[#efe7d6]/5 text-[#efe7d6] transition hover:border-[#bda56a]/50 hover:text-[#d4c083] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bda56a] lg:hidden"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute right-0 top-16 z-50 w-[min(320px,calc(100vw-2rem))] overflow-hidden border border-[#2d2a22] bg-[#050505]/96 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl lg:hidden">
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
                      ? "bg-[#bda56a]/10 text-[#d4c083]"
                      : "text-[#efe7d6]/80 hover:bg-[#efe7d6]/5 hover:text-[#efe7d6]"
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
              className="mt-2 border border-[#bda56a]/45 bg-[#bda56a] px-4 py-3 text-center text-sm font-semibold text-[#050505] transition hover:bg-[#d4c083]"
            >
              Request Consultation
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
