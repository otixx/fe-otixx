"use client";
import Breadcrumb from "@/components/Breadcrumb";
import EventList from "@/components/EventList";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Option from "@/components/option";
import Image from "next/image";
import { useState } from "react";

const EoeventPage = () => {
  const tabs = ["Event Sekarang", "Event Sebelumnya"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <main>
      <Breadcrumb text="Halaman Detail Tiket" />
      <Option className={"mt-5"} />
      <MaxWidthWrapper className="py-5 md:py-24 lg:py-24 xl:py-2 2xl:py-24">
        <div className="grid grid-cols-12">
          <div className="col-span-3 md:col-span-2">
            <div className="relative mt-2 h-20 w-20 xl:h-40 xl:w-40">
              <Image
                src="/banner.jpg"
                className="h-auto w-full rounded-full"
                layout="fill"
                objectFit="cover"
                alt="imgeo"
              />
            </div>
          </div>
          <div className="col-span-9 md:col-span-9">
            <h1 className="text-base font-bold text-labelForm xl:text-3xl">
              Great Akiba
            </h1>
            <h1 className="text-xs text-labelForm md:text-sm xl:text-sm">
              Elemen kunci dalam menyukseskan setiap acara, memainkan peran
              penting dalam proses perencanaan hingga pelaksanaan. Dalam konteks
              penyelenggaraan acara, EO bukan hanya sekadar penyedia jasa,
              tetapi mitra strategis yang menghadirkan visi acara menjadi
              kenyataan.
            </h1>
          </div>
        </div>{" "}
        <div className="mt-10 grid grid-cols-12">
          <div className="col-span-12 flex gap-10">
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
      </MaxWidthWrapper>
      {/* cardnya pisahin biar bisa dipake disini  */}
      <EventList />
    </main>
  );
};

export default EoeventPage;
