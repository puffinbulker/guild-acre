const PROD_SITE_URL = "https://www.guildacre.com";

export function getCanonicalSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    PROD_SITE_URL;

  const normalized = raw.startsWith("http") ? raw : `https://${raw}`;

  try {
    const url = new URL(normalized);

    if (url.hostname.endsWith(".vercel.app")) {
      return PROD_SITE_URL;
    }

    return url.origin;
  } catch {
    return PROD_SITE_URL;
  }
}
