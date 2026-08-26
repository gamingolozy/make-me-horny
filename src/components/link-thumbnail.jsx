import Image from "next/image";
import ass from "@/assets/thumbnail/ass.webp";
import blowjob from "@/assets/thumbnail/blowjob.webp";
import cum from "@/assets/thumbnail/cum.webp";
import indian from "@/assets/thumbnail/indian.webp";
import beautiful from "@/assets/thumbnail/beautifull.webp";
import pussy from "@/assets/thumbnail/pussy.webp";
import shemale from "@/assets/thumbnail/shemale.png";
import other from "@/assets/thumbnail/other.png";

export default function LinkThumbnail({ type }) {
  return (
    <div className="relative w-full h-full ">
      <Image
        src={
          type?.toLowerCase() === "ass"
            ? ass
            : type?.toLowerCase() === "blowjob"
              ? blowjob
              : type?.toLowerCase() === "cum"
                ? cum
                : type?.toLowerCase() === "indian"
                  ? indian
                  : type?.toLowerCase() === "beautiful"
                    ? beautiful
                    : type?.toLowerCase() === "pussy"
                      ? pussy
                      : type?.toLowerCase() === "shemale"
                        ? shemale
                        : type?.toLowerCase() === "other"
                          ? other
                          : other
        }
        fill
        placeholder="blur"
        alt="icon"
        className="object-cover"
      />
    </div>
  );
}
