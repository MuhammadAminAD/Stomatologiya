'use client'

import React, { useEffect, useState } from 'react'
import Logo from '../../assets/icons/Logo'
import BarsIcon from '../../assets/icons/BarsIcon'
import XIcon from '../../assets/icons/XIcon'
import { menuLink } from '@/constants/index.constants'
import { styles } from '@/styles/index.style'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const [activeBars, setActiveBars] = useState<boolean>(false)
  const { i18n, t } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage && ['en', 'ru', 'uz'].includes(savedLanguage)) {
      i18n.changeLanguage(savedLanguage)
      setSelectedLanguage(savedLanguage)
    }

    if (activeBars) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [activeBars, i18n])

  function scrollToSection(id: string, offset = -100) {
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + offset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    setActiveBars(false)
  }

  function handleMenuToggle() {
    setActiveBars(prev => !prev)
  }

  function handleAppointmentClick() {
    scrollToSection('appointment-page')
  }

  function changeLanguage(lang: string) {
    if (['en', 'ru', 'uz'].includes(lang)) {
      i18n.changeLanguage(lang)
      setSelectedLanguage(lang)
      localStorage.setItem('selectedLanguage', lang)
    }
  }

  const languageOptions = [
    { value: 'en', label: 'EN' },
    { value: 'ru', label: 'RU' },
    { value: 'uz', label: 'UZ' },
  ]

  return (
    <nav>
      <div className={`w-full fixed top-0 left-[50%] -translate-x-1/2 bg-gray-100 shadow-lg z-50`}>
        <div className={`flex justify-between items-center py-3 xl:px-[110px] md:px-[50px] px-[20px]`}>
          <div className='w-full flex justify-between items-center'>
            <Logo />
            <button
              className='lg:hidden flex z-50 relative p-1'
              onClick={handleMenuToggle}
            >
              {activeBars ? <XIcon className='w-6 h-6' /> : <BarsIcon className="w-6 h-6 text-gray-700" />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className='lg:flex hidden items-center gap-8'>
            <ul className='items-center justify-between gap-8 flex'>
              {menuLink.map(({ id, name, slug }) => (
                <li
                  onClick={() => scrollToSection(slug)}
                  className='max-w-[180px] truncate overflow-hidden whitespace-nowrap block text-ellipsis hover:border-b border-b-[#3C2A97] hover:text-[#3C2A97] py-2 cursor-pointer font-medium text-base leading-6 text-[#52525B] transition-colors duration-200'
                  key={id}
                >
                  {t(name)}
                </li>
              ))}
            </ul>

            {/* Language Switcher (Desktop) */}
            <div className="relative">
              <select
                value={selectedLanguage}
                onChange={(e) => changeLanguage(e.target.value)}
                className="appearance-none w-[100px] px-3 py-1 rounded border border-gray-400 text-gray-700 bg-transparent hover:border-[#3C2A97] focus:outline-none focus:ring-2 focus:ring-[#3C2A97] cursor-pointer"
              >
                {languageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                ▼
              </div>
            </div>

            <button
              onClick={handleAppointmentClick}
              className='flex py-3 px-7 rounded-lg bg-[#3C2A97] text-white font-semibold cursor-pointer border-2 border-[#3C2A97] items-center gap-2 hover:bg-transparent hover:text-black transition-all duration-300 text-base'
            >
              {t('Appointment')}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden ${activeBars ? 'flex' : 'hidden'} w-full min-h-screen fixed inset-0 bg-gray-50 flex-col items-center justify-center z-40 px-[25px]`}>
            <ul className='flex flex-col items-center justify-center gap-8 mb-10'>
              {menuLink.map(({ id, name, slug }) => (
                <li
                  onClick={() => scrollToSection(slug)}
                  className='text-center hover:text-[#3C2A97] py-3 cursor-pointer font-medium text-xl leading-7 text-[#52525B] transition-colors duration-200 border-b border-transparent hover:border-[#3C2A97]'
                  key={id}
                >
                  {t(name)}
                </li>
              ))}
            </ul>

            {/* Language Switcher (Mobile) */}
            <div className="w-full max-w-xs mb-6">
              <select
                value={selectedLanguage}
                onChange={(e) => changeLanguage(e.target.value)}
                className="w-full px-4 py-2 rounded border border-gray-400 text-gray-700 bg-transparent hover:border-[#3C2A97] focus:outline-none focus:ring-2 focus:ring-[#3C2A97] cursor-pointer appearance-none"
              >
                {languageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                ▼
              </div>
            </div>

            <button
              className='w-full max-w-xs justify-center flex py-4 px-8 rounded-lg bg-[#3C2A97] text-white font-semibold cursor-pointer border-2 border-[#3C2A97] items-center gap-2 hover:bg-transparent hover:text-black transition-all duration-300 text-lg'
              onClick={handleAppointmentClick}
            >
              {t('Appointment')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}