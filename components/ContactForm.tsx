"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Briefcase,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";

const inputBase: React.CSSProperties = {
  width: "100%",
  borderRadius: 12,
  border: "1.5px solid #e2e8f0",
  background: "#f8fafc",
  padding: "13px 16px 13px 44px",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.93rem",
  color: "#0f172a",
  outline: "none",
  transition: "border-color .25s, box-shadow .25s, background .25s",
  boxSizing: "border-box",
};

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.78rem",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#334155",
        }}
      >
        <Icon size={13} style={{ color: "#c9a84c" }} />
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  /* focus / blur handlers — inline style swap */
  const onFocus  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor  = "#c9a84c";
    e.currentTarget.style.boxShadow    = "0 0 0 3px rgba(201,168,76,0.15)";
    e.currentTarget.style.background   = "#fff";
  };
  const onBlur   = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor  = "#e2e8f0";
    e.currentTarget.style.boxShadow    = "none";
    e.currentTarget.style.background   = "#f8fafc";
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=DM+Sans:wght@400;500&display=swap');

        /* native select arrow recolour */
        .cf-select { appearance: none; -webkit-appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c9a84c' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; }

        /* submit button shimmer */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .cf-submit {
          background: linear-gradient(135deg, #0b1628, #132040);
          position: relative;
          overflow: hidden;
          transition: box-shadow .3s, transform .25s;
        }
        .cf-submit::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(201,168,76,0.18) 50%, transparent 60%);
          background-size: 200% 100%;
          animation: shimmer 2.8s linear infinite;
        }
        .cf-submit:hover {
          box-shadow: 0 12px 36px rgba(11,22,40,0.28);
          transform: translateY(-1px);
        }
        .cf-submit:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }
      `}</style>

      {success ? (
        /* ── SUCCESS STATE ── */
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "40px 24px",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 64, height: 64,
              borderRadius: "50%",
              background: "rgba(201,168,76,0.1)",
              border: "1.5px solid rgba(201,168,76,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#c9a84c",
            }}
          >
            <CheckCircle size={30} />
          </div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "#0b1628",
              margin: 0,
            }}
          >
            Request Sent!
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.92rem",
              color: "#64748b",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 300,
            }}
          >
            Thank you for reaching out. Our team will respond within 24 hours
            with a tailored solution.
          </p>
          <button
            onClick={() => setSuccess(false)}
            style={{
              marginTop: 8,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#94a3b8",
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Send another request
          </button>
        </div>
      ) : (
        /* ── FORM ── */
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            const form = e.currentTarget;
            const data = new FormData(form);
            const res = await fetch("/api/contact", {
              method: "POST",
              body: JSON.stringify({
                name:    data.get("name"),
                email:   data.get("email"),
                service: data.get("service"),
                message: data.get("message"),
              }),
            });
            setLoading(false);
            if (res.ok) { setSuccess(true); form.reset(); }
            else alert("Something went wrong. Please try again.");
          }}
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >

          {/* NAME */}
          <Field label="Full Name" icon={User}>
            <div style={{ position: "relative" }}>
              <User size={15} style={{ position: "absolute", left: 15, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", pointerEvents: "none" }} />
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                style={inputBase}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>
          </Field>

          {/* EMAIL */}
          <Field label="Email Address" icon={Mail}>
            <div style={{ position: "relative" }}>
              <Mail size={15} style={{ position: "absolute", left: 15, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", pointerEvents: "none" }} />
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                required
                style={inputBase}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>
          </Field>

          {/* SERVICE */}
          <Field label="Service Needed" icon={Briefcase}>
            <div style={{ position: "relative" }}>
              <Briefcase size={15} style={{ position: "absolute", left: 15, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", pointerEvents: "none" }} />
              <select
                name="service"
                required
                className="cf-select"
                style={{ ...inputBase }}
                onFocus={onFocus}
                onBlur={onBlur}
              >
                <option value="" disabled>Select a service…</option>
                <option>Customs Clearance</option>
                <option>Shipping &amp; Transportation</option>
                <option>Warehousing</option>
                <option>Brokerage Services</option>
                <option>General Supply</option>
              </select>
            </div>
          </Field>

          {/* MESSAGE */}
          <Field label="Message" icon={MessageSquare}>
            <div style={{ position: "relative" }}>
              <MessageSquare size={15} style={{ position: "absolute", left: 15, top: 14, color: "#94a3b8", pointerEvents: "none" }} />
              <textarea
                name="message"
                rows={5}
                placeholder="Briefly describe your logistics or service request…"
                required
                style={{ ...inputBase, padding: "13px 16px 13px 44px", resize: "none" }}
                onFocus={onFocus as any}
                onBlur={onBlur as any}
              />
            </div>
          </Field>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="cf-submit"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.84rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#e8c87a",
              border: "none",
              borderRadius: 12,
              padding: "15px 24px",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            <Send size={15} />
            {loading ? "Submitting…" : "Submit Request"}
          </button>

        </form>
      )}
    </>
  );
}