"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Option from "@/components/option";
import {
  ClipboardList,
  Calendar,
  AlarmClock,
  MapPin,
  UserRound,
  CreditCard,
} from "lucide-react";

import Image from "next/image";
import { useForm } from "react-hook-form";
import TransactionForm from "@/components/TransactionForm";
import { useTransactionForm } from "@/hook/useTransactionForm";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const TransactionPage = () => {
  const [qty, setQty] = useState(1);
  const { kategori } = useTransactionForm();
  return (
    <div>
      <Breadcrumb text={`Pemesanan ${kategori}`} />
      <div className="container mx-auto">
        <Option className={"mb-8 mt-5"} />

        <div className="grid grid-cols-12 md:gap-2">
          <div className="col-span-12 md:col-span-9">
            <div className="mb-8">
              <div className="w-20 rounded-full bg-first py-1 text-center text-sm text-white">
                {kategori}
              </div>
              <h2 className="mt-2 w-full text-base font-bold text-first md:w-1/3 md:text-4xl">
                Summer Sale Great Akiba
              </h2>
              <div className="mt-2 flex items-center gap-2 text-sm text-first">
                <MapPin size={23} className="text-first" />
                <span>Lippo Plaza Mall Jember, Jawa Timur</span>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3">
            {/* Tanggal dan waktu  */}
            <div className="rounded-lg bg-white md:p-6">
              <h3 className="mb-4 text-lg font-semibold">Tanggal & Waktu</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1 mb-2 flex items-center md:col-span-2">
                  <p className="flex items-center gap-1 text-textSecondary md:gap-2">
                    <span>
                      <Calendar size={18} />
                    </span>
                    01 Desember 2024
                  </p>
                </div>
                <div className="col-span-1 mb-2 flex items-center md:col-span-2">
                  <p className="flex items-center gap-1 text-textSecondary md:gap-2">
                    <AlarmClock size={18} />
                    09:00 - 14:00 WIB
                  </p>
                </div>
              </div>

              <p className="mb-4 text-labelForm">Sisa Tiket: 100</p>
              <p className="mb-4 font-bold text-first">Rp20.000</p>
            </div>
          </div>
        </div>

        <hr className="dashed-line" />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-9">
            <div className="bg-first-50 bg-second p-4 md:p-6 xl:p-6">
              <h3 className="mb-4 text-lg font-semibold">
                Detail Pemesanan {kategori}
              </h3>
              <div className="mb-4 grid grid-cols-3 gap-4">
                <div className="col-span-3 md:col-span-2">
                  <div className="space-y-2">
                    <p className="text-sm text-textSecondary">Jenis Tiket</p>
                    <div
                      className={`rounded-full ${kategori === "standkomersil" || kategori === "standkomunitas" ? "w-36" : "w-20"} bg-first py-2 text-center text-xs text-white`}
                    >
                      {kategori}
                    </div>
                    <p className="mt-2 text-sm">The Summer Sale Great Akiba</p>
                  </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                  <div className="flex items-center justify-between gap-2 md:justify-around">
                    <div>
                      <p className="text-textSecondary">Jumlah Tiket</p>
                      <div className="mt-2 flex items-center gap-3">
                        <button
                          onClick={() => setQty(qty + 1)}
                          className="bg-textSecondary px-2 py-1 text-sm text-white hover:bg-first"
                        >
                          +
                        </button>
                        <div className="flex w-10 items-center justify-center">
                          <span className="mr-2">x</span>
                          <input
                            type="number"
                            value={qty}
                            readOnly
                            className="w-full bg-second focus:outline-none"
                          />
                        </div>
                        <button
                          onClick={() => setQty(qty - 1)}
                          className="bg-textSecondary px-2 py-1 text-sm text-white hover:bg-first"
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-textSecondary">Harga</p>
                      <p className="font-semibold text-first">Rp. 40.000</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="dashed-line" />
              {kategori == "visitor" ? (
                <div className="space-y-3">
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold md:text-lg">
                    <CreditCard size={16} /> Metode Pembayaran
                  </h3>
                  <div className="container mx-auto hidden px-0 py-2 md:block md:px-5 lg:px-5 xl:block">
                    <p className="font-semibold">QRIS</p>
                  </div>
                  <div className="grid-cols-3 gap-4 px-0 md:px-4 lg:px-4">
                    {Array.from({ length: 1 }, (_, index) => (
                      <div
                        key={index}
                        className="col-span-1 hidden gap-4 md:block xl:block"
                      >
                        <div className="rounded-lg border border-borderForm bg-white p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Image
                                alt="qris"
                                src="/qris.png"
                                width={50}
                                height={50}
                              />
                              <p className="text-prime mt-2 font-semibold">
                                Rp40.235
                              </p>
                            </div>
                            <input
                              type="radio"
                              name="payment"
                              className="mt-2"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4 px-0 md:hidden md:px-4 lg:px-4">
                    <div className="col-span-3">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="QRIS" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="apple">Dana</SelectItem>
                            <SelectItem value="banana">Ovo</SelectItem>
                            <SelectItem value="blueberry">Gopay</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <TransactionForm
                    qty={qty}
                    kategori={kategori}
                    formName="coscomp"
                  />
                </>
              )}
            </div>
          </div>

          <div className="order-2 col-span-12 w-full md:order-1 md:col-span-3 md:mx-auto md:w-10/12">
            {/* Beli Tiket Button  */}
            <div className="space-y-5 rounded-lg bg-second p-5">
              <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold">
                <ClipboardList size={24} />
                Detail Pembayaran
              </h3>
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <p className="text-textSecondary">Subtotal Tiket</p>
                  <p>x 2</p>
                </div>
                <p className="font-medium text-first">Rp40.000</p>
              </div>
              <div className="mb-2 flex justify-between">
                <p className="text-textSecondary">Biaya Admin</p>
                <p className="font-medium text-first">Rp235</p>
              </div>
              <div className="mb-4 flex justify-between">
                <p className="text-textSecondary">Biaya Layanan</p>
                <p className="font-medium text-first">Rp5.000</p>
              </div>
              <hr className="dashed-line" />

              <div className="mb-4 flex justify-between text-lg font-bold">
                <p>Total</p>
                <p className="text-first">Rp45.235</p>
              </div>
              <Link
                href="/thankyou"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "w-full rounded-lg bg-first px-6 text-white",
                })}
              >
                Bayar Tiket
              </Link>
            </div>
          </div>
          {kategori !== "visitor" && (
            <div className="order-1 col-span-12 md:order-2 md:col-span-9">
              <div className="bg-second p-6">
                <h3 className="mb-4 flex items-center gap-2 font-semibold md:text-lg">
                  <CreditCard size={24} /> Metode Pembayaran
                </h3>
                <div className="hidden md:block">
                  <div className="container mx-auto px-5 py-2">
                    <p className="font-semibold">QRIS</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 px-4">
                    {Array.from({ length: 1 }, (_, index) => (
                      <div key={index} className="col-span-1 gap-4">
                        <div className="rounded-lg border border-borderForm bg-white p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Image
                                alt="qris"
                                src="/qris.png"
                                width={50}
                                height={50}
                              />
                              <p className="text-prime mt-2 font-semibold">
                                Rp40.235
                              </p>
                            </div>
                            <input
                              type="radio"
                              name="payment"
                              className="mt-2"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="container mx-auto px-5 py-2">
                      <p className="font-semibold">E-Wallet</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 px-4">
                      {Array.from({ length: 5 }, (_, index) => (
                        <div key={index} className="col-span-1 gap-4">
                          <div className="rounded-lg border border-borderForm bg-white p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <Image
                                  alt="qris"
                                  src="/qris.png"
                                  width={50}
                                  height={50}
                                />
                                <p className="text-prime mt-2 font-semibold">
                                  Rp40.235
                                </p>
                              </div>
                              <input
                                type="radio"
                                name="payment"
                                className="mt-2"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="block md:hidden xl:hidden">
                  <div className="grid grid-cols-3 gap-4 px-0 md:px-4 lg:px-4">
                    <div className="col-span-3 space-y-4">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="QRIS" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="qris">QRIS</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="E-Wallet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="s">Dana</SelectItem>
                            <SelectItem value="d">Ovo</SelectItem>
                            <SelectItem value="d">Gopay</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Virtual Account" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="s">BCA</SelectItem>
                            <SelectItem value="d">Mandiri</SelectItem>
                            <SelectItem value="d">BRI</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      {Array.from({ length: 1 }, (_, index) => (
                        <div
                          key={index}
                          className="col-span-1 hidden gap-4 md:block xl:block"
                        >
                          <div className="rounded-lg border border-borderForm bg-white p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <Image
                                  alt="qris"
                                  src="/qris.png"
                                  width={50}
                                  height={50}
                                />
                                <p className="text-prime mt-2 font-semibold">
                                  Rp40.235
                                </p>
                              </div>
                              <input
                                type="radio"
                                name="payment"
                                className="mt-2"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
