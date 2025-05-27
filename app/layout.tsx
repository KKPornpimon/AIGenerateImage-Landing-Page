import type { Metadata } from "next";
import { K2D } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import { Toaster } from "@/components/ui/sonner";

const k2d = K2D({
  weight: "400",
  subsets: ["latin"]
})


export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "AI Generate Image",
  description: "AI Image Generative using next.js 15, Tailwind CSS, AI Generate from text to image",
  keywords: "AI, AI Generate, AI Generate Images, สร้างภาพด้วย AI, Next.js 15, Tailwind CSS, AI Generate from text to image",
  openGraph: {
    title: 'AI Generate Image',
    description: "AI Generate from text to image",
    images: [
      {
        url: '/images/ai-gen-image.png',
        width: 1200,
        height: 630,
        alt: 'AI generated image',
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${k2d.className}  bg-gray-900`}
      >
        <ResponsiveNav />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
