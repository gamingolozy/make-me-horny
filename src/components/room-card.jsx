import Image from "next/image";
import Link from "next/link";

export default function RoomCard({ src, text, type,href,variant }) {
  return (
    <>
      <div className="relative w-full max-w-100 h-37.5  border border-[#ffffff75] rounded-[10px] overflow-hidden ">
       
          <Image
            src={src}
            fill
            placeholder="blur"
            alt={"img"}
            className="object-cover"
          />
       
        <Link href={href} className={`flex flex-col absolute top-0 left-0 p-5 justify-center w-full h-full ${variant} `} >
          <span className="capitalize text-[1.5rem] text-[#ff1493] " >{text}</span>
          <span className="capitalize text-[1rem] text-[#696969] " >{type}</span>
        </Link>
      </div>
    </>
  );
}
