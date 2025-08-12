import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import "../constants/i18n";
import I18nProvider from "@/components/I18nProvider";
import clinicLogo from "../assets/images/logo.png";
import Script from "next/script";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ikromovich Dental Clinic Tashkent | Professional Dentistry Services",
    template: "%s | Ikromovich Dental Clinic"
  },
  description: "Modern dental care in Tashkent with advanced laser technology, pain-free treatments, and expert care. From routine check-ups to cosmetic dentistry, implants, and dental prosthetics. Your smile is safe in our hands. | Современная стоматологическая помощь в Ташкенте с передовыми лазерными технологиями, безболезненным лечением и экспертным уходом. От профилактических осмотров до косметической стоматологии, имплантов и зубных протезов. | Toshkentda zamonaviy lazer texnologiyasi, og'riqsiz davolash va mutaxassis g'amxo'rlik bilan zamonaviy stomatologik yordam. Muntazam tekshiruvlardan tortib kosmetik stomatologiya, implantlar va tish protezlarigacha.",
  keywords: [
    "dental clinic Tashkent",
    "Ikromovich dentist",
    "professional dentistry",
    "laser dental technology",
    "pain-free dental treatment",
    "dental implants Tashkent",
    "cosmetic dentistry",
    "dental prosthetics",
    "veneers Tashkent",
    "braces orthodontics",
    "tooth extraction",
    "digital dentistry",
    "modern dental equipment",
    "family dental care",
    "dental check-up",
    "стоматология Ташкент",
    "стоматологическая клиника",
    "имплантация зубов",
    "виниры",
    "брекеты",
    "Икромович стоматолог",
    "профессиональная стоматология",
    "лазерная стоматология",
    "безболезненное лечение зубов",
    "косметическая стоматология",
    "зубные протезы",
    "удаление зубов",
    "цифровая стоматология",
    "семейная стоматология",
    "tish shifokori Toshkent",
    "stomatologiya klinikasi",
    "implantatsiya",
    "vinerlar",
    "Ikromovich tish shifokori",
    "professional stomatologiya",
    "lazer tish texnologiyasi",
    "og'riqsiz tish davolash",
    "kosmetik stomatologiya",
    "tish protezlari",
    "tish chiqarish",
    "raqamli stomatologiya",
    "oilaviy stomatologiya"
  ].join(", "),
  icons: {
    icon: [
      { url: clinicLogo.src, sizes: "32x32", type: "image/png" },
      { url: clinicLogo.src, sizes: "16x16", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href={clinicLogo.src} />
        <link rel="shortcut icon" type="image/png" href={clinicLogo.src} />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Yandex.Metrika noscript fallback */}
        <noscript>
          <div>
            <img 
              src="https://mc.yandex.ru/watch/103707478" 
              style={{ position: 'absolute', left: '-9999px' }} 
              alt="" 
            />
          </div>
        </noscript>
      </head>
      <body className={`${nunito.variable} antialiased`}>
        {/* Yandex.Metrika counter */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103707478', 'ym');
              ym(103707478, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            `
          }}
        />
        
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}