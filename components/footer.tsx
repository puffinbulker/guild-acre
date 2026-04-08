import Image from "next/image";

export function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999";
  const contactLinks = [
    { href: `https://wa.me/${whatsappNumber}`, label: "WhatsApp", short: "WA" },
    { href: `tel:+${whatsappNumber}`, label: "Call", short: "CL" },
    { href: "https://www.guildacre.com", label: "Website", short: "WB" }
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image
            src="/logo-wordmark.svg"
            alt="Guild Acre"
            width={260}
            height={56}
            className="footer-brand__wordmark"
          />
          <span className="section-tag">Guild Acre Private Advisory</span>
          <p>
            Ocean-toned luxury presentation for premium property discovery across Golf Course Road,
            New Gurgaon, Dwarka Expressway, and marquee investment corridors.
          </p>
          <div className="footer-socials">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={item.label}
              >
                {item.short}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-column">
          <h4>Reputation</h4>
          <ul>
            <li>Verified inventory</li>
            <li>Moderated dealer marketplace</li>
            <li>Advisor-led property curation</li>
            <li>Private buyer shortlisting</li>
            <li>Fast WhatsApp assistance</li>
            <li>Investor and end-user guidance</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Call or WhatsApp for curated site visits and tailored recommendations.</p>
          <p>Website: www.guildacre.com</p>
          <p>WhatsApp Desk: +{whatsappNumber}</p>
          <p>Gurgaon, Haryana, India</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Guild Acre</span>
        <span>Luxury property advisory for Gurgaon</span>
        <span>Oceanic premium presentation • All rights reserved</span>
      </div>
    </footer>
  );
}
