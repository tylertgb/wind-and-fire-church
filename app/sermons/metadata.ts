import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermons",
  description: "Watch and listen to powerful sermons from Rev. Aaron Lambon Fant. Explore Faith Convention messages, Wisdom Series, and Power Encounters at Wind and Fire Church A/G.",
  openGraph: {
    title: "Sermons | Wind and Fire Church A/G",
    description: "Watch and listen to powerful sermons from Rev. Aaron Lambon Fant.",
    url: "https://windandfirechurch.org/sermons",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sermons from Wind and Fire Church A/G",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sermons | Wind and Fire Church A/G",
    description: "Watch and listen to powerful sermons from Rev. Aaron Lambon Fant.",
  },
};
