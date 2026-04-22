export function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919711667782";

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "#040c12",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "56px 20px 32px",
          display: "grid",
          gap: "28px",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.22em",
            }}
          >
            GUILD ACRE
          </div>
          <div
            style={{
              marginTop: "8px",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.26em",
              color: "#94a3b8",
            }}
          >
            Gurgaon Real Estate Advisory
          </div>
          <p style={{ marginTop: "18px", color: "#cbd5e1", lineHeight: 1.8, maxWidth: "420px" }}>
            Curated guidance for luxury homes, land, farmhouse opportunities, and
            strategic Gurgaon investment decisions.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.24em", color: "#67e8f9" }}>
            Explore
          </h3>
          <div style={{ marginTop: "16px", display: "grid", gap: "12px" }}>
            <a href="/listings" style={{ color: "#e2e8f0", textDecoration: "none" }}>Listings</a>
            <a href="/gurgaon" style={{ color: "#e2e8f0", textDecoration: "none" }}>Gurgaon Hub</a>
            <a href="/dealers/join" style={{ color: "#e2e8f0", textDecoration: "none" }}>List Property</a>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.24em", color: "#67e8f9" }}>
            Contact
          </h3>
          <div style={{ marginTop: "16px", display: "grid", gap: "12px" }}>
            <a href={`https://wa.me/${whatsappNumber}`} style={{ color: "#e2e8f0", textDecoration: "none" }}>
              WhatsApp
            </a>
            <a href={`tel:+${whatsappNumber}`} style={{ color: "#e2e8f0", textDecoration: "none" }}>
              Call +{whatsappNumber}
            </a>
            <a href="https://www.guildacre.com" style={{ color: "#e2e8f0", textDecoration: "none" }}>
              www.guildacre.com
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "18px 20px 24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "10px",
            color: "#94a3b8",
            fontSize: "14px",
          }}
        >
          <span>&copy; 2026 Guild Acre</span>
          <span>Gurgaon, Haryana, India</span>
        </div>
      </div>
    </footer>
  );
}
