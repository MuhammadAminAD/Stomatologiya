export interface IMenuList {
    id: number,
    name: string,
    slug: string
}

export interface IServices {
    id: number,
    text: string,
    icon: string
}

export interface IFooterMenuList {
    id: number,
    menu: {
        id: number,
        linkName: string,
        slug: string
    }[]
}

export interface IKeyFeatures {
    id: number,
    icon: string,
    title: string,
    desc: string
}