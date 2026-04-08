import { GURGAON_AREA_CATALOG, PROPERTY_TYPES } from "@/lib/constants";
import { getAllProperties, getPropertyByIdFromStore, getPropertyBySlugFromStore } from "@/lib/data-store";
import { slugify } from "@/lib/utils";

export type PropertyFilters = {
  search?: string;
  location?: string;
  type?: string;
  status?: string;
  collection?: string;
  minBudget?: number;
  maxBudget?: number;
};

export async function getFeaturedProperties() {
  const properties = await getAllProperties();
  return properties
    .filter((property) => property.featured && property.approvalStatus === "APPROVED")
    .sort((a, b) => b.priceInr - a.priceInr)
    .slice(0, 3);
}

export async function getProperties(filters: PropertyFilters = {}) {
  const { search, location, type, status, collection, minBudget, maxBudget } = filters;
  const properties = await getAllProperties();
  return properties
    .filter((property) => {
      if (property.approvalStatus !== "APPROVED") {
        return false;
      }

      const matchesSearch =
        !search ||
        [property.title, property.location, property.sector]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      const matchesLocation = !location || property.location.toLowerCase().includes(location.toLowerCase());
      const matchesType =
        !type || (PROPERTY_TYPES.includes(type as (typeof PROPERTY_TYPES)[number]) && property.type === type);
      const matchesStatus = !status || property.status === status;
      const matchesCollection =
        !collection ||
        (collection === "BUY" &&
          property.type !== "COMMERCIAL" &&
          property.status !== "FOR_RENT" &&
          property.status !== "FOR_LEASE") ||
        (collection === "RENT" && property.status === "FOR_RENT") ||
        (collection === "LEASE" && property.status === "FOR_LEASE") ||
        (collection === "COMMERCIAL" && property.type === "COMMERCIAL") ||
        (collection === "NEW_LAUNCH" &&
          (property.status === "NEW_LAUNCH" ||
            property.status === "UNDER_CONSTRUCTION" ||
            property.status === "FRESH_BOOKING")) ||
        (collection === "READY" && property.status === "READY_TO_MOVE") ||
        (collection === "RESALE" && property.status === "RESALE") ||
        (collection === "FRESH" && property.status === "FRESH_BOOKING") ||
        (collection === "LUXURY" && (property.featured || property.priceInr >= 40_000_000)) ||
        (collection === "FLOORS" && property.type === "BUILDER_FLOOR") ||
        (collection === "PLOTS" && property.type === "PLOT") ||
        (collection === "LAND" &&
          ["PLOT", "FARM_LAND", "AGRICULTURE_LAND"].includes(property.type)) ||
        (collection === "FARMLAND" &&
          ["FARM_LAND", "AGRICULTURE_LAND"].includes(property.type)) ||
        (collection === "VILLAS" && ["VILLA", "KOTHI"].includes(property.type)) ||
        (collection === "APARTMENTS" &&
          ["APARTMENT", "FLAT", "LOW_RISE", "HIGH_RISE"].includes(property.type));
      const matchesMin = !minBudget || property.priceInr >= minBudget;
      const matchesMax = !maxBudget || property.priceInr <= maxBudget;
      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesStatus &&
        matchesCollection &&
        matchesMin &&
        matchesMax
      );
    })
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
}

export async function getPropertyBySlug(slug: string) {
  const property = await getPropertyBySlugFromStore(slug);
  return property?.approvalStatus === "APPROVED" ? property : null;
}

export async function getPropertyById(id: string) {
  return getPropertyByIdFromStore(id);
}

export async function getPropertyLocations() {
  const properties = await getAllProperties();
  return [...new Set(properties.filter((item) => item.approvalStatus === "APPROVED").map((item) => item.location))].sort();
}

export async function getPropertyLocationStats() {
  const properties = await getAllProperties();
  const counts = new Map<string, number>();

  for (const property of properties.filter((item) => item.approvalStatus === "APPROVED")) {
    counts.set(property.location, (counts.get(property.location) || 0) + 1);
  }

  return [...counts.entries()]
    .map(([location, count]) => ({ location, count }))
    .sort((a, b) => b.count - a.count || a.location.localeCompare(b.location));
}

export async function getGurgaonAreaPages() {
  const properties = (await getAllProperties()).filter((property) => property.approvalStatus === "APPROVED");
  const areaMap = new Map<
    string,
    {
      slug: string;
      title: string;
      count: number;
      kind: "location" | "sector";
      summary?: string;
    }
  >();

  for (const area of GURGAON_AREA_CATALOG) {
    areaMap.set(area.slug, {
      slug: area.slug,
      title: area.title,
      count: 0,
      kind: area.kind,
      summary: area.summary
    });
  }

  for (const property of properties) {
    const locationSlug = slugify(property.location);
    const sectorSlug = slugify(property.sector);

    if (!areaMap.has(locationSlug)) {
      areaMap.set(locationSlug, {
        slug: locationSlug,
        title: property.location,
        count: 0,
        kind: "location"
      });
    }

    areaMap.get(locationSlug)!.count += 1;

    if (!areaMap.has(sectorSlug)) {
      areaMap.set(sectorSlug, {
        slug: sectorSlug,
        title: property.sector,
        count: 0,
        kind: "sector"
      });
    }

    areaMap.get(sectorSlug)!.count += 1;
  }

  return [...areaMap.values()].sort((a, b) => b.count - a.count || a.title.localeCompare(b.title));
}

export async function getPropertiesByAreaSlug(slug: string) {
  const properties = (await getAllProperties()).filter((property) => property.approvalStatus === "APPROVED");
  const preset = GURGAON_AREA_CATALOG.find((item) => item.slug === slug);
  const matches = properties.filter(
    (property) => slugify(property.location) === slug || slugify(property.sector) === slug
  );

  if (!matches.length && !preset) {
    return null;
  }

  const locationMatch = matches.find((property) => slugify(property.location) === slug);
  const sectorMatch = matches.find((property) => slugify(property.sector) === slug);

  return {
    slug,
    title: locationMatch?.location || sectorMatch?.sector || preset?.title || "Gurgaon",
    kind: (locationMatch ? "location" : sectorMatch ? "sector" : preset?.kind) || "location",
    summary: preset?.summary,
    properties: matches.sort((a, b) => Number(b.featured) - Number(a.featured) || b.priceInr - a.priceInr)
  };
}
