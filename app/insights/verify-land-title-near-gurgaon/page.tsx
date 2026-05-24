import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "How to Verify Land Title Before Buying Near Gurgaon | Guild Acre",
  description:
    "A practical land-title checklist for serious buyers evaluating plotted, farmhouse, or land-led opportunities near Gurgaon and Sohna.",
  path: "/insights/verify-land-title-near-gurgaon",
});

export default function VerifyLandTitlePage() {
  return (
    <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs uppercase text-[#86b8c8]">
          Land Buying Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          How to verify land title before buying near Gurgaon
        </h1>
        <p className="mt-6 text-base leading-8 text-[#b9cbd2] sm:text-lg">
          Land deals require more caution than standard apartment purchases.
          Before getting influenced by price, location hype, or future growth
          claims, buyers should first understand whether the ownership and use
          narrative is actually clean enough to justify deeper interest.
        </p>

        <div className="mt-10 space-y-8 text-[#b9cbd2]">
          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">1. Confirm who legally owns the land</h2>
            <p className="mt-3 leading-8">
              The most basic question is still the most important: who owns the
              parcel, and is the seller actually authorized to transfer it? This
              should be established before discussing appreciation or future-use
              stories.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">2. Understand the exact land use story</h2>
            <p className="mt-3 leading-8">
              Buyers should be very clear on whether the parcel is being
              discussed as agricultural land, farmhouse-oriented land, plotted
              development potential, or something else entirely. Many mistakes begin when
              buyers assume one use case while the documentation supports
              another.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">3. Ask the uncomfortable questions early</h2>
            <p className="mt-3 leading-8">
              If basic answers around ownership chain, access, parcel
              boundaries, or transfer confidence are vague, that is already
              useful information. Buyers should not confuse presentation confidence
              with document clarity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">4. Match the title story to your real objective</h2>
            <p className="mt-3 leading-8">
              A buyer looking for a long-hold land-banking position, a farmhouse
              retreat, and a near-term exit all need different levels of comfort
              with location, transferability, and practical usability. The right
              title threshold depends partly on the use case.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">5. Use legal review before emotional commitment</h2>
            <p className="mt-3 leading-8">
              Serious buyers should bring legal review in before they become too
              emotionally attached to a parcel. It is much easier to walk away
              early than to rationalize risk after time and momentum have built
              up.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
