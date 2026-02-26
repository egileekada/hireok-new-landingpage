"use client"

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
                            audience — all from one place.
                        </>
                    ),
                },
                {
                    question: "Who is Hiroek for?",
                    answer: (
                        <>
                            Hiroek is built for event organisers, community
                            leaders, creators, small businesses, workshop hosts,
                            schools and organisations. If you plan and manage
                            events, Hiroek is designed for you.
                        </>
                    ),
                },
                {
                    question: "What type of events can I host on Hiroek?",
                    answer: (
                        <>
                            You can host in-person events, online events,
                            workshops, networking mixers, conferences, seminars
                            and community gatherings. Any event that requires
                            registrations or ticket sales can be managed.
                        </>
                    ),
                },
                {
                    question: "Do I need technical skills to use Hiroek?",
                    answer: (
                        <>
                            No. Hiroek is simple and easy to use. You can
                            publish an event in minutes.
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
                            Sign in to your dashboard → Click “Create Event” →
                            Add details → Set tickets → Publish. Your page is
                            instantly ready to share.
                        </>
                    ),
                },
                {
                    question: "Can I host both online and in-person events?",
                    answer: <>Yes. You can choose the format during setup.</>,
                },
                {
                    question: "Can I customise my event page?",
                    answer: (
                        <>
                            Yes. Add event name, description, date, location,
                            images, ticket options and more to create a
                            professional page.
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
                            Hiroek supports instant withdrawals once ticket
                            sales come in.
                        </>
                    ),
                },
                {
                    question: "Are payments secure?",
                    answer: (
                        <>
                            Yes. All payments are processed through trusted,
                            secure systems.
                        </>
                    ),
                },
            ],
        },
        {
            title: "Attendee Management",
            items: [
                {
                    question: "Can I see who has registered?",
                    answer: (
                        <>
                            Yes. You can view registrations, track sales and see
                            attendee details.
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
                    question: "Can I send updates to attendees?",
                    answer: (
                        <>
                            Yes. Send announcements, reminders and updates
                            directly.
                        </>
                    ),
                },
                {
                    question: "Are notifications automated?",
                    answer: (
                        <>
                            Yes. Registration confirmations and reminders are
                            sent automatically.
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
                    answer: <>Yes. Hiroek offers a free plan to get started.</>,
                },
                {
                    question: "Do you have paid plans?",
                    answer: (
                        <>
                            Yes. Paid plans unlock advanced engagement and
                            marketing tools.
                        </>
                    ),
                },
                {
                    question: "Are there hidden fees?",
                    answer: (
                        <>No. Pricing is transparent with no hidden charges.</>
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
                            info@hiroek.io, or book a demo. We're here to help.
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
                            Yes. Start free and upgrade when you need more
                            features.
                        </>
                    ),
                },
                {
                    question: "Why should I choose Hiroek?",
                    answer: (
                        <>
                            Simple event creation. Easy ticket sales. Clear
                            attendee management. Direct communication. Instant
                            payouts. Everything in one platform.
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
        <section className=" w-full flex flex-col bg-white ">
            <Headsection title="FAQ" img="/images/aboutbg.png" />
            <div className="max-w-4xl mx-auto py-20 px-4 ">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className=" text-3xl lg:text-4xl font-bold text-[#161925]">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-4 text-[#5B5B6B] text-lg">
                        Everything you need to know about using Hiroek.
                    </p>
                </div>

                {faqData.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-12">
                        <h2 className=" text-xl font-semibold text-[#9747FF] mb-6">
                            {section.title}
                        </h2>

                        <div className="space-y-4">
                            {section.items.map((item, index) => {
                                const id = `${sectionIndex}-${index}`;
                                const isOpen = openIndex === id;

                                return (
                                    <div
                                        key={id}
                                        className="bg-white rounded-xl border border-[#E8E7ED] overflow-hidden"
                                    >
                                        <button
                                            onClick={() => toggle(id)}
                                            className="w-full flex justify-between items-center px-6 py-5 text-left"
                                        >
                                            <span className="font-medium text-[#161925]">
                                                {item.question}
                                            </span>
                                            <ChevronDown
                                                className={clsx(
                                                    "transition-transform duration-300",
                                                    isOpen &&
                                                        "rotate-180 text-[#9747FF]",
                                                )}
                                                size={20}
                                            />
                                        </button>

                                        <div
                                            className={clsx(
                                                "px-6 overflow-hidden transition-all duration-300",
                                                isOpen
                                                    ? "max-h-96 pb-6"
                                                    : "max-h-0",
                                            )}
                                        >
                                            <p className="text-[#5B5B6B] leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {/* Bottom CTA */}
                <div className="mt-20 text-center border-t pt-12">
                    <h3 className="text-2xl font-semibold text-[#161925]">
                        Still have questions?
                    </h3>
                    <p className="mt-4 text-[#5B5B6B]">
                        Contact us at{" "}
                        <span className="text-[#9747FF] font-medium">
                            info@hiroek.io
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
