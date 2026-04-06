import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* COMPANY */}
        <div>
          <h3 className="text-xl font-bold text-white">
            Life Cycle General Trading
          </h3>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Providing reliable customs clearance, logistics, warehousing,
            brokerage, and general supply solutions across South Sudan.
          </p>

          {/* SOCIAL MEDIA 🔥 */}
          <div className="mt-6 flex gap-4">

            <a
              href="https://facebook.com/YOUR_PAGE"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://instagram.com/YOUR_PAGE"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://x.com/YOUR_PAGE"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-black transition"
            >
              <Twitter size={18} />
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-3">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#why-us" className="hover:text-white transition">
                Why Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Contact
          </h3>

          <ul className="mt-4 space-y-3 text-gray-400">
            <li>📍 Juba & Nimule, South Sudan</li>
            <li>📞 +211 923 339 344</li>
            <li>✉️ rundiang03@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Life Cycle General Trading. All rights reserved.
      </div>
    </footer>
  );
}