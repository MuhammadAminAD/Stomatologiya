import OverviewImage from "@/assets/images/OverviewImage.png"
import OverviewIcon from "@/assets/icons/OverviewIcon.svg"
import Image from "next/image"
import { styles } from "@/styles/index.style"

export default function Overview() {
    return (
        <div className="w-full flex justify-center">
            <div id="provide-page" className="w-full max-w-[1400px] lg:flex gap-[60px] items-center">
                <div className="lg:pt-[116px] py-[50px] px-[20px] lg:px-[108px] lg:pb-[104px] bg-[#F8FAFC] rounded-br-[136px]">
                    <h2 className="font-semibold text-[26px] md:text-[50px] md:leading-[64px] text-[#18181B] mb-[100px] text-center lg:text-left">
                        Always <span className="text-[#3C2A97]">Lough</span> <span className="block">Whenever Its Possible</span>
                    </h2>
                    <div className="flex justify-center lg:justify-start">
                        <Image src={OverviewImage} alt="OverviewImage.png" />
                    </div>
                </div>
                <div className="lg:mt-0 mt-[40px] lg:pl-[40px] px-[30px] flex flex-col items-center lg:items-start">
                    <p className="max-w-[650px] font-normal text-[20px] leading-[34px] text-[#777777] mb-[150px] text-center lg:text-left">
                        We also offer treatments that improve the appearance of your smile giving you the confidence boost you deserve. The process or our treatment below.
                    </p>
                    <div className="w-full max-w-[650px]">
                        <h3 className="font-medium text-[24px] leading-[34px] text-[#18181B] mb-[32px] text-center lg:text-left">WHAT WE PROVIDE</h3>
                        <div className="md:grid grid-cols-2 gap-x-[40px]">
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
        </div>
    )
}