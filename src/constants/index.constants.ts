import IconCall from "@/assets/icons/Call.svg"
import IconCalendar from "@/assets/icons/ServicesCalendarIcon.svg"
import IconPlus from "@/assets/icons/Plus.svg"
import { IMenuList, IServices } from "@/types";

export const menuLink: IMenuList[] = [
    {
        id: 0,
        name: "Main", 
        slug: 'main-page'
    },
    {
        id: 1,
        name: "Services",
        slug: 'services-page'
    },
    {
        id: 2,
        name: "Advantages",
        slug: 'advantages-page'
    },
    {
        id: 4,
        name: "About us",
        slug: 'about-page'
    },
    {
        id: 5,
        name: "Contact",
        slug: 'contact-page'
    }
]

export const ServiceCards: IServices[] = [
    { id: 0, text: "Call for appointment", icon: IconCall },
    { id: 1, text: "Get a Date & Serial", icon: IconCalendar },
    { id: 2, text: "Consult Your dentist", icon: IconPlus },
]