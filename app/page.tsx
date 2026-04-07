import Image from "next/image";
import Link from "next/link";
import { getFeaturedProperties, getPropertyLocations } from "@/lib/queries";
import { PropertyCard } from "@/components/property-card";
import { SearchFilters } from "@/components/search-filters";
import { LeadForm } from "@/components/lead-form";
import { parseJsonArray } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [featuredProperties, locations] = await Promise.all([
    getFeaturedProperties(),
    getPropertyLocations()
  ]);
  const spotlightLocations = locations.slice(0, 4);
  const heroProperty = featuredProperties[0];
  const heroImage = heroProperty ? parseJsonArray(heroProperty.imageUrls)[0] : null;

  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="section-tag">Luxury homes. Smart investments. Trusted advisors.</span>
            <h1>Curated Gurgaon real estate for buyers who expect more than just listings.</h1>
            <p>
              Browse handpicked apartments, builder floors, plots, and commercial assets across
              Gurgaon’s most valuable micro-markets.
            </p>
            <p className="hero-copy__subtext">
              Built for premium discovery, faster shortlisting, and stronger advisor-led buying
              journeys across Gurgaon.
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
            <div className="hero-trust-row">
              <div>
                <strong>{featuredProperties.length}+</strong>
                <span>Featured opportunities</span>
              </div>
              <div>
                <strong>{locations.length}</strong>
                <span>Gurgaon micro-markets tracked</span>
              </div>
              <div>
                <strong>1:1</strong>
                <span>Advisor-led shortlisting</span>
              </div>
            </div>
          </div>

          <div className="hero-stage">
            <div className="hero-visual">
              {heroImage ? (
                <Image
                  src={heroImage}
                  alt={heroProperty?.title || "Premium Gurgaon residence"}
                  fill
                  priority
                  sizes="(max-width: 980px) 100vw, 42vw"
                  style={{ objectFit: "cover" }}
                />
              ) : null}
              <div className="hero-visual__overlay" />
              <div className="hero-visual__content">
                <span className="section-tag">Editor&apos;s Pick</span>
                <strong>{heroProperty?.title || "Premium Gurgaon Residence"}</strong>
                <p>
                  {heroProperty?.location || "Golf Course Road"} •{" "}
                  {heroProperty?.sector || "Sector 54"}
                </p>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-panel__topline">
                <span className="section-tag">Private Search Desk</span>
                <span className="hero-panel__dot" />
                <span>Built for premium discovery</span>
              </div>
              <h2>Find the right property faster</h2>
              <p className="hero-panel__intro">
                Filter by budget, location, and asset type to move from browsing to serious
                shortlisting in minutes.
              </p>
              <SearchFilters locations={locations} current={{}} />
              <div className="stats-row">
                <div>
                  <strong>Verified</strong>
                  <span>Handpicked inventory</span>
                </div>
                <div>
                  <strong>High-trust</strong>
                  <span>Investor-grade positioning</span>
                </div>
                <div>
                  <strong>Lead-first</strong>
                  <span>WhatsApp and callback flow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-space">
        <div className="market-strip">
          <div className="market-strip__intro">
            <span className="section-tag">Signature Corridors</span>
            <h2>Where premium demand is moving right now</h2>
          </div>
          <div className="market-strip__grid">
            {spotlightLocations.map((location, index) => (
              <article className="market-card" key={location}>
                <span className="market-card__index">0{index + 1}</span>
                <strong>{location}</strong>
                <p>Strong intent from end users, investors, and relocation-driven buyers.</p>
              </article>
            ))}
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
          <div className="spotlight-list">
            <div>
              <strong>01</strong>
              <span>Curated listings over noisy inventory dumps</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Fast mobile browsing for WhatsApp-heavy buyer journeys</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Premium positioning that feels closer to advisory than classifieds</span>
            </div>
          </div>
        </div>
        <LeadForm />
      </section>
    </main>
  );
}
