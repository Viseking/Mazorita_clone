import type { Metadata } from "next";
import "./globals.css"

import gsap from "gsap"
import { SplitText } from "gsap/all"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(SplitText, ScrollTrigger)

export const metadata: Metadata = {
  title: "Mozorita Clone",
  description: "A clone of the Mozorita website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressContentEditableWarning
        className={`dm-serif-text-regular antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
