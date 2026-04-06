"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/utils";
import {
  PROPERTY_STATUSES,
  PROPERTY_TYPES,
  type PropertyStatusValue,
  type PropertyTypeValue
} from "@/lib/constants";
import type { LeadRecord, PropertyRecord } from "@/types";

type Props = {
  properties: PropertyRecord[];
  leads: LeadRecord[];
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

export function AdminDashboard({ properties, leads }: Props) {
  const [form, setForm] = useState<FormShape>(emptyForm);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const leadSummary = useMemo(() => leads.slice(0, 8), [leads]);

  async function submitProperty(event: FormEvent<HTMLFormElement>) {
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

    const response = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setLoading(false);

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      setStatus(error.error || "Unable to save property.");
      return;
    }

    setForm(emptyForm);
    setStatus("Property saved successfully.");
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
      imageUrls: JSON.parse(property.imageUrls).join("\n"),
      amenities: JSON.parse(property.amenities).join(", ")
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function removeProperty(id: string) {
    const confirmed = window.confirm("Delete this property?");
    if (!confirmed) {
      return;
    }

    const response = await fetch(`/api/properties/${id}`, { method: "DELETE" });
    if (response.ok) {
      router.refresh();
      if (form.id === id) {
        setForm(emptyForm);
      }
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
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

      <div className="admin-grid">
        <section className="card">
          <h2>{form.id ? "Edit property" : "Add property"}</h2>
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
            <label>
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(event) => setForm({ ...form, featured: event.target.checked })}
              />{" "}
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
                  onClick={() => setForm(emptyForm)}
                >
                  Reset
                </button>
              ) : null}
            </div>
            {status ? <p className="form-status">{status}</p> : null}
          </form>
        </section>

        <section className="card">
          <h2>Current properties</h2>
          <div className="admin-cards">
            {properties.map((property) => (
              <article className="admin-card" key={property.id}>
                <div className="admin-card__head">
                  <div>
                    <strong>{property.title}</strong>
                    <p>{property.location}</p>
                  </div>
                  <strong>{formatPrice(property.priceInr)}</strong>
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
          </div>

          <h2 style={{ marginTop: 32 }}>Recent leads</h2>
          <div className="admin-cards">
            {leadSummary.map((lead) => (
              <article className="admin-card" key={lead.id}>
                <strong>{lead.name}</strong>
                <p>{lead.phone}</p>
                <p>{lead.requirement}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
