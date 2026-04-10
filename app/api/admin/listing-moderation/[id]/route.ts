import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getAdminCookieName, verifySessionToken } from "@/lib/auth";
import { updatePropertyMonetizationInStore } from "@/lib/data-store";
import { propertyModerationSchema } from "@/lib/validations";

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const cookieStore = await cookies();
  const token = cookieStore.get(getAdminCookieName())?.value;

  if (!verifySessionToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = propertyModerationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid moderation payload." }, { status: 400 });
  }

  if (Object.values(parsed.data).every((value) => value === undefined)) {
    return NextResponse.json({ error: "No listing updates were provided." }, { status: 400 });
  }

  const { id } = await context.params;
  const property = await updatePropertyMonetizationInStore(id, parsed.data);

  if (!property) {
    return NextResponse.json({ error: "Listing not found." }, { status: 404 });
  }

  return NextResponse.json({ success: true, property });
}
