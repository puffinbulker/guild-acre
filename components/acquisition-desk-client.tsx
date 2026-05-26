"use client";

import type { ReactNode } from "react";
import { useState } from "react";

const advisors = [
  {
    label: "Advisor 01",
    name: "Harvinder Yadav",
    focus: "Gurgaon & NCR corridor land",
    text: "Focused on buyer-side mandate structuring, local diligence coordination, and land-led acquisition context across Gurgaon core and emerging NCR corridors.",
  },
  {
    label: "Advisor 02",
    name: "Sandeep Kumar",
    focus: "Emerging Haryana growth corridors",
    text: "Focused on Pataudi, Farrukhnagar, Rewari, Narnaul, and Mahendergarh corridor mapping, title and CLU review, and long-horizon acquisition logic.",
  },
];

const acceptance = [
  {
    title: "Who We Accept Mandates From",
    text: "HNIs, NRIs, family offices, founders, and long-horizon buyers with a defined acquisition brief and realistic diligence expectations.",
  },
  {
    title: "What We Evaluate Before Accepting",
    text: "Capital range, geography, holding horizon, risk tolerance, access expectations, confidentiality needs, and whether the mandate fits current desk coverage.",
  },
  {
    title: "What Happens After Submission",
    text: "The desk reviews mandate fit, identifies the required diligence path, and decides whether a deeper advisory engagement is sensible.",
  },
];

const deskWork = [
  ["Advisory Mandate", "A private research brief aligned with capital allocation, corridor preference, and strategic intent."],
  ["Deal Access", "Selective access to privately reviewed land opportunities only where the risk profile fits the buyer."],
  ["Acquisition Support", "Coordination across diligence, legal review, negotiation logic, documentation, and post-acquisition checks."],
];

export default function AcquisitionDeskClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [capitalRange, setCapitalRange] = useState("");
  const [corridor, setCorridor] = useState("");
  const [intent, setIntent] = useState("");
  const [horizon, setHorizon] = useState("");
  const [mandate, setMandate] = useState("");

  const handleWhatsAppSubmit = () => {
    const message = `Hi Guild Acre,

Name: ${name || "-"}
Phone: ${phone || "-"}
Email: ${email || "-"}
Capital Range: ${capitalRange || "-"}
Preferred Corridor / Geography: ${corridor || "-"}
Strategic Intent: ${intent || "-"}
Holding Horizon: ${horizon || "-"}
Acquisition Brief: ${mandate || "-"}

I want to request a private land intelligence consultation.`;

    window.open(
      `https://wa.me/919711667782?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
      <section className="border-b border-[#16344a] bg-[#02070d]">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-32">
          <div>
            <p className="text-xs uppercase text-[#86b8c8]">
              Confidential advisory
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] text-[#f2efe7] sm:text-6xl lg:text-7xl">
              Private Acquisition Desk
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-[#b9cbd2]">
              Guild Acre operates as a Private Land Investment Intelligence
              Desk for Gurgaon NCR & Emerging Haryana Growth Corridors. We work
              with a select group of HNIs, family offices, and serious
              investors who require verified opportunity review before movement.
            </p>

            <div className="mt-12 divide-y divide-[#16344a] border-y border-[#16344a]">
              {deskWork.map(([title, text]) => (
                <div key={title} className="grid gap-4 py-7 sm:grid-cols-[0.35fr_0.65fr]">
                  <h2 className="text-2xl font-semibold text-[#f2efe7]">{title}</h2>
                  <p className="text-sm leading-7 text-[#93aab6] sm:text-base sm:leading-8">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[#16344a] bg-[#081725] p-5 sm:p-7 lg:p-8">
            <div className="mb-7 border-b border-[#16344a] pb-6">
              <p className="text-xs uppercase text-[#86b8c8]">
                Submit investor brief
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#f2efe7] sm:text-4xl">
                Request Private Consultation
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#93aab6]">
                Reviewed privately. Limited active mandates are accepted each
                quarter.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name">
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  className="institutional-input"
                />
              </Field>

              <Field label="Contact Number">
                <input
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="+91"
                  className="institutional-input"
                />
              </Field>

              <Field label="Email Address">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@example.com"
                  className="institutional-input"
                />
              </Field>

              <Field label="Allocation Budget">
                <input
                  type="text"
                  value={capitalRange}
                  onChange={(event) => setCapitalRange(event.target.value)}
                  placeholder="Example: Rs. 5 Cr - Rs. 20 Cr"
                  className="institutional-input"
                />
              </Field>

              <Field label="Preferred Zone">
                <input
                  type="text"
                  value={corridor}
                  onChange={(event) => setCorridor(event.target.value)}
                  placeholder="Gurgaon NCR, Pataudi, Farrukhnagar, Rewari"
                  className="institutional-input"
                />
              </Field>

              <Field label="Strategic Intent">
                <input
                  type="text"
                  value={intent}
                  onChange={(event) => setIntent(event.target.value)}
                  placeholder="Appreciation, lifestyle, plotted, land bank"
                  className="institutional-input"
                />
              </Field>

              <Field label="Intended Holding Horizon">
                <input
                  type="text"
                  value={horizon}
                  onChange={(event) => setHorizon(event.target.value)}
                  placeholder="2-3 yrs, 5-7 yrs, 7+ yrs"
                  className="institutional-input"
                />
              </Field>
            </div>

            <label className="mt-4 block border border-[#16344a] bg-[#02070d] p-4 transition duration-500 focus-within:border-[#7aaec1]/70">
              <span className="text-xs uppercase text-[#738a99]">
                Acquisition Brief
              </span>
              <textarea
                value={mandate}
                onChange={(event) => setMandate(event.target.value)}
                placeholder="Purpose, corridor, hold period, legal concerns, timing, family office context, or private constraints."
                rows={5}
                className="institutional-input min-h-36 resize-none"
              />
            </label>

            <button
              onClick={handleWhatsAppSubmit}
              className="mt-5 w-full rounded-[2px] border border-[#7aaec1]/55 bg-[#f2efe7]/[0.025] px-6 py-4 text-sm font-medium text-[#f2efe7] transition duration-500 hover:border-[#a9d4df] hover:bg-[#7aaec1]/10 sm:mt-6"
            >
              Submit Investor Brief
            </button>

            <p className="mt-5 text-xs leading-6 text-[#6f8391]">
              Your brief is seen only by the Guild Acre advisory team. It is
              not shared with developers, seller networks, or third-party
              platforms. Read our{" "}
              <a href="/privacy-policy" className="text-[#a9d4df] underline underline-offset-4">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <div>
          <p className="text-xs uppercase text-[#86b8c8]">The advisory</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
            Advisor-led, corridor-aware, and selective by design.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#93aab6]">
            Serious buyers can speak directly with the desk before submitting a
            formal brief. WhatsApp is the fastest route to an initial
            conversation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {advisors.map((advisor) => (
            <article key={advisor.name} className="border border-[#16344a] bg-[#081725] p-7 transition duration-500 hover:border-[#7fb7ca]/45 hover:bg-[#10283b] sm:p-8">
              <p className="text-xs uppercase text-[#86b8c8]">{advisor.label}</p>
              <h3 className="mt-6 text-3xl font-semibold leading-tight text-[#f2efe7]">
                {advisor.name}
              </h3>
              <p className="mt-3 text-sm uppercase text-[#738a99]">
                {advisor.focus}
              </p>
              <p className="mt-5 text-sm leading-7 text-[#899eaa]">
                {advisor.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#16344a] bg-[#081725]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase text-[#86b8c8]">How the desk works</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
              Buyer mandate acceptance logic.
            </h2>
          </div>

          <div className="mt-14 grid gap-px border border-[#16344a] bg-[#16344a] lg:grid-cols-3">
            {acceptance.map((item) => (
              <article key={item.title} className="min-h-[260px] bg-[#0d2030] p-7 sm:p-8">
                <h3 className="text-3xl font-semibold leading-tight text-[#f2efe7]">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#899eaa]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-xs uppercase text-[#86b8c8]">Confidentiality</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
            The brief is private because the decision is consequential.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-9 text-[#b9cbd2]">
          <p>
            Guild Acre does not broadcast buyer requirements, circulate briefs
            through seller networks, or use investor information as lead
            inventory.
          </p>
          <p className="text-[#93aab6]">
            All details are used only to assess fit, define the diligence path,
            and decide whether a private advisory mandate should move forward.
          </p>
          <div className="grid gap-px border border-[#16344a] bg-[#16344a] sm:grid-cols-2">
            {[
              ["WhatsApp", "+91 97116 67782"],
              ["Email", "hello@guildacre.com"],
              ["Location", "Gurgaon, Haryana"],
              ["Office", "By appointment"],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#0d2030] p-5">
                <p className="text-xs uppercase text-[#738a99]">{label}</p>
                <p className="mt-2 text-sm text-[#f2efe7]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block border border-[#16344a] bg-[#02070d] p-4 transition duration-500 focus-within:border-[#7aaec1]/70">
      <span className="text-xs uppercase text-[#738a99]">{label}</span>
      {children}
    </label>
  );
}
