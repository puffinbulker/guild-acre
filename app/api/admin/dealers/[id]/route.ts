import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getAdminCookieName, verifySessionToken } from "@/lib/auth";
import { updateDealerStatusInStore } from "@/lib/data-store";
import { dealerStatusSchema } from "@/lib/validations";

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
  const parsed = dealerStatusSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid dealer update payload." }, { status: 400 });
  }

  const { id } = await context.params;
  const dealer = await updateDealerStatusInStore(id, parsed.data.status);

  if (!dealer) {
    return NextResponse.json({ error: "Dealer not found." }, { status: 404 });
  }

  return NextResponse.json({ success: true, dealer });
}
