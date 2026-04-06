import { z } from "zod";
import { PROPERTY_STATUSES, PROPERTY_TYPES } from "@/lib/constants";

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
  amenities: z.array(z.string()).default([])
});
