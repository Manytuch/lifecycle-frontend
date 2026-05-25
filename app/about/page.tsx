"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { Building2, Target, Eye, ArrowRight } from "lucide-react";

/* ─── Tiny hook: fires once when element enters viewport ─── */
function useInView<T extends Element = HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

/* ─── Animated counter ─── */
function Counter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView<HTMLSpanElement>();

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const step = Math.ceil(end / 50);

    const id = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(id);
      } else {
        setCount(start);
      }
    }, 28);

    return () => clearInterval(id);
  }, [visible, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Fade-up wrapper ─── */
function FadeUp({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [ref, visible] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(36px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .about-root {
          --navy:   #0b1628;
          --navy2:  #132040;
          --gold:   #c9a84c;
          --gold2:  #e8c87a;
          --cream:  #faf8f3;
          --slate:  #64748b;
          --muted:  #94a3b8;
          font-family: 'DM Sans', sans-serif;
        }

        .display-font {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        /* ── animated border-gradient card ── */
        .glint-card {
          position: relative;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
        }

        .glint-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 1.5px;
          background: linear-gradient(
            135deg,
            #c9a84c 0%,
            transparent 50%,
            #c9a84c 100%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.6;
          transition: opacity .3s;
        }

        .glint-card:hover::before {
          opacity: 1;
        }

        /* ── horizontal rule with fade ── */
        .hr-fade {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--gold),
            transparent
          );
          border: none;
        }

        /* ── stat pill ── */
        .stat-pill {
          background: linear-gradient(
            135deg,
            var(--navy) 0%,
            var(--navy2) 100%
          );

          border: 1px solid rgba(201,168,76,0.25);

          border-radius: 16px;

          padding:
            clamp(18px, 4vw, 28px)
            clamp(14px, 4vw, 32px);

          color: white;

          transition:
            transform .3s,
            box-shadow .3s;
        }

        .stat-pill:hover {
          transform: translateY(-4px);

          box-shadow:
            0 20px 40px rgba(11,22,40,0.2);
        }

        /* ── image overlay on hover ── */
        .img-wrap img {
          transition: transform 1.1s ease;
        }

        .img-wrap:hover img {
          transform: scale(1.04);
        }

        /* ── scroll-reveal divider dot ── */
        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.9;
          }

          100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }

        .ping-dot::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: var(--gold);
          animation: ping 1.8s ease-out infinite;
        }

        /* ── background noise texture ── */
        .noise-bg::after {
          content: '';
          position: absolute;
          inset: 0;

          background-image:
            url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");

          pointer-events: none;
          z-index: 1;
        }

        @media (max-width: 768px) {

          .about-root {
            overflow-x: hidden;
          }

          .about-root p {
            line-height: 1.75 !important;
          }

          .about-root h2,
          .about-root h3 {
            line-height: 1.1 !important;
          }

          .about-root .display-font em {
            display: inline-block;
          }

        }
      `}</style>

      <section
        id="about"
        className="about-root noise-bg relative overflow-hidden"
        style={{
          background: "var(--cream)",
        }}
      >

        {/* HERO STRIP */}
        <div
          className="relative z-10"
          style={{
            background:
              "linear-gradient(135deg, var(--navy) 0%, var(--navy2) 100%)",

            padding:
              "clamp(72px, 10vw, 96px) 20px clamp(56px, 8vw, 80px)",
          }}
        >

          {/* diagonal lines */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.07,

              backgroundImage:
                "repeating-linear-gradient(135deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 60px)",
            }}
          />

          <div className="relative max-w-5xl mx-auto text-center">

            <FadeUp>
              <span
                className="inline-block text-xs font-medium uppercase tracking-[0.25em]"
                style={{
                  color: "var(--gold)",
                  border:
                    "1px solid rgba(201,168,76,0.4)",
                  borderRadius: "100px",
                  padding: "6px 20px",
                }}
              >
                About Us
              </span>
            </FadeUp>

            <FadeUp delay={120}>
              <h2
                className="display-font mt-6"
                style={{
                  fontSize:
                    "clamp(2.8rem, 6vw, 5.5rem)",

                  fontWeight: 600,
                  lineHeight: 1.08,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                }}
              >
                Who We{" "}
                <em
                  style={{
                    color: "var(--gold)",
                    fontStyle: "italic",
                  }}
                >
                  Are
                </em>
              </h2>
            </FadeUp>

            <FadeUp delay={200}>
              <hr
                className="hr-fade mx-auto mt-6"
                style={{ width: 80 }}
              />
            </FadeUp>

            {/* STATS */}
            <div className="mt-10 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">

              {[
                {
                  value: 2024,
                  suffix: "",
                  label: "Founded",
                },
                {
                  value: 7,
                  suffix: "+",
                  label:
                    "Years Industry Experience",
                },
                {
                  value: 100,
                  suffix: "%",
                  label:
                    "Commitment to Excellence",
                },
                {
                  value: 2,
                  suffix: "",
                  label: "Key Border Hubs",
                },
              ].map(
                (
                  { value, suffix, label },
                  i
                ) => (
                  <FadeUp
                    key={label}
                    delay={280 + i * 80}
                  >
                    <div className="stat-pill text-center">

                      <p
                        className="display-font"
                        style={{
                          fontSize:
                            "clamp(1.8rem, 7vw, 2.6rem)",

                          fontWeight: 700,
                          color: "var(--gold2)",
                          lineHeight: 1,
                        }}
                      >
                        <Counter
                          end={value}
                          suffix={suffix}
                        />
                      </p>

                      <p
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--muted)",
                          marginTop: 8,
                          letterSpacing: "0.06em",
                          textTransform:
                            "uppercase",
                        }}
                      >
                        {label}
                      </p>

                    </div>
                  </FadeUp>
                )
              )}

            </div>

          </div>
        </div>

        {/* STORY CARD */}
        <div
          className="relative z-10 max-w-5xl mx-auto px-6"
          style={{
            marginTop:
              "clamp(-24px, -4vw, -40px)",
          }}
        >

          <FadeUp>
            <div
              className="glint-card"
              style={{
                padding:
                  "clamp(32px,6vw,72px)",

                boxShadow:
                  "0 20px 50px rgba(11,22,40,0.12)",
              }}
            >

              {/* accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 48,
                  left: 0,
                  width: 4,
                  height: 72,

                  background:
                    "linear-gradient(180deg, var(--gold), transparent)",

                  borderRadius:
                    "0 4px 4px 0",
                }}
              />

              <p
                className="display-font"
                style={{
                  fontSize:
                    "clamp(1.15rem, 2.2vw, 1.55rem)",

                  lineHeight: 1.85,
                  color: "#1e293b",
                  fontWeight: 400,
                }}
              >
                <span
                  style={{ fontWeight: 600 }}
                >
                  Established in 2024,
                </span>{" "}
                Life Cycle General Trading
                Company Limited has quickly
                become a trusted leader in
                logistics and trading solutions
                at the Nimule Border Station
                and Juba International Airport.
                Under the leadership of{" "}
                <span
                  style={{
                    color: "var(--navy)",
                    fontWeight: 600,
                    fontStyle: "italic",
                  }}
                >
                  Mr. Silas Majok Achirin,
                </span>{" "}
                an industry expert with over
                seven years of experience in
                freight forwarding and customs,
                the company is dedicated to
                providing exceptional services
                and building lasting client
                relationships.
              </p>

              <hr
                className="hr-fade my-8"
              />

              <p
                className="display-font"
                style={{
                  fontSize:
                    "clamp(1.15rem, 2.2vw, 1.55rem)",

                  lineHeight: 1.85,
                  color: "#334155",
                  fontWeight: 400,
                }}
              >
                His vision has driven the
                company to deliver efficient
                and reliable solutions tailored
                to the diverse needs of
                businesses — spanning customs
                clearance, shipping,
                transportation, warehousing,
                brokerage, and general supply.
                With a focus on innovation and
                reliability, we ensure the
                seamless movement of goods and
                support business success across
                South Sudan.
              </p>

            </div>
          </FadeUp>

        </div>

        {/* COMPANY OVERVIEW */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-6"
          style={{
            marginTop:
              "clamp(64px, 8vw, 96px)",
          }}
        >

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* IMAGE */}
            <FadeUp
              className="img-wrap relative"
              style={{
                borderRadius: 24,
                overflow: "hidden",
              }}
            >

              <div
                style={{
                  borderRadius: 24,
                  overflow: "hidden",

                  boxShadow:
                    "0 40px 100px rgba(11,22,40,0.18)",
                }}
              >

                <img
                  src="/images/about-company.jpg"
                  alt="About Company"
                  style={{
                    width: "100%",

                    height:
                      "clamp(320px, 60vw, 520px)",

                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,

                    background:
                      "linear-gradient(to top, rgba(11,22,40,0.55) 0%, transparent 50%)",
                  }}
                />

              </div>

              {/* badge */}
              <div
                style={{
                  position: "absolute",

                  bottom: 18,
                  left: 18,

                  background:
                    "rgba(11,22,40,0.85)",

                  backdropFilter:
                    "blur(12px)",

                  border:
                    "1px solid rgba(201,168,76,0.35)",

                  borderRadius: 14,
                  padding: "14px 22px",
                  color: "#fff",
                }}
              >

                <p
                  style={{
                    fontSize: "0.7rem",

                    letterSpacing:
                      "0.18em",

                    textTransform:
                      "uppercase",

                    color: "var(--gold)",

                    marginBottom: 4,
                  }}
                >
                  Established
                </p>

                <p
                  className="display-font"
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  2024
                </p>

              </div>

            </FadeUp>

            {/* TEXT */}
            <FadeUp delay={160}>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 28,
                }}
              >

                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,

                    background:
                      "linear-gradient(135deg, var(--navy), var(--navy2))",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    color: "var(--gold)",

                    flexShrink: 0,
                  }}
                >
                  <Building2 size={24} />
                </div>

                <div>

                  <p
                    style={{
                      fontSize: "0.72rem",

                      letterSpacing:
                        "0.2em",

                      textTransform:
                        "uppercase",

                      color: "var(--gold)",

                      fontWeight: 500,
                    }}
                  >
                    Company Overview
                  </p>

                  <h3
                    className="display-font"
                    style={{
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "var(--navy)",
                      lineHeight: 1.1,
                    }}
                  >
                    The Organization
                  </h3>

                </div>

              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >

                {[
                  "Life Cycle General Trading Company Limited operates as a dynamic logistics and trading organization focused on providing dependable customs clearance, freight forwarding, transportation, warehousing, brokerage, and supply chain support services.",

                  "Our experienced team combines industry knowledge, operational efficiency, and customer-focused service to ensure smooth and reliable movement of goods across borders and within South Sudan.",

                  "We continuously invest in professional service delivery, compliance, and strategic logistics partnerships to support businesses, organizations, and institutions with tailored supply chain solutions.",
                ].map((text, i) => (
                  <p
                    key={i}
                    style={{
                      color: "#475569",

                      lineHeight: 1.8,

                      fontSize:
                        "clamp(0.96rem, 2vw, 1.02rem)",

                      paddingLeft: 18,

                      borderLeft:
                        "2px solid",

                      borderImage:
                        i === 0
                          ? "linear-gradient(180deg, var(--gold), rgba(201,168,76,0.2)) 1"
                          : "linear-gradient(180deg, rgba(201,168,76,0.2), transparent) 1",
                    }}
                  >
                    {text}
                  </p>
                ))}

              </div>

              <a
                href="/#services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,

                  marginTop: 36,

                  background:
                    "linear-gradient(135deg, var(--navy), var(--navy2))",

                  color: "var(--gold2)",

                  padding: "14px 28px",

                  borderRadius: 12,

                  fontSize: "0.9rem",

                  fontWeight: 500,

                  letterSpacing:
                    "0.04em",

                  textDecoration: "none",

                  width: "fit-content",
                  maxWidth: "100%",

                  transition:
                    "transform .25s, box-shadow .25s",

                  boxShadow:
                    "0 8px 30px rgba(11,22,40,0.2)",
                }}
              >
                Explore Our Services{" "}
                <ArrowRight size={16} />
              </a>

            </FadeUp>

          </div>

        </div>

        {/* MISSION & VISION */}
        <div
          className="relative z-10 max-w-6xl mx-auto px-6"
          style={{
            marginTop:
              "clamp(72px, 8vw, 100px)",

            paddingBottom:
              "clamp(72px, 8vw, 100px)",
          }}
        >

          {/* label */}
          <FadeUp
            className="text-center"
            style={{
              marginBottom: 56,
            }}
          >

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
              }}
            >

              <span
                className="ping-dot relative"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--gold)",
                  display: "inline-block",
                }}
              />

              <span
                style={{
                  fontSize: "0.72rem",

                  letterSpacing:
                    "0.25em",

                  textTransform:
                    "uppercase",

                  color: "var(--gold)",

                  fontWeight: 500,
                }}
              >
                Core Principles
              </span>

              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--gold)",
                  display: "inline-block",
                }}
              />

            </div>

            <h2
              className="display-font"
              style={{
                fontSize:
                  "clamp(2rem, 4vw, 3.2rem)",

                fontWeight: 600,
                color: "var(--navy)",
                marginTop: 12,
                letterSpacing: "-0.02em",
              }}
            >
              Mission &amp; Vision
            </h2>

          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">

            {/* MISSION */}
            <FadeUp delay={80}>

              <div
                className="glint-card"
                style={{
                  padding:
                    "clamp(28px, 5vw, 48px)",

                  boxShadow:
                    "0 20px 60px rgba(11,22,40,0.08)",

                  height: "100%",
                }}
              >

                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,

                    background:
                      "linear-gradient(135deg, var(--navy), var(--navy2))",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    color: "var(--gold)",
                  }}
                >
                  <Target size={26} />
                </div>

                <h3
                  className="display-font"
                  style={{
                    fontSize:
                      "clamp(1.5rem, 5vw, 1.9rem)",

                    fontWeight: 700,
                    color: "var(--navy)",
                    marginTop: 24,
                    marginBottom: 16,
                  }}
                >
                  Our Mission
                </h3>

                <hr
                  className="hr-fade"
                  style={{
                    marginBottom: 24,
                  }}
                />

                <p
                  style={{
                    color: "#475569",
                    lineHeight: 1.85,
                    fontSize: "1rem",
                  }}
                >
                  To deliver exceptional
                  services in customs
                  clearance, transportation,
                  warehousing, brokerage, and
                  general supply by prioritizing
                  efficiency, integrity, and
                  customer satisfaction. We are
                  committed to simplifying
                  trade processes and
                  supporting businesses with
                  tailored solutions that drive
                  success and growth.
                </p>

              </div>

            </FadeUp>

            {/* VISION */}
            <FadeUp delay={180}>

              <div
                style={{
                  background:
                    "linear-gradient(135deg, var(--navy) 0%, var(--navy2) 100%)",

                  borderRadius: 20,

                  padding:
                    "clamp(28px, 5vw, 48px)",

                  boxShadow:
                    "0 20px 60px rgba(11,22,40,0.18)",

                  height: "100%",

                  position: "relative",
                  overflow: "hidden",
                }}
              >

                {/* grid */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.05,

                    backgroundImage:
                      "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",

                    backgroundSize:
                      "40px 40px",
                  }}
                />

                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,

                    background:
                      "rgba(201,168,76,0.15)",

                    border:
                      "1px solid rgba(201,168,76,0.4)",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    color: "var(--gold)",

                    position: "relative",
                  }}
                >
                  <Eye size={26} />
                </div>

                <h3
                  className="display-font"
                  style={{
                    fontSize:
                      "clamp(1.5rem, 5vw, 1.9rem)",

                    fontWeight: 700,
                    color: "#fff",

                    marginTop: 24,
                    marginBottom: 16,

                    position: "relative",
                  }}
                >
                  Our Vision
                </h3>

                <hr
                  className="hr-fade"
                  style={{
                    marginBottom: 24,
                    opacity: 0.4,
                  }}
                />

                <p
                  style={{
                    color: "var(--muted)",

                    lineHeight: 1.85,
                    fontSize: "1rem",

                    position: "relative",
                  }}
                >
                  To become the leading
                  provider of innovative and
                  reliable logistics, customs
                  clearance, and trading
                  solutions in South Sudan and
                  beyond, fostering sustainable
                  growth and long-term
                  partnerships with our
                  clients.
                </p>

              </div>

            </FadeUp>

          </div>

        </div>

      </section>
    </>
  );
}