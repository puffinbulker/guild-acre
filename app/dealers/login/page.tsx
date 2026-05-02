"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DealerLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Demo credentials
    if (email === "dealer@guildacre.com" && password === "123456") {
      router.push("/dealers/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-cyan-300/15 bg-slate-950/60 p-8 backdrop-blur-sm">
        
        <h1 className="text-3xl font-semibold text-center">
          Dealer Login
        </h1>

        <p className="text-sm text-slate-400 text-center mt-2">
          Access your GuildAcre dealer dashboard
        </p>

        <div className="mt-6 space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none"
          />

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            onClick={handleLogin}
            className="w-full rounded-2xl bg-cyan-500 px-6 py-4 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Login
          </button>
        </div>

        <p className="text-xs text-slate-500 mt-6 text-center">
          Demo Login: dealer@guildacre.com / 123456
        </p>

      </div>
    </main>
  );
}