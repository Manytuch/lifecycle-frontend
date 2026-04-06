"use client";

import { Truck, Users, Clock, ShieldCheck } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Truck,
    value: 250,
    suffix: "+",
    label: "Shipments Delivered",
  },
  {
    icon: Users,
    value: 20,
    suffix: "+",
    label: "Satisfied Clients",
  },
  {
    icon: Clock,
    value: 5,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Compliance & Safety",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">

        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={index}
              className="text-center text-white bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition"

              /* SCROLL ANIMATION */
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}

              /* HOVER */
              whileHover={{ scale: 1.05 }}
            >

              {/* ICON */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
                className="flex justify-center mb-4"
              >
                <Icon size={30} />
              </motion.div>

              {/* VALUE */}
              <h3 className="text-2xl md:text-3xl font-bold">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    suffix={stat.suffix}
                  />
                )}
              </h3>

              {/* LABEL */}
              <p className="text-sm opacity-90 mt-2">
                {stat.label}
              </p>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}