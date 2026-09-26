import { GetPasswordAction } from "@/actions/form-action";
import PasswordCard from "@/components/password-card";
import PasswordForm from "@/components/password-form";

export default async function Passwords() {
  const result = await GetPasswordAction();

  // console.log(result);
  return (
    <div>
      <PasswordForm></PasswordForm>
      <div className="flex flex-col text-[12px] text-[14px] p-2.5 gap-2.5 overflow-scroll max-h-150">
        <PasswordCard result={result}></PasswordCard>
      </div>
    </div>
  );
}
