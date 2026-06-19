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
    title: "Research-Led Corridor Intelligence",
    Icon: ShieldCheck,
  },
  {
    title: "Guild Verified\u2122 Evaluation",
    Icon: BadgeCheck,
  },
];

const rejectionPrinciples = [
  {
    title: "Suitability",
    text: "Is the parcel appropriate for the buyer's capital intent, timeline, and risk profile?",
  },
  {
    title: "Risk Profile",
    text: "What title, access, regulatory, and liquidity risks must be understood before movement?",
  },
  {
    title: "Holding Horizon",
    text: "Does the opportunity match a realistic five-to-twelve-year land acquisition thesis?",
  },
  {
    title: "Acquisition Objective",
    text: "Is the mandate preservation, strategic aggregation, lifestyle use, or long-term appreciation?",
  },
];

const coreFrameworks = [
  {
    title: "Guild Verified\u2122",
    Icon: BadgeCheck,
    text: "A structured verification discipline for title visibility, revenue records, CLU, zoning, access, environment, and acquisition risk.",
  },
  {
    title: "Corridor Intelligence\u2122",
    Icon: MapPinned,
    text: "Research-led micro-market intelligence across Gurgaon NCR, Pataudi, Farrukhnagar, Rewari, Narnaul, and Mahendergarh growth corridors.",
  },
  {
    title: "Land Risk Index\u2122",
    Icon: Radar,
    text: "A scoring lens for legal clarity, liquidity depth, growth probability, strategic positioning, and downside exposure.",
  },
];

const verifiedFramework = [
  {
    title: "Title Visibility",
    Icon: ShieldCheck,
    text: "Traceability of ownership chain, seller continuity, inheritance indicators, and documentation gaps.",
  },
  {
    title: "Revenue Record Clarity",
    Icon: Scale,
    text: "Khasra, Khatauni, Jamabandi, mutation status, encumbrance signals, and counsel-led pathways.",
  },
  {
    title: "CLU & Zoning Probability",
    Icon: Radar,
    text: "Current land use, master plan context, conversion probability, and future-use constraints.",
  },
  {
    title: "Access-Road Legality",
    Icon: Route,
    text: "Recorded approach, practical ingress, informal dependencies, and long-term usability.",
  },
  {
    title: "Environmental Sensitivity",
    Icon: Leaf,
    text: "Water, green buffer, industrial adjacency, logistics impact, and ecological-risk indicators.",
  },
  {
    title: "Infrastructure Movement",
    Icon: Network,
    text: "Road, utility, institutional, and demand catalysts weighed against execution certainty.",
  },
  {
    title: "Liquidity Depth",
    Icon: Activity,
    text: "Buyer depth, transaction velocity, exit audience, and holding-period realism.",
  },
  {
    title: "Acquisition Risk",
    Icon: FileSearch,
    text: "Aggregated legal, regulatory, access, market, and execution risk before recommendation.",
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
    text: "Capital range, holding logic, corridor preference, risk tolerance, and timing are defined first.",
  },
  {
    title: "Intelligence Review",
    text: "Micro-market movement, revenue records, access, policy, environmental sensitivity, and liquidity context.",
  },
  {
    title: "Acquisition Direction",
    text: "A disciplined view on whether to proceed, pause, negotiate, or remain silent.",
  },
];

const curatedOpportunities = [
  {
    title: "Pataudi Growth Corridor Signals",
    code: "Signal Brief 01",
    deck: "Gurgaon spillover, highway access, CLU context, and plotted development risk.",
  },
  {
    title: "Farrukhnagar Logistics Watch",
    code: "Signal Brief 02",
    deck: "Warehousing demand, road-width logic, zoning fit, and title-chain quality.",
  },
  {
    title: "Rewari Industrial Influence Review",
    code: "Risk Memorandum",
    deck: "Bawal-Dharuhera-Manesar influence, mutation clarity, and master-plan alignment.",
  },
  {
    title: "Narnaul-Mahendergarh Long-Hold Tracker",
    code: "Policy Note",
    deck: "Freight corridor probability, infrastructure availability, water, power, and liquidity.",
  },
];

const growthCorridors = [
  {
    title: "Gurgaon NCR",
    driver: "HNI land advisory, plotted development, farmhouse and strategic land acquisition.",
    risk: "Entry discipline, title clarity, zoning fit, and realistic exit depth.",
    investor: "HNIs, family offices, founders, and strategic land buyers.",
  },
  {
    title: "Pataudi",
    driver: "Gurgaon spillover growth with highway-led residential and plotted opportunity.",
    risk: "CLU, controlled area implications, access-road legality, and acquisition risk.",
    investor: "Long-horizon investors seeking early corridor positioning.",
  },
  {
    title: "Farrukhnagar",
    driver: "Logistics, warehousing, and industrial expansion potential.",
    risk: "Zoning, road width, land-use fit, and title-chain continuity.",
    investor: "Industrial land buyers, warehousing operators, and strategic allocators.",
  },
  {
    title: "Rewari",
    driver: "Industrial and transport-linked growth influenced by Bawal, Dharuhera, and Manesar.",
    risk: "Mutation, registry chain, sector alignment, and master-plan fit.",
    investor: "Industrial-growth investors and disciplined land-bank buyers.",
  },
  {
    title: "Narnaul",
    driver: "Long-term logistics and freight corridor opportunity with Nangal Chaudhary influence.",
    risk: "Project timeline, water, power, access quality, and resale liquidity.",
    investor: "Patient capital and long-horizon logistics corridor investors.",
  },
  {
    title: "Mahendergarh",
    driver: "Selective long-term land banking with education, agri, and logistics-support potential.",
    risk: "Liquidity, infrastructure availability, clear title, and exit audience depth.",
    investor: "Conservative land-bank investors with long holding capacity.",
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
    <main className="min-h-screen bg-[#02070d] text-[#e8f0f2]">
      <section className="relative min-h-[calc(92svh-88px)] overflow-hidden border-b border-[#142f45] bg-[#010814] lg:min-h-[calc(88svh-88px)]">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=82"
          alt="Cinematic land horizon in low light"
          fill
          priority
          sizes="100vw"
          className="scale-[1.04] object-cover object-[center_54%] opacity-[0.42] [filter:saturate(0.48)_contrast(1.18)_brightness(0.48)_hue-rotate(176deg)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,8,18,0.98)_0%,rgba(3,15,27,0.9)_36%,rgba(5,26,42,0.58)_66%,rgba(1,8,18,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,8,18,0.95)_0%,rgba(3,19,33,0.12)_30%,rgba(4,20,34,0.48)_68%,#02070d_100%)]" />
        <div className="absolute inset-x-0 top-[28%] h-px bg-[linear-gradient(90deg,transparent,rgba(127,183,202,0.28),transparent)] opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-[linear-gradient(180deg,rgba(2,7,13,0)_0%,rgba(2,9,16,0.86)_56%,#02070d_100%)]" />

        <div className="relative mx-auto grid min-h-[calc(92svh-88px)] max-w-[88rem] gap-16 px-5 py-20 sm:px-7 sm:py-24 lg:min-h-[calc(88svh-88px)] lg:grid-cols-[0.96fr_1.04fr] lg:px-10 lg:py-10 xl:gap-24">
          <div className="flex max-w-4xl flex-col justify-center">
            <p className="inline-flex items-center gap-4 text-[0.72rem] font-medium uppercase text-[#8fbfcd] sm:text-[0.82rem]">
              <span className="h-px w-10 bg-[#7fb7ca]/55" />
              Gurgaon NCR & Emerging Haryana Corridors
            </p>

            <h1
              aria-label="Private Land Intelligence and Acquisition Desk for Gurgaon NCR and emerging Haryana corridors."
              className="mt-6 max-w-4xl text-[2.72rem] font-medium leading-[1.02] text-[#f6f2e8] sm:text-[3.85rem] lg:text-[4.1rem] xl:text-[4.25rem]"
            >
              <span className="block">Private Land</span>
              {" "}
              <span className="block">Intelligence & Acquisition</span>
              {" "}
              <span className="block">for Gurgaon NCR &</span>
              {" "}
              <span className="block text-[#b8dbe3]">Emerging Haryana Corridors.</span>
            </h1>

            <p className="mt-7 max-w-[42rem] text-[1.02rem] leading-8 text-[#c8d7da] sm:text-[1.14rem] sm:leading-9">
              Private Land Intelligence & Acquisition Desk for Gurgaon NCR
              and emerging Haryana corridors.
            </p>
            <p className="mt-4 max-w-[39rem] border-l border-[#7fb7ca]/38 pl-5 text-sm leading-7 text-[#93aab6] sm:text-[0.98rem]">
              Guild Acre helps HNIs, family offices, and serious investors
              evaluate land opportunities across Gurgaon NCR, Pataudi,
              Farrukhnagar, Rewari, Narnaul, and Mahendergarh through verified
              intelligence, risk screening, and acquisition strategy.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={consultationUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[2px] border border-[#7fb7ca]/45 bg-[#f2efe7]/[0.018] px-8 py-4 text-center text-sm font-medium text-[#f2efe7] transition duration-700 hover:-translate-y-px hover:border-[#a9d4df]/75 hover:bg-[#f2efe7]/[0.05]"
              >
                Request Private Consultation
              </a>

              <a
                href="/intelligence-reports"
                className="rounded-[2px] border border-[#e8f0f2]/12 bg-[#010814]/20 px-8 py-4 text-center text-sm font-medium text-[#b9cbd2] transition duration-700 hover:-translate-y-px hover:border-[#7fb7ca]/50 hover:bg-[#f2efe7]/[0.035] hover:text-[#f2efe7]"
              >
                Access Intelligence Brief
              </a>
            </div>
          </div>

          <aside className="hidden items-end lg:flex lg:justify-end">
            <div className="relative w-full max-w-xl overflow-hidden border border-[#7fb7ca]/16 bg-[#02070d]/58 p-6 shadow-[0_42px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-8 lg:mb-10">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(212,192,131,0.46),transparent)]" />
              <div className="flex items-center justify-between gap-4 border-b border-[#16344a]/90 pb-6">
                <p className="text-xs uppercase text-[#8fbfcd]">Active intelligence desk</p>
                <span className="text-xs text-[#6b7f8d]">NCR / 2026</span>
              </div>

              <div className="divide-y divide-[#16344a]/90">
                {[
                  ["Gurgaon NCR", "Demand depth, scarcity, micro-market pressure"],
                  ["Pataudi", "Gurgaon spillover, CLU context, controlled-area review"],
                  ["Farrukhnagar", "Logistics corridor, warehousing pull, road-width diligence"],
                  ["Rewari", "Industrial influence, mutation clarity, master-plan alignment"],
                  ["Narnaul", "Freight corridor timing, access, water, power, liquidity"],
                  ["Mahendergarh", "Selective land banking, clear title, infrastructure availability"],
                ].map(([title, text]) => (
                  <div key={title} className="group grid gap-5 py-7 sm:grid-cols-[0.36fr_0.64fr]">
                    <h2 className="text-[1.72rem] font-medium leading-[1.02] text-[#f2efe7] transition duration-700 group-hover:text-[#a9d4df]">
                      {title}
                    </h2>
                    <p className="text-[0.92rem] leading-7 text-[#8197a4] transition duration-700 group-hover:text-[#c3d4da]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-[#16344a] bg-[#06111c]">
        <div className="mx-auto grid max-w-7xl gap-px border-x border-[#16344a] bg-[#16344a] sm:grid-cols-2 lg:grid-cols-4">
          {trustLayer.map((item) => {
            const Icon = item.Icon;

            return (
              <div
                key={item.title}
                className="group flex min-h-36 items-start gap-4 bg-[#06111c] p-6 transition duration-700 hover:bg-[#0b2233] sm:p-7"
              >
                <Icon className="mt-1 h-5 w-5 shrink-0 text-[#7fb7ca] transition duration-700 group-hover:text-[#a9d4df]" />
                <p className="max-w-56 text-base font-medium leading-7 text-[#f2efe7]">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
          <div>
            <p className="text-xs uppercase text-[#8fbfcd]">Corridor mapping</p>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f2efe7] sm:text-6xl">
              Emerging Haryana Growth Corridors We Track
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-9 text-[#b9cbd2] lg:justify-self-end">
            Each market is studied through growth driver, risk factor, title
            and CLU review, infrastructure visibility, and investor suitability.
          </p>
        </div>

        <div className="mt-16 grid gap-px border border-[#16344a] bg-[#16344a] md:grid-cols-2 xl:grid-cols-3">
          {growthCorridors.map((item) => (
            <article
              key={item.title}
              className="min-h-[330px] bg-[#081725] p-7 transition duration-700 hover:bg-[#10283b] sm:p-8"
            >
              <h3 className="text-3xl font-medium leading-tight text-[#f2efe7]">
                {item.title}
              </h3>
              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-xs uppercase text-[#8fbfcd]">Growth Driver</p>
                  <p className="mt-2 text-sm leading-7 text-[#c7d8de]">{item.driver}</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-[#8fbfcd]">Risk Factor</p>
                  <p className="mt-2 text-sm leading-7 text-[#93aab6]">{item.risk}</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-[#8fbfcd]">Ideal Investor Type</p>
                  <p className="mt-2 text-sm leading-7 text-[#93aab6]">{item.investor}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-6 sm:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-36">
        <div>
          <p className="text-xs uppercase text-[#8fbfcd]">Private land intelligence office</p>
          <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f2efe7] sm:text-6xl">
            Intelligence before exposure. Discipline before movement.
          </h2>
        </div>

        <div className="space-y-7 text-lg leading-9 text-[#b9cbd2]">
          <p>
            Guild Acre operates as a Private Land Intelligence & Acquisition
            Desk for investors who need clarity before committing capital,
            reputation, or time.
          </p>
          <p className="text-[#93aab6]">
            We study corridor mapping, title and CLU review, access, land-use
            context, infrastructure probability, and resale liquidity before
            conviction is formed.
          </p>
        </div>
      </section>

      <section className="border-y border-[#16344a] bg-[#071522]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs uppercase text-[#8fbfcd]">What We Reject</p>
              <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f2efe7] sm:text-6xl">
                We Do Not Push Inventory
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#93aab6]">
                Guild Acre is not designed around maximum listing volume. We
                work with selected buyers and evaluate land by suitability,
                risk profile, holding horizon, and acquisition objective.
              </p>
            </div>

            <div className="grid gap-px border border-[#16344a] bg-[#16344a] sm:grid-cols-2">
              {rejectionPrinciples.map((item) => (
                <article
                  key={item.title}
                  className="group bg-[#0a1c2b] p-7 transition duration-700 hover:bg-[#123149] sm:p-8"
                >
                  <Ban className="h-5 w-5 text-[#7fb7ca] transition duration-700 group-hover:text-[#a9d4df]" />
                  <h3 className="mt-8 text-3xl font-medium leading-tight text-[#f2efe7]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#899eaa]">
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
            <p className="text-xs uppercase text-[#8fbfcd]">Corridor Intelligence Framework</p>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f2efe7] sm:text-6xl">
              Three frameworks before any acquisition thesis.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-9 text-[#b9cbd2] lg:justify-self-end">
            Methodology before inventory. Structured research organizes
            signals; final judgement remains contextual, strategic, and
            mandate-led.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {coreFrameworks.map((item) => {
            const Icon = item.Icon;

            return (
              <article
                key={item.title}
                className="group min-h-80 border border-[#16344a] bg-[#081725] p-8 transition duration-700 hover:-translate-y-1 hover:border-[#7fb7ca]/38 hover:bg-[#10283b]"
              >
                <Icon className="h-6 w-6 text-[#7fb7ca]" />
                <h3 className="mt-14 text-3xl font-medium leading-tight text-[#f2efe7]">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#899eaa]">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#16344a] bg-[#081725]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(127,183,202,0.13),transparent_42%),linear-gradient(180deg,rgba(2,7,13,0)_0%,rgba(2,7,13,0.58)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase text-[#8fbfcd]">Guild Verified{"\u2122"}</p>
            <h2 className="mt-6 text-5xl font-medium leading-[1.02] text-[#f2efe7] sm:text-7xl">
              A structured land evaluation framework.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-[#b9cbd2]">
              A structured evaluation framework covering title visibility,
              revenue records, CLU probability, zoning, environmental
              sensitivity, access-road legality, infrastructure movement,
              liquidity depth, and acquisition risk.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {verifiedFramework.map((item, index) => {
              const Icon = item.Icon;

              return (
                <article
                  key={item.title}
                  className="group min-h-[290px] border border-[#16344a] bg-[#0d2030]/92 p-7 transition duration-700 hover:-translate-y-1 hover:border-[#7fb7ca]/45 hover:bg-[#14344b] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <Icon className="h-6 w-6 text-[#7fb7ca] transition duration-700 group-hover:text-[#a9d4df]" />
                    <p className="font-[var(--font-editorial)] text-4xl text-[#16344a] transition duration-700 group-hover:text-[#7fb7ca]/35">
                      0{index + 1}
                    </p>
                  </div>
                  <h3 className="mt-12 text-3xl font-medium leading-tight text-[#f2efe7]">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-[#899eaa] transition duration-700 group-hover:text-[#c7d8de]">
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
          <p className="text-xs uppercase text-[#8fbfcd]">Built for Serious Land Buyers</p>
          <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f2efe7] sm:text-6xl">
            Designed for capital that values discretion.
          </h2>
        </div>

        <div className="grid gap-px border border-[#16344a] bg-[#16344a] sm:grid-cols-2 lg:grid-cols-3">
          {seriousBuyers.map((buyer) => (
            <div
              key={buyer}
              className="min-h-28 bg-[#081725] p-6 text-lg font-medium text-[#f2efe7] transition duration-700 hover:bg-[#10283b]"
            >
              {buyer}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#16344a] bg-[#071522]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase text-[#8fbfcd]">Acquisition Advisory</p>
              <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f2efe7] sm:text-6xl">
                A quieter path from brief to conviction.
              </h2>
              <div className="mt-12 divide-y divide-[#16344a] border-y border-[#16344a]">
                {advisorySteps.map((step, index) => (
                  <article key={step.title} className="grid gap-5 py-7 sm:grid-cols-[0.18fr_0.82fr]">
                    <p className="font-[var(--font-editorial)] text-3xl text-[#7fb7ca]/70">
                      0{index + 1}
                    </p>
                    <div>
                      <h3 className="text-3xl font-medium leading-tight text-[#f2efe7]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#899eaa]">
                        {step.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div id="intelligence-briefs">
              <p className="text-xs uppercase text-[#8fbfcd]">Intelligence Reports</p>
              <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f2efe7] sm:text-6xl">
                Select intelligence notes, not an open market feed.
              </h2>
              <div className="mt-12 grid gap-px border border-[#16344a] bg-[#16344a]">
                {curatedOpportunities.map((report) => (
                  <article
                    key={report.title}
                    className="group bg-[#0a1d2e] p-7 transition duration-700 hover:bg-[#14344b] sm:p-8"
                  >
                    <p className="text-xs uppercase text-[#738a99]">{report.code}</p>
                    <h3 className="mt-5 text-3xl font-medium leading-tight text-[#f2efe7]">
                      {report.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#899eaa] transition duration-700 group-hover:text-[#c7d8de]">
                      {report.deck}
                    </p>
                    <div className="mt-6 h-px w-14 bg-[#7fb7ca]/52 transition-all duration-700 group-hover:w-24" />
                  </article>
                ))}
              </div>
              <a
                href="/intelligence-reports"
                className="mt-8 inline-flex rounded-[2px] border border-[#7fb7ca]/45 px-7 py-4 text-sm font-medium text-[#f2efe7] transition duration-700 hover:-translate-y-px hover:border-[#a9d4df]/75 hover:bg-[#f2efe7]/[0.04]"
              >
                View Restricted Reports
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-6 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs uppercase text-[#8fbfcd]">Why GuildAcre Exists</p>
          <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f2efe7] sm:text-6xl">
            Land acquisition needs a research desk, not a louder sales channel.
          </h2>
        </div>
        <div className="space-y-7 text-lg leading-9 text-[#b9cbd2]">
          <p>
            NCR land markets are opaque, relationship-led, and risk-sensitive.
            Serious buyers need an institution that can slow the process down
            and reject opportunities before they create exposure.
          </p>
          <p className="text-[#93aab6]">
            Guild Acre exists to become India&apos;s leading private land
            intelligence office for corridor-based acquisition advisory.
          </p>
        </div>
      </section>

      <section className="border-t border-[#16344a] bg-[#04101b]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-6 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs uppercase text-[#8fbfcd]">Consultation Form</p>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-[#f2efe7] sm:text-6xl">
              Submit an acquisition brief for confidential review.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#93aab6]">
              Share capital range, corridor, hold logic, and timing. We respond
              with fit, diligence direction, and whether a deeper mandate is
              sensible.
            </p>
          </div>

          <div className="border border-[#16344a] bg-[#081725] p-5 shadow-[0_36px_100px_rgba(0,0,0,0.28)] sm:p-7">
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
                  placeholder="Gurgaon NCR, Pataudi, Farrukhnagar"
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
              className="mt-5 w-full rounded-[2px] border border-[#7fb7ca]/50 bg-[#f2efe7]/[0.025] px-6 py-4 text-sm font-medium text-[#f2efe7] transition duration-700 hover:-translate-y-px hover:border-[#a9d4df]/80 hover:bg-[#f2efe7]/[0.055] sm:mt-6"
            >
              Request Private Consultation
            </button>

            <p className="mt-4 text-xs leading-6 text-[#6f8391]">
              Submitted briefs are used only to assess fit for a private
              consultation. Read our{" "}
              <a href="/privacy-policy" className="text-[#a9d4df] underline underline-offset-4">
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
    <label className="block border border-[#16344a] bg-[#02070d] p-4 transition duration-700 focus-within:border-[#7fb7ca]/70">
      <span className="text-xs uppercase text-[#738a99]">{label}</span>
      {children}
    </label>
  );
}
