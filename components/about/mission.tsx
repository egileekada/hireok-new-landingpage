import HeaderText from "../layoutcomponents/headertext";

export default function MissionAndStory() {
    return (
        <div className=" w-full flex-col flex items-center gap-10 px-6 py-20 text-background  ">
            <div className=" w-full flex flex-col items-center gap-3 px-6">
                <HeaderText>Our Story</HeaderText>
                <p className=" font-medium text-lg lg:max-w-[800px] text-center ">
                    Hiroek was shaped by real conversations with event
                    organisers.
                    <br />
                    We kept hearing the same thing:
                    <br />
                    “Great events create relationships but most platforms only
                    track sales.”
                    <br />
                    So we built Hiroek to be different.
                    <br />
                    A platform that doesn't just help you sell tickets, but
                    helps you manage your audience and stay connected.
                    <br />
                    “Hiroek helps you turn events into lasting relationships.”
                </p>
            </div>
            <div className=" w-full flex flex-col gap-3 text-center items-center  ">
                <HeaderText>Our Mission</HeaderText>
                <p className=" font-medium text-lg lg:max-w-[800px] text-center ">
                    To help event organisers run successful events and build
                    meaningful relationships with their audience using simple,
                    reliable technology.
                </p>
            </div>
        </div>
    );
}
