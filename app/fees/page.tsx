import { CustomButton } from "@/components/custom";
import HeaderText from "@/components/layoutcomponents/headertext";
import { Headsection } from "@/components/shared";

export default function Fee() {
    return (
        <div className=" w-full flex flex-col bg-white ">
            <Headsection title="Simple Plans for Organisers" img="/images/aboutbg.png" />

            <div className=" w-full flex-col flex items-center gap-10 px-4 py-10 lg:py-20 text-background  ">
                <div className=" w-full max-w-[800px] flex flex-col gap-3 ">
                    {/* <HeaderText>Simple Plans for Organisers</HeaderText> */}

                    <p className=" font-bold text-xl  ">
                        Hiroek is Free to Use!
                    </p>

                    <p className=" font-medium text-lg  ">
                        Yes, you read that right .
                        <span className=" font-bold ">Zero platform fees</span>.
                        Create events and join experiences without worrying
                        about hidden charges or extra costs.
                    </p>
                </div>
                <div className=" w-full max-w-[800px] flex flex-col gap-3 ">
                    <HeaderText>Sell Globally. Get Paid Securely.</HeaderText>

                    <p className=" font-medium text-lg  ">
                        With Hiroek, you can sell tickets and accept payments
                        from attendees anywhere in the world. No complicated
                        setup. No technical headaches. Just plug in and start
                        selling.
                    </p>
                </div>
                <div className=" w-full max-w-[800px] flex flex-col gap-3 ">
                    <HeaderText>What Happens When You Sell a Ticket</HeaderText>

                    <p className=" font-medium text-lg  ">
                        Selling tickets on Hiroek is quick, simple, and secure.
                        We've partnered with{" "}
                        <span className=" font-bold ">Stripe</span> to process
                        all payments safely and efficiently.
                    </p>
                    <p className=" font-medium text-lg  ">
                        When a ticket is sold, only small processing fees apply:
                    </p>
                    <p className=" font-medium text-lg  ">
                        <span className=" font-bold ">Stripe Fee:</span> 1.5% +
                        £0.20 per transaction
                    </p>
                    <p className=" font-medium text-lg  ">
                        <span className=" font-bold ">Hiroek Fee:</span> £0.60
                        per ticket
                    </p>
                    <p className=" font-medium text-lg  ">
                        That's it,{" "}
                        <span className=" font-bold ">no hidden costs</span> .
                        Just a smooth and transparent experience from checkout
                        to confirmation.
                    </p>
                </div>
                <div className=" w-full max-w-[800px] flex flex-col gap-3 ">
                    <HeaderText>Multi-Currency Support</HeaderText>

                    <p className=" font-medium text-lg  ">
                        We support multiple currencies, and fees may vary
                        slightly depending on the currency you choose.
                    </p>
                </div>
                <div className=" w-full max-w-[800px] flex flex-col gap-3 ">
                    <HeaderText>
                        Unlock Expert Support to Grow Your Events
                    </HeaderText>

                    <p className=" font-medium text-lg  ">
                        We offer tailored, hands-on support to help elevate your
                        event and maximise results.
                    </p>
                    <p className=" font-medium text-lg  ">
                        Our support service include:
                    </p>
                    <p className=" font-black text-xl  ">
                        Event Engagement Support
                    </p>
                    <p className=" font-medium text-lg  ">
                        Build demand. Drive action. Sell more tickets. Increase
                        attendee interaction.
                    </p>
                </div>
                <div className=" w-full max-w-[800px] flex flex-col gap-3 "> 
                    <p className=" font-medium text-lg  ">
                        Try it now and upgrade the way you sell tickets.
                    </p>
                    <p className=" font-medium text-lg  ">
                        This service is available upon request and subject to
                        additional fees.
                    </p>
                    <div className=" w-full flex justify-center py-3 ">
                        <CustomButton variant="outline">
                            Get Expert Support
                        </CustomButton>
                    </div>
                    <p className=" font-medium text-lg  ">
                        Ready to Run a Better Event?
                        <br />
                        Stop juggling tools.
                        <br />
                        Start using one platform that does it all.
                        <br />
                    </p>
                    <div className=" w-full flex justify-center py-3 ">
                        <CustomButton variant="outline">
                            Create Your First Event
                        </CustomButton>
                    </div>
                </div>
                {/* 
  
Try it now and upgrade the way you sell tickets. 

This service is available upon request and subject to additional fees.

[Get Expert Support]

Ready to Run a Better Event?
Stop juggling tools.
Start using one platform that does it all.

[Create Your First Event] */}
            </div>
        </div>
    );
}
