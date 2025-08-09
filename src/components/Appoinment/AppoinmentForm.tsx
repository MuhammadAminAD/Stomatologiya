'use client'

import { styles } from "@/styles/index.style";
import { Calendar, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function AppoinmentForm() {
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
    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        services: '',
        message: '',
    })

    const datePickerRef = useRef<HTMLDivElement>(null)
    const timePickerRef = useRef<HTMLDivElement>(null)

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let valid = true;
        const newErrors = {
            name: '',
            phone: '',
            date: '',
            time: '',
            services: '',
            message: '',
        };

        if (!name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        const unformattedPhone = phone.replace(/\D/g, "");
        if (unformattedPhone.length !== 9) {
            newErrors.phone = 'Phone must be in format 99-999-99-99';
            valid = false;
        }

        if (!date) {
            newErrors.date = 'Date is required';
            valid = false;
        }

        if (!time) {
            newErrors.time = 'Time is required';
            valid = false;
        }

        if (!services) {
            newErrors.services = 'Select a service';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            const finalPhone = "+998" + unformattedPhone;
            console.log('Form submitted', {
                name,
                phone: finalPhone,
                date,
                time,
                services,
                message,
            });
        }
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

        // Generate time slots from 9:00 AM to 10:00 PM (every 30 minutes)
        for (let hour = 9; hour <= 22; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                if (hour === 22 && minute > 0) break; // Stop at 10:00 PM
                
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
                <h3 className="font-semibold text-gray-800 mb-3">Select Time</h3>
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
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
            <div className="md:grid grid-cols-2 gap-[25px] items-center">
                <div className={`${styles.appoinmentFormContent}`}>
                    <label className={`${styles.appoinmentLabel}`} htmlFor="">Name</label>
                    <input
                        className={`${styles.appoinmentInp}`}
                        type="text"
                        placeholder="Full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className={`${styles.error_message}`}>{errors.name}</p>}
                </div>

                <div className={`${styles.appoinmentFormContent}`}>
                    <label htmlFor="">Phone</label>
                    <span className="absolute top-[45px] left-[16px]">+998</span>
                    <input
                        value={phone}
                        onChange={handlePhoneChange}
                        className={`${styles.appoinmentInp} pl-[66px]`}
                        type="text"
                        placeholder="(99) 999-99-99"
                        inputMode="numeric"
                    />

                    {errors.phone && (
                        <p className={`${styles.error_message}`}>
                            {errors.phone}
                        </p>
                    )}
                </div>

                <div className={`${styles.appoinmentFormContent}`} ref={datePickerRef}>
                    <label htmlFor="">Date</label>
                    <div className="relative">
                        <input
                            value={formatDisplayDate(date)}
                            readOnly
                            onClick={() => setShowDatePicker(!showDatePicker)}
                            className={`${styles.appoinmentInp} cursor-pointer`}
                            type="text"
                            placeholder="DD/MM/YYYY"
                        />
                        <Calendar 
                            className="absolute top-[12px] right-[16px] w-5 h-5 text-gray-400 cursor-pointer"
                            onClick={() => setShowDatePicker(!showDatePicker)}
                        />
                        {showDatePicker && renderCalendar()}
                    </div>
                    {errors.date && <p className={`${styles.error_message}`}>{errors.date}</p>}
                </div>

                <div className={`${styles.appoinmentFormContent}`} ref={timePickerRef}>
                    <label htmlFor="">Time</label>
                    <div className="relative">
                        <input
                            value={time}
                            readOnly
                            onClick={() => date && setShowTimePicker(!showTimePicker)}
                            className={`${styles.appoinmentInp} cursor-pointer ${!date ? 'opacity-50 cursor-not-allowed' : ''}`}
                            type="text"
                            placeholder="Select time"
                            disabled={!date}
                        />
                        <Clock 
                            className="absolute top-[12px] right-[16px] w-5 h-5 text-gray-400 cursor-pointer"
                            onClick={() => date && setShowTimePicker(!showTimePicker)}
                        />
                        {showTimePicker && renderTimePicker()}
                    </div>
                    {errors.time && <p className={`${styles.error_message}`}>{errors.time}</p>}
                </div>

                <div className={`${styles.appoinmentFormContent} md:col-span-2`}>
                    <label htmlFor="services" className={`${styles.appoinmentLabel}`}>
                        Service
                    </label>

                    <div className="relative">
                        <select
                            id="services"
                            value={services}
                            onChange={(e) => setServices(e.target.value)}
                            className={`${styles.appoinmentInp} appearance-none bg-transparent`}
                        >
                            <option value="">Select a service</option>
                            <option value="Teeth Treatment">Teeth Treatment</option>
                            <option value="Extraction">Extraction</option>
                            <option value="Braces">Braces</option>
                            <option value="Implantation">Implantation</option>
                            <option value="Dental prosthetics (crowns)">Dental prosthetics (crowns)</option>
                            <option value="Veneers">Veneers</option>
                        </select>
                    </div>

                    {errors.services && (
                        <p className={`${styles.error_message}`}>{errors.services}</p>
                    )}
                </div>
            </div>
            <div className={`${styles.appoinmentFormContent} mt-[20px]`}>
                <label className={`${styles.appoinmentLabel}`} htmlFor="">Message</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="py-[12px] px-[16px] border-1 border-[#52525B40] font-normal text-[16px] leading-[24px] text-[#52525B] rounded-[8px] resize-none lg:min-h-[120px] xl:min-h-[144px] outline-none w-full"
                    placeholder="Include a message...">
                </textarea>
            </div>
            
            <button className="w-full py-[16px] bg-[#3C2A97] rounded-[8px] cursor-pointer font-medium text-[18px] leading-[26px] text-[#FFFFFF] border-2 border-[#3C2A97] mt-[15px] xl:mt-[24px] hover:bg-transparent hover:text-black transition-all duration-500">Confirm Appoinment</button>
        </form>
    )
}