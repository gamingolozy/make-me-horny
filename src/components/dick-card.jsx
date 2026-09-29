"use client";

import { DeleteDick } from "@/actions/dick-action";
import { Trash } from "lucide-react";
import Image from "next/image";

export default function DickCard({ data }) {
  // console.log(data)
  return (
    <>
      {data?.dicks?.map((dick) => {
        return (
          <div
            key={dick?._id}
            className="relative max-w-75 bg-gray-900 text-white text-[13px] mt-4 rounded-[10px] overflow-hidden">
            {dick?.url && (
              <Image
                className=""
                width={500}
                height={500}
                src={dick?.url}
                alt="image"></Image>
            )}
             <Trash onClick={()=>DeleteDick(dick?._id)} size={15} className="absolute top-2.5 right-2.5 text-red-600" ></Trash>
          </div>
        );
      })}
    </>
  );
}
