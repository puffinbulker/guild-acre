import { PROPERTY_TYPES } from "@/lib/constants";
import { getAllProperties, getPropertyByIdFromStore, getPropertyBySlugFromStore } from "@/lib/data-store";

export type PropertyFilters = {
  search?: string;
  location?: string;
  type?: string;
  collection?: string;
  minBudget?: number;
  maxBudget?: number;
};

export async function getFeaturedProperties() {
  const properties = await getAllProperties();
  return properties.filter((property) => property.featured).sort((a, b) => b.priceInr - a.priceInr).slice(0, 3);
}

export async function getProperties(filters: PropertyFilters = {}) {
  const { search, location, type, collection, minBudget, maxBudget } = filters;
  const properties = await getAllProperties();
  return properties
    .filter((property) => {
      const matchesSearch =
        !search ||
        [property.title, property.location, property.sector]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      const matchesLocation = !location || property.location.toLowerCase().includes(location.toLowerCase());
      const matchesType =
        !type || (PROPERTY_TYPES.includes(type as (typeof PROPERTY_TYPES)[number]) && property.type === type);
      const matchesCollection =
        !collection ||
        (collection === "BUY" && property.type !== "COMMERCIAL") ||
        (collection === "COMMERCIAL" && property.type === "COMMERCIAL") ||
        (collection === "NEW_LAUNCH" &&
          (property.status === "NEW_LAUNCH" || property.status === "UNDER_CONSTRUCTION")) ||
        (collection === "READY" && property.status === "READY_TO_MOVE") ||
        (collection === "LUXURY" && (property.featured || property.priceInr >= 40_000_000)) ||
        (collection === "FLOORS" && property.type === "BUILDER_FLOOR") ||
        (collection === "PLOTS" && property.type === "PLOT");
      const matchesMin = !minBudget || property.priceInr >= minBudget;
      const matchesMax = !maxBudget || property.priceInr <= maxBudget;
      return matchesSearch && matchesLocation && matchesType && matchesCollection && matchesMin && matchesMax;
    })
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
}

export async function getPropertyBySlug(slug: string) {
  return getPropertyBySlugFromStore(slug);
}

export async function getPropertyById(id: string) {
  return getPropertyByIdFromStore(id);
}

export async function getPropertyLocations() {
  const properties = await getAllProperties();
  return [...new Set(properties.map((item) => item.location))].sort();
}

export async function getPropertyLocationStats() {
  const properties = await getAllProperties();
  const counts = new Map<string, number>();

  for (const property of properties) {
    counts.set(property.location, (counts.get(property.location) || 0) + 1);
  }

  return [...counts.entries()]
    .map(([location, count]) => ({ location, count }))
    .sort((a, b) => b.count - a.count || a.location.localeCompare(b.location));
}
