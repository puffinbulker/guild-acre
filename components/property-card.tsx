"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bath, BedDouble, MapPin, Maximize2 } from "lucide-react";
import type { PropertyRecord } from "@/types";
import {
  formatCompactPrice,
  formatPropertyStatusLabel,
  formatPropertyTypeLabel,
  parseJsonArray,
} from "@/lib/utils";

export type Property = {
  id: string;
  slug?: string;
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  area: string;
  status: string;
  featured?: boolean;
};

type PropertyCardValue = Property | PropertyRecord;

export function PropertyCard({ property }: { property: PropertyCardValue }) {
  const card = normalizePropertyCard(property);

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur-xl"
    >
      <div className="relative aspect-[4/4.8] overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061017] via-[#061017]/20 to-transparent" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {card.featured && <GlassTag label="Featured" />}
          <GlassTag label={card.status} />
          {card.type ? <GlassTag label={card.type} /> : null}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-slate-300">
                  <MapPin className="h-4 w-4" />
                  {card.location}
                </p>
              </div>

              <p className="shrink-0 text-lg font-semibold text-white">
                {card.price}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              {card.beds ? (
                <MetaItem
                  icon={<BedDouble className="h-4 w-4" />}
                  value={`${card.beds} Beds`}
                />
              ) : null}
              {card.baths ? (
                <MetaItem
                  icon={<Bath className="h-4 w-4" />}
                  value={`${card.baths} Baths`}
                />
              ) : null}
              <MetaItem
                icon={<Maximize2 className="h-4 w-4" />}
                value={card.area}
              />
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <Link
                href={card.href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-md transition hover:bg-white/10"
              >
                View Details
              </Link>

              <button className="rounded-full px-4 py-2 text-sm font-medium text-cyan-200 transition hover:text-white">
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function normalizePropertyCard(property: PropertyCardValue) {
  if ("priceInr" in property) {
    const image = parseJsonArray(property.imageUrls)[0] ||
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop";

    return {
      href: `/properties/${property.slug}`,
      title: property.title,
      location: property.location,
      price: formatCompactPrice(property.priceInr),
      image,
      beds: property.bedrooms || 0,
      baths: property.bathrooms || 0,
      area: `${property.areaSqft.toLocaleString("en-IN")} sq.ft.`,
      status: formatPropertyStatusLabel(property.status),
      type: formatPropertyTypeLabel(property.type),
      featured: property.featured,
    };
  }

  return {
    href: property.slug ? `/properties/${property.slug}` : "/listings",
    title: property.title,
    location: property.location,
    price: property.price,
    image: property.image,
    beds: property.beds,
    baths: property.baths,
    area: property.area,
    status: property.status,
    type: "",
    featured: property.featured || false,
  };
}

function GlassTag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-xl">
      {label}
    </span>
  );
}

function MetaItem({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
      {icon}
      {value}
    </span>
  );
}
