import { ServiceCards } from '@/constants/index.constants'
import { styles } from '@/styles/index.style'
import Image from 'next/image'
import React from 'react'

export default function Service() {
    return (
        <main className='py-16 bg-[#3C2A97]'>
            <div className={`${styles.Container} flex items-center justify-between`}>
                <div>
                    <h2 className='text-white font-semibold text-[42px] leading-12'>How to get our service? </h2>
                    <p className='mt-4 text-white font-medium text-[22px]'>Just follow these simple steps</p>
                </div>
                <div className='grid grid-cols-3 items-center gap-12'>
                    {ServiceCards.map(({ id, text, icon }) =>
                        <div key={id} className='py-6 px-8 bg-white rounded-2xl flex items-center justify-center flex-col'>
                            <Image src={icon} alt="icon" />
                            <p className='max-w-[112px] text-center mt-5 text-lg leading-6 text-[#52525B] font-semibold'>{text}</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}
