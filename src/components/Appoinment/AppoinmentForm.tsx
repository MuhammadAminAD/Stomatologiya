'use client'
import { styles } from "@/styles/index.style";
import { Calendar, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from 'react-i18next';

// Define types for form data
interface FormData {
    name: string;
    phone: string;
    date: string;
    time: string;
    services: string;
    message: string;
}

export default function AppoinmentForm() {
    const { t } = useTranslation();
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [time, setTime] = useState<string>('')
    const [services, setServices] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
    const [showTimePicker, setShowTimePicker] = useState<boolean>(false)
    const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear())
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const datePickerRef = useRef<HTMLDivElement>(null)
    const timePickerRef = useRef<HTMLDivElement>(null)

    // Telegram configuration
    const TELEGRAM_BOT_TOKEN = '8291042053:AAH8V3Td5bNOgn-ScXbZSPw5dChaCXIZ3aA';
    const TELEGRAM_CHAT_ID = '-4812734695';

    // Close date picker when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
                setShowDatePicker(false)
            }
            if (timePickerRef.current && !timePickerRef.current.contains(event.target as Node)) {
                setShowTimePicker(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const sendToTelegram = async (formData: FormData) => {
        const telegramMessage = `
🦷 *Новая запись на прием*

👤 *Имя:* ${formData.name}
📞 *Телефон:* ${formData.phone}
📅 *Дата:* ${formData.date}
⏰ *Время:* ${formData.time}
🏥 *Услуга:* ${formData.services}
💬 *Сообщение:* ${formData.message || 'Без дополнительного сообщения'}
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        // Basic validation without error messages
        if (!name.trim() || !phone.trim() || !date || !time || !services) {
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

        const finalPhone = "+998" + unformattedPhone;
        const formData: FormData = {
            name,
            phone: finalPhone,
            date,
            time,
            services,
            message,
        };

        try {
            await sendToTelegram(formData);
            setSubmitStatus('success');

            // Reset form after successful submission
            setTimeout(() => {
                setName('');
                setPhone('');
                setDate('');
                setTime('');
                setServices('');
                setMessage('');
                setSubmitStatus('idle');
            }, 3000);

        } catch {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }

        setIsSubmitting(false);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value.replace(/\D/g, "");
        if (input.length > 9) input = input.slice(0, 9);
        let formatted = "";
        if (input.length > 0) {
            formatted += "(" + input.substring(0, 2);
        }
        if (input.length >= 3) {
            formatted += ") " + input.substring(2, 5);
        }
        if (input.length >= 6) {
            formatted += "-" + input.substring(5, 7);
        }
        if (input.length >= 8) {
            formatted += "-" + input.substring(7, 9);
        }
        setPhone(formatted);
    };

    const getDaysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month: number, year: number) => {
        return new Date(year, month, 1).getDay();
    };

    const formatDate = (day: number, month: number, year: number) => {
        const formattedMonth = String(month + 1).padStart(2, '0');
        const formattedDay = String(day).padStart(2, '0');
        return `${year}-${formattedMonth}-${formattedDay}`;
    };

    const parseDate = (dateString: string) => {
        if (!dateString) return null;
        const [year, month, day] = dateString.split('-').map(Number);
        return { day, month: month - 1, year };
    };

    const isToday = (day: number, month: number, year: number) => {
        const today = new Date();
        return day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();
    };

    const isPastDate = (day: number, month: number, year: number) => {
        const today = new Date();
        const selectedDate = new Date(year, month, day);
        today.setHours(0, 0, 0, 0);
        return selectedDate < today;
    };

    const isSelectedDate = (day: number, month: number, year: number) => {
        const parsed = parseDate(date);
        if (!parsed) return false;
        return day === parsed.day && month === parsed.month && year === parsed.year;
    };

    const handleDateSelect = (day: number) => {
        if (isPastDate(day, currentMonth, currentYear)) return;

        const formattedDate = formatDate(day, currentMonth, currentYear);
        setDate(formattedDate);
        setShowDatePicker(false);

        // Reset time when date changes
        setTime('');
    };

    const navigateMonth = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
            } else {
                setCurrentMonth(currentMonth - 1);
            }
        } else {
            if (currentMonth === 11) {
                setCurrentMonth(0);
                setCurrentYear(currentYear + 1);
            } else {
                setCurrentMonth(currentMonth + 1);
            }
        }
    };

    const generateTimeSlots = () => {
        const slots = [];
        const now = new Date();
        const selectedDate = date ? new Date(date) : null;
        const isSelectedToday = selectedDate &&
            selectedDate.toDateString() === now.toDateString();

        // Generate time slots for 24 hours (every 30 minutes)
        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const timeSlot = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;

                // Check if this time slot is in the past for today
                let isPastTime = false;
                if (isSelectedToday) {
                    const slotTime = new Date();
                    slotTime.setHours(hour, minute, 0, 0);
                    isPastTime = slotTime <= now;
                }

                slots.push({
                    value: timeSlot,
                    label: timeSlot,
                    disabled: isPastTime
                });
            }
        }

        return slots;
    };

    const handleTimeSelect = (selectedTime: string) => {
        setTime(selectedTime);
        setShowTimePicker(false);
    };

    const renderTimePicker = () => {
        const timeSlots = generateTimeSlots();
        return (
            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50 max-w-[280px] max-h-[300px] overflow-y-auto">
                <h3 className="font-semibold text-gray-800 mb-3">{t('Select Time')}</h3>
                <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                        <button
                            key={slot.value}
                            type="button"
                            onClick={() => !slot.disabled && handleTimeSelect(slot.value)}
                            disabled={slot.disabled}
                            className={`
                                px-3 py-2 text-sm rounded-md transition-colors
                                ${slot.disabled
                                    ? 'text-gray-300 cursor-not-allowed bg-gray-50'
                                    : 'text-gray-700 hover:bg-blue-100 cursor-pointer border border-gray-200'
                                }
                                ${time === slot.value ? 'bg-[#3C2A97] text-white hover:bg-[#3C2A97] border-[#3C2A97]' : ''}
                            `}
                        >
                            {slot.label}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

        const monthNames = [
            t("January"), t("February"), t("March"), t("April"), t("May"), t("June"),
            t("July"), t("August"), t("September"), t("October"), t("November"), t("December")
        ];
        const dayNames = [t("Sun"), t("Mon"), t("Tue"), t("Wed"), t("Thu"), t("Fri"), t("Sat")];

        const days = [];

        // Empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const isPast = isPastDate(day, currentMonth, currentYear);
            const isSelected = isSelectedDate(day, currentMonth, currentYear);
            const isTodayDate = isToday(day, currentMonth, currentYear);

            days.push(
                <button
                    key={day}
                    type="button"
                    onClick={() => handleDateSelect(day)}
                    disabled={isPast}
                    className={`
                        w-8 h-8 text-sm rounded-full flex items-center justify-center transition-colors
                        ${isPast
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-blue-100 cursor-pointer'
                        }
                        ${isSelected ? 'bg-[#3C2A97] text-white hover:bg-[#3C2A97]' : ''}
                        ${isTodayDate && !isSelected ? 'bg-gray-100 font-semibold' : ''}
                    `}
                >
                    {day}
                </button>
            );
        }

        return (
            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50 min-w-[280px]">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <button
                        type="button"
                        onClick={() => navigateMonth('prev')}
                        className="p-1 hover:bg-gray-100 rounded"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <h3 className="font-semibold text-gray-800">
                        {monthNames[currentMonth]} {currentYear}
                    </h3>
                    <button
                        type="button"
                        onClick={() => navigateMonth('next')}
                        className="p-1 hover:bg-gray-100 rounded"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>

                {/* Day names */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {dayNames.map(day => (
                        <div key={day} className="text-xs font-medium text-gray-500 text-center p-1">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-1">
                    {days}
                </div>
            </div>
        );
    };

    const formatDisplayDate = (dateString: string) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    return (
        <form onSubmit={handleSubmit} action="" className="lg:mt-0 md:mt-[100px] mt-[50px]">
            {/* Success Message */}
            {submitStatus === 'success' && (
                <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                    <p className="font-semibold">{t('Appointment confirmed successfully!')}</p>
                </div>
            )}

            <div className="md:grid grid-cols-2 gap-[25px] items-center">
                <div className={`${styles.appoinmentFormContent}`}>
                    <label className={`${styles.appoinmentLabel}`} htmlFor="">{t('Name')}</label>
                    <input
                        className={`${styles.appoinmentInp}`}
                        type="text"
                        placeholder={t('Full name')}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isSubmitting}
                        required
                    />
                </div>

                <div className={`${styles.appoinmentFormContent}`}>
                    <label htmlFor="">{t('Phone')}</label>
                    <span className="absolute top-[45px] left-[16px]">+998</span>
                    <input
                        value={phone}
                        onChange={handlePhoneChange}
                        className={`${styles.appoinmentInp} pl-[66px]`}
                        type="text"
                        placeholder="(99) 999-99-99"
                        inputMode="numeric"
                        disabled={isSubmitting}
                        required
                    />
                </div>

                <div className={`${styles.appoinmentFormContent}`} ref={datePickerRef}>
                    <label htmlFor="">{t('Date')}</label>
                    <div className="relative">
                        <input
                            value={formatDisplayDate(date)}
                            readOnly
                            onClick={() => !isSubmitting && setShowDatePicker(!showDatePicker)}
                            className={`${styles.appoinmentInp} cursor-pointer ${isSubmitting ? 'opacity-50' : ''}`}
                            type="text"
                            placeholder="ДД/ММ/ГГГГ"
                            disabled={isSubmitting}
                            required
                        />
                        <Calendar
                            className="absolute top-[12px] right-[16px] w-5 h-5 text-gray-400 cursor-pointer"
                            onClick={() => !isSubmitting && setShowDatePicker(!showDatePicker)}
                        />
                        {showDatePicker && !isSubmitting && renderCalendar()}
                    </div>
                </div>

                <div className={`${styles.appoinmentFormContent}`} ref={timePickerRef}>
                    <label htmlFor="">{t('Time')}</label>
                    <div className="relative">
                        <input
                            value={time}
                            readOnly
                            onClick={() => date && !isSubmitting && setShowTimePicker(!showTimePicker)}
                            className={`${styles.appoinmentInp} cursor-pointer ${(!date || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''}`}
                            type="text"
                            placeholder={t('Select Time')}
                            disabled={!date || isSubmitting}
                            required
                        />
                        <Clock
                            className="absolute top-[12px] right-[16px] w-5 h-5 text-gray-400 cursor-pointer"
                            onClick={() => date && !isSubmitting && setShowTimePicker(!showTimePicker)}
                        />
                        {showTimePicker && !isSubmitting && renderTimePicker()}
                    </div>
                </div>

                <div className={`${styles.appoinmentFormContent} md:col-span-2`}>
                    <label htmlFor="services" className={`${styles.appoinmentLabel}`}>
                        {t('Service')}
                    </label>
                    <div className="relative">
                        <select
                            id="services"
                            value={services}
                            onChange={(e) => setServices(e.target.value)}
                            className={`${styles.appoinmentInp} appearance-none bg-transparent ${isSubmitting ? 'opacity-50' : ''}`}
                            disabled={isSubmitting}
                            required
                        >
                            <option value="">{t('Choose a service')}</option>
                            <option value="Лечение зубов">{t('Tooth treatment')}</option>
                            <option value="Удаление">{t('Extraction')}</option>
                            <option value="Брекеты">{t('Braces')}</option>
                            <option value="Имплантация">{t('Implantatsiya')}</option>
                            <option value="Протезирование">{t('Tish protezlari')}</option>
                            <option value="Виниры">{t('Vinerlar')}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className={`${styles.appoinmentFormContent} mt-[20px]`}>
                <label className={`${styles.appoinmentLabel}`} htmlFor="">{t('Message')}</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`py-[12px] px-[16px] border-1 border-[#52525B40] font-normal text-[16px] leading-[24px] text-[#52525B] rounded-[8px] resize-none lg:min-h-[120px] xl:min-h-[144px] outline-none w-full ${isSubmitting ? 'opacity-50' : ''}`}
                    placeholder={t('Any additional information')}
                    disabled={isSubmitting}
                    required
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-[16px] bg-[#3C2A97] rounded-[8px] cursor-pointer font-medium text-[18px] leading-[26px] text-[#FFFFFF] border-2 border-[#3C2A97] mt-[15px] xl:mt-[24px] hover:bg-transparent hover:text-black transition-all duration-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
            >
                {isSubmitting ? t('Sending...') : t('Confirm Appointment')}
            </button>
        </form>
    )
}