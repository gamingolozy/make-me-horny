"use client";
import { Eye, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LinkThumbnail from "./link-thumbnail";
import { FormDeleteAction } from "@/actions/form-action";

export default function Card({ id, url, title, type, source }) {
  const matchCase_1 =
    url?.toLowerCase().includes("ass") ||
    url?.toLowerCase().includes("butt") ||
    url?.toLowerCase().includes("booty");

  const matchCase_2 =
    url?.toLowerCase().includes("indian") ||
    url?.toLowerCase().includes("bhabhi") ||
    url?.toLowerCase().includes("hindi") ||
    url?.toLowerCase().includes("maa");

  const matchCase_3 =
    url?.toLowerCase().includes("eat") ||
    url?.toLowerCase().includes("lick") ||
    url?.toLowerCase().includes("leak") ||
    url?.toLowerCase().includes("taste") ||
    url?.toLowerCase().includes("smell");
  const matchCase_4 =
    url?.toLowerCase().includes("cum") ||
    url?.toLowerCase().includes("swallow") ||
    (url?.toLowerCase().includes("cum") &&
      url?.toLowerCase().includes("mouth")) ||
    (url?.toLowerCase().includes("cum") &&
      url?.toLowerCase().includes("swallow"));
  const matchCase_5 =
    url?.toLowerCase().includes("blowjob") ||
    url?.toLowerCase().includes("sucking") ||
    url?.toLowerCase().includes("cock");

  const matchCase_6 =
    url?.toLowerCase().includes("beautiful") ||
    url?.toLowerCase().includes("cute") ||
    url?.toLowerCase().includes("modal") ||
    url?.toLowerCase().includes("russian");
  const matchCase_7 =
    url?.toLowerCase().includes("pee") ||
    url?.toLowerCase().includes("piss") ||
    url?.toLowerCase().includes("poop") ||
    url?.toLowerCase().includes("shit") ||
    url?.toLowerCase().includes("scat");

  return (
    <div className=" relative flex flex-col  border-[1px] my-[10px]  rounded border-[#c7c7c71a] w-full text-[12px] sm:text-[14px] bg-[#0000008a] ">
      <div className="">
        <LinkThumbnail url={url} />
      </div>
      <Link
        href={url}
        target="_blank"
        className="flex flex-col justify-center p-2.5 relative">
        <span className="capitalize">{title}</span>
        {/* <span className="text-gray-500 w-25 truncate ">{url}</span> */}
        <div className="flex gap-1.5 items-center text-[0.6rem] font-semibold text-[#ffff00]">
          <span className=" capitalize ">
            {matchCase_1 ? (
              <>
                <span>booty</span> <span>|</span> <span>ass</span>{" "}
                <span>|</span> <span>hips</span>
              </>
            ) : matchCase_5 ? (
              <>
                <span>blowjob</span> <span>|</span> <span>suck</span>{" "}
                <span>|</span> <span>dick</span>
              </>
            ) : matchCase_4 ? (
              <>
                <span>cum</span> <span>|</span> <span>swallow</span>{" "}
                <span>|</span> <span>Mouth</span>
              </>
            ) : matchCase_2 ? (
              <>
                <span>indian</span> <span>|</span> <span>bhabhi</span>{" "}
                <span>|</span> <span>hindi</span>
              </>
            ) : matchCase_6 ? (
              <>
                <span>russian</span> <span>|</span> <span>modal</span>
              </>
            ) : matchCase_3 ? (
              <>
                <span>pussy</span> <span>|</span> <span>lick</span>{" "}
                <span>|</span> <span>eat</span>
              </>
            ) : matchCase_7 ? (
              <>
                <span>pee</span> <span>|</span> <span>poop</span> <span>|</span>{" "}
                <span>dirty</span>
              </>
            ) : (
              <>
                <span>fuck</span> <span>|</span> <span>milf</span>
              </>
            )}
          </span>
        </div>
      </Link>

      <Trash
        className="absolute right-2.5 top-1.5 text-red-600"
        onClick={() => FormDeleteAction(id)}
        size={17}></Trash>
    </div>
  );
}
