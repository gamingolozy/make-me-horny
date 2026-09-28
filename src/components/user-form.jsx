"use client";;
import { UserAction } from "@/actions/user-action";
import { useState } from "react";

export default function UserForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const initialState = {
    status: false,
    message: "",
  };

  return (
    <>
      <div className=" relative flex flex-col  z-10  w-full p-3.5 py-2.5 bg-black sm:text-[14px] text-[12px]  ">
        <div className="w-full flex justify-between items-center ">
          <span className="text-[1.3rem]"></span>
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="p-4.5 py-2 bg-pink-600 font-medium  rounded-[10px] ">
            Add
          </button>
        </div>
        <div
          className={`absolute top-15 left-0 w-full ${isFormOpen ? "min-h-dvh block" : "h-0 hidden"} transition-all ease duration-200 overflow-hidden bg-black p-5 `}>
          <form
            action={UserAction}
            className="  flex flex-col gap-2.5 w-full justify-center -z-10">
            {/* <span>{state.message}</span> */}
            <input
              className="border-[0.5px] border-gray-500 rounded p-2.5"
              type="text"
              name="name"
              placeholder="name"
            />
            <input
              className="border-[0.5px] border-gray-500 rounded p-2.5"
              type="file"
              name="photo"
              placeholder="photo"
            />
            <input
              className="border-[0.5px] border-gray-500 rounded p-2.5"
              type="text"
              name="overview"
              placeholder="overview"
            />
            <input
              className="border-[0.5px] border-gray-500 rounded p-2.5"
              type="text"
              name="contact"
              placeholder="contact"
            />
            <input
              className="border-[0.5px] border-gray-500 rounded p-2.5"
              type="text"
              name="comment"
              placeholder="comment"
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
