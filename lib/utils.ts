import { clsx } from "clsx";

export function cn(...values: Array<string | false | null | undefined>) {
  return clsx(values);
}

export function formatPrice(priceInr: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(priceInr);
}

export function formatCompactPrice(priceInr: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    notation: "compact",
    maximumFractionDigits: 1
  }).format(priceInr);
}

export function formatPricePerSqft(priceInr: number, areaSqft: number) {
  if (!areaSqft) {
    return null;
  }

  const rate = Math.round(priceInr / areaSqft);
  return `${new Intl.NumberFormat("en-IN").format(rate)} / sq.ft.`;
}

function normalizeToken(value: string) {
  return value
    .trim()
    .toUpperCase()
    .replace(/[\/\s-]+/g, "_")
    .replace(/__+/g, "_");
}

export function humanizeToken(value: string) {
  return normalizeToken(value)
    .split("_")
    .filter(Boolean)
    .map((chunk) => chunk.charAt(0) + chunk.slice(1).toLowerCase())
    .join(" ");
}

export function formatSourceLabel(value: string | null | undefined) {
  if (!value) {
    return "Guild Acre";
  }

  const labels: Record<string, string> = {
    GUILD_ACRE: "Guild Acre",
    HOUSING: "Housing",
    "99ACRES": "99acres",
    MAGICBRICKS: "MagicBricks",
    DEALER_DIRECT: "Dealer Direct",
    OWNER_DIRECT: "Owner Direct",
    BUILDER_DIRECT: "Builder Direct",
    OTHER: "External Source"
  };

  const normalized = normalizeToken(value);
  return labels[normalized] || humanizeToken(normalized);
}

export function formatPhotoRightsLabel(value: string | null | undefined) {
  if (!value) {
    return "Owner Uploaded";
  }

  const labels: Record<string, string> = {
    OWNER_UPLOADED: "Owner Uploaded",
    DEALER_UPLOADED: "Dealer Uploaded",
    BUILDER_AUTHORIZED: "Builder Authorized",
    LICENSED_STOCK: "Licensed Stock",
    AI_CONCEPT: "AI Concept Visual",
    EXTERNAL_LINK_ONLY: "External Link Only"
  };

  const normalized = normalizeToken(value);
  return labels[normalized] || humanizeToken(normalized);
}

export function formatPropertyTypeLabel(value: string | null | undefined) {
  if (!value) {
    return "Property";
  }

  const labels: Record<string, string> = {
    APARTMENT: "Apartment",
    APARTMENT_FLAT: "Apartment / Flat",
    FLAT: "Flat",
    LOW_RISE: "Low Rise",
    HIGH_RISE: "High Rise",
    BUILDER_FLOOR: "Builder Floor",
    VILLA: "Villa",
    KOTHI: "Kothi",
    PLOT: "Plot",
    FARM_LAND: "Farm Land",
    AGRICULTURE_LAND: "Agriculture Land",
    COMMERCIAL: "Commercial"
  };

  const normalized = normalizeToken(value);
  return labels[normalized] || humanizeToken(normalized);
}

export function formatPropertyStatusLabel(value: string | null | undefined) {
  if (!value) {
    return "Available";
  }

  const labels: Record<string, string> = {
    READY_TO_MOVE: "Ready to Move",
    UNDER_CONSTRUCTION: "Under Construction",
    RESALE: "Resale",
    NEW_LAUNCH: "New Launch",
    FRESH_BOOKING: "Fresh Booking",
    FOR_RENT: "For Rent",
    FOR_LEASE: "For Lease"
  };

  const normalized = normalizeToken(value);
  return labels[normalized] || humanizeToken(normalized);
}

export function formatListingCount(count: number) {
  return `${count} ${count === 1 ? "listing" : "listings"}`;
}

export function formatCollectionLabel(value: string | null | undefined) {
  if (!value) {
    return "All Collections";
  }

  const labels: Record<string, string> = {
    BUY: "Buy Homes",
    RENT: "Rent",
    LEASE: "Lease",
    LUXURY: "Luxury",
    NEW_LAUNCH: "New Launches",
    READY: "Ready to Move",
    RESALE: "Resale",
    FRESH: "Fresh Booking",
    FLOORS: "Builder Floors",
    VILLAS: "Villa / Kothi",
    APARTMENTS: "Apartment / Flat",
    PLOTS: "Plots",
    LAND: "Land",
    FARMLAND: "Farm / Agriculture Land",
    COMMERCIAL: "Commercial"
  };

  const normalized = normalizeToken(value);
  return labels[normalized] || humanizeToken(normalized);
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function parseJsonArray(value: string) {
  try {
    return JSON.parse(value) as string[];
  } catch {
    return [];
  }
}