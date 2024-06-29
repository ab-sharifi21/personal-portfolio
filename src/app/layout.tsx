import type { Metadata } from "next";
import { raleway } from "@/fonts";
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
      <body className={`${raleway.className} bg-primary-bg-color dark:bg-dark-primary-bg-color dark:text-dark-primary-font-color`} >
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
