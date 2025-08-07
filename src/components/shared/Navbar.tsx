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
        // Close mobile menu after clicking a link
        setActiveBars(false);
    }

    function handleMenuToggle() {
        setActiveBars(prev => !prev);
    }

    return (
        <nav>
            <div className={`w-full fixed top-0 left-[50%] -translate-x-1/2 bg-gray-100 shadow-2xl z-50`}>
                <div className={`flex justify-between items-center py-5 xl:px-[110px] md:px-[50px] px-[20px]`}>
                    <div className='w-full flex justify-between items-center'>
                        <Logo />
                        <button 
                            className='lg:hidden flex z-50 relative' 
                            onClick={handleMenuToggle}
                        >
                            {activeBars ? <XIcon className='w-8 h-8' /> : <BarsIcon className="w-8 h-8 text-gray-700" />}
                        </button>
                    </div>

                    {/* Desktop Menu - Always visible on lg+ screens */}
                    <div className='lg:flex hidden items-center gap-15'>
                        <ul className='items-center justify-between gap-10 flex'>
                            {menuLink.map(({ id, name, slug }) =>
                                <li
                                    onClick={() => scrollToSection(slug)}
                                    className='max-w-[150px] truncate overflow-hidden whitespace-nowrap block text-ellipsis hover:border-b border-b-[#3C2A97] hover:text-[#3C2A97] py-1 cursor-pointer font-normal text-md leading-6 text-[#52525B] transition-colors duration-200'
                                    key={id}
                                >
                                    {name}
                                </li>
                            )}
                        </ul>

                        <button className='flex py-4 px-10 rounded-lg bg-[#3C2A97] text-white font-bold cursor-pointer border-2 border-[#3C2A97] items-center gap-2 hover:bg-transparent hover:text-black transition-all duration-500'>
                            Appointment
                        </button>
                    </div>

                    {/* Mobile Menu - Only visible when activeBars is true */}
                    <div className={`lg:hidden ${activeBars ? 'flex' : 'hidden'} w-full min-h-screen fixed inset-0 bg-gray-50 flex-col items-center justify-center z-40 px-[25px]`}>
                        <ul className='flex flex-col items-center justify-center gap-8 mb-8'>
                            {menuLink.map(({ id, name, slug }) =>
                                <li
                                    onClick={() => scrollToSection(slug)}
                                    className='text-center hover:text-[#3C2A97] py-3 cursor-pointer font-normal text-xl leading-6 text-[#52525B] transition-colors duration-200 border-b border-transparent hover:border-[#3C2A97]'
                                    key={id}
                                >
                                    {name}
                                </li>
                            )}
                        </ul>

                        <button 
                            className='w-full max-w-xs justify-center flex py-4 px-10 rounded-lg bg-[#3C2A97] text-white font-bold cursor-pointer border-2 border-[#3C2A97] items-center gap-2 hover:bg-transparent hover:text-black transition-all duration-500'
                            onClick={() => setActiveBars(false)}
                        >
                            Appointment
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}