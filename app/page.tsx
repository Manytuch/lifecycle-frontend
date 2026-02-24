import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Certificates from "@/components/Certificates";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Certificates />
      <Locations />
      <Contact />
    </main>
  );
}