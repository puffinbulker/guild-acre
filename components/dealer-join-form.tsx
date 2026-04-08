"use client";

import { FormEvent, useState } from "react";
import { DEALER_ROLES } from "@/lib/constants";

export function DealerJoinForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(event.currentTarget);
    const serviceAreas = String(formData.get("serviceAreas") || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    const response = await fetch("/api/dealers/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        companyName: formData.get("companyName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        password: formData.get("password"),
        role: formData.get("role"),
        serviceAreas
      })
    });

    setLoading(false);

    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      setStatus(payload.error || "Unable to create dealer account.");
      return;
    }

    event.currentTarget.reset();
    setStatus("Dealer account created. You can now sign in and submit inventory.");
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <h1>Join as a Gurgaon partner</h1>
      <p className="lead-form__intro">
        Create a dealer, builder, owner, or landlord account to submit inventory into the Guild
        Acre marketplace.
      </p>
      <input type="text" name="name" placeholder="Primary contact name" required />
      <input type="text" name="companyName" placeholder="Company or firm name" />
      <input type="email" name="email" placeholder="Business email" required />
      <input type="tel" name="phone" placeholder="Phone number" required />
      <select name="role" defaultValue={DEALER_ROLES[0]}>
        {DEALER_ROLES.map((role) => (
          <option key={role} value={role}>
            {role.replaceAll("_", " ")}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="serviceAreas"
        placeholder="Service areas, separated by commas"
      />
      <input type="password" name="password" placeholder="Create password" required />
      <button type="submit" className="button" disabled={loading}>
        {loading ? "Creating..." : "Create partner account"}
      </button>
      {status ? <p className="form-status">{status}</p> : null}
    </form>
  );
}
