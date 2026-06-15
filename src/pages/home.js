import CountdownBanner from "../components/CountdownBanner";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Logo from "../components/Logo";
import RunningCategoryCard from "../components/RunningCategoryCard";
import RunningCategoryDetail from "../components/RunningCategoryDetail";
import DarkSection from "../components/section/DarkSection";
import PinkSection from "../components/section/PinkComponent";
import Sponsors from "../components/Sponsors";
import Typography from "../components/typography/Typography";
import { useLanguage } from "../context/LanguageContext";

function Home() {
    const { t } = useLanguage();
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
                <section className="relative overflow-hidden py-24 px-6">

                    {/* Pink Glow Background */}
                    <div
                        className="
                            absolute
                            top-1/2
                            left-1/2
                            -translate-x-1/2
                            -translate-y-1/2
                            w-[700px]
                            h-[700px]
                            bg-[#d82370]/10
                            blur-[200px]
                            rounded-full
                        "
                    />

                    <div className="relative max-w-7xl mx-auto">

                        {/* Header */}
                        <div className="mb-16">

                            <p
                                className="
                                    text-[#d82370]
                                    uppercase
                                    tracking-[0.35em]
                                    text-sm
                                    font-bold
                                    mb-4
                                "
                            >
                                {t.aboutRace.label}
                            </p>

                            <Typography
                                variant="display"
                                color="white"
                                className="uppercase"
                            >
                                THE BINLOOP
                            </Typography>

                            <Typography
                                variant="display"
                                color="pink"
                                className="uppercase"
                            >
                                ULTRA X
                            </Typography>

                        </div>


                        {/* Main Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">


                            {/* Left Side - Story */}
                            <div className="space-y-6">

                                <Typography
                                    variant="body"
                                    color="white"
                                    className="opacity-80"
                                >
                                    {t.aboutRace.desc1}
                                </Typography>


                                <Typography
                                    variant="body"
                                    color="white"
                                    className="opacity-80"
                                >
                                    {t.aboutRace.desc2}
                                </Typography>


                                <Typography
                                    variant="body"
                                    color="white"
                                    className="opacity-80"
                                >
                                    {t.aboutRace.desc3Before}{" "}

                                    <span className="text-[#d82370] font-bold">
                                        {t.aboutRace.desc3Highlight}
                                    </span>{" "}

                                    {t.aboutRace.desc3After}
                                </Typography>


                                <Typography
                                    variant="body"
                                    color="white"
                                    className="opacity-80"
                                >
                                    {t.aboutRace.desc4}
                                </Typography>

                            </div>


                            {/* Right Side - Highlight Cards */}
                            <div className="grid grid-cols-2 gap-6">
                                {/* 5 Categories */}
                                <div
                                    data-aos="fade-left"
                                    data-aos-delay="100"
                                    className="
                                        rounded-2xl
                                        p-8
                                        bg-[#d82370]/10
                                        border border-[#d82370]/40
                                        backdrop-blur-sm
                                        shadow-[0_0_30px_rgba(216,35,112,0.25)]
                                    "
                                >
                                    <h3 className="text-5xl font-black text-[#d82370]">
                                        5
                                    </h3>

                                    <p className="text-white uppercase tracking-[0.2em] mt-3">
                                        {t.aboutRace.cards.categories}
                                    </p>
                                </div>


                                {/* 2 Flyovers */}
                                <div
                                    data-aos="fade-left"
                                    data-aos-delay="250"
                                    className="
                                        rounded-2xl
                                        p-8
                                        bg-white/5
                                        border border-white/15
                                    "
                                >
                                    <h3 className="text-5xl font-black text-white">
                                        2
                                    </h3>

                                    <p className="text-white/70 uppercase tracking-[0.2em] mt-3">
                                        {t.aboutRace.cards.flyovers}
                                    </p>
                                </div>


                                {/* 12KM Loop */}
                                <div
                                    data-aos="fade-left"
                                    data-aos-delay="400"
                                    className="
                                        rounded-2xl
                                        p-8
                                        bg-white/5
                                        border border-white/15
                                    "
                                >
                                    <h3 className="text-5xl font-black text-white">
                                        12KM
                                    </h3>

                                    <p className="text-white/70 uppercase tracking-[0.2em] mt-3">
                                        {t.aboutRace.cards.eachLoop}
                                    </p>
                                </div>


                                {/* Location */}
                                <div
                                    data-aos="fade-left"
                                    data-aos-delay="550"
                                    className="
                                        rounded-2xl
                                        p-8
                                        bg-white/5
                                        border border-white/15
                                    "
                                >
                                    <h3 className="text-3xl font-black text-white">
                                        BINTARO
                                    </h3>

                                    <p className="text-white/70 uppercase tracking-[0.2em] mt-3">
                                        {t.aboutRace.cards.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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

            <Sponsors />
        </>
    );
}

export default Home;
