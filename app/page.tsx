import Image from "next/image";
import Link from "next/link";
import { getFeaturedProperties, getPropertyLocationStats, getPropertyLocations } from "@/lib/queries";
import { PropertyCard } from "@/components/property-card";
import { SearchFilters } from "@/components/search-filters";
import { LeadForm } from "@/components/lead-form";
import { parseJsonArray } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [featuredProperties, locations, locationStats] = await Promise.all([
    getFeaturedProperties(),
    getPropertyLocations(),
    getPropertyLocationStats()
  ]);
  const spotlightLocations = locations.slice(0, 4);
  const heroProperty = featuredProperties[0];
  const heroImage = heroProperty ? parseJsonArray(heroProperty.imageUrls)[0] : null;
  const galleryProperties = featuredProperties.slice(0, 3);
  const portalCollections = [
    { label: "Buy Homes", query: "collection=BUY" },
    { label: "Luxury", query: "collection=LUXURY" },
    { label: "New Launches", query: "collection=NEW_LAUNCH" },
    { label: "Ready to Move", query: "collection=READY" },
    { label: "Builder Floors", query: "collection=FLOORS" },
    { label: "Commercial", query: "collection=COMMERCIAL" }
  ];

  return (
    <main>
      <section className="hero-section">
        {heroImage ? (
          <div className="hero-backdrop" aria-hidden="true">
            <Image src={heroImage} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
          </div>
        ) : null}
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="section-tag">Oceanic luxury. Smart investments. Private advisors.</span>
            <h1>Gurgaon real estate, presented like a private luxury portfolio.</h1>
            <p>
              Browse handpicked apartments, builder floors, plots, and commercial assets across
              Gurgaon’s most valuable micro-markets.
            </p>
            <p className="hero-copy__subtext">
              Built for premium discovery, faster shortlisting, and advisor-led buying journeys
              that feel closer to concierge service than portal browsing.
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
            <div className="portal-quick-links">
              {portalCollections.map((item) => (
                <Link key={item.label} href={`/listings?${item.query}`} className="portal-quick-link">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="hero-trust-row">
              <div>
                <strong>{featuredProperties.length}+</strong>
                <span>Curated opportunities</span>
              </div>
              <div>
                <strong>{locations.length}</strong>
                <span>Tracked Gurgaon corridors</span>
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
                <span className="section-tag">Private Portfolio Highlight</span>
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
                  <strong>Private</strong>
                  <span>Handpicked inventory</span>
                </div>
                <div>
                  <strong>Investor</strong>
                  <span>High-trust positioning</span>
                </div>
                <div>
                  <strong>Concierge</strong>
                  <span>WhatsApp and callback flow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-space">
        <div className="locality-strip">
          <div className="section-head">
            <div>
              <span className="section-tag">Gurgaon Locality Hub</span>
              <h2>Start like a mini 99acres, but only for Gurgaon</h2>
            </div>
            <span className="eyebrow">Corridor-first discovery for faster shortlisting</span>
          </div>
          <div className="locality-strip__grid">
            {locationStats.slice(0, 6).map((item) => (
              <Link
                key={item.location}
                className="locality-chip-card"
                href={`/listings?location=${encodeURIComponent(item.location)}`}
              >
                <strong>{item.location}</strong>
                <span>{item.count} listing{item.count === 1 ? "" : "s"}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-space">
        <div className="services-ribbon">
          <article className="services-ribbon__card">
            <span className="section-tag">Residential</span>
            <h3>Luxury apartments, builder floors, villas, and marquee family homes.</h3>
          </article>
          <article className="services-ribbon__card">
            <span className="section-tag">Commercial</span>
            <h3>Investment-oriented offices, retail assets, and yield-led opportunities.</h3>
          </article>
          <article className="services-ribbon__card">
            <span className="section-tag">Advisory</span>
            <h3>Shortlisting, negotiations, and quick WhatsApp-led buyer coordination.</h3>
          </article>
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

      <section className="container section-space testimonials-section">
        <div className="section-head">
          <div>
            <span className="section-tag">Reputation</span>
            <h2>Why premium buyers trust the process</h2>
          </div>
          <span className="eyebrow">Advisor-led. Curated. Faster decisions.</span>
        </div>
        <div className="testimonial-grid">
          <article className="testimonial-card">
            <span className="testimonial-card__rating">5.0</span>
            <p>
              “The shortlist felt curated, not random. We saw fewer properties, but every one of
              them matched our brief.”
            </p>
            <strong>Family Buyer</strong>
            <span>Golf Course Road search</span>
          </article>
          <article className="testimonial-card">
            <span className="testimonial-card__rating">5.0</span>
            <p>
              “A much stronger experience than scrolling generic portals. The presentation itself
              built trust before the first call.”
            </p>
            <strong>Investor Client</strong>
            <span>Dwarka Expressway opportunity</span>
          </article>
          <article className="testimonial-card">
            <span className="testimonial-card__rating">5.0</span>
            <p>
              “Fast WhatsApp follow-up, clean data, clear positioning, and no time wasted on weak
              inventory.”
            </p>
            <strong>Relocation Buyer</strong>
            <span>New Gurgaon shortlist</span>
          </article>
        </div>
      </section>

      <section className="container section-space">
        <div className="editorial-gallery">
          <div className="section-head">
            <div>
              <span className="section-tag">Visual Signature</span>
              <h2>Designed to feel like a private luxury real estate studio</h2>
            </div>
            <span className="eyebrow">Immersive visuals. Elevated presentation.</span>
          </div>
          <div className="editorial-gallery__grid">
            {galleryProperties.map((property, index) => {
              const image = parseJsonArray(property.imageUrls)[0];

              return (
                <article
                  className={`editorial-gallery__tile editorial-gallery__tile--${index + 1}`}
                  key={property.id}
                >
                  {image ? (
                    <Image
                      src={image}
                      alt={property.title}
                      fill
                      sizes="(max-width: 980px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  ) : null}
                  <div className="editorial-gallery__overlay" />
                  <div className="editorial-gallery__content">
                    <span className="section-tag">{property.location}</span>
                    <strong>{property.title}</strong>
                    <p>{formatPriceCompact(property.priceInr)} • {property.type.replaceAll("_", " ")}</p>
                  </div>
                </article>
              );
            })}
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

function formatPriceCompact(value: number) {
  if (value >= 10_000_000) {
    return `INR ${(value / 10_000_000).toFixed(value % 10_000_000 === 0 ? 0 : 1)} Cr`;
  }

  return `INR ${(value / 100_000).toFixed(value % 100_000 === 0 ? 0 : 1)} L`;
}
