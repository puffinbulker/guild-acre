import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getDealerCookieName } from "@/lib/auth";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete(getDealerCookieName());
  return NextResponse.json({ success: true });
}
