import Link from "next/link";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Naugaon Farmhouse Belt | Guild Acre",
  description:
    "Private Naugaon farmhouse belt intelligence covering PLPA review, Aravalli-edge risk, access, utilities, holding horizon, and acquisition suitability.",
  path: "/naugaon-farmhouse-belt",
});

const metrics = [
  ["Corridor maturity", "Early"],
  ["Liquidity depth", "Thin"],
  ["Regulatory complexity", "High"],
  ["Recommended horizon", "7-12 years"],
];

const risks = [
  "Confirmed PLPA status at revenue-record level",
  "Clean thirty-year title chain",
  "Pucca road access with legal right-of-way",
  "Construction permissibility and environmental sensitivity",
  "Water, borewell, electricity, and service feasibility",
  "Exit audience and illiquidity tolerance",
];

const horizon = [
  ["0-3 years", "Exit discouraged", "High illiquidity risk"],
  ["3-5 years", "Caution", "Buyer pool remains narrow"],
  ["5-7 years", "Acceptable", "Only for clean parcels"],
  ["7-12 years", "Optimal", "Lifestyle plus land preservation"],
  ["12+ years", "Generational hold", "Estate-style use case"],
];

export default function NaugaonFarmhouseBeltPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Naugaon Farmhouse Belt", path: "/naugaon-farmhouse-belt" },
        ])}
      />
      <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
        <section className="border-b border-[#16344a] bg-[#02070d]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <p className="text-xs uppercase text-[#86b8c8]">Zone intelligence brief</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-[#f2efe7] sm:text-6xl lg:text-7xl">
              Naugaon is a constrained-supply lifestyle market, not a liquid corridor.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-[#b9cbd2]">
              The belt requires parcel-level judgement. Its appeal is open
              terrain, Aravalli-edge privacy, and long-horizon lifestyle value;
              its risk is regulatory complexity, thin liquidity, and weak
              diligence around access or construction permissibility.
            </p>

            <div className="mt-14 grid gap-px border border-[#16344a] bg-[#16344a] sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map(([label, value]) => (
                <div key={label} className="bg-[#081725] p-6 sm:p-7">
                  <p className="text-xs uppercase text-[#738a99]">{label}</p>
                  <p className="mt-3 text-2xl font-semibold text-[#f2efe7]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div>
            <p className="text-xs uppercase text-[#86b8c8]">Zone overview</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
              What the market actually is.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-[#b9cbd2]">
            <p>
              Naugaon sits along the Aravalli edge southeast of Gurgaon. Its
              value is not a conventional short-term appreciation story; it is
              a low-density lifestyle and capital-preservation thesis for
              buyers comfortable with patience.
            </p>
            <p className="text-[#93aab6]">
              The strongest parcels combine natural setting, legal access,
              clean ownership, and confirmed permissibility. Most available
              inventory does not clear all of these filters.
            </p>
          </div>
        </section>

        <section className="border-y border-[#16344a] bg-[#081725]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-xs uppercase text-[#86b8c8]">Acquisition risk filter</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
                Parcel-level review is non-negotiable.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#93aab6]">
                Guild Acre&apos;s Naugaon intake disqualifies parcels where
                access, PLPA status, title continuity, or construction
                assumptions cannot be independently supported.
              </p>
            </div>
            <div className="grid gap-px border border-[#16344a] bg-[#16344a] sm:grid-cols-2">
              {risks.map((item) => (
                <div key={item} className="bg-[#0d2030] p-6 text-base leading-7 text-[#c7d8de]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase text-[#86b8c8]">Holding-period intelligence</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
              Return logic depends on patience.
            </h2>
          </div>
          <div className="mt-14 divide-y divide-[#16344a] border-y border-[#16344a]">
            {horizon.map(([period, position, note]) => (
              <article key={period} className="grid gap-5 py-7 sm:grid-cols-[0.22fr_0.28fr_0.5fr]">
                <p className="font-[var(--font-editorial)] text-3xl text-[#7fb7ca]/70">{period}</p>
                <h3 className="text-2xl font-semibold text-[#f2efe7]">{position}</h3>
                <p className="text-sm leading-7 text-[#93aab6]">{note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#16344a] bg-[#04101b]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-xs uppercase text-[#86b8c8]">Naugaon advisory mandate</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-5xl">
                Limited farmhouse mandates reviewed privately.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-9 text-[#b9cbd2]">
                Guild Acre accepts Naugaon mandates only when the buyer&apos;s
                time horizon, legal diligence appetite, and lifestyle objectives
                match the zone&apos;s risk profile.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/acquisition-desk" className="rounded-[2px] border border-[#7fb7ca]/45 px-7 py-4 text-center text-sm font-medium text-[#f2efe7] transition duration-500 hover:border-[#a9d4df] hover:bg-[#f2efe7]/[0.04]">
                  Submit Acquisition Brief
                </Link>
                <a href="https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20the%20Naugaon%20Farmhouse%20Belt%20Report." target="_blank" rel="noreferrer" className="rounded-[2px] border border-[#e8f0f2]/12 px-7 py-4 text-center text-sm font-medium text-[#b9cbd2] transition duration-500 hover:border-[#7fb7ca]/50 hover:text-[#f2efe7]">
                  Request Naugaon Report
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
