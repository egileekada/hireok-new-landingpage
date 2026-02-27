import { CustomButton } from "@/components/custom";
import { Headertext } from "@/components/layoutcomponents";
import { Headsection } from "@/components/shared";

export default function Support() {
    return (
        <div className=" w-full flex flex-col bg-foreground ">
            <Headsection title="Help When you need it most" img="/images/aboutbg.png" />

            <div className=" w-full flex-col flex items-center gap-10 px-4 py-10 lg:py-20 text-background  ">
                <div className=" w-full max-w-[800px] flex flex-col lg:text-center gap-3  ">
                    <Headertext>Help When You Need It</Headertext> 

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
                    <div className=" w-full justify-center hidden lg:flex pt-6 gap-5 ">
                        <CustomButton>Visit Help Center</CustomButton>
                        <CustomButton variant="outline">
                            Book a Demo
                        </CustomButton>
                    </div>
                    <div className=" w-full justify-center lg:hidden flex-col flex pt-6 gap-3 ">
                        <CustomButton fullWidth >Visit Help Center</CustomButton>
                        <CustomButton fullWidth variant="outline">
                            Book a Demo
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
