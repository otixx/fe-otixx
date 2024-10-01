"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { EyeClosedIcon } from "@radix-ui/react-icons";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function RegisterPage() {
  const [showPassword, setshowPassword] = useState(false);
  const { formRegister } = useFormReq();
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
          <p className="text-lg font-medium">
            Bergabunglah dan dapatkan akses mudah ke berbagai acara. Isi
            formulir di samping untuk membuat akun Anda.
          </p>
        </div>
        <div className="relative mt-72 px-14">
          <Image
            draggable={false}
            src={"/auth/register.png"}
            alt="loginImg"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="col-span-12 items-center justify-center md:block md:p-10 xl:col-span-7 2xl:col-span-7">
        <div className="mt-5 w-full max-w-lg p-5 xl:mt-0 xl:max-w-2xl 2xl:mt-10 2xl:max-w-2xl">
          <h1 className="text-center text-sm font-bold text-first xl:text-left xl:text-2xl 2xl:text-left 2xl:text-2xl">
            Daftar untuk membeli tiket
          </h1>
          <Form {...formRegister}>
            <form
              //   onSubmit={formRegister.handleSubmit(onSubmit)}
              className="mt-10 space-y-4"
            >
              <FormField
                control={formRegister.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="focus-within:text-first">
                    <FormLabel>Username</FormLabel>
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
                control={formRegister.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="focus-within:text-first">
                    <FormLabel>Email</FormLabel>
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
                control={formRegister.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="focus-within:text-first">
                    <FormLabel>Alamat</FormLabel>
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
                control={formRegister.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem className="focus-within:text-first">
                    <FormLabel>Nomor Telepon</FormLabel>
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
                control={formRegister.control}
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
              <FormField
                control={formRegister.control}
                name="confirm_pass"
                render={({ field }) => (
                  <FormItem className="focus-within:text-first">
                    <FormLabel>Konfirmasi Password</FormLabel>
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
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium text-textSecondary peer-disabled:cursor-not-allowed"
                >
                  Saya telah membaca dan menyetujui persyaratan layanan dan
                  kebijakan privasi kami
                </label>
              </div>
              <Button type="submit" className="h-12 w-full shadow-xl">
                Lanjutkan
              </Button>
              <p className="mt-5 text-center text-sm">
                Sudah punya akun ?
                <Link href="/user/login">
                  <span className="font-semibold text-first hover:underline">
                    {" "}
                    Sign in
                  </span>
                </Link>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
