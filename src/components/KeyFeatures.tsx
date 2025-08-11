"use client";


import { styles } from "@/styles/index.style";
import Image from "next/image";
import { useTranslation } from 'react-i18next'
import Icon1 from "@/assets/icons/Icon1.svg"
import Icon2 from "@/assets/icons/Icon2.svg"
import Icon3 from "@/assets/icons/Icon3.svg"
import Icon4 from "@/assets/icons/Icon4.svg"
import Icon5 from "@/assets/icons/Icon5.svg"
import Icon6 from "@/assets/icons/Icon6.svg"

export default function KeyFeatures() {
    const { t } = useTranslation()

    const keyFeaturesData = [
        {
            id: 0,
            icon: Icon1,
            title: t('features.laserTechnology.title'),
            desc: t('features.laserTechnology.desc')
        },
        {
            id: 1,
            icon: Icon2,
            title: t('features.advancedEquipment.title'),
            desc: t('features.advancedEquipment.desc')
        },
        {
            id: 2,
            icon: Icon3,
            title: t('features.expertCare.title'),
            desc: t('features.expertCare.desc')
        },
        {
            id: 3,
            icon: Icon4,
            title: t('features.digitalDentistry.title'),
            desc: t('features.digitalDentistry.desc')
        },
        {
            id: 4,
            icon: Icon5,
            title: t('features.painFreeTreatment.title'),
            desc: t('features.painFreeTreatment.desc')
        },
        {
            id: 5,
            icon: Icon6,
            title: t('features.qualityMaterials.title'),
            desc: t('features.qualityMaterials.desc')
        },
    ];

    return (
        <div id="advantages-page" className={`${styles.Container} py-[200px]`}>
            <div className="lg:flex justify-between items-center">
                <h2 className={`${styles.title}`}>
                    {t('keyFeatures.mainTitle')} <span className="block text-[#18181B]">{t('keyFeatures.specialText')}</span>
                </h2>
                <h3 className={`${styles.subTitle} font-bold lg:!text-[56px]`}>
                    {t('keyFeatures.keyText')} <span className={`${styles.subTitles} !inline !text-[#3C2A97]`}>{t('keyFeatures.featureText')}</span>
                </h3>
            </div>

            <div className="lg:grid grid-cols-3 gap-[50px] mt-[80px]">
                {
                    keyFeaturesData.map(({ id, icon, title, desc }) => {
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