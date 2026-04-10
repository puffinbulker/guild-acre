"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { formatPrice, parseJsonArray } from "@/lib/utils";
import {
  BOOST_TIERS,
  DEALER_PLAN_TYPES,
  DEALER_STATUSES,
  LEAD_ROUTING_MODES,
  PROPERTY_STATUSES,
  PROPERTY_TYPES,
  type BoostTierValue,
  type DealerPlanTypeValue,
  type DealerStatusValue,
  type LeadRoutingModeValue,
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
  boostTier: BoostTierValue;
  leadRoutingMode: LeadRoutingModeValue;
  featuredRequested: boolean;
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
  amenities: "",
  boostTier: "STANDARD",
  leadRoutingMode: "PLATFORM",
  featuredRequested: false
};

type DealerDraft = {
  status: DealerStatusValue;
  planType: DealerPlanTypeValue;
  isVerified: boolean;
  featuredSlots: number;
  leadBalance: number;
};

type PropertyDraft = {
  approvalStatus: string;
  boostTier: BoostTierValue;
  leadRoutingMode: LeadRoutingModeValue;
  featuredRequested: boolean;
  featured: boolean;
};

export function AdminDashboardV2({ properties, leads, dealers }: Props) {
  const [form, setForm] = useState<FormShape>(emptyForm);
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"ALL" | PropertyTypeValue>("ALL");
  const [featuredFilter, setFeaturedFilter] = useState<"ALL" | "FEATURED">("ALL");
  const [dealerDrafts, setDealerDrafts] = useState<Record<string, DealerDraft>>({});
  const [propertyDrafts, setPropertyDrafts] = useState<Record<string, PropertyDraft>>({});
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
        .slice(0, 10),
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
          property.type,
          property.boostTier
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
    const assignedLeads = leads.filter((lead) => lead.routingStatus === "ASSIGNED").length;
    const sharedLeads = leads.filter((lead) => lead.routingStatus === "SHARED").length;
    return {
      totalListings: properties.length,
      approvedListings: properties.filter((property) => property.approvalStatus === "APPROVED").length,
      pendingListings: properties.filter((property) => property.approvalStatus === "PENDING").length,
      featured: properties.filter((property) => property.featured).length,
      spotlight: properties.filter((property) => property.boostTier === "SPOTLIGHT").length,
      totalLeads: leads.length,
      assignedLeads,
      sharedLeads,
      totalDealers: dealers.length,
      verifiedDealers: dealers.filter((dealer) => dealer.isVerified).length,
      premiumDealers: dealers.filter((dealer) => dealer.planType !== "BASIC").length,
      averageTicket: properties.length
        ? Math.round(properties.reduce((total, property) => total + property.priceInr, 0) / properties.length)
        : 0
    };
  }, [dealers, leads, properties]);

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
      imageUrls: form.imageUrls.split("\n").map((item) => item.trim()).filter(Boolean),
      amenities: form.amenities.split(",").map((item) => item.trim()).filter(Boolean),
      boostTier: form.boostTier,
      leadRoutingMode: form.leadRoutingMode,
      featuredRequested: form.featuredRequested
    };

    const endpoint = form.id ? `/api/properties/${form.id}` : "/api/properties";
    const method = form.id ? "PATCH" : "POST";
    const response = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setLoading(false);

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      setFeedback({ kind: "error", message: error.error || "Unable to save property." });
      return;
    }

    setForm(emptyForm);
    setFeedback({
      kind: "success",
      message: form.id ? "Property updated successfully." : "Property created successfully."
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
      amenities: parseJsonArray(property.amenities).join(", "),
      boostTier: property.boostTier as BoostTierValue,
      leadRoutingMode: property.leadRoutingMode as LeadRoutingModeValue,
      featuredRequested: property.featuredRequested
    });
    setFeedback({ kind: "success", message: `Editing ${property.title}` });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function removeProperty(id: string) {
    const confirmed = window.confirm("Delete this property?");
    if (!confirmed) return;
    const response = await fetch(`/api/properties/${id}`, { method: "DELETE" });
    if (!response.ok) {
      setFeedback({ kind: "error", message: "Unable to delete this property right now." });
      return;
    }
    setFeedback({ kind: "success", message: "Property deleted successfully." });
    if (form.id === id) setForm(emptyForm);
    router.refresh();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  function getDealerDraft(dealer: DealerRecord): DealerDraft {
    return (
      dealerDrafts[dealer.id] || {
        status: dealer.status as DealerStatusValue,
        planType: dealer.planType as DealerPlanTypeValue,
        isVerified: dealer.isVerified,
        featuredSlots: dealer.featuredSlots,
        leadBalance: dealer.leadBalance
      }
    );
  }

  function getPropertyDraft(property: PropertyRecord): PropertyDraft {
    return (
      propertyDrafts[property.id] || {
        approvalStatus: property.approvalStatus,
        boostTier: property.boostTier as BoostTierValue,
        leadRoutingMode: property.leadRoutingMode as LeadRoutingModeValue,
        featuredRequested: property.featuredRequested,
        featured: property.featured
      }
    );
  }

  async function saveDealerMonetization(id: string) {
    const draft = dealerDrafts[id];
    if (!draft) return;
    const response = await fetch(`/api/admin/dealers/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draft)
    });
    if (!response.ok) {
      setFeedback({ kind: "error", message: "Unable to update dealer plan settings." });
      return;
    }
    setFeedback({ kind: "success", message: "Dealer monetization settings updated." });
    router.refresh();
  }

  async function saveListingMonetization(id: string) {
    const draft = propertyDrafts[id];
    if (!draft) return;
    const response = await fetch(`/api/admin/listing-moderation/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draft)
    });
    if (!response.ok) {
      setFeedback({ kind: "error", message: "Unable to update listing monetization settings." });
      return;
    }
    setFeedback({ kind: "success", message: "Listing routing and boost updated." });
    router.refresh();
  }

  return (
    <div className="admin-shell">
      <div className="section-head">
        <div>
          <span className="section-tag">Admin Monetization Console</span>
          <h1>Run Gurgaon marketplace revenue ops</h1>
        </div>
        <button type="button" className="button button--ghost" onClick={logout}>
          Logout
        </button>
      </div>

      <section className="admin-stat-grid">
        <article className="admin-stat-card">
          <span>Live inventory</span>
          <strong>{stats.approvedListings}</strong>
          <p>{stats.pendingListings} pending moderation</p>
        </article>
        <article className="admin-stat-card">
          <span>Boosted inventory</span>
          <strong>{stats.spotlight}</strong>
          <p>{stats.featured} currently marked featured</p>
        </article>
        <article className="admin-stat-card">
          <span>Lead routing</span>
          <strong>{stats.assignedLeads}</strong>
          <p>{stats.sharedLeads} shared leads ready for credit-based routing</p>
        </article>
        <article className="admin-stat-card">
          <span>Dealer growth</span>
          <strong>{stats.premiumDealers}</strong>
          <p>{stats.verifiedDealers} verified dealers across {stats.totalDealers} accounts</p>
        </article>
        <article className="admin-stat-card">
          <span>Average ticket</span>
          <strong>{formatPrice(stats.averageTicket)}</strong>
          <p>Across the current Gurgaon marketplace inventory</p>
        </article>
      </section>

      <div className="admin-grid">
        <section className="card">
          <div className="admin-panel-head">
            <div>
              <h2>Platform listing desk</h2>
              <p>Create or edit inventory with routing and placement controls already attached.</p>
            </div>
            {form.id ? <span className="admin-badge admin-badge--featured">Editing mode</span> : null}
          </div>

          <form className="admin-form" onSubmit={submitProperty}>
            <input value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} placeholder="Property title" required />
            <textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} placeholder="Description" required />
            <div className="admin-form__split">
              <input value={form.location} onChange={(event) => setForm({ ...form, location: event.target.value })} placeholder="Location" required />
              <input value={form.sector} onChange={(event) => setForm({ ...form, sector: event.target.value })} placeholder="Sector" required />
            </div>
            <div className="admin-form__split">
              <input type="number" value={form.priceInr} onChange={(event) => setForm({ ...form, priceInr: event.target.value })} placeholder="Price in INR" required />
              <input type="number" value={form.areaSqft} onChange={(event) => setForm({ ...form, areaSqft: event.target.value })} placeholder="Area in sq.ft." required />
            </div>
            <div className="admin-form__split">
              <select value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value as PropertyTypeValue })}>
                {PROPERTY_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type.replaceAll("_", " ")}
                  </option>
                ))}
              </select>
              <select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value as PropertyStatusValue })}>
                {PROPERTY_STATUSES.map((statusValue) => (
                  <option key={statusValue} value={statusValue}>
                    {statusValue.replaceAll("_", " ")}
                  </option>
                ))}
              </select>
            </div>
            <div className="admin-form__split">
              <input type="number" value={form.bedrooms} onChange={(event) => setForm({ ...form, bedrooms: event.target.value })} placeholder="Bedrooms" />
              <input type="number" value={form.bathrooms} onChange={(event) => setForm({ ...form, bathrooms: event.target.value })} placeholder="Bathrooms" />
            </div>
            <div className="admin-form__split">
              <select value={form.boostTier} onChange={(event) => setForm({ ...form, boostTier: event.target.value as BoostTierValue })}>
                {BOOST_TIERS.map((tier) => (
                  <option key={tier} value={tier}>
                    {tier}
                  </option>
                ))}
              </select>
              <select value={form.leadRoutingMode} onChange={(event) => setForm({ ...form, leadRoutingMode: event.target.value as LeadRoutingModeValue })}>
                {LEAD_ROUTING_MODES.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode.replaceAll("_", " ")}
                  </option>
                ))}
              </select>
            </div>
            <label className="admin-checkbox">
              <input type="checkbox" checked={form.featured} onChange={(event) => setForm({ ...form, featured: event.target.checked })} />
              Mark as featured
            </label>
            <label className="admin-checkbox">
              <input type="checkbox" checked={form.featuredRequested} onChange={(event) => setForm({ ...form, featuredRequested: event.target.checked })} />
              Featured upgrade requested
            </label>
            <textarea value={form.imageUrls} onChange={(event) => setForm({ ...form, imageUrls: event.target.value })} placeholder="Image URLs, one per line" required />
            <input value={form.amenities} onChange={(event) => setForm({ ...form, amenities: event.target.value })} placeholder="Amenities separated by commas" />
            <div className="admin-actions">
              <button type="submit" className="button" disabled={loading}>
                {loading ? "Saving..." : form.id ? "Update property" : "Create property"}
              </button>
              {form.id ? (
                <button type="button" className="button button--ghost" onClick={() => setForm(emptyForm)}>
                  Cancel edit
                </button>
              ) : null}
            </div>
            {feedback ? <p className={feedback.kind === "error" ? "form-status form-status--error" : "form-status"}>{feedback.message}</p> : null}
          </form>
        </section>

        <section className="card">
          <div className="admin-panel-head">
            <div>
              <h2>Revenue controls</h2>
              <p>Upgrade dealer plans, activate badges, sell featured slots, and route paid leads.</p>
            </div>
            <span className="admin-badge">{dealers.length} dealer accounts</span>
          </div>

          <div className="admin-lead-grid">
            {dealers.map((dealer) => {
              const draft = getDealerDraft(dealer);
              const dealerProperties = properties.filter((property) => property.vendorId === dealer.id);
              const dealerLeads = leads.filter((lead) => lead.assignedDealerId === dealer.id);
              return (
                <article className="admin-card admin-card--lead" key={dealer.id}>
                  <div className="admin-card__head">
                    <div className="admin-card__info">
                      <strong>{dealer.companyName || dealer.name}</strong>
                      <p>{dealer.email}</p>
                    </div>
                    <span className="admin-badge">{dealer.status}</span>
                  </div>
                  <div className="admin-card__meta">
                    <span className="admin-badge">{dealer.role.replaceAll("_", " ")}</span>
                    <span className="admin-badge">{dealer.planType}</span>
                    {dealer.isVerified ? <span className="admin-badge admin-badge--featured">Verified</span> : null}
                  </div>
                  <div className="admin-card__facts">
                    <span>{dealerProperties.length} listings</span>
                    <span>{dealerLeads.length} assigned leads</span>
                    <span>{dealer.featuredSlots} featured slots</span>
                  </div>
                  <div className="admin-form__split">
                    <select
                      value={draft.status}
                      onChange={(event) =>
                        setDealerDrafts((current) => ({
                          ...current,
                          [dealer.id]: { ...draft, status: event.target.value as DealerStatusValue }
                        }))
                      }
                    >
                      {DEALER_STATUSES.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <select
                      value={draft.planType}
                      onChange={(event) =>
                        setDealerDrafts((current) => ({
                          ...current,
                          [dealer.id]: { ...draft, planType: event.target.value as DealerPlanTypeValue }
                        }))
                      }
                    >
                      {DEALER_PLAN_TYPES.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="admin-form__split">
                    <input
                      type="number"
                      value={draft.featuredSlots}
                      onChange={(event) =>
                        setDealerDrafts((current) => ({
                          ...current,
                          [dealer.id]: { ...draft, featuredSlots: Number(event.target.value) || 0 }
                        }))
                      }
                      placeholder="Featured slots"
                    />
                    <input
                      type="number"
                      value={draft.leadBalance}
                      onChange={(event) =>
                        setDealerDrafts((current) => ({
                          ...current,
                          [dealer.id]: { ...draft, leadBalance: Number(event.target.value) || 0 }
                        }))
                      }
                      placeholder="Lead balance"
                    />
                  </div>
                  <label className="admin-checkbox">
                    <input
                      type="checkbox"
                      checked={draft.isVerified}
                      onChange={(event) =>
                        setDealerDrafts((current) => ({
                          ...current,
                          [dealer.id]: { ...draft, isVerified: event.target.checked }
                        }))
                      }
                    />
                    Verified badge active
                  </label>
                  <div className="admin-actions">
                    <button type="button" className="button" onClick={() => saveDealerMonetization(dealer.id)}>
                      Save plan setup
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="admin-panel-head admin-panel-head--spaced">
            <div>
              <h2>Listing monetization queue</h2>
              <p>Control boosts, approval, featured upgrades, and lead routing per listing.</p>
            </div>
            <span className="admin-badge">{filteredProperties.length} listings visible</span>
          </div>

          <div className="admin-toolbar">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by title, sector, location, boost tier, or status" />
            <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value as "ALL" | PropertyTypeValue)}>
              <option value="ALL">All property types</option>
              {PROPERTY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type.replaceAll("_", " ")}
                </option>
              ))}
            </select>
            <select value={featuredFilter} onChange={(event) => setFeaturedFilter(event.target.value as "ALL" | "FEATURED")}>
              <option value="ALL">All listings</option>
              <option value="FEATURED">Featured only</option>
            </select>
          </div>

          <div className="admin-cards">
            {filteredProperties.map((property) => {
              const draft = getPropertyDraft(property);
              return (
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
                    <span className="admin-badge">{property.boostTier}</span>
                    {property.vendorId ? <span className="admin-badge">{dealerMap.get(property.vendorId)?.companyName || "Vendor"}</span> : null}
                  </div>
                  <div className="admin-form__split">
                    <select
                      value={draft.approvalStatus}
                      onChange={(event) =>
                        setPropertyDrafts((current) => ({
                          ...current,
                          [property.id]: { ...draft, approvalStatus: event.target.value }
                        }))
                      }
                    >
                      <option value="APPROVED">APPROVED</option>
                      <option value="PENDING">PENDING</option>
                      <option value="REJECTED">REJECTED</option>
                    </select>
                    <select
                      value={draft.boostTier}
                      onChange={(event) =>
                        setPropertyDrafts((current) => ({
                          ...current,
                          [property.id]: { ...draft, boostTier: event.target.value as BoostTierValue }
                        }))
                      }
                    >
                      {BOOST_TIERS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="admin-form__split">
                    <select
                      value={draft.leadRoutingMode}
                      onChange={(event) =>
                        setPropertyDrafts((current) => ({
                          ...current,
                          [property.id]: {
                            ...draft,
                            leadRoutingMode: event.target.value as LeadRoutingModeValue
                          }
                        }))
                      }
                    >
                      {LEAD_ROUTING_MODES.map((option) => (
                        <option key={option} value={option}>
                          {option.replaceAll("_", " ")}
                        </option>
                      ))}
                    </select>
                    <button type="button" className="text-link-button" onClick={() => startEdit(property)}>
                      Edit full listing
                    </button>
                  </div>
                  <label className="admin-checkbox">
                    <input
                      type="checkbox"
                      checked={draft.featuredRequested}
                      onChange={(event) =>
                        setPropertyDrafts((current) => ({
                          ...current,
                          [property.id]: { ...draft, featuredRequested: event.target.checked }
                        }))
                      }
                    />
                    Featured upgrade requested
                  </label>
                  <label className="admin-checkbox">
                    <input
                      type="checkbox"
                      checked={draft.featured}
                      onChange={(event) =>
                        setPropertyDrafts((current) => ({
                          ...current,
                          [property.id]: { ...draft, featured: event.target.checked }
                        }))
                      }
                    />
                    Mark listing as featured
                  </label>
                  <div className="admin-actions">
                    <button type="button" className="button" onClick={() => saveListingMonetization(property.id)}>
                      Save monetization
                    </button>
                    <button type="button" className="text-link-button" onClick={() => removeProperty(property.id)}>
                      Delete
                    </button>
                  </div>
                </article>
              );
            })}
            {!filteredProperties.length ? <div className="admin-empty">No listings match the current filters.</div> : null}
          </div>

          <div className="admin-panel-head admin-panel-head--spaced">
            <div>
              <h2>Recent leads</h2>
              <p>Monitor which leads stay on platform and which ones are sold into vendor routing.</p>
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
                  <span className="admin-badge">{lead.routingStatus}</span>
                  <span className="admin-badge">{lead.sourceChannel}</span>
                  <span className="admin-badge">
                    {lead.assignedDealerId ? dealerMap.get(lead.assignedDealerId)?.companyName || dealerMap.get(lead.assignedDealerId)?.name || "Assigned dealer" : "Platform lead"}
                  </span>
                  <span className="admin-badge">
                    {lead.propertyId && propertyMap.has(lead.propertyId) ? propertyMap.get(lead.propertyId)?.title : "General enquiry"}
                  </span>
                </div>
              </article>
            ))}
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
