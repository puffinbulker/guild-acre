import { PROPERTY_TYPES } from "@/lib/constants";
import { getAllProperties, getPropertyByIdFromStore, getPropertyBySlugFromStore } from "@/lib/data-store";

export type PropertyFilters = {
  search?: string;
  location?: string;
  type?: string;
  minBudget?: number;
  maxBudget?: number;
};

export async function getFeaturedProperties() {
  const properties = await getAllProperties();
  return properties.filter((property) => property.featured).sort((a, b) => b.priceInr - a.priceInr).slice(0, 3);
}

export async function getProperties(filters: PropertyFilters = {}) {
  const { search, location, type, minBudget, maxBudget } = filters;
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
      const matchesMin = !minBudget || property.priceInr >= minBudget;
      const matchesMax = !maxBudget || property.priceInr <= maxBudget;
      return matchesSearch && matchesLocation && matchesType && matchesMin && matchesMax;
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
