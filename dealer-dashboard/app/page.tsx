"use client";

import React, { useState } from "react";

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [plan, setPlan] = useState("Weekly Verified");

  if (!loggedIn) {
    return (
      <main style={styles.loginPage}>
        <div style={styles.loginCard}>
          <h1 style={styles.logo}>GuildAcre</h1>
          <h2>Dealer Login Portal</h2>
          <p style={styles.muted}>
            Upload premium Gurgaon properties, choose paid plans, and manage buyer leads.
          </p>

          <input style={styles.input} placeholder="Dealer Email / Mobile" />
          <input style={styles.input} placeholder="Password / OTP" type="password" />

          <button style={styles.primaryBtn} onClick={() => setLoggedIn(true)}>
            Login to Dashboard
          </button>
        </div>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <h1 style={{ margin: 0 }}>GuildAcre Dealer Dashboard</h1>
          <p style={{ margin: 0, color: "#d6c79c" }}>Private Property Upload Desk</p>
        </div>
        <button style={styles.goldBtn} onClick={() => setLoggedIn(false)}>
          Logout
        </button>
      </header>

      <section style={styles.statsGrid}>
        <div style={styles.statCard}><h3>23</h3><p>Total Listings</p></div>
        <div style={styles.statCard}><h3>84</h3><p>Buyer Leads</p></div>
        <div style={styles.statCard}><h3>6</h3><p>Featured Live</p></div>
        <div style={styles.statCard}><h3>₹18,940</h3><p>This Month</p></div>
      </section>

      <section style={styles.section}>
        <h2>Paid Listing Plans</h2>
        <div style={styles.planGrid}>
          {[
            ["Daily Listing", "₹99", "1 property / 1 day"],
            ["Weekly Verified", "₹399", "1 property / 7 days"],
            ["Monthly Dealer", "₹2,999", "Unlimited uploads"],
            ["Featured Boost", "₹999", "Homepage visibility"],
          ].map(([name, price, detail]) => (
            <div
              key={name}
              onClick={() => setPlan(name)}
              style={{
                ...styles.planCard,
                border: plan === name ? "2px solid #c9a646" : "1px solid #eee",
              }}
            >
              <h3>{name}</h3>
              <h1>{price}</h1>
              <p>{detail}</p>
              <button style={styles.smallBtn}>Select Plan</button>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.twoCol}>
        <div style={styles.card}>
          <h2>Upload Property</h2>
          <input style={styles.input} placeholder="Property Title" />
          <input style={styles.input} placeholder="Location / Sector" />
          <select style={styles.input}>
            <option>Apartment</option>
            <option>Builder Floor</option>
            <option>Plot</option>
            <option>Farm Land</option>
            <option>Commercial</option>
          </select>
          <input style={styles.input} placeholder="Price" />
          <input style={styles.input} placeholder="Area / Size" />
          <textarea style={styles.textarea} placeholder="Description / USP / brokerage note" />

          <div style={styles.uploadBox}>
            <h3>Upload Photos</h3>
            <p>Connect this later with Firebase / Cloudinary photo upload.</p>
            <button style={styles.smallBtn}>Choose Photos</button>
          </div>

          <button style={styles.primaryBtn}>Submit for Admin Review</button>
        </div>

        <div style={styles.card}>
          <h2>Selected Payment Plan</h2>
          <div style={styles.darkBox}>
            <p>Selected Plan</p>
            <h1>{plan}</h1>
            <p>Payment gateway: Razorpay can be connected here.</p>
          </div>

          <a
            href={`https://wa.me/919711667782?text=Hi GuildAcre, I want to activate ${plan} for dealer listing.`}
            target="_blank"
            style={styles.whatsapp}
          >
            Activate on WhatsApp
          </a>

          <h2 style={{ marginTop: 30 }}>Lead CRM</h2>
          {[
            ["NRI Buyer", "4BHK Luxury Apartment", "Hot"],
            ["Investor", "Land / Plot Deal", "Warm"],
            ["Family Buyer", "Builder Floor", "New"],
          ].map(([name, req, status]) => (
            <div key={name} style={styles.lead}>
              <b>{name}</b>
              <p>{req}</p>
              <span>{status}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2>My Listings</h2>
        {[
          ["DLF Phase 5 Luxury Apartment", "Golf Course Road", "Live"],
          ["Sohna Premium Farm Plot", "Sohna Road Belt", "Under Review"],
          ["Dwarka Expressway Investor Plot", "Dwarka Expressway", "Payment Pending"],
        ].map(([title, loc, status]) => (
          <div key={title} style={styles.listing}>
            <div>
              <b>{title}</b>
              <p>{loc}</p>
            </div>
            <span>{status}</span>
          </div>
        ))}
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  loginPage: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#090909,#2b2414)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial",
  },
  loginCard: {
    width: 420,
    background: "#fff",
    padding: 35,
    borderRadius: 24,
    boxShadow: "0 20px 60px rgba(0,0,0,.4)",
  },
  logo: { color: "#b89535", fontSize: 42, margin: 0 },
  muted: { color: "#666", lineHeight: 1.5 },
  page: { background: "#f4f1e8", minHeight: "100vh", fontFamily: "Arial", paddingBottom: 40 },
  header: {
    background: "#111",
    color: "#fff",
    padding: 25,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 20,
    padding: 25,
  },
  statCard: {
    background: "#fff",
    borderRadius: 20,
    padding: 25,
    boxShadow: "0 8px 20px rgba(0,0,0,.08)",
  },
  section: { padding: 25 },
  planGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 20,
  },
  planCard: {
    background: "#fff",
    borderRadius: 20,
    padding: 22,
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(0,0,0,.08)",
  },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 25,
    padding: 25,
  },
  card: {
    background: "#fff",
    borderRadius: 24,
    padding: 25,
    boxShadow: "0 8px 20px rgba(0,0,0,.08)",
  },
  input: {
    width: "100%",
    padding: 14,
    margin: "8px 0",
    borderRadius: 12,
    border: "1px solid #ddd",
    fontSize: 15,
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: 14,
    margin: "8px 0",
    borderRadius: 12,
    border: "1px solid #ddd",
    fontSize: 15,
    minHeight: 100,
    boxSizing: "border-box",
  },
  uploadBox: {
    border: "2px dashed #c9a646",
    borderRadius: 18,
    padding: 20,
    textAlign: "center",
    margin: "15px 0",
    background: "#fffaf0",
  },
  primaryBtn: {
    width: "100%",
    padding: 15,
    border: "none",
    borderRadius: 14,
    background: "#111",
    color: "#fff",
    fontSize: 16,
    cursor: "pointer",
  },
  goldBtn: {
    padding: "12px 22px",
    border: "none",
    borderRadius: 12,
    background: "#c9a646",
    color: "#111",
    fontWeight: "bold",
    cursor: "pointer",
  },
  smallBtn: {
    padding: "10px 16px",
    border: "none",
    borderRadius: 10,
    background: "#111",
    color: "#fff",
    cursor: "pointer",
  },
  darkBox: {
    background: "#111",
    color: "#fff",
    padding: 25,
    borderRadius: 20,
  },
  whatsapp: {
    display: "block",
    marginTop: 15,
    background: "#25D366",
    color: "#fff",
    textAlign: "center",
    padding: 15,
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: "bold",
  },
  lead: {
    border: "1px solid #eee",
    borderRadius: 14,
    padding: 15,
    marginBottom: 10,
  },
  listing: {
    background: "#fff",
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0 5px 15px rgba(0,0,0,.06)",
  },
};