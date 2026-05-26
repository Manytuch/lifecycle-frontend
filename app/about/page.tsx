"use client";
import { useEffect, useRef, useState } from "react";
import { Building2, Target, Eye, ArrowRight } from "lucide-react";

function useInView(
  threshold = 0.15
) {
  const ref =
    useRef<HTMLDivElement | null>(
      null
    );

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const obs =
      new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        },
        { threshold }
      );

    obs.observe(el);

    return () =>
      obs.disconnect();
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
  const [count, setCount] =
    useState(0);

  const [ref, visible] =
    useInView();

  useEffect(() => {
    if (!visible) return;

    let start = 0;

    const step = Math.ceil(
      end / 50
    );

    const id = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(id);
      } else {
        setCount(start);
      }
    }, 28);

    return () =>
      clearInterval(id);
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
  const [ref, visible] =
    useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,

        transform: visible
          ? "translateY(0)"
          : "translateY(36px)",

        transition:
          `opacity .75s ease ${delay}ms,transform .75s ease ${delay}ms`,
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
        .about-root { --navy:#0b1628;--navy2:#132040;--gold:#c9a84c;--gold2:#e8c87a;--cream:#faf8f3; font-family:'DM Sans',sans-serif; }
        .glint-card { position:relative;background:#fff;border-radius:20px;overflow:hidden; }
        .glint-card::before { content:'';position:absolute;inset:0;border-radius:20px;padding:1.5px;background:linear-gradient(135deg,#c9a84c 0%,transparent 50%,#c9a84c 100%);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.6;transition:opacity .3s; }
        .glint-card:hover::before { opacity:1; }
        .hr-fade { height:1px;background:linear-gradient(90deg,transparent,var(--gold),transparent);border:none; }
        .stat-pill { background:linear-gradient(135deg,var(--navy) 0%,var(--navy2) 100%);border:1px solid rgba(201,168,76,.25);border-radius:16px;padding:20px 16px;color:white;transition:transform .3s,box-shadow .3s; }
        .stat-pill:hover { transform:translateY(-4px);box-shadow:0 20px 40px rgba(11,22,40,.2); }
        .img-wrap img { transition:transform 1.1s ease; }
        .img-wrap:hover img { transform:scale(1.04); }
        .ping-dot::after { content:'';position:absolute;inset:0;border-radius:50%;background:var(--gold);animation:ping 1.8s ease-out infinite; }
        @keyframes ping { 0%{transform:scale(1);opacity:.9;} 100%{transform:scale(2.4);opacity:0;} }
        .about-root::after { content:'';position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;z-index:1; }

        /* ── mobile ── */
        @media(max-width:768px){
          .about-overview-grid { grid-template-columns:1fr !important; }
          .about-mv-grid { grid-template-columns:1fr !important; }
          .about-stats-grid { grid-template-columns:repeat(2,1fr) !important; gap:10px !important; }
          .about-hero-band { padding:72px 20px 64px !important; }
          .about-card-inner { padding:28px 20px !important; }
          .about-overview-content { padding:0 !important; }
        }
        @media(max-width:480px){
          .about-stats-grid { grid-template-columns:repeat(2,1fr) !important; }
        }
      `}</style>

      <section id="about" className="about-root" style={{ position:"relative", background:"var(--cream)", overflow:"hidden" }}>

        {/* HERO STRIP */}
        <div className="about-hero-band" style={{ position:"relative", zIndex:10, background:"linear-gradient(135deg,var(--navy) 0%,var(--navy2) 100%)", padding:"96px 24px 80px" }}>
          <div aria-hidden style={{ position:"absolute",inset:0,opacity:.07,backgroundImage:"repeating-linear-gradient(135deg,#c9a84c 0,#c9a84c 1px,transparent 1px,transparent 60px)" }} />

          <div style={{ position:"relative", maxWidth:900, margin:"0 auto", textAlign:"center", zIndex:1 }}>
            <FadeUp>
              <span style={{ display:"inline-block", fontSize:".68rem", fontWeight:500, letterSpacing:".24em", textTransform:"uppercase", color:"var(--gold)", border:"1px solid rgba(201,168,76,.4)", borderRadius:100, padding:"6px 18px" }}>About Us</span>
            </FadeUp>
            <FadeUp delay={120}>
              <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(2.4rem,6vw,5.5rem)", fontWeight:600, lineHeight:1.08, color:"#fff", letterSpacing:"-0.02em", margin:"16px 0 0" }}>
                Who We <em style={{ color:"var(--gold)", fontStyle:"italic" }}>Are</em>
              </h2>
            </FadeUp>
            <FadeUp delay={200}><hr className="hr-fade" style={{ width:72, margin:"20px auto 0", border:"none" }} /></FadeUp>

            {/* STATS */}
            <div className="about-stats-grid" style={{ marginTop:40, display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14 }}>
              {[{ value:2024,suffix:"",label:"Founded"},{ value:7,suffix:"+",label:"Years Experience"},{ value:100,suffix:"%",label:"Excellence"},{ value:2,suffix:"",label:"Border Hubs"}].map(({ value,suffix,label },i) => (
                <FadeUp key={label} delay={280 + i*80}>
                  <div className="stat-pill" style={{ textAlign:"center" }}>
                    <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(1.8rem,3vw,2.6rem)", fontWeight:700, color:"var(--gold2)", lineHeight:1, margin:0 }}>
                      <Counter end={value} suffix={suffix} />
                    </p>
                    <p style={{ fontSize:".68rem", color:"rgba(255,255,255,.55)", marginTop:6, letterSpacing:".06em", textTransform:"uppercase" }}>{label}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* STORY CARD */}
        <div style={{ position:"relative", zIndex:10, maxWidth:900, margin:"-36px auto 0", padding:"0 20px" }}>
          <FadeUp>
            <div className="glint-card about-card-inner" style={{ padding:"clamp(28px,5vw,64px)", boxShadow:"0 32px 80px rgba(11,22,40,.12)" }}>
              <div style={{ position:"absolute",top:48,left:0,width:4,height:64,background:"linear-gradient(180deg,var(--gold),transparent)",borderRadius:"0 4px 4px 0" }} />
              <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(1rem,2vw,1.5rem)", lineHeight:1.85, color:"#1e293b", fontWeight:400 }}>
                <span style={{ fontWeight:600 }}>Established in 2024,</span> Life Cycle General Trading Company Limited has quickly become a trusted leader in logistics and trading solutions at the Nimule Border Station and Juba International Airport. Under the leadership of{" "}
                <span style={{ color:"var(--navy)", fontWeight:600, fontStyle:"italic" }}>Mr. Silas Majok Achirin,</span>{" "}
                an industry expert with over seven years of experience in freight forwarding and customs, the company is dedicated to providing exceptional services and building lasting client relationships.
              </p>
              <hr className="hr-fade" style={{ margin:"24px 0" }} />
              <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(1rem,2vw,1.5rem)", lineHeight:1.85, color:"#334155", fontWeight:400 }}>
                His vision has driven the company to deliver efficient and reliable solutions tailored to the diverse needs of businesses — spanning customs clearance, shipping, transportation, warehousing, brokerage, and general supply. With a focus on innovation and reliability, we ensure the seamless movement of goods and support business success across South Sudan.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* OVERVIEW */}
        <div style={{ position:"relative", zIndex:10, maxWidth:1280, margin:"80px auto 0", padding:"0 20px" }}>
          <div className="about-overview-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"center" }}>

            <FadeUp>
              <div className="img-wrap" style={{ borderRadius:24, overflow:"hidden", boxShadow:"0 40px 100px rgba(11,22,40,.18)" }}>
                <img src="/images/about-company.jpg" alt="About Company" style={{ width:"100%", height:"clamp(300px,40vw,500px)", objectFit:"cover", display:"block" }} />
                <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,rgba(11,22,40,.55) 0%,transparent 50%)" }} />
              </div>
            </FadeUp>

            <FadeUp delay={160} className="about-overview-content">
              <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:24 }}>
                <div style={{ width:48,height:48,borderRadius:14,background:"linear-gradient(135deg,var(--navy),var(--navy2))",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--gold)",flexShrink:0 }}>
                  <Building2 size={22} />
                </div>
                <div>
                  <p style={{ fontSize:".68rem",letterSpacing:".18em",textTransform:"uppercase",color:"var(--gold)",margin:0 }}>Company Overview</p>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.6rem,3vw,2rem)",fontWeight:700,color:"var(--navy)",margin:0 }}>The Organization</h3>
                </div>
              </div>
              {["Life Cycle General Trading Company Limited operates as a dynamic logistics and trading organization focused on providing dependable customs clearance, freight forwarding, transportation, warehousing, brokerage, and supply chain support services.",
                "Our experienced team combines industry knowledge, operational efficiency, and customer-focused service to ensure smooth and reliable movement of goods across borders and within South Sudan.",
                "We continuously invest in professional service delivery, compliance, and strategic logistics partnerships to support businesses, organizations, and institutions with tailored supply chain solutions."].map((text,i) => (
                <p key={i} style={{ color:"#475569",lineHeight:1.8,fontSize:"clamp(.9rem,1.5vw,1.02rem)",paddingLeft:16,borderLeft:"2px solid",borderImage:i===0?"linear-gradient(180deg,var(--gold),rgba(201,168,76,.2)) 1":"linear-gradient(180deg,rgba(201,168,76,.2),transparent) 1",marginBottom:16 }}>{text}</p>
              ))}
              <a href="#services" style={{ display:"inline-flex",alignItems:"center",gap:10,marginTop:24,background:"linear-gradient(135deg,var(--navy),var(--navy2))",color:"var(--gold2)",padding:"12px 24px",borderRadius:12,fontSize:".88rem",fontWeight:500,letterSpacing:".04em",textDecoration:"none",boxShadow:"0 8px 30px rgba(11,22,40,.2)" }}>
                Explore Our Services <ArrowRight size={15} />
              </a>
            </FadeUp>
          </div>
        </div>

        {/* MISSION & VISION */}
        <div style={{ position:"relative", zIndex:10, maxWidth:1100, margin:"80px auto 0", padding:"0 20px 100px" }}>
          <FadeUp style={{ textAlign:"center", marginBottom:48 }}>
            <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:14 }}>
              <span className="ping-dot" style={{ width:8,height:8,borderRadius:"50%",background:"var(--gold)",display:"inline-block",position:"relative" }} />
              <span style={{ fontSize:".68rem",letterSpacing:".24em",textTransform:"uppercase",color:"var(--gold)",fontWeight:500 }}>Core Principles</span>
              <span style={{ width:8,height:8,borderRadius:"50%",background:"var(--gold)",display:"inline-block" }} />
            </div>
            <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.8rem,4vw,3.2rem)",fontWeight:600,color:"var(--navy)",margin:"12px 0 0",letterSpacing:"-0.02em" }}>
              Mission &amp; Vision
            </h2>
          </FadeUp>

          <div className="about-mv-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
            <FadeUp delay={80}>
              <div className="glint-card" style={{ padding:"clamp(28px,4vw,48px)", boxShadow:"0 20px 60px rgba(11,22,40,.08)", height:"100%" }}>
                <div style={{ width:52,height:52,borderRadius:14,background:"linear-gradient(135deg,var(--navy),var(--navy2))",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--gold)" }}><Target size={24} /></div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.5rem,2.5vw,1.9rem)",fontWeight:700,color:"var(--navy)",margin:"20px 0 14px" }}>Our Mission</h3>
                <hr className="hr-fade" style={{ marginBottom:18 }} />
                <p style={{ color:"#475569",lineHeight:1.85,fontSize:"clamp(.88rem,1.5vw,1rem)" }}>To deliver exceptional services in customs clearance, transportation, warehousing, brokerage, and general supply by prioritizing efficiency, integrity, and customer satisfaction. We are committed to simplifying trade processes and supporting businesses with tailored solutions that drive success and growth.</p>
              </div>
            </FadeUp>

            <FadeUp delay={180}>
              <div style={{ background:"linear-gradient(135deg,var(--navy) 0%,var(--navy2) 100%)", borderRadius:20, padding:"clamp(28px,4vw,48px)", boxShadow:"0 20px 60px rgba(11,22,40,.18)", height:"100%", position:"relative", overflow:"hidden" }}>
                <div aria-hidden style={{ position:"absolute",inset:0,opacity:.05,backgroundImage:"linear-gradient(var(--gold) 1px,transparent 1px),linear-gradient(90deg,var(--gold) 1px,transparent 1px)",backgroundSize:"40px 40px" }} />
                <div style={{ width:52,height:52,borderRadius:14,background:"rgba(201,168,76,.15)",border:"1px solid rgba(201,168,76,.4)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--gold)",position:"relative" }}><Eye size={24} /></div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.5rem,2.5vw,1.9rem)",fontWeight:700,color:"#fff",margin:"20px 0 14px",position:"relative" }}>Our Vision</h3>
                <hr className="hr-fade" style={{ marginBottom:18,opacity:.4 }} />
                <p style={{ color:"rgba(255,255,255,.65)",lineHeight:1.85,fontSize:"clamp(.88rem,1.5vw,1rem)",position:"relative" }}>To become the leading provider of innovative and reliable logistics, customs clearance, and trading solutions in South Sudan and beyond, fostering sustainable growth and long-term partnerships with our clients.</p>
              </div>
            </FadeUp>
          </div>
        </div>

      </section>
    </>
  );
}