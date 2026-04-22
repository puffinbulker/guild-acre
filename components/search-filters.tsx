"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  formatCollectionLabel,
  formatPropertyStatusLabel,
  formatPropertyTypeLabel,
} from "@/lib/utils";

type SearchFiltersProps = {
  locations: string[];
  current?: {
    collection?: string;
    search?: string;
    location?: string;
    type?: string;
    status?: string;
    minBudget?: string;
    maxBudget?: string;
  };
};

type FilterChipProps = {
  active: boolean;
  label: string;
  onClick: () => void;
};

const collectionOptions = [
  { value: "", label: "All Listings" },
  { value: "BUY", label: "Buy" },
  { value: "RENT", label: "Rent" },
  { value: "LEASE", label: "Lease" },
  { value: "LUXURY", label: "Luxury" },
  { value: "FLOORS", label: "Builder Floors" },
  { value: "COMMERCIAL", label: "Commercial" },
];

function FilterChip({ active, label, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      className={active ? "filter-chip filter-chip--active" : "filter-chip"}
      aria-pressed={active}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export function SearchFilters({ locations, current = {} }: SearchFiltersProps) {
  const router = useRouter();

  const [collection, setCollection] = useState(current.collection || "");
  const [location, setLocation] = useState(current.location || "");
  const [type, setType] = useState(current.type || "");
  const [status, setStatus] = useState(current.status || "");
  const [search, setSearch] = useState(current.search || "");

  const prominentLocations = useMemo(() => locations.slice(0, 6), [locations]);
  const featuredTypes = useMemo(
    () => ["APARTMENT_FLAT", "LOW_RISE", "HIGH_RISE", "BUILDER_FLOOR", "VILLA", "COMMERCIAL"],
    []
  );
  const featuredStatuses = useMemo(
    () => ["READY_TO_MOVE", "UNDER_CONSTRUCTION", "RESALE", "FOR_RENT", "FOR_LEASE"],
    []
  );

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (collection) params.set("collection", collection);
    if (location) params.set("location", location);
    if (type) params.set("type", type);
    if (status) params.set("status", status);
    if (search.trim()) params.set("search", search.trim());

    const query = params.toString();
    router.push(query ? `/listings?${query}` : "/listings");
  };

  return (
    <div className="filter-shell filter-shell--interactive">
      <div className="filter-search-row">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="filter-search"
          placeholder="Search sector, corridor, tower, or requirement"
          aria-label="Search listings"
        />

        <button type="button" className="button filter-submit" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="filter-group">
        <div className="filter-group__head">
          <span className="filter-group__label">Listing Type</span>
          <span className="filter-group__value">
            {collection ? formatCollectionLabel(collection) : "All Listings"}
          </span>
        </div>

        <div className="filter-chip-grid">
          {collectionOptions.map((option) => (
            <FilterChip
              key={option.label}
              active={collection === option.value}
              label={option.label}
              onClick={() => setCollection(option.value)}
            />
          ))}
        </div>
      </div>

      <div className="filter-group">
        <div className="filter-group__head">
          <span className="filter-group__label">Location</span>
          <span className="filter-group__value">{location || "Across Gurgaon"}</span>
        </div>

        <div className="filter-chip-grid">
          <FilterChip active={location === ""} label="All Gurgaon" onClick={() => setLocation("")} />
          {prominentLocations.map((item) => (
            <FilterChip
              key={item}
              active={location === item}
              label={item}
              onClick={() => setLocation(item)}
            />
          ))}
        </div>
      </div>

      <div className="filter-group">
        <div className="filter-group__head">
          <span className="filter-group__label">Property Type</span>
          <span className="filter-group__value">
            {type ? formatPropertyTypeLabel(type) : "Any property type"}
          </span>
        </div>

        <div className="filter-chip-grid">
          <FilterChip active={type === ""} label="All Types" onClick={() => setType("")} />
          {featuredTypes.map((item) => (
            <FilterChip
              key={item}
              active={type === item}
              label={formatPropertyTypeLabel(item)}
              onClick={() => setType(item)}
            />
          ))}
        </div>
      </div>

      <div className="filter-group">
        <div className="filter-group__head">
          <span className="filter-group__label">Availability</span>
          <span className="filter-group__value">
            {status ? formatPropertyStatusLabel(status) : "Any availability"}
          </span>
        </div>

        <div className="filter-chip-grid">
          <FilterChip active={status === ""} label="All Status" onClick={() => setStatus("")} />
          {featuredStatuses.map((item) => (
            <FilterChip
              key={item}
              active={status === item}
              label={formatPropertyStatusLabel(item)}
              onClick={() => setStatus(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
