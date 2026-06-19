import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ExternalLink } from "lucide-react";
import Navbar from "../components/navbar";
import "./globals.css";
import { absoluteUrl } from "@/lib/seo";
import { SOCIAL_LINKS } from "@/lib/social-links";

const connectedProfileLinks = SOCIAL_LINKS.filter(
  (link) =>
    link.label === "LinkedIn" ||
    link.label === "Instagram" ||
    link.label === "Facebook Page"
);

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: "Guild Acre | Private Land Intelligence & Acquisition Desk",
    template: "%s",
  },
  description:
    "Private Land Intelligence & Acquisition Desk for Gurgaon NCR, Pataudi, Farrukhnagar, Rewari, Narnaul, Mahendergarh, and emerging Haryana growth corridors.",
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
        {connectedProfileLinks.map((link) => (
          <link key={link.href} rel="me" href={link.href} />
        ))}
      </head>
      <body className="bg-[#02070d] text-[#f2efe7] antialiased">
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
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#7aaec1] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#02070d]"
        >
          Skip to main content
        </a>
        <header className="sticky top-0 z-50 border-b border-[#16344a]/70 bg-[#02070d]/88 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-8 px-5 py-4 sm:px-7 lg:px-10 lg:py-[1.1rem]">
            <Link href="/" className="group flex min-w-0 flex-col items-start py-1" aria-label="Guild Acre home">
              <img
                src="/guild-acre-logo.png"
                alt="Guild Acre"
                width={959}
                height={260}
                className="h-10 w-auto max-w-[180px] object-contain transition duration-700 group-hover:opacity-90 sm:h-12 sm:max-w-[218px] lg:h-14 lg:max-w-[250px]"
              />
              <span className="mt-1 max-w-[210px] text-[9px] font-medium leading-4 tracking-[0.08em] text-[#8fbfcd] transition duration-700 group-hover:text-[#b8dbe3] sm:max-w-[270px]">
                Guild Acre — Private Land Intelligence & Acquisition Desk
              </span>
            </Link>

            <Navbar />
          </div>
        </header>

        <div id="main-content">{children}</div>

        <footer className="border-t border-[#16344a] bg-[#02070d] px-6 py-16 text-sm text-[#738a99] lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.75fr_0.75fr]">
            <div>
              <img
                src="/guild-acre-logo.png"
                alt="Guild Acre"
                width={959}
                height={260}
                className="h-16 w-auto max-w-[250px] object-contain"
              />
              <p className="mt-2 text-[10px] font-medium tracking-[0.14em] text-[#7aaec1]">
                Guild Acre — Private Land Intelligence & Acquisition Desk
              </p>
              <p className="mt-3 max-w-xl leading-7">
                Private land intelligence and strategic acquisition advisory
                across Gurgaon NCR and emerging Haryana growth corridors.
              </p>
              <div className="mt-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#7aaec1]">
                  One-click channels
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.ariaLabel}
                      className="inline-flex items-center gap-2 rounded-[2px] border border-[#7fb7ca]/24 bg-[#f2efe7]/[0.015] px-3 py-2 text-xs font-medium text-[#b9cbd2] transition duration-500 hover:-translate-y-px hover:border-[#7fb7ca]/60 hover:bg-[#7fb7ca]/10 hover:text-[#f2efe7]"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[#f2efe7]">Intelligence</p>
              <div className="mt-3 space-y-2">
                <Link className="block transition hover:text-[#a9d4df]" href="/ncr-land-intelligence">
                  NCR Land Intelligence
                </Link>
                <Link className="block transition hover:text-[#a9d4df]" href="/due-diligence-framework">
                  Due Diligence Framework
                </Link>
                <Link className="block transition hover:text-[#a9d4df]" href="/intelligence-reports">
                  Intelligence Reports
                </Link>
                <Link className="block transition hover:text-[#a9d4df]" href="/corridor-coverage/pataudi">
                  Pataudi
                </Link>
                <Link className="block transition hover:text-[#a9d4df]" href="/corridor-coverage/farrukhnagar">
                  Farrukhnagar
                </Link>
                <Link className="block transition hover:text-[#a9d4df]" href="/corridor-coverage/rewari">
                  Rewari
                </Link>
                <Link className="block transition hover:text-[#a9d4df]" href="/corridor-coverage/narnaul">
                  Narnaul
                </Link>
                <Link className="block transition hover:text-[#a9d4df]" href="/corridor-coverage/mahendergarh">
                  Mahendergarh
                </Link>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[#f2efe7]">Acquisition Desk</p>
              <div className="mt-3 space-y-2">
                <a className="block transition hover:text-[#a9d4df]" href="tel:+919711667782">
                  +91 97116 67782
                </a>
                <a className="block transition hover:text-[#a9d4df]" href="mailto:hello@guildacre.com">
                  hello@guildacre.com
                </a>
                <p>Gurgaon, Haryana</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[#f2efe7]">Office</p>
              <div className="mt-3 space-y-2">
                <Link className="block transition hover:text-[#a9d4df]" href="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="block transition hover:text-[#a9d4df]" href="/cookie-notice">
                  Cookie Notice
                </Link>
                <Link className="block transition hover:text-[#a9d4df]" href="/acquisition-desk">
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
