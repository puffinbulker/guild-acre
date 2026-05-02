"use client";

import { useState } from "react";

export default function HomePage() {
  const [budget, setBudget] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const trustPoints = [
    "12+ Years Gurgaon Market Experience",
    "Focused on Land, Farmhouse & Plotted Deals",
    "Private Advisory for Serious Buyers",
    "Filtered Opportunities Across Premium Corridors",
  ];

  const pillars = [
    {
      title: "Curated Opportunities",
      text: "We shortlist opportunities based on location strength, buyer fit, and practical relevance instead of overwhelming you with random inventory.",
    },
    {
      title: "Corridor-Level Understanding",
      text: "We assess pricing, surrounding demand, and market context before recommending a deal seriously.",
    },
    {
      title: "Premium Buyer Experience",
      text: "Guild Acre is built for clients who value discretion, direct communication, and cleaner decision-making support.",
    },
  ];

  const proofPoints = [
    {
      label: "Primary Markets",
      value: "Gurgaon, Sohna, and Naugaon",
    },
    {
      label: "Advisory Focus",
      value: "Land, farmhouse, and plotted opportunities",
    },
    {
      label: "Client Profile",
      value: "Serious buyers, investors, and selective NCR professionals",
    },
  ];

  const evaluationSteps = [
    {
      title: "Location logic",
      text: "We first assess whether the micro-market actually fits your use case, instead of relying on generic hype around the corridor.",
    },
    {
      title: "Pricing realism",
      text: "We compare the asking level against the corridor, product type, and nearby demand so you can judge whether the deal is stretched or sensible.",
    },
    {
      title: "Title-awareness",
      text: "We flag the diligence questions that should be raised early, especially in land-led and farmhouse-linked opportunities.",
    },
    {
      title: "Buyer fit",
      text: "Every opportunity is filtered by purpose, whether that means investment, future use, lifestyle purchase, or a more selective long-term hold.",
    },
    {
      title: "Exit clarity",
      text: "We look beyond the entry story and consider how usable, liquid, and relevant the opportunity is likely to remain over time.",
    },
  ];

  const clientStories = [
    {
      title: "Land-banking brief",
      summary:
        "A Delhi NCR investor looking for a cleaner long-hold land position was narrowed from multiple noisy options down to a smaller, more practical shortlist based on corridor fit and holding horizon.",
    },
    {
      title: "Farmhouse lifestyle search",
      summary:
        "A weekend-use buyer exploring farmhouse options wanted privacy, access, and a better-quality micro-market rather than just a large parcel on paper.",
    },
    {
      title: "Upgrade-led residential shortlisting",
      summary:
        "A family buyer comparing premium Gurgaon inventory was guided toward the sectors and product types that matched end use, livability, and resale comfort.",
    },
  ];

  const faqs = [
    {
      question: "What kind of properties does Guild Acre focus on most?",
      answer:
        "Guild Acre focuses primarily on land, farmhouse, and plotted opportunities, while also advising on selective premium residential requirements in Gurgaon and nearby growth corridors.",
    },
    {
      question: "Who is this advisory best suited for?",
      answer:
        "The service is designed for serious buyers, investors, and selective NCR professionals who want better filtering, cleaner guidance, and fewer low-quality options.",
    },
    {
      question: "Do you only work with investors?",
      answer:
        "No. Some clients are investing for long-term appreciation, while others are buying for lifestyle, future use, or family-led end use.",
    },
    {
      question: "How does the shortlisting process work?",
      answer:
        "You share your budget, location preference, and objective. We then filter opportunities based on buyer fit, market context, and practical decision factors before recommending what deserves serious attention.",
    },
  ];

  const featuredListings = [
    {
      title: "Sohna Green-Belt Farm Parcel",
      type: "Farm land for long-hold and weekend use",
      location: "Sohna, Gurgaon",
      price: "Rs. 2.40 Cr onwards",
      badge: "Title-led shortlisting",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Dwarka Expressway Investor Plot Option",
      type: "Plotted opportunity in a growth corridor",
      location: "Dwarka Expressway",
      price: "Rs. 3.10 Cr onwards",
      badge: "Growth-corridor fit",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Naugaon Lifestyle Farm Plot",
      type: "Farmhouse plot for retreat-led buyers",
      location: "Naugaon Belt",
      price: "Rs. 1.20 Cr onwards",
      badge: "Weekend-use profile",
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
              Gurgaon | Sohna | Naugaon | Premium Corridors
            </p>

            <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[0.96] tracking-tight sm:mt-6 sm:text-5xl lg:text-7xl">
              Private real estate advisory for serious land and premium property buyers in Gurgaon.
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
              Guild Acre helps serious buyers and investors shortlist land,
              farmhouse, and plotted opportunities across Gurgaon, Sohna, and
              Naugaon with stronger filtering, clearer guidance, and better
              decision support.
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
                  placeholder="Example: Rs. 1 Cr - Rs. 3 Cr"
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
            Why serious buyers work with Guild Acre.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
            Guild Acre is built for buyers who do not want random inventory,
            noisy follow-up, or vague recommendations. We help clients focus on
            opportunities that align with their budget, intended use, and
            long-term priorities.
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

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.32em]">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:mt-4 sm:text-4xl lg:text-5xl">
            Common questions from serious buyers.
          </h2>
        </div>

        <div className="mt-8 space-y-4 sm:mt-10">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 sm:rounded-[28px] sm:p-7"
            >
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8 lg:py-10">
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {proofPoints.map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 sm:rounded-[28px] sm:p-7"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.3em]">
                {item.label}
              </p>
              <p className="mt-3 text-lg font-semibold leading-7 text-white sm:text-xl">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.32em]">
            How We Evaluate Opportunities
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:mt-4 sm:text-4xl lg:text-5xl">
            A clearer process before we recommend a property seriously.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
            Every serious property decision deserves more than a sales pitch.
            Our filtering process is built to improve decision quality before
            you spend time on site visits, negotiations, or paperwork.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-5 lg:gap-5">
          {evaluationSteps.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-cyan-300/10 bg-slate-900/70 p-5 sm:rounded-[28px] sm:p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8 lg:py-10">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.32em]">
            Buyer Context
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:mt-4 sm:text-4xl lg:text-5xl">
            The kind of buyer situations we help clarify.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
            The best advisory work usually begins when a buyer has options on
            paper but still needs a cleaner decision path. These are typical
            situations that come to us.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3 lg:gap-5">
          {clientStories.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 sm:rounded-[28px] sm:p-7"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.summary}
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
            Advisory led by on-ground Gurgaon market experience
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
            Guild Acre is led by Sandeep Kumar, with 12+ years of experience in
            Gurgaon real estate. The focus is simple: help serious buyers and
            investors evaluate land, farmhouse, and plotted opportunities with
            more clarity, better filtering, and fewer low-quality distractions.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
            The advisory approach is built around honest guidance, cleaner
            communication, and better decision quality for buyers who take
            property seriously.
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
              Here is a glimpse of the kind of selective opportunities we help
              clients evaluate. Availability changes, and many options are
              discussed privately based on buyer fit, requirement, and timing.
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
            Serious buyers do not chase listings. They access the right opportunities early.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Tell us your requirement and we will align you with genuine options.
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
