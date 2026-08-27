"use client";

import { useRef } from "react";

export default function Room3() {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef?.current.play();
  };

  return (
    <div className="relative w-full h-screen">
      <audio autoPlay ref={audioRef}>
        <source src="/audio/room-3.mp3" type="audio/mpeg" />
      </audio>
      <div className=" w-full h-full ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover">
          <source src="/video/room/room-3.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute flex items-center justify-center left-0 top-0 w-full h-full bg-[linear-gradient(45deg,#000,#000c669e)]">
        <span
          className="absolute bottom-10 cursor-pointer font-sans text-[1.5rem] text-[#ffffff61] uppercase tracking-[2px] "
          onClick={playAudio}>
          Start
        </span>
      </div>
    </div>
  );
}
