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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useFormReq } from "@/hook/useForm";
import { EyeClosedIcon } from "@radix-ui/react-icons";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function OtpPage() {
  const [showPassword, setshowPassword] = useState(false);
  const { formRegister } = useFormReq();
  return (
    <div className="grid h-[100dvh] grid-cols-12">
      <div className="hidden bg-first p-10 text-white xl:col-span-4 xl:block 2xl:block">
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
      <div className="col-span-12 flex items-center justify-center xl:col-span-8 2xl:col-span-8">
        <div className="mt-5 w-full max-w-lg p-5 xl:mt-0 xl:max-w-2xl 2xl:mt-0 2xl:max-w-2xl">
          <h1 className="mb-10 text-center text-sm font-bold text-first xl:text-left xl:text-2xl 2xl:text-left 2xl:text-2xl">
            OTP
          </h1>
          <p>Silakan masukkan OTP yang dikirimkan ke email Anda</p>
          <Form {...formRegister}>
            <form
              //   onSubmit={formRegister.handleSubmit(onSubmit)}
              className="mt-10 space-y-4"
            >
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <InputOTPSlot className="h-16 w-16 text-lg" index={0} />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot className="h-16 w-16 text-lg" index={1} />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot className="h-16 w-16 text-lg" index={2} />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot className="h-16 w-16 text-lg" index={3} />
                </InputOTPGroup>
              </InputOTP>
              <h1 className="text-sm font-medium text-textSecondary peer-disabled:cursor-not-allowed">
                Tidak menerima OTP?{" "}
                <span className="cursor-pointer text-first">
                  Kirim ulang OTP
                </span>
              </h1>
              <Button type="submit" className="h-12 w-full shadow-xl">
                Kirim
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
