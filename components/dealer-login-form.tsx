"use client";

import { FormEvent, useState } from "react";

export function DealerLoginForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/dealers/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password")
      })
    });

    setLoading(false);

    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      setError(payload.error || "Unable to sign in.");
      return;
    }

    window.location.assign("/dealers/dashboard");
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <h1>Dealer login</h1>
      <p className="lead-form__intro">
        Sign in to manage your Gurgaon listings, review lead-ready inventory, and monitor approval
        status.
      </p>
      <input type="email" name="email" placeholder="Dealer email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit" className="button" disabled={loading}>
        {loading ? "Logging in..." : "Access dashboard"}
      </button>
      {error ? <p className="form-status form-status--error">{error}</p> : null}
    </form>
  );
}
