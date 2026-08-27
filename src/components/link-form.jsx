"use client";

import {FormAction} from "@/actions/form-action";
import { useActionState } from "react";

export default function LinkForm() {
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
      <div className=" flex sm:block absolute w-full max-w-100 sm:h-auto h-dvh py-[50px] px-[40px] sm:bg-[#4b3303c9] bg-[#00002fbd] ">
        <form
          action={dispatchAction}
          className=" flex flex-col gap-2.5 w-full justify-center">
          <span className="text-center font-pacifico tracking-[2px] text-[1.5rem] my-3.5 ">
            Create Link
          </span>
          <span>{state.message}</span>
          <input
            className="border-[0.5px] rounded p-2.5"
            type="text"
            name="title"
            placeholder="title"
          />
          <input
            className="border-[0.5px] rounded p-2.5"
            type="text"
            name="url"
            placeholder="url"
          />
          <input
            className="border-[0.5px] rounded p-2.5"
            type="text"
            name="type"
            placeholder="ass,pussy,blowjob,cum,beautiful,indian,shemale,other"
          />
          <input
            className="border-[0.5px] rounded p-2.5"
            type="text"
            name="source"
            placeholder="source"
          />
          <button
            className=" rounded p-2.5 sm:bg-[#af8906] bg-[#0f007c]"
            type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
