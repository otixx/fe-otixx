"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { poppins } from "@/lib/font";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
// import { constructMetadata } from "@/lib/utils";
// export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const authPage =
    path === "/user/login" ||
    path === "/user/register" ||
    path === "/user/otp" ||
    path === "/user/forgot-password" ||
    path.startsWith("/user/reset-password");
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider>
          {!authPage && <Navbar />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
