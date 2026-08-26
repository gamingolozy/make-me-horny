import Image from "next/image";
import bgImage from "@/assets/0002-04_1800.jpg";
import Card from "@/components/card";


import LinkData from "@/models/linkdata-model";
import connectDB from "@/lib/db";
import { connection } from "next/server";
import Link from "next/link";

export default async function LinksPage() {
  await connection()
  await connectDB()
  const links = await LinkData.find().lean();
 
 
  return (
    <div className=" h-dvh">
      <div className="w-full h-full">
        <Image
          src={bgImage}
          fill
          placeholder="blur"
          alt="bgImg"
          className="object-cover"
        />
      </div>
      <div className="absolute p-4.5 flex flex-col gap-2.5 top-0 left-0 w-full h-full bg-[#020939b8] ">
        <span className=" flex items-center justify-between font-sans sm:mt-5 mt-2.5 mb-2.5 sm:text-[1.5rem] text-[1rem] font-extralight tracking-[2px]">
          Horny Porn Links <Link className="text-[0.8rem] text-[#ff1493]" href={'/links/form'} >Add Link</Link>
        </span>
        <div className="overflow-scroll">
          {links?.map((link, index) => {
            return (
              <Card
                key={index}
                title={link?.title}
                source={link?.source}
                url={link?.url}
                type={link?.type}></Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
