import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kunal Singla - QA Automation Engineer",
  description: "Delivering reliable systems with automation, precision, and quality at scale",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark"> {/* force dark mode */}
      <body className="antialiased bg-slate-900 text-slate-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
