import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Guild Acre | Premium Property Listings in Gurgaon",
    template: "%s | Guild Acre"
  },
  description:
    "Discover premium property listings in Gurgaon with smart filters, lead capture, admin management, and WhatsApp-first assistance.",
  keywords: [
    "Gurgaon properties",
    "real estate Gurgaon",
    "property listings Gurgaon",
    "premium apartments Gurgaon",
    "MagicBricks style real estate",
    "99acres inspired UI"
  ],
  openGraph: {
    title: "Guild Acre",
    description: "Premium real estate website for Gurgaon property listings",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
