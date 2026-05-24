"use client";

import { MapPin, Plane, Truck, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  {
    title: "Nimule Border Station",
    tag: "Land Border",
    description:
      "Efficient handling of cross-border imports and exports with smooth customs clearance and transportation at South Sudan's busiest land crossing.",
    icon: Truck,
    image: "/images/nimule.jpeg",
    coords: "3°36′N 32°3′E",
  },
  {
    title: "Juba International Airport",
    tag: "Air Freight",
    description:
      "Management of air freight, urgent shipments, and international cargo with speed and reliability at the capital's primary international gateway.",
    icon: Plane,
    image: "/images/juba-airport.jpg",
    coords: "4°52′N 31°36′E",
  },
];

export default function Locations() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .loc-root {
          font-family: 'DM Sans', sans-serif;
          --navy:  #0b1628;
          --navy2: #132040;
          --gold:  #c9a84c;
          --gold2: #e8c87a;
        }

        /* full-bleed image card */
        .loc-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          cursor: default;
        }

        /* image zoom on hover */
        .loc-card img {
          transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: block;
        }
        .loc-card:hover img { transform: scale(1.07); }

        /* content panel slides up on hover */
        .loc-panel {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 32px;
          background: linear-gradient(
            to top,
            rgba(11,22,40,0.97) 0%,
            rgba(11,22,40,0.82) 55%,
            transparent 100%
          );
          transform: translateY(0);
          transition: background .4s;
        }
        .loc-card:hover .loc-panel {
          background: linear-gradient(
            to top,
            rgba(11,22,40,1) 0%,
            rgba(11,22,40,0.92) 65%,
            transparent 100%
          );
        }

        /* description hidden by default, revealed on hover */
        .loc-desc {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height .5s ease, opacity .4s ease;
          margin: 0;
        }
        .loc-card:hover .loc-desc {
          max-height: 120px;
          opacity: 1;
        }

        /* gold rule expands on hover */
        .loc-rule {
          height: 1px;
          width: 0;
          background: linear-gradient(90deg, var(--gold), transparent);
          transition: width .5s ease;
          margin: 14px 0;
        }
        .loc-card:hover .loc-rule { width: 100%; }

        /* tag pill */
        .loc-tag {
          position: absolute;
          top: 22px; left: 22px;
          background: rgba(11,22,40,0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(201,168,76,0.35);
          border-radius: 100px;
          padding: 5px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold2);
        }

        /* icon chip */
        .loc-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          background: rgba(201,168,76,0.12);
          border: 1px solid rgba(201,168,76,0.35);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold);
          margin-bottom: 14px;
          transition: background .3s, transform .3s;
          flex-shrink: 0;
        }
        .loc-card:hover .loc-icon {
          background: rgba(201,168,76,0.2);
          transform: rotate(4deg) scale(1.08);
        }

        /* noise texture */
        .loc-root::after {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0;
        }
      `}</style>

      <section
        className="loc-root"
        style={{
          position: "relative",
          background: "linear-gradient(160deg, #0b1628 0%, #132040 100%)",
          padding: "100px 24px 110px",
          overflow: "hidden",
        }}
      >

        {/* diagonal lines */}
        <div
          aria-hidden
          style={{
            position: "absolute", inset: 0,
            opacity: 0.05,
            backgroundImage: "repeating-linear-gradient(135deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 68px)",
            pointerEvents: "none",
          }}
        />

        {/* radial glow */}
        <div
          aria-hidden
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800, height: 500,
            background: "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

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
                color: "#c9a84c",
                border: "1px solid rgba(201,168,76,0.4)",
                borderRadius: 100,
                padding: "6px 20px",
                marginBottom: 20,
              }}
            >
              Where We Operate
            </span>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
                margin: "0 0 16px",
              }}
            >
              Our{" "}
              <em style={{ fontStyle: "italic", color: "#e8c87a" }}>Locations</em>
            </h2>

            <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.75, margin: 0 }}>
              Strategically positioned to support seamless logistics and trade
              operations across South Sudan.
            </p>

            <div
              style={{
                height: 1, width: 60,
                background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
                margin: "22px auto 0",
              }}
            />
          </motion.div>

          {/* ── CARDS ── */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
            className="loc-grid"
          >
            {locations.map((loc, index) => {
              const Icon = loc.icon;

              return (
                <motion.div
                  key={index}
                  className="loc-card"
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.35)" }}
                >

                  {/* image */}
                  <img
                    src={loc.image}
                    alt={loc.title}
                    style={{ width: "100%", height: 480, objectFit: "cover" }}
                  />

                  {/* tag */}
                  <div className="loc-tag">{loc.tag}</div>

                  {/* coords — top right */}
                  <div
                    style={{
                      position: "absolute", top: 22, right: 22,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.62rem",
                      letterSpacing: "0.1em",
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    {loc.coords}
                  </div>

                  {/* content panel */}
                  <div className="loc-panel">
                    <div className="loc-icon">
                      <Icon size={20} />
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "1.75rem",
                        fontWeight: 700,
                        color: "#fff",
                        lineHeight: 1.15,
                        margin: 0,
                      }}
                    >
                      {loc.title}
                    </h3>

                    <div className="loc-rule" />

                    <p
                      className="loc-desc"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.65)",
                        lineHeight: 1.75,
                      }}
                    >
                      {loc.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 16,
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.75rem",
                          color: "#c9a84c",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        <MapPin size={13} /> South Sudan
                      </span>

                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          color: "rgba(255,255,255,0.5)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          transition: "color .25s",
                        }}
                      >
                        Learn More <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

        <style>{`
          @media (max-width: 768px) {
            .loc-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}