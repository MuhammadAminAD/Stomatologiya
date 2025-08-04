import { menuLink } from '@/constants/index.constants'
import React from 'react'

export default function SideBar() {
    return (
        <aside className='bg-[#3C2A97]'>
            <ul className='flex flex-col gap-y-2'>
                {menuLink.map(({ id, name }) =>
                    <li className='lg:hover:border-b  py-1 cursor-pointer font-normal text-md leading-6 text-white ' key={id}>{name}</li>
                )}
            </ul>
        </aside>
    )
}
