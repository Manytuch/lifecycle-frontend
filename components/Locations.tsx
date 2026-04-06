"use client";

import { MapPin, Plane, Truck } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  {
    title: "Nimule Border Station",
    description:
      "Efficient handling of cross-border imports and exports with smooth customs clearance and transportation.",
    icon: Truck,
    image: "/images/nimule.jpeg",
  },
  {
    title: "Juba International Airport",
    description:
      "Management of air freight, urgent shipments, and international cargo with speed and reliability.",
    icon: Plane,
    image: "/images/juba-airport.jpg",
  },
];

export default function Locations() {
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
            Our Locations
          </h2>
          <p className="mt-4 text-gray-600">
            Strategically positioned to support seamless logistics and trade operations across South Sudan.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {locations.map((loc, index) => {
            const Icon = loc.icon;

            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group"

                /* SCROLL ANIMATION */
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}

                /* HOVER */
                whileHover={{ y: -6 }}
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={loc.image}
                    alt={loc.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  {/* ICON */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-100 text-blue-700 mb-4"
                  >
                    <Icon size={24} />
                  </motion.div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    {loc.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-2 text-gray-600 text-sm">
                    {loc.description}
                  </p>

                  {/* LOCATION */}
                  <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                    <MapPin size={16} className="mr-1" />
                    South Sudan
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}