import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Request a Quote
          </h2>

          <p className="mt-4 text-gray-300">
            Tell us about your shipment or service requirements, and our team will respond with a tailored solution.
          </p>

          {/* CONTACT INFO */}
          <div className="mt-8 space-y-5 text-gray-300">

            <div className="flex items-center gap-3">
              <MapPin className="text-blue-400" size={20} />
              <span>Nimule, South Sudan</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-blue-400" size={20} />
              <span>+211 923 339 344</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-blue-400" size={20} />
              <span>rundiang03@gmail.com</span>
            </div>

          </div>

          {/* WHATSAPP BUTTON 🔥 */}
          <a
            href="https://wa.me/211923339344?text=Hello%20I%20would%20like%20to%20request%20a%20quote"
            target="_blank"
            className="mt-8 inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition shadow-lg"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white text-gray-900 rounded-xl p-8 shadow-lg">

          <ContactForm />

        </div>

      </div>
    </section>
  );
}