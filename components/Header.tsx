export default function Header() {
    return (
      <header className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo / Company Name */}
          <div className="text-xl font-bold text-blue-700">
            Life Cycle General Trading
          </div>
  
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
  <a href="#home" className="hover:text-blue-600">Home</a>
  <a href="#services" className="hover:text-blue-600">Services</a>
  <a href="#why-us" className="hover:text-blue-600">Why Us</a>
  <a href="#certificates" className="hover:text-blue-600">
  Certificates
</a>
  <a href="#contact" className="hover:text-blue-600">Contact</a>
</nav>
  
          {/* CTA Button */}
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
            Request a Quote
          </button>
        </div>
      </header>
    );
  }