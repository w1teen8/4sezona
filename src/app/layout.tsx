import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Loader from "@/components/layout/Loader";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyBookingButton from "@/components/layout/StickyBookingButton";
import settings from "@/data/settings.json";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://w1teen8.github.io/4sezona";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "4 СЕЗОНА — салон краси у Тарасівці",
    template: "%s — 4 СЕЗОНА",
  },
  description:
    "4 СЕЗОНА — преміальний салон краси у Тарасівці. Манікюр, педикюр, стрижки, фарбування волосся, брови, вії, макіяж, SPA-догляд, косметологія та масаж. Запис онлайн.",
  keywords: [
    "салон краси Тарасівка",
    "манікюр Тарасівка",
    "фарбування волосся Тарасівка",
    "педикюр Тарасівка",
    "косметологія Тарасівка",
    "4 сезона салон краси",
  ],
  authors: [{ name: settings.brand }],
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: siteUrl,
    siteName: settings.brand,
    title: "4 СЕЗОНА — салон краси у Тарасівці",
    description:
      "Сучасний простір краси у Тарасівці: манікюр, волосся, косметологія та професійний догляд в одному місці.",
  },
  twitter: {
    card: "summary_large_image",
    title: "4 СЕЗОНА — салон краси у Тарасівці",
    description:
      "Сучасний простір краси у Тарасівці: манікюр, волосся, косметологія та професійний догляд в одному місці.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: settings.brand,
    image: `${siteUrl}/og-image.jpg`,
    "@id": siteUrl,
    url: siteUrl,
    telephone: settings.phoneHref,
    priceRange: "₴₴₴",
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.address,
      addressLocality: "Тарасівка",
      addressCountry: "UA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.3429698,
      longitude: 30.3053169,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    sameAs: [settings.socials.instagram, settings.socials.facebook],
  };

  return (
    <html
      lang="uk"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Loader />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <StickyBookingButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
