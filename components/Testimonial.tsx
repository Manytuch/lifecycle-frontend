"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Pacific Enterprise Co. Ltd",
    role: "Importers",
    message:
      "Life Cycle General Trading handled our customs clearance smoothly and professionally. Highly reliable service.",
  },
  {
    name: "Skyline Contracting Co. Ltd",
    role: "Dealers in Building Materials",
    message:
      "Their team ensured timely delivery of our supplies across South Sudan. Very efficient and dependable.",
  },
  {
    name: "Bunyaan Foodstuffs Co. Ltd",
    role: "Food Supply Company",
    message:
      "Excellent coordination and communication throughout the process. I would definitely recommend their services.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
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
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600">
            Trusted by businesses and organizations across South Sudan.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 group"

              /* SCROLL ANIMATION */
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}

              /* HOVER */
              whileHover={{ y: -8 }}
            >

              {/* STARS */}
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                  >
                    <Star size={16} fill="currentColor" />
                  </motion.div>
                ))}
              </div>

              {/* MESSAGE */}
              <p className="text-gray-600 text-sm leading-relaxed italic relative">
                <span className="text-3xl text-blue-500 absolute -top-3 -left-2 opacity-30">
                  “
                </span>
                {item.message}
                <span className="text-3xl text-blue-500 absolute -bottom-4 right-0 opacity-30">
                  ”
                </span>
              </p>

              {/* USER */}
              <div className="mt-6 border-t pt-4">
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}