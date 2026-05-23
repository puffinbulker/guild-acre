"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Strategic Opportunities", href: "/strategic-opportunities" },
  { label: "Corridor Coverage", href: "/corridor-coverage" },
  { label: "Acquisition Desk", href: "/acquisition-desk" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <div className="relative flex items-center gap-4">
      <nav className="hidden items-center gap-6 xl:flex">
        {navItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative rounded-md text-[11px] font-medium uppercase tracking-[0.18em] transition duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bda56a] ${
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
        className="hidden rounded-full border border-[#bda56a]/35 bg-[#f4ead8]/[0.02] px-5 py-3 text-sm font-medium text-[#efe7d6] transition duration-500 hover:border-[#bda56a]/70 hover:bg-[#bda56a]/10 hover:text-[#f4ead8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bda56a] xl:inline-flex"
      >
        Request Consultation
      </a>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#efe7d6]/10 bg-[#efe7d6]/5 text-[#efe7d6] transition hover:border-[#bda56a]/50 hover:text-[#d4c083] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bda56a] xl:hidden"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute right-0 top-16 z-50 w-[min(340px,calc(100vw-2rem))] overflow-hidden border border-[#2d2a22] bg-[#050505]/96 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl xl:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 text-sm font-medium transition ${
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
              className="mt-2 border border-[#bda56a]/45 bg-[#bda56a]/10 px-4 py-3 text-center text-sm font-medium text-[#f4ead8] transition hover:border-[#bda56a]/70 hover:bg-[#bda56a]/15"
            >
              Request Consultation
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
