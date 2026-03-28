"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";


type Homepage = {
  hero_title: string;
  hero_subtitle: string;
  hero_images: any[];
};

export default function Hero() {
  const [homepage, setHomepage] = useState<Homepage | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/homepage?populate=hero_images`)
      .then((res) => res.json())
      .then((data) => setHomepage(data.data));
  }, []);

  if (!homepage) return null;

  return (
    <section id="home" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            {homepage.hero_title}
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            {homepage.hero_subtitle}
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
            >
              Request a Quote
            </a>

            <a
              href="#contact"
              className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:border-blue-600 hover:text-blue-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Image Slider */}
        <div className="w-full h-80 rounded-lg overflow-hidden">
          
<Swiper
  modules={[Autoplay]}
  spaceBetween={10}
  slidesPerView={1}
  loop
  autoplay={{ delay: 3000 }}
>
  {homepage.hero_images?.map((img: any) => (
    <SwiperSlide key={img.id}>
      <img
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}`}
        alt="Hero"
        className="w-full h-[320px] object-cover"
      />
    </SwiperSlide>
  ))}
</Swiper>
        </div>

      </div>
    </section>
  );
}