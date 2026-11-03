import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", style: ["normal", "italic"], axes: ["opsz"] });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: `${site.name} | Hair spa, styling & bridal makeup in Trichy`,
  description: site.intro,
  openGraph: { title: site.name, description: site.intro, type: "website" },
};
export const viewport = { themeColor: "#1a0b22" };

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "HairSalon", name: site.name, telephone: site.phone,
    address: site.address, aggregateRating: { "@type": "AggregateRating", ratingValue: site.rating.score, reviewCount: site.rating.count },
  };
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
