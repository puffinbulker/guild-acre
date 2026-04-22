"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    title: "Golf Course Road",
    subtitle: "Ultra-luxury addresses",
    description:
      "Prime residences for established wealth, corporate leadership, and landmark living.",
  },
  {
    title: "Dwarka Expressway",
    subtitle: "Capital growth corridor",
    description:
      "A strategic mix of infrastructure-led upside, new inventory, and investor momentum.",
  },
  {
    title: "Private Investor Desk",
    subtitle: "Discreet acquisitions",
    description:
      "Access carefully selected opportunities through a more confidential advisory-led process.",
  },
];

export function FeaturedCollections() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-100/55">
          Curated Collections
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
          Explore Gurgaon through a luxury lens
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {collections.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl hover:bg-white/[0.06]"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-cyan-100/75">{item.subtitle}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>

              <ArrowUpRight className="h-5 w-5 text-white/70" />
            </div>

            <p className="mt-4 text-sm text-slate-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}