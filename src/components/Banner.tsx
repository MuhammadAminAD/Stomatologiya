
export default function Banner() {
    return (
        <div className="w-full py-[88px] bg-[#3C2A97] text-center text-[#fff] lg:px-0 px-[30px]">
            <h2 className="font-normal text-[36px] leading-[60px]">Let Us Brighten <span className="font-medium text-[42px] leading-[60px]">Your Smile!</span></h2>
            <p className="max-w-[904px] mx-auto mt-[24px] mb-[56px] font-normal text-[18px] leading-[30px]">
                Helping patients achieve good dental health & beautiful smile is a privilege & responsibility. For over 30 years, we proudly provided the best dental experience in New York. Our comfort-first approach is designed to meet the needs of you & your entire family.
            </p>
            <button className="py-[20px] lg:px-[50px] px-[35px] bg-transparent border-2 border-[#fff] rounded-[16px] font-normal text-[20px] cursor-pointer hover:bg-[#fff] hover:text-black transition-all duration-500">Make An Appinment</button>
        </div>
    )
}
