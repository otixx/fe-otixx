"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormReq } from "@/hook/useForm";
import { useLogin } from "@/hook/useAuth";
import { EyeClosedIcon } from "@radix-ui/react-icons";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function LoginPage() {
  const [showPassword, setshowPassword] = useState(false);
  const { onSubmit, msg } = useLogin();
  const { formlogin } = useFormReq();
  return (
    <div className="grid h-[100dvh] grid-cols-12">
      <div className="hidden bg-first p-10 text-white xl:col-span-5 xl:block 2xl:block">
        <div className="space-y-10 md:mt-0 xl:mt-0 xl:px-14 2xl:mt-14">
          <Link
            href="/"
            className="relative w-full font-semibold"
            draggable={false}
          >
            <Image
              draggable={false}
              src="/logo.png"
              alt="logo"
              width={150}
              height={150}
            />
          </Link>
          <div>
            <h1 className="text-2xl font-medium">Selamat Datang di</h1>
            <p className="text-2xl font-bold">OTAKUTIXX</p>
          </div>
          <p className="font-medium lg:text-base xl:text-lg">
            Nikmati pengalaman mudah dan cepat dalam memesan tiket event Jepang
            favorit Anda. Masuk sekarang dan jadilah bagian dari momen tak
            terlupakan di setiap acara yang Anda nantikan!
          </p>
        </div>
        <div className="relative mt-10 px-14">
          <Image
            draggable={false}
            src={"/auth/login.png"}
            alt="loginImg"
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className="col-span-12 flex items-center justify-center xl:col-span-7 xl:block xl:p-10 2xl:col-span-7">
        <div className="mt-5 w-full max-w-lg p-5 xl:mt-0 xl:max-w-2xl 2xl:mt-10 2xl:max-w-2xl">
          <h1 className="text-center text-sm font-bold text-first xl:text-left xl:text-2xl 2xl:text-left 2xl:text-2xl">
            Login untuk masuk
          </h1>
          <Form {...formlogin}>
            <form
              onSubmit={formlogin.handleSubmit(onSubmit)}
              className="mt-10 space-y-4"
            >
              <FormField
                control={formlogin.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="focus-within:text-first">
                    <FormLabel>Email / username</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 border-gray-500 focus:border-first focus:text-black focus:outline-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formlogin.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="focus-within:text-first">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="h-12 border-gray-500 focus:border-first focus:text-black focus:outline-none"
                          type={showPassword ? "text" : "password"}
                          {...field}
                        />
                        <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-400">
                          {showPassword ? (
                            <EyeClosedIcon
                              className="h-5 w-5 text-gray-500 hover:text-first"
                              onClick={() => setshowPassword(false)}
                            />
                          ) : (
                            <EyeIcon
                              className="h-5 w-5 text-gray-500 hover:text-first"
                              onClick={() => setshowPassword(true)}
                            />
                          )}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {msg && (
                <p className="text-[0.8rem] font-medium text-destructive">
                  {" "}
                  {msg}
                </p>
              )}
              <Link href="/forgot-password">
                <p className="mt-5 text-end text-sm text-first">
                  Lupa Password ?
                </p>
              </Link>
              <Button type="submit" className="h-12 w-full shadow-xl">
                Masuk
              </Button>
              <p className="mt-5 text-center text-sm">
                Belum punya akun ?
                <Link href="/user/register">
                  <span className="font-semibold text-first hover:underline">
                    {" "}
                    Sign Up
                  </span>
                </Link>
              </p>
              <div className="flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <Button
                type="submit"
                className="flex h-12 w-full items-center gap-2 bg-white text-black shadow-md hover:bg-slate-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#ffc107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                  ></path>
                  <path
                    fill="#ff3d00"
                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                  ></path>
                  <path
                    fill="#1976d2"
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                  ></path>
                </svg>
                Masuk dengan google
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
