import { notFound } from "next/navigation";

const services = {
  "customs-clearance": {
    title: "Customs Clearance",
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
    description:
      "Reliable local and cross-border transportation solutions ensuring timely and secure delivery of goods.",
    details: [
      "Local and regional transportation",
      "Cargo handling and coordination",
      "Secure movement of goods",
      "On-time delivery assurance",
    ],
  },
  "warehousing": {
    title: "Warehousing",
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

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900">
          {service.title}
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          {service.description}
        </p>

        <ul className="mt-8 space-y-3 text-gray-700 list-disc list-inside">
          {service.details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="mt-10">
          <a
            href="/#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}