import Link from "next/link";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Sohna Land Outlook | Guild Acre",
  description:
    "Sohna land outlook for investors evaluating connectivity, institutional capital movement, plotted development, raw land, and farmhouse acquisition risk.",
  path: "/sohna-land-outlook",
});

const shifts = [
  {
    title: "Connectivity Catalyst",
    text: "Elevated Sohna connectivity and Delhi-Mumbai Expressway integration have reduced time-distance to Gurgaon, changing how buyers evaluate the corridor.",
  },
  {
    title: "Capital Inflow Shift",
    text: "Unstructured speculation is being replaced in selected pockets by organized plotted supply, institutional capital, and more mature buyer scrutiny.",
  },
  {
    title: "Access Discipline",
    text: "Distance from the expressway is not enough. The quality and legality of approach roads determine whether a parcel is investable.",
  },
];

const matrix = [
  {
    type: "Plotted Developments",
    fit: "Medium-term capital deployment",
    text: "Higher liquidity and clearer product structure when RERA status, developer credibility, access, and surrounding absorption are credible.",
  },
  {
    type: "Agricultural / Raw Land",
    fit: "Patient long-term thesis",
    text: "Requires deeper diligence on title continuity, zoning, master plan relevance, access, and realistic conversion or exit assumptions.",
  },
  {
    type: "Organized Farmhouses",
    fit: "Lifestyle plus land preservation",
    text: "Works only where construction permissibility, ecological sensitivity, water access, and long-term usability are understood before purchase.",
  },
];

export default function SohnaLandOutlookPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sohna Land Outlook", path: "/sohna-land-outlook" },
        ])}
      />
      <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
        <section className="border-b border-[#16344a] bg-[#02070d]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <p className="text-xs uppercase text-[#86b8c8]">Investment thesis</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-[#f2efe7] sm:text-6xl lg:text-7xl">
              Sohna is moving from speculative periphery to selective corridor.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-[#b9cbd2]">
              The opportunity is no longer just directional growth. Serious
              buyers need to distinguish organized parcels, legally clear raw
              land, farmhouse use cases, and weak inventory carrying corridor
              language without parcel strength.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid gap-px border border-[#16344a] bg-[#16344a] lg:grid-cols-3">
            {shifts.map((item) => (
              <article key={item.title} className="min-h-[260px] bg-[#081725] p-7 transition duration-500 hover:bg-[#10283b] sm:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#f2efe7]">
                  {item.title}
                </h2>
                <p className="mt-6 text-sm leading-7 text-[#899eaa]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#16344a] bg-[#081725]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase text-[#86b8c8]">Acquisition matrix</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
                Sohna cannot be read as one product category.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {matrix.map((item) => (
                <article key={item.type} className="border border-[#16344a] bg-[#0d2030] p-7 transition duration-500 hover:border-[#7fb7ca]/45 hover:bg-[#10283b] sm:p-8">
                  <p className="text-xs uppercase text-[#86b8c8]">{item.fit}</p>
                  <h3 className="mt-8 text-3xl font-semibold leading-tight text-[#f2efe7]">
                    {item.type}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-[#899eaa]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div>
            <p className="text-xs uppercase text-[#86b8c8]">Guild Acre view</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
              The corridor is attractive only where the parcel is defensible.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-[#b9cbd2]">
            <p>
              Sohna rewards buyers who understand the difference between
              infrastructure adjacency and legally usable access. Many weak
              opportunities become visible only after title, revenue records,
              and approach roads are studied together.
            </p>
            <p className="text-[#93aab6]">
              Guild Acre tracks the corridor through access discipline, parcel
              quality, institutional movement, pricing restraint, and exit
              audience rather than generic appreciation language.
            </p>
            <Link href="/acquisition-desk" className="inline-flex rounded-[2px] border border-[#7fb7ca]/45 px-7 py-4 text-sm font-medium text-[#f2efe7] transition duration-500 hover:border-[#a9d4df] hover:bg-[#f2efe7]/[0.04]">
              Explore Curated Sohna Review
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
