'use client'
import { styles } from "@/styles/index.style";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

// Define types for form data
interface ContactFormData {
    name: string;
    phone: string;
}

export default function Contact() {
    const { t } = useTranslation();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Telegram configuration
    const TELEGRAM_BOT_TOKEN = '8291042053:AAH8V3Td5bNOgn-ScXbZSPw5dChaCXIZ3aA';
    const TELEGRAM_CHAT_ID = '-4812734695';

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value.replace(/\D/g, "");
        if (input.length > 9) input = input.slice(0, 9);
        let formatted = "";
        if (input.length > 0) formatted += "(" + input.substring(0, 2);
        if (input.length >= 3) formatted += ") " + input.substring(2, 5);
        if (input.length >= 6) formatted += "-" + input.substring(5, 7);
        if (input.length >= 8) formatted += "-" + input.substring(7, 9);
        setPhone(formatted);
    };

    const sendToTelegram = async (formData: ContactFormData) => {
        const telegramMessage = `
🦷 *Новая заявка на контакт*

👤 *Имя:* ${formData.name}
📞 *Телефон:* ${formData.phone}
        `.trim();

        try {
            const response = await fetch(
                `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: telegramMessage,
                        parse_mode: 'Markdown',
                    }),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Telegram API error:', errorData);
                throw new Error('Failed to send message to Telegram');
            }

            return await response.json();
        } catch (error) {
            console.error('Error sending to Telegram:', error);
            throw error;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        // Basic validation without error messages
        if (!name.trim() || !phone.trim()) {
            setSubmitStatus('error');
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus('idle'), 5000);
            return;
        }

        const unformattedPhone = phone.replace(/\D/g, "");
        if (unformattedPhone.length !== 9) {
            setSubmitStatus('error');
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus('idle'), 5000);
            return;
        }

        const fullPhone = "+998" + unformattedPhone;

        try {
            await sendToTelegram({
                name,
                phone: fullPhone,
            });

            setSubmitStatus('success');

            // Reset form after successful submission
            setTimeout(() => {
                setName("");
                setPhone("");
                setSubmitStatus('idle');
            }, 3000);

        } catch {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }

        setIsSubmitting(false);
    };

    return (
        <div className="w-full bg-[#F8FAFC] py-10 md:py-15 lg:py-[96px] relative" id="contact-page">
            <div className={styles.Container}>
                <div className={`rounded-[20px] bg-[#3C2A97] py-5 md:py-10 lg:py-[82px] flex flex-col items-center text-center`}>
                    <h2 className="font-semibold text-[20px] md:text-[42px] text-[#fff] mb-5 md:mb-10 lg:mb-[50px]">
                        {t('MAKE AN')} {t('APPOINTMENT')}
                    </h2>
                    {/* Success Message */}
                    {submitStatus === 'success' && (
                        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                            <p className="font-semibold">{t('Appointment confirmed successfully!')}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="md:flex gap-[24px] items-center px-4 lg:px-15 w-full flex-col md:flex-row">
                        <div className="w-full relative">
                            <input
                                className={`${styles.contactInp} md:mb-0 mb-[20px] ${isSubmitting ? 'opacity-50' : ''}`}
                                type="text"
                                placeholder="Полное имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={isSubmitting}
                                required
                            />
                        </div>
                        <div className="w-full relative">
                            <span className="absolute top-[18px] left-[16px] text-[#9CA3AF]">+998</span>
                            <input
                                className={`${styles.contactInp} md:mb-0 mb-[30px] pl-[66px] ${isSubmitting ? 'opacity-50' : ''}`}
                                type="text"
                                placeholder="(99) 999-99-99"
                                value={phone}
                                onChange={handlePhoneChange}
                                inputMode="numeric"
                                disabled={isSubmitting}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`py-[16px] w-full bg-[#FFFFFF] rounded-[10px] cursor-pointer font-normal text-[17px] text-[#18181B] border-2 border-white hover:bg-transparent hover:text-white transition-all duration-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            {isSubmitting ? t('Sending...') : t('Confirm Appointment')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}