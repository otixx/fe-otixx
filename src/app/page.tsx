"use client";
import EventList from "@/components/EventList";
import Banner from "@/components/Banner";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper className="py-5 md:py-24 lg:py-24 xl:py-2 2xl:py-24">
        <Banner />
      </MaxWidthWrapper>
      <EventList />
    </main>
  );
}
