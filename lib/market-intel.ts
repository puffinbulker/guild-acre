import { slugify } from "@/lib/utils";

export type GurgaonMarketGuide = {
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

export const GURGAON_MARKET_GUIDES: GurgaonMarketGuide[] = [
  {
    slug: "golf-course-road",
    title: "Golf Course Road",
    kind: "location",
    avgPricePerSqft: 22028,
    indicativeRange: "INR 8,500 - 46,154 / sq.ft.",
    movement: "+2.79% YoY on Housing.com trend data",
    outlook: "Ultra-premium corridor for trophy apartments, branded towers, and HNI-led demand.",
    positioning: "Luxury benchmark",
    imageUrl:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Housing.com price trend",
    sourceUrl: "https://housing.com/price-trends/property-rates-for-buy-in-golf-course-road_gurgaon-P4ftd5ktm9y2znfd2",
    updatedAt: "April 2026"
  },
  {
    slug: "golf-course-extension-road",
    title: "Golf Course Extension Road",
    kind: "location",
    avgPricePerSqft: 15212,
    indicativeRange: "INR 9,115 - 35,714 / sq.ft.",
    movement: "+0.96% YoY on Housing.com trend data",
    outlook: "Premium launches, large-format apartments, and investor-favorite family stock.",
    positioning: "Premium growth corridor",
    imageUrl:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Housing.com price trend",
    sourceUrl: "https://housing.com/price-trends/property-rates-for-buy-in-golf-course-extension-road_gurgaon-P4f5aqf7g0m2be6u0",
    updatedAt: "April 2026"
  },
  {
    slug: "sohna-road",
    title: "Sohna Road",
    kind: "location",
    avgPricePerSqft: 14311,
    indicativeRange: "INR 6,772 - 36,585 / sq.ft.",
    movement: "-1.31% YoY on Housing.com trend data",
    outlook: "Mixed-use corridor with residential, commercial, and end-user demand.",
    positioning: "Mid-premium mixed corridor",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Housing.com price trend",
    sourceUrl: "https://housing.com/price-trends/property-rates-for-buy-in-sohna-road_gurgaon-P73j1q3gh6oy3nj1s",
    updatedAt: "April 2026"
  },
  {
    slug: "dwarka-expressway",
    title: "Dwarka Expressway",
    kind: "location",
    avgPricePerSqft: 18668,
    indicativeRange: "Indicative 3 BHK deal band INR 2.6 Cr - 4 Cr in prime projects",
    movement: "Corridor appreciation accelerated after expressway opening",
    outlook: "High-growth zone for apartments, plots, SCO, and launch-led inventory.",
    positioning: "High-growth investment corridor",
    imageUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Times of India / PropEquity corridor coverage",
    sourceUrl: "https://timesofindia.indiatimes.com/city/gurgaon/after-opening-of-dwarka-expwy-property-prices-increase-by-up-to-58-in-gurugram-sectors/articleshow/111525222.cms",
    updatedAt: "April 2026"
  },
  {
    slug: "dlf-phase-1",
    title: "DLF Phase 1",
    kind: "location",
    avgPricePerSqft: 19839,
    indicativeRange: "INR 8,965 - 32,000 / sq.ft.",
    movement: "+0.20% YoY on Housing.com trend data",
    outlook: "Low-rise resale, kothi, rental demand, and old-money residential appeal.",
    positioning: "Established low-rise premium",
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Housing.com price trend",
    sourceUrl: "https://housing.com/price-trends/property-rates-for-buy-in-dlf_phase_1_gurgaon-P4j0m7j23k0njv6q",
    updatedAt: "April 2026"
  },
  {
    slug: "dlf-phase-2",
    title: "DLF Phase 2",
    kind: "location",
    avgPricePerSqft: 18334,
    indicativeRange: "INR 10,000 - 27,778 / sq.ft.",
    movement: "-0.51% YoY on Housing.com trend data",
    outlook: "Rental-heavy stock near Cyber City with dependable resale and leasing demand.",
    positioning: "Core rental and resale zone",
    imageUrl:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Housing.com price trend",
    sourceUrl: "https://housing.com/price-trends/property-rates-for-buy-in-dlf_phase_2_gurgaon-P2wf4s0pq4j0dcxk",
    updatedAt: "April 2026"
  },
  {
    slug: "sector-42",
    title: "Sector 42",
    kind: "sector",
    avgPricePerSqft: 51051,
    indicativeRange: "INR 7,466 - 1,00,000 / sq.ft.",
    movement: "+5.91% YoY on Housing.com trend data",
    outlook: "Camellias and ultra-luxury addresses keep this sector in a class of its own.",
    positioning: "Ultra-luxury sector benchmark",
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Housing.com price trend",
    sourceUrl: "https://housing.com/price-trends/property-rates-for-buy-in-sector_42_gurgaon-P4wrx365gr0uxw89d",
    updatedAt: "April 2026"
  },
  {
    slug: "sector-54",
    title: "Sector 54",
    kind: "sector",
    avgPricePerSqft: 23280,
    indicativeRange: "INR 11,814 - 77,777 / sq.ft.",
    movement: "-9.22% YoY on Housing.com trend data",
    outlook: "Luxury apartments and rapid-metro convenience keep this highly searched by end users.",
    positioning: "Luxury family inventory",
    imageUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Housing.com price trend",
    sourceUrl: "https://housing.com/price-trends/property-rates-for-buy-in-sector_54_gurgaon-P5xy5d6ymvxgxut4",
    updatedAt: "April 2026"
  },
  {
    slug: "sector-65",
    title: "Sector 65",
    kind: "sector",
    avgPricePerSqft: 18870,
    indicativeRange: "INR 10,000 - 58,333 / sq.ft.",
    movement: "+4.49% YoY on Housing.com trend data",
    outlook: "A fast-moving premium micro-market with luxury launches and mixed-use pull.",
    positioning: "Premium launch belt",
    imageUrl:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Housing.com price trend",
    sourceUrl: "https://housing.com/price-trends/property-rates-for-buy-in-sector_65_gurgaon-P3o50rzi93hxkqle5",
    updatedAt: "April 2026"
  },
  {
    slug: "sector-82a",
    title: "Sector 82A",
    kind: "sector",
    avgPricePerSqft: 16900,
    indicativeRange: "INR 12,307 - 20,077 / sq.ft.",
    movement: "+10.68% YoY on Housing.com trend data",
    outlook: "New Gurgaon favorite for family-led fresh booking and builder-floor demand.",
    positioning: "Rising family micro-market",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Housing.com price trend",
    sourceUrl: "https://housing.com/price-trends/property-rates-for-buy-in-sector_82_a_gurgaon-P3h2l7k9t41hwy2c",
    updatedAt: "April 2026"
  },
  {
    slug: "sector-104",
    title: "Sector 104",
    kind: "sector",
    avgPricePerSqft: 12043,
    indicativeRange: "INR 3,996 - 21,891 / sq.ft.",
    movement: "-4.36% YoY on Housing.com trend data",
    outlook: "Dwarka Expressway search volume keeps this sector relevant for value-led buyers and plots.",
    positioning: "Value-plus growth pocket",
    imageUrl:
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Housing.com price trend",
    sourceUrl: "https://housing.com/price-trends/property-rates-for-buy-in-sector_104_gurgaon-P2qgp62svm845z7dw",
    updatedAt: "April 2026"
  },
  {
    slug: "sector-57",
    title: "Sector 57",
    kind: "sector",
    avgPricePerSqft: 13581,
    indicativeRange: "INR 4,545 - 43,507 / sq.ft.",
    movement: "+17.23% YoY on Housing.com trend data",
    outlook: "A highly active buyer pocket for family apartments, floors, and premium low-rise movement.",
    positioning: "Fast-moving family sector",
    imageUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Housing.com price trend",
    sourceUrl: "https://housing.com/price-trends/property-rates-for-buy-in-sector_57_gurgaon-P6nh4kvx3pvh24c5",
    updatedAt: "April 2026"
  },
  {
    slug: "sector-67",
    title: "Sector 67",
    kind: "sector",
    avgPricePerSqft: 12847,
    indicativeRange: "INR 2,900 - 24,000 / sq.ft.",
    movement: "+0.83% YoY on Housing.com trend data",
    outlook: "Golf Course Extension influence makes this sector relevant for upgrade buyers and launch seekers.",
    positioning: "Emerging premium-family sector",
    imageUrl:
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Housing.com price trend",
    sourceUrl: "https://housing.com/price-trends/property-rates-for-buy-in-sector_67_gurgaon-P4zcsedyywnwq6rfo",
    updatedAt: "April 2026"
  },
  {
    slug: "sector-83",
    title: "Sector 83",
    kind: "sector",
    avgPricePerSqft: 12027,
    indicativeRange: "INR 7,105 - 17,931 / sq.ft.",
    movement: "+4.74% YoY on Housing.com trend data",
    outlook: "A practical New Gurgaon family and investor micro-market with scalable inventory depth.",
    positioning: "Value family inventory",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Housing.com price trend",
    sourceUrl: "https://housing.com/price-trends/property-rates-for-buy-in-sector_83_gurgaon-P3f86fnyfd72wuv7c",
    updatedAt: "April 2026"
  },
  {
    slug: "sector-84",
    title: "Sector 84",
    kind: "sector",
    avgPricePerSqft: 11310,
    indicativeRange: "INR 6,896 - 23,679 / sq.ft.",
    movement: "+0.44% YoY on Housing.com trend data",
    outlook: "Steady New Gurgaon supply with appeal for buyers seeking value plus corridor access.",
    positioning: "Steady mid-premium growth",
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    sourceLabel: "Housing.com price trend",
    sourceUrl: "https://housing.com/price-trends/property-rates-for-buy-in-sector_84_gurgaon-P3vidvqx6uu31gzb4",
    updatedAt: "April 2026"
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
    useCases: ["End-user homes", "Rental stock", "Resale inventory"]
  },
  {
    slug: "builder-floors",
    title: "Builder Floors",
    type: "BUILDER_FLOOR",
    description: "Independent floor inventory with terrace rights, stilt parking, and premium low-rise positioning.",
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
    useCases: ["Large parcel enquiry", "Long-hold strategy", "Rural edge deals"]
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
    description: "Skyline-facing high-rise inventory for amenity-rich urban living and investor-grade positioning.",
    imageUrl:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
    useCases: ["Luxury towers", "Club living", "Skyline assets"]
  }
];

export function getMarketGuideBySlug(slug: string) {
  return GURGAON_MARKET_GUIDES.find((guide) => guide.slug === slug) || null;
}

export function getMarketGuideForArea(title: string) {
  return getMarketGuideBySlug(slugify(title));
}
