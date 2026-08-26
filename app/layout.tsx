import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import profile from "@/content/profile.json";
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

const title = `${profile.name} — ${profile.hero.headline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description: profile.about.short,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: profile.name,
    title,
    description: profile.about.short,
    images: [
      {
        url: "/images/placeholder-avatar.svg",
        width: 480,
        height: 480,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.about.short,
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
        <JsonLd data={profile.jsonLd} />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
