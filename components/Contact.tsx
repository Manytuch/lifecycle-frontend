"use client";
export default function Contact() {
    return (
        <section id="contact" className="bg-gray-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Left content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Request a Quote
                    </h2>
                    <p className="mt-4 text-gray-300 text-lg">
                        Tell us about your shipment or service needs, and our team will get
                        back to you promptly with a tailored solution.
                    </p>

                    <div className="mt-8 space-y-4 text-gray-300">
                        <p><strong>📍 Location:</strong> Juba & Nimule, South Sudan</p>
                        <p><strong>📞 Phone:</strong> +211 923 339 344</p>
                        <p><strong>✉️ Email:</strong> rundiang03@gmail.com</p>
                    </div>
                </div>

                {/* Form */}
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
                            name="name"
                            type="text"
                            placeholder="Your name"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Email Address</label>
                        <input
                            name="email"
                            type="email"
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

            </div>
        </section>
    );
}