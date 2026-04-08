import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { prisma } from "@/lib/prisma";
import type { DealerRecord, LeadRecord, PropertyRecord } from "@/types";
import { createPasswordHash } from "@/lib/auth";
import { slugify } from "@/lib/utils";

const dataDir = path.join(process.cwd(), "data");
const propertiesPath = path.join(dataDir, "properties.json");
const leadsPath = path.join(dataDir, "leads.json");
const dealersPath = path.join(dataDir, "dealers.json");

type PropertyInput = Omit<PropertyRecord, "id" | "slug" | "createdAt" | "updatedAt">;
type DealerInput = {
  name: string;
  companyName?: string | null;
  email: string;
  phone: string;
  password: string;
  role: string;
  serviceAreas?: string[];
  status?: string;
};

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
    approvalStatus: property.approvalStatus,
    listingContactName: property.listingContactName,
    listingContactPhone: property.listingContactPhone,
    listingContactRole: property.listingContactRole,
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
  approvalStatus: string;
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
    sourceType: "ADMIN",
    approvalStatus: "APPROVED",
    listingContactName: null,
    listingContactPhone: null,
    listingContactRole: null,
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
  createdAt: Date;
}): LeadRecord {
  return {
    ...lead,
    createdAt: lead.createdAt.toISOString()
  };
}

function toDealerRecord(dealer: {
  id: string;
  name: string;
  companyName: string | null;
  email: string;
  phone: string;
  role: string;
  status: string;
  serviceAreas: string;
  createdAt: Date;
  updatedAt: Date;
}): DealerRecord {
  return {
    ...dealer,
    createdAt: dealer.createdAt.toISOString(),
    updatedAt: dealer.updatedAt.toISOString()
  };
}

function normalizeDealerRecord(
  dealer: Partial<DealerRecord> &
    Pick<
      DealerRecord,
      "id" | "name" | "email" | "phone" | "role" | "status" | "createdAt" | "updatedAt"
    > & { passwordHash?: string }
): DealerRecord & { passwordHash?: string } {
  return {
    companyName: null,
    serviceAreas: "[]",
    ...dealer
  };
}

function stripDealerPassword(
  dealer: { passwordHash?: string } & DealerRecord
): DealerRecord {
  const { passwordHash: _passwordHash, ...safeDealer } = dealer;
  return safeDealer;
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
    return readJsonFile<LeadRecord[]>(leadsPath, []);
  }

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" }
  });
  return leads.map(toLeadRecord);
}

export async function getAllDealers() {
  if (useJsonFallback()) {
    const dealers = await readJsonFile<Array<DealerRecord & { passwordHash?: string }>>(
      dealersPath,
      []
    );
    return dealers.map(normalizeDealerRecord);
  }

  const dealers = await prisma.dealer.findMany({
    orderBy: { updatedAt: "desc" }
  });
  return dealers.map(toDealerRecord);
}

export async function getDealerCredentialByEmailFromStore(email: string) {
  if (useJsonFallback()) {
    const dealers = await readJsonFile<Array<DealerRecord & { passwordHash?: string }>>(
      dealersPath,
      []
    );
    return dealers.find((dealer) => dealer.email.toLowerCase() === email.toLowerCase()) || null;
  }

  return prisma.dealer.findUnique({
    where: { email: email.toLowerCase() }
  });
}

export async function getDealerByIdFromStore(id: string) {
  if (useJsonFallback()) {
    const dealers = await readJsonFile<Array<DealerRecord & { passwordHash?: string }>>(
      dealersPath,
      []
    );
    const dealer = dealers.find((item) => item.id === id);
    return dealer ? stripDealerPassword(normalizeDealerRecord(dealer)) : null;
  }

  const dealer = await prisma.dealer.findUnique({
    where: { id }
  });

  return dealer ? stripDealerPassword(toDealerRecord(dealer)) : null;
}

export async function getDealerByEmailFromStore(email: string) {
  const dealer = await getDealerCredentialByEmailFromStore(email);

  if (!dealer) {
    return null;
  }

  if ((dealer as { createdAt?: Date }).createdAt instanceof Date) {
    return stripDealerPassword(
      toDealerRecord(
        dealer as {
          id: string;
          name: string;
          companyName: string | null;
          email: string;
          phone: string;
          role: string;
          status: string;
          serviceAreas: string;
          createdAt: Date;
          updatedAt: Date;
        }
      )
    );
  }

  return stripDealerPassword(normalizeDealerRecord(dealer as DealerRecord & { passwordHash?: string }));
}

export async function createDealerInStore(input: DealerInput) {
  const passwordHash = createPasswordHash(input.password);

  if (useJsonFallback()) {
    const dealers = await readJsonFile<Array<DealerRecord & { passwordHash?: string }>>(
      dealersPath,
      []
    );

    const dealer = {
      id: crypto.randomUUID(),
      name: input.name,
      companyName: input.companyName || null,
      email: input.email.toLowerCase(),
      phone: input.phone,
      passwordHash,
      role: input.role,
      status: input.status || "PENDING",
      serviceAreas: JSON.stringify(input.serviceAreas || []),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    dealers.unshift(dealer);
    await writeJsonFile(dealersPath, dealers);
    return normalizeDealerRecord(dealer);
  }

  const dealer = await prisma.dealer.create({
    data: {
      name: input.name,
      companyName: input.companyName || null,
      email: input.email.toLowerCase(),
      phone: input.phone,
      passwordHash,
      role: input.role,
      status: input.status || "PENDING",
      serviceAreas: JSON.stringify(input.serviceAreas || [])
    }
  });

  return toDealerRecord(dealer);
}

export async function updateDealerStatusInStore(id: string, status: string) {
  if (useJsonFallback()) {
    const dealers = await readJsonFile<Array<DealerRecord & { passwordHash?: string }>>(
      dealersPath,
      []
    );
    const index = dealers.findIndex((dealer) => dealer.id === id);

    if (index === -1) {
      return null;
    }

    dealers[index] = {
      ...dealers[index],
      status,
      updatedAt: new Date().toISOString()
    };
    await writeJsonFile(dealersPath, dealers);
    return normalizeDealerRecord(dealers[index]);
  }

  try {
    const dealer = await prisma.dealer.update({
      where: { id },
      data: { status }
    });
    return toDealerRecord(dealer);
  } catch {
    return null;
  }
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

export async function getPropertiesByVendorFromStore(vendorId: string) {
  const properties = await getAllProperties();
  return properties.filter((property) => property.vendorId === vendorId);
}

export async function createPropertyInStore(input: PropertyInput) {
  const data: PropertyInput = {
    ...input,
    sourceType: input.sourceType || "ADMIN",
    approvalStatus: input.approvalStatus || "APPROVED",
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

export async function createVendorPropertyInStore(vendorId: string, input: PropertyInput) {
  return createPropertyInStore({
    ...input,
    sourceType: "VENDOR",
    approvalStatus: "PENDING",
    vendorId,
    featured: false
  });
}

export async function updatePropertyInStore(id: string, input: PropertyInput) {
  const data: PropertyInput = {
    ...input,
    sourceType: input.sourceType || "ADMIN",
    approvalStatus: input.approvalStatus || "APPROVED",
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

export async function updateVendorPropertyInStore(
  id: string,
  vendorId: string,
  input: PropertyInput
) {
  const existing = await getPropertyByIdFromStore(id);

  if (!existing || existing.vendorId !== vendorId) {
    return null;
  }

  return updatePropertyInStore(id, {
    ...toPropertyInput(existing),
    ...input,
    sourceType: "VENDOR",
    approvalStatus: existing.approvalStatus === "APPROVED" ? "PENDING" : existing.approvalStatus,
    vendorId,
    featured: false
  });
}

export async function updatePropertyApprovalStatusInStore(id: string, approvalStatus: string) {
  const existing = await getPropertyByIdFromStore(id);

  if (!existing) {
    return null;
  }

  return updatePropertyInStore(id, {
    ...toPropertyInput(existing),
    approvalStatus
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

export async function createLeadInStore(input: Omit<LeadRecord, "id" | "createdAt">) {
  if (useJsonFallback()) {
    const leads = await getAllLeads();
    const lead: LeadRecord = {
      ...input,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    };
    leads.unshift(lead);
    await writeJsonFile(leadsPath, leads);
    return lead;
  }

  const lead = await prisma.lead.create({
    data: input
  });

  return toLeadRecord(lead);
}
