import { Metadata } from "next";
import { SearchFilters } from "@/components/search-filters";
import { PropertyCard } from "@/components/property-card";
import { getProperties, getPropertyLocations, getPropertyLocationStats } from "@/lib/queries";
import { slugify } from "@/lib/utils";

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
    collection: typeof params.collection === "string" ? params.collection : undefined,
    search: typeof params.search === "string" ? params.search : undefined,
    location: typeof params.location === "string" ? params.location : undefined,
    type: typeof params.type === "string" ? params.type : undefined,
    status: typeof params.status === "string" ? params.status : undefined,
    minBudget: typeof params.minBudget === "string" ? Number(params.minBudget) : undefined,
    maxBudget: typeof params.maxBudget === "string" ? Number(params.maxBudget) : undefined
  };

  const [properties, locations, locationStats] = await Promise.all([
    getProperties(normalized),
    getPropertyLocations(),
    getPropertyLocationStats()
  ]);

  const quickCollections = [
    { label: "Buy Homes", value: "BUY" },
    { label: "Rent", value: "RENT" },
    { label: "Lease", value: "LEASE" },
    { label: "Luxury", value: "LUXURY" },
    { label: "New Launches", value: "NEW_LAUNCH" },
    { label: "Ready to Move", value: "READY" },
    { label: "Resale", value: "RESALE" },
    { label: "Builder Floors", value: "FLOORS" },
    { label: "Villa / Kothi", value: "VILLAS" },
    { label: "Land", value: "LAND" },
    { label: "Farm Land", value: "FARMLAND" },
    { label: "Commercial", value: "COMMERCIAL" }
  ];

  return (
    <main className="container page-shell">
      <div className="page-intro page-intro--listing">
        <span className="section-tag">Gurgaon Finder</span>
        <h1>Explore Gurgaon like a focused property portal</h1>
        <p>
          Search only Gurgaon localities, sectors, and premium categories with a cleaner,
          shortlist-first experience inspired by large portals but built for sharper decisions.
        </p>
        <div className="page-intro__metrics">
          <span>{properties.length} active opportunities</span>
          <span>{locations.length} tracked locations</span>
          <span>Buy, luxury, new launch, floors, and commercial</span>
        </div>
      </div>

      <div className="collection-tabs">
        {quickCollections.map((collection) => {
          const active = normalized.collection === collection.value;
          const query = new URLSearchParams();
          query.set("collection", collection.value);
          if (normalized.location) query.set("location", normalized.location);

          return (
            <a
              key={collection.value}
              href={`/listings?${query.toString()}`}
              className={active ? "collection-tab collection-tab--active" : "collection-tab"}
            >
              {collection.label}
            </a>
          );
        })}
      </div>

      <div className="listings-layout">
        <aside className="listings-sidebar">
          <div className="card listings-sidebar__card">
            <span className="section-tag">Portal Filters</span>
            <h2>Refine Gurgaon inventory</h2>
            <SearchFilters
              locations={locations}
              current={{
                collection: normalized.collection,
                search: normalized.search,
                location: normalized.location,
                type: normalized.type,
                status: normalized.status,
                minBudget: normalized.minBudget?.toString(),
                maxBudget: normalized.maxBudget?.toString()
              }}
            />
          </div>

          <div className="card listings-sidebar__card">
            <span className="section-tag">Need Service?</span>
            <h3>Owner, buyer, seller, tenant, or landlord desk</h3>
            <div className="owner-service-list">
              <span>Buy and fresh booking assistance</span>
              <span>Resale and investor exit support</span>
              <span>Rent and lease coordination</span>
              <span>Farm land and agriculture land enquiries</span>
            </div>
            <a
              className="button"
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
            >
              Discuss requirement
            </a>
          </div>
        </aside>

        <section className="listings-results">
          <div className="listing-summary">{properties.length} properties found</div>

          <section className="locality-strip">
            <div className="section-head">
              <div>
                <span className="section-tag">Popular Gurgaon Localities</span>
                <h2>Browse by corridor, sector, or locality page</h2>
              </div>
            </div>
            <div className="locality-strip__grid">
              {locationStats.slice(0, 6).map((item) => (
                <a
                  key={item.location}
                  className="locality-chip-card"
                  href={`/gurgaon/${slugify(item.location)}`}
                >
                  <strong>{item.location}</strong>
                  <span>{item.count} listing{item.count === 1 ? "" : "s"}</span>
                </a>
              ))}
            </div>
          </section>

          <div className="property-grid">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
