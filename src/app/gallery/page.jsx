import Image from "next/image";
import Link from "next/link";
import bgImage from "@/assets/hero/hero-1-a.jpg";

export default function Gallery() {
  return (
    <div className="relative flex  w-full h-dvh ">
      <Image
        src={bgImage}
        placeholder="blur"
        fill
        alt="bgImg"
        className="object-cover"
      />
      <div className="w-full h-full bg-[#050011e6] z-10 flex items-center justify-center ">
        <div className=" flex gap-5.5 flex-col tracking-[2px] text-[0.8rem] uppercase font-sans max-w-75 w-full p-2.5 ">
          <Link className="bg-purple-600 p-4  w-full text-center rounded-[10px] font-medium" href={"/users"}>
            Girlfriend / crush
          </Link>
          <Link className="bg-green-600 p-4  w-full text-center rounded-[10px] font-medium" href={"/stranger"}>
           stranger girl{" "}
          </Link>
          <Link className="bg-rose-900 p-4  w-full text-center rounded-[10px] font-medium" href={"#"}>
           masturbate{" "}
          </Link>
          <Link className="bg-pink-600 p-4  w-full text-center rounded-[10px] font-medium" href={"#"}>
           nude / sex{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
