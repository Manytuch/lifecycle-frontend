"use client";

import { Truck, Users, Clock, ShieldCheck } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Truck,
    value: 250,
    suffix: "+",
    label: "Shipments Delivered",
    description: "Cargo moved across borders reliably and on time.",
  },
  {
    icon: Users,
    value: 20,
    suffix: "+",
    label: "Satisfied Clients",
    description: "Businesses and institutions that trust our services.",
  },
  {
    icon: Clock,
    value: 7,
    suffix: "+",
    label: "Years Experience",
    description: "Deep industry expertise in freight and customs.",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Compliance & Safety",
    description: "Full regulatory compliance on every shipment.",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .stats-root {
          font-family: 'DM Sans', sans-serif;
          --navy:  #0b1628;
          --navy2: #132040;
          --gold:  #c9a84c;
          --gold2: #e8c87a;
        }

        /* card border glow on hover */
        .stat-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(201,168,76,0.15);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: background .3s, border-color .3s, box-shadow .3s;
          cursor: default;
        }
        .stat-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(201,168,76,0.45);
          box-shadow: 0 0 40px rgba(201,168,76,0.1);
        }

        /* shine sweep on hover */
        .stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 60%);
          opacity: 0;
          transition: opacity .35s;
          pointer-events: none;
          border-radius: 20px;
        }
        .stat-card:hover::before { opacity: 1; }

        /* icon ring */
        .stat-icon-ring {
          width: 56px; height: 56px;
          border-radius: 14px;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.3);
          display: flex; align-items: center; justify-content: center;
          color: #c9a84c;
          margin: 0 auto 20px;
          transition: background .3s, transform .3s;
        }
        .stat-card:hover .stat-icon-ring {
          background: rgba(201,168,76,0.18);
          transform: scale(1.08) rotate(4deg);
        }

        /* noise texture overlay for whole section */
        .stats-root::after {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0;
        }

        /* vertical divider between cards on desktop */
        .stat-divider {
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent);
          align-self: stretch;
        }
      `}</style>

      <section
        ref={ref}
        className="stats-root"
        style={{
          position: "relative",
          background: "linear-gradient(135deg, #0b1628 0%, #132040 50%, #0b1628 100%)",
          padding: "88px 24px",
          overflow: "hidden",
        }}
      >

        {/* diagonal accent lines */}
        <div
          aria-hidden
          style={{
            position: "absolute", inset: 0,
            opacity: 0.05,
            backgroundImage:
              "repeating-linear-gradient(135deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 68px)",
            pointerEvents: "none",
          }}
        />

        {/* radial gold glow centre */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700, height: 400,
            background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="relative"
          style={{ maxWidth: 1280, margin: "0 auto", zIndex: 1 }}
        >

          {/* ── SECTION LABEL ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 56 }}
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
                marginBottom: 18,
              }}
            >
              By the Numbers
            </span>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Our Track{" "}
              <em style={{ fontStyle: "italic", color: "#e8c87a" }}>Record</em>
            </h2>

            <div
              style={{
                height: 1, width: 60,
                background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
                margin: "20px auto 0",
              }}
            />
          </motion.div>

          {/* ── STAT CARDS ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
            className="grid-cols-2-mobile"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, y: 44 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  style={{ padding: "36px 28px", textAlign: "center" }}
                >
                  {/* icon */}
                  <div className="stat-icon-ring">
                    <Icon size={24} />
                  </div>

                  {/* value */}
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
                      fontWeight: 700,
                      color: "#e8c87a",
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    {inView ? (
                      <CountUp end={stat.value} duration={2.4} suffix={stat.suffix} />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </p>

                  {/* gold micro-rule */}
                  <div
                    style={{
                      height: 1, width: 32,
                      background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)",
                      margin: "12px auto",
                    }}
                  />

                  {/* label */}
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      color: "#fff",
                      letterSpacing: "0.04em",
                      margin: "0 0 8px",
                    }}
                  >
                    {stat.label}
                  </p>

                  {/* description */}
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.76rem",
                      color: "rgba(255,255,255,0.42)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {stat.description}
                  </p>

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ── responsive 2-col on mobile ── */}
        <style>{`
          @media (max-width: 768px) {
            .grid-cols-2-mobile { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>

      </section>
    </>
  );
}