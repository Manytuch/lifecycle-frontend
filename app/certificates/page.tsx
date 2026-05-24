"use client";

import {
  CheckCircle,
  ShieldCheck,
  FileCheck,
  BadgeCheck,
  Scale,
  ClipboardCheck,
} from "lucide-react";

const certificates = [
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description:
      "We operate in accordance with all applicable customs, trade, and operational regulations.",
  },
  {
    icon: CheckCircle,
    title: "Trade & Business License",
    description:
      "Licensed to provide logistics, customs clearance, brokerage, warehousing, and general supply services.",
  },
  {
    icon: FileCheck,
    title: "Business Registration Certificate",
    description:
      "Legally registered and authorized to operate in South Sudan.",
  },
];

const compliance = [
  {
    icon: BadgeCheck,
    title: "Professional Standards",
    description:
      "Committed to maintaining professionalism, accountability, and operational excellence in all logistics activities.",
  },
  {
    icon: Scale,
    title: "Legal Compliance",
    description:
      "Operating within approved legal and regulatory frameworks governing logistics and trading services.",
  },
  {
    icon: ClipboardCheck,
    title: "Operational Integrity",
    description:
      "Focused on transparent procedures, secure handling, and dependable service delivery across operations.",
  },
];

export default function CertificatesPage() {
  return (
    <main className="bg-gradient-to-b from-white to-blue-50 min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 py-28 md:py-36 text-white">

        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_white,_transparent_40%)]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <span className="bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm uppercase tracking-wide">
            Certificates & Licenses
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
            Compliance & Certification
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            We maintain professional operational standards and comply with
            relevant legal and regulatory frameworks governing logistics,
            customs clearance, and trading operations in South Sudan.
          </p>

        </div>

      </section>

      {/* MAIN CERTIFICATES */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
              Certification Overview
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Legal & Operational Recognition
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Our certifications and licenses reflect our commitment to lawful,
              reliable, and professional logistics operations.
            </p>

          </div>

          {/* GRID */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">

            {certificates.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-10 border border-blue-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center"
                >

                  {/* ICON */}
                  <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Icon size={34} />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-8 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* COMPLIANCE SECTION */}
      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-gradient-to-r from-blue-950 to-slate-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">

            {/* EFFECT */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_white,_transparent_40%)]"></div>
            </div>

            <div className="relative z-10">

              <div className="text-center max-w-3xl mx-auto">

                <span className="text-blue-200 uppercase tracking-wide text-sm font-semibold">
                  Trust & Accountability
                </span>

                <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                  Commitment to Compliance
                </h2>

                <p className="mt-6 text-blue-100 text-lg leading-relaxed">
                  We continuously uphold operational integrity, transparency,
                  and professional standards to ensure dependable logistics and
                  customs services for our clients.
                </p>

              </div>

              {/* CARDS */}
              <div className="mt-16 grid md:grid-cols-3 gap-8">

                {compliance.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition"
                    >

                      <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-blue-200">
                        <Icon size={30} />
                      </div>

                      <h3 className="mt-6 text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-blue-100 leading-relaxed">
                        {item.description}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}