import { CalendarIcon, ClockIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

const CardDate = () => {
  return (
    <div className="absolute right-20 top-20 w-[28%] rounded-lg bg-white p-6 shadow-lg">
      <p className="font-semibold text-black">Tanggal & Waktu</p>
      <div className="flex justify-between text-sm">
        <div className="mt-2 flex items-center gap-2 text-textSecondary">
          <CalendarIcon />
          <p>01 Desember 2024</p>
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm text-textSecondary">
          <ClockIcon />
          <p>09:00 - 14:00 WIB</p>
        </div>
      </div>

      <p className="mt-5 text-sm text-textSecondary">Sisa Tiket: 100</p>
      <p className="text-prime mt-2 text-sm font-bold">Rp20.000</p>
      <p className="mt-10 text-sm text-textSecondary">Note:</p>
      <p className="mt-1 text-sm font-semibold">
        Pembelian di tutup 9 hari lagi!
      </p>
      <Link
        href="/transaction"
        className={buttonVariants({
          size: "sm",
          className: "mt-10 w-full",
        })}
      >
        Beli Tiket
      </Link>
    </div>
  );
};

export default CardDate;
