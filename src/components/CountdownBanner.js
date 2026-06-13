import { useEffect, useState } from "react";

function CountdownBanner({ targetDate, children }) {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();

        if (difference <= 0) {
            return {
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00",
            };
        }

        return {
            days: String(
                Math.floor(difference / (1000 * 60 * 60 * 24))
            ).padStart(2, "0"),

            hours: String(
                Math.floor((difference / (1000 * 60 * 60)) % 24)
            ).padStart(2, "0"),

            minutes: String(
                Math.floor((difference / (1000 * 60)) % 60)
            ).padStart(2, "0"),

            seconds: String(
                Math.floor((difference / 1000) % 60)
            ).padStart(2, "0"),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const items = [
        { value: timeLeft.days, label: "DAYS" },
        { value: timeLeft.hours, label: "HOURS" },
        { value: timeLeft.minutes, label: "MINUTES" },
        { value: timeLeft.seconds, label: "SECONDS" },
    ];

    return (
        <div className="w-full overflow-hidden">
            <div className="flex flex-col md:flex-row">

                {/* Left Countdown */}
                <div className="bg-[#242021] text-white flex flex-1 justify-center items-center py-8 px-6">
                    <div className="flex gap-6 md:gap-8">
                        {items.map((item, index) => (
                            <div
                                key={item.label}
                                className="flex items-center"
                            >
                                <div className="text-center">
                                    <h2 className="text-3xl md:text-5xl font-bold">
                                        {item.value}
                                    </h2>

                                    <p className="text-xs md:text-sm tracking-widest">
                                        {item.label}
                                    </p>
                                </div>

                                {index < items.length - 1 && (
                                    <div className="h-12 w-px bg-white/30 ml-6 md:ml-8" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>


                {/* Right Content */}
                <div className="relative bg-[#d82370] text-white flex items-center justify-center px-8 py-8 md:w-[35%]">

                    {/* Diagonal Shape */}
                    <div
                        className="hidden md:block absolute left-[-40px] top-0 
                                   w-20 h-full bg-[#d82370]
                                   skew-x-[-15deg]"
                    />

                    <div className="relative z-10">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountdownBanner;