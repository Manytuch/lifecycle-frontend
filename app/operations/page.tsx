"use client";

import {
  ShieldCheck,
  Users,
  Briefcase,
  Truck,
  Warehouse,
  FileCheck,
  PackageCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const valueChain = [
  {
    icon: Briefcase,
    title: "Procurement",
    description:
      "Strategic sourcing and acquisition of goods and logistics resources.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description:
      "Efficient customs documentation and border clearance procedures.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description:
      "Secure storage and inventory management for client goods.",
  },
  {
    icon: Truck,
    title: "Transportation",
    description:
      "Reliable cargo movement across South Sudan.",
  },
  {
    icon: PackageCheck,
    title: "Delivery",
    description:
      "Timely and professional final delivery to customer destinations.",
  },
];

const coreValues = [
  "Integrity",
  "Professionalism",
  "Reliability",
  "Customer Satisfaction",
  "Efficiency",
  "Transparency",
];

const SHARED_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --navy:#0b1628;
    --navy2:#132040;
    --gold:#c9a84c;
    --gold2:#e8c87a;
    --cream:#faf8f3;
  }

  /* ── Page hero ── */
  .page-hero {
    position: relative;

    background:
      linear-gradient(
        135deg,
        var(--navy) 0%,
        var(--navy2) 100%
      );

    padding: 140px 24px 100px;

    overflow: hidden;

    text-align: center;
  }

  .page-hero::after {
    content:'';

    position:absolute;
    inset:0;

    background-image:
      repeating-linear-gradient(
        135deg,
        #c9a84c 0,
        #c9a84c 1px,
        transparent 1px,
        transparent 68px
      );

    opacity:.05;

    pointer-events:none;
  }

  /* ── Generic card ── */
  .g-card {
    background:#fff;

    border-radius:20px;

    border:
      1px solid rgba(11,22,40,.07);

    overflow:hidden;

    transition:
      border-color .3s,
      box-shadow .3s,
      transform .35s;

    position: relative;
  }

  .g-card:hover {
    border-color:
      rgba(201,168,76,.45);

    box-shadow:
      0 24px 64px rgba(11,22,40,.12);

    transform:translateY(-5px);
  }

  .g-card::before {
    content:'';

    position:absolute;

    top:0;
    left:0;
    right:0;

    height:2.5px;

    background:
      linear-gradient(
        90deg,
        var(--gold),
        var(--gold2)
      );

    transform:scaleX(0);

    transform-origin:left;

    transition:transform .4s ease;

    border-radius:20px 20px 0 0;
  }

  .g-card:hover::before {
    transform:scaleX(1);
  }

  /* ── dark card ── */
  .d-card {
    background:
      rgba(255,255,255,.04);

    border:
      1px solid rgba(201,168,76,.15);

    border-radius:20px;

    backdrop-filter:blur(10px);
    -webkit-backdrop-filter:blur(10px);

    transition:
      background .3s,
      border-color .3s;
  }

  .d-card:hover {
    background:
      rgba(255,255,255,.08);

    border-color:
      rgba(201,168,76,.4);
  }

  /* ── icon ring ── */
  .icon-gold {
    border-radius:14px;

    background:
      linear-gradient(
        135deg,
        var(--navy),
        var(--navy2)
      );

    display:flex;
    align-items:center;
    justify-content:center;

    color:var(--gold);

    flex-shrink:0;

    transition:transform .3s;
  }

  .g-card:hover .icon-gold {
    transform:
      rotate(4deg)
      scale(1.08);
  }

  .icon-gold-light {
    border-radius:14px;

    background:
      rgba(201,168,76,.1);

    border:
      1px solid rgba(201,168,76,.28);

    display:flex;
    align-items:center;
    justify-content:center;

    color:var(--gold);

    flex-shrink:0;

    transition:
      transform .3s,
      background .3s;
  }

  .d-card:hover .icon-gold-light {
    background:
      rgba(201,168,76,.18);

    transform:
      rotate(3deg)
      scale(1.06);
  }

  /* ── eyebrow pill ── */
  .eyebrow {
    display:inline-block;

    font-family:'DM Sans',sans-serif;

    font-size:.7rem;
    font-weight:500;

    letter-spacing:.26em;
    text-transform:uppercase;

    color:var(--gold);

    border:
      1px solid rgba(201,168,76,.4);

    border-radius:100px;

    padding:6px 20px;
  }

  /* ── gold rule ── */
  .g-rule {
    height:1px;

    background:
      linear-gradient(
        90deg,
        transparent,
        var(--gold),
        transparent
      );
  }

  /* noise overlay */
  .noise::after {
    content:'';

    position:absolute;
    inset:0;

    background-image:
      url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");

    pointer-events:none;

    z-index:0;
  }
`;

/* ── fade-up wrapper ── */
const FU = ({
  children,
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1],
    }}
    viewport={{ once: true }}
    style={style}
  >
    {children}
  </motion.div>
);

export default function OperationsPage() {
  return (
    <>
      <style>{SHARED_STYLES}</style>

      <main
        style={{
          fontFamily:
            "'DM Sans', sans-serif",

          background:
            "var(--cream)",

          minHeight: "100vh",
        }}
      >

        {/* ══ HERO ══ */}
        <section className="page-hero noise">

          <div
            aria-hidden

            style={{
              position: "absolute",

              top: "50%",
              left: "50%",

              transform:
                "translate(-50%,-50%)",

              width: 700,
              height: 400,

              background:
                "radial-gradient(ellipse,rgba(201,168,76,.07) 0%,transparent 65%)",

              pointerEvents: "none",

              zIndex: 0,
            }}
          />

          <div
            className="relative"

            style={{
              maxWidth: 800,
              margin: "0 auto",
              zIndex: 1,
            }}
          >

            <FU>

              <span
                className="eyebrow"

                style={{
                  color: "#c9a84c",
                }}
              >
                Operations
              </span>

              <h1
                style={{
                  fontFamily:
                    "'Cormorant Garamond',Georgia,serif",

                  fontSize:
                    "clamp(3rem,7vw,6rem)",

                  fontWeight: 700,

                  color: "#fff",

                  lineHeight: 1.04,

                  letterSpacing:
                    "-0.02em",

                  margin:
                    "20px 0 0",
                }}
              >
                Operational{" "}

                <em
                  style={{
                    fontStyle: "italic",

                    color:
                      "var(--gold2)",
                  }}
                >
                  Excellence
                </em>

              </h1>

              <div
                className="g-rule"

                style={{
                  width: 72,
                  margin: "24px auto",
                }}
              />

              <p
                style={{
                  color: "#94a3b8",

                  fontSize:
                    "clamp(1rem,1.8vw,1.2rem)",

                  lineHeight: 1.8,

                  margin: 0,
                }}
              >
                Our operations are built
                around efficiency,
                reliability, compliance,
                and customer satisfaction —
                ensuring seamless logistics
                across South Sudan.
              </p>

            </FU>

          </div>

        </section>

        {/* ══ CORE VALUES ══ */}
        <section
          style={{
            padding:
              "100px 24px",
          }}
        >

          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
            }}
          >

            <FU
              style={{
                textAlign: "center",

                maxWidth: 640,

                margin:
                  "0 auto 64px",
              }}
            >

              <span
                className="eyebrow"

                style={{
                  color:
                    "var(--gold)",
                }}
              >
                What Drives Us
              </span>

              <h2
                style={{
                  fontFamily:
                    "'Cormorant Garamond',Georgia,serif",

                  fontSize:
                    "clamp(2.2rem,4vw,3.4rem)",

                  fontWeight: 700,

                  color:
                    "var(--navy)",

                  letterSpacing:
                    "-0.02em",

                  margin:
                    "16px 0",
                }}
              >
                Philosophy &amp;{" "}

                <em
                  style={{
                    fontStyle:
                      "italic",

                    color:
                      "var(--gold)",
                  }}
                >
                  Core Values
                </em>

              </h2>

              <div
                className="g-rule"

                style={{
                  width: 60,
                  margin:
                    "0 auto 16px",
                }}
              />

              <p
                style={{
                  color: "#64748b",

                  fontSize: "1rem",

                  lineHeight: 1.8,

                  margin: 0,
                }}
              >
                Building long-term
                partnerships through trust,
                professionalism, and
                customer-focused service
                delivery.
              </p>

            </FU>

            <div
              className="values-grid"

              style={{
                display: "grid",

                gridTemplateColumns:
                  "repeat(6,1fr)",

                gap: 16,
              }}
            >

              {coreValues.map(
                (value, i) => (
                  <FU
                    key={value}
                    delay={i * 0.08}
                  >

                    <div
                      className="g-card"

                      style={{
                        padding:
                          "32px 20px",

                        textAlign:
                          "center",

                        position:
                          "relative",
                      }}
                    >

                      <div
                        className="icon-gold"

                        style={{
                          width: 48,
                          height: 48,

                          margin:
                            "0 auto 16px",
                        }}
                      >
                        <ShieldCheck
                          size={22}
                        />
                      </div>

                      <p
                        style={{
                          fontFamily:
                            "'Cormorant Garamond',Georgia,serif",

                          fontSize:
                            "1.05rem",

                          fontWeight: 700,

                          color:
                            "var(--navy)",

                          margin: 0,
                        }}
                      >
                        {value}
                      </p>

                    </div>

                  </FU>
                )
              )}

            </div>

          </div>

        </section>

        {/* ══ MARKET APPROACH ══ */}
        <section
          style={{
            padding:
              "0 24px 100px",
          }}
        >

          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
            }}
          >

            <FU>

              <div
                className="d-card"

                style={{
                  background:
                    "linear-gradient(135deg,var(--navy) 0%,var(--navy2) 100%)",

                  borderRadius: 24,

                  padding:
                    "clamp(40px,6vw,72px)",

                  position:
                    "relative",

                  overflow:
                    "hidden",

                  boxShadow:
                    "0 32px 80px rgba(11,22,40,.25)",
                }}
              >

                <div
                  aria-hidden

                  style={{
                    position:
                      "absolute",

                    inset: 0,

                    opacity: .05,

                    backgroundImage:
                      "repeating-linear-gradient(135deg,#c9a84c 0,#c9a84c 1px,transparent 1px,transparent 52px)",
                  }}
                />

                <div
                  className="approach-grid"

                  style={{
                    position:
                      "relative",

                    zIndex: 1,

                    display: "grid",

                    gridTemplateColumns:
                      "auto 1fr",

                    gap: 28,

                    alignItems:
                      "flex-start",
                  }}
                >

                  <div
                    style={{
                      display: "flex",

                      flexDirection:
                        "column",

                      gap: 16,
                    }}
                  >

                    <div
                      className="icon-gold-light"

                      style={{
                        width: 56,
                        height: 56,
                      }}
                    >
                      <Users size={26} />
                    </div>

                    <span
                      className="eyebrow"

                      style={{
                        fontSize:
                          "0.62rem",

                        color:
                          "var(--gold)",

                        whiteSpace:
                          "nowrap",
                      }}
                    >
                      Strategic Focus
                    </span>

                  </div>

                  <div>

                    <h3
                      style={{
                        fontFamily:
                          "'Cormorant Garamond',Georgia,serif",

                        fontSize:
                          "clamp(1.8rem,3vw,2.6rem)",

                        fontWeight: 700,

                        color: "#fff",

                        margin:
                          "0 0 16px",

                        lineHeight:
                          1.1,
                      }}
                    >
                      Our Market{" "}

                      <em
                        style={{
                          fontStyle:
                            "italic",

                          color:
                            "var(--gold2)",
                        }}
                      >
                        Approach
                      </em>

                    </h3>

                    <div
                      className="g-rule"

                      style={{
                        width: 60,

                        marginBottom:
                          20,

                        opacity: .6,
                      }}
                    />

                    <p
                      style={{
                        color:
                          "#94a3b8",

                        fontSize:
                          "1.02rem",

                        lineHeight:
                          1.85,

                        margin: 0,
                      }}
                    >
                      Our market approach
                      is centered on
                      customer
                      satisfaction,
                      operational
                      efficiency, and
                      strategic
                      partnerships. We
                      focus on delivering
                      tailored logistics
                      and supply chain
                      solutions that meet
                      the evolving needs
                      of businesses,
                      organizations, and
                      institutions
                      operating within
                      South Sudan and
                      cross-border trade
                      environments.
                    </p>

                  </div>

                </div>

              </div>

            </FU>

          </div>

        </section>

        {/* ══ VALUE CHAIN ══ */}
        <section
          style={{
            padding:
              "0 24px 120px",
          }}
        >

          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
            }}
          >

            <FU
              style={{
                textAlign: "center",

                maxWidth: 640,

                margin:
                  "0 auto 64px",
              }}
            >

              <span
                className="eyebrow"

                style={{
                  color:
                    "var(--gold)",
                }}
              >
                End-to-End Process
              </span>

              <h2
                style={{
                  fontFamily:
                    "'Cormorant Garamond',Georgia,serif",

                  fontSize:
                    "clamp(2.2rem,4vw,3.4rem)",

                  fontWeight: 700,

                  color:
                    "var(--navy)",

                  letterSpacing:
                    "-0.02em",

                  margin:
                    "16px 0",
                }}
              >
                Value Chain{" "}

                <em
                  style={{
                    fontStyle:
                      "italic",

                    color:
                      "var(--gold)",
                  }}
                >
                  Analysis
                </em>

              </h2>

              <div
                className="g-rule"

                style={{
                  width: 60,
                  margin:
                    "0 auto 16px",
                }}
              />

              <p
                style={{
                  color: "#64748b",

                  fontSize: "1rem",

                  lineHeight: 1.8,

                  margin: 0,
                }}
              >
                From procurement to
                final delivery — an
                integrated logistics
                process with efficient
                coordination at every
                stage.
              </p>

            </FU>

            <div
              className="chain-grid"

              style={{
                display: "grid",

                gridTemplateColumns:
                  "repeat(5,1fr)",

                gap: 20,

                position:
                  "relative",
              }}
            >

              {valueChain.map(
                (item, i) => {
                  const Icon =
                    item.icon;

                  return (
                    <FU
                      key={item.title}
                      delay={i * 0.1}
                    >

                      <div
                        className="g-card"

                        style={{
                          padding:
                            "36px 24px",

                          textAlign:
                            "center",

                          position:
                            "relative",
                        }}
                      >

                        {/* step number */}
                        <span
                          style={{
                            position:
                              "absolute",

                            top: 14,
                            right: 18,

                            fontFamily:
                              "'Cormorant Garamond',Georgia,serif",

                            fontSize:
                              "3rem",

                            fontWeight:
                              700,

                            color:
                              "rgba(201,168,76,.12)",

                            lineHeight:
                              1,

                            userSelect:
                              "none",
                          }}
                        >
                          {String(
                            i + 1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <div
                          className="icon-gold"

                          style={{
                            width: 56,
                            height: 56,

                            margin:
                              "0 auto 20px",
                          }}
                        >
                          <Icon
                            size={24}
                          />
                        </div>

                        <h4
                          style={{
                            fontFamily:
                              "'Cormorant Garamond',Georgia,serif",

                            fontSize:
                              "1.3rem",

                            fontWeight:
                              700,

                            color:
                              "var(--navy)",

                            margin:
                              "0 0 12px",
                          }}
                        >
                          {item.title}
                        </h4>

                        <div
                          className="g-rule"

                          style={{
                            width: 36,

                            marginBottom:
                              12,

                            opacity: .5,
                          }}
                        />

                        <p
                          style={{
                            color:
                              "#64748b",

                            fontSize:
                              "0.85rem",

                            lineHeight:
                              1.75,

                            margin: 0,
                          }}
                        >
                          {
                            item.description
                          }
                        </p>

                      </div>

                    </FU>
                  );
                }
              )}

            </div>

          </div>

        </section>

      </main>

      {/* RESPONSIVE */}
      <style>{`
        /* ─────────────────────────────
           LARGE TABLETS
        ───────────────────────────── */
        @media (max-width: 1200px) {

          .chain-grid {
            grid-template-columns:
              repeat(3, 1fr) !important;
          }

          .values-grid {
            grid-template-columns:
              repeat(3, 1fr) !important;
          }

        }

        /* ─────────────────────────────
           TABLETS
        ───────────────────────────── */
        @media (max-width: 900px) {

          .page-hero {
            padding:
              120px 24px 80px !important;
          }

          .chain-grid {
            grid-template-columns:
              repeat(2, 1fr) !important;

            gap: 18px !important;
          }

          .values-grid {
            grid-template-columns:
              repeat(3, 1fr) !important;

            gap: 16px !important;
          }

          .approach-grid {
            grid-template-columns:
              1fr !important;

            gap: 24px !important;
          }

        }

        /* ─────────────────────────────
           MOBILE
        ───────────────────────────── */
        @media (max-width: 600px) {

          /* HERO */
          .page-hero {
            padding:
              110px 18px 72px !important;
          }

          /* GENERAL TEXT */
          main p {
            line-height:
              1.8 !important;
          }

          /* SECTION SPACING */
          section {
            overflow-x: hidden;
          }

          /* VALUE GRID */
          .values-grid {
            grid-template-columns:
              repeat(2, 1fr) !important;

            gap: 14px !important;
          }

          /* VALUE CHAIN */
          .chain-grid {
            grid-template-columns:
              1fr !important;

            gap: 16px !important;
          }

          /* MARKET APPROACH */
          .approach-grid {
            grid-template-columns:
              1fr !important;

            gap: 22px !important;
          }

          /* CARD PADDING */
          .g-card {
            border-radius:
              18px !important;
          }

          /* VALUE CARDS */
          .values-grid .g-card {
            padding:
              24px 16px !important;
          }

          /* CHAIN CARDS */
          .chain-grid .g-card {
            padding:
              30px 20px !important;
          }

          /* DARK CARD */
          .d-card {
            border-radius:
              20px !important;
          }

          /* ICONS */
          .icon-gold,
          .icon-gold-light {
            width: 50px !important;
            height: 50px !important;
          }

          /* HERO GLOW */
          .page-hero div[aria-hidden] {
            width: 90vw !important;
            height: 260px !important;
          }

        }

        /* ─────────────────────────────
           SMALL PHONES
        ───────────────────────────── */
        @media (max-width: 420px) {

          .values-grid {
            grid-template-columns:
              1fr !important;
          }

          .page-hero {
            padding-top:
              100px !important;
          }

        }
      `}</style>
    </>
  );
}