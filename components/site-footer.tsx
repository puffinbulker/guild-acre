import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© 2026 Guildacre</p>

        <div>
          <Link href="/listings">Listings</Link>
          <Link href="/gurgaon">Gurgaon</Link>
        </div>
      </div>
    </footer>
  );
}