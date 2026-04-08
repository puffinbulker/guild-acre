import { NextResponse } from "next/server";
import {
  createDealerSessionToken,
  getDealerCookieName,
  verifyPasswordHash
} from "@/lib/auth";
import { getDealerCredentialByEmailFromStore } from "@/lib/data-store";
import { dealerLoginSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = dealerLoginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid login payload." }, { status: 400 });
  }

  const dealer = await getDealerCredentialByEmailFromStore(parsed.data.email);

  if (!dealer?.passwordHash || !verifyPasswordHash(parsed.data.password, dealer.passwordHash)) {
    return NextResponse.json({ error: "Invalid dealer credentials." }, { status: 401 });
  }

  if (dealer.status === "REJECTED" || dealer.status === "SUSPENDED") {
    return NextResponse.json(
      { error: "This dealer account is not currently allowed to access the platform." },
      { status: 403 }
    );
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(getDealerCookieName(), createDealerSessionToken(dealer.id, dealer.email), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12
  });

  return response;
}
