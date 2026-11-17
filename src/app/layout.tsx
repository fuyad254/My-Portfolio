import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { siteConfig } from "@/config/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description:
    "Portfolio of MD Fuyad Al Khatib, a full stack developer building responsive web experiences with React, Next.js and TypeScript.",
  authors: [{ name: siteConfig.name }],
  keywords: [
    "MD Fuyad Al Khatib",
    "Full Stack Developer",
    "Frontend Developer",
    "MERN Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description:
      "Portfolio of MD Fuyad Al Khatib, a full stack developer building responsive web experiences with React, Next.js and TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description:
      "Portfolio of MD Fuyad Al Khatib, a full stack developer building responsive web experiences with React, Next.js and TypeScript.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-canvas text-fg">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#main-content"
          className="sr-only rounded-full bg-accent px-4 py-2 text-sm font-semibold text-[#04211d] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120]"
        >
          Skip to content
        </a>
        <div
          aria-hidden="true"
          className="noise-overlay pointer-events-none fixed inset-0 z-[1]"
        />
        {children}
      </body>
    </html>
  );
}
