import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy | Guild Acre",
  description:
    "Read how Guild Acre collects, uses, and protects confidential acquisition brief information.",
  path: "/privacy-policy",
});

const sections = [
  {
    title: "Information We Collect",
    text: "Guild Acre may collect your name, phone number, email address, preferred geography, capital range, holding horizon, acquisition intent, message content, and any confidential buyer brief you choose to share through forms, WhatsApp, calls, email, or direct communication.",
  },
  {
    title: "How We Use Information",
    text: "We use this information to respond to enquiries, understand mandate fit, arrange advisory conversations, prepare private next steps, maintain communication records, improve the website, and protect the security of our desk operations.",
  },
  {
    title: "Confidential Briefs",
    text: "Buyer briefs, capital ranges, corridor interests, mandate details, private notes, and report-access discussions are treated as confidential. They are not published, sold, or circulated through public seller networks.",
  },
  {
    title: "Limited Sharing",
    text: "Information may be shared only with the Guild Acre team, essential service providers, communication tools, professional advisers, or legal authorities where required. Where a deeper acquisition conversation requires third-party involvement, it should be handled with buyer consent and relevance.",
  },
  {
    title: "No Sale Of Personal Data",
    text: "Guild Acre does not sell personal data. We do not use enquiry details as public lead inventory or disclose buyer mandates as marketing material.",
  },
  {
    title: "Retention And Deletion",
    text: "We retain enquiry and mandate information only for legitimate business, communication, legal, security, and record-keeping purposes. You may request correction or deletion, subject to records we must reasonably retain.",
  },
  {
    title: "Website Analytics",
    text: "The website may use analytics, technical logs, cookies, and similar tools to understand aggregate page usage, security, traffic sources, and website performance. Analytics should not be used to sell personal data.",
  },
  {
    title: "Contact",
    text: "For privacy questions, correction, deletion, or access requests, contact hello@guildacre.com. Please include enough detail for us to identify the relevant enquiry or communication.",
  },
];

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
          <p className="mt-5 text-sm leading-7 text-[#93aab6]">
            Last updated: June 28, 2026
          </p>
          <div className="mt-8 space-y-7 text-sm leading-7 text-[#b9cbd2] sm:text-base sm:leading-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-[#f2efe7]">
                  {section.title}
                </h2>
                <p className="mt-3">{section.text}</p>
              </section>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
