import { GetAuth, VerifyAction } from "@/actions/auth-action";
import AuthCard from "@/components/auth-card";

export default async function Auth() {
  const data = await GetAuth();

//   console.log(data);

  return (
    <div className="flex w-full min-h-dvh items-center justify-center">
      <AuthCard data={JSON.parse(JSON.stringify(data))}></AuthCard>
    </div>
  );
}
