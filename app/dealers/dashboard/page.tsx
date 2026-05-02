"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkAuth } from "@/lib/authGuard";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function DealerDashboardPage() {
  const router = useRouter();

  useEffect(() => {
    checkAuth(router);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/dealers/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-3xl font-bold">Dealer Dashboard</h1>

      <p className="mt-4 text-white/70">
        Welcome to your private CRM system 🚀
      </p>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 px-5 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}