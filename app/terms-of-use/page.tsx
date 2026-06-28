import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms & Copyright Notice | Guild Acre",
  description:
    "Rules for using Guild Acre website content, private frameworks, research notes, brand materials, and confidential advisory material.",
  path: "/terms-of-use",
});

const terms = [
  {
    title: "Ownership Of Website Content",
    text: "All Guild Acre website copy, layouts, images, brand assets, report structures, research language, private notes, page concepts, and advisory positioning are owned by Guild Acre unless expressly stated otherwise.",
  },
  {
    title: "No Copying Or Commercial Reuse",
    text: "You may not copy, scrape, republish, reproduce, translate, reverse engineer, sell, train systems on, or create derivative commercial material from Guild Acre content without written permission.",
  },
  {
    title: "Protected Private Method",
    text: "The website gives public orientation only. Guild Acre does not publish its full diligence method, scorecards, sourcing logic, negotiation direction, report findings, or private acquisition playbook.",
  },
  {
    title: "Confidential Mandate Material",
    text: "Private briefs, report access, buyer notes, shortlist reasoning, commercial discussions, and acquisition direction are confidential and may not be shared externally without written consent.",
  },
  {
    title: "No Investment Or Legal Advice On Website",
    text: "Public website content is general information only. It is not legal, financial, tax, investment, or acquisition advice. Buyers should use independent professional review before committing capital.",
  },
  {
    title: "Brand And Logo Use",
    text: "The Guild Acre name, logo, visual identity, and related brand assets may not be used in a way that suggests partnership, endorsement, ownership, or authorization without written permission.",
  },
  {
    title: "Updates",
    text: "Guild Acre may update, restrict, remove, or modify website content, private access terms, and report access rules at any time.",
  },
  {
    title: "Contact",
    text: "For permission requests, copyright concerns, or legal notices, contact hello@guildacre.com.",
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms & Copyright Notice", path: "/terms-of-use" },
        ])}
      />
      <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs uppercase text-[#86b8c8]">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Terms & Copyright Notice
          </h1>
          <p className="mt-5 text-sm leading-7 text-[#93aab6]">
            Last updated: June 28, 2026
          </p>
          <div className="mt-8 space-y-7 text-sm leading-7 text-[#b9cbd2] sm:text-base sm:leading-8">
            {terms.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-[#f2efe7]">
                  {section.title}
                </h2>
                <p className="mt-3">{section.text}</p>
              </section>
            ))}
            <p className="border-t border-[#16344a] pt-7 text-[#93aab6]">
              Copyright 2026 Guild Acre. All rights reserved.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
