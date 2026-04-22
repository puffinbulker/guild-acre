import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    // Debug log (temporary)
    console.log("ENV USER:", ADMIN_USERNAME);
    console.log("ENV PASS:", ADMIN_PASSWORD);

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const res = NextResponse.json({ success: true });

      res.cookies.set("guildacre_admin", "true", {
        httpOnly: true,
        sameSite: "lax",
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