import { notFound } from "next/navigation";
import {
  Truck,
  Warehouse,
  FileText,
  Handshake,
  Package,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const services: any = {
  "customs-clearance": {
    title: "Customs Clearance",
    image: "/images/customs.jpg",
    icon: FileText,

    heroText:
      "Fast and compliant customs solutions for smooth import and export operations across South Sudan.",

    description:
      "We provide fast, compliant, and reliable customs clearance services at Nimule Border Station and Juba International Airport.",

    details: [
      "Import & export documentation",
      "Customs compliance and regulation handling",
      "Duty and tax processing",
      "Coordination with customs authorities",
    ],
  },

  "shipping-transportation": {
    title: "Shipping & Transportation",
    image: "/images/transport.jpg",
    icon: Truck,

    heroText:
      "Reliable freight transportation services connecting businesses safely and efficiently.",

    description:
      "Reliable local and cross-border transportation solutions ensuring timely and secure delivery of goods.",

    details: [
      "Local and regional transportation",
      "Cargo handling and coordination",
      "Secure movement of goods",
      "On-time delivery assurance",
    ],
  },

  warehousing: {
    title: "Warehousing",
    image: "/images/warehouse.jpg",
    icon: Warehouse,

    heroText:
      "Secure warehousing facilities designed for efficient storage and inventory management.",

    description:
      "Safe and strategic warehousing solutions designed to protect and manage your goods efficiently.",

    details: [
      "Short-term and long-term storage",
      "Secure facilities",
      "Inventory management",
      "Flexible storage solutions",
    ],
  },

  "brokerage-services": {
    title: "Brokerage Services",
    image: "/images/brokerage.jpg",
    icon: Handshake,

    heroText:
      "Professional brokerage support that simplifies logistics and trade operations.",

    description:
      "Professional brokerage services that simplify trade documentation and logistics processes.",

    details: [
      "Trade documentation",
      "Regulatory compliance support",
      "Process coordination",
      "Risk reduction",
    ],
  },

  "general-supply": {
    title: "General Supply",
    image: "/images/supply.jpg",
    icon: Package,

    heroText:
      "Efficient sourcing and supply solutions tailored to organizations and businesses.",

    description:
      "Efficient supply of goods and materials tailored to business and organizational needs.",

    details: [
      "Procurement support",
      "Reliable sourcing",
      "Timely delivery",
      "Cost-effective solutions",
    ],
  },
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services[slug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="bg-white min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-blue-950/80"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl pt-32 md:pt-24">

          {/* ICON */}
          <div className="w-20 h-20 mx-auto rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center mb-8 backdrop-blur-sm shadow-lg">
            <Icon size={36} className="text-blue-300" />
          </div>

          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
            {service.title}
          </h1>

          {/* HERO TEXT */}
          <p className="mt-6 text-lg md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            {service.heroText}
          </p>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

            <div className="absolute inset-0 rounded-3xl ring-1 ring-blue-100"></div>
          </div>

          {/* CONTENT */}
          <div>

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Icon size={16} />
              Professional Logistics Service
            </div>

            {/* HEADING */}
            <h2 className="mt-6 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Reliable & Efficient {service.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {service.description}
            </p>

            {/* FEATURES */}
            <div className="mt-10 grid sm:grid-cols-2 gap-5">

              {service.details.map((item: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm border border-blue-100 hover:shadow-lg transition"
                >
                  <CheckCircle
                    size={22}
                    className="text-blue-600 mt-1 shrink-0"
                  />

                  <span className="text-gray-700 font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="/#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg"
              >
                Request a Quotation
              </a>

              <a
                href="/#services"
                className="border border-blue-200 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-gray-800 transition inline-flex items-center"
              >
                Back to Services
                <ArrowRight size={18} className="ml-2" />
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}