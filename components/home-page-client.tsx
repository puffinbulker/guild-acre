"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";
import {
  Activity,
  BadgeCheck,
  Compass,
  FileSearch,
  Leaf,
  MapPinned,
  Network,
  Radar,
  Route,
  Scale,
  ShieldCheck,
} from "lucide-react";

const consultationUrl =
  "https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20request%20a%20private%20land%20intelligence%20consultation.";

const intelligenceUrl =
  "https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20access%20a%20private%20land%20intelligence%20brief.";

const trustLayer = [
  {
    title: "Strategic Land Intelligence",
    Icon: Compass,
  },
  {
    title: "Gurgaon NCR Corridor Analysis",
    Icon: MapPinned,
  },
  {
    title: "Select Acquisition Advisory",
    Icon: FileSearch,
  },
  {
    title: "Guild Verified\u2122 Evaluation",
    Icon: BadgeCheck,
  },
];

const verifiedFramework = [
  {
    title: "Ownership Continuity",
    Icon: ShieldCheck,
    text: "Title-chain coherence, seller continuity, inheritance indicators, and documentation gaps that may affect acquisition confidence.",
  },
  {
    title: "Legal Validation",
    Icon: Scale,
    text: "Registry, mutation, revenue record context, encumbrance signals, and counsel-led diligence pathways reviewed before conviction.",
  },
  {
    title: "Access Integrity",
    Icon: Route,
    text: "Approach roads, practical ingress, dependence on informal access, and long-term usability of the parcel.",
  },
  {
    title: "Zoning Intelligence",
    Icon: Radar,
    text: "Permissible use, corridor character, policy direction, CLU relevance, and future-use constraints.",
  },
  {
    title: "Environmental Sensitivity",
    Icon: Leaf,
    text: "Aravali, forest, water body, green buffer, and ecological-risk indicators screened before deeper commitment.",
  },
  {
    title: "Infrastructure Probability",
    Icon: Network,
    text: "Road, utility, institutional, and demand-side catalysts weighed against realistic execution probability.",
  },
  {
    title: "Liquidity & Exit Logic",
    Icon: Activity,
    text: "Buyer depth, holding period realism, exit audience, and whether the asset can remain relevant over time.",
  },
];

const reports = [
  {
    title: "Sohna Corridor Signals",
    code: "Signal Brief 01",
    deck: "Access discipline, parcel quality, pricing restraint, and demand migration indicators across the southern expansion belt.",
  },
  {
    title: "Gurgaon Expansion Watch",
    code: "Signal Brief 02",
    deck: "Edge-market movement, infrastructure dependency, and land-use pressure shaping long-horizon acquisition logic.",
  },
  {
    title: "Aravali Sensitivity Review",
    code: "Risk Memorandum",
    deck: "Environmental, legal, and usability considerations for buyers studying land near sensitive terrain and protected belts.",
  },
  {
    title: "CLU Movement Tracker",
    code: "Policy Note",
    deck: "Change-of-land-use signals, policy friction, and commercial viability notes for strategic land evaluation.",
  },
];

const evaluationNotes = [
  {
    kicker: "Evaluation 01",
    title: "Peripheral Acreage With Access Ambiguity",
    text: "A family-office style buyer was advised to pause movement until access continuity and neighbouring land-use dependency could be clarified.",
  },
  {
    kicker: "Evaluation 02",
    title: "Sohna Hold Strategy Versus Lifestyle Use",
    text: "Two parcels with similar headline pricing diverged materially once approach quality, future utility, and probable buyer depth were compared.",
  },
  {
    kicker: "Evaluation 03",
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
    <main className="min-h-screen bg-[#040403] text-[#efe7d6]">
      <section className="relative min-h-[calc(92svh-88px)] overflow-hidden border-b border-[#2b261d] bg-[#030303] lg:min-h-[calc(88svh-88px)]">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=82"
          alt="Cinematic land horizon in low light"
          fill
          priority
          sizes="100vw"
          className="scale-[1.04] object-cover object-[center_54%] opacity-[0.42] [filter:saturate(0.62)_contrast(1.12)_brightness(0.62)_sepia(0.14)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,3,0.98)_0%,rgba(3,3,3,0.86)_34%,rgba(3,3,3,0.56)_66%,rgba(3,3,3,0.76)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.9)_0%,rgba(3,3,3,0.12)_30%,rgba(3,3,3,0.36)_68%,#040403_100%)]" />
        <div className="absolute inset-x-0 top-[28%] h-px bg-[linear-gradient(90deg,transparent,rgba(212,192,131,0.34),transparent)] opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-[linear-gradient(180deg,rgba(4,4,3,0)_0%,rgba(4,4,3,0.84)_56%,#040403_100%)]" />

        <div className="relative mx-auto grid min-h-[calc(92svh-88px)] max-w-[88rem] gap-16 px-5 py-20 sm:px-7 sm:py-24 lg:min-h-[calc(88svh-88px)] lg:grid-cols-[0.96fr_1.04fr] lg:px-10 lg:py-10 xl:gap-24">
          <div className="flex max-w-4xl flex-col justify-center">
            <p className="inline-flex items-center gap-4 text-[0.72rem] font-medium uppercase text-[#c9b276] sm:text-[0.82rem]">
              <span className="h-px w-10 bg-[#c6a76a]/55" />
              Private land intelligence institution
            </p>

            <h1
              aria-label="Private Land Intelligence for Select NCR Buyers"
              className="mt-6 max-w-4xl text-[2.72rem] font-medium leading-[1.02] text-[#f7ecdc] sm:text-[3.85rem] lg:text-[4.1rem] xl:text-[4.25rem]"
            >
              <span className="block">Private Land</span>
              {" "}
              <span className="block">Intelligence</span>
              {" "}
              <span className="block">for Select NCR</span>
              {" "}
              <span className="block text-[#d6c184]">Buyers</span>
            </h1>

            <p className="mt-7 max-w-[42rem] text-[1.02rem] leading-8 text-[#d6cbb8] sm:text-[1.14rem] sm:leading-9">
              Strategic acquisition advisory across Gurgaon NCR, Sohna,
              Aravali Belt, and emerging growth corridors.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={consultationUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[2px] border border-[#c6a76a]/45 bg-[#f4ead8]/[0.018] px-8 py-4 text-center text-sm font-medium text-[#f5ead8] transition duration-500 hover:-translate-y-px hover:border-[#d4c083]/75 hover:bg-[#f4ead8]/[0.05]"
              >
                Request Private Consultation
              </a>

              <a
                href="#intelligence-briefs"
                className="rounded-[2px] border border-[#efe7d6]/12 bg-[#030303]/20 px-8 py-4 text-center text-sm font-medium text-[#cfc5b3] transition duration-500 hover:-translate-y-px hover:border-[#c6a76a]/50 hover:bg-[#f4ead8]/[0.035] hover:text-[#f4ead8]"
              >
                Access Intelligence Brief
              </a>
            </div>
          </div>

          <aside className="hidden items-end lg:flex lg:justify-end">
            <div className="relative w-full max-w-xl overflow-hidden border border-[#c6a76a]/16 bg-[#050505]/58 p-6 shadow-[0_42px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-8 lg:mb-10">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(212,192,131,0.46),transparent)]" />
              <div className="flex items-center justify-between gap-4 border-b border-[#2d2a22]/90 pb-6">
                <p className="text-xs uppercase text-[#c9b276]">Active coverage desk</p>
                <span className="text-xs text-[#8f8678]">NCR / 2026</span>
              </div>

              <div className="divide-y divide-[#2d2a22]/90">
                {[
                  ["Gurgaon NCR", "Demand depth, land scarcity, mature micro-market pressure"],
                  ["Sohna", "Growth corridor review, parcel quality, access, liquidity"],
                  ["Aravali Belt", "Sensitivity checks, use constraints, risk containment"],
                  ["Emerging Corridors", "Infrastructure probability and capital-fit review"],
                ].map(([title, text]) => (
                  <div key={title} className="group grid gap-5 py-7 sm:grid-cols-[0.36fr_0.64fr]">
                    <h2 className="text-[1.72rem] font-medium leading-[1.02] text-[#f4ead8] transition duration-500 group-hover:text-[#d4c083]">
                      {title}
                    </h2>
                    <p className="text-[0.92rem] leading-7 text-[#aaa08e] transition duration-500 group-hover:text-[#d0c4b1]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-[#2d2a22] bg-[#080807]">
        <div className="mx-auto grid max-w-7xl gap-px border-x border-[#2d2a22] bg-[#2d2a22] sm:grid-cols-2 lg:grid-cols-4">
          {trustLayer.map((item) => {
            const Icon = item.Icon;

            return (
              <div
                key={item.title}
                className="group flex min-h-36 items-start gap-4 bg-[#080807] p-6 transition duration-500 hover:bg-[#0d0d0b] sm:p-7"
              >
                <Icon className="mt-1 h-5 w-5 shrink-0 text-[#bda56a] transition duration-500 group-hover:text-[#d4c083]" />
                <p className="max-w-52 text-base font-medium leading-7 text-[#f4ead8]">
                  {item.title}
                </p>
              </div>
            );
          })}
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
            Guild Acre is structured as a private land intelligence institution
            for buyers who need strategic clarity before entering opaque
            land-led markets. The work begins before site visits, negotiation
            pressure, or public record comparison.
          </p>
          <p>
            We study geography, title context, access, zoning, environmental
            sensitivity, infrastructure probability and exit logic so a buyer
            can decide whether an opportunity deserves capital, time or silence.
          </p>
        </div>
      </section>

      <section className="border-y border-[#2d2a22] bg-[#0b0b0a]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase text-[#b9a46d]">Guild Verified{"\u2122"} framework</p>
            <h2 className="mt-6 text-5xl font-semibold leading-[1.02] text-[#f4ead8] sm:text-7xl">
              The evaluation system behind acquisition confidence.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-[#cfc5b3]">
              The framework does not certify a transaction. It gives select
              buyers an institutional method for understanding what must be
              proven before conviction can be formed.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {verifiedFramework.map((item, index) => {
              const Icon = item.Icon;

              return (
                <article
                  key={item.title}
                  className="group min-h-[320px] border border-[#2d2a22] bg-[#10100e] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#bda56a]/45 hover:bg-[#15140f] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <Icon className="h-6 w-6 text-[#bda56a] transition duration-500 group-hover:text-[#d4c083]" />
                    <p className="font-[var(--font-editorial)] text-4xl text-[#2d2a22] transition duration-500 group-hover:text-[#bda56a]/35">
                      0{index + 1}
                    </p>
                  </div>
                  <h3 className="mt-14 text-3xl font-semibold leading-tight text-[#f4ead8]">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-[#afa492] transition duration-500 group-hover:text-[#d5cab8]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="intelligence-briefs" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs uppercase text-[#b9a46d]">Intelligence reports</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f4ead8] sm:text-6xl">
              Analytical briefs for corridor-aware acquisition decisions.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-9 text-[#cfc5b3] lg:justify-self-end">
            Reports are structured as private memoranda: concise, evidence-led,
            and designed to clarify timing, sensitivity, access, policy, and
            liquidity before capital movement.
          </p>
        </div>

        <div className="mt-16 grid gap-px border border-[#2d2a22] bg-[#2d2a22] lg:grid-cols-[1.05fr_0.95fr]">
          <article className="bg-[#0b0b0a] p-7 sm:p-10 lg:p-12">
            <p className="text-xs uppercase text-[#b9a46d]">Featured memorandum</p>
            <h3 className="mt-10 max-w-3xl text-5xl font-semibold leading-[1.04] text-[#f4ead8] sm:text-6xl">
              Sohna Corridor Signals
            </h3>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-[#cfc5b3]">
              Access discipline, parcel quality, pricing restraint, and demand
              migration indicators across the southern expansion belt.
            </p>
            <a
              href={intelligenceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex rounded-full border border-[#bda56a]/45 px-6 py-4 text-sm font-medium text-[#f4ead8] transition duration-500 hover:border-[#d4c083] hover:bg-[#bda56a]/10"
            >
              Request Brief Access
            </a>
          </article>

          <div className="grid gap-px bg-[#2d2a22]">
            {reports.slice(1).map((report) => (
              <article
                key={report.title}
                className="group bg-[#10100e] p-7 transition duration-500 hover:bg-[#15140f] sm:p-8"
              >
                <p className="text-xs uppercase text-[#9d927f]">{report.code}</p>
                <h3 className="mt-6 text-3xl font-semibold leading-tight text-[#f4ead8]">
                  {report.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#afa492] transition duration-500 group-hover:text-[#d5cab8]">
                  {report.deck}
                </p>
                <div className="mt-7 h-px w-14 bg-[#bda56a]/60 transition-all duration-500 group-hover:w-24" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#2d2a22] bg-[#0d0d0c]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs uppercase text-[#b9a46d]">Strategic Evaluation Notes</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f4ead8] sm:text-6xl">
              Minimal case notes from private land review mandates.
            </h2>
          </div>

          <div className="mt-14 divide-y divide-[#2d2a22] border-y border-[#2d2a22]">
            {evaluationNotes.map((note) => (
              <article
                key={note.title}
                className="grid gap-6 py-9 transition duration-500 hover:bg-[#11100d] sm:px-4 lg:grid-cols-[0.2fr_0.38fr_0.42fr] lg:items-start"
              >
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

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs uppercase text-[#b9a46d]">Acquisition desk</p>
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
            className="mt-5 w-full rounded-full border border-[#bda56a]/55 bg-[#f4ead8]/[0.025] px-6 py-4 text-sm font-medium text-[#f4ead8] transition duration-500 hover:border-[#d4c083] hover:bg-[#bda56a]/10 sm:mt-6"
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
