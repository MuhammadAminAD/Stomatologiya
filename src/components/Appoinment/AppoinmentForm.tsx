import { styles } from "@/styles/index.style";
import calendarIcon from "@/components/Icons/calendar.svg"
import ChevronDownIcon from "@/components/Icons/ChevronDownIcon.svg"
import Image from "next/image";

export default function AppoinmentForm() {
    return (
        <form action="" className="lg:mt-0 md:mt-[100px] mt-[50px]">
            <div className="md:grid grid-cols-2 gap-[20px] items-center">
                <div className={`${styles.appoinmentFormContent}`}>
                    <label className={`${styles.appoinmentLabel}`} htmlFor="">Name</label>
                    <input className={`${styles.appoinmentInp}`} type="text" placeholder="Full name" />
                </div>

                <div className={`${styles.appoinmentFormContent}`}>
                    <label htmlFor="">Phone</label>
                    <span className="absolute top-[45px] left-[16px]">+998</span>
                    <input className={`${styles.appoinmentInp} pl-[66px]`} type="text" placeholder="(99) 999-99-99" />
                </div>

                <div className={`${styles.appoinmentFormContent}`}>
                    <label htmlFor="">Date</label>
                    <Image className="absolute top-[45px] right-[16px]" src={calendarIcon} alt="calendarIcon" />
                    <input className={`${styles.appoinmentInp}`} type="text" placeholder="DD/MM/YYYY" />
                </div>

                <div className={`${styles.appoinmentFormContent}`}>
                    <label htmlFor="">Doctor</label>
                    <Image className="absolute top-[53px] right-[16px]" src={ChevronDownIcon} alt="ChevronDownIcon" />
                    <input className={`${styles.appoinmentInp}`} type="text" placeholder="Dr. Pritis Barua" />
                </div>
            </div>
            <div className={`${styles.appoinmentFormContent} mt-[20px]`}>
                <label className={`${styles.appoinmentLabel}`} htmlFor="">Message</label>
                <textarea className="py-[12px] px-[16px] border-1 border-[#52525B40] font-normal text-[16px] leading-[24px] text-[#52525B] rounded-[8px] resize-none lg:min-h-[120px] xl:min-h-[144px]" name="" id="" placeholder="Include a message..."></textarea>
            </div>
            <div className="flex gap-[12px] mt-[20px] xl:mt-[32px]">
                <input className="w-[20px] h-[20px] cursor-pointer" type="checkbox" />
                <label className="font-normal text-[16px] leading-[24px] text-[#52525B]" htmlFor="">You agree to our friendly privacy policy.</label>
            </div>
            <button className="w-full py-[16px] bg-[#3C2A97] rounded-[8px] cursor-pointer font-medium text-[16px] leading-[26px] text-[#FFFFFF] mt-[15px] xl:mt-[24px]">Confirm Appoinment</button>
        </form>
    )
}
