import Link from "next/link";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "NCR Land Intelligence | Guild Acre",
  description:
    "Research-led land investment intelligence across Gurgaon NCR, Pataudi, Farrukhnagar, Rewari, Narnaul, and Mahendergarh.",
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
    title: "Gurgaon NCR",
    meta: "HNI land advisory / plotted development / farmhouse and strategic acquisition",
    text: "Gurgaon NCR remains the anchor for HNI land advisory, plotted development, farmhouse evaluation, and strategic land acquisition. The opportunity is selective because title, access, zoning, and entry discipline vary sharply by micro-pocket.",
    note: "Best suited for HNIs, family offices, founders, and serious buyers who require private advisory before exposure.",
  },
  {
    code: "Corridor 02",
    title: "Pataudi",
    meta: "Gurgaon spillover / highway-led plotted opportunity",
    text: "Pataudi is tracked for Gurgaon spillover growth, highway-led residential movement, and plotted development potential. The corridor requires close review of CLU, controlled-area status, access roads, and acquisition risk.",
    note: "Best suited for long-horizon investors seeking early corridor positioning with disciplined legal and land-use review.",
  },
  {
    code: "Corridor 03",
    title: "Farrukhnagar",
    meta: "Logistics / warehousing / industrial expansion",
    text: "Farrukhnagar is evaluated as a logistics and warehousing corridor with industrial expansion potential. Zoning, road width, land-use fit, and title-chain continuity shape the investability of each parcel.",
    note: "Best suited for industrial land buyers, warehousing operators, and strategic allocators with practical infrastructure requirements.",
  },
  {
    code: "Corridor 04",
    title: "Rewari",
    meta: "Industrial and transport-linked growth",
    text: "Rewari benefits from transport-linked growth and Bawal-Dharuhera-Manesar influence. The diligence priority is mutation, registry chain, sector alignment, and master-plan consistency.",
    note: "Best suited for industrial-growth investors and disciplined land-bank buyers seeking stronger transport context.",
  },
  {
    code: "Corridor 05",
    title: "Narnaul",
    meta: "Long-term logistics and freight corridor opportunity",
    text: "Narnaul is tracked for long-term logistics and freight corridor potential, including the influence of Nangal Chaudhary logistics movement. Project timelines, water, power, access, and resale liquidity require conservative review.",
    note: "Best suited for patient capital with a long-horizon logistics corridor thesis.",
  },
  {
    code: "Corridor 06",
    title: "Mahendergarh",
    meta: "Selective long-term land banking",
    text: "Mahendergarh is monitored for selective long-term land banking, education-linked demand, agri-support use cases, and logistics-support potential. Liquidity, infrastructure availability, and clear title are primary filters.",
    note: "Best suited for conservative land-bank investors who can hold through slower infrastructure and liquidity cycles.",
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
              Land investment corridors require intelligence before conviction.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-[#b9cbd2]">
              A research-led view of Gurgaon NCR, Pataudi, Farrukhnagar,
              Rewari, Narnaul, and Mahendergarh through corridor mapping,
              title and CLU review, regulatory risk, buyer depth, and long-term
              exit logic.
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
