import { NextResponse } from "next/server";
import { createLeadInStore } from "@/lib/data-store";
import { leadSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid lead payload." }, { status: 400 });
  }

  const lead = await createLeadInStore({
    ...parsed.data,
    propertyId: parsed.data.propertyId || null
  });

  return NextResponse.json({ success: true, lead }, { status: 201 });
}
