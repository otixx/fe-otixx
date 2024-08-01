"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Option from "@/components/option";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Calendar, AlarmClock, Ticket } from "lucide-react";
import Link from "next/link";

const page = () => {
  const tabs = ["Belum Bayar", "Menunggu", "Selesai"];
  const [activeTab, setActiveTab] = useState("Belum Bayar");
  return (
    <div>
      <Breadcrumb text="Riwayat Transaksi" />
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
              className="w-[467px] rounded-full border px-4 py-2"
            />
          </div>
        </div>
        <div className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="rounded-lg p-4">
              <div className="grid grid-cols-12 gap-4 rounded-lg bg-second p-4">
                <div className="col-span-3 space-y-2">
                  <img
                    src="/dash.png"
                    alt="Event"
                    className="h-[190px] w-[315px] rounded-lg object-cover"
                  />
                </div>

                <div className="col-span-5 space-y-2">
                  <h2 className="text-xl font-bold text-purple-900">
                    Summer Sale Great Akiba
                  </h2>
                  <div className="flex items-center gap-2 text-lg text-gray-600">
                    <div>
                      <Calendar size={23} />
                    </div>
                    01 Desember 2024
                  </div>
                  <div className="flex items-center gap-2 text-lg text-gray-600">
                    <div>
                      <AlarmClock size={23} />
                    </div>
                    09.00 - 14.00 WIB
                  </div>
                  <div className="flex items-center gap-2 pt-10 text-lg font-semibold text-first">
                    <div>
                      <Ticket size={24} />
                    </div>
                    Tiket : 6
                  </div>
                </div>
                <div className="col-span-4 flex flex-col justify-between gap-2">
                  <div className="text-end text-first">
                    INV/c8892a91-7155-40bd-8c16-707ff00a653a
                  </div>
                  <div>
                    <h1 className="text-end font-semibold text-first">
                      Rp200.000
                    </h1>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    {activeTab === "Belum Bayar" ? (
                      <>
                        <Button
                          variant="default"
                          className="h-[60px] w-[160px] bg-dangerbtn text-white"
                        >
                          Batalkan
                        </Button>
                        <Button className="h-[60px] w-[276px] bg-green-500 text-white">
                          Lanjutkan Pembayaran
                        </Button>
                      </>
                    ) : activeTab === "Menunggu" ? (
                      <>
                        <Button
                          variant="default"
                          className="h-[60px] w-[160px] bg-[#EDB900] text-white"
                        >
                          Checkin
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="outline"
                          className="h-[60px] w-[144px] border-first text-first"
                        >
                          Selesai
                        </Button>
                        <Link href="/ulasan">
                          <Button
                            variant="default"
                            className="h-[60px] w-[160px] bg-first text-white"
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

export default page;
