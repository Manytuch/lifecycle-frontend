import { ShieldCheck, FileText, CheckCircle } from "lucide-react";

const certificates = [
  {
    title: "Company Registration",
    description:
      "Life Cycle General Trading Company Limited is legally registered and authorized to operate in South Sudan.",
    icon: FileText,
  },
  {
    title: "Trade & Business License",
    description:
      "Licensed to provide logistics, customs clearance, brokerage, warehousing, and general supply services.",
    icon: ShieldCheck,
  },
  {
    title: "Regulatory Compliance",
    description:
      "We operate in compliance with customs regulations, trade laws, and operational standards.",
    icon: CheckCircle,
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Certificates & Licenses
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are a fully registered and compliant company, operating under the
            required legal and regulatory frameworks.
          </p>
        </div>

        {/* Certificates grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <item.icon size={28} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}