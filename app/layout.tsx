import type { Metadata } from "next"; 
import "./globals.css";
import Head from 'next/head';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Vi Ly Huu's Portfolio",
  description: "This is my Portfolio CV!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <Head>
        <Link ref="icon" href="/myfavicon.ico"/>
      </Head>
      <body>{children}</body>
    </html>
  );
}
