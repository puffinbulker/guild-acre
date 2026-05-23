import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navbar from "../components/navbar";
import "./globals.css";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: "Guild Acre | Private Land Advisory in Gurgaon",
    template: "%s",
  },
  description:
    "Private land and premium real estate intelligence advisory for serious buyers and investors in Gurgaon, Sohna, and Naugaon.",
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
      <body className="bg-[#020617] text-white antialiased">
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
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#D4AF37] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#020617]"
        >
          Skip to main content
        </a>
        <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#020617]/86 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-5 sm:px-6 lg:px-8 lg:py-6">
            <Link href="/" className="group flex min-w-0 items-center gap-4 py-1">
              <div className="min-w-0">
                <div className="font-[var(--font-editorial)] text-2xl font-semibold uppercase leading-none tracking-[0.2em] text-[#F8FAFC] transition group-hover:text-[#F6E7B7] sm:text-3xl sm:tracking-[0.24em]">
                  GUILD ACRE
                </div>
                <div className="mt-2 hidden text-[10px] uppercase tracking-[0.34em] text-[#8FA3B8] sm:block">
                  Private Land Advisory
                </div>
              </div>
            </Link>

            <Navbar />
          </div>
        </header>

        <div id="main-content">{children}</div>

        <footer className="border-t border-white/[0.07] bg-[#020617] px-6 py-12 text-sm text-[#8FA3B8] lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <p className="font-[var(--font-editorial)] text-2xl font-semibold uppercase tracking-[0.22em] text-white">GUILD ACRE</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.32em] text-[#C6A76A]">Private Land Advisory</p>
              <p className="mt-3 max-w-xl leading-7">
                Gurgaon-focused property intelligence for serious buyers and investors evaluating
                land, farmhouse, plotted, and premium real estate requirements.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Contact</p>
              <div className="mt-3 space-y-2">
                <a className="block transition hover:text-[#F6E7B7]" href="tel:+919711667782">
                  +91 97116 67782
                </a>
                <a className="block transition hover:text-[#F6E7B7]" href="mailto:hello@guildacre.com">
                  hello@guildacre.com
                </a>
                <p>Gurgaon, Haryana</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-white">Website</p>
              <div className="mt-3 space-y-2">
                <Link className="block transition hover:text-[#F6E7B7]" href="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="block transition hover:text-[#F6E7B7]" href="/cookie-notice">
                  Cookie Notice
                </Link>
                <Link className="block transition hover:text-[#F6E7B7]" href="/contact">
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
          className="fixed bottom-5 right-5 z-50 rounded-full border border-[#C6A76A]/50 bg-[#06111F]/92 px-5 py-3 text-sm font-semibold text-[#F6E7B7] shadow-xl shadow-black/25 transition duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#020617] sm:bottom-6 sm:right-6 sm:px-6 sm:py-4"
        >
          Talk to Advisor
        </a>
      </body>
    </html>
  );
}
