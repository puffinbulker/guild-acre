import crypto from "node:crypto";

const ADMIN_COOKIE_NAME = "ge_admin_session";
const DEALER_COOKIE_NAME = "ge_dealer_session";
const DEFAULT_ADMIN_EMAIL = "admin@guildacre.com";
const DEFAULT_ADMIN_PASSWORD = "sunny@1234";

type DealerSession = {
  dealerId: string;
  email: string;
};

function getSecret() {
  return process.env.ADMIN_COOKIE_SECRET || "dev-secret";
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function signPayload(payload: string) {
  return crypto.createHmac("sha256", getSecret()).update(payload).digest("hex");
}

function encodeSignedPayload(payload: string) {
  return Buffer.from(`${payload}:${signPayload(payload)}`).toString("base64url");
}

function decodeSignedPayload(token?: string) {
  if (!token) {
    return null;
  }

  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const lastColon = decoded.lastIndexOf(":");

    if (lastColon === -1) {
      return null;
    }

    const payload = decoded.slice(0, lastColon);
    const signature = decoded.slice(lastColon + 1);

    if (!safeEqual(signature, signPayload(payload))) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export function getAdminCookieName() {
  return ADMIN_COOKIE_NAME;
}

export function getDealerCookieName() {
  return DEALER_COOKIE_NAME;
}

export function createSessionToken(email: string) {
  return encodeSignedPayload(`admin:${email}:${Date.now()}`);
}

export function createDealerSessionToken(dealerId: string, email: string) {
  return encodeSignedPayload(`dealer:${dealerId}:${email}:${Date.now()}`);
}

export function hashAdminPassword(password: string, salt: string) {
  return crypto.scryptSync(password, salt, 64).toString("hex");
}

export function createPasswordHash(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  return `${salt}:${hashAdminPassword(password, salt)}`;
}

export function verifyPasswordHash(password: string, value: string) {
  const [salt, storedHash] = value.split(":");

  if (!salt || !storedHash) {
    return false;
  }

  const computed = hashAdminPassword(password, salt);
  return safeEqual(computed, storedHash);
}

export function verifyAdminPassword(password: string) {
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;
  const plainPassword = process.env.ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD;

  if (passwordHash && verifyPasswordHash(password, passwordHash)) {
    return true;
  }

  return password === plainPassword;
}

export function verifySessionToken(token?: string) {
  const payload = decodeSignedPayload(token);

  if (!payload) {
    return false;
  }

  const [kind, email] = payload.split(":");

  if (kind !== "admin" || !email) {
    return false;
  }

  const allowedEmails = new Set([
    DEFAULT_ADMIN_EMAIL,
    process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL,
    "admin@guildacre.com"
  ]);

  return allowedEmails.has(email);
}

export function verifyDealerSessionToken(token?: string): DealerSession | null {
  const payload = decodeSignedPayload(token);

  if (!payload) {
    return null;
  }

  const [kind, dealerId, email] = payload.split(":");

  if (kind !== "dealer" || !dealerId || !email) {
    return null;
  }

  return { dealerId, email };
}
