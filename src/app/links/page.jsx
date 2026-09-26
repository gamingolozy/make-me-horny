import Image from "next/image";
import bgImage from "@/assets/0002-04_1800.jpg";
import Card from "@/components/card";

import LinkData from "@/models/linkdata-model";
import connectDB from "@/lib/db";
import { connection } from "next/server";
import Link from "next/link";
import LinkForm from "@/components/link-form";

export default async function LinksPage() {
  await connection();
  await connectDB();
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
      <div className="absolute  flex flex-col gap-2.5 top-0 left-0 w-full h-full bg-[#020939b8] ">
         <LinkForm></LinkForm>
       
        <div className="overflow-scroll  sm:px-10 px-2.5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
          {links?.map((link, index) => {
            return (
              <Card
                key={index}
                title={link?.title}
                source={link?.source}
                url={link?.url}
                type={link?.type}
                id={link?._id.toString()}></Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
