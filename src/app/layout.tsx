import type { Metadata } from "next";
import { Libre_Baskerville, Karla } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../site.config";
import { JsonLd } from "../components/JsonLd";

const display = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Karla({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  metadataBase: new URL("https://androidkrayze.github.io/jimmys-barber-demo"),
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: "website",
    locale: "en_GB",
    siteName: siteConfig.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${sans.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
