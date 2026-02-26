import { Headertext, LandingLayout } from "../layoutcomponents";

export default function Whoitsfor() {
    return (
        <LandingLayout>
            <Headertext>
                WHO IT'S FOR
            </Headertext>
            <div className=" flex flex-col gap-2 text-[#424242] axiforma-medium ">
                <p className=" ">
                    Perfect for:
                </p>
                <p className=" ">
                    Independent event organisers
                </p>
                <p className=" ">
                    Meetup hosts
                </p>
                <p className=" ">
                    Community leaders
                </p>
                <p className=" ">
                    Workshop facilitators
                </p>
                <p className=" ">
                    Small businesses
                </p>
                <p className=" ">
                    Creators running events
                </p>
                <p className=" mt-3">
                    If you organise events, Hiroek is for you.
                </p>
                <p className=" mt-5">
                    Built with feedback from real event organisers.
                </p>
                <p className=" ">
                    Designed to simplify event planning and improve audience
                    engagement.
                </p>
                <p className="  mt-3 ">
                    Start running smoother, more successful events.
                </p>
            </div>
            {/* <div className=" pt-10 ">
                <GetInTouch
                    tab={2}
                    label="Create Your Event"
                    whitebg={true}
                    activatebtn={true}
                />
            </div> */}
        </LandingLayout>
    );
}
