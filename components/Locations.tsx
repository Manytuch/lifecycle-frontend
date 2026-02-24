import { MapPin, Plane, Truck } from "lucide-react";

const locations = [
  {
    title: "Nimule Border Station",
    description:
      "Our strategic presence at Nimule Border Station enables efficient handling of cross-border imports and exports, ensuring smooth customs clearance and transportation.",
    icon: Truck,
  },
  {
    title: "Juba International Airport",
    description:
      "Operating at Juba International Airport allows us to manage air freight, urgent shipments, and international cargo with speed and reliability.",
    icon: Plane,
  },
];

export default function Locations() {
  return (
    <section id="locations" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Locations
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Strategically positioned to support seamless logistics and trade
            operations across South Sudan.
          </p>
        </div>

        {/* Locations grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-50 text-blue-600">
                  <location.icon size={26} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {location.title}
                </h3>
              </div>

              <p className="mt-4 text-gray-600">
                {location.description}
              </p>

              <div className="mt-6 flex items-center text-blue-600 font-medium">
                <MapPin className="mr-2" size={18} />
                South Sudan
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}