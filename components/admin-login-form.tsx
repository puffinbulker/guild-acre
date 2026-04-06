"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password")
      })
    });

    setLoading(false);

    if (!response.ok) {
      setError("Invalid admin credentials.");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <h1>Admin login</h1>
      <input type="email" name="email" placeholder="Admin email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit" className="button" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      {error ? <p className="form-status" style={{ color: "#b42318" }}>{error}</p> : null}
    </form>
  );
}
