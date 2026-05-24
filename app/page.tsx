import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Stats from "@/components/stats";
import Testimonial from "@/components/Testimonial";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Life Cycle General Trading | Logistics & Customs Clearance South Sudan",
  description:
    "Professional customs clearance, logistics, warehousing, and supply services in South Sudan.",
};
export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutUs />
      <Stats />
      <Testimonial />
      <Locations />
      <Contact />
    </main>
  );
}