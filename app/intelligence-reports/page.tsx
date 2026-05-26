import Link from "next/link";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Intelligence Reports | Guild Acre",
  description:
    "Restricted-access Guild Acre intelligence reports for Gurgaon NCR and emerging Haryana growth corridor land buyers.",
  path: "/intelligence-reports",
});

const reports = [
  {
    code: "GA-RPT-01",
    title: "Pataudi Growth Corridor Signals",
    coverage: "Gurgaon spillover / highway-led plotted opportunity",
    updated: "2026 desk cycle",
    abstract:
      "Growth thesis for Pataudi, including highway-led residential movement, CLU context, controlled-area review, and plotted development risk.",
    findings: ["Connectivity is useful only where access is legal.", "CLU and controlled-area context shape acquisition risk.", "Exit depth remains pocket-specific."],
    href: "/corridor-coverage/pataudi",
  },
  {
    code: "GA-RPT-02",
    title: "Farrukhnagar Logistics Corridor Review",
    coverage: "Warehousing / industrial expansion / land-use fit",
    updated: "2026 desk cycle",
    abstract:
      "Restricted brief on logistics-led demand, road-width suitability, zoning fit, title-chain continuity, and industrial expansion probability.",
    findings: ["Road width and land use are primary filters.", "Warehouse suitability depends on access realism.", "Title chain must be read before pricing."],
    href: "/corridor-coverage/farrukhnagar",
  },
  {
    code: "GA-RPT-03",
    title: "Rewari Industrial Influence Note",
    coverage: "Bawal-Dharuhera-Manesar influence / transport-linked growth",
    updated: "Working checklist",
    abstract:
      "A working note on mutation clarity, registry chain, master-plan alignment, and transport-linked industrial growth signals.",
    findings: ["Mutation clarity is non-negotiable.", "Sector and master-plan alignment shape risk.", "Transport influence must be tested against actual access."],
    href: "/corridor-coverage/rewari",
  },
  {
    code: "GA-RPT-04",
    title: "Narnaul-Mahendergarh Long-Hold Tracker",
    coverage: "Freight corridor probability / land banking / infrastructure availability",
    updated: "Client onboarding reference",
    abstract:
      "Long-horizon tracker for logistics-support potential, project timelines, water, power, access quality, and resale liquidity.",
    findings: ["Project timelines must be treated conservatively.", "Water and power availability affect usability.", "Liquidity is slower and must suit the investor profile."],
    href: "/corridor-coverage/narnaul",
  },
  {
    code: "GA-RPT-05",
    title: "Private Land Buyer Brief",
    coverage: "Mandate intake / advisory process / buyer fit",
    updated: "Client onboarding reference",
    abstract:
      "Explains how the private desk evaluates mandates, rejects unsuitable opportunities, and shares intelligence with qualified buyers.",
    findings: ["The desk is selective by design.", "Report access follows mandate alignment.", "Confidentiality and buyer-side representation anchor the process."],
    href: "/acquisition-desk",
  },
];

const accessModel = [
  ["Access model", "Applications reviewed privately"],
  ["Intake type", "Selective advisory intake"],
  ["Entry process", "Buyer qualification required"],
  ["Mandate status", "Limited active mandates"],
];

export default function IntelligenceReportsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Intelligence Reports", path: "/intelligence-reports" },
        ])}
      />
      <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
        <section className="border-b border-[#16344a] bg-[#02070d]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <p className="text-xs uppercase text-[#86b8c8]">GA research library</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-[#f2efe7] sm:text-6xl lg:text-7xl">
              Restricted intelligence reports for serious land buyers.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-[#b9cbd2]">
              Guild Acre reports are working reference tools, not marketing
              documents. They are shared selectively with buyers whose
              acquisition mandate, corridor interest, and capital parameters
              align with the report scope.
            </p>
            <div className="mt-14 grid gap-px border border-[#16344a] bg-[#16344a] sm:grid-cols-2 lg:grid-cols-4">
              {accessModel.map(([label, value]) => (
                <div key={label} className="bg-[#081725] p-6 sm:p-7">
                  <p className="text-xs uppercase text-[#738a99]">{label}</p>
                  <p className="mt-3 text-xl font-semibold text-[#f2efe7]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase text-[#86b8c8]">Intelligence library</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
              Research reports organized around acquisition decisions.
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {reports.map((report) => (
              <article
                key={report.code}
                className="grid gap-8 border border-[#16344a] bg-[#081725] p-7 transition duration-500 hover:border-[#7fb7ca]/45 hover:bg-[#10283b] sm:p-8 lg:grid-cols-[0.32fr_0.68fr]"
              >
                <div>
                  <p className="text-xs uppercase text-[#86b8c8]">{report.code}</p>
                  <h3 className="mt-4 text-4xl font-semibold leading-tight text-[#f2efe7]">
                    {report.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#738a99]">
                    {report.coverage}
                  </p>
                  <p className="mt-2 text-xs uppercase text-[#738a99]">
                    {report.updated}
                  </p>
                </div>
                <div>
                  <p className="text-base leading-8 text-[#b9cbd2]">
                    {report.abstract}
                  </p>
                  <div className="mt-6 grid gap-px border border-[#16344a] bg-[#16344a]">
                    {report.findings.map((finding) => (
                      <p key={finding} className="bg-[#0d2030] p-4 text-sm leading-7 text-[#c7d8de]">
                        {finding}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={report.href}
                    className="mt-6 inline-flex text-sm font-medium text-[#a9d4df] transition hover:text-[#f2efe7]"
                  >
                    View related intelligence
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#16344a] bg-[#04101b]">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
            <p className="text-xs uppercase text-[#86b8c8]">Selective advisory intake</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-5xl">
              Apply for report access.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#b9cbd2]">
              Not all applications result in an active mandate. Reports are
              shared where the buyer&apos;s brief aligns with current desk
              coverage and confidentiality standards.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/acquisition-desk" className="rounded-[2px] border border-[#7fb7ca]/45 px-7 py-4 text-center text-sm font-medium text-[#f2efe7] transition duration-500 hover:border-[#a9d4df] hover:bg-[#f2efe7]/[0.04]">
                Submit Investor Brief
              </Link>
              <a href="https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20apply%20for%20intelligence%20report%20access." target="_blank" rel="noreferrer" className="rounded-[2px] border border-[#e8f0f2]/12 px-7 py-4 text-center text-sm font-medium text-[#b9cbd2] transition duration-500 hover:border-[#7fb7ca]/50 hover:text-[#f2efe7]">
                WhatsApp: 97116 67782
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
