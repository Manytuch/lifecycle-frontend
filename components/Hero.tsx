"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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
    <section id="home" className="relative w-full h-[90vh] overflow-hidden">

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000 }}
        className="h-full"
      >
        {homepage.hero_images?.map((img: any) => (
          <SwiperSlide key={img.id}>
            <div className="relative w-full h-[90vh]">

              {/* Background Image with subtle zoom */}
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}`}
                alt="Hero"
                className="w-full h-full object-cover object-[50%_20%] scale-105 animate-[zoom_20s_linear_infinite]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-blue-950/70 backdrop-blur-[2px]"></div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* TEXT ON TOP */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6 z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {homepage.hero_title.split("South Sudan")[0]}

            <span className="block md:inline bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent whitespace-nowrap drop-shadow-md">
              South Sudan
            </span>
          </h1>

          {/* TYPING SUBTITLE */}
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
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

          {/* BUTTONS */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap">

            <a
              href="#contact"
              className="bg-blue-600 px-7 py-3 rounded-md font-medium hover:bg-blue-700 transition shadow-lg"
            >
              Request a Quote
            </a>

            <a
              href="#contact"
              className="border border-white/70 px-7 py-3 rounded-md font-medium hover:bg-white hover:text-black transition"
            >
              Contact Us
            </a>

          </div>

        </motion.div>

      </div>

      {/* OPTIONAL: Zoom animation keyframes */}
      <style jsx>{`
        @keyframes zoom {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1.05); }
        }
      `}</style>

    </section>
  );
}