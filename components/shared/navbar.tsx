"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar, NavbarBrand } from "@heroui/navbar";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { RiMenu2Fill } from "react-icons/ri";

import { navlink } from "../constant";
import { Logo } from "../svg";
import {
    useMotionValueEvent,
    useScroll,
    motion,
    AnimatePresence,
} from "framer-motion";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";

export default function AppNavbar() {
    const [yaxis, setYaxis] = useState(0);
    const [showLink, setShowLink] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    // console.log(scrollY);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        setYaxis(latest);
        if(latest > 100 && pathname.includes("#home")) {
            router.push(pathname.replace("#home", ""));
        }
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar
            isBordered={false}
            onMenuOpenChange={setIsMenuOpen}
            className={`${
                yaxis === 0 ? "bg-transparent" : "bg-[#F0F2FF] shadow-lg"
            } rounded-2xl px-2 lg:px-6 py-4`}
            maxWidth="xl"
        >
            {/* Logo */}
            <NavbarBrand>
                <Link href="/">
                    <Logo color={yaxis === 0 ? "white" : ""} />
                </Link>
            </NavbarBrand>

            <Popover
                isOpen={isMenuOpen}
                onOpenChange={(value) => setIsMenuOpen(value)}
                showArrow
                backdrop={"opaque"}
                offset={10}
                placement="top"
            >
                <PopoverTrigger>
                    <button>
                        <div
                            className={` ${yaxis === 0 ? " bg-foreground text-background " : " bg-background text-foreground "} w-fit h-fit lg:flex hidden gap-2 px-2 py-1 justify-center items-center rounded-md cursor-pointer `}
                        >
                            <RiMenu2Fill size={"25px"} />
                        </div>
                        <div
                            className={` ${yaxis === 0 ? " bg-foreground text-background " : " bg-background text-foreground "} w-fit h-fit flex lg:hidden gap-2 px-2 py-1 justify-center items-center rounded-md cursor-pointer `}
                        >
                            <RiMenu2Fill size={"20px"} />
                        </div>
                    </button>
                </PopoverTrigger>

                <PopoverContent className="w-fit bg-[#F0F2FF] backdrop-blur-xl shadow-2xl rounded-3xl p-6 ">
                    <div className="w-full max-w-[200px] bg-[#F0F2FF]  flex flex-col gap-4 ">
                        {navlink.map((item) => {
                            if (item.name === "About Us") {
                                return (
                                    <div
                                        key={item.name}
                                        className="flex flex-col"
                                    >
                                        {/* Parent Button */}
                                        <button
                                            onClick={() =>
                                                setShowLink((prev) => !prev)
                                            }
                                            className="flex items-center justify-between w-full text-sm font-bold text-[#37137F] hover:text-purple-600 transition"
                                        >
                                            {item.name}
                                            {showLink ? (
                                                <IoIosArrowUp size={18} />
                                            ) : (
                                                <IoIosArrowDown size={18} />
                                            )}
                                        </button>

                                        {/* Animated Dropdown */}
                                        <AnimatePresence>
                                            {showLink && (
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        height: 0,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        height: "auto",
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        height: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.25,
                                                    }}
                                                    className="flex flex-col gap-3 mt-3 pl-4 border-l border-purple-200"
                                                >
                                                    <Link
                                                        href="/whyhiroek"
                                                        onClick={() =>
                                                            setIsMenuOpen(false)
                                                        }
                                                        className="text-sm text-gray-600 font-semibold hover:text-purple-600 transition"
                                                    >
                                                        Why Hiroek?
                                                    </Link>

                                                    <Link
                                                        href="/about"
                                                        onClick={() =>
                                                            setIsMenuOpen(false)
                                                        }
                                                        className="text-sm text-gray-600 font-semibold hover:text-purple-600 transition"
                                                    >
                                                        Our Mission
                                                    </Link>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item.name}
                                    href={item.link}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-sm font-bold text-[#37137F] hover:text-purple-600 transition"
                                >
                                    {item.name}
                                </Link>
                            );
                        })}

                        {/* Optional CTA */}
                        {/* <div className="pt-4 border-t border-gray-100">
                            <Link
                                href="/create-event"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full inline-flex justify-center items-center bg-gradient-to-r from-[#37137F] to-[#8C43FE] text-white py-3 rounded-xl text-sm font-semibold shadow-lg hover:opacity-90 transition"
                            >
                                Create Event
                            </Link>
                        </div> */}
                    </div>
                </PopoverContent>
            </Popover>
        </Navbar>
    );
}
