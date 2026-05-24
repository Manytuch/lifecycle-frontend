"use client";

import {
  ShieldCheck,
  Truck,
  Clock,
  Users,
  CheckCircle2,
  Globe2,
  PackageCheck,
  FileCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & Compliant",
    description:
      "We are known for integrity, transparency, and dependable service in customs clearance and logistics operations.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description:
      "Our transportation network guarantees safe and timely delivery across South Sudan.",
  },
  {
    icon: Clock,
    title: "Fast & Efficient",
    description:
      "Our experienced team ensures timely clearance, transportation, and delivery without unnecessary delays.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Led by industry professionals with years of experience in freight forwarding, customs, and logistics management.",
  },
];

const advantages = [
  {
    icon: Globe2,
    title: "Strategic Operational Presence",
    description:
      "Located at Nimule Border Station and Juba International Airport to support efficient trade movement and logistics operations.",
  },
  {
    icon: FileCheck,
    title: "Customs Expertise",
    description:
      "Strong understanding of customs procedures, documentation, and compliance requirements for seamless clearance.",
  },
  {
    icon: PackageCheck,
    title: "Secure Cargo Handling",
    description:
      "Professional cargo coordination and handling processes designed to protect client goods throughout transit.",
  },
  {
    icon: CheckCircle2,
    title: "Customer-Centered Service",
    description:
      "We prioritize reliability, communication, and tailored logistics support for every client and shipment.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <main className="bg-gradient-to-b from-white to-blue-50 min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 py-28 md:py-36 text-white">

        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_white,_transparent_40%)]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <span className="bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm uppercase tracking-wide">
            Why Choose Us
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
            Trusted Logistics Partner
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            We combine operational efficiency, customs expertise, and dependable
            logistics solutions to support businesses and organizations across
            South Sudan.
          </p>

        </div>

      </section>

      {/* MAIN FEATURES */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">

              <img
                src="/images/why-us.jpeg"
                alt="Why Choose Us"
                className="w-full h-[700px] object-cover hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent"></div>

            </div>

            {/* CONTENT */}
            <div>

              <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
                Operational Strength
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Why Businesses Trust Our Services
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                We deliver reliable logistics and trading solutions with a focus
                on efficiency, compliance, professionalism, and customer
                satisfaction.
              </p>

              {/* FEATURES */}
              <div className="mt-10 space-y-8">

                {features.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex gap-5 group"
                    >

                      {/* ICON */}
                      <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition">

                        <Icon size={28} />

                      </div>

                      {/* TEXT */}
                      <div>

                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-gray-600 leading-relaxed">
                          {item.description}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* OPERATIONAL ADVANTAGES */}
      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
              Competitive Advantage
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Operational Excellence
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Our strategic approach to logistics and customs operations ensures
              dependable service delivery and long-term client confidence.
            </p>

          </div>

          {/* GRID */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                >

                  <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
}