"use client";

import { useState } from "react";

export default function HomePage() {
  const [budget, setBudget] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const trustPoints = [
    "12+ Years Gurgaon Market Experience",
    "Specialized in Land & Farm Deals",
    "Trusted by HNI Buyers & Investors",
    "Focused Only on Genuine Opportunities",
  ];

  const pillars = [
    {
      title: "Curated Opportunities",
      text: "We do not push random inventory. We filter opportunities based on location strength, buyer fit, and long-term relevance.",
    },
    {
      title: "Deep Deal Understanding",
      text: "We evaluate pricing, corridor logic, title confidence, and actual deal quality before recommending anything seriously.",
    },
    {
      title: "Premium Buyer Experience",
      text: "Guild Acre is built for clients who value clarity, discretion, clean communication, and stronger decision quality.",
    },
  ];

  const featuredListings = [
    {
      title: "Aravalli Ridge Estate",
      type: "Farm Investment",
      location: "Sohna, Gurgaon",
      price: "₹2.40 Cr onwards",
      badge: "Verified Title",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Blue Horizon Investor Plots",
      type: "Investment Land",
      location: "Dwarka Expressway",
      price: "₹3.10 Cr onwards",
      badge: "High Growth Zone",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Orchard Valley Residences",
      type: "Farmhouse Plots",
      location: "Naugaon Belt",
      price: "₹1.20 Cr onwards",
      badge: "Weekend Living",
      image:
        "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const handleShortlist = () => {
    const message = `Hi Guild Acre,

Budget Range: ${budget || "-"}
Property Type: ${propertyType || "-"}
Preferred Location: ${location || "-"}
Phone Number: ${phone || "-"}

Please share curated opportunities for my requirement.`;

    window.open(
      `https://wa.me/919711667782?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_28%),linear-gradient(180deg,#020617_0%,#071728_42%,#06111d_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-8 lg:pb-28 lg:pt-20">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cyan-300/80 sm:px-4 sm:text-xs sm:tracking-[0.28em]">
              Gurgaon • Sohna • Naugaon • Premium Corridors
            </p>

            <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[0.96] tracking-tight sm:mt-6 sm:text-5xl lg:text-7xl">
              Premium real estate advisory for buyers who value clarity, credibility, and conviction.
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
              Guild Acre helps HNI buyers, investors, and serious Delhi NCR
              professionals discover curated land, farmhouse, and plotted
              opportunities with stronger filtering, genuine guidance, and a
              premium advisory experience.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="/listings"
                className="rounded-2xl bg-cyan-500 px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Explore Curated Listings
              </a>

              <a
                href="https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20start%20private%20advisory."
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Start Private Advisory
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 sm:p-5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-cyan-300/15 bg-slate-950/55 p-5 backdrop-blur-sm sm:rounded-[32px] sm:p-7">
            <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.3em]">
              Private Consultation Desk
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl">
              Tell us what you are looking for
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-300 sm:mt-4">
              Share your requirement and we will help you shortlist premium
              opportunities aligned to your budget, purpose, and long-term goals.
            </p>

            <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Budget Range
                </label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Example: ₹1 Cr - ₹3 Cr"
                  className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Property Type
                </label>
                <input
                  type="text"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  placeholder="Farmhouse land, plot, apartment, etc."
                  className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Preferred Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Example: Sohna, Gurgaon"
                  className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number"
                  className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>
            </div>

            <button
              onClick={handleShortlist}
              className="mt-5 inline-block w-full rounded-2xl bg-cyan-500 px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 sm:mt-6"
            >
              Get Curated Opportunities
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.32em]">
            Why Guild Acre
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:mt-4 sm:text-4xl lg:text-5xl">
            A more refined way to discover premium property.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
            Our role is not just to show availability. Our role is to improve
            decision quality through curation, clarity, and stronger advisory.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3 lg:gap-6">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 sm:rounded-[28px] sm:p-8"
            >
              <h3 className="text-xl font-semibold sm:text-2xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8 lg:py-10">
        <div className="rounded-[28px] border border-cyan-300/15 bg-gradient-to-r from-cyan-400/10 via-white/5 to-sky-400/10 p-6 sm:rounded-[32px] sm:p-8 lg:p-10">
          <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.32em]">
            Founder
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">
            Sandeep Kumar
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
            With 12+ years of experience in Gurgaon real estate, I focus on
            helping serious buyers and investors make clearer, higher-conviction
            decisions in land, farmhouse, and plotted opportunities.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
            I understand deals deeply, focus on genuine properties, and guide
            clients honestly. Guild Acre is built on that principle.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end lg:gap-6">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.32em]">
              Featured Opportunities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:mt-4 sm:text-4xl lg:text-5xl">
              Selective opportunities, not overwhelming inventory.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
              Here is a glimpse of the kind of premium opportunities we help clients evaluate.
            </p>
          </div>

          <a
            href="/listings"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View All Listings
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {featuredListings.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[24px] border border-white/10 bg-slate-900 shadow-2xl transition hover:-translate-y-2 hover:border-cyan-300/20 hover:shadow-[0_0_28px_rgba(34,211,238,0.16)] sm:rounded-[28px]"
            >
              <div
                className="h-52 bg-cover bg-center transition duration-500 group-hover:scale-105 sm:h-60"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              <div className="p-5 sm:p-6">
                <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
                  {item.badge}
                </div>

                <h3 className="mt-4 text-xl font-semibold sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-400">{item.location}</p>

                <div className="mt-5 text-sm text-slate-300">
                  Type: {item.type}
                </div>

                <div className="mt-6 text-2xl font-bold text-cyan-300">
                  {item.price}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/contact"
                    className="flex-1 rounded-xl bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Request Details
                  </a>
                  <a
                    href="https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20details%20for%20this%20property."
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center sm:mt-20">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Serious buyers don’t chase listings. They access the right opportunities early.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Tell us your requirement and we’ll align you with genuine options.
          </p>

          <a
            href="https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20start%20private%20advisory."
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-2xl bg-cyan-500 px-6 py-4 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Start Private Advisory
          </a>
        </div>
      </section>
    </main>
  );
}