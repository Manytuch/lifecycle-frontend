"use client";
import { useEffect, useState } from "react";
import { FileText, Truck, Warehouse, Handshake, Package, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = { FileText, Truck, Warehouse, Handshake, Package };
const imageMap = { "customs-clearance":"/images/customs.jpg","shipping-transportation":"/images/transport.jpg","warehousing":"/images/warehouse.jpg","brokerage-services":"/images/brokerage.jpg","general-supply":"/images/supply.jpg" };

function ServiceNumber({ n }) {
  return <span style={{ fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"4rem",fontWeight:700,lineHeight:1,color:"rgba(201,168,76,.16)",position:"absolute",top:14,right:18,userSelect:"none",pointerEvents:"none" }}>{String(n).padStart(2,"0")}</span>;
}

function FeaturedCard({ service }) {
  const Icon = iconMap[service.icon] || Package;
  const image = imageMap[service.slug] || "/images/default.jpg";
  return (
    <motion.a href={`/services/${service.slug}`} initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:.7}} viewport={{once:true}} className="featured-card group" style={{ display:"grid", textDecoration:"none", borderRadius:24, overflow:"hidden", boxShadow:"0 32px 80px rgba(11,22,40,.15)" }}>
      <div style={{ position:"relative", overflow:"hidden", minHeight:260 }}>
        <img src={image} alt={service.title} style={{ width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 1.1s ease",minHeight:260 }} className="featured-img" />
        <div style={{ position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(11,22,40,.45) 0%,transparent 70%)" }} />
        <span style={{ position:"absolute",top:22,left:22,background:"rgba(201,168,76,.92)",color:"#0b1628",fontSize:".65rem",fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",padding:"5px 12px",borderRadius:100 }}>Core Service</span>
      </div>
      <div style={{ background:"linear-gradient(135deg,#0b1628 0%,#132040 100%)",padding:"clamp(28px,5vw,52px) clamp(24px,4vw,48px)",display:"flex",flexDirection:"column",justifyContent:"center",position:"relative",overflow:"hidden" }}>
        <div aria-hidden style={{ position:"absolute",inset:0,opacity:.04,backgroundImage:"linear-gradient(rgba(201,168,76,1) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,1) 1px,transparent 1px)",backgroundSize:"44px 44px" }} />
        <ServiceNumber n={1} />
        <div style={{ width:48,height:48,borderRadius:12,background:"rgba(201,168,76,.12)",border:"1px solid rgba(201,168,76,.35)",display:"flex",alignItems:"center",justifyContent:"center",color:"#c9a84c",position:"relative" }}><Icon size={22} /></div>
        <h3 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.6rem,3vw,2.2rem)",fontWeight:700,color:"#fff",margin:"18px 0 14px",position:"relative",lineHeight:1.15 }}>{service.title}</h3>
        <div style={{ height:1,background:"linear-gradient(90deg,#c9a84c,transparent)",marginBottom:18 }} />
        <p style={{ color:"#94a3b8",lineHeight:1.8,fontSize:"clamp(.85rem,1.4vw,.98rem)",position:"relative" }}>{service.short_description}</p>
        <span style={{ marginTop:24,display:"inline-flex",alignItems:"center",gap:8,color:"#c9a84c",fontSize:".82rem",fontWeight:500,letterSpacing:".06em",textTransform:"uppercase",position:"relative" }}>
          Learn More <ArrowUpRight size={15} />
        </span>
      </div>
    </motion.a>
  );
}

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || Package;
  const image = imageMap[service.slug] || "/images/default.jpg";
  return (
    <motion.a href={`/services/${service.slug}`} initial={{opacity:0,y:48}} whileInView={{opacity:1,y:0}} transition={{duration:.6,delay:(index-1)*.1}} viewport={{once:true}} whileHover={{y:-5}} className="svc-card group" style={{ display:"flex",flexDirection:"column",borderRadius:20,overflow:"hidden",background:"#fff",boxShadow:"0 8px 32px rgba(11,22,40,.07)",textDecoration:"none",position:"relative",transition:"box-shadow .35s" }}>
      <div aria-hidden className="svc-card-border" style={{ position:"absolute",inset:0,borderRadius:20,border:"1.5px solid rgba(201,168,76,.5)",opacity:0,transition:"opacity .3s",pointerEvents:"none",zIndex:10 }} />
      <div style={{ position:"relative",overflow:"hidden",height:200 }}>
        <img src={image} alt={service.title} style={{ width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 1s ease" }} className="svc-img" />
        <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,rgba(11,22,40,.65) 0%,transparent 55%)" }} />
        <div style={{ position:"absolute",bottom:16,left:18,width:40,height:40,borderRadius:11,background:"rgba(11,22,40,.75)",backdropFilter:"blur(8px)",border:"1px solid rgba(201,168,76,.4)",display:"flex",alignItems:"center",justifyContent:"center",color:"#c9a84c" }}><Icon size={18} /></div>
      </div>
      <div style={{ padding:"24px 24px 28px",display:"flex",flexDirection:"column",flexGrow:1,position:"relative" }}>
        <ServiceNumber n={index+1} />
        <h3 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(1.2rem,2vw,1.55rem)",fontWeight:700,color:"#0b1628",marginBottom:10,lineHeight:1.2 }}>{service.title}</h3>
        <div style={{ height:1,background:"linear-gradient(90deg,#c9a84c,transparent)",marginBottom:12,opacity:.5 }} />
        <p style={{ color:"#64748b",lineHeight:1.75,fontSize:".88rem",flexGrow:1 }}>{service.short_description}</p>
        <span style={{ marginTop:18,display:"inline-flex",alignItems:"center",gap:6,color:"#0b1628",fontSize:".78rem",fontWeight:500,letterSpacing:".08em",textTransform:"uppercase" }}>
          Discover More <ArrowUpRight size={13} />
        </span>
      </div>
    </motion.a>
  );
}

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services`).then(r=>r.json()).then(data => {
      const sorted = [...data.data].sort((a,b) => a.slug==="customs-clearance"?-1:b.slug==="customs-clearance"?1:0);
      setServices(sorted);
    });
  }, []);
  const featured = services[0];
  const rest = services.slice(1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        :root{--navy:#0b1628;--navy2:#132040;--gold:#c9a84c;--gold2:#e8c87a;}
        .services-bg::before{content:'';position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");pointer-events:none;z-index:0;}
        .services-bg::after{content:'';position:absolute;top:0;left:0;right:0;height:320px;background:linear-gradient(135deg,var(--navy) 0%,var(--navy2) 100%);clip-path:polygon(0 0,100% 0,100% 75%,0 100%);z-index:0;}
        .diag-lines{position:absolute;inset:0;opacity:.055;background-image:repeating-linear-gradient(135deg,#c9a84c 0,#c9a84c 1px,transparent 1px,transparent 64px);clip-path:polygon(0 0,100% 0,100% 75%,0 100%);pointer-events:none;z-index:0;}
        .group:hover .svc-img{transform:scale(1.07);}
        .group:hover .svc-card-border{opacity:1!important;}
        .group:hover .featured-img{transform:scale(1.05);}
        /* featured card layout */
        .featured-card { grid-template-columns:1fr 1fr; }
        /* cards grid */
        .svc-cards-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
        /* ── mobile ── */
        @media(max-width:900px){
          .featured-card { grid-template-columns:1fr !important; }
          .svc-cards-grid { grid-template-columns:repeat(2,1fr) !important; }
        }
        @media(max-width:520px){
          .svc-cards-grid { grid-template-columns:1fr !important; }
          .services-bg::after { clip-path:polygon(0 0,100% 0,100% 85%,0 100%) !important; height:260px !important; }
        }
      `}</style>

      <section id="services" className="services-bg" style={{ font:"'DM Sans',sans-serif", background:"#faf8f3", paddingBottom:100, position:"relative", overflow:"hidden" }}>
        <div className="diag-lines" aria-hidden />

        <div style={{ position:"relative", maxWidth:1280, margin:"0 auto", padding:"88px 20px 0", zIndex:1 }}>

          {/* HEADER */}
          <motion.div initial={{opacity:0,y:32}} whileInView={{opacity:1,y:0}} transition={{duration:.7}} viewport={{once:true}} style={{ textAlign:"center", maxWidth:600, margin:"0 auto 64px" }}>
            <span style={{ display:"inline-block",fontSize:".68rem",fontWeight:500,letterSpacing:".26em",textTransform:"uppercase",color:"#c9a84c",border:"1px solid rgba(201,168,76,.5)",borderRadius:100,padding:"6px 18px",marginBottom:18 }}>What We Offer</span>
            <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(2.4rem,5vw,4.2rem)",fontWeight:600,color:"#fff",lineHeight:1.07,letterSpacing:"-0.02em",margin:"0 0 18px" }}>
              Our <em style={{ fontStyle:"italic",color:"#c9a84c" }}>Services</em>
            </h2>
            <p style={{ color:"#94a3b8",fontSize:"clamp(.88rem,1.5vw,1.02rem)",lineHeight:1.8 }}>Comprehensive logistics and trading solutions designed to move your business forward — efficiently, securely, and reliably.</p>
            <div style={{ height:1,width:64,margin:"20px auto 0",background:"linear-gradient(90deg,transparent,#c9a84c,transparent)" }} />
          </motion.div>

          {/* FEATURED */}
          {featured && (
            <div style={{ marginBottom:22 }}>
              <FeaturedCard service={featured} />
            </div>
          )}

          {/* REST */}
          <div className="svc-cards-grid">
            {rest.map((service,i) => <ServiceCard key={service.id} service={service} index={i+1} />)}
          </div>

        </div>
      </section>
    </>
  );
}