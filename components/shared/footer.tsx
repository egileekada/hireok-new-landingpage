"use client";

import Image from "next/image";
import Link from "next/link";

import { Instagram, Tiktok, Twitter, Youtube } from "../svg";
import { navlinkmobile } from "../constant";

export default function Footer() {
    return (
        <footer className="w-full relative flex flex-col overflow-hidden "> 

            <div className="relative z-10 w-full flex flex-col font-axiformamedium lg:px-12 text-[#F0F2FF]">
                <div className="w-full px-6 lg:px-12 gap-6 flex lg:flex-row flex-col py-20 justify-between">
                    {/* Logo Section */}
                    <div className="lg:max-w-[370px] flex flex-col items-start gap-3">
                        <Image
                            src="/images/whitelogo.svg"
                            alt="MyHero Logo"
                            width={150}
                            height={54}
                            className="h-[54px] w-auto"
                        />
                        <p className="lg:text-lg font-medium">
                            Simple Event Management for Organisers.
                        </p>
                    </div>

                    {/* Social + Links */}
                    <div className="flex flex-col gap-4">
                        <p className="font-bold text-lg lg:text-xl">
                            Follow Us On Social Media
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3 items-center">
                            <SocialLink href="https://www.instagram.com/hiroekapp">
                                <Instagram />
                            </SocialLink>

                            <SocialLink href="https://www.tiktok.com/@hiroekapp">
                                <Tiktok />
                            </SocialLink>

                            <SocialLink href="https://x.com/Hiroekapp">
                                <Twitter />
                            </SocialLink>

                            <SocialLink href="https://youtube.com/@hiroekapp">
                                <Youtube />
                            </SocialLink>
                        </div>

                        {/* Navigation Links */}
                        <div className="grid grid-cols-2 gap-5">
                            {navlinkmobile.map((item) => (
                                <Link
                                    key={item.link}
                                    href={item.link}
                                    className="font-medium lg:text-lg hover:opacity-80 transition"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <a
                                href="/pdf/TAndC.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Terms & Conditions
                            </a>

                            <a
                                href="/pdf/PrivacyPolicy.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Privacy Policy
                            </a> 
                            
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="py-4 w-full flex justify-center items-center border-t border-[#2E4E73]">
                    <p className="font-medium lg:text-base text-sm text-center">
                        Copyright MyHero Ltd © {new Date().getFullYear()}. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

/* Reusable Social Link Component */
function SocialLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[58px] h-[58px] rounded-full bg-[#F0F2FF] flex justify-center items-center hover:scale-105 transition"
        >
            {children}
        </a>
    );
}
