import { notFound, permanentRedirect } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const TRACKED_LEGACY_CORRIDORS = new Set([
  "gurgaon-ncr",
  "pataudi",
  "farrukhnagar",
  "rewari",
  "narnaul",
  "mahendergarh",
]);

const RETIRED_LEGACY_MARKETS = new Set(["naugaon", "sohna", "aravali", "aravalli"]);

export default async function LegacyCorridorRedirect({ params }: Props) {
  const { slug } = await params;
  const normalizedSlug = slug.toLowerCase();

  if (RETIRED_LEGACY_MARKETS.has(normalizedSlug)) {
    notFound();
  }

  if (TRACKED_LEGACY_CORRIDORS.has(normalizedSlug)) {
    permanentRedirect(`/corridor-coverage/${normalizedSlug}`);
  }

  permanentRedirect("/corridor-coverage");
}
