"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function LeadForm({
  compact = false,
  propertyId,
}: {
  compact?: boolean;
  propertyId?: string;
}) {
  return <LeadFormContent compact={compact} propertyId={propertyId} />;
}

export function LeadFormContent({
  compact,
  propertyId,
}: {
  compact: boolean;
  propertyId?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const requirement = [
      `Budget: ${formData.get("budget") || "-"}`,
      `Acquisition Focus: ${formData.get("propertyType") || "-"}`,
      `Corridor / Geography: ${formData.get("location") || "-"}`,
      `Notes: ${formData.get("requirement") || "-"}`,
    ].join("\n");

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Website enquiry",
        phone: formData.get("phone"),
        requirement,
        propertyId: propertyId || undefined,
      }),
    });

    setStatus(response.ok ? "sent" : "error");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className={`border border-[#2d2a22] bg-[#0b0b0a] shadow-2xl shadow-black/20 ${
        compact ? "p-5" : "p-6"
      }`}
    >
      <div className="mb-6">
        <p className="text-[11px] uppercase text-[#b9a46d]">
          Private acquisition desk
        </p>

        <h4 className="mt-3 text-2xl font-semibold text-[#f4ead8]">
          Request Private Consultation
        </h4>

        <p className="mt-3 text-sm leading-6 text-[#b8ad9b]">
          Share your capital range, acquisition focus, and corridor. We will
          respond with a disciplined next step for the brief.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {propertyId ? <input type="hidden" value={propertyId} name="propertyId" /> : null}
        <Input name="budget" label="Capital Range" type="text" placeholder="Rs. 5 Cr - Rs. 20 Cr" />
        <Input
          name="propertyType"
          label="Acquisition Focus"
          type="text"
          placeholder="Land, farmhouse, strategic acreage"
        />
        <Input name="location" label="Corridor / Geography" type="text" placeholder="Gurgaon NCR / Sohna / Aravali Belt" />
        <Input name="phone" label="Phone Number" type="tel" placeholder="+91 98XXXXXXX" required />

        <textarea
          name="requirement"
          rows={4}
          aria-label="Acquisition brief details"
          placeholder="Purpose, hold period, known concerns, timing, or diligence questions."
          className="w-full border border-[#efe7d6]/10 bg-[#12110f]/70 px-4 py-3 text-sm text-[#f4ead8] placeholder:text-[#9d927f]/70 focus:border-[#bda56a]/70"
        />

        <p className="text-xs leading-5 text-[#958b7c]">
          By submitting, you consent to Guild Acre contacting you about this
          brief. See our{" "}
          <a href="/privacy-policy" className="text-[#F6E7B7] underline underline-offset-4">
            Privacy Policy
          </a>
          .
        </p>

        <button
          type="submit"
          className="w-full rounded-full border border-[#bda56a]/55 bg-[#f4ead8]/[0.025] px-5 py-3 text-sm font-semibold text-[#f4ead8] transition duration-500 hover:border-[#d4c083] hover:bg-[#bda56a]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bda56a]"
        >
          Request Private Consultation
        </button>

        {status === "sent" ? (
          <p className="text-sm text-[#F6E7B7]">Thanks. Your brief has been received.</p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-red-200">Please check the phone number and try again.</p>
        ) : null}
      </form>
    </motion.div>
  );
}


function Input({
  name,
  label,
  type,
  placeholder,
  required = false,
}: {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  const id = `lead-${name}`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[11px] uppercase text-[#9d927f]">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-[#efe7d6]/10 bg-[#12110f]/70 px-4 py-2 text-[#f4ead8] placeholder:text-[#9d927f]/70 focus:border-[#bda56a]/70"
      />
    </div>
  );
}
