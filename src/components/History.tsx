import { styles } from "@/styles/index.style";
import HistoryImg from "@/assets/images/HistoryImg.png"
import lineIcon from "@/assets/icons/lineIcon.svg"
import Image from "next/image";

export default function History() {
    return (
        <div className={`${styles.Container} lg:py-[100px] lg:pb-[50px] py-[100px]`}>
            <div className="lg:flex justify-between items-center">
                <h2 className={`${styles.title}`}>WHO  <span className="text-[#3C2A97]">WE ARE</span></h2>
                <h3 className={`${styles.subTitle}`}>Our Glorious<span className={`${styles.subTitles}`}>History</span></h3>
            </div>
            <div className="lg:flex justify-between items-center mt-[72px]">
                <div className="relative after:hidden xl:after:block after:content-[] after:w-[122px] after:h-[308px] after:bg-[#3C2A97] after:absolute after:bottom-[-40px] after:left-[-40px] after:rounded-[12px]">
                    <Image className="max-lg:w-full max-lg:h-full block relative z-2" src={HistoryImg} alt="HistoryImg" />
                    <Image className="hidden xl:block absolute top-[56px] right-[-15px]" src={lineIcon} alt="HistoryImg" />
                </div>
                <div className="p-[20px] xl:p-[50px] bg-[#F8FAFC] border-1 border-[#52525B1A] rounded-[16px]">
                    <h3 className="font-medium text-[24px] leading-[34px] text-[#18181B] mb-[20px]">Our history</h3>
                    <p className="lg:max-w-[400px] xl:max-w-[538px] font-normal text-[16px] lg:leading-[26px] xl:leading-[34px] text-[#777777] tracking-[0.64px]">
                        Dentics is a well-known name in dental and oral care in New York. The journey of this institution started in 1990 under the hands of Dr. Jonathon Doe, Gold Medalist of Harvard University. Dentics dental center has been leading the way in dental treatment in USA for more than 30 years in keeping with the evolution of time and the modernization of the era.
                    </p>
                </div>
            </div>
        </div>
    )
}
