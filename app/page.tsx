import Header from "@/components/navigation/header";
import Hero from "@/components/hero/hero";
import Service from "@/components/serviceSection/service";

export default function Home() {
  return (
    <>
      <section className="relative lg:h-screen bg-[url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fHww)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-background/50  "></div>
        <Header />
        <Hero />
      </section>
      <Service />
    </>
  );
}
