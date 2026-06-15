import CountdownBanner from "../components/CountdownBanner";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Logo from "../components/Logo";
import RunningCategoryCard from "../components/RunningCategoryCard";
import RunningCategoryDetail from "../components/RunningCategoryDetail";
import DarkSection from "../components/section/DarkSection";
import PinkSection from "../components/section/PinkComponent";
import Typography from "../components/typography/Typography";
import { useLanguage } from "../context/LanguageContext";

function Home() {
    return (
        <>
            <DarkSection>
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
                            <div className="flex flex-wrap">
                                <Typography variant="h1" color="white" className="tracking-[0.15em]">
                                    Ca
                                </Typography>
                                <Typography variant="h1" color="pink" className="tracking-[0.15em]">
                                    n
                                </Typography>
                            </div>
                            <div className="flex flex-wrap">
                                <Typography variant="h1" color="white" className="tracking-[0.15em]">
                                    Y
                                </Typography>
                                <Typography variant="h1" color="pink" className="tracking-[0.15em]">
                                    ou
                                </Typography>
                            </div>
                            <div className="flex flex-wrap gap-2 sm:gap-4">
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

            <DarkSection>
                <div className="max-w-7xl mx-auto px-6 py-20 ">
                    <RunningCategoryDetail
                        image="/images-2/run2.jpg"
                        category="200K"
                        description="
                            Start Friday Night
                        "
                        loops="16"
                        cutOff="40H"
                        earlyBirdPrice="Rp 1.200K"
                        earlyBirdDate="Until 31 Dec 2026"
                        earlyBirdLink="https://register.binloopultra.com/200k-early"
                        normalPrice="Rp 1.500K"
                        normalLink="https://register.binloopultra.com/200k-normal"
                        reverse={false}
                    />
                    <RunningCategoryDetail
                        image="/images-2/run1.jpg"
                        category="120K"
                        description="
                            Start Saturday Noon
                        "
                        loops="15"
                        cutOff="22H"
                        earlyBirdPrice="Rp 1.200K"
                        earlyBirdDate="Until 31 Dec 2026"
                        earlyBirdLink="https://register.binloopultra.com/200k-early"
                        normalPrice="Rp 1.500K"
                        normalLink="https://register.binloopultra.com/200k-normal"
                        reverse={true}
                    />
                    <RunningCategoryDetail
                        image="/images-2/run3.jpg"
                        category="60K"
                        description="
                            Start Saturday Noon
                        "
                        loops="5"
                        cutOff="10H"
                        earlyBirdPrice="Rp 1.200K"
                        earlyBirdDate="Until 31 Dec 2026"
                        earlyBirdLink="https://register.binloopultra.com/200k-early"
                        normalPrice="Rp 1.500K"
                        normalLink="https://register.binloopultra.com/200k-normal"
                        reverse={false}
                    />
                    <RunningCategoryDetail
                        image="/images-2/run4.jpg"
                        category="XTRA MILE"
                        description="
                            Min. 14 Loops for Medal. Start Friday Night
                        "
                        loops="14+"
                        cutOff="40H"
                        earlyBirdPrice="Rp 1.200K"
                        earlyBirdDate="Until 31 Dec 2026"
                        earlyBirdLink="https://register.binloopultra.com/200k-early"
                        normalPrice="Rp 1.500K"
                        normalLink="https://register.binloopultra.com/200k-normal"
                        reverse={true}
                    />
                    <RunningCategoryDetail
                        image="/images-2/run5.jpg"
                        category="12K"
                        description="
                            Start Saturday Noon/Night/Monday Morning
                        "
                        loops="1"
                        cutOff="3H"
                        earlyBirdPrice="Rp 1.200K"
                        earlyBirdDate="Until 31 Dec 2026"
                        earlyBirdLink="https://register.binloopultra.com/200k-early"
                        normalPrice="Rp 1.500K"
                        normalLink="https://register.binloopultra.com/200k-normal"
                        reverse={false}
                    />
                    <RunningCategoryDetail
                        image="/images-2/run6.jpg"
                        category="RELAY"
                        description="
                            Start Saturday Noon. Min 1 Female. 5 x 1 Loop
                        "
                        loops="5"
                        cutOff="10H"
                        earlyBirdPrice="Rp 1.200K"
                        earlyBirdDate="Until 31 Dec 2026"
                        earlyBirdLink="https://register.binloopultra.com/200k-early"
                        normalPrice="Rp 1.500K"
                        normalLink="https://register.binloopultra.com/200k-normal"
                        reverse={true}
                    />
                </div>
            </DarkSection>
        </>
    );
}

export default Home;
