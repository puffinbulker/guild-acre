import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin-login-form";
import { getAdminCookieName, verifySessionToken } from "@/lib/auth";

export default async function AdminLoginPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getAdminCookieName())?.value;

  if (verifySessionToken(token)) {
    redirect("/admin");
  }

  return (
    <main className="container page-shell" style={{ maxWidth: 520 }}>
      <AdminLoginForm />
    </main>
  );
}
