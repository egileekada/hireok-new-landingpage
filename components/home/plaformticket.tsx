import { Headertext, LandingLayout } from "../layoutcomponents";

export default function PlatformTicket() {
    return (
        <LandingLayout img="/hero/eight.png" >
            <Headertext>
                Most event platforms stop at ticket sales.
            </Headertext>
            <div className=" flex flex-col gap-4 axiforma-medium ">
                <p className=" text-[#424242] font-axiformamedium ">
                    Hiroek helps organisers build lasting relationships by
                    keeping audiences connected before, during, and after every
                    event.
                </p>
                <p className=" text-[#424242] font-axiformamedium ">
                    Your next event starts with the audience you already built.
                </p>
            </div>
        </LandingLayout>
    );
}
