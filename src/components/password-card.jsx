'use client'
import { DeletePasswordAction } from "@/actions/form-action";
import { X } from "lucide-react";

export default function PasswordCard({result}) {
  return (
    <>
      {result?.data?.map((data) => {
        return (
          <div
            key={data?.id}
            className="max-w-100 w-full relative flex flex-col   p-2.5 bg-gray-900 rounded-[10px]">
            <div className="flex gap-2">
              <span className=" ">Username</span>
              <span className=" ">:</span>
              <span className=" ">{data?.username}</span>
            </div>

            <div className="flex gap-2">
              <span className=" ">Password</span>
              <span className=" ">:</span>
              <span className="text-gray-500 font-semibold  ">
                {data?.password}
              </span>
            </div>
            <div className="flex gap-2 capitalize">
              <span className=" ">Platform</span>
              <span className=" ">:</span>
              <span className="text-pink-600  w-fit">{data?.platform || 'Unknown'}</span>
            </div>

            <span
              onClick={() => DeletePasswordAction(data?.id)}
              className="absolute top-2 right-2 text-red-500">
              {" "}
              <X size={17}></X>{" "}
            </span>
          </div>
        );
      })}
    </>
  );
}
