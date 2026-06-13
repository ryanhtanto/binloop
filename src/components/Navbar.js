import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
    const { t } = useLanguage();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`
                fixed top-0 left-0 w-full z-50 
                transition-all duration-300
                ${isScrolled
                    ? "bg-white shadow-md py-3"
                    : "bg-transparent py-5"
                }
            `}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <h1 className="text-2xl font-bold">
                        MyLogo
                    </h1>


                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 font-medium">
                        <li>
                            <a href="#home">
                                {t.home}
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                {t.about}
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                {t.contact}
                            </a>
                        </li>
                    </ul>


                    {/* Hamburger Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>

                </div>


                {/* Mobile Menu */}
                <div
                    className={`
                        md:hidden overflow-hidden
                        transition-all duration-300
                        ${isOpen
                            ? "max-h-64 mt-4"
                            : "max-h-0"
                        }
                    `}
                >
                    <ul className="flex flex-col gap-4 py-3">
                        <li>
                            <a href="#home">
                                {t.home}
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                {t.about}
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                {t.contact}
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;