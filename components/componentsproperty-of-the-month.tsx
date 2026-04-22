import Link from "next/link";

const spotlights = [
  {
    category: "Luxury Residential",
    project: "DLF The Arbour",
    location: "Sector 63, Golf Course Extension Road",
    config: "4 BHK",
    size: "3950 sq. ft.",
    price: "₹8.52 Cr",
    summary:
      "Ultra-luxury high-rise residences for buyers who want scale, exclusivity, and long-term value in Gurgaon’s premium belt.",
    highlights: [
      "Low-density luxury tower",
      "Large balconies and skyline views",
      "Prime Golf Course Ext. location",
      "Strong long-term appreciation potential",
    ],
    imageSuggestion: "Aerial view of the luxury tower with landscaped greens",
    brochureCta: "/contact?project=dlf-the-arbour&action=brochure",
    visitCta: "/contact?project=dlf-the-arbour&action=site-visit",
  },
  {
    category: "Growth Corridor",
    project: "Smartworld One DXP",
    location: "Sector 113, Dwarka Expressway",
    config: "3.5 & 4.5 BHK",
    size: "Premium residences",
    price: "₹4.47 Cr – ₹5.52 Cr",
    summary:
      "A strategic Dwarka Expressway address with direct Delhi-border advantage, premium positioning, and strong future upside.",
    highlights: [
      "Delhi border access",
      "Airport and expressway connectivity",
      "High-growth investment zone",
      "Modern gated community living",
    ],
    imageSuggestion: "Wide-angle elevation facing Dwarka Expressway skyline",
    brochureCta: "/contact?project=smartworld-one-dxp&action=brochure",
    visitCta: "/contact?project=smartworld-one-dxp&action=site-visit",
  },
  {
    category: "Commercial & SCO",
    project: "Emaar Business District 114",
    location: "Sector 114, Dwarka Expressway",
    config: "SCO Plots",
    size: "Commercial plot format",
    price: "₹3.23 Cr – ₹6.6 Cr",
    summary:
      "A strategic SCO opportunity positioned for retail, office, and F&B demand in one of Gurgaon’s strongest emerging commercial zones.",
    highlights: [
      "SCO ownership advantage",
      "Retail + office flexibility",
      "Strong catchment potential",
      "Good rental yield opportunity",
    ],
    imageSuggestion: "Front-facing high-street retail block with illuminated facade",
    brochureCta: "/contact?project=emaar-business-district-114&action=brochure",
    visitCta: "/contact?project=emaar-business-district-114&action=site-visit",
  },
  {
    category: "Affordable / Mid-Range",
    project: "Ramprastha Primera",
    location: "Sector 37D, Gurgaon",
    config: "3 BHK",
    size: "Ready-to-move homes",
    price: "₹1.65 Cr – ₹1.75 Cr",
    summary:
      "A ready-to-move option for end-users and families looking for practical pricing in a strong growth corridor near Dwarka Expressway.",
    highlights: [
      "Ready-to-move inventory",
      "Family-friendly layout",
      "Established society environment",
      "Competitive entry pricing",
    ],
    imageSuggestion: "Family residential tower with central greens and clubhouse view",
    brochureCta: "/contact?project=ramprastha-primera&action=brochure",
    visitCta: "/contact?project=ramprastha-primera&action=site-visit",
  },
];

export function PropertyOfTheMonth() {
  return (
    <section className="container section-space section-space--airy">
      <div className="section-head section-head--tight">
        <div>
          <span className="section-tag">Property of the Month</span>
          <h2>Gurgaon’s standout opportunities across luxury, growth, commercial, and value segments</h2>
        </div>
      </div>

      <div className="property-month-grid">
        {spotlights.map((item) => (
          <article key={item.project} className="property-month-card">
            <div className="property-month-card__media">
              <div className="property-month-card__image-placeholder">
                <span>{item.imageSuggestion}</span>
              </div>
            </div>

            <div className="property-month-card__content">
              <span className="section-tag">{item.category}</span>
              <h3>{item.project}</h3>
              <p className="property-month-card__location">{item.location}</p>

              <div className="property-month-card__stats">
                <span><strong>Config:</strong> {item.config}</span>
                <span><strong>Size:</strong> {item.size}</span>
                <span><strong>Price:</strong> {item.price}</span>
              </div>

              <p className="property-month-card__summary">{item.summary}</p>

              <ul className="property-month-card__highlights">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="property-month-card__actions">
                <Link href={item.visitCta} className="button">
                  Book a Site Visit
                </Link>
                <Link href={item.brochureCta} className="button button--ghost">
                  Download Brochure
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}