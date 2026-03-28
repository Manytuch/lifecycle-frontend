"use client";

export default function ContactForm() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const res = await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            service: formData.get("service"),
            message: formData.get("message"),
          }),
        });

        if (res.ok) {
          alert("Request sent successfully!");
          form.reset();
        } else {
          alert("Something went wrong. Please try again.");
        }
      }}
      className="bg-white text-gray-900 rounded-lg p-8 space-y-5"
    >
      <div>
        <label className="block font-medium mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Service Needed</label>
        <select
          name="service"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
        >
          <option>Customs Clearance</option>
          <option>Shipping & Transportation</option>
          <option>Warehousing</option>
          <option>Brokerage Services</option>
          <option>General Supply</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Briefly describe your request"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition"
      >
        Submit Request
      </button>
    </form>
  );
}