import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getAdminCookieName, verifySessionToken } from "@/lib/auth";
import { isPublicMarketRecord } from "@/lib/market-scope";

const filePath = path.join(process.cwd(), "data", "properties.json");

function readProperties() {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeProperties(properties: any[]) {
  fs.writeFileSync(filePath, JSON.stringify(properties, null, 2), "utf-8");
}

export async function GET() {
  const properties = readProperties();
  const approvedProperties = properties.filter(
    (property: any) =>
      property?.approvalStatus === "APPROVED" &&
      property?.photoRightsStatus &&
      property?.sourceType &&
      Array.isArray(property?.imageUrls) &&
      isPublicMarketRecord(property)
  );

  return NextResponse.json(approvedProperties);
}

export async function POST(req: NextRequest) {
  const isAdmin =
    verifySessionToken(req.cookies.get(getAdminCookieName())?.value) ||
    req.cookies.get("guildacre_admin")?.value === "true";
  if (!isAdmin) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const newProperty = await req.json();
  const properties = readProperties();

  properties.unshift(newProperty);
  writeProperties(properties);

  return NextResponse.json({ success: true, item: newProperty });
}

export async function DELETE(req: NextRequest) {
  const isAdmin =
    verifySessionToken(req.cookies.get(getAdminCookieName())?.value) ||
    req.cookies.get("guildacre_admin")?.value === "true";
  if (!isAdmin) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ success: false, message: "Missing id" }, { status: 400 });
  }

  const properties = readProperties();
  const updated = properties.filter((item: any) => item.id !== id);
  writeProperties(updated);

  return NextResponse.json({ success: true });
}
