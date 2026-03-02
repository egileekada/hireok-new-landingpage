import { Headertext, LandingLayout } from "../layoutcomponents";

export default function CoreIdea() {
    return (
        <LandingLayout reverse={true} >
            <div className=" flex flex-col gap-3 ">
                <Headertext>THIS IS THE CORE IDEA</Headertext>
            </div>
            <p className=" lg:text-base text-sm font-black ">
                Events → Relationships → Growth.
            </p>
            <div className=" flex flex-col gap-3 ">
                <p className=" text-[30px] lg:leading-[100%] font-black ">
                    Start in minutes
                </p>
                <div className=" flex flex-col gap-2 lg:text-bold ">
                    <p className=" font-black ">Step 1: <span className=" axiforma-medium font-bold ">Create your event</span></p>
                    <p className=" font-black ">Step 2: <span className=" axiforma-medium font-bold ">Share your event page</span></p>
                    <p className=" font-black ">Step 3: <span className=" axiforma-medium font-bold ">Sell tickets or collect RSVPs</span></p>
                    <p className=" font-black ">Step 4: <span className=" axiforma-medium font-bold ">Send updates and engage attendees</span></p>
                </div>
            </div>
            <p className=" lg:text-base text-sm font-black mt-4 ">
                Everything you need, in one dashboard.
            </p>
        </LandingLayout>
    );
}
