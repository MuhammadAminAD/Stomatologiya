'use client'

import { menuLink } from "@/constants/index.constants";
import { styles } from "@/styles/index.style";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    function scrollToSection(id: string, offset = -100) {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }

    return (
        <footer className='bg-[#3C2A97] py-8 md:py-10 lg:py-12'>
            <div className={`${styles.Container}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {/* Brand Section */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link className="font-bold text-2xl md:text-2xl text-white block mb-4 hover:opacity-80 transition-opacity" href={'/'}>
                            Ikromovich Dental Clinic
                        </Link>
                        <p className="text-base text-white/80 leading-relaxed max-w-[280px]">
                            {t('banner')}
                        </p>
                    </div>

                    {/* Welcome Section */}
                    <div className="lg:border-l lg:border-white/15 lg:pl-6">
                        <h3 className="text-sm font-medium text-white/70 mb-3 uppercase tracking-wide">
                            {t('footer.welcoming')}
                        </h3>
                        <h4 className="font-semibold text-xl md:text-2xl text-white leading-tight mb-4">
                            {t('footer.visitClinic')}
                        </h4>
                        <div className="text-base text-white/80 space-y-1">
                            <p>{t('footer.schedule')}</p>
                            <p className="font-medium">{t('footer.hours')}</p>
                        </div>
                    </div>

                    {/* Important Links Section */}
                    <div className="lg:border-l lg:border-white/15 lg:pl-6">
                        <h3 className="text-sm font-medium text-white/70 mb-4 uppercase tracking-wide">
                            {t('footer.importantLinks')}
                        </h3>
                        <nav>
                            <ul className="space-y-3">
                                {menuLink.map(({ id, name, slug }) => (
                                    <li key={id}>
                                        <button
                                            onClick={() => scrollToSection(slug)}
                                            className="text-base text-white/80 hover:text-white hover:underline transition-all duration-200 text-left block"
                                        >
                                            {t(name)}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Contact Section */}
                    <div className="lg:border-l lg:border-white/15 lg:pl-6">
                        <h3 className="text-sm font-medium text-white/70 mb-4 uppercase tracking-wide">
                            {t('footer.sayHello')}
                        </h3>

                        <Link
                            href={'tel:+998901095257'}
                            className="text-base text-white hover:text-white/80 hover:underline transition-colors mb-5 block"
                        >
                            +998 90 109 52 57
                        </Link>

                        <div>
                            <h4 className="text-sm font-medium text-white/70 mb-2 uppercase tracking-wide">
                                {t('footer.address')}
                            </h4>
                            <address className="text-base text-white/80 leading-relaxed not-italic">
                                <a
                                    href={`https://yandex.uz/maps/-/CHtAr43T`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors underline"
                                >
                                    {t('footer.fullAddress')}
                                </a>
                            </address>
                        </div>
                    </div>
                </div>

                {/* Minimal Bottom Section */}
                <div className="mt-10 pt-5 border-t border-white/10 text-center">
                    <p className="text-sm text-white/50">© 2025 Ikromovich Dental Clinic.</p>
                </div>
            </div>
        </footer>
    )
}