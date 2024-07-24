"use client";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-20 w-full border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-full items-center justify-between">
          <Link href="/" className="flex font-semibold">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500">
              <span className="font-bold text-white">Logo</span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className={buttonVariants({
                size: "lg",
                variant: "ghost",
              })}
            >
              Masuk
            </Link>
            <Link
              href="/user/eo/register"
              className={buttonVariants({
                size: "lg",
                className: "hidden items-center gap-1 sm:flex",
              })}
            >
              Daftar
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
