import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="w-full h-dvh relative">
        <div className=" w-full h-full ">
          <video

            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/Russian Porn Videos  xHamster.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full gradient-black">
          <div className=" absolute bottom-[70px] flex flex-col p-2.5 px-5 gap-2.5">
            <p className="max-w-75 w-full font-sans font-extralight text-[0.8rem] tracking-[2px] text-justify text-[#a9a9a9]">
              Welcome to <span className="text-[#ff1493]">MakeMeHorny.</span> This helps you to make horny when you about masturbating. Visit at night for best experience.
            </p>
            <Link href={'/home'} className="font-sans sm:text-[1.5rem] text-[1rem] font-extralight    tracking-[5px]" >
              <div  >
                Let's Explore...
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
