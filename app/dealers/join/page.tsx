import { DealerJoinForm } from "@/components/dealer-join-form";

export default function DealerJoinPage() {
  return (
    <main className="container page-shell">
      <section className="page-intro">
        <span className="section-tag">Multi-vendor Gurgaon Platform</span>
        <h1>List inventory as a dealer, builder, owner, or landlord</h1>
        <p>
          Create a Gurgaon partner account to submit apartments, plots, floors, villas, commercial
          assets, farm land, or agriculture land into the Guild Acre marketplace.
        </p>
      </section>
      <DealerJoinForm />
    </main>
  );
}
