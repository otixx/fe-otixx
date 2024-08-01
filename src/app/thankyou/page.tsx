"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Option from "@/components/option";
import { buttonVariants } from "@/components/ui/button";
import { useTransactionForm } from "@/hook/useTransactionForm";
import {
  AlarmClock,
  Calendar,
  ClipboardList,
  CreditCard,
  Download,
  Files,
  Info,
  MapPin,
  Ticket,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const PageThankyou = () => {
  const { kategori } = useTransactionForm();
  const data = [
    {
      type: "bank",
      account_type: "BCA",
    },
    {
      type: "QRIS",
      account_type: "QRIS",
    },
  ];
  const [payment, setPayment] = useState(data[0]);

  return (
    <div>
      <Breadcrumb text="Pembayaran QR Code" />
      <div className="container mx-auto">
        <div className="flex w-full items-center justify-between">
          <Option className={"mb-8 mt-5"} />
          <div className="h-full">
            <Link
              href="/history"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
                className:
                  "flex items-center gap-2 border border-first text-first",
              })}
            >
              <Ticket />
              Cek Pesanan
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12">
            <div className="flex h-24 w-full flex-col items-center justify-center bg-[#EDFFEE]">
              <h1 className="text-xl font-semibold text-[#3EA544]">
                Terimakasih Atas Pembelian Tiket Anda!
              </h1>
              <p className="font-base">
                Harap segera menyesaikan pembayaran tiket
              </p>
            </div>
          </div>
          <div className="col-span-9">
            <div className="mb-8">
              <div className="w-20 rounded-full bg-first py-2 text-center text-sm text-white">
                {kategori}
              </div>
              <h2 className="mt-2 w-1/3 text-4xl font-bold text-first">
                Summer Sale Great Akiba
              </h2>
              <div className="mt-2 flex items-center gap-2 text-sm text-first">
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
                Detail Pembayaran {kategori}
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

              <div className="grid grid-cols-4 space-y-8">
                <div className="col-span-2">
                  <div className="flex items-center gap-2 font-semibold">
                    <Info />
                    Petunjuk Pembayaran
                  </div>
                </div>
                <div className="col-span-4">
                  <h1 className="flex flex-col space-y-1 pl-10">
                    <span>1. Buka aplikasi Gopay.</span>
                    <span>2. Pilih bayar dengan QRIS.</span>
                    <span>
                      3. Scan QR Code atau download QR Code untuk menggunakan
                      gambar.
                    </span>
                    <span>
                      4. Pastikan harga yang akan di bayarkan sudah sesuai.
                    </span>
                    <span>5. Cek status pembayaran.</span>
                  </h1>
                </div>
                <div className="col-span-2">
                  <div className="flex items-center gap-2 font-semibold">
                    <CreditCard />
                    Metode Pembayaran
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center gap-2">
                      <Files />
                      <span className="text-first">
                        INV/c8892a91-7155-40bd-8c16-707ff00a653a
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <>
                    <div className="container mx-auto px-5 py-2">
                      <p className="font-semibold">{payment?.account_type}</p>
                    </div>
                    <div className="ml-5 w-72 rounded-lg border border-borderForm p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Image
                            alt="qris"
                            src="/qris.png"
                            width={50}
                            height={50}
                          />
                          <p className="mt-2 font-semibold text-first">
                            Rp40.235
                          </p>
                        </div>
                        {payment?.type !== "bank" && (
                          <input type="radio" name="payment" className="mt-2" />
                        )}
                      </div>
                    </div>
                    {payment?.type === "bank" && (
                      <div className="ml-5 py-2">
                        <div className="flex cursor-pointer items-center gap-2 transition duration-300 hover:text-first">
                          <Files size={24} />
                          <p>817289218127271719291821828</p>
                        </div>
                      </div>
                    )}
                  </>
                </div>
                <div className="col-span-2 space-y-2">
                  {payment.type !== "bank" && (
                    <div className="flex w-full justify-center">
                      <div className="flex w-52 flex-col items-center justify-center space-y-2 rounded-lg border border-textSecondary p-5">
                        <h1 className="text-sm">Scan QR Code</h1>
                        <Image
                          width={100}
                          height={100}
                          src="/barcode.png"
                          alt="qr"
                        />
                        <div className="flex items-center gap-2">
                          <Download size={17} />
                          <p className="text-xs">Unduh QR Code</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <h1 className="flex gap-2 text-xs text-[#FF3535]">
                    Selesaikan pembayaran sebelum tanggal
                    <span className="font-semibold">
                      23 Juli 2024 23.00 WIB
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 mx-auto w-full">
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
                href="/history"
                className={buttonVariants({
                  size: "btnNavbar",
                  variant: "ghost",
                  className:
                    "h-[60px] w-[282px] rounded-xl bg-first px-6 py-3 text-base text-white",
                })}
              >
                Cek Status Pembayaran
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThankyou;
