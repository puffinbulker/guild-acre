import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/listings?collection=BUY", label: "Buy" },
  { href: "/listings?collection=RENT", label: "Rent / Lease" },
  { href: "/gurgaon", label: "Localities" },
  { href: "/listings?collection=COMMERCIAL", label: "Services" },
  { href: "/dealers/join", label: "List Property" },
];

export async function Header() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919711667782";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061017]/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white no-underline">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-200/20 bg-white/5 text-sm font-semibold tracking-[0.18em] text-cyan-100">
            GA
          </div>
          <div>
            <p className="text-lg font-semibold tracking-[0.22em] text-white">GUILD ACRE</p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">
              Gurgaon Real Estate Advisory
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="inline-flex min-h-12 items-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
