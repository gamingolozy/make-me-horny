import LinkForm from "@/components/link-form";
import formImg from '@/assets/form/form-bg-1.jpg'
import formImg2 from '@/assets/form/form-bg-2.jpg'
import Image from "next/image";
export default function AddLink(){
    return(
        <div className="flex items-center justify-center h-dvh w-full">
           <div className="relative w-full h-full">
                     <Image
                       src={formImg}
                       fill
                       placeholder="blur"
                       alt="img"
                       className="object-cover sm:block hidden"
                     />
                     <Image
                       src={formImg2}
                       fill
                       placeholder="blur"
                       alt="img"
                       className="object-cover sm:hidden block"
                     />
                   </div>
            <LinkForm></LinkForm>
        </div>
    )
}