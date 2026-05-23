"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";

const consultationUrl =
  "https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20request%20a%20private%20land%20intelligence%20consultation.";

const intelligenceUrl =
  "https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20access%20a%20private%20land%20intelligence%20brief.";

const signalPoints = [
  "Gurgaon NCR acquisition intelligence",
  "Sohna and Aravali corridor monitoring",
  "Private diligence notes for select buyers",
  "Capital-fit review before site movement",
];

const verifiedFramework = [
  {
    title: "Ownership Continuity",
    text: "Review of title chain coherence, seller continuity, inheritance indicators, and documentation gaps that may affect acquisition confidence.",
  },
  {
    title: "Legal Validation",
    text: "Early-stage scrutiny of registry, mutation, revenue record context, encumbrance signals, and counsel-led diligence pathways.",
  },
  {
    title: "Access Integrity",
    text: "Assessment of approach roads, practical ingress, dependence on informal access, and long-term usability of the parcel.",
  },
  {
    title: "Zoning Intelligence",
    text: "Reading of permissible use, corridor character, policy direction, CLU relevance, and future-use constraints.",
  },
  {
    title: "Environmental Sensitivity",
    text: "Screening for Aravali, forest, water body, green buffer, and ecological-risk indicators before deeper commitment.",
  },
  {
    title: "Infrastructure Probability",
    text: "Evaluation of road, utility, institutional, and demand-side catalysts against realistic execution probability.",
  },
  {
    title: "Liquidity & Exit Logic",
    text: "Assessment of buyer depth, holding period realism, exit audience, and whether the asset can remain relevant over time.",
  },
];

const reports = [
  {
    title: "Sohna Corridor Signals",
    deck: "Access, pricing discipline, parcel quality and demand migration indicators across the southern expansion belt.",
  },
  {
    title: "Gurgaon Peripheral Expansion Watch",
    deck: "Emerging edge-market movement, infrastructure dependency, and land-use changes shaping long-horizon acquisition logic.",
  },
  {
    title: "Aravali Sensitivity Review",
    deck: "Environmental, legal and usability considerations for buyers studying land near sensitive terrain and protected belts.",
  },
  {
    title: "CLU Movement Tracker",
    deck: "Change-of-land-use signals, policy friction, and commercial viability notes for strategic land evaluation.",
  },
];

const evaluationNotes = [
  {
    kicker: "Note 01",
    title: "Peripheral Acreage With Access Ambiguity",
    text: "A family-office style buyer was advised to pause site movement until access continuity and neighbouring land-use dependency could be clarified.",
  },
  {
    kicker: "Note 02",
    title: "Sohna Hold Strategy Versus Lifestyle Use",
    text: "Two parcels with similar headline pricing diverged materially once approach quality, future utility, and probable buyer depth were compared.",
  },
  {
    kicker: "Note 03",
    title: "Aravali-Adjacent Farm Land Review",
    text: "The acquisition thesis shifted from yield expectation to risk containment after environmental sensitivity and documentation friction were mapped.",
  },
];

export default function HomePage() {
  const [capitalRange, setCapitalRange] = useState("");
  const [corridor, setCorridor] = useState("");
  const [intent, setIntent] = useState("");
  const [phone, setPhone] = useState("");

  const handleConsultation = () => {
    const message = `Hi Guild Acre,

Capital Range: ${capitalRange || "-"}
Corridor / Geography: ${corridor || "-"}
Acquisition Intent: ${intent || "-"}
Phone Number: ${phone || "-"}

I want to request a private land intelligence consultation.`;

    window.open(`https://wa.me/919711667782?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#efe7d6]">
      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden border-b border-[#2d2a22] bg-[#050505]">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=82"
          alt="Cinematic land horizon in low light"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.34]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.72)_48%,rgba(5,5,5,0.34)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,#050505_100%)]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.06fr_0.94fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase text-[#b9a46d] sm:text-sm">
              Private land intelligence office
            </p>

            <h1 className="mt-6 max-w-5xl text-[3.35rem] font-semibold leading-[0.92] text-[#f4ead8] sm:text-7xl lg:text-8xl">
              Private Land Intelligence for Select NCR Buyers
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#cfc5b3] sm:text-xl sm:leading-9">
              Strategic acquisition advisory across Gurgaon NCR, Sohna,
              Aravali Belt, and emerging growth corridors.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={consultationUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#bda56a] bg-[#bda56a] px-7 py-4 text-center text-sm font-semibold text-[#070706] transition duration-500 hover:-translate-y-0.5 hover:bg-[#d4c083]"
              >
                Request Private Consultation
              </a>

              <a
                href="#intelligence-briefs"
                className="rounded-full border border-[#efe7d6]/20 bg-[#efe7d6]/[0.03] px-7 py-4 text-center text-sm font-semibold text-[#efe7d6] transition duration-500 hover:-translate-y-0.5 hover:border-[#bda56a]/70 hover:text-[#f7eddb]"
              >
                Access Intelligence Brief
              </a>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {signalPoints.map((item) => (
                <div
                  key={item}
                  className="border-t border-[#bda56a]/35 pt-4 text-sm leading-6 text-[#b8ad9b]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="flex items-end lg:justify-end">
            <div className="w-full max-w-xl border border-[#bda56a]/22 bg-[#0b0b0a]/72 p-5 backdrop-blur-md sm:p-7 lg:mb-12">
              <p className="text-xs uppercase text-[#b9a46d]">Corridor desk</p>
              <div className="mt-7 space-y-6">
                {[
                  ["Gurgaon NCR", "Institutional demand, end-use depth, premium micro-market maturity"],
                  ["Sohna", "Growth corridor evaluation, parcel quality, access and liquidity logic"],
                  ["Aravali Belt", "Environmental sensitivity, use constraints, long-horizon risk review"],
                ].map(([title, text]) => (
                  <div key={title} className="group border-l border-[#efe7d6]/12 pl-5 transition duration-500 hover:border-[#bda56a]">
                    <h2 className="text-2xl font-semibold text-[#f4ead8]">{title}</h2>
                    <p className="mt-2 text-sm leading-6 text-[#b8ad9b]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-32">
        <div>
          <p className="text-xs uppercase text-[#b9a46d]">Institutional posture</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f4ead8] sm:text-6xl">
            Intelligence before exposure. Discipline before movement.
          </h2>
        </div>

        <div className="space-y-8 text-lg leading-9 text-[#cfc5b3]">
          <p>
            Guild Acre is structured as a private land intelligence office for
            buyers who need strategic clarity before entering opaque land-led
            markets. The work begins before site visits, negotiation pressure,
            or public inventory comparison.
          </p>
          <p>
            We study geography, title context, access, zoning, environmental
            sensitivity, infrastructure probability and exit logic so a buyer can
            decide whether an opportunity deserves capital, time or silence.
          </p>
        </div>
      </section>

      <section className="border-y border-[#2d2a22] bg-[#0b0b0a]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-xs uppercase text-[#b9a46d]">Guild Verified™ framework</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f4ead8] sm:text-6xl">
                A private evaluation system for land confidence.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-9 text-[#cfc5b3]">
              The framework does not certify a transaction. It gives select
              buyers an institutional way to understand what needs to be proven
              before acquisition conviction can be formed.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-[#2d2a22] bg-[#2d2a22] md:grid-cols-2 xl:grid-cols-3">
            {verifiedFramework.map((item, index) => (
              <article
                key={item.title}
                className="group min-h-[260px] bg-[#10100e] p-7 transition duration-500 hover:bg-[#17150f] sm:p-8"
              >
                <p className="text-xs text-[#b9a46d]">0{index + 1}</p>
                <h3 className="mt-8 text-3xl font-semibold leading-tight text-[#f4ead8]">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#afa492] transition duration-500 group-hover:text-[#d5cab8]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="intelligence-briefs" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs uppercase text-[#b9a46d]">Intelligence reports</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f4ead8] sm:text-6xl">
              Editorial land intelligence for acquisition decisions.
            </h2>
          </div>
          <a
            href={intelligenceUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#efe7d6]/20 px-6 py-4 text-center text-sm font-semibold text-[#efe7d6] transition duration-500 hover:border-[#bda56a] hover:text-[#d4c083]"
          >
            Request Brief Access
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reports.map((report) => (
            <article
              key={report.title}
              className="group border border-[#2d2a22] bg-[#0b0b0a] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#bda56a]/55 sm:p-9"
            >
              <p className="text-xs uppercase text-[#b9a46d]">Private memorandum</p>
              <h3 className="mt-8 text-3xl font-semibold leading-tight text-[#f4ead8] sm:text-4xl">
                {report.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-[#b8ad9b]">
                {report.deck}
              </p>
              <div className="mt-8 h-px w-16 bg-[#bda56a]/70 transition-all duration-500 group-hover:w-28" />
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#2d2a22] bg-[#0d0d0c]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs uppercase text-[#b9a46d]">Strategic Evaluation Notes</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f4ead8] sm:text-6xl">
              Case-style notes from private land review mandates.
            </h2>
          </div>

          <div className="mt-14 divide-y divide-[#2d2a22] border-y border-[#2d2a22]">
            {evaluationNotes.map((note) => (
              <article key={note.title} className="grid gap-6 py-9 transition duration-500 hover:bg-[#11100d] sm:px-4 lg:grid-cols-[0.22fr_0.38fr_0.4fr] lg:items-start">
                <p className="text-xs uppercase text-[#b9a46d]">{note.kicker}</p>
                <h3 className="text-3xl font-semibold leading-tight text-[#f4ead8]">
                  {note.title}
                </h3>
                <p className="text-base leading-8 text-[#b8ad9b]">{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-32">
        <div>
          <p className="text-xs uppercase text-[#b9a46d]">Private consultation</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f4ead8] sm:text-6xl">
            Submit an acquisition brief for confidential review.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#b8ad9b]">
            Share only what is necessary: capital range, target corridor, hold
            logic and timing. The response is structured around fit, diligence
            direction and whether a deeper mandate is sensible.
          </p>
        </div>

        <div className="border border-[#2d2a22] bg-[#0b0b0a] p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Capital Range">
              <input
                type="text"
                value={capitalRange}
                onChange={(event) => setCapitalRange(event.target.value)}
                placeholder="Example: Rs. 5 Cr - Rs. 20 Cr"
                className="institutional-input"
              />
            </Field>

            <Field label="Corridor / Geography">
              <input
                type="text"
                value={corridor}
                onChange={(event) => setCorridor(event.target.value)}
                placeholder="Gurgaon NCR, Sohna, Aravali Belt"
                className="institutional-input"
              />
            </Field>

            <Field label="Acquisition Intent">
              <input
                type="text"
                value={intent}
                onChange={(event) => setIntent(event.target.value)}
                placeholder="Hold, lifestyle, strategic aggregation"
                className="institutional-input"
              />
            </Field>

            <Field label="Phone Number">
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Enter phone number"
                className="institutional-input"
              />
            </Field>
          </div>

          <button
            onClick={handleConsultation}
            className="mt-5 w-full rounded-full border border-[#bda56a] bg-[#bda56a] px-6 py-4 text-sm font-semibold text-[#070706] transition duration-500 hover:bg-[#d4c083] sm:mt-6"
          >
            Request Private Consultation
          </button>

          <p className="mt-4 text-xs leading-6 text-[#958b7c]">
            Submitted briefs are used only to assess fit for a private
            consultation. Read our{" "}
            <a href="/privacy-policy" className="text-[#d4c083] underline underline-offset-4">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block border border-[#2d2a22] bg-[#050505] p-4 transition duration-500 focus-within:border-[#bda56a]/70">
      <span className="text-xs uppercase text-[#9d927f]">{label}</span>
      {children}
    </label>
  );
}
