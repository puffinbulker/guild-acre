import Link from "next/link";
import { getFeaturedProperties, getPropertyLocations } from "@/lib/queries";
import { PropertyCard } from "@/components/property-card";
import { SearchFilters } from "@/components/search-filters";
import { LeadForm } from "@/components/lead-form";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [featuredProperties, locations] = await Promise.all([
    getFeaturedProperties(),
    getPropertyLocations()
  ]);

  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <span className="section-tag">Luxury homes. Smart investments. Trusted advisors.</span>
            <h1>Premium Gurgaon real estate platform built for serious buyers and investors.</h1>
            <p>
              Browse handpicked apartments, builder floors, plots, and commercial assets across
              Gurgaon’s most valuable micro-markets.
            </p>
            <div className="hero-actions">
              <Link href="/listings" className="button">
                Explore listings
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999"}`}
                className="button button--ghost"
                target="_blank"
                rel="noreferrer"
              >
                Instant WhatsApp connect
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <h2>Find the right property faster</h2>
            <SearchFilters locations={locations} current={{}} />
            <div className="stats-row">
              <div>
                <strong>Verified</strong>
                <span>Premium listings</span>
              </div>
              <div>
                <strong>SEO-ready</strong>
                <span>Fast page delivery</span>
              </div>
              <div>
                <strong>Lead-first</strong>
                <span>WhatsApp & forms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-space">
        <div className="section-head">
          <div>
            <span className="section-tag">Featured Collection</span>
            <h2>High-intent listings across Gurgaon</h2>
          </div>
          <Link href="/listings">View all properties</Link>
        </div>
        <div className="property-grid">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="container section-space spotlight-grid">
        <div className="spotlight-card">
          <span className="section-tag">Why it feels premium</span>
          <h2>Built to convert like a serious real estate brand.</h2>
          <p>
            Structured property detail pages, strong visual hierarchy, and high-trust contact
            touchpoints are designed to echo premium marketplaces while staying custom and fast.
          </p>
        </div>
        <LeadForm />
      </section>
    </main>
  );
}
