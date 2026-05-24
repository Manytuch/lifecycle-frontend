"use client";

import {
  ShieldCheck,
  Users,
  Briefcase,
  Truck,
  Warehouse,
  FileCheck,
  PackageCheck,
} from "lucide-react";

const valueChain = [
  {
    icon: Briefcase,
    title: "Procurement",
    description:
      "Strategic sourcing and acquisition of goods and logistics resources.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description:
      "Efficient customs documentation and border clearance procedures.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description:
      "Secure storage and inventory management for client goods.",
  },
  {
    icon: Truck,
    title: "Transportation",
    description:
      "Reliable transportation and cargo movement across South Sudan.",
  },
  {
    icon: PackageCheck,
    title: "Delivery",
    description:
      "Timely and professional final delivery to customer destinations.",
  },
];

const coreValues = [
  "Integrity",
  "Professionalism",
  "Reliability",
  "Customer Satisfaction",
  "Efficiency",
  "Transparency",
];

export default function OperationsPage() {
  return (
    <main className="bg-gradient-to-b from-white to-blue-50 min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 py-28 md:py-36 text-white">

        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_white,_transparent_40%)]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <span className="bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm uppercase tracking-wide">
            Operations
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
            Operational Excellence
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Our operations are built around efficiency, reliability,
            compliance, and customer satisfaction to ensure seamless logistics
            and supply chain support across South Sudan.
          </p>

        </div>

      </section>

      {/* CORE VALUES */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Philosophy & Core Values
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              We believe in building long-term partnerships through trust,
              professionalism, operational excellence, and customer-focused
              service delivery.
            </p>

          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition"
              >

                <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                  <ShieldCheck size={26} />
                </div>

                <h4 className="mt-4 font-semibold text-gray-900">
                  {value}
                </h4>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* MARKET APPROACH */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-gradient-to-r from-blue-950 to-slate-900 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">

            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_white,_transparent_40%)]"></div>
            </div>

            <div className="relative z-10">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                  <Users size={28} />
                </div>

                <div>

                  <span className="text-blue-200 uppercase tracking-wide text-sm font-medium">
                    Strategic Focus
                  </span>

                  <h3 className="text-3xl font-bold">
                    Our Market Approach
                  </h3>

                </div>

              </div>

              <p className="mt-6 text-blue-100 leading-relaxed text-lg max-w-4xl">
                Our market approach is centered on customer satisfaction,
                operational efficiency, and strategic partnerships. We focus on
                delivering tailored logistics and supply chain solutions that meet
                the evolving needs of businesses, organizations, and institutions
                operating within South Sudan and cross-border trade environments.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* VALUE CHAIN */}
      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Value Chain Analysis
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Our integrated logistics process ensures efficient coordination
              from procurement and customs clearance to warehousing,
              transportation, and final delivery.
            </p>

          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-6">

            {valueChain.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 text-center shadow-sm border border-blue-100 hover:shadow-2xl hover:-translate-y-2 transition"
                >

                  <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700">
                    <Icon size={28} />
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-gray-600 leading-relaxed text-sm">
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