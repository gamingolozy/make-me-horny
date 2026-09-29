"use client";
import { DeleteStranger } from "@/actions/stranger-action";
import { Trash } from "lucide-react";
import Image from "next/image";

export default function StrangerCard({ data }) {
  // console.log(data)
  return (
    <>
      {data?.strangers?.map((stranger) => {
        return (
          <div
            key={stranger?._id}
            className="relative max-w-75 bg-gray-900 text-white text-[13px] mt-4 rounded-[10px] overflow-hidden">
            <Image
              className=""
              width={500}
              height={500}
              src={stranger?.photo?.url}
              alt="image"></Image>

            <div className="leading-3.5 p-2.5 font-medium">
              <span>{stranger?.comment}</span>
            </div>

            <Trash onClick={()=>DeleteStranger(stranger?._id)} size={15} className="absolute top-2.5 right-2.5 text-red-600" ></Trash>
          </div>
        );
      })}
    </>
  );
}
