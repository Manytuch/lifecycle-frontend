"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowUpRight, ChevronDown } from "lucide-react";

type Homepage = {
  hero_title: string;
  hero_subtitle: string;
  hero_images: any[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
};

export default function Hero() {
  const [homepage, setHomepage] = useState<Homepage | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/homepage?populate=hero_images`)
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
          0%, 100% { transform: scale(1.05); }
          50%       { transform: scale(1.12); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0);   opacity: 0.5; }
          50%       { transform: translateY(7px); opacity: 1;   }
        }

        /* Force Swiper & slides to fill the section */
        #hero-section { position: relative; width: 100%; height: 100vh; min-height: 600px; overflow: hidden; }
        #hero-section .swiper,
        #hero-section .swiper-wrapper,
        #hero-section .swiper-slide { width: 100% !important; height: 100% !important; position: absolute !important; top: 0; left: 0; }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          display: block;
          animation: heroZoom 22s ease-in-out infinite;
        }

        /* diagonal bottom cut leading into next section */
        #hero-section::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 70px;
          background: #faf8f3;
          clip-path: polygon(0 100%, 100% 0, 100% 100%);
          z-index: 6;
          pointer-events: none;
        }

        /* diagonal gold lines texture */
        .hero-diag {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background-image: repeating-linear-gradient(
            135deg,
            rgba(201,168,76,0.045) 0px, rgba(201,168,76,0.045) 1px,
            transparent 1px, transparent 72px
          );
        }

        /* scroll dot */
        .scroll-dot { animation: scrollBounce 1.9s ease-in-out infinite; }

        /* CTA buttons */
        .hero-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', sans-serif; font-size: 0.82rem;
          font-weight: 500; letter-spacing: 0.07em; text-transform: uppercase;
          color: #0b1628;
          background: linear-gradient(135deg, #c9a84c, #e8c87a);
          padding: 13px 26px; border-radius: 12px; text-decoration: none;
          transition: box-shadow 0.25s, transform 0.25s;
          box-shadow: 0 8px 28px rgba(201,168,76,0.4);
          white-space: nowrap;
        }
        .hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 16px 40px rgba(201,168,76,0.5); }

        .hero-btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', sans-serif; font-size: 0.82rem;
          font-weight: 500; letter-spacing: 0.07em; text-transform: uppercase;
          color: #ffffff;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.22);
          padding: 13px 26px; border-radius: 12px; text-decoration: none;
          transition: background 0.25s, border-color 0.25s;
          white-space: nowrap;
        }
        .hero-btn-secondary:hover { background: rgba(255,255,255,0.16); border-color: rgba(255,255,255,0.4); }

        /* stat chips */
        .hero-chip {
          display: flex; flex-direction: column; align-items: center;
          padding: 10px 18px; border-radius: 12px;
          background: rgba(11,22,40,0.55);
          backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(201,168,76,0.28);
        }

        /* mobile */
        @media (max-width: 600px) {
          .hero-btn-primary, .hero-btn-secondary { width: 100%; justify-content: center; }
          .hero-btns  { flex-direction: column !important; }
          .hero-chips { gap: 8px !important; }
          .hero-chip  { padding: 8px 12px !important; }
          #hero-section::after { height: 40px; }
        }
      `}</style>

      <section id="hero-section">

        {/* ── SLIDER ── */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {homepage.hero_images?.map((img: any) => (
            <SwiperSlide key={img.id}>
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}`}
                alt="Hero background"
                className="hero-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ── OVERLAYS ── */}
        {/* gradient darkening */}
        <div style={{ position:"absolute", inset:0, zIndex:1,
          background:"linear-gradient(to bottom, rgba(11,22,40,0.52) 0%, rgba(11,22,40,0.70) 55%, rgba(11,22,40,0.88) 100%)" }}
        />
        {/* left-side vignette */}
        <div style={{ position:"absolute", inset:0, zIndex:1,
          background:"radial-gradient(ellipse at 18% 55%, rgba(11,22,40,0.45) 0%, transparent 62%)" }}
        />
        {/* diagonal texture */}
        <div className="hero-diag" aria-hidden />

        {/* ── CONTENT ── */}
        <div style={{ position:"absolute", inset:0, zIndex:4,
          display:"flex", alignItems:"center",
          padding:"0 20px" }}
        >
          <div style={{ maxWidth:1280, margin:"0 auto", width:"100%", paddingTop:88 }}>

            <motion.div variants={container} initial="hidden" animate="show">

              {/* eyebrow */}
              <motion.div variants={fadeUp} style={{ marginBottom:22 }}>
                <span style={{
                  display:"inline-block",
                  fontFamily:"'DM Sans',sans-serif", fontSize:"0.68rem",
                  fontWeight:500, letterSpacing:"0.26em", textTransform:"uppercase",
                  color:"#c9a84c",
                  border:"1px solid rgba(201,168,76,0.45)",
                  borderRadius:100, padding:"6px 18px",
                }}>
                  Trusted Logistics Partner · South Sudan
                </span>
              </motion.div>

              {/* title */}
              <motion.h1
                variants={fadeUp}
                style={{
                  fontFamily:"'Cormorant Garamond',Georgia,serif",
                  fontSize:"clamp(2.6rem, 7vw, 6.2rem)",
                  fontWeight:700, lineHeight:1.03,
                  letterSpacing:"-0.025em",
                  color:"#ffffff",
                  margin:0,
                  maxWidth:840,
                }}
              >
                {titleParts[0]}
                <em style={{ fontStyle:"italic", color:"#e8c87a", display:"block" }}>
                  South Sudan
                </em>
                {titleParts[1]}
              </motion.h1>

              {/* gold rule */}
              <motion.div
                variants={fadeUp}
                style={{ height:1, width:80,
                  background:"linear-gradient(90deg,#c9a84c,transparent)",
                  margin:"20px 0" }}
              />

              {/* typing subtitle */}
              <motion.p
                variants={fadeUp}
                style={{
                  fontFamily:"'DM Sans',sans-serif",
                  fontSize:"clamp(0.95rem, 1.6vw, 1.18rem)",
                  color:"rgba(255,255,255,0.72)",
                  lineHeight:1.75,
                  maxWidth:500,
                  margin:0,
                  minHeight:"3.5em",
                }}
              >
                <TypeAnimation
                  sequence={[
                    homepage.hero_subtitle, 2400,
                    "Fast, reliable and professional logistics services.", 2400,
                    "Customs clearance you can always trust.", 2400,
                  ]}
                  speed={55}
                  repeat={Infinity}
                />
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                variants={fadeUp}
                className="hero-btns"
                style={{ display:"flex", gap:12, flexWrap:"wrap", marginTop:28 }}
              >
                <a href="#contact" className="hero-btn-primary">
                  Request a Quotation <ArrowUpRight size={14} />
                </a>
                <a href="#services" className="hero-btn-secondary">
                  Explore Services
                </a>
              </motion.div>

              {/* stat chips */}
              <motion.div
                variants={fadeUp}
                className="hero-chips"
                style={{ display:"flex", gap:10, flexWrap:"wrap", marginTop:40 }}
              >
                {[
                  { value:"2024",  label:"Founded"         },
                  { value:"7+",    label:"Yrs Experience"  },
                  { value:"2",     label:"Border Hubs"     },
                  { value:"100%",  label:"Committed"       },
                ].map(({ value, label }) => (
                  <div key={label} className="hero-chip">
                    <span style={{ fontFamily:"'Cormorant Garamond',Georgia,serif",
                      fontSize:"1.35rem", fontWeight:700, color:"#e8c87a", lineHeight:1 }}>
                      {value}
                    </span>
                    <span style={{ fontFamily:"'DM Sans',sans-serif",
                      fontSize:"0.58rem", letterSpacing:"0.13em",
                      textTransform:"uppercase", color:"rgba(255,255,255,0.48)",
                      marginTop:4, textAlign:"center" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* ── SCROLL INDICATOR ── */}
        <div style={{ position:"absolute", bottom:90, left:"50%",
          transform:"translateX(-50%)", zIndex:5,
          display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
          <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.58rem",
            letterSpacing:"0.22em", textTransform:"uppercase",
            color:"rgba(255,255,255,0.38)" }}>
            Scroll
          </span>
          <ChevronDown size={17} className="scroll-dot" style={{ color:"rgba(201,168,76,0.65)" }} />
        </div>

      </section>
    </>
  );
}