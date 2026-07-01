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
                                KEBAYORAN SQUARE, BINTARO
                            </p>
                        </div>
                    </div>
                </div>

                <CountdownBanner targetDate="2027-05-07T00:00:00">
                    <div className="text-center">
                        <div className="flex flex-col gap-2">

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

                    <div className="relative max-w-7xl mx-auto py-5">

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

            <div id="register">
                <DarkSection>
                    <div className="max-w-7xl mx-auto px-6 py-20 ">
                        <RunningCategoryDetail
                            image="/images-2/xtra.jpeg"
                            category="XTRA MILE"
                            categoryLogo="/new/xtra.png"
                            description={t.category.xtra.description}
                            loops="14+"
                            cutOff="40H"
                            earlyBirdDate={t.category.xtra.earlyBirdDate}
                            earlyBirdLink="https://sportplus.myr.id/pl/binloop-ultra-120k-x-edition-2027-xtra-miles-40h"
                            normalLink="https://sportplus.myr.id/pl/binloop-ultra-120k-x-edition-2027-xtra-miles-40h"
                            pricing={{
                                earlyBird: [
                                    {
                                        label: t.pricing.regular,
                                        price: "Rp 1.250K",
                                    },
                                    {
                                        label: t.pricing.loyalty,
                                        price: "Rp 1.100K",
                                        highlight: true,
                                    },
                                    {
                                        label: t.pricing.community,
                                        subtitle: t.pricing.minRunner,
                                        price: "Rp 1.100K",
                                        highlight: true,
                                    },
                                ],
                                normal: [
                                    {
                                        label: t.pricing.regular,
                                        price: "Rp 1.500K",
                                    },
                                    {
                                        label: t.pricing.loyalty,
                                        price: "Rp 1.200K",
                                        highlight: true,
                                    },
                                    {
                                        label: t.pricing.community,
                                        subtitle: t.pricing.minRunner,
                                        price: "Rp 1.250K",
                                        highlight: true,
                                    },
                                ],
                            }}
                            reverse
                        />

                        <RunningCategoryDetail
                            image="/images-2/duaratus.jpeg"
                            category="200K"
                            categoryLogo="/new/duaratus.png"
                            description={t.category.k200.description}
                            loops="16"
                            cutOff="40H"
                            earlyBirdDate={t.category.k200.earlyBirdDate}
                            earlyBirdLink="https://sportplus.myr.id/pl/binloop-ultra-120k-x-edition-2027-200k"
                            normalLink="https://sportplus.myr.id/pl/binloop-ultra-120k-x-edition-2027-200k"
                            pricing={{
                                earlyBird: [
                                    {
                                        label: t.pricing.regular,
                                        price: "Rp 1.250.000",
                                    },
                                    {
                                        label: t.pricing.loyalty,
                                        price: "Rp 1.100.000",
                                        highlight: true,
                                    },
                                    {
                                        label: t.pricing.community,
                                        subtitle: t.pricing.minRunner,
                                        price: "Rp 1.100.000",
                                        highlight: true,
                                    },
                                ],
                                normal: [
                                    {
                                        label: t.pricing.regular,
                                        price: "Rp 1.500.000",
                                    },
                                    {
                                        label: t.pricing.loyalty,
                                        price: "Rp 1.200.000",
                                        highlight: true,
                                    },
                                    {
                                        label: t.pricing.community,
                                        subtitle: t.pricing.minRunner,
                                        price: "Rp 1.250.000",
                                        highlight: true,
                                    },
                                ],
                            }}
                        />

                        <RunningCategoryDetail
                            image="/images-2/satuduapuluh.jpeg"
                            category="120K"
                            categoryLogo="/new/120k.png"
                            description={t.category.k120.description}
                            loops="10"
                            cutOff="22H"
                            earlyBirdDate={t.category.k120.earlyBirdDate}
                            earlyBirdLink="sold"
                            normalLink="https://sportplus.myr.id/pl/binloop-ultra-120k-x-edition-2027-120k"
                            pricing={{
                                earlyBird: [
                                    {
                                        label: t.pricing.regular,
                                        price: "Rp 1.000.000",
                                    },
                                    {
                                        label: t.pricing.loyalty,
                                        price: "Rp 900.000",
                                        highlight: true,
                                    },
                                    {
                                        label: t.pricing.community,
                                        subtitle: t.pricing.minRunner,
                                        price: "Rp 900.000",
                                        highlight: true,
                                    },
                                ],
                                normal: [
                                    {
                                        label: t.pricing.regular,
                                        price: "Rp 1.250.000",
                                    },
                                    {
                                        label: t.pricing.loyalty,
                                        price: "Rp 1.000.000",
                                        highlight: true,
                                    },
                                    {
                                        label: t.pricing.community,
                                        subtitle: t.pricing.minRunner,
                                        price: "Rp 1.050.000",
                                        highlight: true,
                                    },
                                ],
                            }}
                            reverse
                        />

                        <RunningCategoryDetail
                            image="/images-2/enampuluh.jpeg"
                            category="60K"
                            categoryLogo="/new/60k.png"
                            description={t.category.k60.description}
                            loops="5"
                            cutOff="10H"
                            earlyBirdDate={t.category.k60.earlyBirdDate}
                            earlyBirdLink="sold"
                            normalLink="https://sportplus.myr.id/pl/binloop-ultra-120k-x-edition-2027-60k"
                            pricing={{
                                earlyBird: [
                                    {
                                        label: t.pricing.regular,
                                        price: "Rp 800.000",
                                    },
                                    {
                                        label: t.pricing.loyalty,
                                        price: "Rp 725.000",
                                        highlight: true,
                                    },
                                    {
                                        label: t.pricing.community,
                                        subtitle: t.pricing.minRunner,
                                        price: "Rp 725.000",
                                        highlight: true,
                                    },
                                ],
                                normal: [
                                    {
                                        label: t.pricing.regular,
                                        price: "Rp 1.000.000",
                                    },
                                    {
                                        label: t.pricing.loyalty,
                                        price: "Rp 800.000",
                                        highlight: true,
                                    },
                                    {
                                        label: t.pricing.community,
                                        subtitle: t.pricing.minRunner,
                                        price: "Rp 850.000",
                                        highlight: true,
                                    },
                                ],
                            }}
                        />

                        <RunningCategoryDetail
                            image="/images-2/duabelas.jpeg"
                            category="12K"
                            categoryLogo="/new/12k.png"
                            description={t.category.k12.description}
                            loops="1"
                            cutOff="3H"
                            earlyBirdDate={t.category.k12.earlyBirdDate}
                            earlyBirdLink="sold"
                            normalLink="https://sportplus.myr.id/pl/binloop-ultra-120k-x-edition-2027-12k"
                            pricing={{
                                earlyBird: [
                                    {
                                        label: t.pricing.regular,
                                        price: "Rp 360.000",
                                    },
                                ],
                                normal: [
                                    {
                                        label: t.pricing.regular,
                                        price: "Rp 450.000",
                                    },
                                ],
                            }}
                        />

                        <RunningCategoryDetail
                            image="/images-2/Relay.jpeg"
                            category="RELAY"
                            categoryLogo="/new/relay.png"
                            description={t.category.relay.description}
                            loops="5"
                            cutOff="10H"
                            earlyBirdDate={t.category.relay.earlyBirdDate}
                            earlyBirdLink="sold"
                            normalLink="https://sportplus.myr.id/pl/binloop-ultra-120k-x-edition-2027-relay-60k"
                            pricing={{
                                earlyBird: [
                                    {
                                        label: t.pricing.team,
                                        price: "Rp 1.500.000",
                                    },
                                ],
                                normal: [
                                    {
                                        label: t.pricing.team,
                                        price: "Rp 1.800.000",
                                    },
                                ],
                            }}
                            reverse
                        />
                    </div>
                </DarkSection>
            </div>
            
            <DarkSection>
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <span className="text-[#d82370] tracking-[0.3em] uppercase text-sm">
                            {t.raceInfo.label}
                        </span>

                        <h2 className="mt-4 text-5xl font-black text-white">
                            {/* {t.raceInfo.title} */}
                            CAUSE THE WALLS START SHAKING
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
