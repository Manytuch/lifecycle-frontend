import ContactForm from "./ContactForm";

async function getCompanyInfo() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/company-info`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch company info");
  }

  const data = await res.json();
  return data.data;
}

export default async function Contact() {
  const company = await getCompanyInfo();

  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Request a Quote
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Tell us about your shipment or service requirements, and our team will respond with a tailored solution.
          </p>

          <div className="mt-8 space-y-4 text-gray-300">
            <p><strong>📍 Location:</strong> {company.address}</p>
            <p><strong>📞 Phone:</strong> {company.phone}</p>
            <p><strong>✉️ Email:</strong> {company.email}</p>
          </div>
        </div>

        {/* ONLY THIS */}
        <ContactForm />

      </div>
    </section>
  );
}