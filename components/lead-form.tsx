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
      `Property Type: ${formData.get("propertyType") || "-"}`,
      `Preferred Location: ${formData.get("location") || "-"}`,
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
      className={`rounded-[2rem] border border-[#C6A76A]/20 bg-[#06111F]/88 shadow-2xl shadow-black/25 backdrop-blur-2xl ${
        compact ? "p-5" : "p-6"
      }`}
    >
      <div className="mb-6">
        <p className="text-[11px] uppercase text-[#C6A76A]">
          Private Advisory Desk
        </p>

        <h4 className="mt-3 text-2xl font-semibold text-white">
          Book Private Advisory
        </h4>

        <p className="mt-3 text-sm text-slate-300">
          Share your budget, property preference, and location. We will respond with a cleaner next step for your requirement.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {propertyId ? <input type="hidden" value={propertyId} name="propertyId" /> : null}
        <Input name="budget" label="Budget Range" type="text" placeholder="Rs. 1 Cr - 3 Cr" />
        <Input
          name="propertyType"
          label="Property Type"
          type="text"
          placeholder="Farmhouse / Land / Investment"
        />
        <Input name="location" label="Preferred Location" type="text" placeholder="Sohna / Naugaon / Dwarka Expressway" />
        <Input name="phone" label="Phone Number" type="tel" placeholder="+91 98XXXXXXX" required />

        <textarea
          name="requirement"
          rows={4}
          aria-label="Requirement details"
          placeholder="Tell us what you want to buy, invest in, or lease..."
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-[#D4AF37]/70"
        />

        <p className="text-xs leading-5 text-slate-400">
          By submitting, you consent to Guild Acre contacting you about this
          requirement. See our{" "}
          <a href="/privacy-policy" className="text-[#F6E7B7] underline underline-offset-4">
            Privacy Policy
          </a>
          .
        </p>

        <button
          type="submit"
          className="w-full rounded-2xl border border-[#D4AF37] bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#020617] transition hover:bg-[#C6A76A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
        >
          Book Private Advisory
        </button>

        {status === "sent" ? (
          <p className="text-sm text-[#F6E7B7]">Thanks. Your enquiry has been received.</p>
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
      <label htmlFor={id} className="mb-2 block text-[11px] text-slate-400">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-slate-400 focus:border-[#D4AF37]/70"
      />
    </div>
  );
}
