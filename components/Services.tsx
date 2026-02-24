import {
    FileText,
    Truck,
    Warehouse,
    Handshake,
    Package,
  } from "lucide-react";
  const services = [
    {
      title: "Customs Clearance",
      slug: "customs-clearance",
      description:
        "Fast and compliant customs clearance services at Nimule Border Station and Juba International Airport.",
      icon: FileText,
    },
    {
      title: "Shipping & Transportation",
      slug: "shipping-transportation",
      description:
        "Reliable local and cross-border transportation ensuring timely and secure delivery of goods.",
      icon: Truck,
    },
    {
      title: "Warehousing",
      slug: "warehousing",
      description:
        "Safe and strategic warehousing solutions for short-term and long-term storage needs.",
      icon: Warehouse,
    },
    {
      title: "Brokerage Services",
      slug: "brokerage-services",
      description:
        "Professional documentation and brokerage services to simplify trade and logistics processes.",
      icon: Handshake,
    },
    {
      title: "General Supply",
      slug: "general-supply",
      description:
        "Efficient supply of goods and materials tailored to business and organizational needs.",
      icon: Package,
    },
  ];
  
  export default function Services() {
    return (
        <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Comprehensive logistics and trading solutions designed to move your
              business forward efficiently and reliably.
            </p>
          </div>
  
          {/* Services grid */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
  <a
    key={index}
    href={`/services/${service.slug}`}
    className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all block"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-50 text-blue-600">
      <service.icon size={28} />
    </div>

    <h3 className="mt-4 text-xl font-semibold text-gray-900">
      {service.title}
    </h3>

    <p className="mt-2 text-gray-600">
      {service.description}
    </p>
  </a>
))}
          </div>
  
        </div>
      </section>
    );
  }