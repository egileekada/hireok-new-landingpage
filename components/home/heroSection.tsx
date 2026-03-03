"use client";

import { AnimatePresence, motion } from "framer-motion";
import { UnderLineIcon } from "../svg";
import { useEffect, useState } from "react";
import { CustomButton } from "../custom";
import { useRouter } from "next/navigation";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export default function HeroSection() {
    const [isShown, setIsShown] = useState(0);
    const router = useRouter();
    const data = [
        "/images/home/bg1.jpg",
        "/images/home/bg2.jpg",
        "/images/home/bg3.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsShown((prev) => (prev === data.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full relative overflow-hidden">
            {/* Background Slider */}
            <AnimatePresence>
                <motion.div
                    key={isShown}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img
                        src={data[isShown]}
                        alt="hero background"
                        className="w-full h-full object-cover rounded-b-3xl lg:rounded-b-[120px]"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25 z-10 rounded-b-3xl lg:rounded-b-[120px]" />

            {/* Content */}
            <div className="relative  w-screen h-screen flex items-center text-[#F0F2FF] font-bold px-6 lg:px-14">
                {/* <div className="lg:max-w-[800px] pt-36 lg:pt-16 pb-24 lg:pb-0 flex flex-col gap-3">
                    <p className="text-2xl font-black z-50 xl:text-[64px] uppercase lg:text-[45px] leading-[120%]">
                        Run Better Events With Less Effort
                    </p>

                    <UnderLineIcon />

                    <p className="xl:text-2xl mt-3 z-50">
                        Create event pages, boost ticket sales, manage
                        attendees, and keep your audience connected before and
                        after every event. All from one simple platform. Built
                        for event organisers. Designed for growth.
                    </p>
                    <div className=" pt-20 z-50 ">
                        <CustomButton>Create Your Event</CustomButton>
                    </div>
                </div> */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="lg:max-w-[800px] pt-36 lg:pt-16 pb-24 lg:pb-0 flex flex-col gap-3"
                >
                    {/* Heading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="text-2xl font-black z-50 xl:text-[64px] uppercase lg:text-[45px] leading-[120%]"
                    >
                        Run Better Events With Less Effort
                    </motion.p>

                    {/* Underline */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0, y: 20 }}
                        animate={{ scaleX: 1, opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="origin-left"
                    > 
                        <UnderLineIcon />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="xl:text-2xl mt-3 z-30"
                    >
                        Create event pages, boost ticket sales, manage
                        attendees, and keep your audience connected before and
                        after every event. All from one simple platform. Built
                        for event organisers. Designed for growth.
                    </motion.p>

                    {/* Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="pt-20 z-30"
                    >
                        <CustomButton onClick={() => router.push("https://partners.hiroek.io/")}>Create Your Event</CustomButton>
                    </motion.div>
                </motion.div>

                <img
                    alt="bluestroke"
                    src="/images/decore.png"
                    className=" object-cover opacity-5 top-0 right-0 absolute "
                />
                <img
                    alt="ellipse2"
                    src="/images/ellipse2.png"
                    className=" object-cover top-6 left-0 absolute "
                />
                <img
                    alt="ellipse3"
                    src="/images/ellipse3.png"
                    className=" object-cover top-24 left-14 absolute "
                />
                <img
                    alt="ellipse4"
                    src="/images/ellipse4.png"
                    className=" object-cover bottom-0 left-[40%] absolute "
                />
                <img
                    alt="ellipse5"
                    src="/images/ellipse5.png"
                    className=" object-cover bottom-8 left-[40%] absolute "
                />
            </div>
        </div>
    );
}
