import { BetterEvent, Clearpricing, Coreidea, Features, HeroSection, Marketingsupport, Organisers, Plaformticket, Whoitsfor } from "@/components/home"; 

export default function Home() {
    return (
        <div className=" w-full flex-col flex " >
            <HeroSection />
            <Organisers />
            <Features />
            <Plaformticket />
            <Coreidea />
            <Whoitsfor />
            <Marketingsupport />
            <Clearpricing />
            <BetterEvent />
        </div>
    );
}
