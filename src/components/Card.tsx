import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  index?: number;
  link: string;
  imgUrl: string;
  ticketType: string;
}

const EventCard: React.FC<EventCardProps> = ({
  index,
  link,
  imgUrl,
  ticketType,
}) => (
  <Link href={link}>
    <div className="rounded-2xl bg-white">
      <div className="relative">
        <div className="h-[101px] w-[171px] md:h-80 md:w-full lg:h-80 lg:w-full">
          <Image
            src={imgUrl}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            alt="tiket"
          />
        </div>
        <span className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-2xl bg-purple-500 px-3 py-2 text-xs font-bold text-white md:px-6 md:text-sm">
          {ticketType}
        </span>
      </div>

      <div className="flex gap-3 p-5">
        <div className="flex-shrink-0 text-center">
          <div className="text-xs text-gray-500">Des</div>
          <div className="text-2xl font-bold">01</div>
          <div className="text-xs text-gray-500">2024</div>
        </div>
        <div className="ml-4">
          <h3 className="text-xs font-semibold md:text-lg">
            Summer Sale Great Akiba
          </h3>
          <p className="text-xs text-gray-500">di Surabaya</p>
        </div>
      </div>
      <div className="mt-2 flex items-center p-5">
        <span className="flex items-center text-sm text-purple-500">
          <i className="fas fa-user mr-1"></i>
          <p className="text-[10px] font-semibold md:text-sm">Great Akibas</p>
        </span>
        <span className="ml-auto text-xs font-bold text-purple-500 md:text-base">
          Rp20.000
        </span>
      </div>
    </div>
  </Link>
);

export default EventCard;
