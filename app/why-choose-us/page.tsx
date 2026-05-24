"use client";

import {
  ShieldCheck,
  Truck,
  Clock,
  Users,
  CheckCircle2,
  Globe2,
  PackageCheck,
  FileCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: ShieldCheck, title: "Trusted & Compliant",  description: "We are known for integrity, transparency, and dependable service in customs clearance and logistics operations." },
  { icon: Truck,       title: "Reliable Logistics",   description: "Our transportation network guarantees safe and timely delivery across South Sudan." },
  { icon: Clock,       title: "Fast & Efficient",     description: "Our experienced team ensures timely clearance, transportation, and delivery without unnecessary delays." },
  { icon: Users,       title: "Experienced Team",     description: "Led by industry professionals with years of experience in freight forwarding, customs, and logistics management." },
];

const advantages = [
  { icon: Globe2,        title: "Strategic Presence",   description: "Located at Nimule Border Station and Juba International Airport to support efficient trade movement and logistics operations." },
  { icon: FileCheck,     title: "Customs Expertise",    description: "Strong understanding of customs procedures, documentation, and compliance requirements for seamless clearance." },
  { icon: PackageCheck,  title: "Secure Cargo Handling",description: "Professional cargo coordination and handling processes designed to protect client goods throughout transit." },
  { icon: CheckCircle2,  title: "Client-Centered",      description: "We prioritize reliability, communication, and tailored logistics support for every client and shipment." },
];

const SHARED_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');
  :root { --navy:#0b1628;--navy2:#132040;--gold:#c9a84c;--gold2:#e8c87a;--cream:#faf8f3; }
  .page-hero{position:relative;background:linear-gradient(135deg,var(--navy) 0%,var(--navy2) 100%);padding:140px 24px 100px;overflow:hidden;text-align:center;}
  .page-hero::after{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(135deg,#c9a84c 0,#c9a84c 1px,transparent 1px,transparent 68px);opacity:.05;pointer-events:none;}
  .g-card{background:#fff;border-radius:20px;border:1px solid rgba(11,22,40,.07);overflow:hidden;transition:border-color .3s,box-shadow .3s,transform .35s;position:relative;}
  .g-card:hover{border-color:rgba(201,168,76,.45);box-shadow:0 24px 64px rgba(11,22,40,.12);transform:translateY(-5px);}
  .g-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2.5px;background:linear-gradient(90deg,var(--gold),var(--gold2));transform:scaleX(0);transform-origin:left;transition:transform .4s ease;border-radius:20px 20px 0 0;}
  .g-card:hover::before{transform:scaleX(1);}
  .d-card{background:rgba(255,255,255,.04);border:1px solid rgba(201,168,76,.15);border-radius:20px;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);transition:background .3s,border-color .3s;}
  .d-card:hover{background:rgba(255,255,255,.08);border-color:rgba(201,168,76,.4);}
  .icon-gold{border-radius:14px;background:linear-gradient(135deg,var(--navy),var(--navy2));display:flex;align-items:center;justify-content:center;color:var(--gold);flex-shrink:0;transition:transform .3s;}
  .icon-gold-light{border-radius:14px;background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.28);display:flex;align-items:center;justify-content:center;color:var(--gold);flex-shrink:0;transition:transform .3s,background .3s;}
  .eyebrow{display:inline-block;font-family:'DM Sans',sans-serif;font-size:.7rem;font-weight:500;letter-spacing:.26em;text-transform:uppercase;color:var(--gold);border:1px solid rgba(201,168,76,.4);border-radius:100px;padding:6px 20px;}
  .g-rule{height:1px;background:linear-gradient(90deg,transparent,var(--gold),transparent);}
  .noise::after{content:'';position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");pointer-events:none;z-index:0;}
  .feat-row{display:flex;gap:20px;padding:20px 0;border-bottom:1px solid rgba(11,22,40,.06);}
  .feat-row:last-child{border-bottom:none;}
  .feat-row:hover .icon-gold{transform:rotate(3deg) scale(1.08);}
`;

const FU = ({ children, delay = 0, style = {}, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    style={style}
    className={className}
  >
    {children}
  </motion.div>
);

export default function WhyChooseUsPage() {
  return (
    <>
      <style>{SHARED_STYLES}</style>

      <main style={{ fontFamily: "'DM Sans',sans-serif", background: "var(--cream)", minHeight: "100vh" }}>

        {/* ══ HERO ══ */}
        <section className="page-hero noise">
          <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, background: "radial-gradient(ellipse,rgba(201,168,76,.07) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
          <div className="relative" style={{ maxWidth: 800, margin: "0 auto", zIndex: 1 }}>
            <FU>
              <span className="eyebrow">Why Choose Us</span>
              <h1 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(3rem,7vw,6rem)", fontWeight: 700, color: "#fff", lineHeight: 1.04, letterSpacing: "-0.02em", margin: "20px 0 0" }}>
                Trusted Logistics <em style={{ fontStyle: "italic", color: "var(--gold2)", display: "block" }}>Partner</em>
              </h1>
              <div className="g-rule" style={{ width: 72, margin: "24px auto" }} />
              <p style={{ color: "#94a3b8", fontSize: "clamp(1rem,1.8vw,1.2rem)", lineHeight: 1.8, margin: 0 }}>
                We combine operational efficiency, customs expertise, and dependable logistics solutions to support businesses and organisations across South Sudan.
              </p>
            </FU>
          </div>
        </section>

        {/* ══ MAIN FEATURES — image + list ══ */}
        <section style={{ padding: "100px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="why-split">

            {/* Image */}
            <FU>
              <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", boxShadow: "0 40px 100px rgba(11,22,40,.18)" }}>
                <img
                  src="/images/why-us.jpeg"
                  alt="Why Choose Us"
                  style={{ width: "100%", height: 690, objectFit: "cover", display: "block", transition: "transform 1.1s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "")}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(11,22,40,.5) 0%,transparent 50%)" }} />
                {/* floating badge */}
                <div style={{ position: "absolute", bottom: 28, left: 28, background: "rgba(11,22,40,.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,.35)", borderRadius: 14, padding: "14px 22px", color: "#fff" }}>
                  <p style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", margin: "0 0 4px" }}>Trusted Since</p>
                  <p style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "1.7rem", fontWeight: 700, lineHeight: 1, margin: 0 }}>2024</p>
                </div>
              </div>
            </FU>

            {/* Features list */}
            <FU delay={0.15}>
              <span className="eyebrow" style={{ marginBottom: 16, display: "inline-block" }}>Operational Strength</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 700, color: "var(--navy)", letterSpacing: "-0.02em", margin: "0 0 12px", lineHeight: 1.1 }}>
                Why Businesses <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Trust Us</em>
              </h2>
              <div className="g-rule" style={{ width: 60, marginBottom: 20 }} />
              <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.8, marginBottom: 32 }}>
                We deliver reliable logistics and trading solutions with a focus on efficiency, compliance, professionalism, and customer satisfaction.
              </p>

              <div>
                {features.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="feat-row">
                      <div className="icon-gold" style={{ width: 50, height: 50 }}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "1.25rem", fontWeight: 700, color: "var(--navy)", margin: "0 0 6px" }}>
                          {item.title}
                        </h3>
                        <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FU>

          </div>
        </section>

        {/* ══ OPERATIONAL ADVANTAGES — dark band ══ */}
        <section style={{ padding: "0 24px 120px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>

            <FU style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 64px" }}>
              <span className="eyebrow">Competitive Edge</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(2.2rem,4vw,3.4rem)", fontWeight: 700, color: "var(--navy)", letterSpacing: "-0.02em", margin: "16px 0" }}>
                Operational <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Advantages</em>
              </h2>
              <div className="g-rule" style={{ width: 60, margin: "0 auto 16px" }} />
              <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.8, margin: 0 }}>
                Our strategic approach ensures dependable service delivery and long-term client confidence.
              </p>
            </FU>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="adv-grid">
              {advantages.map((item, i) => {
                const Icon = item.icon;
                return (
                  <FU key={item.title} delay={i * 0.1}>
                    <div className="g-card" style={{ padding: "36px 28px", height: "100%" }}>
                      <span style={{ position: "absolute", top: 14, right: 18, fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "3.2rem", fontWeight: 700, color: "rgba(201,168,76,.1)", lineHeight: 1, userSelect: "none" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="icon-gold" style={{ width: 52, height: 52, marginBottom: 20 }}>
                        <Icon size={23} />
                      </div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "1.35rem", fontWeight: 700, color: "var(--navy)", margin: "0 0 12px", lineHeight: 1.2 }}>
                        {item.title}
                      </h3>
                      <div className="g-rule" style={{ width: 36, marginBottom: 12, opacity: .5 }} />
                      <p style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: 1.8, margin: 0 }}>
                        {item.description}
                      </p>
                    </div>
                  </FU>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      <style>{`
        @media(max-width:1024px){ .adv-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(max-width:768px) { .why-split{ grid-template-columns:1fr !important; gap:48px !important; } .adv-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(max-width:520px) { .adv-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </>
  );
}