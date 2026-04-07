export function Footer() {
  const socialLinks = [
    { href: "https://instagram.com", label: "Instagram", short: "IG" },
    { href: "https://linkedin.com", label: "LinkedIn", short: "LI" },
    { href: "https://youtube.com", label: "YouTube", short: "YT" },
    { href: "https://wa.me/919999999999", label: "WhatsApp", short: "WA" }
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="section-tag">Guild Acre</span>
          <h3>Guild Acre</h3>
          <p>
            Premium property listings across Golf Course Road, New Gurgaon, Dwarka Expressway,
            Sohna Road, and central investment corridors.
          </p>
          <div className="footer-socials">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                {item.short}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-column">
          <h4>Reputation</h4>
          <ul>
            <li>Verified inventory</li>
            <li>Advisor-led property curation</li>
            <li>Fast WhatsApp assistance</li>
            <li>Investor and end-user guidance</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Call or WhatsApp for curated site visits and tailored recommendations.</p>
          <p>support@guildacre.com</p>
          <p>Gurgaon advisory desk for premium residential and commercial requirements.</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Guild Acre</span>
        <span>Luxury property advisory for Gurgaon</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}
