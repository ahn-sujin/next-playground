import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { NavLinks } from "@/components/molecules/NavLinks";
import AnimationProvider from "@/provider/AnimationProvider";
import { RouterWrapperProvider } from "@/provider/RouterWrapperProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Lab | ASJ",
  description: "ASJ의 우당탕탕 개발 실험실",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RouterWrapperProvider>
          <AnimationProvider>
            <NavLinks />
            <main> {children}</main>
          </AnimationProvider>
        </RouterWrapperProvider>
      </body>
    </html>
  );
}
