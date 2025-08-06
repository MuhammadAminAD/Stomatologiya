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

    function scrollToSection(id: string, offset = -20) {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }

    return (
        <nav>
            <div className={`w-full fixed top-0 left-[50%] -translate-x-1/2 bg-gray-100 shadow-2xl z-50`}>
                <div className={`flex justify-between items-center py-5 xl:px-[110px] md:px-[50px] px-[20px]`}>
                    <div className='w-full flex justify-between items-center'>
                        <Logo />
                        <button className='lg:hidden flex' onClick={() => setActiveBars(prev => !prev)}>{activeBars ? <XIcon className='z-15 w-8 h-8' /> : <BarsIcon className="w-8 h-8 text-gray-700" />}</button>
                    </div>

                    <div className={`lg:flex hidden items-center gap-15 ${activeBars ? '!flex w-full min-h-screen fixed inset-0 bg-gray-50 flex-col items-center justify-center z-10 px-[25px]' : 'hidden'}`}>
                        <ul className='items-center justify-between gap-10 lg:flex'>
                            {menuLink.map(({ id, name, slug }) =>
                                <li
                                    onClick={() => scrollToSection(slug)}
                                    className='max-w-[150px] truncate overflow-hidden whitespace-nowrap block text-ellipsis  hover:border-b border-b-[#3C2A97] lg:hover:text-[#3C2A97] lg:py-1 py-3 cursor-pointer font-normal lg:text-md text-xl leading-6 text-[#52525B]'
                                    key={id}>{name}
                                </li>
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
