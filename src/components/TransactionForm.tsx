import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { useTransactionForm } from "@/hook/useTransactionForm";
import { buttonVariants } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
interface ITransaction {
  formName: string;
  kategori: string;
}
const TransactionForm = ({ formName, kategori }: ITransaction) => {
  const form = useForm();
  const { members, check, addMember, handleCheckboxChange } =
    useTransactionForm();

  return (
    <div>
      <>
        <FormProvider {...form}>
          <FormField
            control={form.control}
            name={formName}
            render={({ field }) => (
              <FormItem>
                <div className="grid grid-cols-12">
                  <div className="col-span-6">
                    <FormLabel className="text-labelForm">
                      Nama Lengkap
                    </FormLabel>
                    <FormControl>
                      <Input className="mb-4 mt-1 h-12 w-96 border border-borderForm" />
                    </FormControl>
                    <FormMessage />

                    {kategori === "standkomunitas" && (
                      <>
                        <FormLabel className="text-labelForm">
                          Nama Komunitas
                        </FormLabel>
                        <FormControl>
                          <Input className="mb-4 mt-1 h-12 w-96 border border-borderForm" />
                        </FormControl>
                        <FormMessage />
                        <FormLabel className="text-labelForm">
                          Nama Usaha
                        </FormLabel>
                        <FormControl>
                          <Input className="mb-4 mt-1 h-12 w-96 border border-borderForm" />
                        </FormControl>
                        <FormMessage />
                      </>
                    )}
                    <FormLabel className="text-labelForm">
                      Nomor Telepon
                    </FormLabel>
                    <FormControl>
                      <Input className="mb-4 mt-1 h-12 w-96 border border-borderForm" />
                    </FormControl>
                    <FormMessage />
                    <FormLabel className="font-medium text-labelForm">
                      Asal Kota
                    </FormLabel>
                    <FormControl>
                      <Input className="mb-4 mt-1 h-12 w-96 border border-borderForm" />
                    </FormControl>
                    <FormMessage />
                    <FormLabel className="text-labelForm">
                      Nama Instagram
                    </FormLabel>
                    <FormControl>
                      <Input className="mb-4 mt-1 h-12 w-96 border border-borderForm" />
                    </FormControl>
                    <FormMessage />
                  </div>

                  <div className="col-span-6">
                    {(kategori === "coscomp" ||
                      kategori === "musik" ||
                      kategori === "coswalk") && (
                      <>
                        <FormLabel className="text-labelForm">
                          Nama Cosplay
                        </FormLabel>
                        <FormControl>
                          <Input className="mb-4 mt-1 h-12 w-96 border border-borderForm" />
                        </FormControl>
                        <FormMessage />
                      </>
                    )}
                    {(kategori === "coscomp" ||
                      kategori === "musik" ||
                      kategori === "coswalk") && (
                      <>
                        <FormLabel className="text-labelForm">
                          Judul Lagu
                        </FormLabel>
                        <FormControl>
                          <Input className="mb-4 mt-1 h-12 w-96 border border-borderForm" />
                        </FormControl>
                        <FormMessage />
                      </>
                    )}
                    {kategori === "standkomunitas" && (
                      <>
                        <FormLabel className="text-labelForm">
                          Jumlah Stand yang Dibutuhkan
                        </FormLabel>
                        <FormControl>
                          <Input className="mb-4 mt-1 h-12 w-96 border border-borderForm" />
                        </FormControl>
                        <FormMessage />
                      </>
                    )}
                    {kategori === "standkomunitas" && (
                      <div className="mb-4 space-y-2">
                        <FormLabel className="font-medium text-labelForm">
                          Jenis Produk Usaha
                        </FormLabel>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex items-center gap-10 space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="all" />
                            </FormControl>
                            <FormLabel className="font-medium text-labelForm">
                              Food
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="mentions" />
                            </FormControl>
                            <FormLabel className="font-medium text-labelForm">
                              Photobooth
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="none" />
                            </FormControl>
                            <FormLabel className="font-medium text-labelForm">
                              Lainnya
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </div>
                    )}
                    {kategori === "perform" && (
                      <div className="mb-4 space-y-2">
                        <FormLabel className="font-medium text-labelForm">
                          Kategori Perform
                        </FormLabel>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex items-center gap-10 space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="all" />
                            </FormControl>
                            <FormLabel className="font-medium text-labelForm">
                              Dance Cover
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="mentions" />
                            </FormControl>
                            <FormLabel className="font-medium text-labelForm">
                              Dubbing
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="none" />
                            </FormControl>
                            <FormLabel className="font-medium text-labelForm">
                              Lainnya
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </div>
                    )}

                    {kategori === "standkomunitas" && (
                      <>
                        <FormLabel className="text-labelForm">
                          Jika Lainnya
                        </FormLabel>
                        <FormControl>
                          <Input className="mb-4 mt-1 h-12 w-96 border border-borderForm" />
                        </FormControl>
                        <FormMessage />
                      </>
                    )}
                    {(kategori === "coscomp" ||
                      kategori === "musik" ||
                      kategori === "coswalk") && (
                      <>
                        <FormLabel className="text-labelForm">
                          Upload Lagu
                        </FormLabel>
                        <FormControl>
                          <Input className="mb-4 mt-1 h-12 w-96 border border-borderForm" />
                        </FormControl>
                        <FormMessage />
                      </>
                    )}
                    {(kategori === "coscomp" ||
                      kategori === "musik" ||
                      kategori === "coswalk") && (
                      <>
                        <div className="flex h-12 items-center gap-2">
                          <Checkbox />
                          <label>Terdiri Berbentuk Team</label>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </FormItem>
            )}
          />
        </FormProvider>
        {(kategori === "coscomp" || kategori === "perform") && check && (
          <div className="py-10">
            <h3 className="mb-4 text-lg font-semibold">Data Team</h3>
            <FormProvider {...form}>
              <form>
                <div className="grid grid-cols-12">
                  <div className="col-span-6">
                    <FormLabel className="text-labelForm">Nama Team</FormLabel>
                    <FormControl>
                      <Input className="mb-4 mt-1 h-12 w-96 border border-borderForm" />
                    </FormControl>
                    <FormMessage />

                    {members.map((member, index) => (
                      <React.Fragment key={member.id}>
                        <FormLabel className="text-labelForm">
                          Nama Anggota {index + 1}
                        </FormLabel>
                        <FormControl>
                          <Input className="mb-4 mt-1 h-12 w-96 border border-borderForm" />
                        </FormControl>
                        <FormMessage />
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="col-span-6">
                    <FormLabel className="text-labelForm">
                      Jumlah Anggota
                    </FormLabel>
                    <FormControl>
                      <Input className="mb-4 mt-1 h-12 w-96 border border-borderForm" />
                    </FormControl>
                    <FormMessage />
                    {members.map((member: any, index: any) => (
                      <React.Fragment key={member.id}>
                        <FormLabel className="text-labelForm">
                          Nama Cosplay {index + 1}
                        </FormLabel>
                        <FormControl>
                          <Input className="mb-4 mt-1 h-12 w-96 border border-borderForm" />
                        </FormControl>
                        <FormMessage />
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={addMember}
                  className={buttonVariants({
                    size: "sm",
                    variant: "outline",
                    className: "w-60 border border-first",
                  })}
                >
                  <span className="flex items-center gap-2 text-first">
                    <PlusCircledIcon />
                    Tambahkan Anggota Team
                  </span>
                </button>
              </form>
            </FormProvider>
          </div>
        )}
      </>
    </div>
  );
};

export default TransactionForm;
