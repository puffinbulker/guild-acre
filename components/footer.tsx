export function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919711667782";

  return (
    <footer className="border-t border-white/10 bg-[#040c12]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold tracking-[0.22em] text-white">GUILD ACRE</p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.35em] text-slate-400">
            Gurgaon Real Estate Advisory
          </p>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Curated guidance for luxury homes, land, farm opportunities, and strategic
            Gurgaon investment decisions.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100/70">
            Explore
          </h3>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <a href="/listings" className="block transition hover:text-white">Listings</a>
            <a href="/gurgaon" className="block transition hover:text-white">Gurgaon Hub</a>
            <a href="/dealers/join" className="block transition hover:text-white">List Property</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100/70">
            Contact
          </h3>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <a href={`https://wa.me/${whatsappNumber}`} className="block transition hover:text-white">
              WhatsApp
            </a>
            <a href={`tel:+${whatsappNumber}`} className="block transition hover:text-white">
              Call +{whatsappNumber}
            </a>
            <a href="https://www.guildacre.com" className="block transition hover:text-white">
              www.guildacre.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <span>&copy; 2026 Guild Acre</span>
          <span>Gurgaon, Haryana, India</span>
        </div>
      </div>
    </footer>
  );
}
