'use client'

import { styles } from "@/styles/index.style";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: typeof errors = {};
        const unformattedPhone = phone.replace(/\D/g, "");

        if (!name.trim()) newErrors.name = "Please enter your name";

        if (!unformattedPhone) {
            newErrors.phone = "Please enter your phone number";
        } else if (unformattedPhone.length !== 9) {
            newErrors.phone = "Phone must be in format (99) 999-99-99";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        const fullPhone = "+998" + unformattedPhone;
        console.log("Form submitted:", { name, phone: fullPhone });

        setName("");
        setPhone("");
    };

    return (
        <div className="w-full bg-[#F8FAFC] py-10 md:py-15 lg:py-[96px] relative">
            <div className={styles.Container}>
                <div className={`rounded-[20px] bg-[#3C2A97] py-5 md:py-10 lg:py-[82px] flex flex-col items-center text-center`}>
                    <h2 className="font-semibold text-[20px] md:text-[42px] text-[#fff] mb-5 
                    md:mb-10 lg:mb-[50px]">Subscribe to our newsletter</h2>
                    <form onSubmit={handleSubmit} className="md:flex gap-[24px] items-center px-4 lg:px-15 w-full flex-col md:flex-row">
                        <div className="w-full relative">
                            <input
                                className={`${styles.contactInp} md:mb-0 mb-[20px]`}
                                type="text"
                                placeholder="First name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && (
                                <p className={`${styles.error_message}`}>{errors.name}</p>
                            )}
                        </div>
                        <div className="w-full relative">
                            <span className="absolute top-[18px] left-[16px] text-[#9CA3AF]">+998</span>
                            <input
                                className={`${styles.contactInp} md:mb-0 mb-[30px] pl-[66px]`}
                                type="text"
                                placeholder="(99) 999-99-99"
                                value={phone}
                                onChange={handlePhoneChange}
                                inputMode="numeric"
                            />
                            {errors.phone && (
                                <p className={`${styles.error_message}`}>{errors.phone}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="py-[16px] w-full bg-[#FFFFFF] rounded-[10px] cursor-pointer font-normal text-[17px] text-[#18181B] border-2 border-white hover:bg-transparent hover:text-white transition-all duration-500"
                        >
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}