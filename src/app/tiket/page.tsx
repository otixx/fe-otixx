"use client";
import Breadcrumb from "@/components/Breadcrumb";
import CardDate from "@/components/Date";
import Option from "@/components/option";
import Image from "next/image";
import React, { useState } from "react";

const TicketDetailContent: React.FC = () => {
  const tabs = ["Deskripsi", "Rundown", "Syarat dan Ketentuan"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <Breadcrumb text="Halaman Detail Tiket" />
      <Option className={"mt-5"} />
      <div className="container mx-auto">
        <div className="relative mt-5 h-64 w-full md:h-[554px]">
          <Image
            src="/banner.jpg"
            layout="fill"
            style={{ objectFit: "cover" }}
            className="rounded-lg"
            alt="Event Banner"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute inset-0 flex flex-col items-start justify-center p-8">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Summer Sale Great Akiba
            </h2>
            <p className="mt-2 text-white">
              Lippo Plaza Mall Jember, Jawa Timur
            </p>
          </div>
          <CardDate />
        </div>
        <div className="mt-10 text-sm">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="rounded-lg bg-white p-4">
                <div className="flex gap-4">
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
                <p>
                  Juny the renowned Canadian artist based in Seoul, South Korea
                  is set to make a return to Jakarta and Singapore for his
                  highly anticipated Intro Dopamine Tour. The tour marks Junnys
                  first solo concert in Jakarta since his performance at a
                  festival last year. It also serves as a preview to his
                  forthcoming album Dopamine, set to release in June 2024.
                </p>
                <p className="mt-4">
                  The concert scheduled for Friday, June 28th, 2024 at 8 PM will
                  be held at the PINE (EylnJakarta). Fans can anticipate a
                  selection of tracks from his forthcoming album during the
                  concert.
                </p>
                <p className="mt-4">
                  2024 Junny Tour (Intro) Dopamine with DJ DALL - Jakarta
                </p>
                <p className="mt-4">Date: Friday, June 28th, 2024</p>
                <p className="mt-4">Time: 8:00 PM</p>
                <p className="mt-4">Venue: PINE (EylnJakarta)</p>
                <p className="mt-4">
                  Tickets: Available via Loket.com starting May 12th, 2024 at
                  12:00PM WIB
                </p>
                <p className="mt-4">Admission Times (Subject to change):</p>
                <ul className="mt-2 list-inside list-disc">
                  <li>16:30 - Doors open for VIP and VIP ticket holders.</li>
                  <li>16:45 - Soundcheck starts.</li>
                  <li>
                    17:00 - Meet & Greet, Album Signing/Q&A, and Photo session:
                  </li>
                  <li>
                    A Meet & Greet available only for VIP ticket holders and 50
                    lucky winners from the VIP category.
                  </li>
                  <li>An Album Signing exclusive to VIP ticket holders.</li>
                  <li>19:00 - Doors open for General Admission tickets.</li>
                  <li>20:00 - Show starts.</li>
                </ul>
                <p className="mt-4">
                  *Please be advised that the admission times are subject to
                  change due to unforeseen circumstances. We recommend checking
                  our social media or contacting our support team for the most
                  current information closer to the event date.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-8 rounded-lg bg-white p-4">
                <h3 className="text-prime mb-4 text-xl font-bold">
                  Lokasi Acara
                </h3>
                <div className="mb-4 h-64 w-full rounded-lg bg-gray-200">
                  <p className="text-center text-gray-500">Map Placeholder</p>
                </div>
                <p>Lippo Plaza Mall Jember, Jawa Timur</p>
              </div>
              <div className="mb-8 space-y-4 rounded-lg bg-white p-4">
                <h3 className="text-prime mb-4 text-xl font-bold">
                  Informasi Kontak
                </h3>
                <div>
                  <p className="text-textSecondary">Informasi Tiket:</p>
                  <p className="text-textSecondary">+62 000 000 000 (Geo)</p>
                  <p className="text-textSecondary">+62 000 000 000 (Rajih)</p>
                </div>
                <div>
                  <p className="text-textSecondary">Informasi Lomba:</p>
                  <p className="text-textSecondary">+62 000 000 000 (Geo)</p>
                  <p className="text-textSecondary">+62 000 000 000 (Rajih)</p>
                </div>
              </div>
              <div className="rounded-lg bg-white p-4">
                <h3 className="text-prime mb-4 text-xl font-bold">
                  Bagikan kepada teman
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-prime text-sm">
                    Facebook
                  </a>
                  <a href="#" className="text-prime text-sm">
                    Twitter
                  </a>
                  <a href="#" className="text-prime text-sm">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailContent;
