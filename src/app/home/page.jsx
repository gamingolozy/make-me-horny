import Hero from "@/components/hero";
import heroImg1 from "@/assets/hero/hero-1-a.jpg";
import heroImg2 from "@/assets/hero/hero-1-b.jpg";
import heroImg3 from "@/assets/hero/hero-2-a.jpg";
import heroImg4 from "@/assets/hero/hero-2-b.jpg";
import heroImg5 from "@/assets/hero/hero-3-a.jpg";
import heroImg6 from "@/assets/hero/hero-3-b.jpg";
import heroImg7 from "@/assets/hero/hero-4-a.jpg";
import heroImg8 from "@/assets/hero/hero-4-b.jpg";
import heroImg9 from "@/assets/hero/hero-5-a.jpg";
import heroImg10 from "@/assets/hero/hero-5-b.jpg";

export default function Home() {
  const pages = [
    {
      text: "horny links",
      hero1: heroImg1,
      hero2: heroImg2,
      href: "/links",
      variant: "bg-[linear-gradient(45deg,#000000,#0001429c)]",
    },
    {
      text: "porn sites",
      hero1: heroImg3,
      hero2: heroImg4,
      href: "#",
      variant: "bg-[linear-gradient(45deg,#000000,#3b00459c)]",
    },
    {
      text: "horny gallery",
      hero1: heroImg5,
      hero2: heroImg6,
      href: "/gallery",
      variant: "bg-[linear-gradient(45deg,#000000,#4635008f)]",
    },
    {
      text: "private room",
      hero1: heroImg7,
      hero2: heroImg8,
      href: "/rooms",
      variant: "bg-[linear-gradient(45deg,#000000,#000d89ad)]",
    },
    {
      text: "Passwords",
      hero1: heroImg9,
      hero2: heroImg10,
      href: "/passwords",
      variant: "bg-[linear-gradient(45deg,#000000,#4a0003a3)]",
    },
    {
      text: "3",
      hero1: heroImg7,
      hero2: heroImg8,
      href: "#",
      variant: "bg-[linear-gradient(45deg,#000000,#000d89e6)]",
    },
    {
      text: "2",
      hero1: heroImg7,
      hero2: heroImg8,
      href: "#",
      variant: "bg-[linear-gradient(45deg,#000000,#000851f2)]",
    },
    {
      text: "1",
      hero1: heroImg7,
      hero2: heroImg8,
      href: "#",
      variant: "bg-[linear-gradient(45deg,#000000,#000323f2)]",
    },
    {
      text: "",
      hero1: heroImg7,
      hero2: heroImg8,
      href: "#",
      variant: "bg-[#140000]",
      warning: true,
    },
    {
      text: "",
      hero1: heroImg7,
      hero2: heroImg8,
      href: "#",
      variant: "bg-[linear-gradient(45deg,#000000,#000000c7)]",
      invert: true,
    },
    {
      text: "click",
      hero1:
        "https://cdnwg7.youx.xxx/galleries/gthumb/6/305/6305524_9b4e91f_1200x1200.jpg",
      hero2:
        "https://cdnwg7.youx.xxx/galleries/gthumb/6/305/6305524_9b4e91f_1200x1200.jpg",
      href: "/a",
      variant: "bg-[linear-gradient(45deg,#000000,#000000c7)]",

      remoteUrl: true,
      blurUrl:
        "https://cdnwg7.youx.xxx/galleries/gthumb/6/305/6305524_9b4e91f_1200x1200.jpg",
    },
  ];

  return (
    <>
      <div className="h-dvh overflow-y-auto snap-y snap-mandatory scroll-smooth transition-all duration-300">
        {pages.map((page, index) => {
          return (
            <Hero
              key={index}
              hero1={page.hero1}
              hero2={page.hero2}
              text={page.text}
              href={page.href}
              variant={page.variant}
              invert={page.invert}
              warning={page.warning}
              remoteUrl={page.remoteUrl}
              blurUrl={page.blurUrl}
            />
          );
        })}
      </div>
    </>
  );
}
