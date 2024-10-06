"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const ProtectedProviders = ({ children }: { children: ReactNode }) => {
  const path = usePathname();
  const authPage =
    path === "/user/login" ||
    path === "/user/register" ||
    path === "/user/otp" ||
    path === "/user/forgot-password" ||
    path.startsWith("/user/reset-password");
  return (
    <SessionProvider>
      {!authPage && <Navbar />}
      {children}
      {!authPage && <Footer />}
    </SessionProvider>
  );
};

export default ProtectedProviders;
