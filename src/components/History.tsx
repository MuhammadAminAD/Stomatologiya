'use client'

import { styles } from "@/styles/index.style";
import HistoryImg from "@/assets/images/HistoryImg.png"
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
            <div className="lg:flex justify-between items-center mt-[72px]">
                <div className="relative after:hidden xl:after:block after:content-[] after:w-[122px] after:h-[308px] after:bg-[#3C2A97] after:absolute after:bottom-[-40px] after:left-[-40px] after:rounded-[12px]">
                    <Image className="max-lg:w-full max-lg:h-full block relative z-2" src={HistoryImg} alt="HistoryImg" />
                    <Image className="hidden xl:block absolute top-[56px] right-[-15px]" src={lineIcon} alt="HistoryImg" />
                </div>
                <div className="p-[20px] xl:p-[50px] bg-[#F8FAFC] border-1 border-[#52525B1A] rounded-[16px]">
                    <h3 className="font-medium text-[24px] leading-[34px] text-[#18181B] mb-[20px]">{t('About Us')}</h3>
                    <p className="lg:max-w-[400px] xl:max-w-[538px] font-normal text-[16px] lg:leading-[26px] xl:leading-[34px] text-[#777777] tracking-[0.64px]">
                        {t('About Us Description')}
                    </p>
                </div>
            </div>
        </div>
    )
}