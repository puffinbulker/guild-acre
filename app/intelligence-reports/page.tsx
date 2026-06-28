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
    title: "Pataudi Corridor Watch",
    coverage: "Private corridor note",
    updated: "Restricted desk access",
    abstract:
      "A private note prepared only for aligned mandates. Public pages do not publish the report's findings, filters, or shortlist reasoning.",
    findings: ["Private access only", "Shared after accepted brief", "Not a public checklist"],
    href: "/acquisition-desk",
  },
  {
    code: "GA-RPT-02",
    title: "Farrukhnagar Logistics Watch",
    coverage: "Private corridor note",
    updated: "Restricted desk access",
    abstract:
      "A buyer-fit report reserved for serious mandates where the intended use, capital range, and holding logic are clear.",
    findings: ["Private access only", "Mandate-specific", "No open scorecard"],
    href: "/acquisition-desk",
  },
  {
    code: "GA-RPT-03",
    title: "Rewari Industrial Influence Note",
    coverage: "Private corridor note",
    updated: "Restricted desk access",
    abstract:
      "A desk note used to support private decision making, not a public acquisition playbook.",
    findings: ["Private access only", "Buyer-specific", "Findings withheld publicly"],
    href: "/acquisition-desk",
  },
  {
    code: "GA-RPT-04",
    title: "Narnaul-Mahendergarh Long-Hold Tracker",
    coverage: "Private corridor note",
    updated: "Restricted desk access",
    abstract:
      "A long-horizon orientation shared selectively when the buyer profile, patience, and risk tolerance match the desk's coverage.",
    findings: ["Private access only", "Long-hold review", "Shared under mandate"],
    href: "/acquisition-desk",
  },
  {
    code: "GA-RPT-05",
    title: "Private Land Buyer Brief",
    coverage: "Mandate intake / advisory process / buyer fit",
    updated: "Client onboarding reference",
    abstract:
      "Explains the access model at a high level while keeping Guild Acre's internal selection logic confidential.",
    findings: ["Selective intake", "Confidential brief", "Private review path"],
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
              documents. The site shows the access model; detailed findings are
              shared selectively with buyers whose mandate aligns with the
              report scope.
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
            <p className="text-xs uppercase text-[#86b8c8]">Restricted library</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
              Report names are visible. Report substance is private.
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
                    Apply for private access
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
              shared where the buyer's brief aligns with current desk coverage
              and confidentiality standards.
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
