import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Plotted Land Risk Signals Near Gurgaon | Guild Acre",
  description:
    "A high-level Guild Acre note on why plotted land narratives near Gurgaon should be reviewed privately before capital moves.",
  path: "/insights/plotted-land-risk-signals-near-gurgaon",
});

export default function PlottedLandRiskSignalsPage() {
  return (
    <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs uppercase text-[#86b8c8]">
          Plot Buying Orientation
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          Plotted land risk signals near Gurgaon
        </h1>
        <p className="mt-6 text-base leading-8 text-[#b9cbd2] sm:text-lg">
          Plotted land opportunities can look straightforward on the surface.
          Guild Acre keeps deeper review private because the important question
          is not whether the pitch sounds attractive, but whether the mandate
          deserves movement.
        </p>

        <div className="mt-10 space-y-8 text-[#b9cbd2]">
          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Narrative is not proof</h2>
            <p className="mt-3 leading-8">
              Good marketing can make weak land feel urgent. Buyers should slow
              down when the story is doing more work than the underlying fit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">The exact buyer matters</h2>
            <p className="mt-3 leading-8">
              A parcel that suits one buyer may be unsuitable for another. That
              is why Guild Acre handles suitability as a private review, not a
              public scoring table.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Urgency should be earned</h2>
            <p className="mt-3 leading-8">
              Serious buyers should not move because everything is being called
              premium or fast-moving. The right next step depends on private
              mandate fit.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
