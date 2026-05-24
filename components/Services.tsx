"use client";

import { useEffect, useState, useRef } from "react";
import {
  FileText,
  Truck,
  Warehouse,
  Handshake,
  Package,
  ArrowUpRight,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

/* ─── Icon map ─── */
const iconMap = { FileText, Truck, Warehouse, Handshake, Package };

/* ─── Image map ─── */
const imageMap = {
  "customs-clearance":    "/images/customs.jpg",
  "shipping-transportation": "/images/transport.jpg",
  warehousing:            "/images/warehouse.jpg",
  "brokerage-services":   "/images/brokerage.jpg",
  "general-supply":       "/images/supply.jpg",
} as const;

type Service = {
  id: string | number;
  icon?: keyof typeof iconMap;
  slug: keyof typeof imageMap;
  title: string;
  short_description: string;
};

/* ─── Service number label ─── */
function ServiceNumber({ n }: { n: number }) {
  return (
    <span
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: "4.5rem",
        fontWeight: 700,
        lineHeight: 1,
        color: "rgba(201,168,76,0.18)",
        position: "absolute",
        top: 16,
        right: 22,
        userSelect: "none",
        pointerEvents: "none",
      }}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

/* ─── Featured card (first / customs clearance) ─── */
function FeaturedCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon ? iconMap[service.icon] : Package;
  const image = imageMap[service.slug] || "/images/default.jpg";

  return (
    <motion.a
      href={`/services/${service.slug}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="group"
      style={{
        gridColumn: "1 / -1",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(11,22,40,0.15)",
        textDecoration: "none",
        minHeight: 420,
      }}
    >
      {/* Image half */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={image}
          alt={service.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 1.1s ease",
          }}
          className="group-hover:scale-featured-img"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(11,22,40,0.45) 0%, transparent 70%)",
          }}
        />
        {/* "Featured" tag */}
        <span
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            background: "rgba(201,168,76,0.92)",
            color: "#0b1628",
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "6px 14px",
            borderRadius: 100,
          }}
        >
          Core Service
        </span>
      </div>

      {/* Content half */}
      <div
        style={{
          background: "linear-gradient(135deg, #0b1628 0%, #132040 100%)",
          padding: "52px 48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* grid texture */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <ServiceNumber n={1} />

        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            background: "rgba(201,168,76,0.12)",
            border: "1px solid rgba(201,168,76,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#c9a84c",
            position: "relative",
          }}
        >
          <Icon size={24} />
        </div>

        <h3
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "2.2rem",
            fontWeight: 700,
            color: "#fff",
            marginTop: 20,
            marginBottom: 16,
            position: "relative",
            lineHeight: 1.15,
          }}
        >
          {service.title}
        </h3>

        <div
          style={{
            height: 1,
            background: "linear-gradient(90deg, #c9a84c, transparent)",
            marginBottom: 20,
          }}
        />

        <p
          style={{
            color: "#94a3b8",
            lineHeight: 1.8,
            fontSize: "0.98rem",
            position: "relative",
          }}
        >
          {service.short_description}
        </p>

        <span
          style={{
            marginTop: 32,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "#c9a84c",
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            position: "relative",
            transition: "gap 0.25s",
          }}
          className="group-hover:gap-featured-cta"
        >
          Learn More <ArrowUpRight size={16} />
        </span>
      </div>
    </motion.a>
  );
}

/* ─── Standard card ─── */
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon ? iconMap[service.icon] : Package;
  const image = imageMap[service.slug] || "/images/default.jpg";

  return (
    <motion.a
      href={`/services/${service.slug}`}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: (index - 1) * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group"
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 20,
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 8px 32px rgba(11,22,40,0.07)",
        textDecoration: "none",
        position: "relative",
        transition: "box-shadow 0.35s",
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 24px 64px rgba(11,22,40,0.15)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(11,22,40,0.07)")}
    >
      {/* Gold border on hover via pseudo — simulated with absolute div */}
      <div
        aria-hidden
        className="group-hover:opacity-100"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 20,
          border: "1.5px solid rgba(201,168,76,0.5)",
          opacity: 0,
          transition: "opacity 0.3s",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: 210 }}>
        <img
          src={image}
          alt={service.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 1s ease",
          }}
          className="group-hover:scale-img"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(11,22,40,0.65) 0%, transparent 55%)",
            transition: "opacity 0.4s",
          }}
        />
        {/* icon on image */}
        <div
          style={{
            position: "absolute",
            bottom: 18,
            left: 20,
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "rgba(11,22,40,0.75)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(201,168,76,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#c9a84c",
          }}
        >
          <Icon size={20} />
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "28px 28px 32px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          position: "relative",
        }}
      >
        <ServiceNumber n={index + 1} />

        <h3
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.55rem",
            fontWeight: 700,
            color: "#0b1628",
            marginBottom: 10,
            lineHeight: 1.2,
            transition: "color 0.25s",
          }}
          className="group-hover:text-gold"
        >
          {service.title}
        </h3>

        <div
          style={{
            height: 1,
            background: "linear-gradient(90deg, #c9a84c, transparent)",
            marginBottom: 14,
            opacity: 0.5,
          }}
        />

        <p
          style={{
            color: "#64748b",
            lineHeight: 1.75,
            fontSize: "0.93rem",
            flexGrow: 1,
          }}
        >
          {service.short_description}
        </p>

        <span
          style={{
            marginTop: 22,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "#0b1628",
            fontSize: "0.82rem",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            transition: "color 0.25s",
          }}
          className="group-hover:text-gold"
        >
          Discover More <ArrowUpRight size={14} />
        </span>
      </div>
    </motion.a>
  );
}

/* ══════════════════════════════════════════
   MAIN SECTION
══════════════════════════════════════════ */
export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data.data].sort((a, b) => {
          if (a.slug === "customs-clearance") return -1;
          if (b.slug === "customs-clearance") return 1;
          return 0;
        });
        setServices(sorted);
      });
  }, []);

  const featured = services[0];
  const rest = services.slice(1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .services-root {
          font-family: 'DM Sans', sans-serif;
          --navy:  #0b1628;
          --navy2: #132040;
          --gold:  #c9a84c;
          --gold2: #e8c87a;
          --cream: #faf8f3;
          --muted: #94a3b8;
        }

        .services-root .group:hover .group-hover\\:scale-featured-img,
        .services-root .group:hover .group-hover\\:scale-img {
          transform: scale(1.07);
        }
        .services-root .group:hover .group-hover\\:opacity-100 {
          opacity: 1 !important;
        }
        .services-root .group:hover .group-hover\\:text-gold {
          color: var(--gold) !important;
        }

        /* noise overlay */
        .services-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        /* diagonal rule */
        .services-bg::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 320px;
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy2) 100%);
          clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
          z-index: 0;
        }

        /* diagonal accent lines */
        .diag-lines {
          position: absolute;
          inset: 0;
          opacity: 0.055;
          background-image: repeating-linear-gradient(
            135deg,
            #c9a84c 0px, #c9a84c 1px,
            transparent 1px, transparent 64px
          );
          clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      <section
        id="services"
        className="services-root services-bg relative overflow-hidden"
        style={{ background: "var(--cream)", paddingBottom: 100 }}
      >
        <div className="diag-lines" aria-hidden />

        <div
          className="relative max-w-7xl mx-auto px-6"
          style={{ paddingTop: 88, zIndex: 1 }}
        >

          {/* ── HEADER ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 72px" }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "#c9a84c",
                border: "1px solid rgba(201,168,76,0.5)",
                borderRadius: 100,
                padding: "6px 20px",
                marginBottom: 20,
              }}
            >
              What We Offer
            </span>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                fontWeight: 600,
                color: "#fff",
                lineHeight: 1.07,
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
              Our{" "}
              <em style={{ fontStyle: "italic", color: "#c9a84c" }}>Services</em>
            </h2>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "1.02rem",
                lineHeight: 1.4,
              }}
            >
              Comprehensive logistics and trading solutions designed to move your
              business forward — efficiently, securely, and reliably.
            </p>

            {/* gold rule */}
            <div
              style={{
                height: 1,
                width: 72,
                margin: "24px auto 0",
                background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
              }}
            />
          </motion.div>

          {/* ── CARDS GRID ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {/* Featured spans full width */}
            {featured && <FeaturedCard service={featured} index={0} />}

            {/* Remaining 4 in 2×2 (or however many) */}
            {rest.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i + 1} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}