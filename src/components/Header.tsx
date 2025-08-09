import React from 'react'
import banner from "@/assets/images/HeaderBanner.png"
import Image from 'next/image'
import PhoneIcon from '../assets/icons/PhoneIcon'
import { styles } from '@/styles/index.style'

export default function Header() {
    return (
        <div id='home-page' className={`${styles.Container} mt-[110px]`}>
            <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
                <div className='w-full lg:max-w-[50%] px-4 md:px-0'>
                    <h1 className='font-bold text-[28px] md:text-[36px] text-center md:text-left leading-[1.2] lg:text-[50px] text-[#3C2A97] lg:leading-[1.1] mb-4 lg:mb-6'>
                        We Provide High Quality Dental Services
                    </h1>
                    <p className='text-base lg:text-[20px] text-[#777] max-w-[70%] text-center md:text-left mx-auto md:mx-0 leading-relaxed mb-6 lg:mb-8'>
                        Appropriately embrace transparent materials via turnkey niche markets.
                    </p>
                    <div className='flex justify-center md:justify-start'>
                        <a href="tel:+99999999999" className='inline-block'>
                            <button className='py-3 px-8 rounded-lg bg-[#3C2A97] text-white font-semibold cursor-pointer border-2 border-[#3C2A97] flex items-center justify-center gap-3 hover:bg-transparent hover:text-[#3C2A97] transition-all duration-300 text-sm min-w-[160px]'>
                                <PhoneIcon />
                                Call Now
                            </button>
                        </a>
                    </div>
                </div>
                <div className='w-full md:w-auto flex justify-center md:justify-end lg:max-w-[50%]'>
                    <div className='w-full flex justify-center'>
                        <Image
                            src={banner}
                            alt='High quality dental services'
                            priority
                            width={500}
                            height={400}
                            className='w-auto h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[600px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}