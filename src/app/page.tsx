import EventList from "@/components/EventList";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main>
      <section className="container mx-auto py-5 md:py-24 lg:py-24">
        <Banner />
      </section>
      <EventList />
    </main>
  );
}
