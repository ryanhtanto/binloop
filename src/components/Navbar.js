import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

function Navbar() {
    const { t, language, changeLanguage } = useLanguage();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [resultOpen, setResultOpen] = useState(false);
    const [participantOpen, setParticipantOpen] = useState(false);

    const results = [2026, 2025, 2024, 2023, 2022, 2021, 2020];

    const runners = [ 
        {
            name : "Login", 
            path: 'https://sportplus.mayar.link/'
        },
        {
            name : "Runner Entitlement",
            path: '/runner-entitlement'
        },
        {
            name : "Rules & Regulation",
            path: '/rules'
        },
        {
            name : "Waiver",
            path: '/waiver'
        },
        {
            name : "Race Pack Collection",
            path: '/rpc'
        },
        {
            name : "Loop Guide",
            path: '/loop-guide'
        },
        {
            name : "Participant",
            path: '/participant'
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    const menus = [
        {
            name: t.navbar.home,
            link: "/",
        },
        {
            name: t.navbar.sponsor,
            link: "/sponsor",
        },
    ];

    return (
        <nav
            className={`
                fixed top-0 left-0 w-full z-50
                transition-all duration-500
                ${
                    isScrolled
                        ? `
                            bg-[#242021]/85
                            backdrop-blur-lg
                            shadow-[0_0_30px_rgba(216,35,112,0.25)]
                            py-4
                        `
                        : "bg-transparent py-6"
                }
            `}
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <a
                        href="/"
                        className="
                            text-2xl
                            font-black
                            uppercase
                            tracking-[0.15em]
                            transition
                            hover:scale-105
                        "
                    >
                         <img
                                src="/new/binloopLogo.png"
                                alt="Binloop Ultra X"
                                className="
                                    h-12
                                    w-auto
                                    object-contain
                                "
                            />
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">

                        {menus.map((item) => (
                            <Link
                                to={item.link}
                                key={item.name}
                                className="
                                    relative
                                    text-white
                                    text-sm
                                    uppercase
                                    tracking-[0.15em]
                                    transition
                                    hover:text-[#d82370]
                                    after:absolute
                                    after:left-0
                                    after:-bottom-2
                                    after:h-[2px]
                                    after:w-0
                                    after:bg-[#d82370]
                                    after:transition-all
                                    hover:after:w-full
                                "
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="relative group">

                            <button
                                className="
                                    flex items-center gap-2
                                    text-white
                                    text-sm
                                    uppercase
                                    tracking-[0.15em]
                                    hover:text-[#d82370]
                                    transition
                                "
                            >
                                {t.navbar.participant}

                                <span className="group-hover:rotate-180 transition">
                                    ▼
                                </span>
                            </button>


                            <div
                                className="
                                    absolute
                                    top-full
                                    pt-4
                                    w-48
                                    opacity-0
                                    invisible
                                    group-hover:opacity-100
                                    group-hover:visible
                                    transition-all
                                "
                            >
                                <div
                                    className="
                                        bg-[#242021]/95
                                        backdrop-blur-lg
                                        border border-[#d82370]/30
                                        rounded-xl
                                        overflow-hidden
                                        shadow-[0_0_25px_rgba(216,35,112,0.3)]
                                    "
                                >
                                    {runners.map((runner) => (
                                        <a
                                            key={runner.name}
                                            href={runner.path}
                                            className="
                                                block
                                                px-5 py-3
                                                text-white
                                                text-sm
                                                hover:bg-[#d82370]
                                                hover:text-black
                                                transition
                                            "
                                        >
                                            {runner.name} 
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Result Dropdown */}
                        <div className="relative group">

                            <button
                                className="
                                    flex items-center gap-2
                                    text-white
                                    text-sm
                                    uppercase
                                    tracking-[0.15em]
                                    hover:text-[#d82370]
                                    transition
                                "
                            >
                                {t.navbar.result}

                                <span className="group-hover:rotate-180 transition">
                                    ▼
                                </span>
                            </button>


                            <div
                                className="
                                    absolute
                                    top-full
                                    pt-4
                                    w-48
                                    opacity-0
                                    invisible
                                    group-hover:opacity-100
                                    group-hover:visible
                                    transition-all
                                "
                            >
                                <div
                                    className="
                                        bg-[#242021]/95
                                        backdrop-blur-lg
                                        border border-[#d82370]/30
                                        rounded-xl
                                        overflow-hidden
                                        shadow-[0_0_25px_rgba(216,35,112,0.3)]
                                    "
                                >
                                    {results.map((year) => (
                                        <a
                                            key={year}
                                            href={`https://www.sportsplits.com/races/binloop-ultra-${year}`}
                                            className="
                                                block
                                                px-5 py-3
                                                text-white
                                                text-sm
                                                hover:bg-[#d82370]
                                                hover:text-black
                                                transition
                                            "
                                        >
                                            {year} Result
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>


                        {/* Language Switch */}
                        <div
                            className="
                                flex items-center
                                bg-white/10
                                border border-white/10
                                rounded-full
                                p-1
                            "
                        >
                            <button
                                onClick={() => changeLanguage("id")}
                                className={`
                                    px-3 py-1 rounded-full text-xs
                                    uppercase transition
                                    ${
                                        language === "id"
                                            ? "bg-[#d82370] text-black font-bold"
                                            : "text-white"
                                    }
                                `}
                            >
                                ID
                            </button>

                            <button
                                onClick={() => changeLanguage("en")}
                                className={`
                                    px-3 py-1 rounded-full text-xs
                                    uppercase transition
                                    ${
                                        language === "en"
                                            ? "bg-[#d82370] text-black font-bold"
                                            : "text-white"
                                    }
                                `}
                            >
                                EN
                            </button>
                        </div>

                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="
                            md:hidden
                            text-white
                            text-3xl
                        "
                    >
                        {isOpen ? "×" : "☰"}
                    </button>

                </div>

                {/* Mobile Menu */}
                <div
                    className={`
                        md:hidden overflow-hidden
                        transition-all duration-500
                        ${
                            isOpen
                                ? "max-h-[600px] mt-5"
                                : "max-h-0"
                        }
                    `}
                >

                    <div
                        className="
                            bg-[#242021]/95
                            backdrop-blur-lg
                            rounded-2xl
                            border border-[#d82370]/20
                            p-6
                            flex flex-col gap-4
                        "
                    >

                        {menus.map((item) => (
                            <Link
                                to={item.link}
                                key={item.name}
                                onClick={() => setIsOpen(false)}
                                className="
                                    text-white
                                    uppercase
                                    tracking-[0.15em]
                                    hover:text-[#d82370]
                                "
                            >
                                {item.name}
                            </Link>
                        ))}

                        <button
                            onClick={() => setParticipantOpen(!participantOpen)}
                            className="
                                text-left
                                text-white
                                uppercase
                                tracking-[0.15em]
                            "
                        >
                            {t.navbar.participant} {participantOpen ? "▲" : "▼"}
                        </button>

                        {
                            participantOpen &&
                            <div className="ml-4 flex flex-col gap-3">
                                {runners.map((runner) => (
                                    <a
                                        key={runner.name}
                                        href={runner.path}
                                        className="text-white/70"
                                    >
                                        {runner.name}
                                    </a>
                                ))}
                            </div>
                        }

                        {/* Mobile Result */}
                        <button
                            onClick={() => setResultOpen(!resultOpen)}
                            className="
                                text-left
                                text-white
                                uppercase
                                tracking-[0.15em]
                            "
                        >
                            {t.navbar.result} {resultOpen ? "▲" : "▼"}
                        </button>

                        {
                            resultOpen &&
                            <div className="ml-4 flex flex-col gap-3">
                                {results.map((year) => (
                                    <a
                                        key={year}
                                        href={`https://www.sportsplits.com/races/binloop-ultra${year}`}
                                        className="text-white/70"
                                    >
                                        {year} Result
                                    </a>
                                ))}
                            </div>
                        }


                        {/* Mobile Language */}
                        <div className="flex gap-3 pt-3">

                            <button
                                onClick={() => changeLanguage("id")}
                                className={`
                                    px-4 py-2 rounded-full text-sm
                                    ${
                                        language === "id"
                                            ? "bg-[#d82370] text-black"
                                            : "bg-white/10 text-white"
                                    }
                                `}
                            >
                                ID
                            </button>


                            <button
                                onClick={() => changeLanguage("en")}
                                className={`
                                    px-4 py-2 rounded-full text-sm
                                    ${
                                        language === "en"
                                            ? "bg-[#d82370] text-black"
                                            : "bg-white/10 text-white"
                                    }
                                `}
                            >
                                EN
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;