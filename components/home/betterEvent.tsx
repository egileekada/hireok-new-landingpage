import { CustomButton } from "../custom";
import { Headertext, LandingLayout } from "../layoutcomponents";

export default function BetterEvent() {
    return (
        <LandingLayout reverse={true} >
            <div className=" flex flex-col gap-3 ">
                <Headertext>Ready to Host Better Events?</Headertext>
            </div>
            <div className=" flex flex-col gap-3 ">
                <div className=" flex flex-col gap-2 axiforma-medium ">
                    <p>Stop starting from zero every event.</p>
                    <p>
                        Create, manage, and grow your events from one simple
                        platform.
                    </p>
                    <p>Start with Hiroek today.</p>
                </div>
            </div>
            <div className=" pt-10 ">
                <CustomButton variant="outline">Create Your Event</CustomButton>
            </div>
        </LandingLayout>
    );
}
