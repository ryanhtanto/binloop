import CountdownBanner from "../components/CountdownBanner";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Logo from "../components/Logo";
import RunningCategoryCard from "../components/RunningCategoryCard";
import DarkSection from "../components/section/DarkSection";
import Typography from "../components/typography/Typography";
import { useLanguage } from "../context/LanguageContext";

function Home() {
    return (
        <>
            <DarkSection>
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="max-w-7xl mx-auto px-6 py-20">
                            <div className="flex">
                                <Typography variant="h1" color="white" className="tracking-[0.15em]">
                                    Ca
                                </Typography>
                                <Typography variant="h1" color="pink" className="tracking-[0.15em]">
                                    n
                                </Typography>
                            </div>
                            <div className="flex">
                                <Typography variant="h1" color="white" className="tracking-[0.15em]">
                                    Y
                                </Typography>
                                <Typography variant="h1" color="pink" className="tracking-[0.15em]">
                                    ou
                                </Typography>
                            </div>
                            <div className="flex gap-4">
                                <Typography variant="h1" color="pink" className="tracking-[0.15em]">
                                    Handle
                                </Typography>
                                <Typography variant="h1" color="white" className="tracking-[0.15em]">
                                    IT
                                </Typography>
                            </div>
                            <Logo />
                        </div>
                        

                        <div className="flex justify-center md:justify-end">
                            <RunningCategoryCard />
                        </div>
                    </div>
                </div>

                <CountdownBanner targetDate="2027-05-07T00:00:00">
                    <div className="text-center">
                        <div className="flex flex-col gap-2">
                            <Typography variant="h5" color="white" className="tracking-[0.25em]">
                                KEBAYORAN SQUARE, BINTARO
                            </Typography>

                            <Typography variant="tagline" color="dark" className="font-bold">
                                REGISTER HERE
                            </Typography>
                        </div>
                    </div>
                </CountdownBanner>
            </DarkSection>

        </>
    );
}

export default Home;
