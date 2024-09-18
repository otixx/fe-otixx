import { useResolution } from "@/hook/useResolution";
import Image from "next/image";

const Barcode = () => {
  const { isMobile, isTablet } = useResolution();
  return (
    <div className="absolute right-0 top-0 mt-4 h-10 w-10 rounded-lg bg-white shadow-none md:-bottom-7 md:right-20 md:mb-0 md:h-[209px] md:w-[209px] md:shadow-lg">
      <Image
        src="/barcode2.jpg"
        alt="barcode"
        className="rounded-lg"
        fill
        priority
      />
    </div>
  );
};

export default Barcode;
