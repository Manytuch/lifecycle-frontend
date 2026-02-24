export default function Hero() {
    return (
        <section id="home" className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left content */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Reliable Logistics & Trading Solutions <br />
                        <span className="text-blue-600">Across South Sudan</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600">
                        We provide efficient customs clearance, transportation,
                        warehousing, brokerage, and general supply services at
                        Nimule Border Station and Juba International Airport.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition"
                        >
                            Request a Quote
                        </a>

                        <a
                            href="#contact"
                            className="border border-gray-300 px-6 py-3 rounded-md text-lg font-medium hover:border-blue-600 hover:text-blue-600 transition"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Right visual placeholder */}
                <div className="w-full h-80 rounded-lg overflow-hidden">
  <img
    src="/hero-logistics.jpeg"
    alt="Logistics and customs operations"
    className="w-full h-full object-cover"
  />
</div>

            </div>
        </section>
    );
}