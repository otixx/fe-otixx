import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl p-2 md:h-[555px]">
      <Image
        src="/banner.jpg"
        alt="Banner"
        layout="fill"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#491876] via-[#7F29CC] to-[#892CDC] opacity-70"></div>
      <div className="relative w-7/12 space-y-4 text-center">
        <h1 className="text-2xl font-bold tracking-wide text-white md:text-5xl">
          Jelajahi Dunia Cosplay dengan Tiket Event Eksklusif Kami!
        </h1>
        <p className="text-white">
          Jadi bagian dari komunitas cosplay yang bersemangat dan kreatif. Pesan
          tiket event Anda sekarang dan nikmati acara yang penuh dengan kejutan
          dan kesenangan.
        </p>
        <div className="relative">
          <input
            type="text"
            className="w-full rounded-full p-4 pl-10 pr-16 text-sm shadow-md focus:outline-none focus:ring-0"
            placeholder="Cari tiketmu di Otakutixx..."
          />
          <button className="bg-first absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full p-2 text-white">
            <MagnifyingGlassIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;