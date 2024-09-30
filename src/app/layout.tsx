"use client";
import "./globals.css";
// import { constructMetadata } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { poppins } from "@/lib/font";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
// export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const isLoginPage = path === "/user/login" || "/user/register";
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider>
          {!isLoginPage && <Navbar />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
