'use client'
import { Eye, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LinkThumbnail from "./link-thumbnail";
import { FormDeleteAction } from "@/actions/form-action";

export default function Card({id, url, title, type, source }) {
  return (
    <div className=" overflow-hidden relative flex border-[1px] my-[10px] py-1.5 rounded border-[#c7c7c71a] max-w-100 w-full gap-4.5 text-[14px] bg-[#0000008a] ">
      <div className="relative sm:w-12.5 w-12.5 h-auto">
        <LinkThumbnail type={type} />
      </div>
      <div className="flex flex-col justify-center gap-[] relative">
        <span className="capitalize">{title}</span>
        <span className="text-gray-500 w-25 truncate ">{url}</span>
        <div className="flex gap-1.5 items-center text-[0.7rem] text-[#808080]">
          <span className=" ">{type.toUpperCase()}</span>
          <span className=" ">{type && source && "|"}</span>
          <span className=" ">{source}</span>
        </div>
      </div>
      <Link className="absolute top-3 right-3" href={url} target="_blank">
        <Eye size={17}></Eye>
      </Link>
      <Trash className="absolute right-3 top-10 text-red-600" onClick={()=> FormDeleteAction(id)} size={17} ></Trash>
    </div>
  );
}
