import { styles } from "@/styles/index.style";
import ContactContent1 from "@/components/Icons/ContactContent1.svg"
import ContactContent2 from "@/components/Icons/ContactContent2.svg"
import Image from "next/image";

export default function Contact() {
    return (
        <div className="w-full bg-[#F8FAFC] py-10 md:py-15 lg:py-[96px] relative">
            <div className={styles.Container}>
                <div className={`rounded-[20px] bg-[#3C2A97] py-5 md:py-10 lg:py-[82px] flex flex-col items-center text-center`}>
                    <h2 className="font-semibold text-[20px] md:text-[42px] text-[#fff] mb-5 
                    md:mb-10 lg:mb-[50px]">Subscribe to our newsletter</h2>
                    <form action="" className="md:flex gap-[24px] items-center px-5">
                        <input className={`${styles.contactInp} md:mb-0 mb-[20px]`} type="text" placeholder="First name" />
                        <input className={`${styles.contactInp} md:mb-0 mb-[30px]`} type="tel" placeholder="Phone number" />
                        <button className="py-[16px] xl:px-[70px] w-full bg-[#FFFFFF] rounded-[10px] cursor-pointer font-normal text-[16px] text-[#18181B] ">Subscribe Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
