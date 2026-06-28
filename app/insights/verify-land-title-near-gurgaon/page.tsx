import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Why Title Comfort Matters Before Buying Near Gurgaon | Guild Acre",
  description:
    "A high-level Guild Acre note on why ownership comfort should be settled privately before land buyers move deeper near Gurgaon.",
  path: "/insights/verify-land-title-near-gurgaon",
});

export default function VerifyLandTitlePage() {
  return (
    <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs uppercase text-[#86b8c8]">
          Land Buying Orientation
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          Why title comfort matters before buying near Gurgaon
        </h1>
        <p className="mt-6 text-base leading-8 text-[#b9cbd2] sm:text-lg">
          Land acquisitions require more caution than standard apartment
          purchases. The public takeaway is simple: buyers should not let price,
          location hype, or future-growth language move faster than private
          ownership comfort.
        </p>

        <div className="mt-10 space-y-8 text-[#b9cbd2]">
          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">The seller story is not enough</h2>
            <p className="mt-3 leading-8">
              A polished explanation can create confidence before the buyer has
              earned it. Guild Acre treats deeper review as private mandate
              work, not a public checklist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Use case changes the comfort level</h2>
            <p className="mt-3 leading-8">
              A long-hold buyer, lifestyle buyer, and strategic allocator may
              need different levels of comfort. That judgement should be shaped
              around the mandate, not copied from an article.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Private review should happen before emotional commitment</h2>
            <p className="mt-3 leading-8">
              Serious buyers are better served by confidential review before
              site excitement, seller pressure, or family momentum makes the
              decision harder to slow down.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
