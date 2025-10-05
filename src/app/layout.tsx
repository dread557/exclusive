import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopAd from "./layouts/TopAd";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exclusive",
  description: "E-commerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <TopAd />
        {children}
      </body>
    </html>
  );
}
