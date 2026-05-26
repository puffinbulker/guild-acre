type MarketScopedRecord = {
  title?: string | null;
  description?: string | null;
  location?: string | null;
  sector?: string | null;
  city?: string | null;
};

const TRACKED_MARKET_TERMS = [
  "gurgaon",
  "gurugram",
  "pataudi",
  "farrukhnagar",
  "rewari",
  "narnaul",
  "mahendergarh",
];

const RETIRED_MARKET_TERMS = ["naugaon", "sohna", "aravali", "aravalli"];

export function isPublicMarketRecord(record: MarketScopedRecord) {
  const text = [
    record.title,
    record.description,
    record.location,
    record.sector,
    record.city,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (RETIRED_MARKET_TERMS.some((term) => text.includes(term))) {
    return false;
  }

  return TRACKED_MARKET_TERMS.some((term) => text.includes(term));
}
