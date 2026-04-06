export const PROPERTY_TYPES = [
  "APARTMENT",
  "BUILDER_FLOOR",
  "VILLA",
  "PLOT",
  "COMMERCIAL"
] as const;

export const PROPERTY_STATUSES = [
  "READY_TO_MOVE",
  "UNDER_CONSTRUCTION",
  "RESALE",
  "NEW_LAUNCH"
] as const;

export type PropertyTypeValue = (typeof PROPERTY_TYPES)[number];
export type PropertyStatusValue = (typeof PROPERTY_STATUSES)[number];
