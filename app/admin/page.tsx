import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminDashboardV2 } from "@/components/admin-dashboard-v2";
import { getAdminCookieName, verifySessionToken } from "@/lib/auth";
import { getAllDealers, getAllLeads, getAllProperties } from "@/lib/data-store";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getAdminCookieName())?.value;

  if (!verifySessionToken(token)) {
    redirect("/admin/login");
  }

  const [properties, leads, dealers] = await Promise.all([
    getAllProperties(),
    getAllLeads(),
    getAllDealers()
  ]);

  return (
    <main className="container page-shell">
      <AdminDashboardV2 properties={properties} leads={leads} dealers={dealers} />
    </main>
  );
}
