'use client'

import { styles } from "@/styles/index.style";
import { Calendar } from "lucide-react";
import { useState } from "react";

export default function AppoinmentForm() {
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [services, setServices] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [agree, setAgree] = useState<boolean>(false)
    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        date: '',
        services: '',
        message: '',
        agree: '',
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let valid = true;
        const newErrors = {
            name: '',
            phone: '',
            date: '',
            services: '',
            message: '',
            agree: '',
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

        if (!services) {
            newErrors.services = 'Select a doctor';
            valid = false;
        }

        if (!agree) {
            newErrors.agree = 'You must agree to terms';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            const finalPhone = "+998" + unformattedPhone;
            console.log('Form submitted', {
                name,
                phone: finalPhone,
                date,
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

                <div className={`${styles.appoinmentFormContent}`}>
                    <label htmlFor="">Date</label>
                    <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={`${styles.appoinmentInp}`}
                        type="date"
                        placeholder="DD/MM/YYYY"
                    />
                    <Calendar className="absolute top-[45px] right-[16px] w-5 h-5 text-gray-400" />
                    {errors.date && <p className={`${styles.error_message}`}>{errors.date}</p>}
                </div>

                <div className={`${styles.appoinmentFormContent}`}>
                    <label htmlFor="services" className={`${styles.appoinmentLabel}`}>
                        Doctor
                    </label>

                    <div className="relative">
                        <select
                            id="services"
                            value={services}
                            onChange={(e) => setServices(e.target.value)}
                            className={`${styles.appoinmentInp} appearance-none bg-transparent`}
                        >
                            <option value="">Select a doctor</option>
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
                    className="py-[12px] px-[16px] border-1 border-[#52525B40] font-normal text-[16px] leading-[24px] text-[#52525B] rounded-[8px] resize-none lg:min-h-[120px] xl:min-h-[144px] outline-none"
                    placeholder="Include a message...">
                </textarea>
            </div>
            <div className="flex gap-[12px] mt-[20px] xl:mt-[32px]">
                <input
                    className="w-[20px] h-[20px] cursor-pointer"
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                />
                <label className="font-normal text-[16px] leading-[24px] text-[#52525B]" htmlFor="">You agree to our friendly privacy policy.</label>
            </div>
            {errors.agree && <p className={`${styles.error_message}`}>{errors.agree}</p>}
            <button className="w-full py-[16px] bg-[#3C2A97] rounded-[8px] cursor-pointer font-medium text-[18px] leading-[26px] text-[#FFFFFF] border-2 border-[#3C2A97] mt-[15px] xl:mt-[24px] hover:bg-transparent hover:text-black transition-all duration-500">Confirm Appoinment</button>
        </form>
    )
}