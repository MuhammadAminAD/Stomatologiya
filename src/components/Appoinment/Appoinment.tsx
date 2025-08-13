'use client'

import { styles } from "@/styles/index.style";
import AppoinmentImg from "@/assets/images/AppoinmentImg.jpg";
import Image from "next/image";
import AppoinmentForm from "./AppoinmentForm";
import { useTranslation } from 'react-i18next';

export default function Appoinment() {
  const { t } = useTranslation();

  return (
    <div
      id="appointment-page"
      className={`${styles.Container} lg:py-[150px] pt-[80px]`}
    >
      <div className="lg:flex justify-between items-center">
        <h2 className={`${styles.title}`}>
          {t('MAKE AN')} <span className="text-[#3C2A97]">{t('APPOINTMENT')}</span>
        </h2>
        <h3 className={`${styles.subTitle}`}>
            <span className={`${styles.subTitles}`}>{t('Doctor')}</span>
        </h3>
      </div>
      
      {/* Reduced gaps: from 40px/60px to 20px/30px */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-[20px] xl:gap-[30px] lg:items-start mt-[72px]">
        {/* Image section with improved spacing */}
        <div className="relative mb-[40px] lg:mb-0">
          <div className="relative after:hidden xl:after:block after:content-[''] after:w-[380px] after:h-[588px] after:bg-[#3C2A97] after:absolute after:top-0 after:left-0 after:rounded-[32px]">
            <Image
              className="w-full max-w-[450px] h-[400px] sm:h-[450px] lg:w-[480px] lg:h-[480px] xl:w-[530px] xl:h-[530px] 2xl:h-[580px] object-cover block relative z-2 xl:top-[50px] xl:left-[50px] rounded-[20px] mx-auto lg:mx-0"
              src={AppoinmentImg}
              alt="AppoinmentImg"
            />
          </div>
        </div>
        
        {/* Form section */}
        <div className="w-full">
          <AppoinmentForm />
        </div>
      </div>
    </div>
  );
}