"use client";

import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-gray-300 pt-20 pb-8">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* COMPANY */}
          <div>

            {/* LOGO + NAME */}
            <div className="flex items-center gap-4">

              <img
                src="/logo.PNG"
                alt="Life Cycle Logo"
                className="w-20 h-20 object-contain rounded-full bg-white p-1 shadow-md"
              />

              <div>

                <h3 className="text-2xl font-bold text-white leading-tight">
                  Life Cycle General Trading
                </h3>

                <p className="text-sm text-blue-200">
                  Logistics & Customs Solutions
                </p>

              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="mt-5 text-gray-400 leading-relaxed">
              Providing reliable customs clearance, logistics, warehousing,
              brokerage, and general supply solutions across South Sudan with
              professionalism, integrity, and operational excellence.
            </p>

            {/* SOCIALS */}
            <div className="mt-8 flex gap-4">

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/share/1B6yxPpNSW/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-blue-600 transition duration-300 flex items-center justify-center"
              >
                <Facebook size={18} />
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/lifecycle202/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-pink-600 transition duration-300 flex items-center justify-center"
              >
                <Instagram size={18} />
              </a>
              {/* TIKTOK */}
              <a
                href="https://www.tiktok.com/@life.cycle.genera"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white transition duration-300 flex items-center justify-center"
              >

                <img
                  src="/icons/tiktok.png"
                  alt="TikTok"
                  className="w-5 h-5 object-contain"
                />

              </a>
              {/* X */}
              <a
                href="https://x.com/LifecycleGT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white transition duration-300 flex items-center justify-center"
              >

                <img
                  src="/icons/x.png"
                  alt="x"
                  className="w-5 h-5 object-contain"
                />

              </a>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4">

              {[
                { name: "Home", href: "/#home" },
                { name: "Services", href: "/#services" },
                { name: "About Us", href: "/#about" },
                { name: "Operations", href: "/operations" },
                { name: "Why Choose Us", href: "/why-choose-us" },
                { name: "Certificates", href: "/certificates" },
                { name: "Contact", href: "/#contact" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition group"
                >

                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition"
                  />

                  {item.name}

                </a>
              ))}

            </div>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-xl font-semibold text-white">
              Our Services
            </h3>

            <div className="mt-6 space-y-4">

              {[
                {
                  name: "Customs Clearance",
                  href: "/services/customs-clearance",
                },
                {
                  name: "Shipping & Transportation",
                  href: "/services/shipping-transportation",
                },
                {
                  name: "Warehousing",
                  href: "/services/warehousing",
                },
                {
                  name: "Brokerage Services",
                  href: "/services/brokerage-services",
                },
                {
                  name: "General Supply",
                  href: "/services/general-supply",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition group"
                >

                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition"
                  />

                  {item.name}

                </a>
              ))}

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-semibold text-white">
              Contact Information
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">

                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-300 shrink-0">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-white font-medium">
                    Office Location
                  </p>
                  <p className="text-gray-400">
                    Juba & Nimule, South Sudan
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-3">

                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-300 shrink-0">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-white font-medium">
                    Phone Number
                  </p>
                  <p className="text-gray-400">
                    +211 923 339 344
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-3">

                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-300 shrink-0">
                  <Mail size={18} />
                </div>

                <div className="max-w-[220px]">
                  <p className="text-white font-medium">Email Address</p>

                  <p className="text-gray-400 break-words leading-relaxed text-sm">
                    info.lifecyclegeneral@gmail.com
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Life Cycle General Trading Co. Ltd.
            All rights reserved.
          </p>

          <p>
            Designed for professional logistics and supply chain operations.
          </p>

        </div>

      </div>

    </footer>
  );
}