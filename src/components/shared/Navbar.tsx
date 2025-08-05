'use client'

import React, { useEffect, useState } from 'react'
import Logo from '../../assets/icons/Logo'
import BarsIcon from '../../assets/icons/BarsIcon'
import XIcon from '../../assets/icons/XIcon'
import { menuLink } from '@/constants/index.constants'
import { styles } from '@/styles/index.style'

export default function Navbar() {
    const [activeBars, setActiveBars] = useState<boolean>(false)

    useEffect(() => {
        if (activeBars) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [activeBars])

    return (
        <nav>
            <div className={styles.Container}>
                <div className={`flex items-center justify-between border-b border-[#BCBCBC] py-6`}>
                    <div className='w-full flex justify-between items-center'>
                        <Logo />
                        <button className='lg:hidden flex' onClick={() => setActiveBars(prev => !prev)}>{activeBars ? <XIcon className='z-15 w-8 h-8' /> : <BarsIcon className="w-8 h-8 text-gray-700" />}</button>
                    </div>

                    <div className={`lg:flex hidden items-center gap-15 ${activeBars ? '!flex fixed inset-0 bg-gray-50 flex-col items-center justify-center z-10 px-[25px]' : 'hidden'}`}>
                        <ul className='items-center justify-between gap-10 lg:flex'>
                            {menuLink.map(({ id, name }) =>
                                <li className='max-w-[150px] truncate overflow-hidden whitespace-nowrap block text-ellipsis  hover:border-b border-b-[#3C2A97] lg:hover:text-[#3C2A97] lg:py-1 py-3 cursor-pointer font-normal lg:text-md text-xl leading-6 text-[#52525B]' key={id}>{name}</li>
                            )}
                        </ul>

                        <button className='lg:w-auto w-full justify-center flex py-4 px-10 rounded-lg bg-[#3C2A97] text-white font-bold cursor-pointer border-2 border-[#3C2A97] items-center gap-2 hover:bg-transparent hover:text-black transition-all duration-500'>
                            Appoinment
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
