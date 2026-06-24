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
                    <div
                        className="
                            relative
                            flex
                            flex-col
                            items-center
                            justify-center
                            min-h-[80vh]
                            text-center
                            overflow-hidden
                        "
                    >
                        {/* Content */}
                        <div
                            className="flex flex-col items-center gap-8"
                            data-aos="zoom-in"
                        >
                            <img
                                src="/new/canyou.png"
                                alt="Can You Handle It"
                                className="
                                    w-full
                                    max-w-[450px]
                                    md:max-w-[650px]
                                    h-auto
                                    object-contain
                                "
                            />

                            <img
                                src="/new/binloopLogo.png"
                                alt="Binloop Ultra X"
                                className="
                                    w-full
                                    max-w-[300px]
                                    md:max-w-[450px]
                                    h-auto
                                    object-contain
                                "
                            />
                        </div>

                        <div className="mt-10">
                            <p
                                className="
                                    text-[#d82370]
                                    uppercase
                                    tracking-[0.4em]
                                    text-sm
                                    md:text-base
                                    font-bold
                                "
                            >
                                7–9 MAY 2027
                            </p>

                            <p
                                className="
                                    mt-3
                                    text-white/70
                                    uppercase
                                    tracking-[0.25em]
                                    text-xs
                                    md:text-sm
                                "
                            >
                                Bintaro Loop • South Tangerang
                            </p>
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
                <section className="relative overflow-hidden px-6">

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
                            <img
                                src="/new/binloopLogo.png"
                                alt="Binloop Ultra X"
                                className="
                                    w-full
                                    max-w-[400px]
                                    md:max-w-[550px]
                                    h-auto
                                    object-contain
                                "
                            />
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
                            <div
                                data-aos="fade-left"
                                data-aos-delay="300"
                                className="flex justify-center items-center"
                            >
                                <img
                                src="/new/catText.png"
                                alt="Category Text"
                                className="
                                    w-full
                                    h-auto
                                    object-contain
                                "
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </DarkSection>

            <DarkSection>
                <div className="max-w-7xl mx-auto px-6 py-20 ">
                    <RunningCategoryDetail
                        image="/images-2/run4.jpg"
                        category="XTRA MILE"
                        description="
                            Min. 14 Loops for Medal. Start Friday Night
                        "
                        loops="14+"
                        categoryLogo="/new/xtra.jpeg"
                        cutOff="40H"
                        earlyBirdPrice="Rp 1.200K"
                        earlyBirdDate="Until 31 Dec 2026"
                        earlyBirdLink="https://register.binloopultra.com/200k-early"
                        normalPrice="Rp 1.500K"
                        normalLink="https://register.binloopultra.com/200k-normal"
                        reverse={true}
                    />
                    <RunningCategoryDetail
                        image="/images-2/run2.jpg"
                        category="200K"
                        categoryLogo="/new/duaratus.jpeg"
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
                        categoryLogo="/new/duaratus.jpeg"
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
                        categoryLogo="/new/duaratus.jpeg"
                        cutOff="10H"
                        earlyBirdPrice="Rp 1.200K"
                        earlyBirdDate="Until 31 Dec 2026"
                        earlyBirdLink="https://register.binloopultra.com/200k-early"
                        normalPrice="Rp 1.500K"
                        normalLink="https://register.binloopultra.com/200k-normal"
                        reverse={false}
                    />
                    <RunningCategoryDetail
                        image="/images-2/run5.jpg"
                        category="12K"
                        description="
                            Start Saturday Noon/Night/Monday Morning
                        "
                        loops="1"
                        categoryLogo="/new/duaratus.jpeg"

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
                        categoryLogo="/new/duaratus.jpeg"
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
            
            <DarkSection>
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <span className="text-[#d82370] tracking-[0.3em] uppercase text-sm">
                            {t.raceInfo.label}
                        </span>

                        <h2 className="mt-4 text-5xl font-black text-white">
                            {t.raceInfo.title}
                        </h2>

                        <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                            {t.raceInfo.subtitle}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* LEFT */}
                        <div
                            data-aos="fade-right"
                            className="
                            rounded-3xl
                            border border-[#d82370]/20
                            bg-gradient-to-br
                            from-[#d82370]/10
                            to-transparent
                            p-8
                            "
                        >
                            <h3 className="text-3xl font-black text-white mb-8">
                                {t.raceInfo.included.title}
                            </h3>

                            <div className="space-y-6">

                                <div className="flex gap-4 items-start">
                                    <div className="text-4xl">🏃</div>
                                    <div>
                                        <h4 className="font-bold text-white">
                                            {t.raceInfo.included.raceTeeTitle}
                                        </h4>

                                        <p className="text-white/70">
                                            {t.raceInfo.included.raceTeeDesc}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="text-4xl">🏅</div>
                                    <div>
                                        <h4 className="font-bold text-white">
                                            {t.raceInfo.included.medalTitle}
                                        </h4>

                                        <p className="text-white/70">
                                            {t.raceInfo.included.medalDesc}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="text-4xl">👕</div>
                                    <div>
                                        <h4 className="font-bold text-white">
                                            {t.raceInfo.included.finisherTeeTitle}
                                        </h4>

                                        <p className="text-white/70">
                                            {t.raceInfo.included.finisherTeeDesc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div
                            data-aos="fade-left"
                            className="
                            rounded-3xl
                            border border-white/10
                            bg-white/5
                            p-8
                            "
                        >
                            <h3 className="text-3xl font-black text-white mb-8">
                                {t.raceInfo.qualification.title}
                            </h3>

                            <div className="space-y-4">
                                {t.raceInfo.qualification.categories.map((item) => (
                                    <div key={item.cat}>
                                        <div className="text-[#d82370] text-2xl font-black">
                                            {item.cat}
                                        </div>

                                        <div className="text-white/80">
                                            {item.req}
                                        </div>
                                    </div>
                                ))}

                                <div
                                    className="
                                    mt-6
                                    rounded-2xl
                                    border border-[#d82370]/30
                                    bg-[#d82370]/10
                                    p-5
                                    text-center
                                    "
                                >
                                    <div className="text-[#d82370] font-black uppercase tracking-wider">
                                        {t.raceInfo.qualification.allCategories}
                                    </div>

                                    <div className="mt-2 text-white text-lg">
                                        {t.raceInfo.qualification.minAge}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DarkSection>

            <Sponsors />
        </>
    );
}

export default Home;
