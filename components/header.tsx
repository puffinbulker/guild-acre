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
    label: "Properties",
    items: [
      { href: "/listings?type=APARTMENT", label: "Luxury Apartments" },
      { href: "/listings?type=BUILDER_FLOOR", label: "Builder Floors" },
      { href: "/listings?type=VILLA", label: "Villas & Independent Homes" },
      { href: "/listings?type=COMMERCIAL", label: "Commercial Assets" }
    ]
  },
  {
    label: "Services",
    items: [
      { href: "/listings", label: "Investor Shortlisting" },
      { href: "/listings?maxBudget=50000000", label: "Budget-Led Search" },
      { href: "/admin/login", label: "Private Admin Access" }
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
