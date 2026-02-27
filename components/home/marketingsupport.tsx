import { CustomButton } from "../custom";
import { Headertext, LandingLayout } from "../layoutcomponents";

export default function CoreIdea() {
    return (
        <LandingLayout reverse={true} img="/hero/three.png">
            <div className=" flex flex-col gap-3 ">
                <Headertext>Need extra marketing support?</Headertext>
            </div>
            <div className=" flex flex-col gap-3 ">
                <p className=" font-axiformamedium ">
                    Go beyond just hosting your event. Access event marketing
                    and audience growth support.
                </p>
            </div>
            <div className=" pt-10 ">
                <CustomButton variant="outline">Learn More</CustomButton>
            </div>
        </LandingLayout>
    );
}
