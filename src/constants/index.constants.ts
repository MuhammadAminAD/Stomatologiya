export const menuLink: IMenuList[] = [
    {
        id: 0,
        name: "Main",
        slug: 'home-page'
    },

    {
        id: 1,
        name: "We provide",
        slug: 'provide-page'
    },

    {
        id: 2,
        name: "Special",
        slug: 'special-page'
    },

    {
        id: 4,
        name: "Our history",
        slug: 'history-page'
    },

    {
        id: 5,
        name: "Consult",
        slug: 'consult-page'
    },
]


import IconCall from "@/assets/icons/Call.svg"
import IconCalendar from "@/assets/icons/ServicesCalendarIcon.svg"
import IconPlus from "@/assets/icons/Plus.svg"
export const ServiceCards: IServices[] = [
    { id: 0, text: "Call for appointment", icon: IconCall },
    { id: 1, text: "Get a Date & Serial", icon: IconCalendar },
    { id: 2, text: "ConsultYour dentist", icon: IconPlus },
]

import { IFooterMenuList, IKeyFeatures, IMenuList, IServices } from "@/types";

export const footerMenuList: IFooterMenuList[] = [
    {
        id: 0,
        menu: [
            {
                id: 0,
                linkName: 'Facebook',
                slug: '/'
            },

            {
                id: 1,
                linkName: 'Twitter',
                slug: '/'
            },

            {
                id: 2,
                linkName: 'Instagram',
                slug: '/'
            },
        ]
    },

    {
        id: 1,
        menu: [
            {
                id: 0,
                linkName: 'Career',
                slug: '/'
            },

            {
                id: 1,
                linkName: 'Support',
                slug: '/'
            },

            {
                id: 2,
                linkName: 'Privacy policy',
                slug: '/'
            },
        ]
    },
]

import Icon1 from "@/assets/icons/Icon1.svg"
import Icon2 from "@/assets/icons/Icon2.svg"
import Icon3 from "@/assets/icons/Icon3.svg"
import Icon4 from "@/assets/icons/Icon4.svg"
import Icon5 from "@/assets/icons/Icon5.svg"
import Icon6 from "@/assets/icons/Icon6.svg"

export const KeyFeaterus: IKeyFeatures[] = [
    {
        id: 0,
        icon: Icon1,
        title: 'Laser Technology',
        desc: 'Worlds most advanced Diode Laser.  Your treatment experience will be  relaxing & smooth.'
    },

    {
        id: 1,
        icon: Icon2,
        title: 'Laser Technology',
        desc: 'Worlds most advanced Diode Laser.  Your treatment experience will be  relaxing & smooth.'
    },

    {
        id: 2,
        icon: Icon3,
        title: 'Laser Technology',
        desc: 'Worlds most advanced Diode Laser.  Your treatment experience will be  relaxing & smooth.'
    },

    {
        id: 3,
        icon: Icon4,
        title: 'Laser Technology',
        desc: 'Worlds most advanced Diode Laser.  Your treatment experience will be  relaxing & smooth.'
    },

    {
        id: 4,
        icon: Icon5,
        title: 'Laser Technology',
        desc: 'Worlds most advanced Diode Laser.  Your treatment experience will be  relaxing & smooth.'
    },

    {
        id: 5,
        icon: Icon6,
        title: 'Laser Technology',
        desc: 'Worlds most advanced Diode Laser.  Your treatment experience will be  relaxing & smooth.'
    },
]