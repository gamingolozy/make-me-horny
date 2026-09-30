import { LoginAction, LogoutAction } from "@/actions/auth-action";

export default function AuthCard({data}) {

    console.log(data.isVerified)
  return (
    <div className="max-w-100 w-full p-2.5">
     {data?.isVerified === false && <form
        action={LoginAction}
        className="  flex flex-col gap-2.5 w-full justify-center -z-10">
        <input
          className="border-[0.5px] border-gray-500 rounded p-2.5"
          type="text"
          name="password"
          placeholder="password"
        />

        <button className=" rounded p-2.5  bg-pink-600" type="submit">
          Login
        </button>
      </form>}

      {data?.isVerified === true && <div className="w-full">
        <button className=" rounded p-2.5 w-full bg-red-500 text-[16px] " onClick={LogoutAction}>
          Logout
        </button>
      </div>}
    </div>
  );
}
