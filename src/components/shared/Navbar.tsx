import React from 'react'
import Logo from '../Icons/Logo'
import { menuLink } from '@/constants/index.constants'
import { styles } from '@/styles/index.style'
import BarsIcon from '../Icons/BarsIcon'

export default function Navbar() {
    return (
        <nav>
            <div className={styles.Container}>
                <div className={`flex items-center justify-between border-b border-[#BCBCBC] py-6`}>
                    <div>
                        <Logo />
                    </div>

                    <div className='flex items-center gap-10'>
                        <ul className='items-center justify-between gap-10 hidden lg:flex'>
                            {menuLink.map(({ id, name }) =>
                                <li className='lg:hover:border-b border-b-[#3C2A97] lg:hover:text-[#3C2A97] py-1 cursor-pointer font-normal text-md leading-6 text-[#52525B] ' key={id}>{name}</li>
                            )}
                        </ul>
                            

                        <button className='py-4 px-10 rounded-lg bg-[#3C2A97] text-white font-bold cursor-pointer flex items-center gap-2'>
                            Appoinment
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
