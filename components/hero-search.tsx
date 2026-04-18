"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const listingTypes = ["Buy", "Rent", "Lease"];
const locations = [
  "Sohna Road",
  "Naugaon",
  "Dwarka Expressway",
  "Golf Course Extension Road",
  "New Gurgaon",
];
const propertyTypes = ["Farmhouse", "Land", "Builder Floor", "Commercial"];

export function HeroSearch() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedListingType, setSelectedListingType] = useState("Buy");
  const [selectedLocation, setSelectedLocation] = useState("Dwarka Expressway");
  const [selectedPropertyType, setSelectedPropertyType] = useState("Land");

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
      className="max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/30 backdrop-blur-2xl"
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by locality, corridor, land parcel, or asset type"
              className="h-14 w-full rounded-2xl border border-white/10 bg-[#091721]/85 pl-12 pr-4 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-200/40 focus:bg-[#0c1b26]"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setShowFilters((prev) => !prev)}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 text-sm font-medium text-white/90 backdrop-blur-md transition hover:bg-white/10"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filter Desk
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>

            <button
              type="button"
              className="h-14 rounded-2xl bg-gradient-to-r from-cyan-200/90 to-teal-200/80 px-6 text-sm font-semibold text-slate-900 transition hover:scale-[1.01]"
            >
              Shortlist
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid gap-3 border-t border-white/10 pt-3 md:grid-cols-3">
                <FilterSelect
                  label="Listing Type"
                  value={selectedListingType}
                  options={listingTypes}
                  onChange={setSelectedListingType}
                />
                <FilterSelect
                  label="Location"
                  value={selectedLocation}
                  options={locations}
                  onChange={setSelectedLocation}
                />
                <FilterSelect
                  label="Property Type"
                  value={selectedPropertyType}
                  options={propertyTypes}
                  onChange={setSelectedPropertyType}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

type FilterSelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: FilterSelectProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-slate-400">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded-2xl border border-white/10 bg-[#091721]/90 px-4 text-sm text-white outline-none transition focus:border-cyan-200/40"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#091721]">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
