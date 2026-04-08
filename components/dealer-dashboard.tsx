"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  PROPERTY_STATUSES,
  PROPERTY_TYPES,
  type PropertyStatusValue,
  type PropertyTypeValue
} from "@/lib/constants";
import { formatPrice, parseJsonArray } from "@/lib/utils";
import type { DealerRecord, PropertyRecord } from "@/types";

type Props = {
  dealer: DealerRecord;
  properties: PropertyRecord[];
};

type FormShape = {
  title: string;
  description: string;
  location: string;
  sector: string;
  city: string;
  priceInr: string;
  type: PropertyTypeValue;
  status: PropertyStatusValue;
  bedrooms: string;
  bathrooms: string;
  areaSqft: string;
  imageUrls: string;
  amenities: string;
  listingContactName: string;
  listingContactPhone: string;
  listingContactRole: string;
};

const emptyForm: FormShape = {
  title: "",
  description: "",
  location: "",
  sector: "",
  city: "Gurgaon",
  priceInr: "",
  type: PROPERTY_TYPES[0],
  status: PROPERTY_STATUSES[0],
  bedrooms: "",
  bathrooms: "",
  areaSqft: "",
  imageUrls: "",
  amenities: "",
  listingContactName: "",
  listingContactPhone: "",
  listingContactRole: ""
};

export function DealerDashboard({ dealer, properties }: Props) {
  const router = useRouter();
  const [form, setForm] = useState<FormShape>({
    ...emptyForm,
    listingContactName: dealer.name,
    listingContactPhone: dealer.phone,
    listingContactRole: dealer.role.replaceAll("_", " ")
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const stats = useMemo(
    () => ({
      total: properties.length,
      approved: properties.filter((item) => item.approvalStatus === "APPROVED").length,
      pending: properties.filter((item) => item.approvalStatus === "PENDING").length,
      rejected: properties.filter((item) => item.approvalStatus === "REJECTED").length
    }),
    [properties]
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const payload = {
      title: form.title,
      description: form.description,
      location: form.location,
      sector: form.sector,
      city: form.city,
      priceInr: Number(form.priceInr),
      type: form.type,
      status: form.status,
      bedrooms: form.bedrooms ? Number(form.bedrooms) : null,
      bathrooms: form.bathrooms ? Number(form.bathrooms) : null,
      areaSqft: Number(form.areaSqft),
      featured: false,
      imageUrls: form.imageUrls
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
      amenities: form.amenities
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      listingContactName: form.listingContactName || dealer.name,
      listingContactPhone: form.listingContactPhone || dealer.phone,
      listingContactRole: form.listingContactRole || dealer.role.replaceAll("_", " ")
    };

    const response = await fetch("/api/dealers/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setLoading(false);

    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      setStatus(payload.error || "Unable to submit listing.");
      return;
    }

    setForm({
      ...emptyForm,
      listingContactName: dealer.name,
      listingContactPhone: dealer.phone,
      listingContactRole: dealer.role.replaceAll("_", " ")
    });
    setStatus("Listing submitted. It is now waiting for platform approval.");
    router.refresh();
  }

  async function logout() {
    await fetch("/api/dealers/logout", { method: "POST" });
    window.location.assign("/dealers/login");
  }

  return (
    <div className="admin-shell">
      <div className="section-head">
        <div>
          <span className="section-tag">Dealer Platform</span>
          <h1>Manage your Gurgaon inventory</h1>
          <p className="eyebrow">
            {dealer.companyName || dealer.name} • {dealer.status.replaceAll("_", " ")}
          </p>
        </div>
        <button type="button" className="button button--ghost" onClick={logout}>
          Logout
        </button>
      </div>

      <section className="admin-stat-grid">
        <article className="admin-stat-card">
          <span>Your listings</span>
          <strong>{stats.total}</strong>
          <p>Across sale, rent, lease, land, and premium inventory</p>
        </article>
        <article className="admin-stat-card">
          <span>Approved</span>
          <strong>{stats.approved}</strong>
          <p>Live on the public Gurgaon marketplace</p>
        </article>
        <article className="admin-stat-card">
          <span>Pending review</span>
          <strong>{stats.pending}</strong>
          <p>Waiting for admin moderation</p>
        </article>
        <article className="admin-stat-card">
          <span>Rejected</span>
          <strong>{stats.rejected}</strong>
          <p>Needs revision or better listing quality</p>
        </article>
      </section>

      <div className="admin-grid">
        <section className="card">
          <div className="admin-panel-head">
            <div>
              <h2>Submit a dealer listing</h2>
              <p>
                Post apartments, flats, plots, villas, kothis, commercial assets, farm land, and
                agriculture land for buy, resale, rent, or lease.
              </p>
            </div>
            <span className="admin-badge">{dealer.role.replaceAll("_", " ")}</span>
          </div>

          <form className="admin-form" onSubmit={onSubmit}>
            <input
              value={form.title}
              onChange={(event) => setForm({ ...form, title: event.target.value })}
              placeholder="Listing title"
              required
            />
            <textarea
              value={form.description}
              onChange={(event) => setForm({ ...form, description: event.target.value })}
              placeholder="Describe the inventory, fit, and deal angle"
              required
            />
            <div className="admin-form__split">
              <input
                value={form.location}
                onChange={(event) => setForm({ ...form, location: event.target.value })}
                placeholder="Locality / corridor"
                required
              />
              <input
                value={form.sector}
                onChange={(event) => setForm({ ...form, sector: event.target.value })}
                placeholder="Sector"
                required
              />
            </div>
            <div className="admin-form__split">
              <input
                type="number"
                value={form.priceInr}
                onChange={(event) => setForm({ ...form, priceInr: event.target.value })}
                placeholder="Price in INR"
                required
              />
              <input
                type="number"
                value={form.areaSqft}
                onChange={(event) => setForm({ ...form, areaSqft: event.target.value })}
                placeholder="Area in sq.ft."
                required
              />
            </div>
            <div className="admin-form__split">
              <select
                value={form.type}
                onChange={(event) =>
                  setForm({ ...form, type: event.target.value as PropertyTypeValue })
                }
              >
                {PROPERTY_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type.replaceAll("_", " ")}
                  </option>
                ))}
              </select>
              <select
                value={form.status}
                onChange={(event) =>
                  setForm({ ...form, status: event.target.value as PropertyStatusValue })
                }
              >
                {PROPERTY_STATUSES.map((statusValue) => (
                  <option key={statusValue} value={statusValue}>
                    {statusValue.replaceAll("_", " ")}
                  </option>
                ))}
              </select>
            </div>
            <div className="admin-form__split">
              <input
                type="number"
                value={form.bedrooms}
                onChange={(event) => setForm({ ...form, bedrooms: event.target.value })}
                placeholder="Bedrooms"
              />
              <input
                type="number"
                value={form.bathrooms}
                onChange={(event) => setForm({ ...form, bathrooms: event.target.value })}
                placeholder="Bathrooms"
              />
            </div>
            <div className="admin-form__split">
              <input
                value={form.listingContactName}
                onChange={(event) => setForm({ ...form, listingContactName: event.target.value })}
                placeholder="Primary listing contact"
              />
              <input
                value={form.listingContactPhone}
                onChange={(event) => setForm({ ...form, listingContactPhone: event.target.value })}
                placeholder="Listing contact phone"
              />
            </div>
            <input
              value={form.listingContactRole}
              onChange={(event) => setForm({ ...form, listingContactRole: event.target.value })}
              placeholder="Contact role"
            />
            <textarea
              value={form.imageUrls}
              onChange={(event) => setForm({ ...form, imageUrls: event.target.value })}
              placeholder="Image URLs, one per line"
              required
            />
            <input
              value={form.amenities}
              onChange={(event) => setForm({ ...form, amenities: event.target.value })}
              placeholder="Amenities separated by commas"
            />
            <button type="submit" className="button" disabled={loading}>
              {loading ? "Submitting..." : "Submit for approval"}
            </button>
            {status ? <p className="form-status">{status}</p> : null}
          </form>
        </section>

        <section className="card">
          <div className="admin-panel-head">
            <div>
              <h2>Your marketplace inventory</h2>
              <p>Track which listings are live, under review, or need changes.</p>
            </div>
            <span className="admin-badge">{properties.length} total</span>
          </div>

          <div className="admin-cards">
            {properties.map((property) => (
              <article className="admin-card" key={property.id}>
                <div className="admin-card__head">
                  <div className="admin-card__info">
                    <strong>{property.title}</strong>
                    <p>
                      {property.location}, {property.sector}
                    </p>
                  </div>
                  <strong>{formatPrice(property.priceInr)}</strong>
                </div>
                <div className="admin-card__meta">
                  <span className="admin-badge">{property.type.replaceAll("_", " ")}</span>
                  <span className="admin-badge">{property.status.replaceAll("_", " ")}</span>
                  <span className="admin-badge">{property.approvalStatus}</span>
                </div>
                <div className="admin-card__facts">
                  <span>{property.areaSqft.toLocaleString("en-IN")} sq.ft.</span>
                  <span>{property.sourceType}</span>
                  <span>{property.createdAt.slice(0, 10)}</span>
                </div>
                <p>{parseJsonArray(property.amenities).slice(0, 3).join(" • ") || "No amenities added yet"}</p>
              </article>
            ))}
            {!properties.length ? (
              <div className="admin-empty">
                Your submitted listings will appear here once you start posting inventory.
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
}
