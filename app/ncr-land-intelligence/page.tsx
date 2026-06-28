import Link from "next/link";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "NCR Land Intelligence | Guild Acre",
  description:
    "Private land intelligence orientation across Gurgaon NCR, Pataudi, Farrukhnagar, Rewari, Narnaul, and Mahendergarh.",
  path: "/ncr-land-intelligence",
});

const framework = [
  {
    label: "Public Corridor View",
    text: "The site identifies the regions Guild Acre tracks and explains why corridor-level discipline matters.",
  },
  {
    label: "Private Buyer Fit",
    text: "Capital range, horizon, purpose, and confidentiality needs are reviewed away from public pages.",
  },
  {
    label: "Protected Desk Notes",
    text: "Micro-pocket notes, scorecards, source logic, and shortlist reasoning are shared only inside accepted mandates.",
  },
  {
    label: "Mandate Direction",
    text: "The next step is given directly to the buyer when the requirement is serious and the desk can add value.",
  },
];

const corridors = [
  {
    code: "Corridor 01",
    title: "Gurgaon NCR",
    meta: "HNI advisory / strategic land / selective acquisition",
    text: "An anchor market for serious buyers who need private guidance before exposure to public or seller-led narratives.",
    note: "Specific pocket interpretation and acquisition direction are handled only inside a confidential brief.",
  },
  {
    code: "Corridor 02",
    title: "Pataudi",
    meta: "Long-horizon growth / Gurgaon spillover interest",
    text: "Tracked as an emerging belt where buyer fit and timing matter more than broad market excitement.",
    note: "Detailed suitability, constraints, and movement logic remain private to accepted mandates.",
  },
  {
    code: "Corridor 03",
    title: "Farrukhnagar",
    meta: "Logistics interest / industrial adjacency",
    text: "Reviewed as a practical-use corridor where the public story is only the starting point.",
    note: "Operational fit and acquisition direction are shared directly with qualified buyers.",
  },
  {
    code: "Corridor 04",
    title: "Rewari",
    meta: "Industrial influence / transport-linked growth",
    text: "Monitored for disciplined land-bank and industrial-growth interest across relevant buyer profiles.",
    note: "Desk-level review is not published as an open scoring model.",
  },
  {
    code: "Corridor 05",
    title: "Narnaul",
    meta: "Long-hold logistics interest",
    text: "Tracked for patient capital and long-horizon thinking, with conservative private review before any thesis is formed.",
    note: "Buyer-specific horizon, liquidity tolerance, and movement logic remain confidential.",
  },
  {
    code: "Corridor 06",
    title: "Mahendergarh",
    meta: "Selective land banking",
    text: "Reviewed for careful long-term positioning where broad corridor stories are not enough.",
    note: "Suitability is shaped privately around mandate quality and realistic expectations.",
  },
];

const privateSignals = [
  "Internal corridor filters",
  "Micro-pocket interpretation",
  "Source and access logic",
  "Buyer-specific risk notes",
  "Report findings and scorecards",
  "Negotiation and movement direction",
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
            <p className="text-xs uppercase text-[#86b8c8]">Land intelligence orientation</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-[#f2efe7] sm:text-6xl lg:text-7xl">
              Corridor names are public. Corridor judgement is private.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-[#b9cbd2]">
              Guild Acre tracks Gurgaon NCR, Pataudi, Farrukhnagar, Rewari,
              Narnaul, and Mahendergarh for serious buyers. The website gives
              orientation; the deeper intelligence is reserved for accepted
              private mandates.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase text-[#86b8c8]">Public-private boundary</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
              The site explains the desk, not the desk's operating system.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#b9cbd2]">
              Guild Acre avoids publishing copyable frameworks, open scoring
              models, and corridor-by-corridor acquisition playbooks.
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
              <p className="text-xs uppercase text-[#86b8c8]">Corridor coverage</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
                Public coverage, private interpretation.
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
            <p className="text-xs uppercase text-[#86b8c8]">Restricted intelligence</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
              What serious buyers should expect to stay off the website.
            </h2>
          </div>
          <div className="grid gap-px border border-[#16344a] bg-[#16344a] sm:grid-cols-2">
            {privateSignals.map((item) => (
              <div key={item} className="bg-[#081725] p-6 text-base leading-7 text-[#c7d8de]">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#16344a] bg-[#04101b]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-xs uppercase text-[#86b8c8]">Private review</p>
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
                  View Report Access Model
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
