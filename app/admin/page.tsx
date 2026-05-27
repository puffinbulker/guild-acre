"use client";

import { useEffect, useMemo, useState } from "react";

type Property = {
  id: string;
  title: string;
  description: string;
  priceInr: number;
  location: string;
  city: string;
  type: string;
  status: string;
  bedrooms: number;
  bathrooms: number;
  areaSqft: number;
  featured: boolean;
  imageUrls: string[];
  videoUrl: string;
  amenities: string[];
};

const PROPERTY_TYPES = [
  "AGRICULTURE_LAND",
  "FARM_HOUSE",
  "COMMERCIAL_LAND",
  "LAND_FOR_WAREHOUSE",
  "LAND_FOR_LEASE",
  "BUILDER_FLOOR",
  "FLAT_APARTMENT",
  "PLOTS",
  "VILLA",
  "DEEN_DAYAL_PLOTS_LAND",
  "AFFORDABLE_HOUSING",
];

function getStatusOptions(type: string) {
  switch (type) {
    case "FARM_HOUSE":
      return ["RAW", "SEMI_DEVELOPED", "FULLY_DEVELOPED"];
    case "PLOTS":
    case "FLAT_APARTMENT":
    case "BUILDER_FLOOR":
    case "DEEN_DAYAL_PLOTS_LAND":
    case "AFFORDABLE_HOUSING":
    case "VILLA":
      return ["FRESH", "RESALE"];
    case "LAND_FOR_LEASE":
      return ["OPEN_FOR_LEASE", "LEASED"];
    case "LAND_FOR_WAREHOUSE":
      return ["FRESH", "RESALE"];
    case "AGRICULTURE_LAND":
    case "COMMERCIAL_LAND":
      return [];
    default:
      return [];
  }
}

function prettyLabel(value: string) {
  return value.replaceAll("_", " ");
}

export default function AdminPage() {
  const [checked, setChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [properties, setProperties] = useState<Property[]>([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    city: "Gurgaon",
    type: "AGRICULTURE_LAND",
    status: "",
    bedrooms: "",
    bathrooms: "",
    areaSqft: "",
    featured: false,
    image1: "",
    image2: "",
    image3: "",
    videoUrl: "",
    amenities: "",
  });

  const statusOptions = useMemo(() => getStatusOptions(form.type), [form.type]);
  const showStatusDropdown = statusOptions.length > 0;

  async function loadProperties() {
    const res = await fetch("/api/properties");
    const data = await res.json();
    setProperties(Array.isArray(data) ? data : []);
  }

  useEffect(() => {
    async function checkAdminSession() {
      const res = await fetch("/api/admin/login", { cache: "no-store" });
      const data = await res.json().catch(() => null);
      setLoggedIn(Boolean(data?.authenticated));
      setChecked(true);
    }

    loadProperties();
    checkAdminSession();
  }, []);

  async function handleLogin() {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      alert(data?.message || "Login failed");
      return;
    }

    setLoggedIn(true);
    setUsername("");
    setPassword("");
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setLoggedIn(false);
  }

  async function handleAddProperty() {
    if (!form.title || !form.location || !form.price) {
      alert("Please fill Title, Location and Price");
      return;
    }

    const imageUrls = [form.image1, form.image2, form.image3].filter(Boolean);

    const payload = {
      id: Date.now().toString(),
      title: form.title,
      description: form.description,
      priceInr: Number(form.price),
      location: form.location,
      city: form.city,
      type: form.type,
      status: showStatusDropdown ? form.status : "",
      bedrooms: Number(form.bedrooms || 0),
      bathrooms: Number(form.bathrooms || 0),
      areaSqft: Number(form.areaSqft || 0),
      featured: form.featured,
      imageUrls,
      videoUrl: form.videoUrl,
      amenities: form.amenities
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean),
    };

    const res = await fetch("/api/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      alert(data?.message || "Failed to add property");
      return;
    }

    alert("Property added successfully");

    setForm({
      title: "",
      description: "",
      price: "",
      location: "",
      city: "Gurgaon",
      type: "AGRICULTURE_LAND",
      status: "",
      bedrooms: "",
      bathrooms: "",
      areaSqft: "",
      featured: false,
      image1: "",
      image2: "",
      image3: "",
      videoUrl: "",
      amenities: "",
    });

    loadProperties();
  }

  async function handleDelete(id: string) {
    const ok = confirm("Delete this property?");
    if (!ok) return;

    const res = await fetch(`/api/properties?id=${id}`, {
      method: "DELETE",
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      alert(data?.message || "Delete failed");
      return;
    }

    loadProperties();
  }

  if (!checked) {
    return (
      <main className="min-h-screen bg-slate-950 p-8 text-white">
        Loading...
      </main>
    );
  }

  if (!loggedIn) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="rounded-[28px] border border-cyan-300/15 bg-white/5 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/80">
              Admin Login
            </p>

            <h1 className="mt-4 text-3xl font-semibold">Guild Acre Admin Panel</h1>

            <div className="mt-8 space-y-4">
              <div>
                <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Username
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none"
                />
              </div>

              <button
                onClick={handleLogin}
                className="w-full rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
              >
                Login
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#7aaec1]">
              Admin Console
            </p>
            <h1 className="mt-2 text-3xl font-semibold">Manage Opportunity Records</h1>
          </div>

          <div className="flex gap-3">
            <a
              href="/intelligence-reports"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              View Intelligence Reports
            </a>
            <button
              onClick={handleLogout}
              className="rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] border border-cyan-300/15 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Add New Property</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input
                placeholder="Property Title"
                value={form.title}
                onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none sm:col-span-2"
              />

              <textarea
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none sm:col-span-2"
                rows={4}
              />

              <input
                placeholder="Price in INR"
                value={form.price}
                onChange={(e) => setForm((p) => ({ ...p, price: e.target.value }))}
                className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none"
              />

              <input
                placeholder="Location"
                value={form.location}
                onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))}
                className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none"
              />

              <input
                placeholder="City"
                value={form.city}
                onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
                className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none"
              />

              <select
                value={form.type}
                onChange={(e) => {
                  const newType = e.target.value;
                  const newOptions = getStatusOptions(newType);
                  setForm((p) => ({
                    ...p,
                    type: newType,
                    status: newOptions[0] || "",
                  }));
                }}
                className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none"
              >
                {PROPERTY_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {prettyLabel(type)}
                  </option>
                ))}
              </select>

              {showStatusDropdown && (
                <select
                  value={form.status}
                  onChange={(e) => setForm((p) => ({ ...p, status: e.target.value }))}
                  className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {prettyLabel(status)}
                    </option>
                  ))}
                </select>
              )}

              <input
                placeholder="Bedrooms"
                value={form.bedrooms}
                onChange={(e) => setForm((p) => ({ ...p, bedrooms: e.target.value }))}
                className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none"
              />

              <input
                placeholder="Bathrooms"
                value={form.bathrooms}
                onChange={(e) => setForm((p) => ({ ...p, bathrooms: e.target.value }))}
                className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none"
              />

              <input
                placeholder="Area Sqft"
                value={form.areaSqft}
                onChange={(e) => setForm((p) => ({ ...p, areaSqft: e.target.value }))}
                className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none sm:col-span-2"
              />

              <input
                placeholder="Image URL 1"
                value={form.image1}
                onChange={(e) => setForm((p) => ({ ...p, image1: e.target.value }))}
                className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none sm:col-span-2"
              />

              <input
                placeholder="Image URL 2"
                value={form.image2}
                onChange={(e) => setForm((p) => ({ ...p, image2: e.target.value }))}
                className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none sm:col-span-2"
              />

              <input
                placeholder="Image URL 3"
                value={form.image3}
                onChange={(e) => setForm((p) => ({ ...p, image3: e.target.value }))}
                className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none sm:col-span-2"
              />

              <input
                placeholder="Video URL"
                value={form.videoUrl}
                onChange={(e) => setForm((p) => ({ ...p, videoUrl: e.target.value }))}
                className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none sm:col-span-2"
              />

              <input
                placeholder="Amenities comma separated"
                value={form.amenities}
                onChange={(e) => setForm((p) => ({ ...p, amenities: e.target.value }))}
                className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white outline-none sm:col-span-2"
              />

              <label className="flex items-center gap-3 sm:col-span-2">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) => setForm((p) => ({ ...p, featured: e.target.checked }))}
                />
                <span>Priority Record</span>
              </label>
            </div>

            <button
              onClick={handleAddProperty}
              className="mt-6 w-full rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
            >
              Add Record
            </button>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Saved Records</h2>

            <div className="mt-5 space-y-4">
              {properties.length === 0 ? (
                <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4 text-sm text-slate-400">
                  No properties yet.
                </div>
              ) : (
                properties.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-4"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="text-lg font-semibold">{item.title}</div>
                        <div className="mt-1 text-sm text-slate-400">
                          {item.location} • ₹{item.priceInr}
                        </div>
                        <div className="mt-2 text-xs text-slate-500">
                          {prettyLabel(item.type)}
                          {item.status ? ` • ${prettyLabel(item.status)}` : ""}
                        </div>
                      </div>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300 hover:bg-red-500/20"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
