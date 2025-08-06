import { KeyFeaterus } from "@/constants/index.constants";
import { styles } from "@/styles/index.style";
import Image from "next/image";

export default function KeyFeatures() {
    return (
        <div id="special-page" className={`${styles.Container} py-[200px]`}>
            <div className="lg:flex justify-between items-center">
                <h2 className={`${styles.title}`}>What Makes Us More <span className="block text-[#18181B]">Special</span></h2>
                <h3 className={`${styles.subTitle} font-bold lg:!text-[56px]`}>KEY <span className={`${styles.subTitles} !inline !text-[#3C2A97]`}>FEATURE</span></h3>
            </div>

            <div className="lg:grid grid-cols-3 gap-[50px] mt-[80px]">
                {
                    KeyFeaterus.map(({ id, icon, title, desc }) => {
                        return <div key={id} className="group pt-[50px] pb-[40px] px-[32px] flex flex-col justify-center text-center bg-[#F8FAFC] border-1 border-[#52525B1A] rounded-[16px] hover:scale-105 hover:shadow-2xl transition-all duration-500 lg:mt-0 mt-[40px]">
                            <Image className="mx-auto mb-[30px] group-hover:scale-110 transition-all duration-500" src={icon} alt="icon" />
                            <h3 className="font-medium text-[24px] leading-[34px] text-[#18181B] mb-[12px]">{title}</h3>
                            <p className="font-medium text-[16px] text-[#777777]">{desc}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}