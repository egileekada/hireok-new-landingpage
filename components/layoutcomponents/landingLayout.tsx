"use client";

import { motion } from "framer-motion";
import { CustomImage } from "../custom";

export default function LandingLayout({
    children,
    reverse,
    first,
    img,
}: Readonly<{
    children: React.ReactNode;
    reverse?: boolean;
    first?: boolean;
    img?: string;
}>) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex ${
                reverse
                    ? "text-foreground bg-background lg:flex-row-reverse flex-col"
                    : "bg-foreground text-background lg:flex-row flex-col"
            } relative gap-10 lg:gap-6 ${
                first ? "rounded-t-3xl lg:rounded-t-[120px]" : ""
            } w-full justify-center py-12 lg:py-24 relative items-center px-5`}
        >
            {/* Image Side */}
            <motion.div
                initial={{ opacity: 0, x: reverse ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full flex justify-center items-center"
            >
                <div className="w-full lg:w-[70%] h-[500px] z-20 p-4 bg-gray-400 rounded-3xl">
                    {img && <CustomImage src={img} alt="img" contain />}
                </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
                initial={{ opacity: 0, x: reverse ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full flex justify-center items-center "
            >
                <div className="lg:max-w-[540px] relative z-20 flex flex-col gap-5">
                    {children}
                </div>
            </motion.div>
            {!reverse ? (
                <div className=" absolute w-full z-10 h-full flex inset-0 ">
                    <div className=" w-[25%] h-full flex flex-col ">
                        <img
                            alt="whitestroke"
                            src="/images/whitestroke.png"
                            className=" object-cover opacity-4 w-full h-[50%] "
                        />
                        <img
                            alt="whitestroke"
                            src="/images/whitestroke.png"
                            className=" object-cover opacity-4 w-full h-[50%] "
                        />
                    </div>
                    <div className=" w-[25%] h-full flex flex-col ">
                        <img
                            alt="whitestroke"
                            src="/images/whitestroke.png"
                            className=" object-cover opacity-4 w-full h-[50%] "
                        />
                        <img
                            alt="whitestroke"
                            src="/images/whitestroke.png"
                            className=" object-cover opacity-4 w-full h-[50%] "
                        />
                    </div>
                    <div className=" w-[25%] h-full flex flex-col ">
                        <img
                            alt="whitestroke"
                            src="/images/whitestroke.png"
                            className=" object-cover opacity-4 w-full h-[50%] "
                        />
                        <img
                            alt="whitestroke"
                            src="/images/whitestroke.png"
                            className=" object-cover opacity-4 w-full h-[50%] "
                        />
                    </div>
                    <div className=" w-[25%] h-full flex flex-col ">
                        <img
                            alt="whitestroke"
                            src="/images/whitestroke.png"
                            className=" object-cover opacity-4 w-full h-[50%] "
                        />
                        <img
                            alt="whitestroke"
                            src="/images/whitestroke.png"
                            className=" object-cover opacity-4 w-full h-[50%] "
                        />
                    </div>
                </div>
            ) : (
                <div className=" absolute w-full z-10 h-full flex inset-0 ">
                    <div className=" w-[25%] h-full flex flex-col ">
                        <img
                            alt="bluestroke"
                            src="/images/bluestroke.png"
                            className=" object-cover opacity-4 w-full h-[50%] "
                        />
                        <img
                            alt="bluestroke"
                            src="/images/bluestroke.png"
                            className=" object-cover opacity-4 w-full h-[50%] "
                        />
                    </div>
                    <div className=" w-[25%] h-full flex flex-col ">
                        <img
                            alt="bluestroke"
                            src="/images/bluestroke.png"
                            className=" object-cover opacity-4 w-full h-[50%] "
                        />
                        <img
                            alt="bluestroke"
                            src="/images/bluestroke.png"
                            className=" object-cover opacity-4 w-full h-[50%] "
                        />
                    </div>
                    <div className=" w-[25%] h-full flex flex-col ">
                        <img
                            alt="bluestroke"
                            src="/images/bluestroke.png"
                            className=" object-cover opacity-4 w-full h-[50%] "
                        />
                        <img
                            alt="bluestroke"
                            src="/images/bluestroke.png"
                            className=" object-cover opacity-4 w-full h-[50%] "
                        />
                    </div>
                    <div className=" w-[25%] h-full flex flex-col ">
                        <img
                            alt="bluestroke"
                            src="/images/bluestroke.png"
                            className=" object-cover opacity-4 w-full h-[50%] "
                        />
                        <img
                            alt="bluestroke"
                            src="/images/bluestroke.png"
                            className=" object-cover opacity-4 w-full h-[50%] "
                        />
                    </div>
                </div>
            )}
        </motion.section>
    );
}
