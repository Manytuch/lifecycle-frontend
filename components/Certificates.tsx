"use client";

import { CheckCircle, ShieldCheck, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description:
      "We operate in accordance with all applicable customs, trade, and operational regulations.",
  },
  {
    icon: CheckCircle,
    title: "Trade & Business License",
    description:
      "Licensed to provide logistics, customs clearance, brokerage, warehousing, and general supply services.",
  },
  {
    icon: FileCheck,
    title: "Business Registration Certificate",
    description:
      "Legally registered and authorized to operate in South Sudan.",
  },
];

export default function Certificates() {
  return (
    <section className="py-20 bg-white">
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
            Certificates & Licenses
          </h2>
          <p className="mt-4 text-gray-600">
            Fully registered and compliant under all required legal and regulatory frameworks.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-xl hover:shadow-2xl transition-all duration-300 group"

                /* SCROLL ANIMATION */
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}

                /* HOVER */
                whileHover={{ y: -6 }}
              >

                {/* ICON */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-700"
                >
                  <Icon size={28} />
                </motion.div>

                {/* TITLE */}
                <h3 className="mt-6 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}