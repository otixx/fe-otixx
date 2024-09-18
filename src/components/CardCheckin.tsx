import { CalendarIcon, ClockIcon } from "@radix-ui/react-icons";
import React from "react";
import { LucideUser } from "lucide-react";

const CardCheckin = () => {
  return (
    <div className="mt-4 rounded-lg bg-white shadow-none md:absolute md:right-20 md:top-20 md:mt-0 md:h-[50%] md:w-[28%] md:p-6 md:shadow-lg">
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

      <div className="flex items-center gap-2 text-textSecondary md:mt-5">
        <LucideUser size={18} />
        <p className="text-sm">Visitor : x 2</p>
      </div>
      <p className="text-prime mt-2 text-sm font-bold text-first">Rp20.000</p>
    </div>
  );
};

export default CardCheckin;
