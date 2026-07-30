import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore photos from Sunday Services, Events, Youth Ministries, and Baptisms at Wind and Fire Church A/G in Tamale, Ghana.",
  openGraph: {
    title: "Gallery | Wind and Fire Church A/G",
    description: "Explore photos from our vibrant church community in Tamale, Ghana.",
    url: "https://windandfirechurch.org/gallery",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Church Gallery - Wind and Fire Church A/G",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Wind and Fire Church A/G",
    description: "Explore photos from our vibrant church community in Tamale, Ghana.",
  },
};
