"use client";

import { AddPasswordAction } from "@/actions/form-action";
import { useState } from "react";

export default function PasswordForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const initialState = {
    status: false,
    message: "",
  };

  return (
    <>
      <div className=" relative flex flex-col  z-10  w-full p-3.5 py-2.5 bg-black sm:text-[14px] text-[12px]  ">
        <div className="w-full flex justify-between items-center ">
          <span className="text-[1.3rem]">Passwords</span>
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="p-4.5 py-2 bg-pink-600 font-medium  rounded-[10px] ">
            Add
          </button>
        </div>
        <div
          className={`absolute top-15 left-0 w-full ${isFormOpen ? "h-62.5 block" : "h-0 hidden"} transition-all ease duration-200 overflow-hidden bg-black p-5 `}>
          <form
            action={AddPasswordAction}
            className="  flex flex-col gap-2.5 w-full justify-center -z-10">
            {/* <span>{state.message}</span> */}
            <input
              className="border-[0.5px] border-gray-500 rounded p-2.5"
              type="text"
              name="username"
              placeholder="username"
            />
            <input
              className="border-[0.5px] border-gray-500 rounded p-2.5"
              type="text"
              name="password"
              placeholder="password"
            />
            <input
              className="border-[0.5px] border-gray-500 rounded p-2.5"
              type="text"
              name="platform"
              placeholder="platform"
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
