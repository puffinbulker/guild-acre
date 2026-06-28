import { slugify } from "@/lib/utils";

export type CorridorMarketGuide = {
  slug: string;
  title: string;
  kind: "location" | "sector";
  avgPricePerSqft: number;
  indicativeRange: string;
  movement: string;
  outlook: string;
  positioning: string;
  imageUrl: string;
  sourceLabel: string;
  sourceUrl: string;
  updatedAt: string;
};


export const CORRIDOR_MARKET_GUIDES: CorridorMarketGuide[] = [
  {
    slug: "gurgaon-ncr",
    title: "Gurgaon NCR",
    kind: "location",
    avgPricePerSqft: 0,
    indicativeRange: "Mandate-specific review",
    movement: "HNI demand, plotted development, and strategic acreage remain selective",
    outlook: "Strategic land, plotted, farmhouse, and long-term acquisition interest are handled through private buyer-fit review.",
    positioning: "Anchor private advisory market",
    imageUrl:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Guild Acre corridor desk",
    sourceUrl: "/acquisition-desk",
    updatedAt: "2026 desk cycle"
  },
  {
    slug: "pataudi",
    title: "Pataudi",
    kind: "location",
    avgPricePerSqft: 0,
    indicativeRange: "Private intelligence note required",
    movement: "Gurgaon spillover and highway-led plotted interest",
    outlook: "Pataudi is tracked as a growth-interest corridor where deeper suitability is shared only inside accepted mandates.",
    positioning: "Spillover growth corridor",
    imageUrl:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Guild Acre corridor desk",
    sourceUrl: "/acquisition-desk",
    updatedAt: "2026 desk cycle"
  },
  {
    slug: "farrukhnagar",
    title: "Farrukhnagar",
    kind: "location",
    avgPricePerSqft: 0,
    indicativeRange: "Private intelligence note required",
    movement: "Logistics, warehousing, and industrial expansion potential",
    outlook: "Farrukhnagar is covered for logistics and industrial-interest mandates where practical fit is reviewed privately.",
    positioning: "Logistics and warehousing corridor",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Guild Acre corridor desk",
    sourceUrl: "/acquisition-desk",
    updatedAt: "2026 desk cycle"
  },
  {
    slug: "rewari",
    title: "Rewari",
    kind: "location",
    avgPricePerSqft: 0,
    indicativeRange: "Private intelligence note required",
    movement: "Industrial and transport-linked growth",
    outlook: "Rewari is covered for disciplined land-bank and industrial-growth interest, with desk-level interpretation kept private.",
    positioning: "Industrial influence corridor",
    imageUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Guild Acre corridor desk",
    sourceUrl: "/acquisition-desk",
    updatedAt: "2026 desk cycle"
  },
  {
    slug: "narnaul",
    title: "Narnaul",
    kind: "location",
    avgPricePerSqft: 0,
    indicativeRange: "Private intelligence note required",
    movement: "Long-term logistics and freight corridor opportunity",
    outlook: "Narnaul is covered for patient capital and long-horizon thinking, with suitability shaped around the buyer's actual mandate.",
    positioning: "Long-horizon logistics corridor",
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Guild Acre corridor desk",
    sourceUrl: "/acquisition-desk",
    updatedAt: "2026 desk cycle"
  },
  {
    slug: "mahendergarh",
    title: "Mahendergarh",
    kind: "location",
    avgPricePerSqft: 0,
    indicativeRange: "Private intelligence note required",
    movement: "Selective long-term land banking",
    outlook: "Mahendergarh is covered selectively for long-term land-bank interest where expectations, patience, and buyer profile matter.",
    positioning: "Selective land banking corridor",
    imageUrl:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Guild Acre corridor desk",
    sourceUrl: "/acquisition-desk",
    updatedAt: "2026 desk cycle"
  }
];


export function getMarketGuideBySlug(slug: string) {
  return CORRIDOR_MARKET_GUIDES.find((guide) => guide.slug === slug) || null;
}

export function getMarketGuideForArea(title: string) {
  return getMarketGuideBySlug(slugify(title));
}


