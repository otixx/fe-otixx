"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Option from "@/components/option";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const page = () => {
  const [activeTab, setActiveTab] = useState("Belum Bayar");
  const tabs = ["Belum Bayar", "Menunggu", "Selesai"];

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
              <div className="grid grid-cols-3 gap-4 rounded-lg p-4">
                <img
                  src="/dash.png"
                  alt="Event"
                  className="h-[190px] w-[315px] rounded-lg object-cover"
                />
                <div className="col-span-1 space-y-2">
                  <h2 className="text-xl font-bold text-purple-900">
                    Summer Sale Great Akiba
                  </h2>
                  <p className="text-sm text-gray-600">01 Desember 2024</p>
                  <p className="text-sm text-gray-600">09.00 - 14.00 WIB</p>
                  <p className="text-sm text-gray-600">Tiket : 6</p>
                </div>
                <div className="col-span-1">
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        className="border-red-500 text-red-500"
                      >
                        Batalkan
                      </Button>
                      <Button className="bg-green-500 text-white">
                        Lanjutkan Pembayaran
                      </Button>
                    </div>
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
