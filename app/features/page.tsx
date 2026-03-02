import { Headertext } from "@/components/layoutcomponents";
import { Headsection } from "@/components/shared";

export default function Features() {
    return (
        <div className=" w-full flex flex-col bg-foreground ">
            <Headsection title="Create Event Pages in Minutes" img="/images/aboutbg.png" />

            <div className=" w-full flex-col flex items-center gap-10 px-4 py-10 lg:py-20 text-background  ">
                <div className=" w-full max-w-[800px] flex flex-col gap-3">
                    {/* <Headertext>Create Event Pages in Minutes</Headertext> */}

                    <p className=" font-medium text-lg  ">
                        Launch your event quickly with easy-to-use tools.
                    </p>
                    <p className=" font-medium text-lg  ">
                        Custom event pages
                        <br />
                        Event descriptions and details
                        <br />
                        Date, time, and location setup
                        <br />
                        Online or in-person event options
                        <br />
                        Simple registration flow
                    </p>
                    <p className=" font-medium text-lg  ">
                        No technical skills required.
                    </p>
                </div>
                <div className=" w-full max-w-[800px] flex flex-col gap-3">
                    <Headertext>Sell Tickets Seamlessly</Headertext>

                    <p className=" font-medium text-lg  ">
                        Start accepting payments instantly.
                        <br />
                        Flexible ticket types
                        <br />
                        Secure online payments
                        <br />
                        Real-time sales tracking
                        <br />
                        Instant cash withdrawals
                        <br />
                        Simple checkout for attendees
                    </p>
                    <p className=" font-medium text-lg  ">
                        Get paid easily and on time.
                    </p>
                </div>
                <div className=" w-full max-w-[800px] flex flex-col gap-3">
                    <Headertext>Manage Your Attendees</Headertext>

                    <p className=" font-medium text-lg  ">
                        Stay organised from start to finish.
                    </p>
                    <p className=" font-medium text-lg  ">
                        Centralised attendee lists
                        <br />
                        Track registrations
                        <br />
                        View participant details
                        <br />
                        Export attendee information
                        <br />
                        Monitor event performance
                    </p>
                    <p className=" font-medium text-lg  ">
                        Know exactly who is coming to your event.
                    </p>
                </div>
                <div className=" w-full max-w-[800px] flex flex-col gap-3">
                    <Headertext>Communicate With Your Audience</Headertext>

                    <p className=" font-medium text-lg  ">
                        Keep attendees informed and engaged.
                    </p>
                    <p className=" font-medium text-lg  ">
                        Set up communication channels
                        <br />
                        Send event updates
                        <br />
                        Share reminders
                        <br />
                        Post important announcements
                        <br />
                        Automated notifications
                    </p>
                    <p className=" font-medium text-lg  ">
                        Never leave your audience in the dark.
                    </p>
                </div>
                <div className=" w-full max-w-[800px] flex flex-col gap-3">
                    <Headertext>Online and In-Person Events</Headertext>
                    <p className=" font-medium text-lg  ">
                        Whether your event is:
                        <br />
                        A networking mixer
                        <br />
                        A workshop
                        <br />
                        A seminar
                        <br />
                        A virtual meetup
                        <br />A community gathering
                    </p>
                    <p className=" font-medium text-lg  ">
                        Hiroek supports it all.
                    </p>
                </div>
            </div>
        </div>
    );
}
