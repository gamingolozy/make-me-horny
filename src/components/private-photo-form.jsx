"use client";
import { PrivatePhotoAction, UserAction } from "@/actions/user-action";
import { useState } from "react";

export default function PrivatePhotoForm({ id }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [privatePhoto, setPrivatePhoto] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await PrivatePhotoAction(id, privatePhoto);
      setPrivatePhoto("");
      setIsFormOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className=" relative flex flex-col  z-10  w-full p-3.5 py-2.5 sm:text-[14px] text-[12px] mt-10 border-t border-zinc-500">
        <div className="w-full flex justify-between items-center ">
          <span className="text-[18px] sm:text-[24px] font-bold text-zinc-500 ">
            Private Pic
          </span>
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="p-4.5 py-2 bg-pink-600 font-medium  rounded-[10px] ">
            Add
          </button>
        </div>
        <div
          className={`absolute top-15 left-0 w-full ${isFormOpen ? "h-50 block" : "h-0 hidden"} transition-all ease duration-200 overflow-hidden bg-black p-5 `}>
          <form
            onSubmit={handleSubmit}
            className="  flex flex-col gap-2.5 w-full justify-center -z-10">
            <input
              className="border-[0.5px] border-gray-500 rounded p-2.5"
              type="text"
              placeholder="private photo"
              onChange={(e) => setPrivatePhoto(e.target.value)}
            />

            <button className=" rounded p-2.5  bg-pink-600" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
