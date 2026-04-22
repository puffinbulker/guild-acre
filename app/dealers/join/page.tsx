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

  const handleWhatsAppSubmit = () => {
    const text = `Hi Guild Acre,

I want to join as a premium partner.

Primary Contact Name: ${name || "-"}
Company / Firm Name: ${firm || "-"}
Business Email: ${email || "-"}
Phone Number: ${phone || "-"}
Partner Type: ${partnerType || "-"}
Service Areas: ${serviceAreas || "-"}
Details: ${message || "-"}

Please connect with me regarding Guild Acre partner onboarding.`;

    const url = `https://wa.me/919711667782?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const benefits = [
    "Access to a premium-facing brand presentation",
    "Positioning in front of serious buyers and investors",
    "Better inventory storytelling and curated visibility",
    "A more trust-led partner network approach",
  ];

  const partnerTypes = [
    "Dealer",
    "Builder",
    "Owner Representative",
    "Land Aggregator",
    "Farmhouse Specialist",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_28%),linear-gradient(180deg,#020617_0%,#071728_42%,#06111d_100%)]">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.32em]">
                Partner with Guild Acre
              </p>

              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:mt-4 sm:text-4xl lg:text-6xl">
                Join a premium real estate network built on quality, trust, and curated visibility.
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
                Guild Acre is designed for serious real estate professionals who
                want stronger brand presentation, better buyer trust, and a more
                premium platform for showcasing relevant opportunities.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8">
                This is not a volume-driven listing dump. It is a refined,
                partner-led ecosystem focused on better fit, better presentation,
                and better buyer confidence.
              </p>

              <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-cyan-300/15 bg-slate-950/55 p-5 backdrop-blur-sm sm:rounded-[32px] sm:p-7">
              <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.3em]">
                Partner Onboarding Request
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl">
                Tell us about your profile
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Share your details and service areas. We will review your fit
                and connect with you regarding onboarding.
              </p>

              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Primary Contact Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                  />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Company / Firm Name
                  </label>
                  <input
                    value={firm}
                    onChange={(e) => setFirm(e.target.value)}
                    placeholder="Enter firm name"
                    className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                  />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Business Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter business email"
                    className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                  />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Phone Number
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="mt-3 grid gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Partner Type
                  </label>
                  <select
                    value={partnerType}
                    onChange={(e) => setPartnerType(e.target.value)}
                    className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none"
                  >
                    {partnerTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Service Areas
                  </label>
                  <input
                    value={serviceAreas}
                    onChange={(e) => setServiceAreas(e.target.value)}
                    placeholder="Example: Gurgaon, Sohna, Naugaon"
                    className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:mt-4">
                <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Profile Details
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Tell us about your inventory focus, clientele, or market specialization."
                  className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <button
                  onClick={handleWhatsAppSubmit}
                  className="rounded-2xl bg-cyan-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Submit on WhatsApp
                </button>

                <a
                  href="tel:+919711667782"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Call for Partner Discussion
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}