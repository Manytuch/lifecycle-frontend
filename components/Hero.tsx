"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowUpRight, ChevronDown } from "lucide-react";

type Homepage = {
  hero_title: string;
  hero_subtitle: string;
  hero_images: any[];
};

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  const [homepage, setHomepage] = useState<Homepage | null>(null);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/homepage?populate=hero_images`
    )
      .then((r) => r.json())
      .then((d) => setHomepage(d.data));
  }, []);

  if (!homepage) return null;

  const titleParts = homepage.hero_title.split("South Sudan");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes heroZoom {
          0%, 100% {
            transform: scale(1.04);
          }

          50% {
            transform: scale(1.09);
          }
        }

        @keyframes scrollBounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }

          50% {
            transform: translateY(6px);
            opacity: 1;
          }
        }

        #hero-root {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 580px;
          overflow: hidden;
          background: #0b1628;
        }

        #hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        #hero-bg .swiper {
          width: 100%;
          height: 100%;
        }

        #hero-bg .swiper-wrapper {
          width: 100%;
          height: 100%;
        }

        #hero-bg .swiper-slide {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          display: block;
          animation: heroZoom 22s ease-in-out infinite;
        }

        #hero-root::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 56px;
          background: #faf8f3;
          clip-path: polygon(0 100%,100% 0,100% 100%);
          z-index: 8;
          pointer-events: none;
        }

        .hero-diag {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;

          background-image:
            repeating-linear-gradient(
              135deg,
              rgba(201,168,76,.04) 0px,
              rgba(201,168,76,.04) 1px,
              transparent 1px,
              transparent 72px
            );
        }

        .hbtn-primary {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          font-family: 'DM Sans', sans-serif;
          font-size: .78rem;
          font-weight: 500;
          letter-spacing: .08em;
          text-transform: uppercase;

          color: #0b1628;

          background:
            linear-gradient(
              135deg,
              #c9a84c,
              #e8c87a
            );

          padding: 11px 24px;
          border-radius: 11px;
          text-decoration: none;

          transition:
            box-shadow .25s,
            transform .25s;

          box-shadow:
            0 6px 22px rgba(201,168,76,.38);

          white-space: nowrap;
        }

        .hbtn-primary:hover {
          transform: translateY(-2px);

          box-shadow:
            0 12px 32px rgba(201,168,76,.48);
        }

        .hbtn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          font-family: 'DM Sans', sans-serif;
          font-size: .78rem;
          font-weight: 500;
          letter-spacing: .08em;
          text-transform: uppercase;

          color: #fff;

          background: rgba(255,255,255,.09);

          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);

          border: 1px solid rgba(255,255,255,.22);

          padding: 11px 24px;
          border-radius: 11px;
          text-decoration: none;

          transition:
            background .25s,
            border-color .25s;

          white-space: nowrap;
        }

        .hbtn-secondary:hover {
          background: rgba(255,255,255,.16);
          border-color: rgba(255,255,255,.4);
        }

        .hero-chip {
          display: flex;
          flex-direction: column;
          align-items: center;

          padding: 7px 15px;
          border-radius: 10px;

          background: rgba(11,22,40,.55);

          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          border: 1px solid rgba(201,168,76,.26);
        }

        .scroll-dot {
          animation: scrollBounce 1.9s ease-in-out infinite;
        }

        @media (max-width:600px) {

          .hbtn-primary,
          .hbtn-secondary {
            width: 100%;
            justify-content: center;
          }

          .hero-btns {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
          }

          .hero-chips {
            gap: 7px !important;
          }

          .scroll-hint {
            display: none !important;
          }

          #hero-root::after {
            height: 32px;
          }
        }

        @media (max-height:700px) {

          .hero-chips {
            display: none !important;
          }

        }
      `}</style>

      <section id="hero-root">

        {/* SLIDER */}
        <div id="hero-bg">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop
            speed={900}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >

            {homepage.hero_images?.map((img: any) => (
              <SwiperSlide key={img.id}>
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}`}
                  alt=""
                  className="hero-img"
                />
              </SwiperSlide>
            ))}

          </Swiper>
        </div>

        {/* OVERLAYS */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,

            background:
              "linear-gradient(to bottom,rgba(11,22,40,.50) 0%,rgba(11,22,40,.68) 55%,rgba(11,22,40,.88) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,

            background:
              "radial-gradient(ellipse at 50% 40%,rgba(11,22,40,.3) 0%,transparent 65%)",
          }}
        />

        <div className="hero-diag" aria-hidden />

        {/* CONTENT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 5,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            padding: "72px 20px 0",
          }}
        >

          <div
            style={{
              maxWidth: 760,
              width: "100%",
            }}
          >

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >

              {/* EYEBROW */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                style={{
                  marginBottom: 14,
                }}
              >

                <span
                  style={{
                    display: "inline-block",

                    fontFamily:
                      "'DM Sans',sans-serif",

                    fontSize: ".64rem",
                    fontWeight: 500,

                    letterSpacing: ".26em",
                    textTransform: "uppercase",

                    color: "#c9a84c",

                    border:
                      "1px solid rgba(201,168,76,.44)",

                    borderRadius: 100,

                    padding: "5px 14px",
                  }}
                >
                  Trusted Logistics Partner · South Sudan
                </span>

              </motion.div>

              {/* TITLE */}
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                style={{
                  fontFamily:
                    "'Cormorant Garamond',Georgia,serif",

                  fontSize:
                    "clamp(2rem, 5.2vw, 4.4rem)",

                  fontWeight: 700,
                  lineHeight: 1.06,

                  letterSpacing: "-0.02em",

                  color: "#fff",

                  margin: 0,
                  textAlign: "center",
                }}
              >

                {titleParts[0]}

                <em
                  style={{
                    fontStyle: "italic",
                    color: "#e8c87a",
                    display: "block",
                  }}
                >
                  South Sudan
                </em>

                {titleParts[1]}

              </motion.h1>

              {/* GOLD RULE */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                style={{
                  height: 1,
                  width: 64,

                  background:
                    "linear-gradient(90deg,transparent,#c9a84c,transparent)",

                  margin: "14px auto",
                }}
              />

              {/* SUBTITLE */}
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                style={{
                  fontFamily:
                    "'DM Sans',sans-serif",

                  fontSize:
                    "clamp(.85rem,1.4vw,1.02rem)",

                  color:
                    "rgba(255,255,255,.68)",

                  lineHeight: 1.7,

                  maxWidth: 460,

                  margin: "0 auto",

                  minHeight: "2.6em",

                  textAlign: "center",
                }}
              >

                <TypeAnimation
                  sequence={[
                    homepage.hero_subtitle,
                    2400,

                    "Fast, reliable and professional logistics services.",
                    2400,

                    "Customs clearance you can always trust.",
                    2400,
                  ]}
                  speed={55}
                  repeat={Infinity}
                />

              </motion.p>

              {/* BUTTONS */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="hero-btns"
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",

                  justifyContent: "center",
                  alignItems: "center",

                  marginTop: 20,
                }}
              >

                <a
                  href="#contact"
                  className="hbtn-primary"
                >
                  Request a Quotation
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href="#services"
                  className="hbtn-secondary"
                >
                  Explore Services
                </a>

              </motion.div>

              {/* CHIPS */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="hero-chips"
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",

                  justifyContent: "center",

                  marginTop: 22,
                }}
              >

                {[
                  {
                    value: "Reliable",
                    label: "Services",
                  },
                  {
                    value: "Experienced",
                    label: "Professionals",
                  },
                  {
                    value: "2",
                    label: "Border Hubs",
                  },
                  {
                    value: "100%",
                    label: "Committed",
                  },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="hero-chip"
                  >

                    <span
                      style={{
                        fontFamily:
                          "'Cormorant Garamond',Georgia,serif",

                        fontSize: "1.2rem",
                        fontWeight: 700,

                        color: "#e8c87a",

                        lineHeight: 1,
                      }}
                    >
                      {value}
                    </span>

                    <span
                      style={{
                        fontFamily:
                          "'DM Sans',sans-serif",

                        fontSize: ".54rem",

                        letterSpacing: ".12em",

                        textTransform: "uppercase",

                        color:
                          "rgba(255,255,255,.44)",

                        marginTop: 3,

                        textAlign: "center",
                      }}
                    >
                      {label}
                    </span>

                  </div>
                ))}

              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* SCROLL */}
        <div
          className="scroll-hint"
          style={{
            position: "absolute",
            bottom: 72,
            left: "50%",

            transform: "translateX(-50%)",

            zIndex: 6,

            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            gap: 5,
          }}
        >

          <span
            style={{
              fontFamily:
                "'DM Sans',sans-serif",

              fontSize: ".54rem",

              letterSpacing: ".22em",

              textTransform: "uppercase",

              color:
                "rgba(255,255,255,.34)",
            }}
          >
            Scroll
          </span>

          <ChevronDown
            size={16}
            className="scroll-dot"
            style={{
              color:
                "rgba(201,168,76,.58)",
            }}
          />

        </div>

      </section>
    </>
  );
}