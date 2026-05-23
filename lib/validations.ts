import { z } from "zod";
import {
  BOOST_TIERS,
  LEAD_ROUTING_MODES,
  RECORD_APPROVAL_STATUSES,
  PHOTO_RIGHTS_STATUSES,
  PROPERTY_STATUSES,
  PROPERTY_SOURCE_PLATFORMS,
  PROPERTY_TYPES
} from "@/lib/constants";

export const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10).max(15),
  requirement: z.string().min(10),
  propertyId: z.string().optional().nullable()
});

export const propertySchema = z.object({
  title: z.string().min(5),
  description: z.string().min(20),
  location: z.string().min(2),
  sector: z.string().min(2),
  city: z.string().default("Gurgaon"),
  priceInr: z.coerce.number().int().positive(),
  type: z.enum(PROPERTY_TYPES),
  status: z.enum(PROPERTY_STATUSES),
  bedrooms: z.coerce.number().int().positive().optional().nullable(),
  bathrooms: z.coerce.number().int().positive().optional().nullable(),
  areaSqft: z.coerce.number().int().positive(),
  featured: z.coerce.boolean().default(false),
  imageUrls: z.array(z.string().url()).min(1),
  amenities: z.array(z.string()).default([]),
  sourceType: z.enum(["ADMIN", "VENDOR"]).optional(),
  sourcePlatform: z.enum(PROPERTY_SOURCE_PLATFORMS).optional().nullable(),
  sourceUrl: z.string().url().optional().nullable(),
  priceLastVerified: z.string().min(4).optional().nullable(),
  photoRightsStatus: z.enum(PHOTO_RIGHTS_STATUSES).default("OWNER_UPLOADED"),
  approvalStatus: z.enum(RECORD_APPROVAL_STATUSES).optional(),
  boostTier: z.enum(BOOST_TIERS).optional(),
  leadRoutingMode: z.enum(LEAD_ROUTING_MODES).optional(),
  featuredRequested: z.coerce.boolean().optional(),
  listingContactName: z.string().min(2).optional().nullable(),
  listingContactPhone: z.string().min(10).max(15).optional().nullable(),
  listingContactRole: z.string().min(2).optional().nullable()
});

export const propertyModerationSchema = z.object({
  approvalStatus: z.enum(RECORD_APPROVAL_STATUSES).optional(),
  boostTier: z.enum(BOOST_TIERS).optional(),
  leadRoutingMode: z.enum(LEAD_ROUTING_MODES).optional(),
  featuredRequested: z.coerce.boolean().optional(),
  featured: z.coerce.boolean().optional()
});
