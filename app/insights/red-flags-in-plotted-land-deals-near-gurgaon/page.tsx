import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Red Flags in Plotted Land Deals Near Gurgaon | Guild Acre",
  description:
    "A practical guide to the warning signs serious buyers should notice before moving deeper into a plotted land deal near Gurgaon.",
};

export default function RedFlagsPlottedLandPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
          Plot Buying Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Red flags in plotted land deals near Gurgaon
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
          Plotted deals can look straightforward on the surface, especially when
          pricing, access, and future-growth language are packaged well. In
          practice, many weak opportunities reveal themselves through patterns
          buyers can spot earlier if they know what to watch.
        </p>

        <div className="mt-10 space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">1. The price feels attractive, but the explanation feels vague</h2>
            <p className="mt-3 leading-8">
              A deal can be well-priced, but if no one can clearly explain why
              it is priced that way relative to nearby inventory, buyer demand,
              or exact location context, caution is justified.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">2. The location story is stronger than the parcel story</h2>
            <p className="mt-3 leading-8">
              Some plotted deals are sold almost entirely through corridor hype.
              Buyers should still ask whether the exact parcel, access pattern,
              and practical use case are strong enough on their own.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">3. Questions around ownership or use case create discomfort</h2>
            <p className="mt-3 leading-8">
              If the conversation becomes evasive the moment a buyer asks about
              title chain, exact use case, transfer comfort, or parcel history,
              that is useful information in itself.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">4. Every plotted option is being positioned as a “must-buy”</h2>
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
