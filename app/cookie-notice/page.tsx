import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Cookie Notice | Guild Acre",
  description:
    "Learn how Guild Acre may use essential cookies, analytics cookies, and similar technologies on its website.",
  path: "/cookie-notice",
});

export default function CookieNoticePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Cookie Notice", path: "/cookie-notice" },
        ])}
      />
      <main className="min-h-screen bg-[#050505] text-[#f4ead8]">
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs uppercase text-[#b9a46d]">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Cookie Notice
          </h1>
          <div className="mt-8 space-y-7 text-sm leading-7 text-[#cfc5b3] sm:text-base sm:leading-8">
            <p>
              Guild Acre may use essential cookies and similar technologies to
              keep the website reliable, secure, and usable.
            </p>
            <p>
              If analytics is enabled, analytics cookies may help us understand
              aggregate page usage, traffic sources, and website performance.
              Analytics identifiers should not be used to sell personal data.
            </p>
            <p>
              You can control cookies through your browser settings. Blocking
              some cookies may affect website functionality, forms, or analytics
              measurement.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
