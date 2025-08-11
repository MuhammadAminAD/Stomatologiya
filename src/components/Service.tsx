"use client";

import { ServiceCards } from '@/constants/index.constants'
import { styles } from '@/styles/index.style'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Service() {
    const { t } = useTranslation()

    return (
        <main className='py-8 bg-[#3C2A97]'>
            <div className={`${styles.Container} lg:flex items-center justify-between`}>
                <div>
                    <h2 className='text-white font-semibold text-[32px] leading-9'>
                        {t('How to contact us')}
                    </h2>
                    <p className='mt-2 text-white font-medium text-[18px]'>
                        {t('Just follow these simple steps')}
                    </p>
                </div>
                <div className='lg:grid grid-cols-3 gap-6'>
                    {ServiceCards.map(({ id, text, icon }) =>
                        <div key={id} className='py-4 px-5 bg-white rounded-lg flex items-center justify-center flex-col lg:mt-0 mt-[20px]'>
                            <Image src={icon} alt={t('service icon')} />
                            <p className='max-w-[112px] text-center mt-3 text-sm leading-4 text-[#52525B] font-semibold'>
                                {t(text)}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}