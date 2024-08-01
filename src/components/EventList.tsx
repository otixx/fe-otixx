import { ArrowRightIcon } from "@radix-ui/react-icons";
import EventCard from "./Card";
import MaxWidthWrapper from "./MaxWidthWrapper";

const EventList: React.FC = () => (
  <div className="bg-[#F7F2FF] py-2 md:py-24 lg:py-24">
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
          <EventCard key={index} index={index} />
        ))}
      </div>
    </MaxWidthWrapper>
  </div>
);

export default EventList;
