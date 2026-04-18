import Link from "next/link";

import { HeroSearch } from "@/components/hero-search";
import { LeadForm } from "@/components/lead-form";
import { LuxuryHeader } from "@/components/luxury-header";
import { PropertyCard, Property } from "@/components/property-card";

const services = [
  {
    title: "Farmhouse & Weekend Homes",
    copy:
      "Curated farmhouse opportunities in peaceful, scenic zones with long-term appreciation potential.",
  },
  {
    title: "Agricultural & Investment Land",
    copy:
      "Verified land parcels with clear documentation and strong future growth visibility.",
  },
  {
    title: "High-Growth Investment Deals",
    copy:
      "Pre-launch and undervalued opportunities across Gurgaon's fastest-growing corridors.",
  },
  {
    title: "Personalized Advisory",
    copy:
      "1:1 consultation to match your budget with the right location, asset type, and timing.",
  },
];

const featuredOpportunities: Property[] = [
  {
    id: "1",
    title: "Aravalli Ridge Farm Estates",
    location: "Sohna",
    price: "Rs. 2.4 Cr onwards",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    beds: 4,
    baths: 4,
    area: "1 acre parcels",
    status: "Registry Ready",
    featured: true,
  },
  {
    id: "2",
    title: "Dwarka Gateway Investor Plots",
    location: "Dwarka Expressway",
    price: "Rs. 3.1 Cr onwards",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    beds: 0,
    baths: 0,
    area: "240 - 500 sq. yd.",
    status: "High Growth Zone",
    featured: true,
  },
  {
    id: "3",
    title: "Naugaon Orchard Residences",
    location: "Naugaon",
    price: "Rs. 1.2 Cr onwards",
    image:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1600&auto=format&fit=crop",
    beds: 3,
    baths: 3,
    area: "Farmhouse concept",
    status: "Scenic Weekend Home",
    featured: false,
  },
];

const topLocalities = [
  {
    title: "Dwarka Expressway",
    copy: "Infrastructure-led upside with active investor demand and premium launches.",
  },
  {
    title: "Sohna / Naugaon Belt",
    copy: "Emerging land and farmhouse demand with stronger entry pricing today.",
  },
  {
    title: "Golf Course Extension",
    copy: "Premium residential expansion with better depth for lifestyle buyers.",
  },
  {
    title: "New Gurgaon",
    copy: "Value-led residential absorption with long-term appreciation potential.",
  },
];

const testimonials = [
  {
    quote: "The shortlist felt curated, not random. Every option made sense.",
    source: "Investor, Dwarka Expressway",
  },
  {
    quote: "Much better than scrolling portals. Clear advice and fast decisions.",
    source: "End User, Golf Course Extension",
  },
  {
    quote: "No time wasted. Only serious opportunities.",
    source: "Buyer, New Gurgaon",
  },
];

const trustPoints = [
  "We show curated deals, not inventory dumps",
  "Every opportunity is verified before recommendation",
  "We guide on legal clarity and documentation",
  "We focus on investment logic, not pushing sales",
  "Deep understanding of Gurgaon micro-markets and growth corridors",
];

const heroTrustLine = [
  "Verified Deals",
  "On-Ground Insights",
  "Advisor-Led Shortlisting",
];

export default function HomePage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919711667782";

  return (
    <main className="min-h-screen bg-[#061017] text-white">
      <LuxuryHeader />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(38,117,146,0.26),transparent_34%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,11,18,0.2),rgba(4,11,18,0.72),rgba(4,11,18,0.96))]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
          <div className="max-w-4xl">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.42em] text-cyan-100/65">
              Guild Acre · Gurgaon Real Estate Advisory
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl">
              Gurgaon&apos;s Curated Real Estate Advisory Platform
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Exclusive access to verified land, farmhouses, and high-growth investment
              opportunities guided by local expertise, not random listings.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/listings"
                className="rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Explore Verified Opportunities
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
                target="_blank"
                rel="noreferrer"
              >
                Book Free Consultation
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200/90">
              {heroTrustLine.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
                >
                  {`✔ ${item}`}
                </span>
              ))}
            </div>

            <div className="mt-12 max-w-5xl">
              <HeroSearch />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl lg:grid-cols-2 lg:p-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-100/55">
              Problem / Solution
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Buying Property in Gurgaon Shouldn&apos;t Feel Like Guesswork
            </h2>

            <div className="mt-8 space-y-4 text-base leading-7 text-slate-300">
              <p>Endless listings with no real filtering</p>
              <p>Fake or duplicate inventory across portals</p>
              <p>Legal confusion in land and farmhouse deals</p>
              <p>No clarity on where real growth is happening</p>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[1.75rem] border border-cyan-200/10 bg-[#081822] p-6 shadow-2xl shadow-black/20">
            <h3 className="text-2xl font-semibold text-white">Guild Acre changes the way you invest.</h3>
            <p className="mt-4 text-base leading-7 text-slate-300">
              We don&apos;t flood you with options. We curate, verify, and shortlist only
              high-potential opportunities based on your requirement.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              So instead of browsing 100 listings, you evaluate 5 that actually make
              sense.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-100/55">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              What You Get Access To
            </h2>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="w-fit rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85 backdrop-blur-md transition hover:bg-white/10"
            target="_blank"
            rel="noreferrer"
          >
            Get Personalized Recommendations
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-100/55">
              Featured Opportunities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Handpicked Opportunities (Not Mass Listings)
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              Every listing you see here is filtered, verified, and selected for serious buyers only.
            </p>
          </div>

          <Link
            href="/listings"
            className="w-fit rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85 backdrop-blur-md transition hover:bg-white/10"
          >
            View All Opportunities
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredOpportunities.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-100/55">
              Why Trust Us
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Why Serious Investors Choose Guild Acre
            </h2>

            <div className="mt-8 space-y-4">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.5rem] border border-white/10 bg-[#081822] px-5 py-4 text-sm leading-7 text-slate-300"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#081822] p-8 shadow-2xl shadow-black/20">
            <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-100/55">
              Founder Note
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Advisory, Not Brokerage
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              At Guild Acre, we believe real estate decisions should be guided, not sold.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              We work closely with buyers to understand their goals, whether it&apos;s
              investment, lifestyle, or long-term wealth creation, and then recommend
              only what truly fits.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              No pressure. No spam. No random listings.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              className="mt-8 inline-flex rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              target="_blank"
              rel="noreferrer"
            >
              Speak Directly on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-100/55">
            Social Proof
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.source}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <p className="text-lg leading-8 text-white">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-5 text-sm uppercase tracking-[0.2em] text-cyan-100/65">
                {testimonial.source}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-100/55">
              Lead Capture
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Tell Us What You&apos;re Looking For
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Get handpicked options within 24 hours based on your requirement.
            </p>

            <p className="mt-5 text-sm leading-7 text-cyan-100/70">
              Or simply WhatsApp &ldquo;INVEST&rdquo; to get latest opportunities instantly.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=INVEST`}
              className="mt-8 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp INVEST
            </a>
          </div>

          <LeadForm />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[#081822] p-8 shadow-2xl shadow-black/20">
          <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-100/55">
            Market Insight
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Where Gurgaon is Growing Right Now
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
            We track and analyze Gurgaon&apos;s most active corridors to help you invest early.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {topLocalities.map((locality) => (
              <article
                key={locality.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-xl font-semibold text-white">{locality.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{locality.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}