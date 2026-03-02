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
                <div className=" flex flex-col gap-2 axiforma-medium lg:text-bold ">
                    <p>Step 1: Create your event</p>
                    <p>Step 2: Share your event page</p>
                    <p>Step 3: Sell tickets or collect RSVPs</p>
                    <p>Step 4: Send updates and engage attendees</p>
                </div>
            </div>
            <p className=" lg:text-base text-sm font-black mt-4 ">
                Everything you need, in one dashboard.
            </p>
        </LandingLayout>
    );
}
