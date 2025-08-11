import IconCall from "@/assets/icons/Call.svg"
import IconCalendar from "@/assets/icons/ServicesCalendarIcon.svg"
import IconPlus from "@/assets/icons/Plus.svg"
import Icon1 from "@/assets/icons/Icon1.svg"
import Icon2 from "@/assets/icons/Icon2.svg"
import Icon3 from "@/assets/icons/Icon3.svg"
import Icon4 from "@/assets/icons/Icon4.svg"
import Icon5 from "@/assets/icons/Icon5.svg"
import Icon6 from "@/assets/icons/Icon6.svg"
import { IKeyFeatures, IMenuList, IServices } from "@/types";

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