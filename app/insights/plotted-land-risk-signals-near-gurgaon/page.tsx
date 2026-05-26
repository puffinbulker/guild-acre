import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Plotted Land Risk Signals Near Gurgaon | Guild Acre",
  description:
    "A practical guide to risk signals serious buyers should notice before advancing in a plotted land acquisition near Gurgaon.",
  path: "/insights/plotted-land-risk-signals-near-gurgaon",
});

export default function PlottedLandRiskSignalsPage() {
  return (
    <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs uppercase text-[#86b8c8]">
          Plot Buying Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          Plotted land risk signals near Gurgaon
        </h1>
        <p className="mt-6 text-base leading-8 text-[#b9cbd2] sm:text-lg">
          Plotted land opportunities can look straightforward on the surface,
          especially when pricing, access, and future-growth language are
          packaged well. In practice, weak opportunities reveal themselves
          through patterns buyers can identify before capital exposure begins.
        </p>

        <div className="mt-10 space-y-8 text-[#b9cbd2]">
          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">1. The price feels attractive, but the explanation feels vague</h2>
            <p className="mt-3 leading-8">
              An opportunity can appear well-priced, but if no one can clearly
              explain why it is priced that way relative to nearby supply, buyer
              demand, or exact location context, caution is justified.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">2. The location story is stronger than the parcel story</h2>
            <p className="mt-3 leading-8">
              Some plotted opportunities are promoted almost entirely through
              corridor momentum. Buyers should still ask whether the exact
              parcel, access pattern, and practical use case are strong enough
              on their own.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">3. Questions around ownership or use case create discomfort</h2>
            <p className="mt-3 leading-8">
              If the conversation becomes evasive the moment a buyer asks about
              title chain, exact use case, transfer comfort, or parcel history,
              that is useful information in itself.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">4. Every plotted option is being positioned as essential</h2>
            <p className="mt-3 leading-8">
              Strong plotted opportunities are selective by nature. If
              everything in a micro-market is being framed as premium, fast
              moving, and high-upside, the buyer usually needs to slow down.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
