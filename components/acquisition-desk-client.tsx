"use client";

import type { ReactNode } from "react";
import { useState } from "react";

export default function AcquisitionDeskClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [capitalRange, setCapitalRange] = useState("");
  const [corridor, setCorridor] = useState("");
  const [mandate, setMandate] = useState("");

  const handleWhatsAppSubmit = () => {
    const message = `Hi Guild Acre,

Name: ${name || "-"}
Phone: ${phone || "-"}
Capital Range: ${capitalRange || "-"}
Corridor / Geography: ${corridor || "-"}
Acquisition Brief: ${mandate || "-"}

I want to request a private land intelligence consultation.`;

    window.open(
      `https://wa.me/919711667782?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#f4ead8]">
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-32">
        <div>
          <p className="text-xs uppercase text-[#b9a46d]">
            Acquisition desk
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] text-[#f4ead8] sm:text-6xl lg:text-7xl">
            Submit an acquisition brief for confidential review.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-[#cfc5b3]">
            Share the capital range, geography, and acquisition logic. Guild
            Acre responds with a private intelligence-led next step, not a
            public catalogue of options.
          </p>

          <div className="mt-12 divide-y divide-[#2d2a22] border-y border-[#2d2a22]">
            {[
              ["Mandate fit", "We first decide whether the geography, capital range, timing, and risk appetite make sense together."],
              ["Diligence direction", "The response identifies the records, access questions, zoning signals, and sensitivity checks that need attention."],
              ["Private movement", "Only relevant conversations, site context, or deeper advisory work follows after the brief is understood."],
            ].map(([title, text]) => (
              <div key={title} className="grid gap-4 py-7 sm:grid-cols-[0.35fr_0.65fr]">
                <h2 className="text-2xl font-semibold text-[#f4ead8]">{title}</h2>
                <p className="text-sm leading-7 text-[#b8ad9b] sm:text-base sm:leading-8">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-[#2d2a22] bg-[#0b0b0a] p-5 sm:p-7 lg:p-8">
          <div className="mb-7 border-b border-[#2d2a22] pb-6">
            <p className="text-xs uppercase text-[#b9a46d]">
              Confidential brief
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#f4ead8] sm:text-4xl">
              Request Private Consultation
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                className="institutional-input"
              />
            </Field>

            <Field label="Phone Number">
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="+91"
                className="institutional-input"
              />
            </Field>

            <Field label="Capital Range">
              <input
                type="text"
                value={capitalRange}
                onChange={(event) => setCapitalRange(event.target.value)}
                placeholder="Example: Rs. 5 Cr - Rs. 20 Cr"
                className="institutional-input"
              />
            </Field>

            <Field label="Corridor / Geography">
              <input
                type="text"
                value={corridor}
                onChange={(event) => setCorridor(event.target.value)}
                placeholder="Gurgaon NCR, Sohna, Aravali Belt"
                className="institutional-input"
              />
            </Field>
          </div>

          <label className="mt-4 block border border-[#2d2a22] bg-[#050505] p-4 transition duration-500 focus-within:border-[#bda56a]/70">
            <span className="text-xs uppercase text-[#9d927f]">
              Acquisition Brief
            </span>
            <textarea
              value={mandate}
              onChange={(event) => setMandate(event.target.value)}
              placeholder="Purpose, hold period, preferred belt, legal concerns, timing, or any private context."
              rows={5}
              className="institutional-input min-h-36 resize-none"
            />
          </label>

          <button
            onClick={handleWhatsAppSubmit}
            className="mt-5 w-full rounded-full border border-[#bda56a]/55 bg-[#f4ead8]/[0.025] px-6 py-4 text-sm font-medium text-[#f4ead8] transition duration-500 hover:border-[#d4c083] hover:bg-[#bda56a]/10 sm:mt-6"
          >
            Request Private Consultation
          </button>

          <p className="mt-5 text-xs leading-6 text-[#958b7c]">
            Submitted information is used to assess fit for a private
            consultation. Read our{" "}
            <a href="/privacy-policy" className="text-[#d4c083] underline underline-offset-4">
              Privacy Policy
            </a>
            .
          </p>

          <div className="mt-8 grid gap-px border border-[#2d2a22] bg-[#2d2a22] sm:grid-cols-2">
            {[
              ["WhatsApp", "+91 97116 67782"],
              ["Email", "hello@guildacre.com"],
              ["Location", "Gurgaon, Haryana"],
              ["Office", "By appointment"],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#10100e] p-5">
                <p className="text-xs uppercase text-[#9d927f]">{label}</p>
                <p className="mt-2 text-sm text-[#f4ead8]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block border border-[#2d2a22] bg-[#050505] p-4 transition duration-500 focus-within:border-[#bda56a]/70">
      <span className="text-xs uppercase text-[#9d927f]">{label}</span>
      {children}
    </label>
  );
}
