import { ServiceCards } from '@/constants/index.constants'
import { styles } from '@/styles/index.style'
import Image from 'next/image'
import React from 'react'

export default function Service() {
    return (
        <main className='py-8 bg-[#3C2A97]'>
            <div className={`${styles.Container} lg:flex items-center justify-between`}>
                <div>
                    <h2 className='text-white font-semibold text-[32px] leading-9'>How to get our service? </h2>
                    <p className='mt-2 text-white font-medium text-[18px]'>Just follow these simple steps</p>
                </div>
                <div className='lg:grid grid-cols-3 gap-6'>
                    {ServiceCards.map(({ id, text, icon }) =>
                        <div key={id} className='py-4 px-5 bg-white rounded-lg flex items-center justify-center flex-col lg:mt-0 mt-[20px]'>
                            <Image src={icon} alt="icon" />
                            <p className='max-w-[112px] text-center mt-3 text-sm leading-4 text-[#52525B] font-semibold'>{text}</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}