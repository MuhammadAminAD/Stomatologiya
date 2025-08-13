'use client'

import { styles } from "@/styles/index.style";
import HistoryImg from "@/assets/images/HistoryImg.jpg"
import lineIcon from "@/assets/icons/lineIcon.svg"
import { useTranslation } from 'react-i18next'

import Image from "next/image";

export default function History() {
    const { t } = useTranslation()

    return (
        <div id="about-page" className={`${styles.Container} lg:py-[160px] lg:pb-[50px] py-[100px]`}>
            <div className="lg:flex justify-between items-center">
                <h2 className={`${styles.title}`}>{t('WHO WE ARE.part1')}  <span className="text-[#3C2A97]">{t('WHO WE ARE.part2')}</span></h2>
                <h3 className={`${styles.subTitle}`}>{t('Our Dental Clinic')}</h3>
            </div>
            <div className="lg:flex lg:justify-between lg:items-start lg:gap-[30px] xl:gap-[40px] mt-[72px]">
                {/* Image section */}
                <div className="relative mb-[40px] lg:mb-0 lg:flex-1">
                    <div className="relative after:hidden xl:after:block after:content-[] after:w-[122px] after:h-[308px] after:bg-[#3C2A97] after:absolute after:bottom-[-40px] after:left-[-40px] after:rounded-[12px]">
                        <Image 
                            className="w-full max-w-[450px] h-[300px] sm:h-[340px] lg:w-full lg:max-w-[530px] lg:h-[400px] xl:max-w-[580px] xl:h-[450px] object-cover block relative z-2 rounded-[20px] mx-auto lg:mx-0" 
                            src={HistoryImg} 
                            alt="HistoryImg" 
                        />
                        <Image className="hidden xl:block absolute top-[56px] right-[-15px]" src={lineIcon} alt="HistoryImg" />
                    </div>
                </div>
                
                {/* Content section */}
                <div className="lg:flex-1 lg:max-w-[600px]">
                    <div className="p-[20px] sm:p-[30px] xl:p-[50px] bg-[#F8FAFC] border-1 border-[#52525B1A] rounded-[16px] h-full">
                        <h3 className="font-medium text-[20px] sm:text-[24px] leading-[28px] sm:leading-[34px] text-[#18181B] mb-[16px] sm:mb-[20px]">{t('About Us')}</h3>
                        <p className="font-normal text-[14px] sm:text-[16px] leading-[24px] sm:leading-[26px] xl:leading-[34px] text-[#777777] tracking-[0.64px]">
                            {t('About Us Description')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}