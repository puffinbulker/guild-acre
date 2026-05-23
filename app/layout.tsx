import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navbar from "../components/navbar";
import "./globals.css";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: "Guild Acre | Private Land Intelligence Office",
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
        <header className="sticky top-0 z-50 border-b border-[#2d2a22] bg-[#050505]/88 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-5 sm:px-6 lg:px-8 lg:py-7">
            <Link href="/" className="group flex min-w-0 items-center gap-4 py-1">
              <div className="min-w-0">
                <div className="font-[var(--font-editorial)] text-2xl font-semibold uppercase leading-none tracking-[0.2em] text-[#f4ead8] transition group-hover:text-[#d4c083] sm:text-3xl sm:tracking-[0.24em]">
                  GUILD ACRE
                </div>
                <div className="mt-2 hidden text-[10px] uppercase tracking-[0.34em] text-[#9d927f] sm:block">
                  Land Intelligence Office
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
              <p className="mt-2 text-[10px] uppercase tracking-[0.32em] text-[#bda56a]">Land Intelligence Office</p>
              <p className="mt-3 max-w-xl leading-7">
                Private land intelligence and strategic acquisition advisory for
                select NCR buyers evaluating complex land-led opportunities.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#f4ead8]">Contact</p>
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
                <Link className="block transition hover:text-[#d4c083]" href="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </footer>

        <a
          href="https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20speak%20to%20an%20advisor."
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-5 right-5 z-50 rounded-full border border-[#bda56a]/50 bg-[#0b0b0a]/92 px-5 py-3 text-sm font-semibold text-[#f4ead8] shadow-xl shadow-black/25 transition duration-500 hover:border-[#bda56a] hover:bg-[#bda56a] hover:text-[#050505] sm:bottom-6 sm:right-6 sm:px-6 sm:py-4"
        >
          Private Consultation
        </a>
      </body>
    </html>
  );
}
