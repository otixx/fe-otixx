"use client";
import Breadcrumb from "@/components/Breadcrumb";
import EventCard from "@/components/Card";
import CardDate from "@/components/Date";
import EventList from "@/components/EventList";
import Option from "@/components/option";
import { Button } from "@/components/ui/button";
import { LucideMap, LucideMapPin, LucidePin } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const DetailTiketEOProfile: React.FC = () => {
  const tabs = [
    "Deskripsi",
    "Rundown",
    "Informasi Kontak",
    "Denah Lokasi",
    "Tiket",
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div>
      <Breadcrumb text="Halaman Detail Tiket" />
      <Option className={"mt-5"} />
      <div className="container mx-auto">
        <div className="relative">
          <div className="relative mt-5 h-64 w-full md:h-[554px]">
            <Image
              src="/banner.jpg"
              layout="fill"
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              alt="Event Banner"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8">
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Summer Sale Great Akiba
              </h2>
              <div className="mt-2 flex items-center gap-2 text-white">
                <LucideMapPin />
                <h1>Lippo Plaza Mall Jember, Jawa Timur</h1>
              </div>
              <Button className="mt-10 rounded-full bg-white text-first">
                View Great Akiba
              </Button>
            </div>
          </div>
          <CardDate />
        </div>

        <div className="mt-10 text-sm">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="rounded-lg bg-white p-4">
                <div className="flex flex-wrap gap-4">
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
            </div>
          </div>
        </div>
        {activeTab === "Deskripsi" && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }, (_, index) => (
              <EventCard index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailTiketEOProfile;
