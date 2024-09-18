"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Option from "@/components/option";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Calendar, AlarmClock, Ticket } from "lucide-react";
import Link from "next/link";

const RefundPage = () => {
  const tabs = ["Belum Bayar", "Menunggu", "Selesai"];
  const [activeTab, setActiveTab] = useState("Belum Bayar");
  return (
    <div>
      <Breadcrumb text="Halaman" />
      <div className="container mx-auto">
        <Option className={"mb-8 mt-5"} />
        <div className="bg-white">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded py-2 ${
                    activeTab === tab
                      ? "font-semibold text-first underline"
                      : "text-textSecondary"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="relative mb-5">
            <Input
              type="text"
              placeholder="Cari nama tiket atau tanggal tiket..."
              className="w-full rounded-full border border-textSecondary px-4 py-2 md:w-[467px]"
            />
          </div>
        </div>
        <div className="space-y-4">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="rounded-lg p-4">
              <div className="grid grid-cols-12 gap-4 rounded-lg bg-second p-4">
                <div className="col-span-3 row-span-3 hidden space-y-2 md:block">
                  <img
                    src="/dash.png"
                    alt="Event"
                    className="h-[190px] w-full rounded-lg object-cover"
                  />
                </div>

                <div className="order-2 col-span-6 space-y-2 md:order-none md:col-span-3">
                  <h2 className="text-xs font-bold text-purple-900 md:text-xl">
                    Summer Sale Great Akiba
                  </h2>
                </div>

                <div className="order-1 col-span-12 flex flex-col justify-between gap-2 md:order-none md:col-span-6">
                  <div className="text-start text-xs font-medium text-first md:text-end md:text-base">
                    INV/c8892a91-7155-40bd-8c16-707ff00a653a
                  </div>
                </div>

                <div className="order-4 col-span-8 space-y-2 md:order-none md:col-span-3">
                  <div className="flex items-center gap-2 text-xs text-gray-600 md:text-lg">
                    <div>
                      <Calendar size={16} />
                    </div>
                    01 Desember 2024
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 md:text-lg">
                    <div>
                      <AlarmClock size={16} />
                    </div>
                    09.00 - 14.00 WIB
                  </div>
                </div>

                <div className="order-4 col-span-4 space-y-2 md:order-none md:col-span-6">
                  <h1 className="text-end font-semibold text-first">
                    Rp200.000
                  </h1>
                </div>

                <div className="order-3 col-span-6 flex items-center justify-end space-y-2 md:order-none md:col-span-3 md:justify-start">
                  <div className="flex items-center justify-end gap-2 text-xs font-medium text-first md:justify-start md:text-lg md:font-semibold">
                    <div>
                      <Ticket size={18} />
                    </div>
                    Tiket : 6
                  </div>
                </div>

                <div className="order-4 col-span-12 space-y-2 md:order-none md:col-span-6">
                  <div className="flex justify-end gap-2">
                    {activeTab === "Belum Bayar" ? (
                      <>
                        <Link
                          href="/"
                          className={buttonVariants({
                            size: "sm",
                            variant: "default",
                            className:
                              "h-10 w-[50%] bg-dangerbtn text-white md:h-[60px] md:w-[160px]",
                          })}
                        >
                          Batalkan
                        </Link>
                        <Link
                          href="/checkin"
                          className={buttonVariants({
                            size: "sm",
                            className:
                              "h-10 w-[50%] bg-green-500 text-white md:h-[60px] md:w-[220px]",
                          })}
                        >
                          Lanjutkan Pembayaran
                        </Link>
                      </>
                    ) : activeTab === "Menunggu" ? (
                      <>
                        <Button
                          variant="default"
                          className="h-10 w-[140px] bg-[#EDB900] text-white md:h-[60px] md:w-[160px]"
                        >
                          Checkin
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="outline"
                          className="h-10 w-[140px] border-first text-first md:h-[60px] md:w-[144px]"
                        >
                          Selesai
                        </Button>
                        <Link href="/ulasan">
                          <Button
                            variant="default"
                            className="h-10 w-[140px] bg-first text-white md:h-[60px] md:w-[160px]"
                          >
                            Beri Ulasan
                          </Button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RefundPage;
