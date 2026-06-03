import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anirudh-kumar-r.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anirudh Kumar R | AI Engineer",
    template: "%s | Anirudh Kumar R"
  },
  description:
    "Portfolio of Anirudh Kumar R, an AI-native software engineer building agentic automation, RAG systems, AWS ML pipelines, and deepfake detection research.",
  keywords: [
    "Anirudh Kumar R",
    "AI Engineer",
    "Agentic AI",
    "RAG",
    "AWS",
    "Deepfake Detection",
    "n8n Automation",
    "SASTRA University"
  ],
  authors: [{ name: "Anirudh Kumar R" }],
  creator: "Anirudh Kumar R",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Anirudh Kumar R | AI Engineer",
    description:
      "AI-native software engineer building production RAG, automation, AWS ML, and deepfake detection systems.",
    siteName: "Anirudh Kumar R Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Anirudh Kumar R portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Anirudh Kumar R | AI Engineer",
    description:
      "Production AI systems, agentic workflows, RAG hallucination detection, and AWS ML architecture.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
  themeColor: "#020617"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body>{children}</body>
    </html>
  );
}
