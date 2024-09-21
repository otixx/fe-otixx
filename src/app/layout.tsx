"use client";
import "./globals.css";
// import { constructMetadata } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { poppins } from "@/lib/font";
import { SessionProvider } from "next-auth/react";
// export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
