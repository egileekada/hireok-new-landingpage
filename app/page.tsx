import {
    BetterEvent,
    Clearpricing,
    Coreidea,
    Features,
    HeroSection,
    Marketingsupport,
    Organisers,
    Plaformticket,
    Testimonials,
    Whoitsfor,
} from "@/components/home";

export default function Home() {
    return (
        <div className=" w-full flex-col flex ">
            <HeroSection />
            <Organisers />
            <Features />
            <Plaformticket />
            <Coreidea />
            <Whoitsfor />
            <Testimonials />
            <Marketingsupport />
            <Clearpricing />
            <BetterEvent />
        </div>
    );
}
