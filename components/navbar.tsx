"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Corridor Coverage", href: "/corridor-coverage" },
  { label: "Intelligence Reports", href: "/intelligence-reports" },
  { label: "Acquisition Desk", href: "/acquisition-desk" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <div className="relative flex items-center gap-6">
      <nav className="hidden items-center gap-7 2xl:gap-9 xl:flex">
        {navItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative rounded-[2px] text-[10px] font-medium uppercase tracking-[0.13em] transition duration-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7fb7ca] 2xl:text-[11px] ${
                active ? "text-[#a9d4df]" : "text-[#e8f0f2]/68 hover:text-[#e8f0f2]"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-3 left-0 h-px rounded-full bg-[#7aaec1] transition-all duration-500 ${
                  active
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-80"
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
        className="hidden rounded-[2px] border border-[#7fb7ca]/34 bg-[#f2efe7]/[0.016] px-5 py-3 text-sm font-medium text-[#e8f0f2] transition duration-700 hover:-translate-y-px hover:border-[#7fb7ca]/68 hover:bg-[#f2efe7]/[0.04] hover:text-[#f2efe7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7fb7ca] xl:inline-flex"
      >
        Investor Desk
      </a>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e8f0f2]/10 bg-[#e8f0f2]/5 text-[#e8f0f2] transition hover:border-[#7aaec1]/50 hover:text-[#a9d4df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7aaec1] xl:hidden"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute right-0 top-16 z-50 w-[min(340px,calc(100vw-2rem))] overflow-hidden border border-[#16344a] bg-[#02070d]/96 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl xl:hidden">
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
                      ? "bg-[#7aaec1]/10 text-[#a9d4df]"
                      : "text-[#e8f0f2]/80 hover:bg-[#e8f0f2]/5 hover:text-[#e8f0f2]"
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
              className="mt-2 border border-[#7aaec1]/45 bg-[#7aaec1]/10 px-4 py-3 text-center text-sm font-medium text-[#f2efe7] transition hover:border-[#7aaec1]/70 hover:bg-[#7aaec1]/15"
            >
              Investor Desk
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
