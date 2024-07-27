"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Option from "@/components/option";
import {
  ClipboardList,
  Calendar,
  AlarmClock,
  MapPin,
  UserRound,
} from "lucide-react";

import Image from "next/image";
import { useForm } from "react-hook-form";
import TransactionForm from "@/components/TransactionForm";
import { useTransactionForm } from "@/hook/useTransactionForm";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const TransactionPage = () => {
  const form = useForm();
  const { kategori } = useTransactionForm();

  return (
    <div>
      <Breadcrumb text="Pemesanan Visitor" />
      <div className="container mx-auto">
        <Option className={"mb-8 mt-5"} />

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-9">
            <div className="mb-8">
              <div className="w-16 rounded-full bg-first py-2 text-center text-sm text-white">
                {kategori}
              </div>
              <h2 className="text-prime mt-2 w-1/3 text-4xl font-bold">
                Summer Sale Great Akiba
              </h2>
              <div className="text-prime mt-2 flex items-center gap-2 text-sm">
                <MapPin size={23} className="text-first" />
                <span>Lippo Plaza Mall Jember, Jawa Timur</span>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            {/* Tanggal dan waktu  */}
            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold">Tanggal & Waktu</h3>
              <div className="mb-2 flex items-center">
                <p className="flex items-center gap-2 text-textSecondary">
                  <span>
                    <Calendar size={23} />
                  </span>
                  01 Desember 2024
                </p>
              </div>
              <div className="mb-2 flex items-center">
                <p className="flex items-center gap-2 text-textSecondary">
                  <AlarmClock size={23} />
                  09:00 - 14:00 WIB
                </p>
              </div>
              <p className="mb-4 text-labelForm">Sisa Tiket: 100</p>
              <p className="mb-4 font-bold text-first">Rp20.000</p>
            </div>
          </div>
        </div>

        <hr className="dashed-line" />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <div className="bg-first-50 rounded-lg bg-second p-6">
              <h3 className="mb-4 text-lg font-semibold">
                Detail Pemesanan {kategori}
              </h3>
              <div className="mb-4 grid grid-cols-3 gap-4">
                <div className="col-span-2">
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
                <div className="col-span-1">
                  <div className="flex items-center justify-around gap-2">
                    <div>
                      <p className="text-textSecondary">Jumlah Tiket</p>
                      <div className="mt-2 flex items-center gap-3">
                        <button className="bg-textSecondary px-2 py-1 text-sm text-white hover:bg-first">
                          +
                        </button>
                        <p>
                          <span className="mr-2">X</span>2
                        </p>
                        <button className="bg-textSecondary px-2 py-1 text-sm text-white hover:bg-first">
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
                <>
                  <h3 className="mb-4 text-lg font-semibold">
                    Metode Pembayaran
                  </h3>
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
                </>
              ) : (
                <>
                  <TransactionForm kategori={kategori} formName="coscomp" />
                </>
              )}
            </div>
          </div>
          <div className="col-span-3 mx-auto w-10/12">
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
                  size: "lg",
                  variant: "ghost",
                  className: "w-full rounded-lg bg-first px-6 py-3 text-white",
                })}
              >
                Bayar Tiket
              </Link>
            </div>
          </div>
          <div className="col-span-9">
            <div className="rounded-lg bg-second p-6">
              <>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <span>
                    <UserRound size={24} />
                  </span>
                  Pemesan 2
                </h3>
              </>
            </div>
          </div>
          {kategori !== "visitor" && (
            <div className="col-span-9">
              <div className="rounded-lg bg-second p-6">
                <>
                  <h3 className="mb-4 text-lg font-semibold">
                    Metode Pembayaran
                  </h3>
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
                </>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
