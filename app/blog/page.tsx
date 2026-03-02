import { CustomButton } from "@/components/custom";
import { Headsection } from "@/components/shared";

export default function Blogs() {
    return (
        <section className=" w-full flex flex-col bg-foreground ">
            <Headsection title="BLOG / RESOURCES" img="/images/aboutbg.png" />
            <div className="max-w-3xl mx-auto py-20 ">
                {/* Header */}
                <div className="mb-16 "> 
                    <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#161925] leading-tight">
                        Welcome to our resource hub for event organisers and
                        planners.
                    </h1>
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

                {/* CTA */}
                <div className="mb-20">
                    <CustomButton>Read the Blog</CustomButton>
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
                        expected, don’t panic. Here are five practical
                        strategies you can use right away to boost sales.
                    </p>

                    <div className="mt-10 space-y-10 text-[#2A2A35] leading-relaxed text-lg">
                        <div>
                            <h3 className="font-semibold text-xl mb-2">
                                1. Make Your Event Benefits Clear
                            </h3>
                            <p>
                                People don’t buy tickets because of features –
                                they buy because of value. Focus your event
                                description on what attendees will gain.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl mb-2">
                                2. Create Urgency
                            </h3>
                            <p>
                                Use early bird pricing, limited-time discounts,
                                or bonuses to encourage faster decisions.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl mb-2">
                                3. Use Social Proof
                            </h3>
                            <p>
                                Share testimonials, past photos, and success
                                stories to build trust.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl mb-2">
                                4. Partner with Influencers or Organisations
                            </h3>
                            <p>
                                Let others help spread the word to new
                                audiences.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl mb-2">
                                5. Follow Up Consistently
                            </h3>
                            <p>
                                Most people need multiple reminders before they
                                take action.
                            </p>
                        </div>
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
