import Hero from "@/components/hero";
import heroImg1 from "@/assets/hero/hero-1-a.jpg";
import heroImg2 from "@/assets/hero/hero-1-b.jpg";
import heroImg3 from "@/assets/hero/hero-2-a.jpg";
import heroImg4 from "@/assets/hero/hero-2-b.jpg";
import heroImg5 from "@/assets/hero/hero-3-a.jpg";
import heroImg6 from "@/assets/hero/hero-3-b.jpg";
import heroImg7 from "@/assets/hero/hero-4-a.jpg";
import heroImg8 from "@/assets/hero/hero-4-b.jpg";

export default function Home() {
  return (
    <>
      <div className="h-dvh overflow-y-auto snap-y snap-mandatory scroll-smooth transition-all duration-300">
        <Hero
          hero1={heroImg1}
          hero2={heroImg2}
          text="Horny Links"
          href={"/links"}
          variant={"bg-[linear-gradient(45deg,#000000,#0001429c)]"}
        />
        <Hero
          hero1={heroImg3}
          hero2={heroImg4}
          text="Porn Sites"
          href={"#"}
          variant={"bg-[linear-gradient(45deg,#000000,#3b00459c)]"}
        />
        <Hero
          hero1={heroImg5}
          hero2={heroImg6}
          text="Horny gallery"
          href={"#"}
          variant={"bg-[linear-gradient(45deg,#000000,#4635008f)]"}
        />
        <Hero
          hero1={heroImg7}
          hero2={heroImg8}
          text="private room"
          href={"/rooms"}
          variant={"bg-[linear-gradient(45deg,#000000,#000d89ad)]"}
        />
      </div>
    </>
  );
}
