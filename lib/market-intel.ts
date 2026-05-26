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

export type PropertyVisualCategory = {
  slug: string;
  title: string;
  type: string;
  description: string;
  imageUrl: string;
  useCases: string[];
};

export const CORRIDOR_MARKET_GUIDES: CorridorMarketGuide[] = [
  {
    slug: "gurgaon-ncr",
    title: "Gurgaon NCR",
    kind: "location",
    avgPricePerSqft: 0,
    indicativeRange: "Mandate-specific review",
    movement: "HNI demand, plotted development, and strategic acreage remain selective",
    outlook: "HNI land advisory, plotted development, farmhouse evaluation, and strategic acquisition require title, zoning, access, and exit-depth review.",
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
    outlook: "Pataudi is tracked for residential spillover, plotted development potential, and acquisition opportunities where CLU, controlled area, access, and title risk can be verified.",
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
    outlook: "Farrukhnagar is evaluated for logistics and warehousing suitability through zoning, road width, land use, access, and title-chain continuity.",
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
    outlook: "Rewari is read through Bawal-Dharuhera-Manesar influence, mutation clarity, registry chain, sector alignment, and master-plan fit.",
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
    outlook: "Narnaul is monitored for freight corridor probability, Nangal Chaudhary logistics influence, project timelines, water, power, access, and resale liquidity.",
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
    outlook: "Mahendergarh is reviewed for education, agri, and logistics-support potential where clear title, infrastructure availability, and liquidity fit are defensible.",
    positioning: "Selective land banking corridor",
    imageUrl:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Guild Acre corridor desk",
    sourceUrl: "/acquisition-desk",
    updatedAt: "2026 desk cycle"
  }
];

export const PROPERTY_VISUAL_CATEGORIES: PropertyVisualCategory[] = [
  {
    slug: "apartments",
    title: "Apartments & Flats",
    type: "APARTMENT / FLAT",
    description: "High-rise, low-rise, and family flats for buy, resale, rent, and lease in core Gurgaon sectors.",
    imageUrl:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
    useCases: ["End-user homes", "Rental context", "Resale signals"]
  },
  {
    slug: "builder-floors",
    title: "Builder Floors",
    type: "BUILDER_FLOOR",
    description: "Independent floor records with terrace rights, stilt parking, and premium low-rise positioning.",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    useCases: ["Family upgrade", "Low-rise living", "Fresh and resale"]
  },
  {
    slug: "kothi-villa",
    title: "Kothi & Villa",
    type: "KOTHI / VILLA",
    description: "Standalone homes and plotted luxury stock across DLF phases and private premium belts.",
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
    useCases: ["Luxury lifestyle", "End-user mandate", "Private resale"]
  },
  {
    slug: "plots",
    title: "Plots",
    type: "PLOT",
    description: "Residential plots for custom homes, plotted developments, and long-term land banking.",
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    useCases: ["Custom home build", "Investor hold", "Launch corridor entry"]
  },
  {
    slug: "farm-land",
    title: "Farm Land",
    type: "FARM_LAND",
    description: "Weekend farm concepts, green-belt retreats, and lifestyle-led land opportunities around Gurgaon.",
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    useCases: ["Retreats", "Land banking", "Lifestyle holdings"]
  },
  {
    slug: "agriculture-land",
    title: "Agriculture Land",
    type: "AGRICULTURE_LAND",
    description: "Larger agricultural parcels and mandatable rural-edge holdings for strategic buyers.",
    imageUrl:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80",
    useCases: ["Large parcel enquiry", "Long-hold strategy", "Rural edge acquisitions"]
  },
  {
    slug: "commercial",
    title: "Commercial",
    type: "COMMERCIAL",
    description: "Office, SCO, retail, and mixed-use opportunities built for investors and owner-operators.",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    useCases: ["Yield assets", "SCO / retail", "Corporate leasing"]
  },
  {
    slug: "low-rise",
    title: "Low Rise Homes",
    type: "LOW_RISE",
    description: "Low-rise apartments and independent-style community living for privacy-focused end users.",
    imageUrl:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
    useCases: ["Family privacy", "Low-density living", "Resale stock"]
  },
  {
    slug: "high-rise",
    title: "High Rise Towers",
    type: "HIGH_RISE",
    description: "Skyline-facing high-rise records for amenity-rich urban living and investor-grade positioning.",
    imageUrl:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
    useCases: ["Luxury towers", "Club living", "Skyline assets"]
  }
];

export function getMarketGuideBySlug(slug: string) {
  return CORRIDOR_MARKET_GUIDES.find((guide) => guide.slug === slug) || null;
}

export function getMarketGuideForArea(title: string) {
  return getMarketGuideBySlug(slugify(title));
}
