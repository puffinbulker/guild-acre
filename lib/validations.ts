import { z } from "zod";
import {
  DEALER_ROLES,
  DEALER_STATUSES,
  LISTING_APPROVAL_STATUSES,
  PROPERTY_STATUSES,
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
  approvalStatus: z.enum(LISTING_APPROVAL_STATUSES).optional(),
  listingContactName: z.string().min(2).optional().nullable(),
  listingContactPhone: z.string().min(10).max(15).optional().nullable(),
  listingContactRole: z.string().min(2).optional().nullable()
});

export const dealerRegistrationSchema = z.object({
  name: z.string().min(2),
  companyName: z.string().optional().nullable(),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  password: z.string().min(8),
  role: z.enum(DEALER_ROLES),
  serviceAreas: z.array(z.string()).default([])
});

export const dealerLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});

export const dealerStatusSchema = z.object({
  status: z.enum(DEALER_STATUSES)
});

export const propertyModerationSchema = z.object({
  approvalStatus: z.enum(LISTING_APPROVAL_STATUSES)
});
