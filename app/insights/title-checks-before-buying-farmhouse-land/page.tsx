import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Title Comfort Before Buying Farmhouse Land | Guild Acre",
  description:
    "A high-level Guild Acre note on why farmhouse land buyers should use private review before emotional commitment.",
  path: "/insights/title-checks-before-buying-farmhouse-land",
});

export default function TitleChecksFarmhouseLandPage() {
  return (
    <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs uppercase text-[#86b8c8]">
          Farmhouse Orientation
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          Title comfort before buying farmhouse land
        </h1>
        <p className="mt-6 text-base leading-8 text-[#b9cbd2] sm:text-lg">
          Farmhouse land purchases can become emotional quickly. The public
          lesson is simple: lifestyle appeal should not outrun private review.
        </p>

        <div className="mt-10 space-y-8 text-[#b9cbd2]">
          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Do not let ambiance lead the decision</h2>
            <p className="mt-3 leading-8">
              Privacy, greenery, and approach experience matter, but they should
              not decide the acquisition before the buyer has private comfort.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">The selling story should match the buyer's purpose</h2>
            <p className="mt-3 leading-8">
              A lifestyle story, long-hold story, and family-asset story are not
              the same. The right review depends on the mandate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Review before the acquisition feels final</h2>
            <p className="mt-3 leading-8">
              Private review works best before the buyer becomes emotionally
              committed. Guild Acre keeps the deeper method inside accepted
              mandate conversations.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
