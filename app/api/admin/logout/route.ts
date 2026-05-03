import { NextResponse } from "next/server";
import { getAdminCookieName } from "@/lib/auth";

export async function POST() {
  const res = NextResponse.json({ success: true });
  res.cookies.set(getAdminCookieName(), "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });
  res.cookies.set("guildacre_admin", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });
  return res;
}
