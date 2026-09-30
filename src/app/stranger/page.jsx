import { GetStranger } from "@/actions/stranger-action";
import AccessDeny from "@/components/access-denied";
import StrangerCard from "@/components/stranger-card";
import StrangerForm from "@/components/stranger-form";
import connectDB from "@/lib/db";

export default async function Stranger() {
  await connectDB();
  const data = await GetStranger();
  console.log(data)
  if (!data?.status) {
     return <AccessDeny />;
   }
  return (
    <div>
      <StrangerForm></StrangerForm>
      <div className="columns-2 sm:columns-4 md:columns-4 max-w-300 w-full gap-5 p-2.5">
        <StrangerCard data={JSON.parse(JSON.stringify(data))}></StrangerCard>
      </div>
    </div>
  );
}
