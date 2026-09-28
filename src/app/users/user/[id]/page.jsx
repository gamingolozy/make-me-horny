import DeleteUser from "@/components/delete-user";
import PrivatePhotoForm from "@/components/private-photo-form";
import User from "@/models/user-model";
import Image from "next/image";

export default async function Page({ params }) {
  const { id } = await params;
  const user = await User.findById(id);
  console.log(user);

  return (
    <div className="flex flex-col  w-full min-h-dvh bg-gray-900">
      <div className="flex flex-col max-w-100 w-full  p-5">
        <div className="w-full flex items-center ">
          <Image
            width={400}
            height={500}
            src={user?.photo?.url}
            alt="user"
            className=" w-full h-auto object-cover"
          />
        </div>

        <div className="w-full flex flex-col gap-4.5 sm:text-[14px] text-[14px] text-nowrap">
          <span className="text-[18px] text-white uppercase font-bold mt-5 mb-2.5">
            {user?.name}
          </span>

          <div className="flex flex-col gap-1 ">
            <span className="text-[10px] font-bold text-gray-500 border-b  border-zinc-800">
              OVERVIEW
            </span>
            <div className="flex gap-2 mt-1.5 flex-wrap">
              {user?.overview?.split(",")?.map((item) => {
                return (
                  <span
                    key={item._id}
                    className="capitalize px-3.5 py-[4px] rounded-full bg-pink-500  text-white  font-bold">
                    {item?.trim()}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-1  ">
            <span className="text-[10px] font-bold text-gray-500 border-b  border-zinc-800">
              CONTACT
            </span>
            <div className="flex gap-2 mt-1.5 flex-wrap">
              {user?.contact?.split(",")?.map((item) => {
                return (
                  <span
                    key={item._id}
                    className="px-3.5 py-[4px] rounded-full bg-pink-800 font-medium">
                    {item?.trim()}
                  </span>
                );
              })}
            </div>
          </div>
          {user?.comment && (
            <div className="flex flex-col text-wrap ">
              <span className="text-[10px] font-bold text-gray-500 border-b  border-zinc-800">
                COMMENT
              </span>
              <p className="mt-1.5 text-[16px]">{user?.comment}</p>
            </div>
          )}
        </div>
      </div>

      <PrivatePhotoForm id={user?._id.toString()}></PrivatePhotoForm>
      <div className="flex flex-wrap w-full gap-5 p-2.5">
        {user?.privatePhoto?.map((photo, index) => {
          return (
            <Image
              key={index}
              className="rounded-[10px]"
              width={500}
              height={500}
              src={photo}
              alt="image"></Image>
          );
        })}
      </div>

      <div className="flex w-full p-5 justify-end items-center">
        <DeleteUser id={user?._id.toString()}></DeleteUser>
      </div>
    </div>
  );
}
