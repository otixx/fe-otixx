import { ArrowRightIcon } from "@radix-ui/react-icons";
import EventCard from "./Card";
import MaxWidthWrapper from "./MaxWidthWrapper";

const EventList: React.FC = () => (
  <div className="bg-[#F7F2FF] py-24">
    <MaxWidthWrapper className="my-10">
      <div className="my-10 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-black">Acara Mendatang</h2>
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-semibold text-purple-500"
        >
          Lihat lebih banyak <ArrowRightIcon />
        </a>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }, (_, index) => (
          <EventCard key={index} index={index} />
        ))}
      </div>
    </MaxWidthWrapper>
  </div>
);

export default EventList;
