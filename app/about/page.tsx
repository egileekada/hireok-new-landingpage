
import HeaderText from "@/components/layoutcomponents/headertext";
import { Headsection } from "@/components/shared";

export default function About() {
    return (
        <div className=" w-full flex flex-col bg-foreground ">
            <Headsection title="ABOUT HIROEK" img="/images/aboutbg.png" />

            <div className=" w-full flex-col flex items-center gap-10 px-4 py-10 lg:py-20 text-background  ">
                <div className=" w-full lg:max-w-[800px] flex flex-col lg:items-center gap-3 ">
                    <HeaderText>Our Story</HeaderText>
                    <p className=" font-medium text-lg lg:text-center ">
                        Hiroek was shaped by real conversations with event
                        organisers.
                        <br />
                        We kept hearing the same thing:
                        <br />
                        “Great events create relationships but most platforms
                        only track sales.”
                        <br />
                        So we built Hiroek to be different.
                        <br />
                        A platform that doesn't just help you sell tickets, but
                        helps you manage your audience and stay connected.
                        <br />
                        “Hiroek helps you turn events into lasting
                        relationships.”
                    </p>
                </div>
                <div className=" w-full lg:max-w-[800px] flex flex-col gap-3 lg:text-center lg:items-center  ">
                    <HeaderText>Our Mission</HeaderText>
                    <p className=" font-medium text-lg lg:text-center ">
                        To help event organisers run successful events and build
                        meaningful relationships with their audience using
                        simple, reliable technology.
                    </p>
                </div>
            </div>
        </div>
    );
}
