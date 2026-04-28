import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { FloatingActions } from "@/components/FloatingActions";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Saroj Sushma Hotel, Restaurant and Banquett Hall",
  description: "Luxury Stay, Delicious Dining & Grand Celebrations in Bageshwar, Uttarakhand. Experience premium hospitality at Saroj Sushma Hotel.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-white text-slate-800">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
