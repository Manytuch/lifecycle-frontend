import {
    ShieldCheck,
    Clock,
    MapPin,
    Users,
  } from "lucide-react";
  
  const reasons = [
    {
      title: "Trusted & Reliable",
      description:
        "We are known for integrity, transparency, and dependable service in customs clearance and logistics operations.",
      icon: ShieldCheck,
    },
    {
      title: "Fast & Efficient Operations",
      description:
        "Our experienced team ensures timely clearance, transportation, and delivery without unnecessary delays.",
      icon: Clock,
    },
    {
      title: "Strategic Locations",
      description:
        "We operate at Nimule Border Station and Juba International Airport, giving us direct access to major trade routes.",
      icon: MapPin,
    },
    {
      title: "Experienced Team",
      description:
        "Led by industry professionals with years of experience in freight forwarding, customs, and logistics management.",
      icon: Users,
    },
  ];
  
  export default function WhyChooseUs() {
    return (
        <section id="why-us" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We combine experience, efficiency, and strategic positioning to
              deliver logistics solutions you can trust.
            </p>
          </div>
  
          {/* Reasons grid */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <reason.icon size={28} />
                </div>
  
                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  {reason.title}
                </h3>
  
                <p className="mt-2 text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }