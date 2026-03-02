"use client";

import { Headsection } from "@/components/shared";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

export default function FAQ() {
    const faqData: { title: string; items: FAQItem[] }[] = [
        {
            title: "General",
            items: [
                {
                    question: "What is Hiroek?",
                    answer: (
                        <>
                            Hiroek is a simple, all-in-one platform for event
                            organisers. It helps you create event pages, sell
                            tickets, manage attendees, and communicate with your
                            audience; all from one place.
                        </>
                    ),
                },
                {
                    question: "Who is Hiroek for?",
                    answer: (
                        <>
                            Hiroek is built for:
                            <ul className="list-disc ml-6 mt-3 space-y-1">
                                <li>Event organisers</li>
                                <li>Community leaders</li>
                                <li>Creators hosting events</li>
                                <li>Small businesses</li>
                                <li>Workshop hosts</li>
                                <li>Schools and organisations</li>
                            </ul>
                            <p className="mt-3">
                                If you plan and manage events, Hiroek is
                                designed for you.
                            </p>
                        </>
                    ),
                },
                {
                    question: "What type of events can I host on Hiroek?",
                    answer: (
                        <>
                            You can host:
                            <ul className="list-disc ml-6 mt-3 space-y-1">
                                <li>In-person events</li>
                                <li>Online events</li>
                                <li>Workshops</li>
                                <li>Networking mixers</li>
                                <li>Conferences</li>
                                <li>Seminars</li>
                                <li>Community gatherings</li>
                            </ul>
                            <p className="mt-3">
                                Any event that requires registrations or ticket
                                sales can be managed on Hiroek.
                            </p>
                        </>
                    ),
                },
                {
                    question: "Do I need technical skills to use Hiroek?",
                    answer: (
                        <>
                            No. Hiroek is designed to be simple and easy to use.
                            You can create and publish an event in just a few
                            minutes.
                        </>
                    ),
                },
            ],
        },
        {
            title: "Event Creation",
            items: [
                {
                    question: "How do I create an event?",
                    answer: (
                        <>
                            Creating an event is easy:
                            <ul className="list-disc ml-6 mt-3 space-y-1">
                                <li>Sign in to your dashboard</li>
                                <li>Click “Create Event”</li>
                                <li>Add your event details</li>
                                <li>Set up tickets or RSVPs</li>
                                <li>Publish your event</li>
                            </ul>
                            <p className="mt-3">
                                Your event page will be ready to share
                                immediately.
                            </p>
                        </>
                    ),
                },
                {
                    question: "Can I host both online and in-person events?",
                    answer: (
                        <>
                            Yes. Hiroek supports both online and in-person
                            events.
                        </>
                    ),
                },
                {
                    question: "Can I customise my event page?",
                    answer: (
                        <>
                            Yes. You can add:
                            <ul className="list-disc ml-6 mt-3 space-y-1">
                                <li>Event name and description</li>
                                <li>Date and time</li>
                                <li>Location or online link</li>
                                <li>Images and event details</li>
                                <li>Ticket options</li>
                            </ul>
                        </>
                    ),
                },
            ],
        },
        {
            title: "Tickets & Payments",
            items: [
                {
                    question: "Can I sell tickets on Hiroek?",
                    answer: (
                        <>
                            Yes. You can sell tickets securely through your
                            event page.
                        </>
                    ),
                },
                {
                    question: "Can I offer free tickets?",
                    answer: (
                        <>Absolutely. You can create paid or free tickets.</>
                    ),
                },
                {
                    question: "How do I receive my money?",
                    answer: (
                        <>
                            Hiroek supports instant cash withdrawals as soon as
                            ticket sales come in.
                        </>
                    ),
                },
                {
                    question: "Are payments secure?",
                    answer: (
                        <>
                            Yes. All payments are processed through secure,
                            trusted systems.
                        </>
                    ),
                },
            ],
        },
        {
            title: "Attendee Management",
            items: [
                {
                    question: "Can I see who has registered for my event?",
                    answer: (
                        <>
                            Yes. You can view registrations, track ticket sales
                            and see attendee details.
                        </>
                    ),
                },
                {
                    question: "Can I manage multiple events?",
                    answer: (
                        <>
                            Yes. You can manage as many events as you like from
                            your dashboard.
                        </>
                    ),
                },
            ],
        },
        {
            title: "Communication",
            items: [
                {
                    question: "Can I send updates to my attendees?",
                    answer: (
                        <>
                            Yes. Send announcements, reminders and important
                            updates directly from your dashboard.
                        </>
                    ),
                },
                {
                    question: "Are notifications automated?",
                    answer: (
                        <>
                            Yes. Registration confirmations, reminders and
                            important updates are sent automatically.
                        </>
                    ),
                },
            ],
        },
        {
            title: "Pricing",
            items: [
                {
                    question: "Is Hiroek free to use?",
                    answer: (
                        <>
                            Yes. Hiroek offers a free plan to get started with
                            event creation.
                        </>
                    ),
                },
                {
                    question: "Do you have paid plans?",
                    answer: (
                        <>
                            Yes. Paid plans unlock additional engagement and
                            marketing features to boost ticket sales.
                        </>
                    ),
                },
                {
                    question: "Are there hidden fees?",
                    answer: (
                        <>
                            No. Hiroek pricing is transparent with no hidden
                            charges.
                        </>
                    ),
                },
            ],
        },
        {
            title: "Support & Getting Started",
            items: [
                {
                    question: "What if I need help?",
                    answer: (
                        <>
                            Visit our Help Center, contact support at
                            info@hiroek.io, or book a demo.
                        </>
                    ),
                },
                {
                    question: "How do I get started?",
                    answer: (
                        <>
                            Sign up → Create your first event → Publish → Start
                            receiving registrations.
                        </>
                    ),
                },
                {
                    question: "Can I try Hiroek before paying?",
                    answer: (
                        <>
                            Yes. Start free and upgrade anytime as your needs
                            grow.
                        </>
                    ),
                },
                {
                    question: "Why should I choose Hiroek?",
                    answer: (
                        <>
                            Simple event creation. Easy ticket sales. Clear
                            attendee management. Direct communication. Instant
                            payouts. Everything you need in one platform.
                        </>
                    ),
                },
            ],
        },
    ];

    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <section className="w-full bg-gradient-to-b from-white to-[#F8F6FF]">
            <Headsection
                title="Frequently Asked Questions"
                img="/images/aboutbg.png"
            />

            <div className="max-w-4xl mx-auto py-24 px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold text-[#161925]">
                        Everything you need to know about using Hiroek
                    </h2>
                    <p className="mt-4 text-[#6B6B7B]">
                        Clear answers to help you create, manage and grow
                        successful events.
                    </p>
                </div>

                {faqData.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-16">
                        <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-[#9747FF] to-[#6C2CFF] bg-clip-text text-transparent">
                            {section.title}
                        </h3>

                        <div className="space-y-5">
                            {section.items.map((item, index) => {
                                const id = `${sectionIndex}-${index}`;
                                const isOpen = openIndex === id;

                                return (
                                    <div
                                        key={id}
                                        className="bg-white rounded-2xl border border-[#ECEAF5] shadow-sm hover:shadow-md transition-all duration-300"
                                    >
                                        <button
                                            onClick={() => toggle(id)}
                                            className="w-full flex justify-between items-center px-7 py-6 text-left"
                                        >
                                            <span className="font-medium text-[#1C1C28]">
                                                {item.question}
                                            </span>

                                            <ChevronDown
                                                size={20}
                                                className={clsx(
                                                    "transition-transform duration-300",
                                                    isOpen
                                                        ? "rotate-180 text-[#9747FF]"
                                                        : "text-[#8E8EA0]",
                                                )}
                                            />
                                        </button>

                                        <div
                                            className={clsx(
                                                "px-7 overflow-hidden transition-all duration-300 ease-in-out",
                                                isOpen
                                                    ? "max-h-[600px] pb-7"
                                                    : "max-h-0",
                                            )}
                                        >
                                            <div className="text-[#5B5B6B] leading-relaxed">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                <div className="mt-24 text-center bg-white rounded-3xl p-12 border border-[#ECEAF5] shadow-sm">
                    <h4 className="text-2xl font-semibold text-background">
                        Still have questions?
                    </h4>
                    <p className="mt-4 text-[#6B6B7B]">
                        We're here to help. Reach out anytime.
                    </p>
                    <p className="mt-3 font-medium text-[#9747FF]">
                        info@hiroek.io
                    </p>
                </div>
            </div>
        </section>
    );
}
