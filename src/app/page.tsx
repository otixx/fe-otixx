"use client";
import EventCard from "@/components/Card";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRightIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper className="py-5 md:py-24 lg:py-24 xl:py-2 2xl:py-24">
        <div className="relative flex h-[155px] w-full items-center justify-center overflow-hidden rounded-xl p-2 md:h-[300px] lg:h-[555px]">
          <Image
            src="/banner.jpg"
            alt="Banner"
            layout="fill"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#491876] via-[#7F29CC] to-[#892CDC] opacity-70"></div>
          <div className="relative w-full space-y-4 text-center md:w-7/12">
            <h1 className="text-sm font-bold tracking-wide text-white md:text-2xl lg:text-5xl">
              Jelajahi Dunia Cosplay dengan Tiket Event Eksklusif Kami!
            </h1>
            <p className="hidden text-white md:block lg:block">
              Jadi bagian dari komunitas cosplay yang bersemangat dan kreatif.
              Pesan tiket event Anda sekarang dan nikmati acara yang penuh
              dengan kejutan dan kesenangan.
            </p>
            <div className="relative hidden md:block lg:block">
              <input
                type="text"
                className="w-full rounded-full p-4 pl-10 pr-16 text-sm shadow-md focus:outline-none focus:ring-0"
                placeholder="Cari tiketmu di Otakutixx..."
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-first p-2 text-white">
                <MagnifyingGlassIcon />
              </button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="bg-[#F7F2FF] py-2 md:py-24 lg:py-24">
        <MaxWidthWrapper className="my-10">
          <div className="my-2 flex items-center justify-between md:my-10">
            <h2 className="text-2xl font-bold text-black">Acara Mendatang</h2>
            <a
              href="#"
              className="hidden items-center gap-2 text-sm font-semibold text-purple-500 md:flex"
            >
              Lihat lebih banyak <ArrowRightIcon />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }, (_, index) => (
              <EventCard
                imgUrl="/dash.png"
                link="/tiket/12"
                ticketType="visitor"
                key={index}
                index={index}
              />
            ))}
          </div>
          <div className="mt-5 flex justify-center md:hidden">
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-semibold text-purple-500"
            >
              Lihat lebih banyak <ArrowRightIcon />
            </a>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
