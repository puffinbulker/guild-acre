"use client";

import { useState } from "react";

export default function DealerDashboardPage() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const submitProperty = () => {
    const text = `Hi Guild Acre,

New dealer property submission:

Property Title: ${title || "-"}
Location: ${location || "-"}
Expected Price: ${price || "-"}

Please review and activate this listing.`;

    window.open(`https://wa.me/919711667782?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_28%),linear-gradient(180deg,#020617_0%,#071728_42%,#06111d_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                Guild Acre Dealer Desk
              </p>
              <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">
                Dealer Dashboard
              </h1>
              <p className="mt-3 text-sm text-slate-300">
                Upload properties, view plans, and manage leads.
              </p>
            </div>

            <a
              href="/dealers/login"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-semibold hover:bg-white/10"
            >
              Logout
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              ["Total Listings", "23"],
              ["Buyer Leads", "84"],
              ["Featured Live", "6"],
              ["This Month", "₹18,940"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-cyan-300/15 bg-white/5 p-6">
                <p className="text-sm text-slate-400">{label}</p>
                <h2 className="mt-2 text-3xl font-bold text-cyan-300">{value}</h2>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] border border-cyan-300/15 bg-slate-950/55 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">Upload Property</h2>
              <p className="mt-2 text-sm text-slate-300">
                Submit property details for admin approval.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Property Title"
                  className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none"
                />

                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location / Sector"
                  className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none"
                />

                <select className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none">
                  <option>Apartment</option>
                  <option>Builder Floor</option>
                  <option>Plot</option>
                  <option>Farm Land</option>
                  <option>Commercial</option>
                  <option>Villa</option>
                </select>

                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Expected Price"
                  className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none"
                />
              </div>

              <textarea
                rows={5}
                placeholder="Description, USP, brokerage note, possession, facing, size..."
                className="mt-4 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm outline-none"
              />

              <div className="mt-4 rounded-2xl border border-dashed border-cyan-300/30 bg-white/5 p-6 text-center">
                <p className="font-semibold">Upload Photos</p>
                <p className="mt-2 text-sm text-slate-400">
                  Photo upload will be connected later with Firebase / Cloudinary.
                </p>
              </div>

              <button
                onClick={submitProperty}
                className="mt-6 rounded-2xl bg-cyan-500 px-6 py-4 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
              >
                Submit Property on WhatsApp
              </button>
            </div>

            <div className="rounded-[32px] border border-cyan-300/15 bg-white/5 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">Payment Plans</h2>

              <div className="mt-6 space-y-4">
                {[
                  ["Daily Listing", "₹99"],
                  ["Weekly Verified", "₹399"],
                  ["Monthly Dealer Desk", "₹2,999"],
                  ["Featured Boost", "₹999"],
                ].map(([plan, price]) => (
                  <a
                    key={plan}
                    href={`https://wa.me/919711667782?text=${encodeURIComponent(
                      `Hi Guild Acre, I want to activate ${plan} plan.`
                    )}`}
                    target="_blank"
                    className="block rounded-2xl border border-white/10 bg-slate-950/60 p-4 hover:bg-slate-900"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold">{plan}</span>
                      <span className="text-cyan-300 font-bold">{price}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-cyan-300/15 bg-white/5 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">My Listings</h2>

              <div className="mt-6 space-y-3">
                {[
                  ["DLF Phase 5 Luxury Apartment", "Golf Course Road", "Live"],
                  ["Sohna Premium Farm Plot", "Sohna Road Belt", "Under Review"],
                  ["Dwarka Expressway Investor Plot", "Dwarka Expressway", "Payment Pending"],
                ].map(([title, loc, status]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold">{title}</p>
                        <p className="mt-1 text-sm text-slate-400">{loc}</p>
                      </div>
                      <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-300">
                        {status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-cyan-300/15 bg-white/5 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">Lead CRM</h2>

              <div className="mt-6 space-y-3">
                {[
                  ["NRI Buyer", "4BHK luxury apartment", "Hot"],
                  ["Investor Lead", "Land / plotted deal", "Warm"],
                  ["Family Buyer", "Builder floor", "New"],
                ].map(([name, need, status]) => (
                  <div key={name} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="font-semibold">{name}</p>
                    <p className="mt-1 text-sm text-slate-400">{need}</p>
                    <p className="mt-2 text-xs text-cyan-300">{status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}