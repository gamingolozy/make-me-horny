'use client'
import { DeleteUserAction } from "@/actions/user-action";

export default function DeleteUser({ id }) {
  const deleteUser = async () => {
    await DeleteUserAction(id);
  };
  return <button className="p-2.5 py-1.5 bg-red-500 text-[14px] font-bold  rounded-[10px]" onClick={deleteUser}>Delete</button>;
}
