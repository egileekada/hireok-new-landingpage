import { Headertext, LandingLayout } from "../layoutcomponents"; 

export default function Organisers() {
    return (
        <LandingLayout first img="/hero/four.png" >
            <Headertext>
                Most organisers start from zero every time.
            </Headertext>
            <div className=" flex flex-col gap-2 mt-2 axiforma-medium  ">
                <p className=" text-[#424242] ">
                    Right now, you juggle:
                </p>
                <p className=" text-[#424242] ">
                    Managing registrations
                </p>
                <p className=" text-[#424242] ">
                    Tracking attendees
                </p>
                <p className=" text-[#424242] ">
                    Selling tickets
                </p>
                <p className=" text-[#424242] ">
                    Sending updates
                </p>
                <p className=" text-[#424242] ">
                    Keeping audiences engaged
                </p>
            </div>
            <p className=" text-[#424242] axiforma-medium ">
                And when the event ends, the connection often disappears.
            </p>
            <p className=" text-[#424242] axiforma-medium ">
                Hiroek keeps everything and everyone connected in one place.
            </p>
        </LandingLayout>
    );
}
