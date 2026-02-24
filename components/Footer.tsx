export default function Footer() {
    return (
      <footer className="bg-gray-950 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
  
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Life Cycle General Trading
            </h3>
            <p className="mt-4 text-gray-400">
              Providing reliable customs clearance, logistics, warehousing,
              brokerage, and general supply solutions across South Sudan.
            </p>
          </div>
  
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>📍 Juba & Nimule, South Sudan</li>
              <li>📞 +211 923 339 344</li>
              <li>✉️ rundiang03@gmail.com</li>
            </ul>
          </div>
  
        </div>
  
        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Life Cycle General Trading Company Limited.
          All rights reserved.
        </div>
      </footer>
    );
  }