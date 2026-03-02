"use client";

import { motion } from "framer-motion";
import { CustomImage } from "../custom";

interface LandingLayoutProps {
    children: React.ReactNode;
    reverse?: boolean;
    first?: boolean;
    img?: string;
}

export default function LandingLayout({
    children,
    reverse = false,
    first = false,
    img,
}: LandingLayoutProps) {
    const strokeImage = reverse
        ? "/images/bluestroke.png"
        : "/images/whitestroke.png";

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative overflow-hidden flex ${
                reverse
                    ? "text-foreground bg-background lg:flex-row-reverse flex-col"
                    : "bg-foreground text-background lg:flex-row flex-col"
            } gap-10 lg:gap-6 ${
                first ? "rounded-t-3xl lg:rounded-t-[120px]" : ""
            } w-full justify-center py-12 lg:py-24 items-center px-5`}
        >
            {/* Background Stroke Layer */}
            <div className="absolute inset-0 z-10 grid grid-cols-4">
                {[...Array(4)].map((_, colIndex) => (
                    <div key={colIndex} className="flex flex-col">
                        {[...Array(2)].map((_, rowIndex) => (
                            <img
                                key={rowIndex}
                                alt="stroke"
                                src={strokeImage}
                                className="w-full h-1/2 object-cover opacity-[0.04]"
                            />
                        ))}
                    </div>
                ))}
            </div>
            {img && (
                <div className={`${ !img ? "w-fit" : " w-full " } flex justify-center items-center z-20 `}>
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-full"
                    >
                        <div className="h-[500px] p-4 rounded-3xl">
                            <CustomImage
                                src={img}
                                alt="section image"
                                contain
                            />
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Content Side */}
            <div className="w-full flex justify-center items-center z-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`${img ? "lg:max-w-[600px]" : "lg:max-w-[800px]"} w-full flex flex-col gap-5`}
                >
                    {children}
                </motion.div>
            </div>
        </motion.section>
    );
}
