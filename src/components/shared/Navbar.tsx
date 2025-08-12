'use client'

import React, { useEffect, useState } from 'react'
import Logo from '../../assets/icons/Logo'
import BarsIcon from '../../assets/icons/BarsIcon'
import XIcon from '../../assets/icons/XIcon'
import { menuLink } from '@/constants/index.constants'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const [activeBars, setActiveBars] = useState<boolean>(false)
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState<boolean>(false)
  const { i18n, t } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)

  // Initialize language from localStorage on mount
  useEffect(() => {
    const initializeLanguage = () => {
      try {
        const savedLanguage = localStorage.getItem('selectedLanguage')
        if (savedLanguage && ['en', 'ru', 'uz'].includes(savedLanguage)) {
          if (i18n.language !== savedLanguage) {
            i18n.changeLanguage(savedLanguage)
          }
          setSelectedLanguage(savedLanguage)
        } else {
          // Set default language if none saved
          setSelectedLanguage(i18n.language)
        }
      } catch (error) {
        console.warn('localStorage not available:', error)
        setSelectedLanguage(i18n.language)
      }
    }

    initializeLanguage()
  }, [i18n]) // Added missing dependency

  // Handle body overflow when mobile menu is active
  useEffect(() => {
    if (activeBars) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [activeBars])

  // Handle click outside for language dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownOpen && !(event.target as Element).closest('.language-dropdown')) {
        setLanguageDropdownOpen(false)
      }
    }

    if (languageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [languageDropdownOpen])

  // Listen to i18n language changes
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setSelectedLanguage(lng)
    }

    i18n.on('languageChanged', handleLanguageChanged)

    return () => {
      i18n.off('languageChanged', handleLanguageChanged)
    }
  }, [i18n])

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
    setLanguageDropdownOpen(false) // Close language dropdown when toggling menu
  }

  function handleAppointmentClick() {
    scrollToSection('appointment-page')
    setActiveBars(false)
  }

  function handleLogoClick() {
    scrollToSection('main-page')
    setActiveBars(false)
  }

  function changeLanguage(lang: string) {
    if (['en', 'ru', 'uz'].includes(lang)) {
      i18n.changeLanguage(lang)
      setSelectedLanguage(lang)
      
      try {
        localStorage.setItem('selectedLanguage', lang)
      } catch (error) {
        console.warn('Could not save language to localStorage:', error)
      }
      
      setLanguageDropdownOpen(false)
    }
  }

  const languageOptions = [
    { value: 'en', label: 'English', shortLabel: 'EN' },
    { value: 'ru', label: 'Русский', shortLabel: 'RU' },
    { value: 'uz', label: 'O\'zbekcha', shortLabel: 'UZ' },
  ]

  const currentLanguage = languageOptions.find(lang => lang.value === selectedLanguage)

  return (
    <nav className="relative" id='main-page'>
      <div className="w-full fixed top-0 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-gray-200">
        <div className="flex justify-between items-center py-2 xl:px-[60px] lg:px-[30px] md:px-[20px] px-[15px] max-w-[1440px] mx-auto">
          {/* Logo - Left */}
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <Logo />
          </div>

          {/* Navigation Items - Center (Desktop only) */}
          <div className="lg:flex hidden items-center justify-center flex-1">
            {/* Balanced spacing - increased from gap-6 to gap-8 */}
            <ul className="items-center justify-center gap-8 flex">
              {menuLink.map(({ id, name, slug }) => (
                <li
                  onClick={() => scrollToSection(slug)}
                  className="relative group max-w-[200px] truncate overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer font-semibold text-lg leading-7 text-gray-600 hover:text-[#3C2A97] transition-all duration-300 px-2 py-2"
                  key={id}
                >
                  {t(name)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3C2A97] group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Language & Appointment (Desktop) */}
          <div className="lg:flex hidden items-center gap-4">
            {/* Enhanced Language Dropdown (Desktop) */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-white to-gray-50 border-2 border-gray-200 hover:border-[#3C2A97] hover:from-[#3C2A97]/5 hover:to-[#3C2A97]/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3C2A97] focus:ring-opacity-30 transition-all duration-300 min-w-[70px] backdrop-blur-sm"
                aria-label="Change language"
              >
                {/* Globe Icon */}
                <svg className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#3C2A97] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9" />
                </svg>
                <span className="font-semibold text-gray-700 group-hover:text-[#3C2A97] text-sm transition-colors duration-300">
                  {currentLanguage?.shortLabel || 'UZ'}
                </span>
                <svg
                  className={`w-3 h-3 text-gray-500 group-hover:text-[#3C2A97] transition-all duration-300 ${languageDropdownOpen ? 'rotate-180 scale-110' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {languageDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/50 py-1.5 z-50 animate-in slide-in-from-top-3 fade-in duration-300 transform origin-top">
                  <div className="px-1">
                    {languageOptions.map((option, index) => (
                      <button
                        key={option.value}
                        onClick={() => changeLanguage(option.value)}
                        className={`group w-full px-2.5 py-2 text-left rounded-lg transition-all duration-200 flex items-center gap-2.5 mb-0.5 last:mb-0 ${
                          selectedLanguage === option.value 
                            ? 'bg-gradient-to-r from-[#3C2A97]/10 to-[#3C2A97]/5 text-[#3C2A97] shadow-sm border border-[#3C2A97]/20' 
                            : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50 hover:text-[#3C2A97] hover:shadow-sm'
                        }`}
                        style={{
                          animationDelay: `${index * 50}ms`
                        }}
                      >
                        {/* Language Flag Placeholder */}
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                          selectedLanguage === option.value 
                            ? 'bg-[#3C2A97] text-white shadow-md' 
                            : 'bg-gray-200 text-gray-600 group-hover:bg-[#3C2A97]/20 group-hover:text-[#3C2A97]'
                        }`}>
                          {option.shortLabel.charAt(0)}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-sm font-semibold block">{option.shortLabel}</span>
                              <span className="text-xs opacity-70 block">{option.label}</span>
                            </div>
                            {selectedLanguage === option.value && (
                              <div className="flex items-center justify-center w-4 h-4">
                                <svg className="w-3 h-3 text-[#3C2A97] animate-in zoom-in duration-200" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleAppointmentClick}
              className="flex py-2 px-6 rounded-lg bg-[#3C2A97] text-white font-semibold cursor-pointer border-2 border-[#3C2A97] items-center gap-2 hover:bg-transparent hover:text-[#3C2A97] hover:shadow-lg transition-all duration-300 text-sm whitespace-nowrap"
            >
              {t('Appointment')}
            </button>
          </div>

          {/* Mobile Right Section - Language & Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Enhanced Mobile Language Dropdown with increased spacing */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="group flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-lg bg-gradient-to-r from-white to-gray-50 border-2 border-gray-200 hover:border-[#3C2A97] hover:from-[#3C2A97]/5 hover:to-[#3C2A97]/10 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#3C2A97] focus:ring-opacity-30 transition-all duration-300 backdrop-blur-sm min-w-[60px] h-10"
                aria-label="Change language"
              >
                {/* Mini Globe Icon */}
                <svg className="w-3.5 h-3.5 flex-shrink-0 text-gray-600 group-hover:text-[#3C2A97] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9" />
                </svg>
                <span className="font-semibold text-gray-700 group-hover:text-[#3C2A97] text-xs transition-colors duration-300 flex-shrink-0">
                  {currentLanguage?.shortLabel || 'UZ'}
                </span>
                <svg
                  className={`w-2.5 h-2.5 flex-shrink-0 text-gray-500 group-hover:text-[#3C2A97] transition-all duration-300 ${languageDropdownOpen ? 'rotate-180 scale-110' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {languageDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-44 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/50 py-2 z-50 animate-in slide-in-from-top-3 fade-in duration-300 transform origin-top">
                  <div className="px-1.5">
                    {languageOptions.map((option, index) => (
                      <button
                        key={option.value}
                        onClick={() => changeLanguage(option.value)}
                        className={`group w-full px-3 py-2.5 text-left rounded-lg transition-all duration-200 flex items-center gap-3 mb-1 last:mb-0 ${
                          selectedLanguage === option.value 
                            ? 'bg-gradient-to-r from-[#3C2A97]/10 to-[#3C2A97]/5 text-[#3C2A97] shadow-sm border border-[#3C2A97]/20' 
                            : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/50 hover:text-[#3C2A97] hover:shadow-sm'
                        }`}
                        style={{
                          animationDelay: `${index * 40}ms`
                        }}
                      >
                        {/* Language Flag Placeholder */}
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                          selectedLanguage === option.value 
                            ? 'bg-[#3C2A97] text-white shadow-sm' 
                            : 'bg-gray-200 text-gray-600 group-hover:bg-[#3C2A97]/20 group-hover:text-[#3C2A97]'
                        }`}>
                          {option.shortLabel.charAt(0)}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-sm font-semibold block">{option.shortLabel}</span>
                              <span className="text-xs opacity-70 block">{option.label}</span>
                            </div>
                            {selectedLanguage === option.value && (
                              <div className="flex items-center justify-center w-4 h-4">
                                <svg className="w-3 h-3 text-[#3C2A97] animate-in zoom-in duration-200" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="flex z-50 relative items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 w-10 h-10"
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
            >
              {activeBars ? 
                <XIcon className="w-5 h-5 text-gray-700 flex-shrink-0" /> : 
                <BarsIcon className="w-5 h-5 text-gray-700 flex-shrink-0" />
              }
            </button>
          </div>

          {/* Mobile Menu (Simplified - no language selector inside) */}
          <div className={`lg:hidden ${activeBars ? 'flex' : 'hidden'} w-full min-h-screen fixed inset-0 bg-white/95 backdrop-blur-sm flex-col z-40`}>
            <div className="flex flex-col items-center justify-center flex-1 px-4 py-16">
              {/* Increased gap from gap-4 to gap-6 for mobile menu */}
              <ul className="flex flex-col items-center justify-center gap-6 mb-8 w-full">
                {menuLink.map(({ id, name, slug }) => (
                  <li
                    onClick={() => scrollToSection(slug)}
                    className="relative group text-center cursor-pointer font-semibold text-xl leading-7 text-gray-600 hover:text-[#3C2A97] transition-all duration-300 py-4 w-full max-w-xs"
                    key={id}
                  >
                    {t(name)}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#3C2A97] group-hover:w-16 transition-all duration-300"></span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full max-w-xs justify-center flex py-3 px-6 rounded-lg bg-[#3C2A97] text-white font-semibold cursor-pointer border-2 border-[#3C2A97] items-center gap-2 hover:bg-transparent hover:text-[#3C2A97] hover:shadow-lg transition-all duration-300 text-base"
                onClick={handleAppointmentClick}
              >
                {t('Appointment')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}