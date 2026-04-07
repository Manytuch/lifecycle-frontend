"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.PNG"
            alt="Logo"
            width={40}
            height={40}
          />
          <span className="text-lg font-bold text-blue-600">
            Life Cycle General Trading
          </span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* CTA BUTTON */}
        <a
          href="#contact"
          className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-md"
        >
          Request a Quote
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4 space-y-4 text-gray-700 font-medium">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#why-us" onClick={() => setIsOpen(false)}>Why Us</a>
          <a href="#certificates" onClick={() => setIsOpen(false)}>Certificates</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

          <a
            href="#contact"
            className="block bg-blue-600 text-white px-5 py-2 rounded-md text-center"
          >
            Request a Quote
          </a>
        </div>
      )}
    </header>
  );
}