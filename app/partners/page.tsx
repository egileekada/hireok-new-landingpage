import { CustomButton } from "@/components/custom";
import { Headertext } from "@/components/layoutcomponents";
import { Headsection } from "@/components/shared";

export default function Partner() {
    return (
        <div className=" w-full flex flex-col bg-white ">
            <Headsection title="Build demand. Increase visibility. Sell more tickets." img="/images/aboutbg.png" />

            <div className=" w-full flex-col flex items-center gap-10 px-4 py-10 lg:py-20 text-background  ">
                <div className=" w-full max-w-[800px] flex flex-col lg:text-center gap-3 ">
                    {/* <Headertext>
                        Build demand. Increase visibility. Sell more tickets.
                    </Headertext> */}

                    <p className=" font-medium text-lg  ">
                        Through our partnership with The Strategist & Co., an
                        event and social media agency specialising in sales and
                        marketing,this gives you more than a platform.
                    </p>

                    <p className=" font-medium text-lg  ">
                        Our expert team works with you to help attract the right
                        audience, increase engagement, and drive stronger
                        results.
                    </p>

                    <Headertext>How we help you grow</Headertext>
                    <p className=" font-medium text-lg  ">
                        With tailored support, you'll get:
                    </p>
                    <p className=" font-medium text-lg  ">
                        Event engagement and marketing support to build
                        momentum, drive demand, and expand your reach.
                    </p>
                    <p className=" font-medium text-lg  ">
                        Designed for organisers who want more than a platform
                        and are ready to grow their events strategically.
                    </p>
                    <p className=" font-medium text-lg  ">
                        Software Technology from Hiroek + marketing support from
                        The Strategist & Co. A complete solution for successful
                        events.
                    </p>
                    <div className=" w-full justify-center hidden lg:flex pt-6 gap-5 ">
                        <CustomButton>
                            Discover More About The Partnership
                        </CustomButton>
                        <CustomButton variant="outline">
                            Get Started
                        </CustomButton>
                    </div>
                    <div className=" w-full justify-center flex lg:hidden flex-col pt-6 gap-5 ">
                        <CustomButton fullWidth >
                            Discover More About The Partnership
                        </CustomButton>
                        <CustomButton fullWidth variant="outline">
                            Get Started
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
