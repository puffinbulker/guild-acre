import { NextResponse } from "next/server";
import { createDealerInStore, getDealerByEmailFromStore } from "@/lib/data-store";
import { dealerRegistrationSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = dealerRegistrationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid dealer signup payload." }, { status: 400 });
  }

  const existing = await getDealerByEmailFromStore(parsed.data.email);

  if (existing) {
    return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
  }

  const dealer = await createDealerInStore(parsed.data);
  return NextResponse.json({ success: true, dealer }, { status: 201 });
}
