"use client";

import { useEffect, useMemo, useState } from "react";

type Property = {
  id: string;
  title: string;
  description: string;
  priceInr: number;
  location: string;
  city: string;
  type: string;
  status: string;
  bedrooms: number;
  bathrooms: number;
  areaSqft: number;
  featured: boolean;
  imageUrls: string[];
  videoUrl: string;
  amenities: string[];
};

const TYPE_LABELS: Record<string, string> = {
  AGRICULTURE_LAND: "Agriculture Land",
  FARM_HOUSE: "Farm House",
  COMMERCIAL_LAND: "Commercial Land",
  LAND_FOR_WAREHOUSE: "Warehouse Land",
  LAND_FOR_LEASE: "Land for Lease",
  BUILDER_FLOOR: "Builder Floor",
  FLAT_APARTMENT: "Flat / Apartment",
  PLOTS: "Plots",
  VILLA: "Villa",
  DEEN_DAYAL_PLOTS_LAND: "Deen Dayal Plots / Land",
  AFFORDABLE_HOUSING: "Affordable Housing",
};

const STATUS_LABELS: Record<string, string> = {
  RAW: "Raw",
  SEMI_DEVELOPED: "Semi Developed",
  FULLY_DEVELOPED: "Fully Developed",
  FRESH: "Fresh",
  RESALE: "Resale",
  OPEN_FOR_LEASE: "Open for Lease",
  LEASED: "Leased",
};

const FILTERS = [
  { label: "Full Register", value: "ALL" },
  { label: "Rural / Farm Land", value: "FARM_HOUSE" },
  { label: "Plotted Land", value: "PLOTS" },
  { label: "Strategic Land", value: "LAND" },
  { label: "Commercial / Institutional", value: "COMMERCIAL" },
  { label: "Selective Built Assets", value: "RESIDENTIAL" },
];

const opportunityFaqs = [
  {
    question: "Is this the full opportunity universe?",
    answer:
      "No. This is a limited public register. Most land-led work begins privately once the buyer profile, corridor intent, and acquisition logic are understood.",
  },
  {
    question: "Can Guild Acre evaluate a private land brief?",
    answer:
      "Yes. A private brief is reviewed for geography, title context, access, zoning, infrastructure probability, and exit logic before any serious movement.",
  },
  {
    question: "Why are some opportunities not shown publicly?",
    answer:
      "Some opportunities require discretion because of seller preference, diligence sensitivity, timing, or the need to avoid casual market circulation.",
  },
];

function getFilterMatch(type: string, filter: string) {
  if (filter === "ALL") return true;

  if (filter === "LAND") {
    return [
      "AGRICULTURE_LAND",
      "COMMERCIAL_LAND",
      "LAND_FOR_WAREHOUSE",
      "LAND_FOR_LEASE",
    ].includes(type);
  }

  if (filter === "COMMERCIAL") {
    return ["COMMERCIAL_LAND", "LAND_FOR_WAREHOUSE"].includes(type);
  }

  if (filter === "RESIDENTIAL") {
    return [
      "FLAT_APARTMENT",
      "BUILDER_FLOOR",
      "VILLA",
      "AFFORDABLE_HOUSING",
    ].includes(type);
  }

  return type === filter;
}

function formatPrice(price: number) {
  if (!price) return "";
  if (price >= 10000000) return `Rs. ${(price / 10000000).toFixed(2)} Cr`;
  if (price >= 100000) return `Rs. ${(price / 100000).toFixed(2)} L`;
  return `Rs. ${price}`;
}

export default function StrategicOpportunitiesClient() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [activeFilter, setActiveFilter] = useState("ALL");

  useEffect(() => {
    fetch("/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(Array.isArray(data) ? data : []))
      .catch(() => setProperties([]));
  }, []);

  const filteredProperties = useMemo(() => {
    return properties.filter((item) => getFilterMatch(item.type, activeFilter));
  }, [properties, activeFilter]);

  return (
    <main className="min-h-screen bg-[#02070d] text-[#e8f0f2]">
      <section className="border-b border-[#16344a] bg-[#02070d]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <p className="text-xs uppercase text-[#86b8c8]">
            Strategic opportunities
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl lg:text-7xl">
            Public records are only the surface of the land intelligence process.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-9 text-[#b9cbd2]">
            This register shows limited approved opportunity records. Serious land
            acquisition work is handled through private briefs, diligence notes,
            and corridor-specific intelligence rather than catalogue browsing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-px overflow-hidden border border-[#16344a] bg-[#16344a] sm:grid-cols-3">
          <div>
            <div className="h-full bg-[#081725] p-6 sm:p-8">
            <p className="text-xs uppercase text-[#738a99]">
              Register role
            </p>
            <p className="mt-4 text-xl font-semibold text-[#f2efe7]">
              Records directional relevance, not public stock.
            </p>
            </div>
          </div>
          <div>
            <div className="h-full bg-[#081725] p-6 sm:p-8">
            <p className="text-xs uppercase text-[#738a99]">
              What it avoids
            </p>
            <p className="mt-4 text-xl font-semibold text-[#f2efe7]">
              Casual comparison behavior and open-market browsing.
            </p>
            </div>
          </div>
          <div>
            <div className="h-full bg-[#081725] p-6 sm:p-8">
            <p className="text-xs uppercase text-[#738a99]">
              Best next step
            </p>
            <p className="mt-4 text-xl font-semibold text-[#f2efe7]">
              Submit a brief and request a private intelligence note.
            </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-4 max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeFilter === f.value
                  ? "border border-[#7aaec1]/60 bg-[#7aaec1]/10 text-[#f2efe7]"
                  : "border border-[#e8f0f2]/10 text-[#e8f0f2] hover:border-[#7aaec1]/50 hover:bg-[#e8f0f2]/5"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
        {filteredProperties.length === 0 ? (
          <div className="border border-[#16344a] bg-[#081725] p-6 text-left text-[#b9cbd2] sm:p-8 lg:grid lg:grid-cols-[1fr_0.72fr] lg:gap-8">
            <div>
              <p className="text-xs uppercase text-[#86b8c8]">
                Intelligence desk
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#f2efe7] sm:text-4xl">
                No public record is available for this lens right now.
              </h2>
              <p className="mt-4 text-sm leading-7 sm:text-base sm:leading-8">
                Some land opportunities remain private until buyer fit, diligence
                direction, and seller discretion are aligned. Share a brief for a
                more relevant intelligence-led response.
              </p>
            </div>

            <div className="mt-6 border border-[#7aaec1]/20 bg-[#02070d] p-5 lg:mt-0">
              <p className="text-sm font-semibold text-[#f2efe7]">Request a private note</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Include capital range, corridor, hold logic, and timing so the
                review starts with useful context.
              </p>
              <a
                href="/acquisition-desk"
                className="mt-5 block rounded-full border border-[#7aaec1]/55 bg-[#f2efe7]/[0.025] px-5 py-3 text-center text-sm font-medium text-[#f2efe7] transition hover:border-[#a9d4df] hover:bg-[#7aaec1]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7aaec1]"
              >
                Submit Brief
              </a>
              <p className="mt-4 text-xs leading-5 text-slate-500">
                By enquiring, you agree to be contacted about your acquisition
                brief. See our Privacy Policy for details.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-5">
            {filteredProperties.map((item) => (
              <article
                key={item.id}
                className="group grid overflow-hidden border border-[#16344a] bg-[#081725] transition duration-500 hover:border-[#7aaec1]/50 md:grid-cols-[0.35fr_0.65fr]"
              >
                <div
                  className="min-h-64 bg-cover bg-center transition duration-700 group-hover:scale-[1.02]"
                  style={{
                    backgroundImage: `url(${item.imageUrls?.[0] || ""})`,
                  }}
                />

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap gap-2">
                    {item.featured && (
                      <span className="rounded-full bg-[#7aaec1]/10 px-3 py-1 text-xs text-[#a9d4df]">
                        Priority Record
                      </span>
                    )}

                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                      {TYPE_LABELS[item.type] || item.type}
                    </span>

                    {item.status && (
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                        {STATUS_LABELS[item.status] || item.status}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#f2efe7]">{item.title}</h2>

                  <p className="mt-2 text-slate-400">
                    {item.location}, {item.city}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[#b9cbd2]">
                    {item.description}
                  </p>

                  <div className="mt-6 grid gap-3 text-sm text-[#93aab6] sm:grid-cols-3">
                    {item.bedrooms > 0 && <div>Bedrooms {item.bedrooms}</div>}
                    {item.bathrooms > 0 && <div>Bathrooms {item.bathrooms}</div>}
                    {item.areaSqft > 0 && <div>{item.areaSqft} sqft</div>}
                  </div>

                  {item.amenities?.length > 0 && (
                    <div className="mt-5">
                      <div className="text-xs uppercase tracking-[0.2em] text-[#738a99]">
                        Context
                      </div>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.amenities.map((a, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-7 text-sm uppercase text-[#738a99]">
                    Indicative capital
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-[#a9d4df]">
                    {formatPrice(item.priceInr)}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`https://wa.me/919711667782?text=${encodeURIComponent(
                        `Hi Guild Acre, I want to request an intelligence note for:\n\n${item.title}\n${item.location}\nIndicative capital: Rs. ${item.priceInr}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-full border border-[#7aaec1]/55 bg-[#f2efe7]/[0.025] px-4 py-3 text-center text-sm font-medium text-[#f2efe7] transition hover:border-[#a9d4df] hover:bg-[#7aaec1]/10"
                    >
                      Request Intelligence Note
                    </a>

                    {item.videoUrl && (
                      <a
                        href={item.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-full border border-[#e8f0f2]/10 px-4 py-3 text-center text-sm text-[#b9cbd2] transition hover:border-[#7aaec1]/45 hover:text-[#f2efe7]"
                      >
                        View Visual Context
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase text-[#86b8c8]">
            Register notes
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Questions before a private intelligence review.
          </h2>
        </div>

        <div className="mt-8 space-y-4">
          {opportunityFaqs.map((item) => (
            <div
              key={item.question}
              className="border border-[#16344a] bg-[#081725] p-6 sm:p-7"
            >
              <h3 className="text-2xl font-semibold text-[#f2efe7]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-[#93aab6] sm:text-base sm:leading-8">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
