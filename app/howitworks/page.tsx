"use client";
import { CustomButton } from "@/components/custom";
import { Headertext } from "@/components/layoutcomponents";
import { Headsection } from "@/components/shared";
import { useRouter } from "next/navigation";

export default function HowItWorks() {
    const router = useRouter();
    return (
        <div className=" w-full flex flex-col bg-foreground ">
            <Headsection
                title="PRODUCT TOUR WALKTHROUGH"
                img="/images/aboutbg.png"
            />

            <div className=" w-full flex-col flex items-center gap-10 px-4 py-10 lg:py-20 text-background  ">
                <div className=" w-full max-w-[800px] flex flex-col gap-3 ">
                    <Headertext>Step 1 - Welcome Screen</Headertext>

                    <p className=" font-medium text-lg  ">
                        <span className=" font-bold ">Welcome to Hiroek!</span>
                        <br />
                        Let's take a quick tour of your dashboard.
                        <br />
                        Sign Up / Log-in
                    </p>
                    <Headertext>Step 2 - Create Event</Headertext>
                    <p className=" font-medium text-lg  ">
                        <span className=" font-bold ">
                            Create Your First Event
                        </span>
                        <br />
                        Click the create button on the bottom right to set up an
                        event page in minutes.
                    </p>
                    <Headertext>Step 3 - Tickets & RSVPs</Headertext>
                    <p className=" font-medium text-lg  ">
                        <span className=" font-bold ">
                            Set Up Registrations
                        </span>
                        <br />
                        Add ticket types for your audience.
                    </p>
                    <Headertext>Step 4 - Attendee Management</Headertext>
                    <p className=" font-medium text-lg  ">
                        <span className=" font-bold ">Manage Attendees</span>
                        <br />
                        View and organise everyone who registers for your event.
                    </p>
                    <Headertext>Step 5 - Communication</Headertext>
                    <p className=" font-medium text-lg  ">
                        <span className=" font-bold ">Send Updates</span>
                        <br />
                        Set up a channel, Keep your audience informed with
                        messages and notifications.
                    </p>
                    <Headertext>Step 6 - Payments</Headertext>
                    <p className=" font-medium text-lg  ">
                        <span className=" font-bold ">Get Paid Instantly</span>
                        <br />
                        Track sales and withdraw funds.
                    </p>
                    <Headertext>Step 7 - You're Ready</Headertext>
                    <p className=" font-medium text-lg  ">
                        You're All Set!
                        <br />
                        Start creating and managing better events today.
                    </p>
                    <div className=" w-full flex py-3 ">
                        <CustomButton
                            onClick={() =>
                                router.push("https://partners.hiroek.io/")
                            }
                        >
                            Create Your Event
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
