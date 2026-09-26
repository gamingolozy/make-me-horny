"use client";

import { FormAction } from "@/actions/form-action";
import { useActionState, useState } from "react";

export default function LinkForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const initialState = {
    status: false,
    message: "",
  };
  const [state, dispatchAction, isPending] = useActionState(
    FormAction,
    initialState,
  );
  return (
    <>
      <div className=" relative flex flex-col  z-10  w-full p-3.5 py-2.5 bg-black sm:text-[14px] text-[12px]  ">
        <div className="w-full flex justify-between items-center ">
          <span className="text-[1.3rem]">
            Horny<span className="text-purple-500">Links</span>
          </span>
          <button
            onClick={()=>setIsFormOpen(!isFormOpen)}
            className="p-2.5 py-2 bg-purple-700 font-medium   rounded-[10px] ">
            Add Link
          </button>
        </div>
        <div
          className={`absolute top-15 left-0 w-full ${isFormOpen ? "h-50 block" : "h-0 hidden"} transition-all ease duration-200 overflow-hidden bg-black p-5 `}>
          <form
            action={dispatchAction}
            className="  flex flex-col gap-2.5 w-full justify-center -z-10">
            <span>{state.message}</span>
            <input
              className="border-[0.5px] border-gray-500 rounded p-2.5"
              type="text"
              name="title"
              placeholder="title"
            />
            <input
              className="border-[0.5px] border-gray-500 rounded p-2.5"
              type="text"
              name="url"
              placeholder="url"
            />

            <button className=" rounded p-2.5  bg-[#b900ff]" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
