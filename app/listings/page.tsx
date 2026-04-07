import { Metadata } from "next";
import { SearchFilters } from "@/components/search-filters";
import { PropertyCard } from "@/components/property-card";
import { getProperties, getPropertyLocations } from "@/lib/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Property Listings in Gurgaon",
  description: "Search Gurgaon property listings by budget, type, and location."
};

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ListingsPage({ searchParams }: Props) {
  const params = await searchParams;
  const normalized = {
    search: typeof params.search === "string" ? params.search : undefined,
    location: typeof params.location === "string" ? params.location : undefined,
    type: typeof params.type === "string" ? params.type : undefined,
    minBudget: typeof params.minBudget === "string" ? Number(params.minBudget) : undefined,
    maxBudget: typeof params.maxBudget === "string" ? Number(params.maxBudget) : undefined
  };

  const [properties, locations] = await Promise.all([
    getProperties(normalized),
    getPropertyLocations()
  ]);

  return (
    <main className="container page-shell">
      <div className="page-intro page-intro--listing">
        <span className="section-tag">Search & Filter</span>
        <h1>Property listings in Gurgaon</h1>
        <p>
          Explore a cleaner, more premium shortlist across Gurgaon&apos;s strongest residential and
          investment corridors.
        </p>
        <div className="page-intro__metrics">
          <span>{properties.length} active opportunities</span>
          <span>{locations.length} tracked locations</span>
          <span>Advisor-led shortlist support</span>
        </div>
      </div>

      <div className="listing-filter-panel">
        <SearchFilters
          locations={locations}
          current={{
            search: normalized.search,
            location: normalized.location,
            type: normalized.type,
            minBudget: normalized.minBudget?.toString(),
            maxBudget: normalized.maxBudget?.toString()
          }}
        />
      </div>

      <div className="listing-summary">{properties.length} properties found</div>

      <div className="property-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </main>
  );
}
