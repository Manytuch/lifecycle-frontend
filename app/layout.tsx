import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Life Cycle General Trading | Logistics & Customs Clearance South Sudan",
  description:
    "Professional customs clearance, logistics, warehousing, and supply services in South Sudan.",
};
<link rel="icon" href="/favicon.ico" />
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) 
{
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}