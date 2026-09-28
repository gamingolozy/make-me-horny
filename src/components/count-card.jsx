'use client'
import { useState } from "react";

export default function CountCard() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="flex flex-col items-center gap-3.5 max-w-100 w-full bg-gray-950 p-5 py-10 border border-gray-900 rounded-[10px]">
       
      <span className="text-8xl font-semibold" >{count}</span>
      <div className="flex w-full gap-2.5">
        <button onClick={handleClick} className="flex-1 items-center justify-center bg-pink-600 p-2.5 py-2 rounded-[10px] font-semibold">
          Update
        </button>
        <button className="flex-1 items-center justify-center bg-black border-[0.5px] p-2.5 py-2 rounded-[10px] font-semibold">
          Reset
        </button>
      </div>

      <span className="text-[0.8rem] text-gray-500 w-full m-5" >Last Masturbate on 26 Sep 2026.</span>
    </div>
  );
}
