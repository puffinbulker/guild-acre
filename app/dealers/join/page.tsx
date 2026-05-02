"use client";

import { useState } from "react";

export default function DealerJoinPage() {
  const [name, setName] = useState("");
  const [firm, setFirm] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceAreas, setServiceAreas] = useState("");
  const [partnerType, setPartnerType] = useState("Dealer");
  const [message, setMessage] = useState("");

  const plans = [
    ["Daily Listing", "₹99", "1 property live for 1 day"],
    ["Weekly Verified", "₹399", "1 verified property live for 7 days"],
    ["Monthly Dealer Desk", "₹2,999", "Unlimited property submissions, admin approval required"],
    ["Featured Boost", "₹999", "Homepage and locality page visibility for 7 days"],
  ];

  const handleWhatsAppSubmit = () => {
    const text = `Hi Guild Acre,

I want to join as a premium partner.

Primary Contact Name: ${name || "-"}
Company / Firm Name: ${firm || "-"}
Business Email: ${email || "-"}
Phone Number: ${phone || "-"}
Partner Type: ${partnerType || "-"}
Service Areas: ${serviceAreas || "-"}
Details: ${message || "-"}`;

    window.open(`https://wa.me/919711667782?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handlePlanClick = (plan: string) => {
    const text = `Hi Guild Acre, I want to activate ${plan} for property listing.`;
    window.open(`https://wa.me/919711667782?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_28%),linear-gradient(180deg,#020617_0%,#071728_42%,#06111d_100%)]">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                Partner with Guild Acre
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-6xl">
                Join a premium real estate network built on quality, trust, and curated visibility.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Guild Acre is designed for serious real estate professionals who want stronger brand presentation, better buyer trust, and premium visibility.
              </p>
            </div>

            <div className="rounded-[32px] border border-cyan-300/15 bg-slate-950/55 p-7 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                Partner Onboarding Request
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Tell us about your profile
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Primary Contact Name" className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white" />
                <input value={firm} onChange={(e) => setFirm(e.target.value)} placeholder="Company / Firm Name" className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Business Email" className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white" />
                <select value={partnerType} onChange={(e) => setPartnerType(e.target.value)} className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white">
                  <option>Dealer</option>
                  <option>Builder</option>
                  <option>Owner Representative</option>
                  <option>Land Aggregator</option>
                  <option>Farmhouse Specialist</option>
                </select>
                <input value={serviceAreas} onChange={(e) => setServiceAreas(e.target.value)} placeholder="Service Areas" className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white" />
              </div>

              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="Profile Details" className="mt-4 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white" />

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button onClick={handleWhatsAppSubmit} className="rounded-2xl bg-cyan-500 px-6 py-4 text-sm font-semibold text-slate-950 hover:bg-cyan-400">
                  Submit on WhatsApp
                </button>

                <a href="tel:+919711667782" className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-white hover:bg-white/10">
                  Call for Partner Discussion
                </a>
              </div>
            </div>
          </div>

          {/* Dealer Listing Plans */}
          <div className="mt-16 rounded-[32px] border border-cyan-300/15 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
              Paid Dealer Visibility
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Dealer Listing Plans
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
              Choose a simple paid visibility plan to submit verified property inventory on Guild Acre.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {plans.map(([plan, price, detail]) => (
                <div key={plan} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                  <h3 className="text-lg font-semibold">{plan}</h3>
                  <p className="mt-3 text-3xl font-bold text-cyan-300">{price}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>

                  <button
                    onClick={() => handlePlanClick(plan)}
                    className="mt-5 w-full rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
                  >
                    Activate on WhatsApp
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Dealer Upload Request */}
          <div className="mt-10 rounded-[32px] border border-cyan-300/15 bg-slate-950/55 p-6 backdrop-blur-sm sm:p-8">
            <h2 className="text-2xl font-semibold">Dealer Upload Request</h2>
            <p className="mt-3 text-sm text-slate-300">
              Submit property details quickly through WhatsApp.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/919711667782?text=Hi Guild Acre, I want to submit a property listing.",
                  "_blank"
                )
              }
              className="mt-6 rounded-2xl bg-green-500 px-6 py-4 text-sm font-semibold text-white hover:bg-green-400"
            >
              Submit Property on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}