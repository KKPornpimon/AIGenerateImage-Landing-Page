import type { Metadata } from "next";
import { Geist, Geist_Mono, K2D, Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import { Toaster } from "@/components/ui/sonner";

const k2d = K2D({
  weight: "400",
  subsets: ["latin"]
})

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"]
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "AI Image Genaration",
  description: "AI Image Generation using next.js 15, Tailwind CSS",
  keywords: "AI, AI Generation, AI Generate, AI Generate Images, สร้างภาพด้วย AI, Next.js 15, Tailwind CSS,"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${k2d.className} ${poppins.className}  bg-gray-900`}
      >
        <ResponsiveNav />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
