import {
  FileText,
  Truck,
  Warehouse,
  Handshake,
  Package,
} from "lucide-react";

/* Map icon names from Strapi → actual Lucide components */
const iconMap: any = {
  FileText,
  Truck,
  Warehouse,
  Handshake,
  Package,
};

/* Fetch services from Strapi */
async function getServices() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  const data = await res.json();
  return data.data;
}

export default async function Services() {
  const services = await getServices();

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
          {services.map((service: any) => {
            const Icon = iconMap[service.icon] || Package;

            return (
              <a
                key={service.id}
                href={`/services/${service.slug}`}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all block"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-50 text-blue-600">
                  <Icon size={28} />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {service.short_description}
                </p>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}