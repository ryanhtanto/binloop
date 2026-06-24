import DarkSection from "./section/DarkSection";

function Sponsors() {

    const sponsors = [
        // "/sponsored/sponsored1.png",
        "/sponsored/sponsored2.png",
        "/sponsored/sponsored3.png",
        "/sponsored/sponsored4.png",
        // "/sponsored/sponsored5.png",
    ];


    const supports = [
        // "/support/support1.png",
        // "/support/support2.png",
        "/support/support3.png",
        // "/support/support4.png",
        // "/support/support5.png",
    ];


    const LogoGrid = ({ title, logos, delay }) => (
        <div data-aos="fade-up" data-aos-delay={delay}>

            <p
                className="
                    text-[#d82370]
                    uppercase
                    tracking-[0.3em]
                    text-sm
                    font-bold
                    text-center
                    mb-8
                "
            >
                {title}
            </p>


            <div
                className="
                    grid
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-5
                    gap-5
                "
            >

                {logos.map((logo, index) => (
                    <div
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                        className="
                            group
                            h-28
                            rounded-2xl
                            bg-white/40
                            border
                            border-white/10
                            backdrop-blur-sm
                            flex
                            items-center
                            justify-center
                            p-5
                            transition-all
                            duration-300
                            hover:-translate-y-2
                            hover:border-[#d82370]/60
                            hover:bg-[#d82370]/10
                            hover:shadow-[0_0_35px_rgba(216,35,112,0.35)]
                        "
                    >

                        <img
                            src={logo}
                            alt="partner logo"
                            className="
                                max-h-[5.6rem]
                                w-auto
                                object-contain
                                transition
                                duration-300
                                group-hover:scale-110
                            "
                        />

                    </div>
                ))}

            </div>

        </div>
    );


    return (
        <DarkSection>
            <section
                className="
                    relative
                    py-24
                    px-6
                    overflow-hidden
                "
            >

                {/* Pink background glow */}
                <div
                    className="
                        absolute
                        bottom-0
                        left-1/2
                        -translate-x-1/2
                        w-[600px]
                        h-[600px]
                        bg-[#d82370]/10
                        blur-[200px]
                        rounded-full
                    "
                />


                <div className="relative max-w-7xl mx-auto">

                    {/* Header */}
                    <div
                        className="text-center mb-16"
                        data-aos="fade-up"
                    >

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
                            Our Partners
                        </p>


                        <h2
                            className="
                                text-white
                                text-4xl
                                md:text-6xl
                                font-black
                                uppercase
                            "
                        >
                            Sponsors &
                        </h2>


                        <h2
                            className="
                                text-[#d82370]
                                text-4xl
                                md:text-6xl
                                font-black
                                uppercase
                            "
                        >
                            Supporters
                        </h2>

                    </div>


                    <div className="space-y-14">

                        <LogoGrid
                            title="Supported By"
                            logos={sponsors}
                            delay={100}
                        />


                        <LogoGrid
                            title="Sponsors"
                            logos={supports}
                            delay={200}
                        />

                    </div>

                </div>

            </section>
        </DarkSection>
    );
}

export default Sponsors;