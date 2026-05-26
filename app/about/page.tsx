"use client";

import React, { useEffect, useRef, useState } from "react";
import { Building2, Target, Eye, ArrowRight } from "lucide-react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
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

function Counter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView();

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

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(36px)",
        transition: `opacity .75s ease ${delay}ms, transform .75s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .about-root {
          --navy:#0b1628;
          --navy2:#132040;
          --gold:#c9a84c;
          --gold2:#e8c87a;
          --cream:#faf8f3;
          font-family:'DM Sans',sans-serif;
        }

        .glint-card {
          position:relative;
          background:#fff;
          border-radius:20px;
          overflow:hidden;
        }

        .glint-card::before {
          content:'';
          position:absolute;
          inset:0;
          border-radius:20px;
          padding:1.5px;
          background:linear-gradient(
            135deg,
            #c9a84c 0%,
            transparent 50%,
            #c9a84c 100%
          );

          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);

          -webkit-mask-composite:xor;
          mask-composite:exclude;

          opacity:.6;
          transition:opacity .3s;
        }

        .glint-card:hover::before {
          opacity:1;
        }

        .hr-fade {
          height:1px;
          background:linear-gradient(
            90deg,
            transparent,
            var(--gold),
            transparent
          );
          border:none;
        }

        .stat-pill {
          background:linear-gradient(
            135deg,
            var(--navy) 0%,
            var(--navy2) 100%
          );

          border:1px solid rgba(201,168,76,.25);
          border-radius:16px;
          padding:20px 16px;
          color:white;

          transition:
            transform .3s,
            box-shadow .3s;
        }

        .stat-pill:hover {
          transform:translateY(-4px);
          box-shadow:0 20px 40px rgba(11,22,40,.2);
        }

        .img-wrap img {
          transition:transform 1.1s ease;
        }

        .img-wrap:hover img {
          transform:scale(1.04);
        }

        .ping-dot::after {
          content:'';
          position:absolute;
          inset:0;
          border-radius:50%;
          background:var(--gold);
          animation:ping 1.8s ease-out infinite;
        }

        @keyframes ping {
          0% {
            transform:scale(1);
            opacity:.9;
          }

          100% {
            transform:scale(2.4);
            opacity:0;
          }
        }

        .about-root::after {
          content:'';
          position:absolute;
          inset:0;

          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");

          pointer-events:none;
          z-index:1;
        }

        @media(max-width:768px) {

          .about-overview-grid {
            grid-template-columns:1fr !important;
          }

          .about-mv-grid {
            grid-template-columns:1fr !important;
          }

          .about-stats-grid {
            grid-template-columns:repeat(2,1fr) !important;
            gap:10px !important;
          }

          .about-hero-band {
            padding:72px 20px 64px !important;
          }

          .about-card-inner {
            padding:28px 20px !important;
          }

          .about-overview-content {
            padding:0 !important;
          }
        }

        @media(max-width:480px) {

          .about-stats-grid {
            grid-template-columns:repeat(2,1fr) !important;
          }

        }
      `}</style>

      <section
        id="about"
        className="about-root"
        style={{
          position: "relative",
          background: "var(--cream)",
          overflow: "hidden",
        }}
      >

        {/* HERO STRIP */}
        <div
          className="about-hero-band"
          style={{
            position: "relative",
            zIndex: 10,
            background:
              "linear-gradient(135deg,var(--navy) 0%,var(--navy2) 100%)",
            padding: "96px 24px 80px",
          }}
        >

          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.07,
              backgroundImage:
                "repeating-linear-gradient(135deg,#c9a84c 0,#c9a84c 1px,transparent 1px,transparent 60px)",
            }}
          />

          <div
            style={{
              position: "relative",
              maxWidth: 900,
              margin: "0 auto",
              textAlign: "center",
              zIndex: 1,
            }}
          >

            <FadeUp>
              <span
                style={{
                  display: "inline-block",
                  fontSize: ".68rem",
                  fontWeight: 500,
                  letterSpacing: ".24em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  border: "1px solid rgba(201,168,76,.4)",
                  borderRadius: 100,
                  padding: "6px 18px",
                }}
              >
                About Us
              </span>
            </FadeUp>

            <FadeUp delay={120}>
              <h2
                style={{
                  fontFamily:
                    "'Cormorant Garamond',Georgia,serif",
                  fontSize:
                    "clamp(2.4rem,6vw,5.5rem)",
                  fontWeight: 600,
                  lineHeight: 1.08,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  margin: "16px 0 0",
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
                className="hr-fade"
                style={{
                  width: 72,
                  margin: "20px auto 0",
                  border: "none",
                }}
              />
            </FadeUp>

            {/* STATS */}
            <div
              className="about-stats-grid"
              style={{
                marginTop: 40,
                display: "grid",
                gridTemplateColumns:
                  "repeat(4,1fr)",
                gap: 14,
              }}
            >

              {[
                {
                  value: 2024,
                  suffix: "",
                  label: "Founded",
                },
                {
                  value: 7,
                  suffix: "+",
                  label: "Years Experience",
                },
                {
                  value: 100,
                  suffix: "%",
                  label: "Excellence",
                },
                {
                  value: 2,
                  suffix: "",
                  label: "Border Hubs",
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
                    <div
                      className="stat-pill"
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          fontFamily:
                            "'Cormorant Garamond',Georgia,serif",
                          fontSize:
                            "clamp(1.8rem,3vw,2.6rem)",
                          fontWeight: 700,
                          color: "var(--gold2)",
                          lineHeight: 1,
                          margin: 0,
                        }}
                      >
                        <Counter
                          end={value}
                          suffix={suffix}
                        />
                      </p>

                      <p
                        style={{
                          fontSize: ".68rem",
                          color:
                            "rgba(255,255,255,.55)",
                          marginTop: 6,
                          letterSpacing: ".06em",
                          textTransform: "uppercase",
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
      </section>
    </>
  );
}