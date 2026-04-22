"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");
  const [requirement, setRequirement] = useState("");

  const handleWhatsAppSubmit = () => {
    const message = `Hi Guild Acre,

Name: ${name || "-"}
Phone: ${phone || "-"}
Budget: ${budget || "-"}
Preferred Location: ${location || "-"}
Requirement: ${requirement || "-"}

I want to discuss a premium property opportunity.`;

    window.open(
      `https://wa.me/919711667782?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="rounded-[28px] border border-cyan-300/15 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_28%),linear-gradient(135deg,rgba(8,47,73,0.55),rgba(2,6,23,0.95))] p-5 sm:rounded-[34px] sm:p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.32em]">
                Contact Guild Acre
              </p>

              <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:mt-4 sm:text-4xl lg:text-6xl">
                Start your premium property journey with trust, clarity, and focused advisory.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
                Tell us what you are looking for and we’ll help you explore genuine,
                well-aligned opportunities in Gurgaon and nearby high-growth corridors.
              </p>

              <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 backdrop-blur-sm">
                  <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                  />
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 backdrop-blur-sm">
                  <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                  />
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 backdrop-blur-sm">
                  <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Budget Range
                  </label>
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="Example: ₹1 Cr - ₹3 Cr"
                    className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                  />
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 backdrop-blur-sm">
                  <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Preferred Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Example: Sohna, Gurgaon"
                    className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/45 p-4 backdrop-blur-sm sm:mt-4">
                <label className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Requirement
                </label>
                <textarea
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  placeholder="Tell us whether you are looking for farmhouse land, plotted development, investment property, or a personalized shortlist."
                  rows={5}
                  className="mt-3 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
                <button
                  onClick={handleWhatsAppSubmit}
                  className="rounded-2xl bg-cyan-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Send on WhatsApp
                </button>

                <a
                  href="tel:+919711667782"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-950/55 p-5 backdrop-blur-sm sm:rounded-[30px] sm:p-7">
              <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.3em]">
                Private Consultation Desk
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl">
                Premium Land Investment Advisory in Gurgaon & Beyond
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:mt-5">
                We work with serious buyers who value genuine opportunities,
                honest guidance, and better decision quality before committing.
              </p>

              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                {[
                  { label: "WhatsApp", value: "+91 97116 67782" },
                  { label: "Email", value: "hello@guildacre.com" },
                  { label: "Location", value: "Gurgaon, Haryana, India" },
                  { label: "Consultation", value: "By appointment" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                      {item.label}
                    </div>
                    <div className="mt-2 text-sm text-slate-100">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-300/15 bg-cyan-400/10 p-5 sm:mt-8">
                <div className="text-xs uppercase tracking-[0.22em] text-cyan-200">
                  Preferred Process
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  We first understand your intent, then shortlist relevant
                  options, and only after that move to calls, meetings, or site visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}