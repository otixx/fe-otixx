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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const ProfilePage: React.FC = () => {
  const [edit, setEdit] = useState(true);
  const form = useForm();

  return (
    <div>
      <Breadcrumb text="Halaman Profile" />
      <div className="container mx-auto mt-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full rounded-lg bg-second p-4 md:h-96 lg:w-60">
            <div className="grid grid-cols-6">
              <div className="col-span-3 md:col-span-6 md:flex md:justify-center">
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
              <div className="col-span-3 md:hidden lg:hidden">
                <div className="my-2 w-full text-right">
                  <Link href="" className="mb-2 block text-sm text-purple-500">
                    Edit Profile
                  </Link>
                </div>
                <div className="my-2 w-full text-right">
                  <Link href="" className="block text-sm text-purple-500">
                    Ubah Password
                  </Link>
                </div>
              </div>
              <div className="col-span-12">
                <div className="w-full">
                  <p className="mt-4 text-xs text-gray-500 md:text-center lg:text-center">
                    Gunakan image maksimal berukuran 1 Mb
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-second p-4">
            {!edit ? (
              <>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-8">
                  <div className="col-span-3 space-y-8">
                    <div>
                      <p className="text-gray-500">Username</p>
                      <p className="font-medium">Rajih Kharissuha</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Email</p>
                      <p className="font-medium">RajihKharissuha@gmail.com</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Nomor Telepon</p>
                      <p className="font-medium">0000000000000</p>
                    </div>
                  </div>
                  <div className="col-span-3 space-y-8">
                    <div>
                      <p className="text-gray-500">Tanggal Lahir</p>
                      <p className="font-medium">Rajih Kharissuha</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Alamat</p>
                      <p className="font-medium">Rajih Kharissuha</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Jenis Kelamin</p>
                      <p className="font-medium">Laki Laki</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
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
                              Username
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
                              Nama Lengkap
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
                              Nomor Telepon
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

                    <div className="space-y-4">
                      <FormField
                        name="noTelepon"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-labelForm">
                              No Telepon
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
                        name="alamat"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-labelForm">
                              Alamat
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
                        name="jenisKelamin"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="mb-4 text-labelForm">
                              Jenis Kelamin
                            </FormLabel>
                            <RadioGroup
                              defaultValue="comfortable"
                              className="mt-1 flex items-center gap-2"
                              {...field}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="default" id="r1" />
                                <Label htmlFor="r1">Laki - Laki</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="comfortable" id="r2" />
                                <Label htmlFor="r2">Perempuan</Label>
                              </div>
                            </RadioGroup>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex justify-end md:mt-0">
                    <Button size="lg" className="w-full md:w-auto">
                      Submit Perubahan
                    </Button>
                  </div>
                </FormProvider>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
