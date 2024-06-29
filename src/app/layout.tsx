import type { Metadata } from "next";
import { poppins } from "@/fonts";
import { Providers } from "./Providers";
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
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
