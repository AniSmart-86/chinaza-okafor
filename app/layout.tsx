import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chinaza Okafor — Data Analyst | Business Intelligence & Data Visualization",
  description: "Official portfolio and interactive analytics lab of Chinaza Okafor. Transforming raw data into actionable insights, Power BI dashboards, SQL analysis, and business strategies.",
  keywords: ["Data Analyst", "Chinaza Okafor", "Business Intelligence", "Power BI", "SQL", "Excel Analytics", "Data Visualization", "Lagos Nigeria Analyst"],
  openGraph: {
    title: "Chinaza Okafor — Data Analyst Portfolio & Interactive Analytics Lab",
    description: "Explore interactive business analytics tools, Power BI case studies, SQL data models, and financial forecasts.",
    images: ["/images/chinaza_profile.jpg"],
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full dark antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#080d1a] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}

