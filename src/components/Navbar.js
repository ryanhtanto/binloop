import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
    const { language, , t } = useLanguage();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [resultOpen, setResultOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const menus = [
        {
            name: t.home,
            link: "#home",
        },
        {
            name: t.about,
            link: "#about",
        },
        {
            name: t.contact,
            link: "#contact",
        },
    ];

    const results = [2025, 2024, 2023, 2022, 2021, 2020];

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
                        href="#home"
                        className="
                            text-2xl
                            font-black
                            uppercase
                            tracking-[0.15em]
                            transition
                            hover:scale-105
                        "
                    >
                        <span className="text-[#d82370]">
                            Binloop
                        </span>

                        <span className="text-white">
                            Ultra X
                        </span>
                    </a>


                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-10">

                        {menus.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.link}
                                    className="
                                        relative
                                        text-white
                                        uppercase
                                        tracking-[0.15em]
                                        text-sm
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
                                </a>
                            </li>
                        ))}


                        {/* Result Dropdown */}
                        <li className="relative group">

                            <button
                                className="
                                    flex items-center gap-2
                                    text-white
                                    uppercase
                                    tracking-[0.15em]
                                    text-sm
                                    transition
                                    hover:text-[#d82370]
                                "
                            >
                                Result

                                <span
                                    className="
                                        transition-transform
                                        group-hover:rotate-180
                                    "
                                >
                                    ▼
                                </span>
                            </button>


                            {/* Hover bridge */}
                            <div className="absolute top-full h-4 w-full" />


                            {/* Dropdown */}
                            <div
                                className="
                                    absolute
                                    left-1/2
                                    -translate-x-1/2
                                    top-full
                                    mt-4
                                    w-48
                                    opacity-0
                                    invisible
                                    group-hover:opacity-100
                                    group-hover:visible
                                    transition-all
                                    duration-300
                                    z-50
                                "
                            >
                                <div
                                    className="
                                        bg-[#242021]/95
                                        backdrop-blur-lg
                                        border border-[#d82370]/30
                                        rounded-xl
                                        overflow-hidden
                                        shadow-[0_0_30px_rgba(216,35,112,0.3)]
                                    "
                                >
                                    {results.map((year) => (
                                        <a
                                            key={year}
                                            href={`/result/${year}`}
                                            className="
                                                block
                                                px-6
                                                py-3
                                                text-white
                                                text-sm
                                                tracking-[0.15em]
                                                transition
                                                hover:bg-[#d82370]
                                                hover:text-black
                                            "
                                        >
                                            {year} Result
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </li>

                    </ul>


                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="
                            md:hidden
                            text-white
                            text-3xl
                            hover:text-[#d82370]
                            transition
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
                                ? "max-h-[600px] opacity-100 mt-6"
                                : "max-h-0 opacity-0"
                        }
                    `}
                >

                    <div
                        className="
                            bg-[#242021]/90
                            backdrop-blur-lg
                            border border-[#d82370]/20
                            rounded-2xl
                            p-6
                            flex flex-col gap-5
                        "
                    >

                        {menus.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                onClick={() => setIsOpen(false)}
                                className="
                                    text-white
                                    uppercase
                                    tracking-[0.15em]
                                    hover:text-[#d82370]
                                    transition
                                "
                            >
                                {item.name}
                            </a>
                        ))}


                        {/* Mobile Result Dropdown */}
                        <button
                            onClick={() => setResultOpen(!resultOpen)}
                            className="
                                flex justify-between
                                items-center
                                text-white
                                uppercase
                                tracking-[0.15em]
                                hover:text-[#d82370]
                                transition
                            "
                        >
                            Result

                            <span
                                className={`
                                    transition-transform
                                    ${resultOpen ? "rotate-180" : ""}
                                `}
                            >
                                ▼
                            </span>
                        </button>


                        <div
                            className={`
                                overflow-hidden
                                transition-all duration-300
                                ${
                                    resultOpen
                                        ? "max-h-60"
                                        : "max-h-0"
                                }
                            `}
                        >
                            <div className="pl-4 mt-3 flex flex-col gap-3">

                                {results.map((year) => (
                                    <a
                                        key={year}
                                        href={`/result/${year}`}
                                        className="
                                            text-white/70
                                            hover:text-[#d82370]
                                            transition
                                        "
                                    >
                                        {year} Result
                                    </a>
                                ))}

                            </div>
                        </div>

                        {/* Language Switch */}
                        <div className="flex items-center gap-2 ml-4">

                            <button
                                onClick={() => setLanguage("id")}
                                className={`
                                    text-sm
                                    uppercase
                                    tracking-[0.15em]
                                    transition
                                    ${
                                        language === "id"
                                            ? "text-[#d82370]"
                                            : "text-white hover:text-[#d82370]"
                                    }
                                `}
                            >
                                ID
                            </button>

                            <span className="text-white/40">
                                |
                            </span>

                            <button
                                onClick={() => setLanguage("en")}
                                className={`
                                    text-sm
                                    uppercase
                                    tracking-[0.15em]
                                    transition
                                    ${
                                        language === "en"
                                            ? "text-[#d82370]"
                                            : "text-white hover:text-[#d82370]"
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