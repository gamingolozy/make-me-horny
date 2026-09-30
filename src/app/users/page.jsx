export const dynamic = "force-dynamic";
import { GetUserData } from "@/actions/user-action";
import AccessDeny from "@/components/access-denied";
import UserCard from "@/components/user-card";
import UserForm from "@/components/user-form";
import { Phone } from "lucide-react";

export default async function Users() {
  const data = await GetUserData();

  if (!data?.status) {
    return <AccessDeny />;
  }
  // console.log(users)
  return (
    <div className="">
      <UserForm></UserForm>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3.5 p-2.5">
        <UserCard data={JSON.parse(JSON.stringify(data))}></UserCard>
      </div>
    </div>
  );
}
