export default function LandingLayout({
    children,
    reverse,
    first
}: Readonly<{
    children: React.ReactNode;
    reverse?: boolean;
    first?: boolean
}>) {
    return (
        <section
            className={` flex ${reverse ? " text-foreground bg-background lg:flex-row-reverse flex-col " : " bg-foreground text-background lg:flex-row flex-col "} relative gap-10 lg:gap-6 ${first ? " rounded-t-3xl lg:rounded-t-[120px] " : ""} w-full  justify-center py-12 lg:py-24 items-center px-5 `}
        >
            <div className=" w-full flex justify-center items-center ">
                <div className=" w-full lg:w-[70%] h-[500px] bg-gray-400 rounded-3xl "></div>
            </div>
            <div className=" w-full flex justify-center items-center ">
                <div className=" lg:max-w-[540px] relative z-10 flex flex-col gap-5 ">
                    {children}
                </div>
            </div>
        </section>
    );
}
