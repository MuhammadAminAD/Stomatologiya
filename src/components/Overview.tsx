"use client";
import OverviewImage from "@/assets/images/OverviewImage.png"
import OverviewIcon from "@/assets/icons/OverviewIcon.svg"
import Image from "next/image"
import { styles } from "@/styles/index.style"
import { useTranslation } from 'react-i18next'

export default function Overview() {
    const { t } = useTranslation()
    return (
        <div className="w-full flex justify-center">
            <div id="services-page" className="w-full max-w-[1400px] lg:flex gap-[60px] items-center">
                <div className="lg:pt-[116px] py-[50px] px-[20px] lg:px-[108px] lg:pb-[104px] bg-[#f0f5f9] rounded-br-[136px] rounded-bl-[136px]">
                    <h2 className="font-semibold text-[26px] md:text-[50px] md:leading-[64px] text-[#18181B] mb-[100px] text-center lg:text-left">
                        {t('Bright Smiles, Healthy Lives')}
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-[85%] max-w-[500px]">
                            <Image src={OverviewImage} alt={t('Overview Image')} className="w-full h-auto" />
                        </div>
                    </div>
                </div>
                <div className="lg:mt-0 mt-[60px] lg:pl-[40px] px-[30px] flex flex-col items-center lg:items-start">
                    <p className="max-w-[650px] font-normal text-[20px] leading-[34px] text-[#777777] mb-[80px] text-center lg:text-left">
                        {t('From routine check ups to advanced cosmetic treatments, we offer complete dental care for the whole family. Your smile is safe in our hands')}
                    </p>
                    <div className="w-full max-w-[650px]">
                        <h3 className="font-medium text-[24px] leading-[34px] text-[#18181B] mb-[32px] text-center lg:text-left">{t('Services')}</h3>
                        <div className="md:grid grid-cols-2 gap-x-[40px]">
                            <div className="flex flex-col gap-[24px] lg:mb-0 mb-[25px]">
                                <h3 className={`${styles.overviewTitle}`}><Image src={OverviewIcon} alt={t('Overview Icon')} />{t('Tooth treatment')}</h3>
                                <h3 className={`${styles.overviewTitle}`}><Image src={OverviewIcon} alt={t('Overview Icon')} />{t('Extraction')}</h3>
                                <h3 className={`${styles.overviewTitle}`}><Image src={OverviewIcon} alt={t('Overview Icon')} />{t('Braces')}</h3>
                            </div>
                            <div className="flex flex-col gap-[24px]">
                                <h3 className={`${styles.overviewTitle}`}><Image src={OverviewIcon} alt={t('Overview Icon')} />{t('Implantation')}</h3>
                                <h3 className={`${styles.overviewTitle}`}><Image src={OverviewIcon} alt={t('Overview Icon')} />{t('Dental prosthetics')}</h3>
                                <h3 className={`${styles.overviewTitle}`}><Image src={OverviewIcon} alt={t('Overview Icon')} />{t('Veneers')}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}