"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { formatPrice, parseJsonArray } from "@/lib/utils";
import {
  DEALER_STATUSES,
  PROPERTY_STATUSES,
  PROPERTY_TYPES,
  type PropertyStatusValue,
  type PropertyTypeValue
} from "@/lib/constants";
import type { DealerRecord, LeadRecord, PropertyRecord } from "@/types";

type Props = {
  properties: PropertyRecord[];
  leads: LeadRecord[];
  dealers: DealerRecord[];
};

type FeedbackState = {
  kind: "success" | "error";
  message: string;
};

type FormShape = {
  id?: string;
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
  featured: boolean;
  imageUrls: string;
  amenities: string;
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
  featured: false,
  imageUrls: "",
  amenities: ""
};

export function AdminDashboard({ properties, leads, dealers }: Props) {
  const [form, setForm] = useState<FormShape>(emptyForm);
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"ALL" | PropertyTypeValue>("ALL");
  const [featuredFilter, setFeaturedFilter] = useState<"ALL" | "FEATURED">("ALL");
  const router = useRouter();

  const propertyMap = useMemo(
    () => new Map(properties.map((property) => [property.id, property])),
    [properties]
  );

  const dealerMap = useMemo(() => new Map(dealers.map((dealer) => [dealer.id, dealer])), [dealers]);

  const leadSummary = useMemo(
    () =>
      [...leads]
        .sort(
          (left, right) =>
            new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime()
        )
        .slice(0, 6),
    [leads]
  );

  const filteredProperties = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return properties.filter((property) => {
      const matchesQuery =
        !normalizedQuery ||
        [
          property.title,
          property.location,
          property.sector,
          property.city,
          property.status,
          property.type
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      const matchesType = typeFilter === "ALL" || property.type === typeFilter;
      const matchesFeatured = featuredFilter === "ALL" || property.featured;

      return matchesQuery && matchesType && matchesFeatured;
    });
  }, [featuredFilter, properties, query, typeFilter]);

  const stats = useMemo(() => {
    const featured = properties.filter((property) => property.featured).length;
    const readyToMove = properties.filter((property) => property.status === "READY_TO_MOVE").length;
    const averageTicket = properties.length
      ? Math.round(
          properties.reduce((total, property) => total + property.priceInr, 0) / properties.length
        )
      : 0;

    return {
      totalListings: properties.length,
      approvedListings: properties.filter((property) => property.approvalStatus === "APPROVED").length,
      pendingListings: properties.filter((property) => property.approvalStatus === "PENDING").length,
      featured,
      readyToMove,
      totalLeads: leads.length,
      totalDealers: dealers.length,
      pendingDealers: dealers.filter((dealer) => dealer.status === "PENDING").length,
      averageTicket,
      latestLead: leadSummary[0]
    };
  }, [dealers, leadSummary, leads.length, properties]);

  async function submitProperty(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setFeedback(null);

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
      featured: form.featured,
      imageUrls: form.imageUrls
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
      amenities: form.amenities
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    };

    const endpoint = form.id ? `/api/properties/${form.id}` : "/api/properties";
    const method = form.id ? "PATCH" : "POST";
    const isEditing = Boolean(form.id);

    const response = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setLoading(false);

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      setFeedback({
        kind: "error",
        message: error.error || "Unable to save property."
      });
      return;
    }

    setForm(emptyForm);
    setFeedback({
      kind: "success",
      message: isEditing ? "Property updated successfully." : "Property created successfully."
    });
    router.refresh();
  }

  function startEdit(property: PropertyRecord) {
    setForm({
      id: property.id,
      title: property.title,
      description: property.description,
      location: property.location,
      sector: property.sector,
      city: property.city,
      priceInr: String(property.priceInr),
      type: property.type as PropertyTypeValue,
      status: property.status as PropertyStatusValue,
      bedrooms: property.bedrooms ? String(property.bedrooms) : "",
      bathrooms: property.bathrooms ? String(property.bathrooms) : "",
      areaSqft: String(property.areaSqft),
      featured: property.featured,
      imageUrls: parseJsonArray(property.imageUrls).join("\n"),
      amenities: parseJsonArray(property.amenities).join(", ")
    });
    setFeedback({
      kind: "success",
      message: `Editing ${property.title}`
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function removeProperty(id: string) {
    const confirmed = window.confirm("Delete this property?");
    if (!confirmed) {
      return;
    }

    const response = await fetch(`/api/properties/${id}`, { method: "DELETE" });
    if (!response.ok) {
      setFeedback({
        kind: "error",
        message: "Unable to delete this property right now."
      });
      return;
    }

    router.refresh();
    setFeedback({
      kind: "success",
      message: "Property deleted successfully."
    });
    if (form.id === id) {
      setForm(emptyForm);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  async function updateDealerStatus(id: string, status: string) {
    const response = await fetch(`/api/admin/dealers/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });

    if (!response.ok) {
      setFeedback({
        kind: "error",
        message: "Unable to update dealer status right now."
      });
      return;
    }

    setFeedback({
      kind: "success",
      message: `Dealer status updated to ${status.toLowerCase()}.`
    });
    router.refresh();
  }

  async function updateListingModeration(id: string, approvalStatus: string) {
    const response = await fetch(`/api/admin/listing-moderation/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ approvalStatus })
    });

    if (!response.ok) {
      setFeedback({
        kind: "error",
        message: "Unable to update listing moderation status."
      });
      return;
    }

    setFeedback({
      kind: "success",
      message: `Listing marked ${approvalStatus.toLowerCase()}.`
    });
    router.refresh();
  }

  return (
    <div className="admin-shell">
      <div className="section-head">
        <div>
          <span className="section-tag">Admin Panel</span>
          <h1>Manage Gurgaon listings</h1>
        </div>
        <button type="button" className="button button--ghost" onClick={logout}>
          Logout
        </button>
      </div>

      <section className="admin-stat-grid">
        <article className="admin-stat-card">
          <span>Live listings</span>
          <strong>{stats.approvedListings}</strong>
          <p>{stats.pendingListings} pending moderation • {filteredProperties.length} visible in this admin view</p>
        </article>
        <article className="admin-stat-card">
          <span>Featured inventory</span>
          <strong>{stats.featured}</strong>
          <p>{stats.readyToMove} ready-to-move opportunities</p>
        </article>
        <article className="admin-stat-card">
          <span>Average ticket size</span>
          <strong>{formatPrice(stats.averageTicket)}</strong>
          <p>Across all Gurgaon listings</p>
        </article>
        <article className="admin-stat-card">
          <span>Lead inbox</span>
          <strong>{stats.totalLeads}</strong>
          <p>
            {stats.latestLead
              ? `Latest enquiry from ${stats.latestLead.name}`
              : "No enquiries captured yet"}
          </p>
        </article>
        <article className="admin-stat-card">
          <span>Dealer accounts</span>
          <strong>{stats.totalDealers}</strong>
          <p>{stats.pendingDealers} waiting for approval or review</p>
        </article>
      </section>

      <div className="admin-grid">
        <section className="card">
          <div className="admin-panel-head">
            <div>
              <h2>{form.id ? "Edit property" : "Add property"}</h2>
              <p>Keep listings fresh with clear pricing, images, and location details.</p>
            </div>
            {form.id ? (
              <span className="admin-badge admin-badge--featured">Editing mode</span>
            ) : null}
          </div>

          <form className="admin-form" onSubmit={submitProperty}>
            <input
              value={form.title}
              onChange={(event) => setForm({ ...form, title: event.target.value })}
              placeholder="Property title"
              required
            />
            <textarea
              value={form.description}
              onChange={(event) => setForm({ ...form, description: event.target.value })}
              placeholder="Description"
              required
            />
            <div className="admin-form__split">
              <input
                value={form.location}
                onChange={(event) => setForm({ ...form, location: event.target.value })}
                placeholder="Location"
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
            <label className="admin-checkbox">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(event) => setForm({ ...form, featured: event.target.checked })}
              />
              Mark as featured
            </label>
            <div className="admin-actions">
              <button type="submit" className="button" disabled={loading}>
                {loading ? "Saving..." : form.id ? "Update property" : "Create property"}
              </button>
              {form.id ? (
                <button
                  type="button"
                  className="button button--ghost"
                  onClick={() => {
                    setForm(emptyForm);
                    setFeedback(null);
                  }}
                >
                  Cancel edit
                </button>
              ) : null}
            </div>
            {feedback ? (
              <p
                className={
                  feedback.kind === "error" ? "form-status form-status--error" : "form-status"
                }
              >
                {feedback.message}
              </p>
            ) : null}
          </form>
        </section>

        <section className="card">
          <div className="admin-panel-head">
            <div>
              <h2>Listing control</h2>
              <p>Search, audit, and jump into edits faster.</p>
            </div>
            <span className="admin-badge">{filteredProperties.length} visible</span>
          </div>

          <div className="admin-toolbar">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, sector, location, or status"
            />
            <select
              value={typeFilter}
              onChange={(event) =>
                setTypeFilter(event.target.value as "ALL" | PropertyTypeValue)
              }
            >
              <option value="ALL">All property types</option>
              {PROPERTY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type.replaceAll("_", " ")}
                </option>
              ))}
            </select>
            <select
              value={featuredFilter}
              onChange={(event) =>
                setFeaturedFilter(event.target.value as "ALL" | "FEATURED")
              }
            >
              <option value="ALL">All listings</option>
              <option value="FEATURED">Featured only</option>
            </select>
          </div>

          <div className="admin-cards">
            {filteredProperties.map((property) => (
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
                  {property.featured ? (
                    <span className="admin-badge admin-badge--featured">Featured</span>
                  ) : null}
                </div>
                <div className="admin-card__facts">
                  <span>{property.areaSqft.toLocaleString("en-IN")} sq.ft.</span>
                  <span>{property.bedrooms ? `${property.bedrooms} bed` : "Custom layout"}</span>
                  <span>{property.bathrooms ? `${property.bathrooms} bath` : "Bath on request"}</span>
                </div>
                <div className="admin-actions">
                  <button
                    type="button"
                    className="text-link-button"
                    onClick={() => startEdit(property)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="text-link-button"
                    onClick={() => removeProperty(property.id)}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
            {!filteredProperties.length ? (
              <div className="admin-empty">
                No listings match the current filters. Try clearing the search or featured filter.
              </div>
            ) : null}
          </div>

          <div className="admin-panel-head admin-panel-head--spaced">
            <div>
              <h2>Dealer onboarding</h2>
              <p>Approve brokers, owners, builders, and channel partners before scaling inventory.</p>
            </div>
            <span className="admin-badge">{dealers.length} accounts</span>
          </div>

          <div className="admin-lead-grid">
            {dealers.map((dealer) => (
              <article className="admin-card admin-card--lead" key={dealer.id}>
                <div className="admin-card__head">
                  <div className="admin-card__info">
                    <strong>{dealer.companyName || dealer.name}</strong>
                    <p>{dealer.role.replaceAll("_", " ")} • {dealer.email}</p>
                  </div>
                  <span className="admin-badge">{dealer.status}</span>
                </div>
                <p>{dealer.phone}</p>
                <div className="admin-card__meta">
                  <span className="admin-badge">
                    {(() => {
                      try {
                        return JSON.parse(dealer.serviceAreas).slice(0, 2).join(", ") || "Gurgaon";
                      } catch {
                        return "Gurgaon";
                      }
                    })()}
                  </span>
                </div>
                <div className="admin-actions">
                  {DEALER_STATUSES.filter((status) => status !== dealer.status).map((status) => (
                    <button
                      key={status}
                      type="button"
                      className="text-link-button"
                      onClick={() => updateDealerStatus(dealer.id, status)}
                    >
                      Mark {status.toLowerCase()}
                    </button>
                  ))}
                </div>
              </article>
            ))}
            {!dealers.length ? (
              <div className="admin-empty">
                Dealer registrations will appear here once marketplace partners join.
              </div>
            ) : null}
          </div>

          <div className="admin-panel-head admin-panel-head--spaced">
            <div>
              <h2>Listing moderation queue</h2>
              <p>Approve vendor-submitted listings before they appear in the public Gurgaon marketplace.</p>
            </div>
            <span className="admin-badge">
              {properties.filter((property) => property.approvalStatus === "PENDING").length} pending
            </span>
          </div>

          <div className="admin-lead-grid">
            {properties
              .filter((property) => property.sourceType === "VENDOR" || property.approvalStatus !== "APPROVED")
              .map((property) => (
                <article className="admin-card admin-card--lead" key={property.id}>
                  <div className="admin-card__head">
                    <div className="admin-card__info">
                      <strong>{property.title}</strong>
                      <p>
                        {(property.vendorId && dealerMap.get(property.vendorId)?.companyName) ||
                          dealerMap.get(property.vendorId || "")?.name ||
                          "Marketplace partner"}
                      </p>
                    </div>
                    <span className="admin-badge">{property.approvalStatus}</span>
                  </div>
                  <p>
                    {property.location}, {property.sector} • {property.type.replaceAll("_", " ")}
                  </p>
                  <div className="admin-card__meta">
                    <span className="admin-badge">{formatPrice(property.priceInr)}</span>
                    <span className="admin-badge">{property.status.replaceAll("_", " ")}</span>
                  </div>
                  <div className="admin-actions">
                    {["APPROVED", "PENDING", "REJECTED"]
                      .filter((status) => status !== property.approvalStatus)
                      .map((status) => (
                        <button
                          key={status}
                          type="button"
                          className="text-link-button"
                          onClick={() => updateListingModeration(property.id, status)}
                        >
                          Mark {status.toLowerCase()}
                        </button>
                      ))}
                  </div>
                </article>
              ))}
          </div>

          <div className="admin-panel-head admin-panel-head--spaced">
            <div>
              <h2>Recent leads</h2>
              <p>Stay on top of the latest buyer conversations.</p>
            </div>
            <span className="admin-badge">{leadSummary.length} recent</span>
          </div>

          <div className="admin-lead-grid">
            {leadSummary.map((lead) => (
              <article className="admin-card admin-card--lead" key={lead.id}>
                <div className="admin-card__head">
                  <div className="admin-card__info">
                    <strong>{lead.name}</strong>
                    <p>{formatLeadTime(lead.createdAt)}</p>
                  </div>
                  <a className="text-link-button" href={`tel:${lead.phone}`}>
                    {lead.phone}
                  </a>
                </div>
                <p>{lead.requirement}</p>
                <div className="admin-card__meta">
                  <span className="admin-badge">
                    {lead.propertyId && propertyMap.has(lead.propertyId)
                      ? propertyMap.get(lead.propertyId)?.title
                      : "General enquiry"}
                  </span>
                </div>
              </article>
            ))}
            {!leadSummary.length ? (
              <div className="admin-empty">
                New enquiries will appear here as soon as buyers submit the lead form.
              </div>
            ) : null}
          </div>

          <div className="admin-checklist">
            <h3>Launch checklist</h3>
            <ul>
              <li>Connect your custom domain in Vercel and point DNS there.</li>
              <li>Replace demo images and add your real WhatsApp number.</li>
              <li>Switch from plain ADMIN_PASSWORD to a secure hash after launch.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

function formatLeadTime(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(value));
}
