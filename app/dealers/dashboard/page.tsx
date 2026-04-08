import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { DealerDashboard } from "@/components/dealer-dashboard";
import { getDealerCookieName, verifyDealerSessionToken } from "@/lib/auth";
import { getDealerByIdFromStore, getPropertiesByVendorFromStore } from "@/lib/data-store";

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

  const properties = await getPropertiesByVendorFromStore(dealer.id);

  return (
    <main className="container page-shell">
      <DealerDashboard dealer={dealer} properties={properties} />
    </main>
  );
}
