import type { Metadata } from "next";
import { Geist, Noto_Nastaliq_Urdu } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Main font for all English text
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Urdu font, used for "پرواز" in the logo and hero
const nastaliq = Noto_Nastaliq_Urdu({
  variable: "--font-nastaliq",
  subsets: ["arabic"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Parwaaz: Opportunities for Pakistani women",
  description:
    "Parwaaz connects Pakistani women with jobs, scholarships, fellowships and learning opportunities, with personalised recommendations and AI resume feedback.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${nastaliq.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
