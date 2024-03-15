import type { Metadata } from "next"; 
import "./globals.css";
import Head from 'next/head';
 

export const metadata: Metadata = {
  title: "Vi Ly Huu's Portfolio",
  description: "This is my Portfolio CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body>{children}</body>
    </html>
  );
}
