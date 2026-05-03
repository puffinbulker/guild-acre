import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  createSessionToken,
  getAdminCookieName,
  verifyAdminPassword,
  verifySessionToken,
} from "@/lib/auth";

const DEFAULT_ADMIN_EMAIL = "admin@guildacre.com";

function isAllowedAdminIdentity(value: unknown) {
  if (typeof value !== "string") {
    return false;
  }

  const identity = value.trim().toLowerCase();
  const allowedIdentities = new Set(
    [
      process.env.ADMIN_EMAIL,
      process.env.ADMIN_USERNAME,
      DEFAULT_ADMIN_EMAIL,
      "admin",
    ]
      .filter(Boolean)
      .map((item) => item!.trim().toLowerCase())
  );

  return allowedIdentities.has(identity);
}

export async function GET(req: NextRequest) {
  const token = req.cookies.get(getAdminCookieName())?.value;
  return NextResponse.json({ authenticated: verifySessionToken(token) });
}

export async function POST(req: NextRequest) {
  try {
    const { email, username, password } = await req.json();
    const identity = email ?? username;

    if (isAllowedAdminIdentity(identity) && verifyAdminPassword(password)) {
      const res = NextResponse.json({ success: true });
      const adminEmail = process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL;

      res.cookies.set(getAdminCookieName(), createSessionToken(adminEmail), {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
      });

      res.cookies.set("guildacre_admin", "true", {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
      });

      return res;
    }

    return NextResponse.json(
      { success: false, message: "Invalid username or password" },
      { status: 401 }
    );

  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Login request failed" },
      { status: 400 }
    );
  }
}
