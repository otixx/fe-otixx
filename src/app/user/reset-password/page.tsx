"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";

const ResetPassPage: React.FC = () => {
  const form = useForm();
  return (
    <div>
      <Breadcrumb text="Halaman Lupa Password" />
      <div className="container mx-auto mt-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full rounded-lg bg-second p-4 md:h-96 lg:w-60">
            <div className="grid grid-cols-6">
              <div className="col-span-6 flex justify-center md:col-span-6">
                <div className="relative h-32 w-32">
                  <Image
                    src="/dash.png"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    alt="Profile"
                  />
                  <button className="absolute inset-0 m-auto flex h-8 w-24 items-center justify-center rounded-full bg-purple-500 px-4 py-2 text-xs font-bold text-white">
                    Edit Photo
                  </button>
                </div>
              </div>

              <div className="col-span-12">
                <div className="w-full">
                  <p className="mt-4 text-center text-xs text-gray-500">
                    Gunakan image maksimal berukuran 1 Mb
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-second p-4">
            <>
              <FormProvider {...form}>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-10">
                  <div className="space-y-4">
                    <FormField
                      name="username"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-labelForm">
                            Password Lama
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="mb-4 mt-1 h-[40px] border border-borderForm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="namaLengkap"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-labelForm">
                            Password Baru
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="mb-4 mt-1 h-[40px] border border-borderForm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="nomorTelepon"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-labelForm">
                            Konfirmasi Password
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="mb-4 mt-1 h-[40px] border border-borderForm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="start mt-5 flex">
                  <Button size="lg" className="w-full md:w-auto">
                    Submit Perubahan
                  </Button>
                </div>
              </FormProvider>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassPage;
