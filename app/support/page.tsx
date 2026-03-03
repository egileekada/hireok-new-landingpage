import { CustomButton } from "@/components/custom";
import { Headertext } from "@/components/layoutcomponents";
import { GetInTouch, Headsection } from "@/components/shared";

export default function Support() {
    return (
        <div className=" w-full flex flex-col bg-foreground ">
            <Headsection
                title="Help When you need it most"
                img="/images/aboutbg.png"
            />

            <div className=" w-full flex-col flex items-center gap-10 px-4 py-10 lg:py-20 text-background  ">
                <div className=" w-full max-w-[800px] flex flex-col gap-3  ">
                    <p className=" font-medium text-lg  ">
                        We support organisers at every step:
                        <br />
                        Easy onboarding
                        <br />
                        Knowledge base
                        <br />
                        Email support
                        <br />
                        Event setup guidance
                    </p>
                    <div className=" w-full pt-6 gap-5 ">
                        <GetInTouch /> 
                    </div> 
                </div>
            </div>
        </div>
    );
}
