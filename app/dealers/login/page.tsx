import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { DealerLoginForm } from "@/components/dealer-login-form";
import { getDealerCookieName, verifyDealerSessionToken } from "@/lib/auth";

export default async function DealerLoginPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getDealerCookieName())?.value;

  if (verifyDealerSessionToken(token)) {
    redirect("/dealers/dashboard");
  }

  return (
    <main className="container page-shell">
      <section className="page-intro">
        <span className="section-tag">Partner Access</span>
        <h1>Dealer login</h1>
        <p>Access your Gurgaon multi-vendor dashboard to manage inventory and approvals.</p>
      </section>
      <DealerLoginForm />
    </main>
  );
}
