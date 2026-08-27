import RoomCard from "@/components/room-card";
import img from "@/assets/0045-13_1800.jpg";
import Image from "next/image";
import room1 from "@/assets/room/room-1.jpg";
import room2 from "@/assets/room/room-2.jpg";
import room3 from "@/assets/room/room-3.jpg";

export default function Rooms() {
  return (
    <>
      <div className="w-full h-dvh">
        <div className="relative w-full h-full">
          <Image
            src={img}
            fill
            placeholder="blur"
            alt="img"
            className="object-cover sm:block hidden"
          />
        </div>
        <div className="flex flex-col  sm:items-baseline p-5 gap-5 items-center absolute top-0 left-0 h-full w-full bg-[#0b0050d1]">
          <span className="uppercase tracking-[2px] mb-2.5 text-[0.8rem] ">
            put headphones before enter
          </span>
          <RoomCard
            src={room1}
            text={"room-1"}
            type={"desi bhabhi"}
            href={"/rooms/room-1"}
            variant={"bg-[linear-gradient(45deg,black,#0c038e99)]"}></RoomCard>
          <RoomCard
            src={room2}
            text={"room-2"}
            type={"pussy licking"}
            href={"/rooms/room-2"}
            variant={"bg-[linear-gradient(45deg,black,#0c038e99)]"}></RoomCard>
          <RoomCard
            src={room3}
            text={"room-3"}
            type={"big ass"}
            href={"/rooms/room-3"}
            variant={"bg-[linear-gradient(45deg,black,#0c038e99)]"}></RoomCard>
        </div>
      </div>
    </>
  );
}
