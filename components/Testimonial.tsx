"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Pacific Enterprise Co. Ltd",
    role: "Importers",
    message:
      "Life Cycle General Trading handled our customs clearance smoothly and professionally. Highly reliable service.",
    initials: "PE",
  },
  {
    name: "Skyline Contracting Co. Ltd",
    role: "Dealers in Building Materials",
    message:
      "Their team ensured timely delivery of our supplies across South Sudan. Very efficient and dependable.",
    initials: "SC",
  },
  {
    name: "Bunyaan Foodstuffs Co. Ltd",
    role: "Food Supply Company",
    message:
      "Excellent coordination and communication throughout the process. I would definitely recommend their services.",
    initials: "BF",
  },
];

export default function Testimonials() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .testi-root {
          font-family: 'DM Sans', sans-serif;
          --navy:  #0b1628;
          --navy2: #132040;
          --gold:  #c9a84c;
          --gold2: #e8c87a;
          --cream: #faf8f3;
        }

        /* card */
        .testi-card {
          position: relative;
          background: #fff;
          border-radius: 22px;
          border: 1px solid rgba(11,22,40,0.07);
          overflow: hidden;
          transition: border-color .3s, box-shadow .3s, transform .35s;
          display: flex;
          flex-direction: column;
        }
        .testi-card:hover {
          border-color: rgba(201,168,76,0.45);
          box-shadow: 0 28px 72px rgba(11,22,40,0.12);
          transform: translateY(-6px);
        }

        /* top gold bar that expands on hover */
        .testi-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--gold), var(--gold2));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .4s ease;
          border-radius: 22px 22px 0 0;
        }
        .testi-card:hover::before { transform: scaleX(1); }

        /* avatar */
        .testi-avatar {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--navy), var(--navy2));
          border: 1.5px solid rgba(201,168,76,0.35);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold2);
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.05rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        /* star */
        .testi-star { color: var(--gold); }

        /* noise overlay for the section bg */
        .testi-root::after {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0;
        }
      `}</style>

      <section
        className="testi-root"
        style={{
          position: "relative",
          background: "var(--cream)",
          padding: "100px 24px",
          overflow: "hidden",
        }}
      >
        {/* soft blobs */}
        <div aria-hidden style={{ position: "absolute", top: -80, left: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", bottom: -60, right: -60, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(11,22,40,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="relative" style={{ maxWidth: 1280, margin: "0 auto", zIndex: 1 }}>

          {/* ── HEADER ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--gold)",
                border: "1px solid rgba(201,168,76,0.4)",
                borderRadius: 100,
                padding: "6px 20px",
                marginBottom: 20,
              }}
            >
              Client Voices
            </span>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                fontWeight: 700,
                color: "var(--navy)",
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
                margin: "0 0 16px",
              }}
            >
              What Our Clients{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Say</em>
            </h2>

            <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.75, margin: 0 }}>
              Trusted by businesses and organisations across South Sudan.
            </p>

            <div style={{ height: 1, width: 60, background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "22px auto 0" }} />
          </motion.div>

          {/* ── CARDS ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="testi-grid"
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                className="testi-card"
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", flexGrow: 1 }}>

                  {/* top row: stars + quote icon */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                    <div style={{ display: "flex", gap: 3 }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" className="testi-star" />
                      ))}
                    </div>
                    <div
                      style={{
                        width: 36, height: 36,
                        borderRadius: 10,
                        background: "rgba(201,168,76,0.08)",
                        border: "1px solid rgba(201,168,76,0.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "var(--gold)",
                        opacity: 0.75,
                      }}
                    >
                      <Quote size={16} />
                    </div>
                  </div>

                  {/* message */}
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "1.18rem",
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "#334155",
                      lineHeight: 1.75,
                      flexGrow: 1,
                      margin: 0,
                    }}
                  >
                    "{item.message}"
                  </p>

                  {/* divider */}
                  <div style={{ height: 1, background: "linear-gradient(90deg, rgba(201,168,76,0.35), transparent)", margin: "24px 0" }} />

                  {/* client row */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div className="testi-avatar">{item.initials}</div>
                    <div>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.9rem",
                          fontWeight: 500,
                          color: "var(--navy)",
                          margin: 0,
                          lineHeight: 1.3,
                        }}
                      >
                        {item.name}
                      </p>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.75rem",
                          color: "#94a3b8",
                          margin: "3px 0 0",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

        <style>{`
          @media (max-width: 768px) {
            .testi-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}