import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Gurgaon Property Advisory by Locality, Sector & Corridor | Guild Acre",
  description:
    "Explore Gurgaon property opportunities by corridor, sector, and buyer intent across luxury homes, plots, land, and investment-led micro-markets.",
  path: "/gurgaon",
});

export default function GurgaonPage() {
  const faqs = [
    {
      question: "Which Gurgaon corridors are best for premium family buyers?",
      answer:
        "Golf Course Road, Golf Course Extension Road, and selected adjoining sectors usually suit premium-family and upgrade buyers better than generic corridor-led comparisons.",
    },
    {
      question: "Which Gurgaon areas are more investor-led right now?",
      answer:
        "Corridors like Dwarka Expressway often attract more growth-oriented and infrastructure-led investor interest, though project quality and exact entry level still matter heavily.",
    },
    {
      question: "Can Guild Acre help me compare sectors more selectively?",
      answer:
        "Yes. The Gurgaon hub is designed to help you narrow direction first, then move into a more filtered shortlist based on budget, purpose, and asset type.",
    },
  ];

  const localityCards = [
    {
      title: "DLF Phase 2",
      tag: "Prime Rental Belt",
      text: "Strong rental demand, established occupancy, and continued investor interest driven by Cyber City connectivity.",
    },
    {
      title: "Dwarka Expressway",
      tag: "High-Growth Corridor",
      text: "A fast-evolving corridor with plotted, residential, and investment-led opportunities backed by major infrastructure momentum.",
    },
    {
      title: "Golf Course Road",
      tag: "Luxury Core",
      text: "One of Gurgaon's most prestigious premium micro-markets, known for marquee towers, elite addresses, and enduring value.",
    },
    {
      title: "New Gurgaon",
      tag: "Emerging End-User Zone",
      text: "Fresh booking activity, builder floors, and expanding family-focused neighbourhoods with improving social infrastructure.",
    },
    {
      title: "Golf Course Extension Road",
      tag: "Premium Expansion Belt",
      text: "New-age premium launches, investor demand, and large-format family residences with strong long-term appeal.",
    },
    {
      title: "Sohna Road",
      tag: "Mixed Demand Corridor",
      text: "A balanced residential-commercial stretch with practical livability, broad demand, and strong daily-use connectivity.",
    },
  ];

  const sectorCards = [
    {
      title: "Sector 104",
      text: "Dwarka Expressway growth corridor with plotted and launch-led opportunities.",
    },
    {
      title: "Sector 42",
      text: "Golf Course Road luxury stock, premium towers, and elite residential addresses.",
    },
    {
      title: "Sector 82A",
      text: "Builder floors, fresh supply, and family-oriented New Gurgaon demand.",
    },
    {
      title: "Sector 54",
      text: "Premium family inventory, strong golf-course catchment, and established prestige value.",
    },
    {
      title: "Sector 57",
      text: "Fast-moving family sector with builder floors, resale activity, and premium low-rise demand.",
    },
    {
      title: "Sector 67",
      text: "Emerging premium-family inventory with launch stock and corridor spillover demand.",
    },
  ];

  const classes = [
    "Luxury residences",
    "Builder floors",
    "Plots & land parcels",
    "Farmhouse opportunities",
    "Commercial assets",
    "Investor-led stock",
  ];

  return (
    <>
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gurgaon", path: "/gurgaon" }])} />
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_28%),linear-gradient(180deg,#020617_0%,#071728_42%,#06111d_100%)]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/80">
              Gurgaon Intelligence Hub
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Gurgaon property guidance by corridor, locality, and buyer intent.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Explore Gurgaon through the lens that matters most to serious
              buyers: corridor strength, locality fit, inventory type, and
              practical decision logic. This hub is designed to help clients
              compare where lifestyle, value, and long-term relevance are
              strongest.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Coverage
              </div>
              <div className="mt-2 text-2xl font-semibold">Prime Gurgaon Belts</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Focus
              </div>
              <div className="mt-2 text-2xl font-semibold">Luxury + Growth Corridors</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Best For
              </div>
              <div className="mt-2 text-2xl font-semibold">HNI Buyers & Investors</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
            Prime Localities
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Browse Gurgaon's most relevant premium and high-potential micro-markets
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-400">
            Each belt has a different demand story: luxury, rental depth,
            launch momentum, investor traction, or end-user stability.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {localityCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-7 transition hover:border-cyan-300/20 hover:bg-white/[0.07]"
            >
              <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
                {item.tag}
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 lg:px-8 lg:py-10">
        <div className="rounded-[32px] border border-cyan-300/15 bg-gradient-to-r from-cyan-400/10 via-white/5 to-sky-400/10 p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/80">
            Why Gurgaon still matters
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Gurgaon remains one of NCR's strongest real estate markets because demand is layered, not one-dimensional.
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            It combines premium end-user demand, investor participation,
            corporate-driven rental absorption, infrastructure-led expansion,
            and the ability of micro-markets to create distinct value stories.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
            Sector Snapshot
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected sectors worth watching
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sectorCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-white/10 bg-slate-900 p-6"
            >
              <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Sector
              </div>
              <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <div className="grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
              Inventory Classes
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Opportunity types we actively evaluate
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-400">
              Gurgaon is not one single market. Different buyers require
              different asset classes depending on return horizon, lifestyle fit,
              and budget positioning.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {classes.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="rounded-[32px] border border-cyan-300/15 bg-gradient-to-r from-cyan-400/10 via-white/5 to-sky-400/10 p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/80">
            Private Consultation
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Need a sharper Gurgaon shortlist based on your budget and purpose?
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            We can help you evaluate Gurgaon through a more filtered lens,
            whether you are looking for premium land, investor-led growth
            opportunities, family-oriented sectors, or luxury residential zones.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-2xl bg-cyan-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Request Consultation
            </a>
            <a
              href="https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20a%20Gurgaon%20shortlist."
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp for Gurgaon Shortlist
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
            Gurgaon FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Questions buyers often ask before shortlisting Gurgaon.
          </h2>
        </div>

        <div className="mt-8 space-y-4">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 sm:rounded-[28px] sm:p-7"
            >
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
    </>
  );
}
