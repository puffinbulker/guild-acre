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

export const RECORD_APPROVAL_STATUSES = [
  "APPROVED",
  "PENDING",
  "REJECTED"
] as const;

export const BOOST_TIERS = [
  "STANDARD",
  "FEATURED",
  "SPOTLIGHT"
] as const;

export const PROPERTY_SOURCE_PLATFORMS = [
  "GUILD_ACRE",
  "HOUSING",
  "99ACRES",
  "MAGICBRICKS",
  "OWNER_DIRECT",
  "BUILDER_DIRECT",
  "OTHER"
] as const;

export const PHOTO_RIGHTS_STATUSES = [
  "OWNER_UPLOADED",
  "BUILDER_AUTHORIZED",
  "LICENSED_STOCK",
  "AI_CONCEPT",
  "EXTERNAL_LINK_ONLY"
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

export type RecordApprovalStatus = (typeof RECORD_APPROVAL_STATUSES)[number];
export type BoostTierValue = (typeof BOOST_TIERS)[number];
export type PropertySourcePlatformValue = (typeof PROPERTY_SOURCE_PLATFORMS)[number];
export type PhotoRightsStatusValue = (typeof PHOTO_RIGHTS_STATUSES)[number];
export type LeadRoutingModeValue = (typeof LEAD_ROUTING_MODES)[number];
export type LeadRoutingStatusValue = (typeof LEAD_ROUTING_STATUSES)[number];

export const CORRIDOR_AREA_CATALOG = [
  {
    slug: "gurgaon-ncr",
    title: "Gurgaon NCR",
    kind: "location",
    summary: "HNI land advisory, plotted development, farmhouse evaluation, and strategic land acquisition."
  },
  {
    slug: "pataudi",
    title: "Pataudi",
    kind: "location",
    summary: "Gurgaon spillover growth with highway-led residential and plotted opportunity."
  },
  {
    slug: "farrukhnagar",
    title: "Farrukhnagar",
    kind: "location",
    summary: "Logistics and warehousing corridor with industrial expansion potential."
  },
  {
    slug: "rewari",
    title: "Rewari",
    kind: "location",
    summary: "Industrial and transport-linked growth influenced by Bawal, Dharuhera, and Manesar."
  },
  {
    slug: "narnaul",
    title: "Narnaul",
    kind: "location",
    summary: "Long-term logistics and freight corridor opportunity with Nangal Chaudhary influence."
  },
  {
    slug: "mahendergarh",
    title: "Mahendergarh",
    kind: "location",
    summary: "Selective long-term land banking with education, agri, and logistics-support potential."
  }
] as const;
