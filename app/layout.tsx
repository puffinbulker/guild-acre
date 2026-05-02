import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guild Acre | Premium Real Estate Advisory in Gurgaon",
  description:
    "Private real estate advisory for serious buyers and investors in Gurgaon, Sohna, and Naugaon across land, farmhouse, and plotted opportunities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <Link href="/" className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-2xl font-bold text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                GA
              </div>

              <div>
                <div className="text-2xl font-semibold tracking-[0.22em] text-white">
                  GUILD ACRE
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.34em] text-slate-400">
                  Premium Land Investment Advisory
                </div>
              </div>
            </Link>

            <Navbar />
          </div>
        </header>

        {children}

        <a
          href="https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20speak%20to%20an%20advisor."
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 rounded-full border border-cyan-300/20 bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.25)] transition hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
        >
          Talk to Advisor
        </a>
      </body>
    </html>
  );
}
