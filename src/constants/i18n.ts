// src/constants/i18n.ts
"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en.json';
import ru from './ru.json';
import uz from './uz.json';

// Function to get saved language or default
const getInitialLanguage = (): string => {
  if (typeof window !== 'undefined') {
    try {
      const savedLanguage = localStorage.getItem('selectedLanguage');
      if (savedLanguage && ['en', 'ru', 'uz'].includes(savedLanguage)) {
        return savedLanguage;
      }
    } catch (error) {
      console.warn('Could not access localStorage:', error);
    }
  }
  return 'uz'; // Default language
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      uz: { translation: uz },
    },
    lng: getInitialLanguage(),
    fallbackLng: "uz",
    interpolation: { 
      escapeValue: false 
    },
    // Add detection options to prevent conflicts
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    // Ensure proper initialization
    react: {
      useSuspense: false // Prevent SSR issues
    }
  });

export default i18n;