"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export function LuxuryHeader() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#061017]/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white">
            GA
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-white">
              Guild Acre
            </p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
              Gurgaon Advisory Platform
            </p>
          </div>
        </div>

        <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-md transition hover:bg-white/10">
          <Phone className="h-4 w-4" />
          Book Consultation
        </button>
      </div>
    </motion.header>
  );
}
