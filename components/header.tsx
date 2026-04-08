import Image from "next/image";
import Link from "next/link";

type NavLinkItem = {
  href: string;
  label: string;
};

type NavDropdownItem = {
  label: string;
  items: NavLinkItem[];
};

const navItems: Array<NavLinkItem | NavDropdownItem> = [
  { href: "/", label: "Home" },
  {
    label: "Buy",
    items: [
      { href: "/listings?collection=BUY", label: "All Gurgaon homes" },
      { href: "/listings?collection=LUXURY", label: "Luxury residences" },
      { href: "/listings?collection=NEW_LAUNCH", label: "New launches" },
      { href: "/listings?collection=READY", label: "Ready to move" }
    ]
  },
  {
    label: "Localities",
    items: [
      { href: "/listings?location=Golf%20Course%20Road", label: "Golf Course Road" },
      { href: "/listings?location=DLF%20Phase%202", label: "DLF Phase 2" },
      { href: "/listings?location=New%20Gurgaon", label: "New Gurgaon" },
      { href: "/listings?location=Dwarka%20Expressway", label: "Dwarka Expressway" }
    ]
  },
  {
    label: "Services",
    items: [
      { href: "/listings?collection=COMMERCIAL", label: "Commercial assets" },
      { href: "/listings?collection=FLOORS", label: "Builder floors" },
      { href: "/listings?collection=PLOTS", label: "Plots and land" },
      { href: "/admin/login", label: "Private admin access" }
    ]
  },
  { href: "/admin", label: "Admin" }
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand-mark">
          <Image src="/logo-mark.svg" alt="Guild Acre" width={44} height={44} />
          <span>
            Guild Acre
            <small>Gurgaon property advisors</small>
          </span>
        </Link>

        <nav className="nav-links">
          {navItems.map((item) => (
            isNavLinkItem(item) ? (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ) : (
              <div className="nav-dropdown" key={item.label}>
                <button type="button" className="nav-dropdown__trigger">
                  {item.label}
                  <span className="nav-dropdown__caret">+</span>
                </button>
                <div className="nav-dropdown__menu">
                  {item.items.map((subItem) => (
                    <Link key={subItem.href} href={subItem.href} className="nav-dropdown__item">
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            )
          ))}
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999"}`}
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

function isNavLinkItem(item: NavLinkItem | NavDropdownItem): item is NavLinkItem {
  return "href" in item;
}
