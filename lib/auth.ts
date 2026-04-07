import crypto from "node:crypto";

const COOKIE_NAME = "ge_admin_session";
const DEFAULT_ADMIN_EMAIL = "admin@guildacre.com";
const DEFAULT_ADMIN_PASSWORD = "GuildAcre@123";

function getSecret() {
  return process.env.ADMIN_COOKIE_SECRET || "dev-secret";
}

export function getAdminCookieName() {
  return COOKIE_NAME;
}

export function createSessionToken(email: string) {
  const payload = `${email}:${Date.now()}`;
  const signature = crypto.createHmac("sha256", getSecret()).update(payload).digest("hex");
  return Buffer.from(`${payload}:${signature}`).toString("base64url");
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

export function hashAdminPassword(password: string, salt: string) {
  return crypto.scryptSync(password, salt, 64).toString("hex");
}

export function verifyAdminPassword(password: string) {
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;
  const plainPassword = process.env.ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD;

  if (passwordHash) {
    const [salt, storedHash] = passwordHash.split(":");

    if (salt && storedHash) {
      const computed = hashAdminPassword(password, salt);

      if (safeEqual(computed, storedHash)) {
        return true;
      }
    }
  }

  return password === plainPassword;
}

export function verifySessionToken(token?: string) {
  if (!token) {
    return false;
  }

  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const [email, issuedAt, signature] = decoded.split(":");
    const payload = `${email}:${issuedAt}`;
    const expected = crypto.createHmac("sha256", getSecret()).update(payload).digest("hex");
    return signature === expected && email === (process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL);
  } catch {
    return false;
  }
}
