import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd, personSchema } from "@/components/seo/JsonLd";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// TODO: replace with the real production domain once known.
const siteUrl = "https://TODO-your-domain.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "J. Rotich — Risk, Audit & Compliance Leader",
    template: "%s | J. Rotich",
  },
  description:
    "J. Rotich is a Risk, Audit & Compliance leader with 15+ years of experience across 25+ countries, currently Global Internal Audit Lead at an international NGO.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "J. Rotich",
    title: "J. Rotich — Risk, Audit & Compliance Leader",
    description:
      "Risk, Audit & Compliance leader with 15+ years of experience across 25+ countries.",
    images: [
      {
        url: "/images/placeholder-avatar.svg",
        width: 480,
        height: 480,
        alt: "J. Rotich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "J. Rotich — Risk, Audit & Compliance Leader",
    description:
      "Risk, Audit & Compliance leader with 15+ years of experience across 25+ countries.",
    images: ["/images/placeholder-avatar.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={personSchema} />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
