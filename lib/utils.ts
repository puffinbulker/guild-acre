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

export function humanizeToken(value: string) {
  return value
    .toLowerCase()
    .split("_")
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ");
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
