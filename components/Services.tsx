"use client";

import { useEffect, useState } from "react";
import {
  FileText,
  Truck,
  Warehouse,
  Handshake,
  Package,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

type Service = {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  icon: keyof typeof iconMap;
};

const iconMap = {
  FileText,
  Truck,
  Warehouse,
  Handshake,
  Package,
};

const imageMap: Record<string, string> = {
  "customs-clearance": "/images/customs.jpg",
  "shipping-transportation": "/images/transport.jpg",
  warehousing: "/images/warehouse.jpg",
  "brokerage-services": "/images/brokerage.jpg",
  "general-supply": "/images/supply.jpg",
};

function ServiceNumber({ n }: { n: number }) {
  return (
    <span
      style={{
        fontFamily:
          "'Cormorant Garamond',Georgia,serif",

        fontSize: "4rem",
        fontWeight: 700,
        lineHeight: 1,

        color:
          "rgba(201,168,76,.16)",

        position: "absolute",
        top: 14,
        right: 18,

        userSelect: "none",
        pointerEvents: "none",
      }}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

function FeaturedCard({
  service,
}: {
  service: Service;
}) {
  const Icon =
    iconMap[service.icon] || Package;

  const image =
    imageMap[service.slug] ||
    "/images/default.jpg";

  return (
    <motion.a
      href={`/services/${service.slug}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="featured-card group"
      style={{
        display: "grid",
        textDecoration: "none",
        borderRadius: 24,
        overflow: "hidden",

        boxShadow:
          "0 32px 80px rgba(11,22,40,.15)",
      }}
    >

      <div
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: 260,
        }}
      >

        <img
          src={image}
          alt={service.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",

            transition:
              "transform 1.1s ease",

            minHeight: 260,
          }}
          className="featured-img"
        />

        <div
          style={{
            position: "absolute",
            inset: 0,

            background:
              "linear-gradient(135deg,rgba(11,22,40,.45) 0%,transparent 70%)",
          }}
        />

      </div>

      <div
        style={{
          background:
            "linear-gradient(135deg,#0b1628 0%,#132040 100%)",

          padding:
            "clamp(28px,5vw,52px) clamp(24px,4vw,48px)",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          position: "relative",
          overflow: "hidden",
        }}
      >

        <ServiceNumber n={1} />

        <div
          style={{
            width: 48,
            height: 48,

            borderRadius: 12,

            background:
              "rgba(201,168,76,.12)",

            border:
              "1px solid rgba(201,168,76,.35)",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            color: "#c9a84c",

            position: "relative",
          }}
        >
          <Icon size={22} />
        </div>

        <h3
          style={{
            fontFamily:
              "'Cormorant Garamond',Georgia,serif",

            fontSize:
              "clamp(1.6rem,3vw,2.2rem)",

            fontWeight: 700,

            color: "#fff",

            margin: "18px 0 14px",

            position: "relative",
            lineHeight: 1.15,
          }}
        >
          {service.title}
        </h3>

        <div
          style={{
            height: 1,

            background:
              "linear-gradient(90deg,#c9a84c,transparent)",

            marginBottom: 18,
          }}
        />

        <p
          style={{
            color: "#94a3b8",
            lineHeight: 1.8,

            fontSize:
              "clamp(.85rem,1.4vw,.98rem)",

            position: "relative",
          }}
        >
          {service.short_description}
        </p>

        <span
          style={{
            marginTop: 24,

            display: "inline-flex",
            alignItems: "center",
            gap: 8,

            color: "#c9a84c",

            fontSize: ".82rem",
            fontWeight: 500,

            letterSpacing: ".06em",
            textTransform: "uppercase",

            position: "relative",
          }}
        >
          Learn More
          <ArrowUpRight size={15} />
        </span>

      </div>
    </motion.a>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon =
    iconMap[service.icon] || Package;

  const image =
    imageMap[service.slug] ||
    "/images/default.jpg";

  return (
    <motion.a
      href={`/services/${service.slug}`}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: (index - 1) * 0.1,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="svc-card group"
      style={{
        display: "flex",
        flexDirection: "column",

        borderRadius: 20,
        overflow: "hidden",

        background: "#fff",

        boxShadow:
          "0 8px 32px rgba(11,22,40,.07)",

        textDecoration: "none",

        position: "relative",

        transition:
          "box-shadow .35s",
      }}
    >

      <div
        style={{
          padding: "24px 24px 28px",
          position: "relative",
        }}
      >

        <ServiceNumber n={index + 1} />

        <h3>{service.title}</h3>

        <p>{service.short_description}</p>

      </div>
    </motion.a>
  );
}

export default function Services() {
  const [services, setServices] =
    useState<Service[]>([]);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services`
    )
      .then((r) => r.json())
      .then((data) => {
        const sorted = [...data.data].sort(
          (a: Service, b: Service) =>
            a.slug ===
            "customs-clearance"
              ? -1
              : b.slug ===
                "customs-clearance"
              ? 1
              : 0
        );

        setServices(sorted);
      });
  }, []);

  const featured = services[0];
  const rest = services.slice(1);

  return (
    <section id="services">
      {featured && (
        <FeaturedCard service={featured} />
      )}

      <div className="svc-cards-grid">
        {rest.map(
          (
            service: Service,
            i: number
          ) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i + 1}
            />
          )
        )}
      </div>
    </section>
  );
}