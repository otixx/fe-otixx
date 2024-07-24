import EventList from "@/components/EventList";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main>
      <section className="container mx-auto py-24">
        <Banner />
      </section>
      <EventList />
    </main>
  );
}
