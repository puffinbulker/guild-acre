"use client";

import { FormEvent, useState } from "react";

type Props = {
  propertyId?: string;
  compact?: boolean;
};

export function LeadForm({ propertyId, compact = false }: Props) {
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      requirement: formData.get("requirement"),
      propertyId
    };

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setLoading(false);

    if (!response.ok) {
      setStatus("Please check the form and try again.");
      return;
    }

    event.currentTarget.reset();
    setStatus("Lead captured. Our team will contact you shortly.");
  }

  return (
    <form className={compact ? "lead-form lead-form--compact" : "lead-form"} onSubmit={onSubmit}>
      <h3>{compact ? "Request a callback" : "Talk to a Gurgaon property specialist"}</h3>
      <p className="lead-form__intro">
        Share your budget, preferred locality, or investment goal and get a curated response from
        the advisory desk.
      </p>
      <input type="text" name="name" placeholder="Full name" required />
      <input type="tel" name="phone" placeholder="Phone number" required />
      <textarea name="requirement" placeholder="Budget, location, size, or investment goal" required />
      <button type="submit" className="button" disabled={loading}>
        {loading ? "Sending..." : "Submit lead"}
      </button>
      <small className="lead-form__note">Private enquiry. No spam. Just shortlisted options.</small>
      {status ? <p className="form-status">{status}</p> : null}
    </form>
  );
}
