import { PrismaClient } from "@prisma/client";

const PROPERTY_TYPES = ["APARTMENT", "BUILDER_FLOOR", "VILLA", "PLOT", "COMMERCIAL"] as const;
const PROPERTY_STATUSES = [
  "READY_TO_MOVE",
  "UNDER_CONSTRUCTION",
  "RESALE",
  "NEW_LAUNCH"
] as const;

const prisma = new PrismaClient();

const properties = [
  {
    title: "DLF Camellias Inspired Sky Residence",
    slug: "dlf-camellias-inspired-sky-residence",
    description:
      "Ultra-luxury 4 BHK residence with golf course views, private lift lobby, premium concierge access, and curated clubhouse amenities.",
    location: "Golf Course Road",
    sector: "Sector 42",
    priceInr: 145000000,
    type: PROPERTY_TYPES[0],
    status: PROPERTY_STATUSES[0],
    bedrooms: 4,
    bathrooms: 5,
    areaSqft: 7400,
    featured: true,
    imageUrls: JSON.stringify([
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
    ]),
    amenities: JSON.stringify(["Private lift", "Clubhouse", "Golf views", "Spa", "24x7 security"])
  },
  {
    title: "Smart Family Apartment Near Cyber Hub",
    slug: "smart-family-apartment-near-cyber-hub",
    description:
      "Contemporary 3 BHK apartment close to Cyber City with modular interiors, kids zone, pool deck, and strong rental demand.",
    location: "DLF Phase 2",
    sector: "DLF Phase 2",
    priceInr: 32500000,
    type: PROPERTY_TYPES[0],
    status: PROPERTY_STATUSES[2],
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 1850,
    featured: true,
    imageUrls: JSON.stringify([
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=80"
    ]),
    amenities: JSON.stringify(["Pool", "Gym", "Kids play area", "Power backup"])
  },
  {
    title: "Builder Floor in New Gurgaon",
    slug: "builder-floor-in-new-gurgaon",
    description:
      "Elegant 4 BHK builder floor with terrace rights, stilt parking, branded fittings, and fast connectivity to Dwarka Expressway.",
    location: "New Gurgaon",
    sector: "Sector 82A",
    priceInr: 48000000,
    type: PROPERTY_TYPES[1],
    status: PROPERTY_STATUSES[3],
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 2650,
    featured: false,
    imageUrls: JSON.stringify([
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80"
    ]),
    amenities: JSON.stringify(["Terrace rights", "Stilt parking", "Modular kitchen"])
  },
  {
    title: "Investment Plot on Dwarka Expressway",
    slug: "investment-plot-on-dwarka-expressway",
    description:
      "High-growth plotted development opportunity suitable for investors and future self-use buyers seeking premium corridor appreciation.",
    location: "Dwarka Expressway",
    sector: "Sector 104",
    priceInr: 21500000,
    type: PROPERTY_TYPES[3],
    status: PROPERTY_STATUSES[1],
    areaSqft: 1620,
    featured: false,
    imageUrls: JSON.stringify([
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
    ]),
    amenities: JSON.stringify(["Gated township", "Club access", "Future metro connectivity"])
  }
];

async function main() {
  for (const property of properties) {
    await prisma.property.upsert({
      where: { slug: property.slug },
      update: property,
      create: property
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
