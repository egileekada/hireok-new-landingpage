import { CustomImage } from "../custom";

export default function HeadSection(
    {
        title,
        img
    }: {
        title: string;
        img: string
    }
) {
    return (
        <div className=" h-[50vh] lg:h-[70vh] items-center justify-center w-full relative text-center flex text-white ">
            <p className=" max-w-[1071px] text-center text-3xl xl:text-[80px] lg:text-[64px] xl:leading-[110%] lg:leading-[110%] font-black relative z-10 mt-3  ">
               {title}
            </p>
            <div className=" absolute inset-0 w-full h-full " >
                <CustomImage fillContainer src={img} alt={"img"} />
            </div>
            {/* <img alt="aboutbg" src="/images/aboutbg.png" className=" absolute inset-0 w-full h-full object-cover " /> */}
        </div>
    );
}
