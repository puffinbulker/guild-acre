import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getDealerCookieName, verifyDealerSessionToken } from "@/lib/auth";
import { createVendorPropertyInStore, getDealerByIdFromStore } from "@/lib/data-store";
import { propertySchema } from "@/lib/validations";

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get(getDealerCookieName())?.value;
  const session = verifyDealerSessionToken(token);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const dealer = await getDealerByIdFromStore(session.dealerId);

  if (!dealer) {
    return NextResponse.json({ error: "Dealer account not found." }, { status: 404 });
  }

  if (dealer.status === "REJECTED" || dealer.status === "SUSPENDED") {
    return NextResponse.json(
      { error: "Your dealer account is not allowed to submit inventory right now." },
      { status: 403 }
    );
  }

  const body = await request.json();
  const parsed = propertySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid property payload." }, { status: 400 });
  }

  const property = await createVendorPropertyInStore(session.dealerId, {
    ...parsed.data,
    bedrooms: parsed.data.bedrooms ?? null,
    bathrooms: parsed.data.bathrooms ?? null,
    imageUrls: JSON.stringify(parsed.data.imageUrls),
    amenities: JSON.stringify(parsed.data.amenities),
    sourceType: "VENDOR",
    approvalStatus: "PENDING",
    listingContactName: parsed.data.listingContactName || dealer.name,
    listingContactPhone: parsed.data.listingContactPhone || dealer.phone,
    listingContactRole: parsed.data.listingContactRole || dealer.role.replaceAll("_", " "),
    vendorId: session.dealerId,
    featured: false
  });

  return NextResponse.json({ success: true, property }, { status: 201 });
}
