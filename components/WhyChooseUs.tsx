"use client";

import { ShieldCheck, Truck, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & Compliant",
    description:
      "We are known for integrity, transparency, and dependable service in customs clearance and logistics operations.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description:
      "Our transportation network guarantees safe and timely delivery across South Sudan.",
  },
  {
    icon: Clock,
    title: "Fast & Efficient",
    description:
      "Our experienced team ensures timely clearance, transportation, and delivery without unnecessary delays.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Led by industry professionals with years of experience in freight forwarding, customs, and logistics management.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl shadow-lg"
        >
          <img
            src="/images/why-us.jpeg"
            alt="Why Choose Us"
            className="w-full h-[700px] object-cover hover:scale-105 transition duration-700"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>

          {/* HEADER ANIMATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Us
            </h2>

            <p className="mt-4 text-gray-600">
              We deliver reliable logistics and trading solutions with a focus on
              efficiency, compliance, and customer satisfaction.
            </p>
          </motion.div>

          {/* FEATURES */}
          <div className="mt-8 space-y-6">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  className="flex gap-4 items-start group"
                  
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >

                  {/* ICON */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-100 text-blue-700 transition"
                  >
                    <Icon size={24} />
                  </motion.div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}