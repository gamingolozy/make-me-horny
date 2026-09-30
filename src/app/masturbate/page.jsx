import { GetDick } from "@/actions/dick-action";
import AccessDeny from "@/components/access-denied";
import CountCard from "@/components/count-card";
import DickCard from "@/components/dick-card";
import DickForm from "@/components/dick-form";

export default async function Masturbate() {
  const data = await GetDick();

  if (!data?.status) {
    return <AccessDeny />;
  }

  // console.log(data?.dicks?.[0]?.url)
  return (
    <div>
      <DickForm></DickForm>
      <div className="columns-2 sm:columns-4 md:columns-4 max-w-300 w-full gap-5 p-2.5">
        <DickCard data={JSON.parse(JSON.stringify(data))}></DickCard>
      </div>
    </div>
  );
}
