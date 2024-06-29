import type { Metadata } from "next";
import { poppins } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdullah Sharifi - Portfolio",
  description: "Abdullah Sharifi - Front-End Developer, Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
