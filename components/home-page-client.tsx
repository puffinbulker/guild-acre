"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";
import {
  Activity,
  BadgeCheck,
  Ban,
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
    title: "Private Land Intelligence",
    Icon: Compass,
  },
  {
    title: "Strategic Acquisition Advisory",
    Icon: FileSearch,
  },
  {
    title: "AI-Assisted Corridor Research",
    Icon: ShieldCheck,
  },
  {
    title: "Guild Verified\u2122 Evaluation",
    Icon: BadgeCheck,
  },
];

const rejectionPrinciples = [
  {
    title: "Broker-led urgency",
    text: "No pressure cycles, forwarded lists, or deadline theatre.",
  },
  {
    title: "Inventory-first logic",
    text: "We prioritize disciplined land selection over available stock.",
  },
  {
    title: "Weak diligence",
    text: "No movement without title, access, zoning, and risk context.",
  },
  {
    title: "Speculative noise",
    text: "No loud appreciation claims without corridor logic.",
  },
];

const coreFrameworks = [
  {
    title: "Guild Verified\u2122",
    Icon: BadgeCheck,
    text: "A structured verification discipline for title continuity, CLU, zoning, access, environment, and acquisition risk.",
  },
  {
    title: "Corridor Intelligence\u2122",
    Icon: MapPinned,
    text: "AI-assisted micro-market intelligence across Gurgaon fringe expansion, Sohna growth, Naugaon movement, and infrastructure impact.",
  },
  {
    title: "Land Risk Index\u2122",
    Icon: Radar,
    text: "A proprietary scoring lens for legal clarity, liquidity potential, growth probability, strategic positioning, and downside exposure.",
  },
];

const verifiedFramework = [
  {
    title: "Ownership Continuity",
    Icon: ShieldCheck,
    text: "Title-chain coherence, seller continuity, inheritance indicators, and documentation gaps.",
  },
  {
    title: "Legal Validation",
    Icon: Scale,
    text: "Registry, mutation, revenue record context, encumbrance signals, and counsel-led pathways.",
  },
  {
    title: "Zoning Intelligence",
    Icon: Radar,
    text: "Permissible use, policy direction, CLU relevance, and future-use constraints.",
  },
  {
    title: "Access Integrity",
    Icon: Route,
    text: "Approach roads, practical ingress, informal dependency, and long-term usability.",
  },
  {
    title: "Environmental Sensitivity",
    Icon: Leaf,
    text: "Aravali, forest, water body, green buffer, and ecological-risk indicators.",
  },
  {
    title: "Infrastructure Probability",
    Icon: Network,
    text: "Road, utility, institutional, and demand catalysts weighed against execution realism.",
  },
  {
    title: "Liquidity & Exit Logic",
    Icon: Activity,
    text: "Buyer depth, holding period realism, exit audience, and long-term relevance.",
  },
];

const seriousBuyers = [
  "HNIs",
  "NRIs",
  "Family offices",
  "Founders",
  "Strategic investors",
  "Long-term capital allocators",
];

const advisorySteps = [
  {
    title: "Mandate Clarity",
    text: "Capital range, holding logic, corridor preference, risk tolerance, and timing.",
  },
  {
    title: "Intelligence Review",
    text: "Micro-market movement, access, policy, environmental sensitivity, and liquidity context.",
  },
  {
    title: "Acquisition Direction",
    text: "A disciplined view on whether to proceed, pause, negotiate, or remain silent.",
  },
];

const curatedOpportunities = [
  {
    title: "Sohna Corridor Signals",
    code: "Signal Brief 01",
    deck: "Access discipline, parcel quality, pricing restraint, and demand migration.",
  },
  {
    title: "Gurgaon Expansion Watch",
    code: "Signal Brief 02",
    deck: "Edge-market pressure, infrastructure dependency, and acquisition timing.",
  },
  {
    title: "Aravali Sensitivity Review",
    code: "Risk Memorandum",
    deck: "Environmental, legal, and usability considerations near sensitive terrain.",
  },
  {
    title: "CLU Movement Tracker",
    code: "Policy Note",
    deck: "Change-of-land-use signals, policy friction, and viability context.",
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
          className="scale-[1.04] object-cover object-[center_54%] opacity-[0.4] [filter:saturate(0.54)_contrast(1.12)_brightness(0.56)_sepia(0.18)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,3,0.98)_0%,rgba(3,3,3,0.88)_36%,rgba(3,3,3,0.58)_66%,rgba(3,3,3,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.94)_0%,rgba(3,3,3,0.12)_30%,rgba(3,3,3,0.42)_68%,#040403_100%)]" />
        <div className="absolute inset-x-0 top-[28%] h-px bg-[linear-gradient(90deg,transparent,rgba(198,167,106,0.26),transparent)] opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-[linear-gradient(180deg,rgba(4,4,3,0)_0%,rgba(4,4,3,0.84)_56%,#040403_100%)]" />

        <div className="relative mx-auto grid min-h-[calc(92svh-88px)] max-w-[88rem] gap-16 px-5 py-20 sm:px-7 sm:py-24 lg:min-h-[calc(88svh-88px)] lg:grid-cols-[0.96fr_1.04fr] lg:px-10 lg:py-10 xl:gap-24">
          <div className="flex max-w-4xl flex-col justify-center">
            <p className="inline-flex items-center gap-4 text-[0.72rem] font-medium uppercase text-[#c9b276] sm:text-[0.82rem]">
              <span className="h-px w-10 bg-[#c6a76a]/55" />
              Gurugram&apos;s first AI-powered private land intelligence firm
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
            <p className="mt-4 max-w-[39rem] border-l border-[#c6a76a]/38 pl-5 text-sm leading-7 text-[#b8ad9b] sm:text-[0.98rem]">
              AI-assisted corridor intelligence and private land acquisition
              advisory across Gurgaon NCR, Sohna, and emerging growth corridors.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={consultationUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[2px] border border-[#c6a76a]/45 bg-[#f4ead8]/[0.018] px-8 py-4 text-center text-sm font-medium text-[#f5ead8] transition duration-700 hover:-translate-y-px hover:border-[#d4c083]/75 hover:bg-[#f4ead8]/[0.05]"
              >
                Request Private Consultation
              </a>

              <a
                href="#intelligence-briefs"
                className="rounded-[2px] border border-[#efe7d6]/12 bg-[#030303]/20 px-8 py-4 text-center text-sm font-medium text-[#cfc5b3] transition duration-700 hover:-translate-y-px hover:border-[#c6a76a]/50 hover:bg-[#f4ead8]/[0.035] hover:text-[#f4ead8]"
              >
                Access Intelligence Brief
              </a>
            </div>
          </div>

          <aside className="hidden items-end lg:flex lg:justify-end">
            <div className="relative w-full max-w-xl overflow-hidden border border-[#c6a76a]/16 bg-[#050505]/58 p-6 shadow-[0_42px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-8 lg:mb-10">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(212,192,131,0.46),transparent)]" />
              <div className="flex items-center justify-between gap-4 border-b border-[#2d2a22]/90 pb-6">
                <p className="text-xs uppercase text-[#c9b276]">Active intelligence desk</p>
                <span className="text-xs text-[#8f8678]">NCR / 2026</span>
              </div>

              <div className="divide-y divide-[#2d2a22]/90">
                {[
                  ["Gurgaon NCR", "Mature demand, land scarcity, micro-market pressure"],
                  ["Sohna", "Growth corridor review, parcel quality, access, liquidity"],
                  ["Naugaon", "Emerging movement, capital migration, early risk filters"],
                  ["Aravali Belt", "Sensitivity checks, use constraints, risk containment"],
                ].map(([title, text]) => (
                  <div key={title} className="group grid gap-5 py-7 sm:grid-cols-[0.36fr_0.64fr]">
                    <h2 className="text-[1.72rem] font-medium leading-[1.02] text-[#f4ead8] transition duration-700 group-hover:text-[#d4c083]">
                      {title}
                    </h2>
                    <p className="text-[0.92rem] leading-7 text-[#aaa08e] transition duration-700 group-hover:text-[#d0c4b1]">
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
                className="group flex min-h-36 items-start gap-4 bg-[#080807] p-6 transition duration-700 hover:bg-[#0d0d0b] sm:p-7"
              >
                <Icon className="mt-1 h-5 w-5 shrink-0 text-[#c6a76a] transition duration-700 group-hover:text-[#d4c083]" />
                <p className="max-w-56 text-base font-medium leading-7 text-[#f4ead8]">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-6 sm:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-36">
        <div>
          <p className="text-xs uppercase text-[#c9b276]">Private land intelligence office</p>
          <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f4ead8] sm:text-6xl">
            Intelligence before exposure. Discipline before movement.
          </h2>
        </div>

        <div className="space-y-7 text-lg leading-9 text-[#cfc5b3]">
          <p>
            Guild Acre operates as a private acquisition and intelligence desk
            for investors who need clarity before committing capital,
            reputation, or time.
          </p>
          <p className="text-[#b8ad9b]">
            We study corridor movement, title context, access, zoning,
            environmental sensitivity, infrastructure probability, and exit
            logic before conviction is formed.
          </p>
        </div>
      </section>

      <section className="border-y border-[#2d2a22] bg-[#090907]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs uppercase text-[#c9b276]">What We Reject</p>
              <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f4ead8] sm:text-6xl">
                We Do Not Push Inventory
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#b8ad9b]">
                Guild Acre is not a listing portal or property dealership. The
                desk exists for disciplined filtering, not transaction noise.
              </p>
            </div>

            <div className="grid gap-px border border-[#2d2a22] bg-[#2d2a22] sm:grid-cols-2">
              {rejectionPrinciples.map((item) => (
                <article
                  key={item.title}
                  className="group bg-[#0e0d0b] p-7 transition duration-700 hover:bg-[#13110d] sm:p-8"
                >
                  <Ban className="h-5 w-5 text-[#c6a76a] transition duration-700 group-hover:text-[#d4c083]" />
                  <h3 className="mt-8 text-3xl font-medium leading-tight text-[#f4ead8]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#afa492]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
          <div>
            <p className="text-xs uppercase text-[#c9b276]">Corridor Intelligence Framework</p>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f4ead8] sm:text-6xl">
              Three frameworks before any acquisition thesis.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-9 text-[#cfc5b3] lg:justify-self-end">
            AI-assisted research organizes signals. Final judgement remains
            contextual, strategic, and mandate-led.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {coreFrameworks.map((item) => {
            const Icon = item.Icon;

            return (
              <article
                key={item.title}
                className="group min-h-80 border border-[#2d2a22] bg-[#0b0b0a] p-8 transition duration-700 hover:-translate-y-1 hover:border-[#c6a76a]/38 hover:bg-[#11100d]"
              >
                <Icon className="h-6 w-6 text-[#c6a76a]" />
                <h3 className="mt-14 text-3xl font-medium leading-tight text-[#f4ead8]">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#afa492]">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#2d2a22] bg-[#0b0b0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,167,106,0.1),transparent_42%),linear-gradient(180deg,rgba(4,4,3,0)_0%,rgba(4,4,3,0.52)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase text-[#c9b276]">Guild Verified{"\u2122"}</p>
            <h2 className="mt-6 text-5xl font-medium leading-[1.02] text-[#f4ead8] sm:text-7xl">
              A structured land evaluation framework.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-[#cfc5b3]">
              A structured evaluation framework covering title continuity,
              zoning intelligence, CLU assessment, environmental sensitivity,
              access validation, infrastructure probability, and acquisition risk.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {verifiedFramework.map((item, index) => {
              const Icon = item.Icon;

              return (
                <article
                  key={item.title}
                  className="group min-h-[290px] border border-[#2d2a22] bg-[#10100e]/92 p-7 transition duration-700 hover:-translate-y-1 hover:border-[#c6a76a]/45 hover:bg-[#15140f] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <Icon className="h-6 w-6 text-[#c6a76a] transition duration-700 group-hover:text-[#d4c083]" />
                    <p className="font-[var(--font-editorial)] text-4xl text-[#2d2a22] transition duration-700 group-hover:text-[#c6a76a]/35">
                      0{index + 1}
                    </p>
                  </div>
                  <h3 className="mt-12 text-3xl font-medium leading-tight text-[#f4ead8]">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-[#afa492] transition duration-700 group-hover:text-[#d5cab8]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 sm:py-32 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div>
          <p className="text-xs uppercase text-[#c9b276]">Built for Serious Land Buyers</p>
          <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f4ead8] sm:text-6xl">
            Designed for capital that values discretion.
          </h2>
        </div>

        <div className="grid gap-px border border-[#2d2a22] bg-[#2d2a22] sm:grid-cols-2 lg:grid-cols-3">
          {seriousBuyers.map((buyer) => (
            <div
              key={buyer}
              className="min-h-28 bg-[#0b0b0a] p-6 text-lg font-medium text-[#f4ead8] transition duration-700 hover:bg-[#11100d]"
            >
              {buyer}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#2d2a22] bg-[#090907]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase text-[#c9b276]">Acquisition Advisory</p>
              <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f4ead8] sm:text-6xl">
                A quieter path from brief to conviction.
              </h2>
              <div className="mt-12 divide-y divide-[#2d2a22] border-y border-[#2d2a22]">
                {advisorySteps.map((step, index) => (
                  <article key={step.title} className="grid gap-5 py-7 sm:grid-cols-[0.18fr_0.82fr]">
                    <p className="font-[var(--font-editorial)] text-3xl text-[#c6a76a]/70">
                      0{index + 1}
                    </p>
                    <div>
                      <h3 className="text-3xl font-medium leading-tight text-[#f4ead8]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#afa492]">
                        {step.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div id="intelligence-briefs">
              <p className="text-xs uppercase text-[#c9b276]">Curated Opportunities</p>
              <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f4ead8] sm:text-6xl">
                Select intelligence notes, not an open market feed.
              </h2>
              <div className="mt-12 grid gap-px border border-[#2d2a22] bg-[#2d2a22]">
                {curatedOpportunities.map((report) => (
                  <article
                    key={report.title}
                    className="group bg-[#0f0e0c] p-7 transition duration-700 hover:bg-[#15140f] sm:p-8"
                  >
                    <p className="text-xs uppercase text-[#9d927f]">{report.code}</p>
                    <h3 className="mt-5 text-3xl font-medium leading-tight text-[#f4ead8]">
                      {report.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#afa492] transition duration-700 group-hover:text-[#d5cab8]">
                      {report.deck}
                    </p>
                    <div className="mt-6 h-px w-14 bg-[#c6a76a]/52 transition-all duration-700 group-hover:w-24" />
                  </article>
                ))}
              </div>
              <a
                href={intelligenceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-[2px] border border-[#c6a76a]/45 px-7 py-4 text-sm font-medium text-[#f4ead8] transition duration-700 hover:-translate-y-px hover:border-[#d4c083]/75 hover:bg-[#f4ead8]/[0.04]"
              >
                Request Brief Access
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-6 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs uppercase text-[#c9b276]">Why GuildAcre Exists</p>
          <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f4ead8] sm:text-6xl">
            Land acquisition needs a research desk, not a louder sales channel.
          </h2>
        </div>
        <div className="space-y-7 text-lg leading-9 text-[#cfc5b3]">
          <p>
            NCR land markets are opaque, relationship-led, and risk-sensitive.
            Serious buyers need an institution that can slow the process down.
          </p>
          <p className="text-[#b8ad9b]">
            Guild Acre exists to become India&apos;s leading AI-powered private
            land intelligence office for corridor-based acquisition advisory.
          </p>
        </div>
      </section>

      <section className="border-t border-[#2d2a22] bg-[#070706]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs uppercase text-[#c9b276]">Consultation Form</p>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f4ead8] sm:text-6xl">
              Submit an acquisition brief for confidential review.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#b8ad9b]">
              Share capital range, corridor, hold logic, and timing. We respond
              with fit, diligence direction, and whether a deeper mandate is
              sensible.
            </p>
          </div>

          <div className="border border-[#2d2a22] bg-[#0b0b0a] p-5 shadow-[0_36px_100px_rgba(0,0,0,0.28)] sm:p-7">
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
                  placeholder="Gurgaon NCR, Sohna, Naugaon"
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
              className="mt-5 w-full rounded-[2px] border border-[#c6a76a]/50 bg-[#f4ead8]/[0.025] px-6 py-4 text-sm font-medium text-[#f4ead8] transition duration-700 hover:-translate-y-px hover:border-[#d4c083]/80 hover:bg-[#f4ead8]/[0.055] sm:mt-6"
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
        </div>
      </section>
    </main>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block border border-[#2d2a22] bg-[#050505] p-4 transition duration-700 focus-within:border-[#c6a76a]/70">
      <span className="text-xs uppercase text-[#9d927f]">{label}</span>
      {children}
    </label>
  );
}
