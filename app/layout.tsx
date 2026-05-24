import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navbar from "../components/navbar";
import "./globals.css";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: "Guild Acre | Private Land Intelligence Institution",
    template: "%s",
  },
  description:
    "Private land intelligence and strategic acquisition advisory for select NCR buyers across Gurgaon, Sohna, the Aravali Belt, and emerging growth corridors.",
  applicationName: "Guild Acre",
  icons: {
    icon: "/icon.svg",
    apple: "/logo.png",
  },
  openGraph: {
    siteName: "Guild Acre",
    locale: "en_IN",
    type: "website",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="bg-[#050505] text-[#f4ead8] antialiased">
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="guildacre-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#bda56a] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#050505]"
        >
          Skip to main content
        </a>
        <header className="sticky top-0 z-50 border-b border-[#2d2a22]/70 bg-[#040403]/88 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-8 px-5 py-4 sm:px-7 lg:px-10 lg:py-[1.1rem]">
            <Link href="/" className="group flex min-w-0 items-center gap-4 py-1">
              <div className="min-w-0">
                <div className="font-[var(--font-editorial)] text-2xl font-semibold uppercase leading-none tracking-[0.16em] text-[#f4ead8] transition duration-700 group-hover:text-[#d4c083] sm:text-[1.65rem] sm:tracking-[0.18em]">
                  GUILD ACRE
                </div>
                <div className="mt-2 hidden text-[9px] uppercase tracking-[0.24em] text-[#9d927f] sm:block">
                  Private Land Intelligence & Acquisition Desk
                </div>
              </div>
            </Link>

            <Navbar />
          </div>
        </header>

        <div id="main-content">{children}</div>

        <footer className="border-t border-[#2d2a22] bg-[#050505] px-6 py-16 text-sm text-[#9d927f] lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.25fr_0.75fr_0.75fr]">
            <div>
              <p className="font-[var(--font-editorial)] text-2xl font-semibold uppercase tracking-[0.22em] text-[#f4ead8]">GUILD ACRE</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.32em] text-[#bda56a]">Private Land Intelligence Institution</p>
              <p className="mt-3 max-w-xl leading-7">
                Private land intelligence and strategic acquisition advisory for
                select NCR buyers evaluating complex land-led opportunities.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#f4ead8]">Acquisition Desk</p>
              <div className="mt-3 space-y-2">
                <a className="block transition hover:text-[#d4c083]" href="tel:+919711667782">
                  +91 97116 67782
                </a>
                <a className="block transition hover:text-[#d4c083]" href="mailto:hello@guildacre.com">
                  hello@guildacre.com
                </a>
                <p>Gurgaon, Haryana</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[#f4ead8]">Office</p>
              <div className="mt-3 space-y-2">
                <Link className="block transition hover:text-[#d4c083]" href="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="block transition hover:text-[#d4c083]" href="/cookie-notice">
                  Cookie Notice
                </Link>
                <Link className="block transition hover:text-[#d4c083]" href="/acquisition-desk">
                  Acquisition Desk
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
