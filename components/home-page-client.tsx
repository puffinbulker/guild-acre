"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";

const advisoryUrl =
  "https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20book%20a%20private%20advisory.";

export default function HomePage() {
  const [budget, setBudget] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const trustPoints = [
    "Gurgaon micro-market intelligence",
    "Land, farmhouse and plotted opportunities",
    "Private shortlists for serious buyers",
    "12+ years of on-ground advisory context",
  ];

  const pillars = [
    {
      title: "Private Brief First",
      text: "Every search begins with intent, capital range, holding horizon, and the kind of asset that genuinely fits the buyer.",
    },
    {
      title: "Corridor-Led Judgment",
      text: "We assess access, surrounding demand, pricing behavior, and use-case strength before treating an opportunity as serious.",
    },
    {
      title: "Discreet Access",
      text: "Public inventory is only a starting point. The real value is a filtered conversation around what deserves attention.",
    },
  ];

  const proofPoints = [
    { label: "Primary Markets", value: "Gurgaon, Sohna, Naugaon" },
    { label: "Asset Focus", value: "Land, farmhouses, plots, premium homes" },
    { label: "Client Profile", value: "HNI buyers, family offices, serious investors" },
  ];

  const evaluationSteps = [
    {
      title: "Requirement",
      text: "We clarify capital range, location appetite, acquisition purpose, and practical constraints.",
    },
    {
      title: "Market Fit",
      text: "We compare the brief against corridor maturity, demand depth, access, and realistic pricing.",
    },
    {
      title: "Source Confidence",
      text: "We prioritize opportunities with cleaner availability, stronger context, and early diligence readiness.",
    },
    {
      title: "Shortlist",
      text: "You see only the opportunities that match the brief closely enough to justify a serious next step.",
    },
  ];

  const clientContexts = [
    {
      title: "Land Banking",
      summary:
        "For buyers evaluating long-hold land positions where entry price, access, title questions, and exit logic need more discipline.",
    },
    {
      title: "Private Farmhouse Search",
      summary:
        "For lifestyle-led buyers who care about privacy, approach roads, parcel quality, surrounding use, and weekend access.",
    },
    {
      title: "Premium Gurgaon Upgrade",
      summary:
        "For end users comparing higher-quality residential assets across established and emerging Gurgaon corridors.",
    },
  ];

  const handleShortlist = () => {
    const message = `Hi Guild Acre,

Budget Range: ${budget || "-"}
Asset Type: ${propertyType || "-"}
Preferred Location: ${location || "-"}
Phone Number: ${phone || "-"}

I want to book a private advisory consultation.`;

    window.open(`https://wa.me/919711667782?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#020617] text-[#E5E7EB]">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#020617_0%,#06111F_48%,#071827_100%)]">
        <div className="absolute inset-x-0 top-0 h-px bg-[#D4AF37]/30" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-18 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase text-[#C6A76A]">
              Private real estate intelligence
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              Private land advisory for serious Gurgaon buyers.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#B9C4D0] sm:text-xl sm:leading-9">
              Guild Acre helps HNI buyers and serious investors evaluate land,
              farmhouse, plotted and premium property opportunities with sharper
              filtering, corridor intelligence and confidential shortlisting.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={advisoryUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#D4AF37] bg-[#D4AF37] px-7 py-4 text-center text-sm font-semibold text-[#020617] transition duration-300 hover:bg-[#C6A76A]"
              >
                Book Private Advisory
              </a>

              <a
                href="/listings"
                className="rounded-full border border-white/[0.12] bg-white/[0.03] px-7 py-4 text-center text-sm font-semibold text-white transition duration-300 hover:border-[#C6A76A]/60 hover:text-[#F6E7B7]"
              >
                View Curated Listings
              </a>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="border-l border-[#C6A76A]/35 bg-white/[0.025] px-4 py-4 text-sm leading-6 text-[#B9C4D0]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-[#C6A76A]/20 bg-[#06111F] sm:min-h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=82"
                alt="Open land and estate horizon"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.12),rgba(2,6,23,0.72))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-sm uppercase text-[#D4AF37]">Gurgaon land desk</p>
                <p className="mt-3 max-w-md text-2xl font-semibold leading-8 text-white">
                  Opportunity access shaped around discretion, diligence and buyer fit.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <div key={item.label} className="border border-white/10 bg-white/[0.035] p-5">
                  <p className="text-xs uppercase text-[#8FA3B8]">{item.label}</p>
                  <p className="mt-3 text-base font-semibold leading-6 text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-sm uppercase text-[#C6A76A]">Private consultation</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Share the brief. Receive a cleaner path.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#B9C4D0]">
            The advisory desk is designed for buyers who would rather spend time
            on judgment than chase public inventory. Share the capital range,
            asset type and preferred corridor, and we will respond with the next
            sensible step.
          </p>
        </div>

        <div className="luxury-panel rounded-[28px] p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Budget Range">
              <input
                type="text"
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
                placeholder="Example: Rs. 2 Cr - Rs. 6 Cr"
                className="mt-3 w-full rounded-xl border border-white/10 bg-[#020617]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#8FA3B8]/70 focus:border-[#D4AF37]/70"
              />
            </Field>

            <Field label="Asset Type">
              <input
                type="text"
                value={propertyType}
                onChange={(event) => setPropertyType(event.target.value)}
                placeholder="Land, farmhouse, plot, premium home"
                className="mt-3 w-full rounded-xl border border-white/10 bg-[#020617]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#8FA3B8]/70 focus:border-[#D4AF37]/70"
              />
            </Field>

            <Field label="Preferred Location">
              <input
                type="text"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="Sohna, Gurgaon, Naugaon"
                className="mt-3 w-full rounded-xl border border-white/10 bg-[#020617]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#8FA3B8]/70 focus:border-[#D4AF37]/70"
              />
            </Field>

            <Field label="Phone Number">
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Enter phone number"
                className="mt-3 w-full rounded-xl border border-white/10 bg-[#020617]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#8FA3B8]/70 focus:border-[#D4AF37]/70"
              />
            </Field>
          </div>

          <button
            onClick={handleShortlist}
            className="mt-5 w-full rounded-full border border-[#D4AF37] bg-[#D4AF37] px-6 py-4 text-sm font-semibold text-[#020617] transition duration-300 hover:bg-[#C6A76A] sm:mt-6"
          >
            Book Private Advisory
          </button>

          <p className="mt-4 text-xs leading-5 text-[#8FA3B8]">
            By sending this enquiry, you consent to Guild Acre contacting you about
            your property requirement. Read our{" "}
            <a href="/privacy-policy" className="text-[#F6E7B7] underline underline-offset-4">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-[#06111F]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm uppercase text-[#C6A76A]">Why Guild Acre</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              An advisory posture, not a listing feed.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((item) => (
              <article key={item.title} className="border border-white/10 bg-[#020617]/45 p-6">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#B9C4D0]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase text-[#C6A76A]">Evaluation method</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            A disciplined filter before capital meets a property.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#B9C4D0]">
            The work is not to make every asset look exciting. The work is to
            identify which opportunities have enough location logic, price logic
            and ownership clarity to merit serious attention.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
          {evaluationSteps.map((item, index) => (
            <article key={item.title} className="bg-[#06111F] p-6 sm:p-7">
              <p className="text-sm text-[#D4AF37]">0{index + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#B9C4D0]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[1fr_1fr] lg:px-8 lg:pb-24">
        <div className="luxury-panel rounded-[28px] p-7 sm:p-9">
          <p className="text-sm uppercase text-[#C6A76A]">Client situations</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">
            Built for buyers who need fewer options and better judgment.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#B9C4D0]">
            Guild Acre works best when the decision is meaningful enough to
            require discretion, structured filtering, and a calm view of the
            Gurgaon market.
          </p>
        </div>

        <div className="grid gap-4">
          {clientContexts.map((item) => (
            <article key={item.title} className="border border-white/10 bg-white/[0.035] p-6">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#B9C4D0]">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#071827]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-end lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase text-[#C6A76A]">Private access</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Serious property decisions deserve a private advisory conversation.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#B9C4D0]">
              Tell us what you are trying to buy, hold or compare. We will help
              you separate useful opportunities from market noise.
            </p>
          </div>

          <a
            href={advisoryUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#D4AF37] bg-[#D4AF37] px-7 py-4 text-sm font-semibold text-[#020617] transition duration-300 hover:bg-[#C6A76A]"
          >
            Book Private Advisory
          </a>
        </div>
      </section>
    </main>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <span className="text-xs uppercase text-[#8FA3B8]">{label}</span>
      {children}
    </label>
  );
}
