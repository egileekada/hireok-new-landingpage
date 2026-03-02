"use client";
import { Headsection } from "@/components/shared";
import { textLimit } from "@/helper/utils/textlimit";
import { useState } from "react";

export default function Blogs() {


    const [showMore, setShowMore] = useState<number | null>(null);

    const blogContent = [
        {
            id: 1,
            title: "Make Your Event Benefits Clear",
            description: `People dont buy tickets because of features - they buy because of value. Focus your event description on what attendees will gain.`,
        },
        {
            id: 2,
            title: "Create Urgency",
            description: `Use early bird pricing, limited-time discounts, or bonuses to encourage faster decisions.`,
        },
        {
            id: 3,
            title: "Use Social Proof",
            description: `Share testimonials, past photos, and success stories to build trust.`,
        },
        {
            id: 4,
            title: "Partner with Influencers or Organisations",
            description: `Let others help spread the word to new audiences.`,
        },
        {
            id: 5,
            title: "Follow Up Consistently",
            description: `Most people need multiple reminders before they take action.`,
        },
        {
            id: 6,
            title: "Follow Up Consistently",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
    ];

    return (
        <section className=" w-full flex flex-col bg-foreground ">
            <Headsection
                title="Welcome to our resource hub for event organisers and planners."
                img="/images/aboutbg.png"
            />
            <div className="max-w-3xl mx-auto py-20 lg:px-0 px-4 ">
                {/* Header */}
                <div className="mb-16 ">
                    <p className="mt-6 text-lg text-[#5B5B6B] leading-relaxed">
                        Here you will find practical tips, strategies, and
                        real-world advice to help you plan, promote, and run
                        better events. Whether you’re hosting a small workshop
                        or a large conference, our goal is to help you:
                    </p>
                </div>

                {/* Bullet Section */}
                <div className="mb-16 space-y-4 text-[#2A2A35] text-lg leading-relaxed">
                    <p>• Promote your event effectively</p>
                    <p>• Increase ticket sales</p>
                    <p>• Engage attendees</p>
                    <p>• Run smoother, more successful experiences</p>
                </div>

                {/* Article */}
                <article className="border-t border-[#E8E7ED] pt-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#161925] leading-tight">
                        5 Simple Ways to Increase Ticket Sales for Your Next
                        Event
                    </h2>

                    <p className="mt-6 text-lg text-[#5B5B6B] leading-relaxed">
                        Selling tickets can be one of the most challenging parts
                        of running an event. If registrations are slower than
                        expected, don't panic. Here are five practical
                        strategies you can use right away to boost sales.
                    </p>

                    <div className="mt-10 space-y-10 text-[#2A2A35] leading-relaxed text-lg">
                        {blogContent.map((item) => (
                            <div key={item.id} className=" w-full justify-between flex lg:flex-row flex-col-reverse gap-4 border-b border-[#E8E7ED] pb-4 ">
                                <div >
                                    <h3 className="font-bold text-xl mb-2">
                                        {item.id}. {item.title}
                                    </h3>
                                    <p className=" text-sm text-gray-400 " >{textLimit(item.description, item?.id === showMore ? item?.description.length : 300)} 
                                        {item?.description.length > 300 && (
                                            <span className=" font-bold text-background cursor-pointer " onClick={() => setShowMore(item?.id === showMore ? null : item?.id)}>{item?.id === showMore ? "see less" : "see more"}</span>
                                        )}
                                    </p>
                                </div>
                                <div className=" w-full lg:w-fit ">
                                    <div className=" w-full lg:w-[200px] h-[200px] rounded-2xl " />
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-12 text-lg text-[#5B5B6B] leading-relaxed">
                        By applying these simple tactics, you can turn more
                        interest into actual registrations.
                    </p>
                </article>
            </div>
        </section>
    );
}
