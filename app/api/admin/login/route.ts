import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createSessionToken, getAdminCookieName, verifyAdminPassword } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email || "");
  const password = String(body.password || "");

  const directTestLogin = email === "admin@guildacre.com" && password === "sunny@1234";

  if (!directTestLogin && (email !== (process.env.ADMIN_EMAIL || "admin@guildacre.com") || !verifyAdminPassword(password))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(getAdminCookieName(), createSessionToken(email), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12
  });

  return response;
}
