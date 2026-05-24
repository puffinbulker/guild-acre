import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy | Guild Acre",
  description:
    "Read how Guild Acre collects, uses, and protects confidential acquisition brief information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs uppercase text-[#86b8c8]">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-8 space-y-7 text-sm leading-7 text-[#b9cbd2] sm:text-base sm:leading-8">
            <p>
              Guild Acre collects enquiry details such as name, phone number,
              capital range, preferred geography, and acquisition brief when you
              submit a form, call, or contact us on WhatsApp.
            </p>
            <p>
              We use this information to respond to your enquiry, understand
              your acquisition requirement, arrange advisory conversations, and
              maintain a record of communication. We do not sell personal data.
            </p>
            <p>
              Your details may be shared only when needed to respond to your
              request, support a relevant acquisition discussion, meet legal
              obligations, or operate essential website and communication tools.
            </p>
            <p>
              You can request correction or deletion of your enquiry details by
              contacting hello@guildacre.com. Some records may be retained where
              required for legitimate business, legal, or security reasons.
            </p>
            <p>
              This website may use analytics and basic technical logs to
              understand website performance and improve the user experience.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
