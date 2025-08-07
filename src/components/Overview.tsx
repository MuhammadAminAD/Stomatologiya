import OverviewImage from "@/assets/images/OverviewImage.png"
import OverviewIcon from "@/assets/icons/OverviewIcon.svg"
import Image from "next/image"
import { styles } from "@/styles/index.style"

export default function Overview() {
    return (
        <div id="provide-page" className="w-full lg:flex gap-[60px] items-center">
            <div className="lg:pt-[116px] py-[50px] pl-[20px] lg:pb-[104px] bg-[#F8FAFC] rounded-br-[136px] lg:pl-[108px] pr-[32px]">
                <h2 className="font-semibold text-[26px] md:text-[50px] md:leading-[64px] text-[#18181B] mb-[100px]">Always <span className="text-[#3C2A97]">Lough</span> <span className="block">Whenever Its Possible</span></h2>
                <Image src={OverviewImage} alt="OverviewImage.png" />
            </div>
            <div className="lg:mt-0 mt-[40px] lg:pl-[40px] px-[30px]">
                <p className="max-w-[650px] font-normal text-[20px] leading-[34px] text-[#777777] mb-[150px]">
                    We also offer treatments that improve the appearance of your smile giving you the confidence boost you deserve. The process or our treatment below.
                </p>
                <div>
                    <h3 className="font-medium text-[24px] leading-[34px] text-[#18181B] mb-[32px]">WHAT WE PROVIDE</h3>
                    <div className="md:grid grid-cols-2">
                        <div className="flex flex-col gap-[24px] lg:mb-0 mb-[25px]">
                            <h3 className={`${styles.overviewTitle}`}><Image src={OverviewIcon} alt="OverviewIcon" />Check ups</h3>
                            <h3 className={`${styles.overviewTitle}`}><Image src={OverviewIcon} alt="OverviewIcon" />Cosmetic dentistry</h3>
                            <h3 className={`${styles.overviewTitle}`}><Image src={OverviewIcon} alt="OverviewIcon" />Orthodontics</h3>
                            <h3 className={`${styles.overviewTitle}`}><Image src={OverviewIcon} alt="OverviewIcon" />Preventative checks</h3>
                        </div>
                        <div className="flex flex-col gap-[24px]">
                            <h3 className={`${styles.overviewTitle}`}><Image src={OverviewIcon} alt="OverviewIcon" />Emergencies</h3>
                            <h3 className={`${styles.overviewTitle}`}><Image src={OverviewIcon} alt="OverviewIcon" />Dental implants</h3>
                            <h3 className={`${styles.overviewTitle}`}><Image src={OverviewIcon} alt="OverviewIcon" />Children's dentistry</h3>
                            <h3 className={`${styles.overviewTitle}`}><Image src={OverviewIcon} alt="OverviewIcon" />Telephone consultations</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}