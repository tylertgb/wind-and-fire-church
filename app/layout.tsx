import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ClientProvider from "@/components/providers/ClientProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wind and Fire Church A/G | Tamale, Ghana",
    template: "%s | Wind and Fire Church A/G",
  },
  description: "Experience the power of worship and revival at Wind and Fire Church Assembly of God in Tamale, Ghana. A Spirit-filled Pentecostal community empowering lives through faith, prayer, and the Holy Spirit.",
  keywords: [
    "Wind and Fire Church",
    "Assemblies of God",
    "Church in Tamale",
    "Pentecostal Church Ghana",
    "Revival Church",
    "Holy Spirit",
    "Worship",
    "Prayer",
    "Faith Community",
    "Northern Ghana Church",
    "Tamale"
  ],
  authors: [{ name: "Wind and Fire Church A/G" }],
  creator: "Wind and Fire Church A/G",
  publisher: "Wind and Fire Church A/G",
  metadataBase: new URL("https://windandfirechurch.onrender.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://windandfirechurch.onrender.com",
    siteName: "Wind and Fire Church A/G",
    title: "Wind and Fire Church A/G | Tamale, Ghana",
    description: "Experience the power of worship and revival at Wind and Fire Church Assembly of God in Tamale, Ghana.",
    images: [
      {
        url: "https://windandfirechurch.onrender.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wind and Fire Church Assemblies of God - Tamale, Ghana",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wind and Fire Church A/G | Tamale, Ghana",
    description: "Experience the power of worship and revival at Wind and Fire Church Assembly of God in Tamale, Ghana.",
    images: ["https://windandfirechurch.onrender.com/og-image.png"],
    creator: "@windandfirechurch",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <ClientProvider>
          {children}
        </ClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
