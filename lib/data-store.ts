import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { prisma } from "@/lib/prisma";
import type { LeadRecord, PropertyRecord } from "@/types";
import { slugify } from "@/lib/utils";

const dataDir = path.join(process.cwd(), "data");
const propertiesPath = path.join(dataDir, "properties.json");
const leadsPath = path.join(dataDir, "leads.json");

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
  createdAt: Date;
  updatedAt: Date;
}): PropertyRecord {
  return {
    ...property,
    createdAt: property.createdAt.toISOString(),
    updatedAt: property.updatedAt.toISOString()
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

export async function getAllProperties() {
  if (useJsonFallback()) {
    return readJsonFile<PropertyRecord[]>(propertiesPath, []);
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

export async function createPropertyInStore(
  input: Omit<PropertyRecord, "id" | "slug" | "createdAt" | "updatedAt">
) {
  if (useJsonFallback()) {
    const properties = await getAllProperties();
    const now = new Date().toISOString();
    const property: PropertyRecord = {
      ...input,
      id: crypto.randomUUID(),
      slug: slugify(input.title),
      createdAt: now,
      updatedAt: now
    };
    properties.unshift(property);
    await writeJsonFile(propertiesPath, properties);
    return property;
  }

  const property = await prisma.property.create({
    data: {
      ...input,
      slug: slugify(input.title)
    }
  });

  return toPropertyRecord(property);
}

export async function updatePropertyInStore(
  id: string,
  input: Omit<PropertyRecord, "id" | "slug" | "createdAt" | "updatedAt">
) {
  if (useJsonFallback()) {
    const properties = await getAllProperties();
    const index = properties.findIndex((property) => property.id === id);

    if (index === -1) {
      return null;
    }

    const updated: PropertyRecord = {
      ...properties[index],
      ...input,
      slug: slugify(input.title),
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
        ...input,
        slug: slugify(input.title)
      }
    });

    return toPropertyRecord(property);
  } catch {
    return null;
  }
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
