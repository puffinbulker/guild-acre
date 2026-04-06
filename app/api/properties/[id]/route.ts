import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getAdminCookieName, verifySessionToken } from "@/lib/auth";
import {
  deletePropertyInStore,
  getPropertyByIdFromStore,
  updatePropertyInStore
} from "@/lib/data-store";
import { propertySchema } from "@/lib/validations";

type Props = {
  params: Promise<{ id: string }>;
};

async function authorize() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getAdminCookieName())?.value;
  return verifySessionToken(token);
}

export async function GET(_request: Request, { params }: Props) {
  const { id } = await params;
  const property = await getPropertyByIdFromStore(id);

  if (!property) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(property);
}

export async function PATCH(request: Request, { params }: Props) {
  if (!(await authorize())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const parsed = propertySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid property payload." }, { status: 400 });
  }

  const property = await updatePropertyInStore(id, {
    ...parsed.data,
    bedrooms: parsed.data.bedrooms ?? null,
    bathrooms: parsed.data.bathrooms ?? null,
    imageUrls: JSON.stringify(parsed.data.imageUrls),
    amenities: JSON.stringify(parsed.data.amenities)
  });

  if (!property) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(property);
}

export async function DELETE(_request: Request, { params }: Props) {
  if (!(await authorize())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  await deletePropertyInStore(id);
  return NextResponse.json({ success: true });
}
