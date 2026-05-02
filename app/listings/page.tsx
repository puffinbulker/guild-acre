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
  { label: "All", value: "ALL" },
  { label: "Farm House", value: "FARM_HOUSE" },
  { label: "Plots", value: "PLOTS" },
  { label: "Land", value: "LAND" },
  { label: "Commercial", value: "COMMERCIAL" },
  { label: "Residential", value: "RESIDENTIAL" },
];

const listingFaqs = [
  {
    question: "Are all opportunities shown here the full available inventory?",
    answer:
      "No. This page is a public-facing shortlist. Some opportunities are discussed privately depending on buyer fit, timing, and requirement quality.",
  },
  {
    question: "Can Guild Acre help narrow the right options for my brief?",
    answer:
      "Yes. The best use of this page is usually to get a feel for category and pricing, then move into a more filtered shortlist based on your actual objective.",
  },
  {
    question: "Do you only handle land and farmhouse deals?",
    answer:
      "Land, farmhouse, and plotted opportunities are core strengths, but selective premium residential and corridor-led requirements are also handled.",
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

export default function ListingsPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [activeFilter, setActiveFilter] = useState("ALL");

  useEffect(() => {
    fetch("/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  const filteredProperties = useMemo(() => {
    return properties.filter((item) => getFilterMatch(item.type, activeFilter));
  }, [properties, activeFilter]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_30%)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
            Curated Listings Desk
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Filtered property opportunities for serious Gurgaon and NCR buyers.
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Explore a public-facing shortlist across land, farmhouse, plotted,
            commercial, and selective residential categories. This is designed
            to help you scan the market more cleanly before moving into a more
            focused advisory shortlist.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 lg:py-4">
        <div className="grid gap-4 rounded-[28px] border border-white/10 bg-white/5 p-6 sm:grid-cols-3 sm:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
              What this page does best
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              Helps you compare categories and price positioning.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
              What it does not replace
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              A filtered shortlist built around your exact use case.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
              Best next step
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              Shortlist the right options, then move into private advisory.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeFilter === f.value
                  ? "bg-cyan-500 text-slate-950"
                  : "border border-white/10 text-white hover:bg-white/5"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {filteredProperties.length === 0 ? (
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center text-slate-300">
            No public-facing opportunities are showing in this category right
            now. If your requirement is specific, private matching may still be
            available on enquiry.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProperties.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 transition hover:-translate-y-2 hover:border-cyan-300/30"
              >
                <div
                  className="h-60 bg-cover bg-center transition group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${item.imageUrls?.[0] || ""})`,
                  }}
                />

                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {item.featured && (
                      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                        Featured
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

                  <h2 className="mt-4 text-2xl font-semibold">{item.title}</h2>

                  <p className="mt-2 text-slate-400">
                    {item.location}, {item.city}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-300">
                    {item.bedrooms > 0 && <div>Bedrooms: {item.bedrooms}</div>}
                    {item.bathrooms > 0 && <div>Bathrooms: {item.bathrooms}</div>}
                    {item.areaSqft > 0 && <div>Area: {item.areaSqft} sqft</div>}
                  </div>

                  {item.amenities?.length > 0 && (
                    <div className="mt-5">
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        Amenities
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

                  <div className="mt-6 text-2xl font-bold text-cyan-300">
                    {formatPrice(item.priceInr)}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={`https://wa.me/919711667782?text=${encodeURIComponent(
                        `Hi, I am interested in this property:\n\n${item.title}\n${item.location}\nPrice: Rs. ${item.priceInr}\n\nPlease share full details.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-xl bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-cyan-400"
                    >
                      WhatsApp
                    </a>

                    {item.videoUrl && (
                      <a
                        href={item.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-xl border border-white/10 px-4 py-3 text-center text-sm"
                      >
                        Video
                      </a>
                    )}
                  </div>

                  <div className="mt-4">
                    <a
                      href="/contact"
                      className="block w-full rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-3 text-center text-sm text-cyan-300 hover:bg-cyan-400/20"
                    >
                      Request Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
            Listings FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Common questions about the public shortlist.
          </h2>
        </div>

        <div className="mt-8 space-y-4">
          {listingFaqs.map((item) => (
            <div
              key={item.question}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 sm:rounded-[28px] sm:p-7"
            >
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
