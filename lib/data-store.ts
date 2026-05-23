import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { prisma } from "@/lib/prisma";
import type { LeadRecord, PropertyRecord } from "@/types";
import { slugify } from "@/lib/utils";

const dataDir = path.join(process.cwd(), "data");
const propertiesPath = path.join(dataDir, "properties.json");
const leadsPath = path.join(dataDir, "leads.json");

type PropertyInput = Omit<PropertyRecord, "id" | "slug" | "createdAt" | "updatedAt">;

function toPropertyInput(property: PropertyRecord): PropertyInput {
  return {
    title: property.title,
    description: property.description,
    location: property.location,
    sector: property.sector,
    city: property.city,
    priceInr: property.priceInr,
    type: property.type,
    status: property.status,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    areaSqft: property.areaSqft,
    featured: property.featured,
    imageUrls: property.imageUrls,
    amenities: property.amenities,
    sourceType: property.sourceType,
    sourcePlatform: property.sourcePlatform ?? null,
    sourceUrl: property.sourceUrl,
    priceLastVerified: property.priceLastVerified,
    photoRightsStatus: property.photoRightsStatus,
    approvalStatus: property.approvalStatus,
    boostTier: property.boostTier,
    leadRoutingMode: property.leadRoutingMode,
    featuredRequested: property.featuredRequested,
    listingContactName: property.listingContactName,
    listingContactPhone: property.listingContactPhone,
    listingContactRole: property.listingContactRole ?? null,
    vendorId: property.vendorId
  };
}

function useJsonFallback() {
  const url = process.env.DATABASE_URL || "";
  return !url || !url.startsWith("postgres");
}

async function ensureDataDir() {
  await fs.mkdir(dataDir, { recursive: true });
}

async function readJsonFile<T>(filePath: string, fallback: T): Promise<T> {
  try {
    const content = await fs.readFile(filePath, "utf8");
    return JSON.parse(content) as T;
  } catch {
    return fallback;
  }
}

async function writeJsonFile<T>(filePath: string, data: T) {
  await ensureDataDir();
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}

function toPropertyRecord(property: {
  id: string;
  title: string;
  slug: string;
  description: string;
  location: string;
  sector: string;
  city: string;
  priceInr: number;
  type: string;
  status: string;
  bedrooms: number | null;
  bathrooms: number | null;
  areaSqft: number;
  featured: boolean;
  imageUrls: string;
  amenities: string;
  sourceType: string;
  sourcePlatform: string | null;
  sourceUrl: string | null;
  priceLastVerified: string | null;
  photoRightsStatus: string;
  approvalStatus: string;
  boostTier: string;
  leadRoutingMode: string;
  featuredRequested: boolean;
  listingContactName: string | null;
  listingContactPhone: string | null;
  listingContactRole: string | null;
  vendorId: string | null;
  createdAt: Date;
  updatedAt: Date;
}): PropertyRecord {
  return {
    ...property,
    createdAt: property.createdAt.toISOString(),
    updatedAt: property.updatedAt.toISOString()
  };
}

function normalizePropertyRecord(property: Partial<PropertyRecord> & Pick<PropertyRecord, "id" | "title" | "slug" | "description" | "location" | "sector" | "city" | "priceInr" | "type" | "status" | "bedrooms" | "bathrooms" | "areaSqft" | "featured" | "imageUrls" | "amenities" | "createdAt" | "updatedAt">): PropertyRecord {
  return {
    
    sourcePlatform: property.sourcePlatform ?? null,
    sourceUrl: property.sourceUrl ?? null,
    priceLastVerified: property.priceLastVerified ?? null,
    photoRightsStatus: "OWNER_UPLOADED",
    boostTier: "STANDARD",
    leadRoutingMode: "PLATFORM",
    featuredRequested: false,
    sourceType: "ADMIN",
    approvalStatus: "PENDING",
    listingContactName: null,
    listingContactPhone: null,
    listingContactRole: property.listingContactRole ?? null,
    vendorId: null,
    ...property
  };
}

function toLeadRecord(lead: {
  id: string;
  name: string;
  phone: string;
  requirement: string;
  propertyId: string | null;
  routingStatus: string;
  sourceChannel: string;
  createdAt: Date;
}): LeadRecord {
  return {
    ...lead,
    createdAt: lead.createdAt.toISOString()
  };
}

export async function getAllProperties() {
  if (useJsonFallback()) {
    const properties = await readJsonFile<PropertyRecord[]>(propertiesPath, []);
    return properties.map(normalizePropertyRecord);
  }

  const properties = await prisma.property.findMany({
    orderBy: [{ featured: "desc" }, { updatedAt: "desc" }]
  });
  return properties.map(toPropertyRecord);
}

export async function getAllLeads() {
  if (useJsonFallback()) {
    const leads = await readJsonFile<LeadRecord[]>(leadsPath, []);
    return leads.map((lead) => ({
      ...lead,
      routingStatus: lead.routingStatus ?? "PLATFORM",
      sourceChannel: lead.sourceChannel ?? "WEBSITE"
    }));
  }

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" }
  });
  return leads.map(toLeadRecord);
}

export async function getPropertyBySlugFromStore(slug: string) {
  if (useJsonFallback()) {
    const properties = await getAllProperties();
    return properties.find((property) => property.slug === slug) || null;
  }

  const property = await prisma.property.findUnique({
    where: { slug }
  });
  return property ? toPropertyRecord(property) : null;
}

export async function getPropertyByIdFromStore(id: string) {
  if (useJsonFallback()) {
    const properties = await getAllProperties();
    return properties.find((property) => property.id === id) || null;
  }

  const property = await prisma.property.findUnique({
    where: { id }
  });
  return property ? toPropertyRecord(property) : null;
}

export async function createPropertyInStore(input: PropertyInput) {
  const data: PropertyInput = {
    ...input,
    sourceType: input.sourceType || "ADMIN",
   
    sourceUrl: input.sourceUrl || null,
    priceLastVerified: input.priceLastVerified || null,
    photoRightsStatus: input.photoRightsStatus || "OWNER_UPLOADED",
    approvalStatus: input.approvalStatus || "APPROVED",
    boostTier: input.boostTier || (input.featured ? "FEATURED" : "STANDARD"),
    leadRoutingMode: input.leadRoutingMode || "PLATFORM",
    featuredRequested: input.featuredRequested || false,
    listingContactName: input.listingContactName || null,
    listingContactPhone: input.listingContactPhone || null,
    listingContactRole: input.listingContactRole || null,
    vendorId: input.vendorId || null
  };

  if (useJsonFallback()) {
    const properties = await getAllProperties();
    const now = new Date().toISOString();
    const property: PropertyRecord = {
      ...data,
      id: crypto.randomUUID(),
      slug: slugify(data.title),
      createdAt: now,
      updatedAt: now
    };
    properties.unshift(property);
    await writeJsonFile(propertiesPath, properties);
    return property;
  }

  const property = await prisma.property.create({
    data: {
      ...data,
      slug: slugify(data.title)
    }
  });

  return toPropertyRecord(property);
}

export async function updatePropertyInStore(id: string, input: PropertyInput) {
  const data: PropertyInput = {
    ...input,
    sourceType: input.sourceType || "ADMIN",
    
    sourceUrl: input.sourceUrl || null,
    priceLastVerified: input.priceLastVerified || null,
    photoRightsStatus: input.photoRightsStatus || "OWNER_UPLOADED",
    approvalStatus: input.approvalStatus || "APPROVED",
    boostTier: input.boostTier || (input.featured ? "FEATURED" : "STANDARD"),
    leadRoutingMode: input.leadRoutingMode || "PLATFORM",
    featuredRequested: input.featuredRequested || false,
    listingContactName: input.listingContactName || null,
    listingContactPhone: input.listingContactPhone || null,
    listingContactRole: input.listingContactRole || null,
    vendorId: input.vendorId || null
  };

  if (useJsonFallback()) {
    const properties = await getAllProperties();
    const index = properties.findIndex((property) => property.id === id);

    if (index === -1) {
      return null;
    }

    const updated: PropertyRecord = {
      ...properties[index],
      ...data,
      slug: slugify(data.title),
      updatedAt: new Date().toISOString()
    };

    properties[index] = updated;
    await writeJsonFile(propertiesPath, properties);
    return updated;
  }

  try {
    const property = await prisma.property.update({
      where: { id },
      data: {
        ...data,
        slug: slugify(data.title)
      }
    });

    return toPropertyRecord(property);
  } catch {
    return null;
  }
}

export async function updatePropertyMonetizationInStore(
  id: string,
  updates: Partial<
    Pick<PropertyRecord, "approvalStatus" | "boostTier" | "leadRoutingMode" | "featuredRequested" | "featured">
  >
) {
  const existing = await getPropertyByIdFromStore(id);

  if (!existing) {
    return null;
  }

  return updatePropertyInStore(id, {
    ...toPropertyInput(existing),
    ...updates
  });
}

export async function deletePropertyInStore(id: string) {
  if (useJsonFallback()) {
    const properties = await getAllProperties();
    await writeJsonFile(
      propertiesPath,
      properties.filter((property) => property.id !== id)
    );
    return;
  }

  await prisma.property.delete({
    where: { id }
  });
}

type LeadInput = Pick<LeadRecord, "name" | "phone" | "requirement"> & {
  propertyId?: string | null;
  routingStatus?: string;
  sourceChannel?: string;
};

export async function createLeadInStore(input: LeadInput) {
  const routingStatus = input.routingStatus ?? "PLATFORM";

  if (useJsonFallback()) {
    const leads = await getAllLeads();
    const lead: LeadRecord = {
      ...input,
      propertyId: input.propertyId ?? null,
      routingStatus,
      sourceChannel: input.sourceChannel || "WEBSITE",
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    };
    leads.unshift(lead);
    await writeJsonFile(leadsPath, leads);
    return lead;
  }

  const lead = await prisma.lead.create({
    data: {
      ...input,
      routingStatus,
      sourceChannel: input.sourceChannel || "WEBSITE"
    }
  });

  return toLeadRecord(lead);
}
