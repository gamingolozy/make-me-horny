import { TriangleAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero({
  hero1,
  hero2,
  href,
  text,
  variant,
  invert,
  warning,
  remoteUrl,
  blurUrl,
}) {
  return (
    <div className="relative w-full h-dvh snap-start snap-always  ">
      <div className="relative w-full h-full">
        <Image
          src={hero1}
          fill
          placeholder={remoteUrl ? "empty" : "blur"}
          blurDataURL={remoteUrl ? blurUrl : undefined}
          alt="hero"
          className={`sm:block hidden ${invert && "invert"}`}
        />
        <Image
          src={hero2}
          fill
          placeholder={remoteUrl ? "empty" : "blur"}
          blurDataURL={remoteUrl ? blurUrl : undefined}
          alt="hero"
          className={`sm:hidden block ${invert && "invert"}`}
        />
      </div>

      <div
        className={`flex items-center justify-center absolute w-full top-0 ${variant} h-full`}>
        <div className=" absolute bottom-20 ">
          <Link
            href={href}
            className={
              "p-3.5 px-10   text-[1rem] rounded font-sans font-light tracking-[5px] text-shadow uppercase "
            }>
            {text}
          </Link>
        </div>
        {warning && (
          <div>
            <span className=" text-gray-400 text-[1rem] gap-[10px] uppercase tracking-[5px] font-sans flex items-center">
              DON'T SCROLL <TriangleAlert size={16}></TriangleAlert>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
