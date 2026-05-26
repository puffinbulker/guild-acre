import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Title Checks Before Buying Farmhouse Land | Guild Acre",
  description:
    "A practical guide to title checks, ownership comfort, and diligence questions before buying farmhouse or strategic land across Gurgaon NCR and emerging Haryana corridors.",
  path: "/insights/title-checks-before-buying-farmhouse-land",
});

export default function TitleChecksFarmhouseLandPage() {
  return (
    <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs uppercase text-[#86b8c8]">
          Farmhouse Due Diligence
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          Title checks before buying farmhouse land
        </h1>
        <p className="mt-6 text-base leading-8 text-[#b9cbd2] sm:text-lg">
          Farmhouse land purchases can become emotional quickly because buyers
          start imagining the lifestyle before they have fully understood the
          ownership story. That is why the title conversation should begin
          early, before the property starts to feel personal.
        </p>

        <div className="mt-10 space-y-8 text-[#b9cbd2]">
          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Start with ownership clarity, not ambiance</h2>
            <p className="mt-3 leading-8">
              Privacy, greenery, and approach roads matter, but they come after
              basic ownership comfort. Buyers should first understand who owns
              the parcel and how confidently that ownership can be explained.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Match the document story to the actual selling story</h2>
            <p className="mt-3 leading-8">
              If a property is being sold as a farmhouse lifestyle asset, the
              buyer should be careful that the underlying explanation of the land
              and its practical use is not casually glossed over.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Ask what would make you uncomfortable later</h2>
            <p className="mt-3 leading-8">
              Good diligence is partly about asking what kind of uncertainty
              would bother you after purchase. Access, boundaries, transfer
              confidence, and holding comfort should all be thought through in
              advance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Use legal review before the deal feels emotionally "done"</h2>
            <p className="mt-3 leading-8">
              The right time for legal checking is before the property becomes a
              lifestyle dream in your mind. Buyers tend to rationalize risk once
              they start imagining the finished outcome.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
