"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

type Homepage = {
  hero_title: string;
  hero_subtitle: string;
  hero_images: any[];
};

export default function Hero() {
  const [homepage, setHomepage] = useState<Homepage | null>(null);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/homepage?populate=hero_images`
    )
      .then((res) => res.json())
      .then((data) => setHomepage(data.data));
  }, []);

  if (!homepage) return null;

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden"
    >

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000 }}
        className="h-full"
      >
        {homepage.hero_images?.map((img: any) => (
          <SwiperSlide key={img.id}>
            <div className="relative w-full min-h-screen">

              {/* IMAGE */}
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}`}
                alt="Hero"
                className="w-full h-screen object-cover object-center scale-105 animate-[zoom_20s_linear_infinite]"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-950/70 to-black/70"></div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CONTENT */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-5 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl text-center text-white pt-24 sm:pt-28 md:pt-20"
        >

          {/* TOP LABEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm tracking-[0.18em] uppercase text-gray-200 mb-6"
          >
            Logistics & Customs Solutions
          </motion.div>

          {/* TITLE */}
          <h1
            className="text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: "-0.04em",
            }}
          >
            {homepage.hero_title.split("South Sudan")[0]}

            <span
              className="block mt-1 sm:mt-2"
              style={{
                color: "#e8c87a",
                fontStyle: "italic",
                fontWeight: 600,
              }}
            >
              South Sudan
            </span>
          </h1>

          {/* SUBTITLE */}
          <div className="mt-6 sm:mt-8 max-w-3xl mx-auto">

            <p
              className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <TypeAnimation
                sequence={[
                  homepage.hero_subtitle,
                  2000,
                  "Fast, reliable, and professional logistics services.",
                  2000,
                  "Customs clearance you can trust.",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </p>

          </div>

          {/* BUTTONS */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">

            {/* PRIMARY */}
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl transition-all duration-300 shadow-2xl text-center"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c87a)",
                color: "#0b1628",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
              }}
            >
              Request a Quotation
            </a>

            {/* SECONDARY */}
            <a
              href="#contact"
              className="w-full sm:w-auto border border-white/60 bg-white/5 backdrop-blur-sm px-8 py-3.5 rounded-xl hover:bg-white hover:text-black transition-all duration-300 text-center"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              Contact Us
            </a>

          </div>

          {/* SCROLL INDICATOR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="hidden md:flex justify-center mt-16"
          >
            <div className="w-6 h-10 rounded-full border border-white/40 flex justify-center pt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
          </motion.div>

        </motion.div>

      </div>

      {/* STYLES */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes zoom {
          0% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1.05);
          }
        }
      `}</style>

    </section>
  );
}