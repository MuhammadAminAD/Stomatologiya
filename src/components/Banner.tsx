'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Banner() {
    const { t } = useTranslation()

    function scrollToSection(id: string, offset = -100) {
        const element = document.getElementById(id)
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset + offset
            window.scrollTo({ top: y, behavior: "smooth" })
        }
    }

    function handleAppointmentClick() {
        scrollToSection('appointment-page')
    }

    return (
        <div className="w-full py-[88px] bg-[#3C2A97] text-center text-[#fff] lg:px-0 px-[30px]">
            <h2 className="font-normal text-[36px] leading-[60px]">
                {t('banner-page.title.part1')} {t('banner-page.title.part2')}
            </h2>
            <p className="max-w-[904px] mx-auto mt-[25px] mb-[56px] font-normal text-[18px] leading-[30px]">
                {t('banner-page.description')}
            </p>
            <button
                onClick={handleAppointmentClick}
                className="py-[15px] lg:px-[50px] px-[35px] bg-transparent border-2 border-[#fff] rounded-[16px] font-normal text-[20px] cursor-pointer hover:bg-[#fff] hover:text-black transition-all duration-500"
            >
                {t('banner-page.appointmentButton')}
            </button>
        </div>
    )
}