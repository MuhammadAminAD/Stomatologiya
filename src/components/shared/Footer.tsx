import { footerMenuList } from "@/constants/index.constants";
import { styles } from "@/styles/index.style";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className='bg-[#3C2A97] py-10 md:py-15 lg:py-25'>
            <div className={`${styles.Container} lg:flex justify-between md:grid md:grid-cols-2`}>
                <div>
                    <Link className="font-medium text-[34px] text-[#FFFFFF]" href={'/'}>Dentics</Link>
                    <p className="max-w-[260px] font-normal text-[16px] tracking-[4%] text-[#FFFFFF] mt-[40px]">
                        Dentics is a well-known name in dental and oral care in New York. The journey of this institution started in 1990
                    </p>
                </div>
                <div className="relative after:hidden xl:after:block before:hidden xl:before:block after:content-[] after:w-[1px] after:h-[244px] after:bg-[#FFFFFF4D] after:absolute after:top-0 after:left-0 before:content-[] before:w-[1px] before:h-[244px] before:bg-[#FFFFFF4D] before:absolute before:top-0 before:right-0 lg:px-[30px]">
                    <h3 className={`${styles.footerTitle} lg:mb-[40px]`}>We are welcoming you</h3>
                    <h4 className="font-semibold text-[28px] text-[#fff] leading-[40px] mb-[20px] md:mb-[20px]">Want to visit our clinic?</h4>
                    <p className="font-normal text-[16px] text-[#fff]">Saturday - Thrusday <span className="block mt-[8px]">10 am- 9 pm</span></p>
                </div>
                <div className="relative md:mt-0 mt-[30px] before:hidden xl:before:block before:w-[1px] before:h-[244px] before:bg-[#FFFFFF4D] before:absolute before:top-0 before:right-0 lg:pr-[30px]">
                    <h3 className={`${styles.footerTitle} lg:mt-0 mt-[45px]`}>Important link</h3>
                    <div className="flex gap-[20px]">
                        {
                            footerMenuList.map(({ id, menu }) => {
                                return <ul key={id} className="flex flex-col gap-[16px]">
                                    {
                                        menu.map(({ id, linkName, slug }) => {
                                            return <li key={id}><Link className="font-normal text-[16px] text-[#fff] hover:underline" href={slug}>{linkName}</Link></li>
                                        })
                                    }
                                </ul>
                            })
                        }
                    </div>
                </div>
                <div>
                    <h3 className={`${styles.footerTitle} lg:mt-0 mt-[45px]`}>Say hello to us</h3>
                    <Link href={'/'} className="font-normal text-[16px] text-[#fff]  hover:underline">hello@reallygreatsite.com</Link>
                    <h3 className="font-normal text-[14px] text-[#fff]">Address <span className="block mt-[20px] md:mt-[32px]">123 Anywhere St., Any City, NY 39200</span></h3>
                </div>
            </div>
        </footer>
    )
}
