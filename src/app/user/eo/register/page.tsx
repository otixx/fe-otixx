"use client";
import Breadcrumb from "@/components/Breadcrumb";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FormProvider, useForm } from "react-hook-form";
import React from "react";

const page = () => {
  const form = useForm();

  return (
    <div>
      <Breadcrumb text="Halaman Daftar EO" />
      <MaxWidthWrapper>
        <div className="grid grid-cols-12 pt-10 md:gap-14">
          <div className="col-span-12 md:col-span-6">
            <FormProvider {...form}>
              <FormField
                control={form.control}
                name="namaeo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama EO</FormLabel>
                    <FormControl>
                      <Input />
                    </FormControl>
                    <FormMessage />
                    <FormLabel>Nomor Telepon</FormLabel>
                    <FormControl>
                      <Input />
                    </FormControl>
                    <FormMessage />
                    <FormLabel>Kota</FormLabel>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih Kota" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="jember">Jember</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormLabel>Instagram</FormLabel>
                    <FormControl>
                      <Input />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormProvider>
          </div>
          <div className="col-span-12 md:col-span-6">
            <FormProvider {...form}>
              <FormItem>
                <FormLabel>Deskripsi Singkat EO</FormLabel>
                <Textarea />
                <div className="flex h-4 w-full items-center pt-5">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="px-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Saya setuju dengan{" "}
                    <span className="text-first cursor-pointer">
                      Syarat & Ketentuan{" "}
                    </span>
                    yang berlaku.
                  </label>
                </div>
              </FormItem>
            </FormProvider>
          </div>
        </div>
        <div className="flex w-full justify-end pt-10">
          <Button className={buttonVariants({ size: "lg" })}>Daftar</Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
