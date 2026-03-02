import HeaderText from "@/components/layoutcomponents/headertext";
import { Headsection } from "@/components/shared";

export default function About() {
    return (
        <div className=" w-full flex flex-col bg-foreground ">
            <Headsection
                title="More about the partnership"
                img="/images/aboutbg.png"
            />

            <div className=" w-full flex-col flex items-center gap-10 px-4 py-10 lg:py-20 text-background  ">
                <div className=" w-full lg:max-w-[800px] flex flex-col gap-3 ">
                    <p className=" font-medium text-lg ">
                        We're excited to announce this strategic partnership
                        between Hiroek and The Strategist & Co.
                        <br />
                        <br />
                        This collaboration brings together two mission-driven
                        brands with a shared goal: to help event creators
                        succeed not just by giving them tools, but by providing
                        real, hands-on support.
                        <br />
                        <br />
                        Hiroek delivers a powerful, easy-to-use platform for
                        managing events, selling tickets, and engaging
                        audiences.
                        <br />
                        The Strategist & Co. brings proven expertise in event
                        promotion, marketing strategy, audience growth, and
                        sales execution.
                        <br />
                        <br />
                        Together, we're creating something far more valuable
                        than software alone. A complete ecosystem that helps
                        organisers plan smarter, market better, and grow faster.
                        <br />
                    </p>
                    <p className=" font-medium text-lg ">
                        For event creators, this means:
                    </p>
                    <ul className=" list-disc font-medium text-lg  pl-8 " >
                        <li>Professional marketing support</li>
                        <li>Strategic guidance</li>
                        <li>Better audience reach</li>
                        <li>Stronger event performance</li>
                        <li>A seamless platform to manage it all</li>
                    </ul>
                    <p className=" font-medium text-lg ">
                        This partnership reflects a shared belief that
                        successful events require more than technology. They
                        require insight, strategy, and execution.
                        <br />
                        <br />
                        We're proud to take this next step together and look
                        forward to supporting creators, brands, and communities
                        on a bigger scale.
                        <br />
                        <br />
                        This is just the beginning.
                    </p>
                </div>
            </div>
        </div>
    );
}
