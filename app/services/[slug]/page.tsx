import { notFound } from "next/navigation";
import {
  Truck,
  Warehouse,
  FileText,
  Handshake,
  Package,
  CheckCircle,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react";

const services: any = {
  "customs-clearance": {
    title: "Customs Clearance",
    image: "/images/customs.jpg",
    icon: FileText,
    tag: "Border & Airport",
    heroText:
      "Fast and compliant customs solutions for smooth import and export operations across South Sudan.",
    description:
      "We provide fast, compliant, and reliable customs clearance services at Nimule Border Station and Juba International Airport, ensuring your cargo moves without unnecessary delays.",
    details: [
      "Import & export documentation",
      "Customs compliance and regulation handling",
      "Duty and tax processing",
      "Coordination with customs authorities",
    ],
  },

  "shipping-transportation": {
    title: "Shipping & Transportation",
    image: "/images/transport.jpg",
    icon: Truck,
    tag: "Freight & Logistics",
    heroText:
      "Reliable freight transportation services connecting businesses safely and efficiently.",
    description:
      "Reliable local and cross-border transportation solutions ensuring timely and secure delivery of goods across South Sudan and the wider region.",
    details: [
      "Local and regional transportation",
      "Cargo handling and coordination",
      "Secure movement of goods",
      "On-time delivery assurance",
    ],
  },

  warehousing: {
    title: "Warehousing",
    image: "/images/warehouse.jpg",
    icon: Warehouse,
    tag: "Storage & Inventory",
    heroText:
      "Secure warehousing facilities designed for efficient storage and inventory management.",
    description:
      "Safe and strategic warehousing solutions designed to protect and manage your goods efficiently, with flexible short and long-term options available.",
    details: [
      "Short-term and long-term storage",
      "Secure, monitored facilities",
      "Inventory management",
      "Flexible storage solutions",
    ],
  },

  "brokerage-services": {
    title: "Brokerage Services",
    image: "/images/brokerage.jpg",
    icon: Handshake,
    tag: "Trade & Documentation",
    heroText:
      "Professional brokerage support that simplifies logistics and trade operations.",
    description:
      "Professional brokerage services that simplify trade documentation and logistics processes, reducing risk and ensuring regulatory compliance at every step.",
    details: [
      "Trade documentation",
      "Regulatory compliance support",
      "Process coordination",
      "Risk reduction",
    ],
  },

  "general-supply": {
    title: "General Supply",
    image: "/images/supply.jpg",
    icon: Package,
    tag: "Procurement & Supply",
    heroText:
      "Efficient sourcing and supply solutions tailored to organisations and businesses.",
    description:
      "Efficient supply of goods and materials tailored to business and organisational needs, with a focus on reliability, cost-effectiveness, and timely delivery.",
    details: [
      "Procurement support",
      "Reliable sourcing",
      "Timely delivery",
      "Cost-effective solutions",
    ],
  },
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --navy:#0b1628;
          --navy2:#132040;
          --gold:#c9a84c;
          --gold2:#e8c87a;
          --cream:#faf8f3;
        }

        .svc-hero-img {
          transition: transform 22s ease-in-out;
          animation: heroZoom 22s ease-in-out infinite;
        }

        @keyframes heroZoom {
          0%,100% { transform:scale(1.04); }
          50% { transform:scale(1.1); }
        }

        .svc-hero::after {
          content:'';
          position:absolute;
          bottom:-2px;
          left:0;
          right:0;
          height:80px;
          background:var(--cream);
          clip-path:polygon(0 100%,100% 0,100% 100%);
          z-index:5;
        }

        .diag {
          position:absolute;
          inset:0;
          opacity:.05;
          background-image:
          repeating-linear-gradient(
            135deg,
            #c9a84c 0,
            #c9a84c 1px,
            transparent 1px,
            transparent 68px
          );
          pointer-events:none;
        }

        .noise::after {
          content:'';
          position:absolute;
          inset:0;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events:none;
          z-index:0;
        }

        .detail-card {
          position:relative;
          background:#fff;
          border-radius:16px;
          border:1px solid rgba(11,22,40,.07);
          padding:20px 20px 20px 24px;
          overflow:hidden;
          transition:border-color .3s, box-shadow .3s, transform .3s;
          display:flex;
          align-items:flex-start;
          gap:14px;
        }

        .detail-card::before {
          content:'';
          position:absolute;
          top:0;
          left:0;
          bottom:0;
          width:3px;
          background:linear-gradient(
            180deg,
            var(--gold),
            rgba(201,168,76,.2)
          );
          border-radius:16px 0 0 16px;
          transform:scaleY(0);
          transform-origin:top;
          transition:transform .35s ease;
        }

        .detail-card:hover {
          border-color:rgba(201,168,76,.4);
          box-shadow:0 12px 40px rgba(11,22,40,.1);
          transform:translateX(4px);
        }

        .detail-card:hover::before {
          transform:scaleY(1);
        }

        .cta-primary {
          display:inline-flex;
          align-items:center;
          gap:9px;
          font-family:'DM Sans',sans-serif;
          font-size:.84rem;
          font-weight:500;
          letter-spacing:.07em;
          text-transform:uppercase;
          color:var(--navy);
          background:linear-gradient(
            135deg,
            var(--gold),
            var(--gold2)
          );
          padding:14px 28px;
          border-radius:12px;
          text-decoration:none;
          transition:box-shadow .25s, transform .25s;
          box-shadow:0 8px 28px rgba(201,168,76,.35);
        }

        .cta-primary:hover {
          box-shadow:0 16px 40px rgba(201,168,76,.45);
          transform:translateY(-2px);
        }

        .cta-secondary {
          display:inline-flex;
          align-items:center;
          gap:9px;
          font-family:'DM Sans',sans-serif;
          font-size:.84rem;
          font-weight:500;
          letter-spacing:.07em;
          text-transform:uppercase;
          color:var(--navy);
          background:#fff;
          border:1.5px solid rgba(11,22,40,.12);
          padding:14px 28px;
          border-radius:12px;
          text-decoration:none;
          transition:border-color .25s,
          background .25s,
          box-shadow .25s;
          box-shadow:0 4px 16px rgba(11,22,40,.06);
        }

        .cta-secondary:hover {
          border-color:rgba(201,168,76,.55);
          background:rgba(201,168,76,.04);
          box-shadow:0 8px 28px rgba(11,22,40,.1);
        }

        .g-rule {
          height:1px;
          background:linear-gradient(
            90deg,
            transparent,
            var(--gold),
            transparent
          );
        }

        .eyebrow {
          display:inline-block;
          font-family:'DM Sans',sans-serif;
          font-size:.7rem;
          font-weight:500;
          letter-spacing:.26em;
          text-transform:uppercase;
          color:var(--gold);
          border:1px solid rgba(201,168,76,.4);
          border-radius:100px;
          padding:6px 20px;
        }

        .rel-link {
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:16px 20px;
          border-radius:14px;
          background:#fff;
          border:1px solid rgba(11,22,40,.07);
          text-decoration:none;
          transition:border-color .25s,
          box-shadow .25s,
          transform .25s;
        }

        .rel-link:hover {
          border-color:rgba(201,168,76,.45);
          box-shadow:0 8px 28px rgba(11,22,40,.08);
          transform:translateX(4px);
        }

        /* FIXED HOVER STYLES */

        .back-link:hover {
          color:#c9a84c !important;
        }

        .service-image:hover {
          transform:scale(1.04);
        }

        @media(max-width:1024px) {
          .rel-grid {
            grid-template-columns:repeat(2,1fr) !important;
          }
        }

        @media(max-width:768px) {
          .svc-split {
            grid-template-columns:1fr !important;
            gap:48px !important;
          }

          .detail-grid {
            grid-template-columns:1fr !important;
          }

          .rel-grid {
            grid-template-columns:repeat(2,1fr) !important;
          }
        }

        @media(max-width:480px) {
          .rel-grid {
            grid-template-columns:1fr !important;
          }
        }
      `}</style>

      <main
        style={{
          fontFamily: "'DM Sans',sans-serif",
          background: "var(--cream)",
          minHeight: "100vh",
        }}
      >
        {/* HERO */}
        <section
          className="svc-hero"
          style={{
            position: "relative",
            minHeight: "88vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="svc-hero-img"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "50% 30%",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom,rgba(11,22,40,.6) 0%,rgba(11,22,40,.78) 60%,rgba(11,22,40,.92) 100%)",
            }}
          />

          <div className="diag" aria-hidden />

          <div
            style={{
              position: "relative",
              zIndex: 4,
              textAlign: "center",
              maxWidth: 800,
              padding: "120px 24px 80px",
              margin: "0 auto",
            }}
          >
            <a
              href="/#services"
              className="back-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.45)",
                textDecoration: "none",
                marginBottom: 32,
                transition: "color .2s",
              }}
            >
              <ArrowLeft size={13} />
              Back to Services
            </a>

            <div style={{ marginBottom: 20 }}>
              <span className="eyebrow">{service.tag}</span>
            </div>

            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                margin: "0 auto 28px",
                background: "rgba(201,168,76,.1)",
                border: "1.5px solid rgba(201,168,76,.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(12px)",
              }}
            >
              <Icon size={30} style={{ color: "#e8c87a" }} />
            </div>

            <h1
              style={{
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontSize: "clamp(3rem,7vw,6rem)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              {service.title}
            </h1>

            <div
              className="g-rule"
              style={{ width: 72, margin: "24px auto" }}
            />

            <p
              style={{
                color: "rgba(255,255,255,.72)",
                fontSize: "clamp(1rem,1.8vw,1.2rem)",
                lineHeight: 1.8,
                margin: 0,
                maxWidth: 580,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {service.heroText}
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section
          className="noise"
          style={{
            position: "relative",
            padding: "100px 24px 120px",
            background: "var(--cream)",
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 72,
              alignItems: "center",
            }}
            className="svc-split"
          >
            {/* IMAGE */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  boxShadow: "0 40px 100px rgba(11,22,40,.18)",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                  style={{
                    width: "100%",
                    height: 560,
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 1.1s ease",
                  }}
                />
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond',Georgia,serif",
                  fontSize: "clamp(2rem,3.5vw,3rem)",
                  fontWeight: 700,
                  color: "var(--navy)",
                  lineHeight: 1.1,
                  marginBottom: 20,
                }}
              >
                Reliable & Efficient{" "}
                <em style={{ color: "var(--gold)" }}>{service.title}</em>
              </h2>

              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "#334155",
                  marginBottom: 36,
                }}
              >
                {service.description}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="detail-grid"
              >
                {service.details.map((item: string, i: number) => (
                  <div key={i} className="detail-card">
                    <CheckCircle
                      size={17}
                      style={{
                        color: "var(--gold)",
                        marginTop: 1,
                        flexShrink: 0,
                      }}
                    />

                    <span
                      style={{
                        fontSize: "0.88rem",
                        color: "#334155",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  marginTop: 36,
                }}
              >
                <a href="/#contact" className="cta-primary">
                  Request a Quotation
                  <ArrowUpRight size={15} />
                </a>

                <a href="/#services" className="cta-secondary">
                  <ArrowLeft size={15} />
                  All Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}