"use client";
import EventList from "@/components/EventList";
import Banner from "@/components/Banner";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <main>
      <section className="container mx-auto py-5 md:py-24 lg:py-24">
        <Banner />
      </section>
      <EventList />
    </main>
  );
}
