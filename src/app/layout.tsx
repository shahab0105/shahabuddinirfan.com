import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Shahab Uddin Irfan | Full-Stack Engineer",
  description:
    "Full-Stack Engineer | AI Chatbot Integrator | Remote SaaS Specialist. Crafting scalable web and mobile experiences.",
  openGraph: {
    url: "https://shahabuddinirfan.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
