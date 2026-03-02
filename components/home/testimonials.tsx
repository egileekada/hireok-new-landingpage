"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        quote: "Simple, clean, and easy to use.",
        name: "Event Organiser",
        img: "/images/testtwo.jpeg",
    },
    {
        quote: "Finally a platform made for organisers.",
        name: "Conference Host",
        img: "/images/testthree.png",
    },
    {
        quote: "Managing my events just got easier.",
        name: "Event Manager",
        img: "/images/testfour.jpeg",
    },
    {
        quote: "Grateful to be a partner of such an incredible venture. This platform is perfect for me as an event marketer.",
        name: "Event Marketer",
        img: "/images/testone.jpeg",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="w-full py-20 px-6 lg:px-20 bg-foreground ">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4"
                >
                    <h2 className="text-3xl lg:text-4xl font-black text-background">
                        What Our Users Are Saying
                    </h2>
                    <p className="text-gray-500 max-w-2xl">
                        Real feedback from organisers and marketers using our
                        platform to power their events.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-8 w-full">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-foreground rounded-2xl p-8 shadow-sm border border-gray-100 text-left flex flex-col gap-6"
                        >
                            <p className="text-gray-700 text-lg leading-relaxed">
                                “{item.quote}”
                            </p>

                            <div className="flex items-center gap-3 mt-auto ">
                                <div className="w-10 h-10 rounded-full bg-gray-200" >
                                    <Image src={item.img} alt={item.name} width={40} height={40} className="w-full h-full object-cover rounded-full " />
                                </div>
                                <div>
                                    <p className="font-medium text-sm">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Verified User
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
