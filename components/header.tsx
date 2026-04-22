import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/listings?collection=BUY", label: "Buy" },
  { href: "/listings?collection=RENT", label: "Rent / Lease" },
  { href: "/gurgaon", label: "Localities" },
  { href: "/listings?collection=COMMERCIAL", label: "Services" },
  { href: "/dealers/join", label: "List Property" },
];

export function Header() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919711667782";

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(14px)",
        background: "rgba(6, 16, 23, 0.88)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "18px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "18px",
              border: "1px solid rgba(103,232,249,0.25)",
              background: "linear-gradient(180deg, rgba(34,211,238,0.16), rgba(255,255,255,0.04))",
              display: "grid",
              placeItems: "center",
              color: "#cffafe",
              fontWeight: 800,
              letterSpacing: "0.18em",
            }}
          >
            GA
          </div>
          <div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                lineHeight: 1.1,
              }}
            >
              GUILD ACRE
            </div>
            <div
              style={{
                marginTop: "6px",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.26em",
                color: "#94a3b8",
              }}
            >
              Gurgaon Real Estate Advisory
            </div>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: "#e2e8f0",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#fff",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "999px",
              padding: "12px 18px",
              fontWeight: 700,
            }}
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
