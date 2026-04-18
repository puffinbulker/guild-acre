"use client";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className={`rounded-[2rem] border border-white/10 bg-[#0a1620]/80 shadow-2xl backdrop-blur-2xl ${
        compact ? "p-5" : "p-6"
      }`}
    >
      <div className="mb-6">
        <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-100/55">
          Curated Requirement Desk
        </p>

        <h4 className="mt-3 text-2xl font-semibold text-white">
          Get Curated Options
        </h4>

        <p className="mt-3 text-sm text-slate-300">
          Share your budget, property preference, and location. We will respond with handpicked opportunities within 24 hours.
        </p>
      </div>

      <form className="space-y-4">
        {propertyId ? <input type="hidden" value={propertyId} name="propertyId" /> : null}
        <Input label="Budget Range" type="text" placeholder="Rs. 1 Cr - 3 Cr" />
        <Input
          label="Property Type"
          type="text"
          placeholder="Farmhouse / Land / Investment"
        />
        <Input label="Preferred Location" type="text" placeholder="Sohna / Naugaon / Dwarka Expressway" />
        <Input label="Phone Number" type="tel" placeholder="+91 98XXXXXXX" />

        <textarea
          rows={4}
          placeholder="Tell us what you want to buy, invest in, or lease..."
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400"
        />

        <button
          type="submit"
          className="w-full rounded-2xl bg-gradient-to-r from-cyan-200 to-teal-200 px-5 py-3 text-sm font-semibold text-black"
        >
          Get Curated Options
        </button>
      </form>
    </motion.div>
  );
}


function Input({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] text-slate-400">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-slate-400"
      />
    </div>
  );
}
