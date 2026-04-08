import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getAdminCookieName, verifySessionToken } from "@/lib/auth";
import { PROPERTY_TYPES } from "@/lib/constants";
import { createPropertyInStore, getAllProperties } from "@/lib/data-store";
import { propertySchema } from "@/lib/validations";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location");
  const type = searchParams.get("type");

  const properties = (await getAllProperties()).filter((property) => {
    if (property.approvalStatus !== "APPROVED") {
      return false;
    }

    const matchesLocation = !location || property.location.toLowerCase().includes(location.toLowerCase());
    const matchesType =
      !type || (PROPERTY_TYPES.includes(type as (typeof PROPERTY_TYPES)[number]) && property.type === type);
    return matchesLocation && matchesType;
  });

  return NextResponse.json(properties);
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get(getAdminCookieName())?.value;

  if (!verifySessionToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = propertySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid property payload." }, { status: 400 });
  }

  const property = await createPropertyInStore({
    ...parsed.data,
    bedrooms: parsed.data.bedrooms ?? null,
    bathrooms: parsed.data.bathrooms ?? null,
    imageUrls: JSON.stringify(parsed.data.imageUrls),
    amenities: JSON.stringify(parsed.data.amenities),
    sourceType: parsed.data.sourceType || "ADMIN",
    approvalStatus: parsed.data.approvalStatus || "APPROVED",
    listingContactName: parsed.data.listingContactName || null,
    listingContactPhone: parsed.data.listingContactPhone || null,
    listingContactRole: parsed.data.listingContactRole || null,
    vendorId: null
  });

  return NextResponse.json(property, { status: 201 });
}
