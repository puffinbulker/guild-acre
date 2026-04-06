import { PROPERTY_TYPES } from "@/lib/constants";

type Props = {
  locations: string[];
  current: Record<string, string | undefined>;
};

export function SearchFilters({ locations, current }: Props) {
  return (
    <form className="filter-shell" action="/listings">
      <input
        type="text"
        name="search"
        placeholder="Search by project, sector, landmark"
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
