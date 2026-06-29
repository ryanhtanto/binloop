import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import Typography from "../components/typography/Typography";

function NotFound() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-[#242021] text-white flex items-center justify-center px-6">

            <div
                className="text-center max-w-3xl"
                data-aos="zoom-in"
            >
                <h1
                    className="
                        text-[120px]
                        md:text-[220px]
                        font-black
                        leading-none
                        text-[#d82370]
                        drop-shadow-[0_0_40px_rgba(216,35,112,.45)]
                    "
                >
                    {t.notFound.code}
                </h1>

                <Typography
                    variant="h2"
                    color="white"
                    className="uppercase mt-4"
                >
                    {t.notFound.title}
                </Typography>

                <Typography
                    variant="body"
                    color="white"
                    className="mt-6 opacity-75 max-w-xl mx-auto"
                >
                    {t.notFound.description}
                </Typography>

                <div className="mt-10 flex justify-center gap-4 flex-wrap">

                    <Link
                        to="/"
                        className="
                            px-8
                            py-4
                            rounded-full
                            bg-[#d82370]
                            hover:bg-[#c11f63]
                            transition
                            font-semibold
                        "
                    >
                        {t.notFound.homeButton}
                    </Link>

                    <Link
                        to="/participant"
                        className="
                            px-8
                            py-4
                            rounded-full
                            border
                            border-white/20
                            hover:border-[#d82370]
                            hover:text-[#d82370]
                            transition
                        "
                    >
                        {t.notFound.participantButton}
                    </Link>

                </div>
            </div>

        </div>
    );
}

export default NotFound;