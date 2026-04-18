import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
type NavLinkItem = {
  href: string;
  label: string;
};

type NavDropdownItem = {
  label: string;
  href: string;
  items: NavLinkItem[];
};

const publicNavItems: Array<NavLinkItem | NavDropdownItem> = [
  { href: "/", label: "Home" },
  {
    label: "Buy",
    href: "/listings?collection=BUY",
    items: [
      { href: "/listings?collection=BUY", label: "All Gurgaon Homes" },
      { href: "/listings?collection=LUXURY", label: "Luxury Residences" },
      { href: "/listings?collection=NEW_LAUNCH", label: "New Launches" },
      { href: "/listings?collection=READY", label: "Ready to Move" }
    ]
  },
  {
    label: "Rent / Lease",
    href: "/listings?collection=RENT",
    items: [
      { href: "/listings?collection=RENT", label: "Rent in Gurgaon" },
      { href: "/listings?collection=LEASE", label: "Lease Inventory" },
      { href: "/listings?collection=RESALE", label: "Resale Opportunities" },
      { href: "/listings?collection=FRESH", label: "Fresh Booking" }
    ]
  },
  {
    label: "Localities",
    href: "/gurgaon",
    items: [
      { href: "/gurgaon", label: "Gurgaon Hub" },
      { href: "/listings?location=Golf%20Course%20Road", label: "Golf Course Road" },
      { href: "/listings?location=DLF%20Phase%202", label: "DLF Phase 2" },
      { href: "/listings?location=New%20Gurgaon", label: "New Gurgaon" },
      { href: "/listings?location=Dwarka%20Expressway", label: "Dwarka Expressway" }
    ]
  },
  {
    label: "Services",
    href: "/listings?collection=COMMERCIAL",
    items: [
      { href: "/listings?collection=COMMERCIAL", label: "Commercial Assets" },
      { href: "/listings?collection=FLOORS", label: "Builder Floors" },
      { href: "/listings?collection=VILLAS", label: "Villa / Kothi" },
      { href: "/listings?collection=PLOTS", label: "Plots and Land" },
      { href: "/listings?collection=FARMLAND", label: "Farm / Agriculture Land" },
      { href: "/listings?collection=LAND", label: "Land Advisory" }
    ]
  },
  {
    label: "List Property",
    href: "/dealers/join",
    items: [
      { href: "/dealers/join", label: "Join as Dealer / Owner" },
      { href: "/dealers/login", label: "Dealer Login" }
    ]
  }
];

export async function Header() {
  await cookies();

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919711667782";

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand-mark" aria-label="Guild Acre home">
          <span className="brand-mark__lockup brand-mark__lockup--desktop">
            <Image src="/logo-wordmark.svg" alt="Guild Acre" width={280} height={60} priority />
          </span>

          <span className="brand-mark__lockup brand-mark__lockup--mobile">
            <Image src="/logo-mark.svg" alt="Guild Acre" width={48} height={48} />
            <span>
              Guild Acre
              <small>Property advisory</small>
            </span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {publicNavItems.map((item) =>
            isNavDropdownItem(item) ? (
              <div className="nav-dropdown" key={item.label}>
                <Link href={item.href} className="nav-dropdown__trigger">
                  {item.label}
                  <span className="nav-dropdown__caret" aria-hidden="true">
                    +
                  </span>
                </Link>

                <div className="nav-dropdown__menu">
                  {item.items.map((subItem) => (
                    <Link key={subItem.href} href={subItem.href} className="nav-dropdown__item">
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            )
          )}

          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="button button--ghost nav-cta"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Advisor
          </a>
        </nav>
      </div>
    </header>
  );
}

function isNavDropdownItem(item: NavLinkItem | NavDropdownItem): item is NavDropdownItem {
  return "items" in item;
}
