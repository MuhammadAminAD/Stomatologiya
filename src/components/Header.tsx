"use client";

import React from 'react'
import banner from "@/assets/images/HeaderBanner.png"
import Image from 'next/image'
import PhoneIcon from '../assets/icons/PhoneIcon'
import { styles } from '@/styles/index.style'
import { useTranslation } from 'react-i18next'


export default function Header() {
    const { t } = useTranslation()

    return (
       <div id='home-page' className={`${styles.Container} mt-[110px]`}>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10'>
                <div className='w-full lg:max-w-[50%] px-4 sm:px-6 lg:px-0'>
                    <h1 className='font-bold text-[24px] xs:text-[28px] sm:text-[32px] md:text-[40px] lg:text-[45px] xl:text-[50px] text-center lg:text-left leading-[1.2] lg:leading-[1.1] text-[#3C2A97] mb-3 sm:mb-4 lg:mb-6'>
                        {t('Professional dentistry')}
                    </h1>
                    <p className='text-sm xs:text-base sm:text-lg lg:text-[20px] text-[#777] max-w-full sm:max-w-[95%] lg:max-w-[85%] text-center lg:text-left mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-7 lg:mb-8'>
                        {t('banner')}
                    </p>
                    <div className='flex justify-center lg:justify-start mb-8 sm:mb-10 lg:mb-0'>
                        <a href="tel:+998901095257" className='inline-block w-full max-w-[300px] sm:max-w-[320px] lg:max-w-none lg:w-auto'>
                            <button className='w-full lg:w-auto py-4 sm:py-5 lg:py-3 px-6 sm:px-8 rounded-lg bg-[#3C2A97] text-white font-semibold cursor-pointer border-2 border-[#3C2A97] flex items-center justify-center gap-3 hover:bg-transparent hover:text-[#3C2A97] transition-all duration-300 text-sm sm:text-base lg:min-w-[180px] shadow-lg hover:shadow-xl active:scale-95'>
                                <PhoneIcon />
                                <span>{t('Call Now')}</span>
                            </button>
                        </a>
                    </div>
                </div>
                <div className='w-full lg:w-auto flex justify-center lg:justify-end lg:max-w-[50%]'>
                    <div className='w-full flex justify-center px-4 sm:px-6 lg:px-0'>
                        <Image
                            src={banner}
                            alt={t('bannerAlt')}
                            priority
                            width={500}
                            height={400}
                            className='w-full h-auto max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] object-contain'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}