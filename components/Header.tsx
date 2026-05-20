"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Detect scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "About Us", href: "/#about" },
    { name: "Why Us", href: "#/why-us" },
    { name: "Certificates", href: "#/certificates" },
    { name: "Contact", href: "#/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg py-3"
            : "bg-black/20 backdrop-blur-lg border-b border-white/10 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/logo.PNG"
              alt="Logo"
              width={45}
              height={45}
              className="object-contain"
            />

            <div className="leading-tight">
              <h1
                className={`font-bold text-lg transition ${
                  scrolled ? "text-blue-700" : "text-white"
                }`}
              >
                Life Cycle
              </h1>

              <p
                className={`text-xs transition ${
                  scrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                General Trading Co. Ltd
              </p>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`font-medium transition relative group ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.name}

                {/* Underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA BUTTON */}
          <a
            href="#contact"
            className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition"
          >
            Request a Quotation
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className={`lg:hidden transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <Menu size={30} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-white z-50 shadow-2xl p-6"
            >

              {/* TOP */}
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="font-bold text-xl text-blue-700">
                    Life Cycle
                  </h2>
                  <p className="text-sm text-gray-500">
                    General Trading
                  </p>
                </div>

                <button onClick={() => setIsOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 text-lg font-medium hover:text-blue-600 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-10 block bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-xl font-medium transition"
              >
                Request a Quotation
              </a>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}