import { useLanguage } from "../context/LanguageContext";
import Typography from "../components/typography/Typography";

function Waiver() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-[#242021] text-white pt-32 px-6">

            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div
                    className="text-center mb-12"
                    data-aos="fade-down"
                >
                    <Typography
                        variant="h2"
                        color="white"
                        className="uppercase"
                    >
                        {t.waiver.title}
                    </Typography>

                    <div className="w-24 h-1 bg-[#d82370] mx-auto mt-5 rounded-full" />
                </div>

                {/* Waiver Card */}
                <div
                    data-aos="fade-up"
                    className="
                        rounded-3xl
                        border border-white/10
                        bg-white/5
                        backdrop-blur-sm
                        p-8 md:p-10
                    "
                >
                    <Typography
                        variant="body"
                        color="white"
                        className="mb-8 text-lg"
                    >
                        {t.waiver.intro}
                    </Typography>

                    <ol className="space-y-6">

                        {t.waiver.items.map((item, index) => (
                            <li
                                key={index}
                                className="
                                    flex
                                    items-start
                                    gap-5
                                    group
                                "
                            >
                                {/* Number */}
                                <div
                                    className="
                                        shrink-0
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-[#d82370]
                                        flex
                                        items-center
                                        justify-center
                                        font-bold
                                        text-white
                                        transition
                                        group-hover:scale-110
                                    "
                                >
                                    {index + 1}
                                </div>

                                {/* Content */}
                                <Typography
                                    variant="body"
                                    color="white"
                                    className="opacity-80 leading-8"
                                >
                                    {item}
                                </Typography>
                            </li>
                        ))}

                    </ol>
                </div>

                {/* Footer */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="
                        mt-10
                        rounded-2xl
                        border
                        border-[#d82370]/30
                        bg-[#d82370]/10
                        p-6
                        text-center
                    "
                >
                    <Typography
                        variant="body"
                        color="pink"
                        className="font-semibold"
                    >
                        By completing your registration, you acknowledge that you
                        have read, understood, and agreed to this waiver.
                    </Typography>
                </div>

            </div>

        </div>
    );
}

export default Waiver;