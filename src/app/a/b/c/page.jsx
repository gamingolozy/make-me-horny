import Image from "next/image";
import Link from "next/link";

export default function C() {
  return (
    <div className="w-full h-dvh relative">
      <Image
        src={
          "https://images.unsplash.com/photo-1631177067563-648ce7b05877?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        fill
        placeholder="blur"
        blurDataURL="https://images.unsplash.com/photo-1631177067563-648ce7b05877?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="img"
        className="object-cover"
      />
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
        <Link
          href={"b"}
          className="uppercase tracking-[2px] font-sans text-[1.5rem]">
          click
        </Link>
      </div>
    </div>
  );
}
