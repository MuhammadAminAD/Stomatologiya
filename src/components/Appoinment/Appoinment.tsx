'use client'

import { styles } from "@/styles/index.style";
import AppoinmentImg from "@/assets/images/AppoinmentImg.png";
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
      <div className="lg:flex justify-between items-center mt-[72px]">
        <div className="relative after:hidden xl:after:block after:content-[''] after:w-[380px] after:h-[588px] after:bg-[#3C2A97] after:absolute after:top-0 after:left-0 after:rounded-[32px]">
          <Image
            className="max-lg:w-full max-lg:h-full block relative z-2 xl:top-[50px] xl:left-[50px]"
            src={AppoinmentImg}
            alt="AppoinmentImg"
          />
        </div>
        <AppoinmentForm />
      </div>
    </div>
  );
}