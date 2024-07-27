import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { useTransactionForm } from "@/hook/useTransactionForm";
import { buttonVariants } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { UploadCloud, UserRound } from "lucide-react";
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
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <span>
                      <UserRound size={24} />
                    </span>
                    Pemesan 1
                  </h3>
                </div>
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
                      kategori === "perform") && (
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
                        <Select>
                          <SelectTrigger className="mb-4 mt-1 h-12 w-96 border border-borderForm">
                            <SelectValue placeholder="Pilih jenis usaha" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Food</SelectItem>
                            <SelectItem value="dark">Photobooth</SelectItem>
                            <SelectItem value="system">Lainnya</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    {kategori === "perform" && (
                      <div className="mb-4 space-y-2">
                        <FormLabel className="font-medium text-labelForm">
                          Kategori perform
                        </FormLabel>
                        <Select>
                          <SelectTrigger className="mb-4 mt-1 h-12 w-96 border border-borderForm">
                            <SelectValue placeholder="Pilih kategori perform" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Dance Cover</SelectItem>
                            <SelectItem value="dark">Dubbing</SelectItem>
                            <SelectItem value="system">Lainnya</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {(kategori === "standkomunitas" ||
                      kategori === "perform") && (
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
                      kategori === "perform") && (
                      <>
                        <FormLabel className="text-labelForm">
                          Upload Lagu
                        </FormLabel>
                        <div className="relative mt-2 flex w-96 items-center">
                          <label
                            htmlFor="dropzone-file"
                            className="duration-400 flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-borderForm transition-all hover:bg-gray-100"
                          >
                            <div className="flex flex-col items-center justify-center gap-1 rounded-md p-5">
                              <UploadCloud
                                className="text-labelForm"
                                size={18}
                              />
                              <h1 className="text-sm font-semibold text-labelForm">
                                Upload lagu
                              </h1>
                              <p className="text-xs text-[#FF3535]">
                                File maksimal ukuran 5 Mb
                              </p>
                            </div>
                            <input
                              type="file"
                              className="hidden"
                              id="dropzone-file"
                            />
                          </label>
                        </div>
                      </>
                    )}
                    {(kategori === "coscomp" ||
                      kategori === "musik" ||
                      kategori === "perform") && (
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

        {(kategori === "coscomp" || kategori === "perform") && (
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
