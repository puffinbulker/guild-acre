import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { DealerDashboardV2 } from "@/components/dealer-dashboard-v2";
import { getDealerCookieName, verifyDealerSessionToken } from "@/lib/auth";
import { getAllLeads, getDealerByIdFromStore, getPropertiesByVendorFromStore } from "@/lib/data-store";

export const dynamic = "force-dynamic";

export default async function DealerDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getDealerCookieName())?.value;
  const session = verifyDealerSessionToken(token);

  if (!session) {
    redirect("/dealers/login");
  }

  const dealer = await getDealerByIdFromStore(session.dealerId);

  if (!dealer) {
    redirect("/dealers/login");
  }

  const [properties, leads] = await Promise.all([
    getPropertiesByVendorFromStore(dealer.id),
    getAllLeads()
  ]);

  return (
    <main className="container page-shell">
      <DealerDashboardV2 dealer={dealer} properties={properties} leads={leads} />
    </main>
  );
}
