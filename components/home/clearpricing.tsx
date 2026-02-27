import { CustomButton } from "../custom";
import { Headertext, LandingLayout } from "../layoutcomponents";

export default function Clearpricing() {
    return (
        <LandingLayout >
            <Headertext>CLEAR PRICING PROMISE</Headertext>
            <div className=" flex flex-col gap-2 mt-4 axiforma-medium text-[#424242] ">
                <p>Start Free.</p>
                <p>No hidden fees.</p>
                <p>No complicated plans.</p>
                <p>Just simple pricing for organisers.</p>
            </div>
            <div className=" pt-20 ">
                <CustomButton>View Fee</CustomButton>
            </div>
        </LandingLayout>
    );
}
