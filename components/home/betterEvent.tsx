"use client";
import { useRouter } from "next/navigation";
import { CustomButton } from "../custom";
import { Headertext, LandingLayout } from "../layoutcomponents";

export default function BetterEvent() {
    const router = useRouter();
    return (
        <LandingLayout reverse={true}>
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
                </div>
                <p className=" font-black text-xl ">Start with Hiroek today.</p>
            </div>
            <div className=" pt-10 ">
                <CustomButton
                    onClick={() => router.push("https://partners.hiroek.io/")}
                    variant="outline"
                >
                    Create Your Event
                </CustomButton>
            </div>
        </LandingLayout>
    );
}
