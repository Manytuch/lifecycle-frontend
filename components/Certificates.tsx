import { ShieldCheck, FileText, CheckCircle } from "lucide-react";

/* Map icon names from Strapi → Lucide icons */
const iconMap: any = {
  FileText,
  ShieldCheck,
  CheckCircle,
};

/* Fetch certificates from Strapi */
async function getCertificates() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/certificates`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch certificates");
  }

  const data = await res.json();
  return data.data;
}

export default async function Certificates() {
  const certificates = await getCertificates();

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
          {certificates.map((item: any) => {
            const Icon = iconMap[item.icon] || FileText;

            return (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}