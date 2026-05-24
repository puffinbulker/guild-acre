import Link from "next/link";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "NCR Land Intelligence | Guild Acre",
  description:
    "Research-led NCR land intelligence across Gurgaon core corridors, Sohna, Naugaon, and emerging acquisition zones.",
  path: "/ncr-land-intelligence",
});

const framework = [
  {
    label: "Infrastructure Movement",
    text: "Roads, expressways, metro alignments, freight links, and delivery certainty are separated from market hype.",
  },
  {
    label: "Title Visibility",
    text: "Ownership chain, mutation record currency, and visible dispute or encumbrance signals are reviewed before consideration.",
  },
  {
    label: "Revenue Record Clarity",
    text: "Khasra, Khatauni, Jamabandi, agricultural classification, pending entries, and generational continuity are treated as core inputs.",
  },
  {
    label: "CLU & Zoning Probability",
    text: "Current land use, master plan classification, conversion feasibility, and speculative zoning assumptions are risk-rated.",
  },
  {
    label: "Access-Road Legality",
    text: "Approach roads are reviewed for notified status, revenue-map presence, informal dependency, and long-term usability.",
  },
  {
    label: "Liquidity Depth",
    text: "Exit audience, buyer depth, transaction velocity, and realistic holding period are evaluated by micro-market.",
  },
  {
    label: "Acquisition Risk",
    text: "Legal, access, regulatory, infrastructure, and market risks are combined before an acquisition thesis is formed.",
  },
  {
    label: "Long-Term Exit Demand",
    text: "Population movement, institutional pipeline, commercial absorption, and lifestyle demand are read as forward signals.",
  },
];

const corridors = [
  {
    code: "Corridor 01",
    title: "Gurgaon Core Corridors",
    meta: "DXP / NH-48 / SPR / Golf Course Extension",
    text: "Mature NCR corridors offer stronger liquidity and clearer demand, but entry prices already carry much of the confirmed thesis. Guild Acre studies sub-pockets where infrastructure, access, and buyer depth still create selective micro-opportunity.",
    note: "Best suited for preservation-oriented mandates, premium plotted participation, and investors who value exit depth over asymmetric upside.",
  },
  {
    code: "Corridor 02",
    title: "Sohna Road Belt",
    meta: "Sohna Road / NH-248B / Damdama Axis",
    text: "Sohna is moving from speculative periphery toward a more validated mid-market corridor. The stronger opportunities are not defined by distance from Gurgaon alone, but by access-road legality, parcel quality, and surrounding ecosystem maturity.",
    note: "Organized parcels and legally clear land can behave very differently from legacy agricultural inventory in the same broad corridor.",
  },
  {
    code: "Corridor 03",
    title: "Naugaon Farmhouse Zone",
    meta: "Aravalli edge / Lifestyle and long-horizon acquisition",
    text: "Naugaon is a constrained-supply lifestyle market rather than a short-cycle liquidity corridor. It requires patient capital, parcel-level PLPA review, legal access, and a realistic view of exit depth.",
    note: "Suitable only where title, construction permissibility, road access, and environmental sensitivity are independently reviewed.",
  },
];

const failureSignals = [
  "Weak or informal access",
  "Unclear title continuity",
  "Fragmented ownership",
  "Speculative zoning assumptions",
  "Thin buyer depth",
  "Infrastructure overestimation",
];

export default function NcrLandIntelligencePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "NCR Land Intelligence", path: "/ncr-land-intelligence" },
        ])}
      />
      <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
        <section className="border-b border-[#16344a] bg-[#02070d]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <p className="text-xs uppercase text-[#86b8c8]">Editorial deep-dive</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-[#f2efe7] sm:text-6xl lg:text-7xl">
              NCR land corridors require intelligence before conviction.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-[#b9cbd2]">
              A research-led view of Gurgaon, Sohna, Naugaon, and emerging NCR
              acquisition zones through infrastructure movement, revenue
              records, regulatory risk, buyer depth, and long-term exit logic.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase text-[#86b8c8]">Evaluation methodology</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
              The Guild Acre corridor intelligence framework.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#b9cbd2]">
              Every corridor is filtered across eight dimensions before it
              enters an investor&apos;s consideration set.
            </p>
          </div>

          <div className="mt-14 grid gap-px border border-[#16344a] bg-[#16344a] md:grid-cols-2 xl:grid-cols-4">
            {framework.map((item, index) => (
              <article
                key={item.label}
                className="min-h-[260px] bg-[#081725] p-7 transition duration-500 hover:bg-[#10283b]"
              >
                <p className="font-[var(--font-editorial)] text-4xl text-[#7fb7ca]/45">
                  0{index + 1}
                </p>
                <h3 className="mt-8 text-2xl font-semibold leading-tight text-[#f2efe7]">
                  {item.label}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#899eaa]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#16344a] bg-[#081725]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase text-[#86b8c8]">Micro-market intelligence</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
                Corridor names are not acquisition strategies.
              </h2>
            </div>

            <div className="mt-14 space-y-5">
              {corridors.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-8 border border-[#16344a] bg-[#0d2030] p-7 transition duration-500 hover:border-[#7aaec1]/45 sm:p-9 lg:grid-cols-[0.35fr_0.65fr]"
                >
                  <div>
                    <p className="text-xs uppercase text-[#86b8c8]">{item.code}</p>
                    <h3 className="mt-4 text-4xl font-semibold leading-tight text-[#f2efe7]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm uppercase text-[#738a99]">
                      {item.meta}
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-8 text-[#b9cbd2]">{item.text}</p>
                    <p className="mt-6 border-l border-[#7fb7ca]/45 pl-5 text-sm leading-7 text-[#93aab6]">
                      {item.note}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div>
            <p className="text-xs uppercase text-[#86b8c8]">Investment thesis</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
              Why many land pockets fail before diligence begins.
            </h2>
          </div>
          <div className="grid gap-px border border-[#16344a] bg-[#16344a] sm:grid-cols-2">
            {failureSignals.map((item) => (
              <div key={item} className="bg-[#081725] p-6 text-base leading-7 text-[#c7d8de]">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#16344a] bg-[#04101b]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-xs uppercase text-[#86b8c8]">Research assets</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-5xl">
                Require a specific corridor analysis?
              </h2>
            </div>
            <div>
              <p className="text-lg leading-9 text-[#b9cbd2]">
                The private desk prepares focused intelligence notes for buyers
                with defined mandates, capital parameters, and corridor
                interest.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/intelligence-reports" className="rounded-[2px] border border-[#7fb7ca]/45 px-7 py-4 text-center text-sm font-medium text-[#f2efe7] transition duration-500 hover:border-[#a9d4df] hover:bg-[#f2efe7]/[0.04]">
                  View Report Library
                </Link>
                <Link href="/acquisition-desk" className="rounded-[2px] border border-[#e8f0f2]/12 px-7 py-4 text-center text-sm font-medium text-[#b9cbd2] transition duration-500 hover:border-[#7fb7ca]/50 hover:text-[#f2efe7]">
                  Request Private Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
