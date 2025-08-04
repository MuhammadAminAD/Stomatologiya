import { styles } from "@/styles/index.style";
import AppoinmentImg from "@/components/images/AppoinmentImg.png"
import Image from "next/image";
import AppoinmentForm from "./AppoinmentForm";

export default function Appoinment() {
    return (
        <div className={`${styles.Container} pt-[140px] pb-[120px]`}>
            <div className="lg:flex justify-between items-center">
                <h2 className={`${styles.title}`}>MAKE AN <span className="text-[#3C2A97]">APPOINMENT</span></h2>
                <h3 className="font-semibold lg:text-[45px] text-[22px] md:text-[48px] md:mt-0 mt-[20px] md:leading-[64px] text-[#18181B] md:text-right">Consult with our <span className="block font-bold md:text-[60px] md:leading-[64px] text-[#18181B]">Doctor</span></h3>
            </div>
            <div className="lg:flex justify-between items-center mt-[72px]">
                <div className="relative after:hidden xl:after:block after:content-[''] after:w-[380px] after:h-[588px] after:bg-[#3C2A97] after:absolute after:top-0 after:left-0 after:rounded-[32px]">
                    <Image className=" max-lg:w-full max-lg:h-full block relative z-50 xl:top-[50px] xl:left-[50px]" src={AppoinmentImg} alt="AppoinmentImg" />
                </div>
                <AppoinmentForm />
            </div>
        </div>
    )
}