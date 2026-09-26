import Image from "next/image";
import ass from "@/assets/thumbnail/ass.jpg";
import blowjob from "@/assets/thumbnail/blowjob.jpg";
import cum from "@/assets/thumbnail/cum.jpg";
import indian from "@/assets/thumbnail/indian.webp";
import beautiful from "@/assets/thumbnail/beautifull.jpg";
import pussy from "@/assets/thumbnail/pussy.jpg";
import shemale from "@/assets/thumbnail/shemale.png";
import other from "@/assets/thumbnail/other.jpg";
import dirty from "@/assets/thumbnail/dirty.jpg";

export default function LinkThumbnail({ url }) {


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
    <div className="relative w-full h-full ">
      <Image
        src={
          matchCase_1
            ? ass
            : matchCase_5
              ? blowjob
              : matchCase_4
                ? cum
                : matchCase_2
                  ? indian
                  : matchCase_6
                    ? beautiful
                    : matchCase_3
                      ? pussy
                      : matchCase_7
                        ? dirty
                        : other
        }
        width={500}
        height={500}
        placeholder="blur"
        alt="icon"
        className="w-full h-auto"
      />
    </div>
  );
}
