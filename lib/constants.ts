export const PROPERTY_TYPES = [
  "APARTMENT",
  "FLAT",
  "LOW_RISE",
  "HIGH_RISE",
  "BUILDER_FLOOR",
  "VILLA",
  "KOTHI",
  "PLOT",
  "FARM_LAND",
  "AGRICULTURE_LAND",
  "COMMERCIAL"
] as const;

export const PROPERTY_STATUSES = [
  "READY_TO_MOVE",
  "UNDER_CONSTRUCTION",
  "RESALE",
  "NEW_LAUNCH",
  "FRESH_BOOKING",
  "FOR_RENT",
  "FOR_LEASE"
] as const;

export type PropertyTypeValue = (typeof PROPERTY_TYPES)[number];
export type PropertyStatusValue = (typeof PROPERTY_STATUSES)[number];

export const LISTING_APPROVAL_STATUSES = [
  "APPROVED",
  "PENDING",
  "REJECTED"
] as const;

export const DEALER_ROLES = [
  "DEALER",
  "BUILDER",
  "OWNER",
  "LANDLORD",
  "CHANNEL_PARTNER"
] as const;

export const DEALER_STATUSES = [
  "PENDING",
  "APPROVED",
  "REJECTED",
  "SUSPENDED"
] as const;

export const DEALER_PLAN_TYPES = [
  "BASIC",
  "PRO",
  "PREMIUM",
  "ENTERPRISE"
] as const;

export const BOOST_TIERS = [
  "STANDARD",
  "FEATURED",
  "SPOTLIGHT"
] as const;

export const LEAD_ROUTING_MODES = [
  "PLATFORM",
  "DIRECT_VENDOR",
  "SHARED"
] as const;

export const LEAD_ROUTING_STATUSES = [
  "PLATFORM",
  "ASSIGNED",
  "SHARED"
] as const;

export type ListingApprovalStatus = (typeof LISTING_APPROVAL_STATUSES)[number];
export type DealerRoleValue = (typeof DEALER_ROLES)[number];
export type DealerStatusValue = (typeof DEALER_STATUSES)[number];
export type DealerPlanTypeValue = (typeof DEALER_PLAN_TYPES)[number];
export type BoostTierValue = (typeof BOOST_TIERS)[number];
export type LeadRoutingModeValue = (typeof LEAD_ROUTING_MODES)[number];
export type LeadRoutingStatusValue = (typeof LEAD_ROUTING_STATUSES)[number];

export const GURGAON_AREA_CATALOG = [
  {
    slug: "golf-course-road",
    title: "Golf Course Road",
    kind: "location",
    summary: "Luxury residences, marquee towers, and ultra-premium golf-facing inventory."
  },
  {
    slug: "golf-course-extension-road",
    title: "Golf Course Extension Road",
    kind: "location",
    summary: "New-age premium launches, investor demand, and large-format family homes."
  },
  {
    slug: "sohna-road",
    title: "Sohna Road",
    kind: "location",
    summary: "Mixed residential and commercial demand with strong daily livability."
  },
  {
    slug: "dwarka-expressway",
    title: "Dwarka Expressway",
    kind: "location",
    summary: "High-growth plotted, residential, and investment-led corridors."
  },
  {
    slug: "new-gurgaon",
    title: "New Gurgaon",
    kind: "location",
    summary: "Fresh booking, builder floors, and emerging end-user neighborhoods."
  },
  {
    slug: "dlf-phase-1",
    title: "DLF Phase 1",
    kind: "location",
    summary: "Established low-rise neighborhoods, villas, kothis, and resale demand."
  },
  {
    slug: "dlf-phase-2",
    title: "DLF Phase 2",
    kind: "location",
    summary: "Strong rental demand near Cyber City with resale and investor traction."
  },
  {
    slug: "sector-42",
    title: "Sector 42",
    kind: "sector",
    summary: "Golf Course Road luxury stock, premium high-rise towers, and elite addresses."
  },
  {
    slug: "sector-54",
    title: "Sector 54",
    kind: "sector",
    summary: "Luxury apartments and premium family inventory near rapid metro access."
  },
  {
    slug: "sector-65",
    title: "Sector 65",
    kind: "sector",
    summary: "A fast-moving micro-market for premium residences and mixed-use demand."
  },
  {
    slug: "sector-82a",
    title: "Sector 82A",
    kind: "sector",
    summary: "Builder floors, fresh inventory, and family-focused New Gurgaon supply."
  },
  {
    slug: "sector-104",
    title: "Sector 104",
    kind: "sector",
    summary: "Dwarka Expressway growth corridor with plotted and launch-led opportunities."
  },
  {
    slug: "sector-57",
    title: "Sector 57",
    kind: "sector",
    summary: "A fast-moving family sector for apartments, builder floors, resale, and premium low-rise demand."
  },
  {
    slug: "sector-67",
    title: "Sector 67",
    kind: "sector",
    summary: "Emerging premium-family inventory with launch stock and Golf Course Extension spillover demand."
  },
  {
    slug: "sector-83",
    title: "Sector 83",
    kind: "sector",
    summary: "New Gurgaon value-family market with practical apartment, floor, and investor-led inventory depth."
  },
  {
    slug: "sector-84",
    title: "Sector 84",
    kind: "sector",
    summary: "Steady growth micro-market with corridor access, launch opportunities, and mixed buyer interest."
  }
] as const;
