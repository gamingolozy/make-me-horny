"use client";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function UserCard({data}) {

// console.log(data.users?.[0])


 
  return (
    <>
      {data.users.map((u) => {
        return (
          <div key={u._id} className="flex flex-col sm:text-[14px] text-[12px]  bg-gray-900 w-full rounded-[10px] overflow-hidden capitalize ">
            <Link href={`/users/user/${u?._id}`} className="w-full aspect-4/5 overflow-hidden">
              <Image
                width={400}
                height={500}
                src={u?.photo?.url}
                alt="user"
                className="w-full h-full object-cover"
              />
            </Link>

            <div className="flex flex-col  p-2">
              <span className="font-semibold" >{u.name}</span>
              <span className="text-gray-400">{u?.contact?.split(',')?.[0].trim()}</span>
              <span className="text-amber-300 font" >{u?.overview?.split(',')?.[0].trim()}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
