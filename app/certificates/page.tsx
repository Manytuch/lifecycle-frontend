"use client";

import {
  CheckCircle,
  ShieldCheck,
  FileCheck,
  BadgeCheck,
  Scale,
  ClipboardCheck,
} from "lucide-react";

import { motion } from "framer-motion";
import React from "react";

const certificates = [
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",

    description:
      "We operate in accordance with all applicable customs, trade, and operational regulations.",
  },

  {
    icon: CheckCircle,
    title: "Trade & Business License",

    description:
      "Licensed to provide logistics, customs clearance, brokerage, warehousing, and general supply services.",
  },

  {
    icon: FileCheck,
    title: "Business Registration",

    description:
      "Legally registered and authorised to operate in South Sudan.",
  },
];

const compliance = [
  {
    icon: BadgeCheck,
    title: "Professional Standards",

    description:
      "Committed to maintaining professionalism, accountability, and operational excellence in all logistics activities.",
  },

  {
    icon: Scale,
    title: "Legal Compliance",

    description:
      "Operating within approved legal and regulatory frameworks governing logistics and trading services.",
  },

  {
    icon: ClipboardCheck,
    title: "Operational Integrity",

    description:
      "Focused on transparent procedures, secure handling, and dependable service delivery across operations.",
  },
];

const SHARED_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

  :root{
    --navy:#0b1628;
    --navy2:#132040;
    --gold:#c9a84c;
    --gold2:#e8c87a;
    --cream:#faf8f3;
  }

  .page-hero{
    position:relative;

    background:
      linear-gradient(
        135deg,
        var(--navy) 0%,
        var(--navy2) 100%
      );

    padding:140px 24px 100px;

    overflow:hidden;

    text-align:center;
  }

  .page-hero::after{
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

  .g-card{
    background:#fff;

    border-radius:20px;

    border:
      1px solid rgba(11,22,40,.07);

    overflow:hidden;

    transition:
      border-color .3s,
      box-shadow .3s,
      transform .35s;

    position:relative;
  }

  .g-card:hover{
    border-color:
      rgba(201,168,76,.45);

    box-shadow:
      0 24px 64px rgba(11,22,40,.12);

    transform:translateY(-5px);
  }

  .g-card::before{
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

  .g-card:hover::before{
    transform:scaleX(1);
  }

  .d-card{
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

  .d-card:hover{
    background:
      rgba(255,255,255,.08);

    border-color:
      rgba(201,168,76,.4);
  }

  .icon-gold{
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

  .g-card:hover .icon-gold{
    transform:
      rotate(4deg)
      scale(1.08);
  }

  .icon-gold-light{
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

  .d-card:hover .icon-gold-light{
    background:
      rgba(201,168,76,.18);

    transform:
      rotate(3deg)
      scale(1.06);
  }

  .eyebrow{
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

  .g-rule{
    height:1px;

    background:
      linear-gradient(
        90deg,
        transparent,
        var(--gold),
        transparent
      );
  }

  .noise::after{
    content:'';

    position:absolute;
    inset:0;

    background-image:
      url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");

    pointer-events:none;

    z-index:0;
  }
`;

const FU = ({
  children,
  delay = 0,
  style = {},
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
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
    className={className}
  >
    {children}
  </motion.div>
);

export default function CertificatesPage() {
  return (
    <>
      <style>{SHARED_STYLES}</style>

      <main
        style={{
          fontFamily:
            "'DM Sans',sans-serif",

          background:
            "var(--cream)",

          minHeight: "100vh",
        }}
      >

        {/* ═════════ HERO ═════════ */}
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

              <span className="eyebrow">
                Certificates &amp; Licences
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
                Compliance &amp;{" "}

                <em
                  style={{
                    fontStyle: "italic",

                    color:
                      "var(--gold2)",

                    display: "block",
                  }}
                >
                  Certification
                </em>

              </h1>

              <div
                className="g-rule"

                style={{
                  width: 72,

                  margin:
                    "24px auto",
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
                We maintain professional
                operational standards and
                comply with all relevant
                legal and regulatory
                frameworks governing
                logistics, customs
                clearance, and trading in
                South Sudan.
              </p>

            </FU>

          </div>

        </section>

        {/* ═════════ CERTIFICATES ═════════ */}
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
                textAlign:
                  "center",

                maxWidth: 640,

                margin:
                  "0 auto 64px",
              }}
            >

              <span className="eyebrow">
                Certification Overview
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
                Legal &amp; Operational{" "}

                <em
                  style={{
                    fontStyle:
                      "italic",

                    color:
                      "var(--gold)",
                  }}
                >
                  Recognition
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
                Our certifications and
                licences reflect our
                commitment to lawful,
                reliable, and professional
                logistics operations.
              </p>

            </FU>

            <div
              className="cert-grid"

              style={{
                display: "grid",

                gridTemplateColumns:
                  "repeat(3,1fr)",

                gap: 24,
              }}
            >

              {certificates.map(
                (item, i) => {
                  const Icon =
                    item.icon;

                  return (
                    <FU
                      key={item.title}
                      delay={i * 0.12}
                    >

                      <div
                        className="g-card"

                        style={{
                          padding:
                            "48px 36px",

                          textAlign:
                            "center",
                        }}
                      >

                        {/* NUMBER */}
                        <span
                          style={{
                            position:
                              "absolute",

                            top: 16,
                            right: 20,

                            fontFamily:
                              "'Cormorant Garamond',Georgia,serif",

                            fontSize:
                              "4rem",

                            fontWeight:
                              700,

                            color:
                              "rgba(201,168,76,.1)",

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

                        {/* ICON */}
                        <div
                          style={{
                            position:
                              "relative",

                            width: 80,
                            height: 80,

                            margin:
                              "0 auto 28px",
                          }}
                        >

                          <div
                            style={{
                              position:
                                "absolute",

                              inset: 0,

                              borderRadius:
                                "50%",

                              background:
                                "rgba(201,168,76,.08)",

                              border:
                                "1px solid rgba(201,168,76,.2)",
                            }}
                          />

                          <div
                            className="icon-gold"

                            style={{
                              position:
                                "absolute",

                              inset: 10,

                              borderRadius:
                                "50%",
                            }}
                          >
                            <Icon
                              size={28}
                            />
                          </div>

                        </div>

                        <h3
                          style={{
                            fontFamily:
                              "'Cormorant Garamond',Georgia,serif",

                            fontSize:
                              "1.55rem",

                            fontWeight:
                              700,

                            color:
                              "var(--navy)",

                            margin:
                              "0 0 14px",

                            lineHeight:
                              1.2,
                          }}
                        >
                          {item.title}
                        </h3>

                        <div
                          className="g-rule"

                          style={{
                            width: 48,

                            margin:
                              "0 auto 16px",

                            opacity: .5,
                          }}
                        />

                        <p
                          style={{
                            color:
                              "#64748b",

                            fontSize:
                              "0.92rem",

                            lineHeight:
                              1.8,

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

        {/* ═════════ COMPLIANCE ═════════ */}
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

            <FU>

              <div
                style={{
                  background:
                    "linear-gradient(135deg,var(--navy) 0%,var(--navy2) 100%)",

                  borderRadius: 24,

                  padding:
                    "clamp(48px,6vw,80px)",

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
                  aria-hidden

                  style={{
                    position:
                      "absolute",

                    top: "50%",
                    left: "50%",

                    transform:
                      "translate(-50%,-50%)",

                    width: 700,
                    height: 400,

                    background:
                      "radial-gradient(ellipse,rgba(201,168,76,.06) 0%,transparent 65%)",

                    pointerEvents:
                      "none",
                  }}
                />

                {/* HEADER */}
                <div
                  className="relative"

                  style={{
                    textAlign:
                      "center",

                    maxWidth: 600,

                    margin:
                      "0 auto 56px",

                    zIndex: 1,
                  }}
                >

                  <span
                    className="eyebrow"

                    style={{
                      marginBottom:
                        16,

                      display:
                        "inline-block",
                    }}
                  >
                    Trust &amp; Accountability
                  </span>

                  <h2
                    style={{
                      fontFamily:
                        "'Cormorant Garamond',Georgia,serif",

                      fontSize:
                        "clamp(2rem,4vw,3.2rem)",

                      fontWeight:
                        700,

                      color: "#fff",

                      letterSpacing:
                        "-0.02em",

                      margin:
                        "0 0 16px",

                      lineHeight:
                        1.1,
                    }}
                  >
                    Commitment to{" "}

                    <em
                      style={{
                        fontStyle:
                          "italic",

                        color:
                          "var(--gold2)",
                      }}
                    >
                      Compliance
                    </em>

                  </h2>

                  <div
                    className="g-rule"

                    style={{
                      width: 60,

                      margin:
                        "0 auto 16px",

                      opacity: .6,
                    }}
                  />

                  <p
                    style={{
                      color:
                        "#94a3b8",

                      fontSize:
                        "1rem",

                      lineHeight:
                        1.8,

                      margin: 0,
                    }}
                  >
                    We continuously uphold
                    operational integrity,
                    transparency, and
                    professional standards
                    for dependable service.
                  </p>

                </div>

                {/* CARDS */}
                <div
                  className="comp-grid"

                  style={{
                    display: "grid",

                    gridTemplateColumns:
                      "repeat(3,1fr)",

                    gap: 20,

                    position:
                      "relative",

                    zIndex: 1,
                  }}
                >

                  {compliance.map(
                    (item, i) => {
                      const Icon =
                        item.icon;

                      return (
                        <FU
                          key={item.title}
                          delay={i * 0.12}
                        >

                          <div
                            className="d-card"

                            style={{
                              padding:
                                "36px 28px",
                            }}
                          >

                            <div
                              className="icon-gold-light"

                              style={{
                                width: 52,
                                height: 52,

                                marginBottom:
                                  20,
                              }}
                            >
                              <Icon
                                size={23}
                              />
                            </div>

                            <h3
                              style={{
                                fontFamily:
                                  "'Cormorant Garamond',Georgia,serif",

                                fontSize:
                                  "1.35rem",

                                fontWeight:
                                  700,

                                color:
                                  "#fff",

                                margin:
                                  "0 0 12px",

                                lineHeight:
                                  1.2,
                              }}
                            >
                              {
                                item.title
                              }
                            </h3>

                            <div
                              className="g-rule"

                              style={{
                                width: 36,

                                marginBottom:
                                  14,

                                opacity:
                                  .4,
                              }}
                            />

                            <p
                              style={{
                                color:
                                  "#94a3b8",

                                fontSize:
                                  "0.88rem",

                                lineHeight:
                                  1.8,

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

            </FU>

          </div>

        </section>

      </main>

      {/* ═════════ RESPONSIVE ═════════ */}
      <style>{`
        /* ─────────────────────────────
           LARGE TABLETS
        ───────────────────────────── */
        @media (max-width: 1200px) {

          .cert-grid,
          .comp-grid {
            grid-template-columns:
              repeat(2,1fr) !important;
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

          .cert-grid,
          .comp-grid {
            grid-template-columns:
              repeat(2,1fr) !important;

            gap: 18px !important;
          }

        }

        /* ─────────────────────────────
           MOBILE
        ───────────────────────────── */
        @media (max-width: 768px) {

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

          section {
            overflow-x: hidden;
          }

          /* GRID */
          .cert-grid,
          .comp-grid {
            grid-template-columns:
              1fr !important;

            gap: 16px !important;
          }

          /* CERTIFICATE CARDS */
          .cert-grid .g-card {
            padding:
              34px 24px !important;

            border-radius:
              18px !important;
          }

          /* COMPLIANCE CARDS */
          .comp-grid .d-card {
            padding:
              30px 22px !important;

            border-radius:
              18px !important;
          }

          /* ICON RING */
          .cert-grid div[style*="width: 80"] {
            width: 70px !important;
            height: 70px !important;

            margin-bottom:
              22px !important;
          }

          /* INNER ICON */
          .cert-grid .icon-gold {
            inset: 9px !important;
          }

          /* COMPLIANCE ICON */
          .comp-grid .icon-gold-light {
            width: 48px !important;
            height: 48px !important;
          }

          /* DARK SECTION */
          .comp-grid {
            position: relative;
            z-index: 1;
          }

          /* DARK CONTAINER */
          section div[style*="linear-gradient(135deg,var(--navy)"] {
            border-radius:
              22px !important;
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
        @media (max-width: 480px) {

          .page-hero {
            padding-top:
              100px !important;
          }

          .cert-grid .g-card {
            padding:
              30px 20px !important;
          }

          .comp-grid .d-card {
            padding:
              28px 20px !important;
          }

        }
      `}</style>
    </>
  );
}