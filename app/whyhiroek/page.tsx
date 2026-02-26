import { Headertext } from "@/components/layoutcomponents";
import { Headsection } from "@/components/shared";

export default function WhyHiroek() {
    return (
        <div className=" w-full flex flex-col bg-white ">
            <Headsection title="WHY CHOOSE HIROEK" img="/images/aboutbg.png" />

            <div className=" w-full flex-col flex items-center gap-10 px-4 py-10 lg:py-20 text-background  ">
                <div className=" w-full lg:max-w-[800px] flex flex-col lg:text-center gap-3">
                    <Headertext>
                        Simple. Practical. Built for Organisers.
                    </Headertext>

                    <p className=" font-medium text-lg  ">
                        Hiroek was created for people who plan real events.
                    </p>
                    <p className=" font-medium text-lg  ">
                        We help you:
                        <br />
                        Get your event online fast
                        <br />
                        Sell tickets without stress
                        <br />
                        Manage your audience easily
                        <br />
                        Stay connected before and after the event
                        <br />
                        Plus Sales and marketing support.
                    </p>
                    <p className=" font-medium text-lg  ">
                        No complicated systems.
                    </p>
                    <p className=" font-medium text-lg  ">
                        Just tools that work.
                    </p>
                </div>
            </div>
        </div>
    );
}
