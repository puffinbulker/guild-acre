import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Sohna vs Naugaon for Farmhouse Investment | Guild Acre",
  description:
    "Compare Sohna and Naugaon for farmhouse buying, weekend-use land, and long-hold lifestyle investment from an NCR buyer perspective.",
  path: "/insights/sohna-vs-naugaon-farmhouse-investment",
});

export default function SohnaVsNaugaonPage() {
  return (
    <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs uppercase text-[#86b8c8]">
          Farmhouse Comparison
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          Sohna vs Naugaon for farmhouse investment
        </h1>
        <p className="mt-6 text-base leading-8 text-[#b9cbd2] sm:text-lg">
          Buyers often compare Sohna and Naugaon as though they offer the same
          type of opportunity. They do not. The right choice depends on whether
          you are buying for lifestyle use, land-banking logic, access comfort,
          or a more experimental long-hold narrative.
        </p>

        <div className="mt-10 space-y-8 text-[#b9cbd2]">
          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Sohna is usually easier to understand for NCR buyers</h2>
            <p className="mt-3 leading-8">
              Sohna works better for buyers who want stronger familiarity,
              clearer access narratives, and a more direct relationship to the
              broader Gurgaon conversation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Naugaon is more lifestyle-led and horizon-sensitive</h2>
            <p className="mt-3 leading-8">
              Naugaon often appeals to buyers drawn to retreat-style land,
              larger weekend-use imagination, and a more emerging positioning.
              That can be attractive, but it also means buyers need to be more
              disciplined about expectations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Access and holding comfort matter as much as price</h2>
            <p className="mt-3 leading-8">
              A cheaper parcel is not automatically better if the buyer does not
              feel comfortable with the actual driving reality, upkeep logic, or
              the long-term patience required for that market.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Choose based on use case, not marketing language</h2>
            <p className="mt-3 leading-8">
              If the purchase is for regular weekend use, personal enjoyment,
              or family comfort, Sohna may often be easier to justify. If the
              buyer is comfortable with a more emerging, horizon-driven story,
              Naugaon can still make sense.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
