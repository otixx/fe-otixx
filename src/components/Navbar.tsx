"use client";
import React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <nav className="sticky inset-x-0 top-0 z-10 h-20 w-full border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-full items-center justify-between">
          <Link href="/" className="flex font-semibold">
            <Image
              draggable={false}
              src={"/logo.png"}
              width={100}
              height={100}
              alt="logo"
            />
          </Link>

          <div className="flex items-center gap-2">
            {session?.user ? (
              <Button
                onClick={() => signOut()}
                className={buttonVariants({
                  size: "btnNavbar",
                  className: "items-center gap-1 sm:flex",
                })}
              >
                Logout
              </Button>
            ) : (
              <>
                <Link
                  href="/"
                  onClick={() => signIn()}
                  className={buttonVariants({
                    size: "btnNavbar",
                    className: "hidden md:block",
                    variant: "ghost",
                  })}
                >
                  Masuk
                </Link>

                <Link
                  href="/user/eo/register"
                  className={buttonVariants({
                    size: "btnNavbar",
                    className: "hidden items-center gap-1 sm:flex",
                  })}
                >
                  Daftar
                </Link>
              </>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className="bg-[#F5EFFF] px-2 shadow-none md:hidden lg:hidden xl:hidden"
                  variant="default"
                >
                  <Menu size={23} className="text-first" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-44 bg-second text-sm font-medium">
                {session?.user ? (
                  <div className="mt-10 space-y-5 py-4">
                    <div className="transition duration-300">
                      <Link href="/profile">Profile EO</Link>
                    </div>
                    <div className="transition duration-300">
                      <Link href="/profile">Tiket Saya</Link>
                    </div>
                    <div className="transition duration-300">
                      <Link href="/profile">Detail Profile</Link>
                    </div>
                    <div className="transition duration-300">
                      <Link href="/profile">Keluar</Link>
                    </div>
                  </div>
                ) : (
                  <div className="mt-10 space-y-5 py-4">
                    <div className="transition duration-300">
                      <Link href="/profile">Daftar</Link>
                    </div>
                    <div className="transition duration-300">
                      <Link href="/profile">Masuk</Link>
                    </div>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
