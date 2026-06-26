import {
    // Instagram,
    MessageCircle,
    Phone,
    Mail,
    MapPin,
} from "lucide-react";
import DarkSection from "./section/DarkSection";

export default function Footer() {
    return (
        <footer className="bg-[#242021] text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-14">
                {/* Main Footer */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Logo & Description */}
                    <div>
                        <img
                            src="/new/binloopLogo.png"
                            alt="Event Logo"
                            className="h-16 w-auto object-contain"
                        />

                        <p className="mt-5 text-white/70 leading-relaxed max-w-md">
                            Join us for an unforgettable race experience.
                            Challenge yourself, connect with fellow runners,
                            and celebrate every finish line.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-5">
                            Contact Information
                        </h3>

                        <div className="space-y-4">

                            <div className="flex items-start gap-3">
                                <Phone
                                    size={18}
                                    className="text-white/70 mt-1"
                                />
                                <span className="text-white/70">
                                    +62 852-8455-4548
                                </span>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail
                                    size={18}
                                    className="text-white/70 mt-1"
                                />
                                <span className="text-white/70">
                                    binloopultra120k@gmail.com
                                </span>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin
                                    size={18}
                                    className="text-white/70 mt-1"
                                />
                                <span className="text-white/70">
                                    Ruko Kebayoran Square
                                    Jl. Boulevard Bintaro Jaya, Tangerang Selatan, Banten
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-5">
                            Follow Us
                        </h3>

                        <div className="flex flex-col gap-4">

                            <a
                                href="https://www.instagram.com/binloopultra120/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex items-center gap-3
                                    text-white/70
                                    hover:text-white
                                    transition-colors
                                "
                            >
                                {/* <Instagram size={20} /> */}
                                <span>BinLoopUltra 120K</span>
                            </a>

                            <a
                                href="https://wa.me/6285284554548"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex items-center gap-3
                                    text-white/70
                                    hover:text-white
                                    transition-colors
                                "
                            >
                                <MessageCircle size={20} />
                                <span>WhatsApp Chat</span>
                            </a>

                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 my-8" />

                {/* Copyright */}
                <div
                    className="
                        text-center
                    "
                >
                    <p className="text-white/50 text-sm ">
                        © {new Date().getFullYear()} Binloop Ultra X.
                        All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}