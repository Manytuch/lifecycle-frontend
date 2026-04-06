"use client";

import { useEffect, useState } from "react";
import {
  FileText,
  Truck,
  Warehouse,
  Handshake,
  Package,
} from "lucide-react";
import { motion } from "framer-motion";

/* Icon map */
const iconMap: any = {
  FileText,
  Truck,
  Warehouse,
  Handshake,
  Package,
};

/* Image map */
const imageMap: any = {
  "customs-clearance": "/images/customs.jpg",
  "shipping-transportation": "/images/transport.jpg",
  warehousing: "/images/warehouse.jpg",
  "brokerage-services": "/images/brokerage.jpg",
  "general-supply": "/images/supply.jpg",
};

export default function Services() {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services`)
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white to-blue-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Comprehensive logistics and trading solutions designed to move your
            business forward efficiently and reliably.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => {
            const Icon = iconMap[service.icon] || Package;
            const image = imageMap[service.slug] || "/images/default.jpg";

            return (
              <motion.a
                key={service.id}
                href={`/services/${service.slug}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 block"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={service.title}
                    className="w-full h-44 object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-100 text-blue-700"
                  >
                    <Icon size={26} />
                  </motion.div>

                  <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {service.short_description}
                  </p>

                </div>

              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}