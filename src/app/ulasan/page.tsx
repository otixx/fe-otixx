import Breadcrumb from "@/components/Breadcrumb";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Option from "@/components/option";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlarmClock, Calendar, Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  return (
    <div>
      <Breadcrumb text="Pembayaran QR Code" />
      <Option className={"mb-8 mt-5"} />
      <MaxWidthWrapper className="rounded-sm">
        <div className="h-[605px] max-w-screen-xl bg-second p-2">
          <div className="grid grid-cols-12 gap-4 rounded-lg bg-second p-4">
            <div className="col-span-3 space-y-2">
              <Image
                src="/dash.png"
                alt="Event"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>

            <div className="col-span-5 space-y-2">
              <h2 className="text-xl font-bold text-purple-900">
                Summer Sale Great Akiba
              </h2>
              <div className="flex items-center gap-2 text-lg text-gray-600">
                <div>
                  <Calendar size={23} />
                </div>
                01 Desember 2024
              </div>
              <div className="flex items-center gap-2 text-lg text-gray-600">
                <div>
                  <AlarmClock size={23} />
                </div>
                09.00 - 14.00 WIB
              </div>
              <div className="flex items-center gap-2 pt-10 text-lg font-semibold text-first">
                <div>
                  <Ticket size={24} />
                </div>
                Tiket : 6
              </div>
            </div>
            <div className="col-span-4 flex flex-col justify-between gap-2">
              <div className="text-end text-first">
                INV/c8892a91-7155-40bd-8c16-707ff00a653a
              </div>
              <div>
                <h1 className="text-end font-semibold text-first">Rp200.000</h1>
              </div>
            </div>

            <div className="col-span-12 flex flex-col justify-between gap-2">
              <Textarea
                placeholder="Your text here"
                className="h-[157px] w-[528px] border-first p-2"
              />
            </div>
            <div className="col-span-12 mt-28 flex w-full justify-end">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="h-[60px] w-[144px] border-first text-first"
                >
                  Selesai
                </Button>
                <Link href="/ulasan">
                  <Button
                    variant="default"
                    className="h-[60px] w-[160px] bg-first text-white"
                  >
                    Beri Ulasan
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
