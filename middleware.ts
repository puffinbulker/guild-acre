import { NextResponse, type NextRequest } from "next/server";

const privatePathPrefixes = [
  "/campaign-kit",
  "/social",
  "/internal-playbook",
  "/backups",
  "/private-assets",
  "/tmp",
  "/.logs"
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPrivatePath = privatePathPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  if (!isPrivatePath) {
    return NextResponse.next();
  }

  return new NextResponse(null, {
    status: 404,
    headers: {
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow, noarchive"
    }
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"]
};
