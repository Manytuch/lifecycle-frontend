import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Life Cycle General Trading Co. Ltd | Logistics & Customs, South Sudan",
  description:
    "Trusted customs clearance, freight forwarding, warehousing, and logistics solutions at Nimule Border Station and Juba International Airport.",
  openGraph: {
    title: "Life Cycle General Trading Co. Ltd",
    description:
      "Reliable logistics and customs solutions across South Sudan.",
    url: "https://lifecyclegeneral.com",
    siteName: "Life Cycle General Trading",
    images: [
      {
        url: "/images/og-image.jpg", // use any good photo from your site
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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