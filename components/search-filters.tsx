import { PROPERTY_STATUSES, PROPERTY_TYPES } from "@/lib/constants";

type Props = {
  locations: string[];
  current: Record<string, string | undefined>;
};

const collections = [
  { value: "", label: "All Gurgaon listings" },
  { value: "BUY", label: "Buy homes" },
  { value: "RENT", label: "Rent" },
  { value: "LEASE", label: "Lease" },
  { value: "LUXURY", label: "Luxury homes" },
  { value: "NEW_LAUNCH", label: "New launches" },
  { value: "READY", label: "Ready to move" },
  { value: "RESALE", label: "Resale" },
  { value: "FRESH", label: "Fresh booking" },
  { value: "FLOORS", label: "Builder floors" },
  { value: "VILLAS", label: "Villa / Kothi" },
  { value: "APARTMENTS", label: "Apartment / Flat" },
  { value: "PLOTS", label: "Plots" },
  { value: "LAND", label: "Land" },
  { value: "FARMLAND", label: "Farm / agriculture land" },
  { value: "COMMERCIAL", label: "Commercial" }
];

export function SearchFilters({ locations, current }: Props) {
  return (
    <form className="filter-shell" action="/listings">
      <select name="collection" defaultValue={current.collection || ""}>
        {collections.map((collection) => (
          <option key={collection.value || "all"} value={collection.value}>
            {collection.label}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="search"
        placeholder="Search project, sector, road, landmark"
        defaultValue={current.search || ""}
      />

      <select name="location" defaultValue={current.location || ""}>
        <option value="">All locations</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>

      <select name="type" defaultValue={current.type || ""}>
        <option value="">All property types</option>
        {PROPERTY_TYPES.map((type) => (
          <option key={type} value={type}>
            {type.replaceAll("_", " ")}
          </option>
        ))}
      </select>

      <select name="status" defaultValue={current.status || ""}>
        <option value="">All availability types</option>
        {PROPERTY_STATUSES.map((status) => (
          <option key={status} value={status}>
            {status.replaceAll("_", " ")}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="minBudget"
        placeholder="Min budget"
        defaultValue={current.minBudget || ""}
      />

      <input
        type="number"
        name="maxBudget"
        placeholder="Max budget"
        defaultValue={current.maxBudget || ""}
      />

      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
}
