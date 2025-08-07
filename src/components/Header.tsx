import React from 'react'
import banner from "@/assets/images/HeaderBanner.png"
import Image from 'next/image'
import PhoneIcon from '../assets/icons/PhoneIcon'
import { styles } from '@/styles/index.style'

export default function Header() {
    return (
        <div id='home-page' className={`${styles.Container} mt-[135px]`}>
            <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-10 my-9'>
                <div className='max-w-full lg:max-w-3/5'>
                    <h1 className='font-bold text-[20px] md:text-[28px] text-center md:text-left leading-8 lg:text-[50px] text-[#3C2A97] lg:leading-18 mb-4 lg:mb-6'>We Provide High
                        Quality Dental Services</h1>
                    <p className='text-md lg:text-[20px] text-[#777] max-w-7/10 text-center md:text-left mx-auto md:mx-0'>Appropriately embrace transparent materials via turnkey niche markets. </p>
                    <a href="tel:+99999999999">
                        <button className='w-full lg:w-fit py-4 px-10 rounded-lg bg-[#3C2A97] text-white font-bold mt-8 lg:mt-16 cursor-pointer border-2 border-[#3C2A97] flex items-center justify-center gap-2 hover:bg-transparent hover:text-black transition-all duration-500'>
                            <PhoneIcon />Call Now
                        </button>
                    </a>
                </div>
                <div>
                    <Image src={banner} alt='dentistry' />
                </div>
            </div>
        </div>
    )
}
