import { Headertext } from "@/components/layoutcomponents";
import { Headsection } from "@/components/shared";
import { AppleStore, GooglePlay } from "@/components/svg";

export default function Mobile() {
    return (
        <div className=" w-full flex flex-col bg-white ">
            <Headsection title="Stay connected wherever you go" img="/images/aboutbg.png" />

            <div className=" w-full flex-col flex items-center gap-10 px-4 py-10 lg:py-20 text-background  ">
                <div className=" w-full max-w-[800px] flex flex-col lg:text-center gap-3 "> 

                    <p className=" font-medium text-lg  ">
                        Stay connected wherever you go.
                    </p>
                    <p className=" font-medium text-lg  ">
                        With the Hiroek app, attendees can:
                    </p>
                    <p className=" font-medium text-lg  ">
                        Manage tickets easily
                        <br />
                        Receive link for on-line events
                        <br />
                        Receive instant notifications
                        <br />
                        Get event and channel updates
                        <br />
                        Stay connected with organisers.
                    </p>
                    <p className=" font-medium text-lg  ">
                        All from your phone.
                    </p>
                    <p className=" font-medium text-lg  ">
                        Because meaningful connections don’t stop when the event
                        ends.
                    </p>

                    <div className=" flex gap-4 lg:items-center mt-6 justify-center ">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.hiroek.app.hiroek"
                            target="_blank"
                            className=" w-[170px] lg:w-[187.45px] "
                        >
                            <GooglePlay />
                        </a>
                        <a
                            href="https://apps.apple.com/ng/app/hiroek/id6474194083"
                            target="_blank"
                            className=" w-[170px]  lg:w-[187.45px] "
                        >
                            <AppleStore />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
