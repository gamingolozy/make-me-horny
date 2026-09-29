import Image from "next/image";

export default function StrangerCard({src}) {
  return (
    <div className="max-w-75 bg-gray-900 text-white text-[12px] mt-4 rounded-[10px] overflow-hidden">
      <Image
       
        className=""
        width={500}
        height={500}
        src={src}
        alt="image"></Image>

        <div className="leading-3.5 p-2.5 font-semibold">
            <span>Tanu, kanchghar </span>
        </div>
    </div>

  );
}
