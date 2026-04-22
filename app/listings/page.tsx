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

// ✅ CLEAN LABELS
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

// ✅ FILTERS
const FILTERS = [
  { label: "All", value: "ALL" },
  { label: "Farm House", value: "FARM_HOUSE" },
  { label: "Plots", value: "PLOTS" },
  { label: "Land", value: "LAND" },
  { label: "Commercial", value: "COMMERCIAL" },
  { label: "Residential", value: "RESIDENTIAL" },
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

// ✅ PRICE FORMAT
function formatPrice(price: number) {
  if (!price) return "";
  if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
  if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
  return `₹${price}`;
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
    return properties.filter((item) =>
      getFilterMatch(item.type, activeFilter)
    );
  }, [properties, activeFilter]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_30%)]">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
            Gurgaon Premium Advisory
          </p>

          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Curated Land & Investment Opportunities
          </h1>

          <p className="mt-5 max-w-3xl text-slate-300">
            Agriculture land, farmhouse investments, commercial land and high-potential deals across Gurgaon.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="mx-auto max-w-7xl px-4 mt-6">
        <div className="flex flex-wrap gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`rounded-full px-4 py-2 text-sm ${
                activeFilter === f.value
                  ? "bg-cyan-500 text-black"
                  : "border border-white/10 text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* LISTINGS */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        {filteredProperties.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-slate-400">
            No properties available.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProperties.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition hover:-translate-y-2 hover:border-cyan-300/30"
              >
                {/* IMAGE */}
                <div
                  className="h-60 bg-cover bg-center transition group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${item.imageUrls?.[0] || ""})`,
                  }}
                />

                <div className="p-6">

                  {/* BADGES */}
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

                  {/* TITLE */}
                  <h2 className="mt-4 text-2xl font-semibold">
                    {item.title}
                  </h2>

                  {/* LOCATION */}
                  <p className="mt-2 text-slate-400">
                    {item.location}, {item.city}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-sm text-slate-300 leading-7">
                    {item.description}
                  </p>

                  {/* DETAILS */}
                  <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-300">
                    {item.bedrooms > 0 && <div>Bedrooms: {item.bedrooms}</div>}
                    {item.bathrooms > 0 && <div>Bathrooms: {item.bathrooms}</div>}
                    {item.areaSqft > 0 && <div>Area: {item.areaSqft} sqft</div>}
                  </div>

                  {/* AMENITIES */}
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

                  {/* PRICE */}
                  <div className="mt-6 text-2xl font-bold text-cyan-300">
                    {formatPrice(item.priceInr)}
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex gap-3">
                    <a
                      href={`https://wa.me/919711667782?text=${encodeURIComponent(
                        `Hi, I am interested in this property:\n\n${item.title}\n${item.location}\nPrice: ₹${item.priceInr}\n\nPlease share full details.`
                      )}`}
                      target="_blank"
                      className="flex-1 rounded-xl bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-cyan-400"
                    >
                      WhatsApp
                    </a>

                    {item.videoUrl && (
                      <a
                        href={item.videoUrl}
                        target="_blank"
                        className="flex-1 rounded-xl border border-white/10 px-4 py-3 text-center text-sm"
                      >
                        Video
                      </a>
                    )}
                  </div>

                  {/* REQUEST BUTTON */}
                  <div className="mt-4">
                    <button
                      onClick={() =>
                        alert("Lead form coming next upgrade")
                      }
                      className="w-full rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-300 hover:bg-cyan-400/20"
                    >
                      Request Details
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}