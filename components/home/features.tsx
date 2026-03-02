import { Headertext, LandingLayout } from "../layoutcomponents";

export default function Features() {
    return (
        <LandingLayout reverse={true} img="/hero/one.png" >
                <div className=" flex flex-col gap-2 ">
                    <Headertext>
                        Everything you need to run and grow your events.
                    </Headertext> 
                    <p className=" axiforma-medium ">
                        Simple, fast, and built for organisers.
                    </p>
                </div>
                {/* <p className=" text-[30px] mt-3 font-black capitalize ">
                    4 Feature Blocks
                </p> */}
                <div className=" flex flex-col mt-3 gap-2 ">
                    <p className=" text-[20px] font-black capitalize ">
                        Create Event Pages
                    </p>
                    <p className=" axiforma-medium ">
                        Launch professional online or in-person events in
                        minutes.
                    </p>
                </div>

                <div className=" flex flex-col gap-2 ">
                    <p className=" text-[20px] font-black capitalize ">
                        Sell Tickets or Collect RSVPs
                    </p>
                    <p className=" axiforma-medium ">
                        Simple registration and secure payments with instant
                        withdrawals.
                    </p>
                </div>
                <div className=" flex flex-col gap-2 ">
                    <p className=" text-[20px] font-black capitalize ">
                        Manage Attendees
                    </p>
                    <p className=" axiforma-medium ">
                        View registrations, track attendance, and stay
                        organised.
                    </p>
                </div>
                <div className=" flex flex-col gap-2 ">
                    <p className=" text-[20px] font-black capitalize ">
                        Communicate Easily
                    </p>
                    <p className=" axiforma-medium ">
                        Send updates, reminders, and announcements from one
                        channel.
                    </p>
                </div> 
        </LandingLayout>
    );
}
