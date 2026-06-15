import { useEffect, useState } from "react";
import Typography from "./typography/Typography";

function RunningCategoryCard() {
    const categories = [
        {
            title: "200K",
            image: "/images-2/run1.jpg",
        },
        {
            title: "120K",
            image: "/images-2/run2.jpg",
        },
        {
            title: "60K",
            image: "/images-2/run3.jpg",
        },
        {
            title: "XTRA MILE",
            image: "/images-2/run4.jpg",
        },
        {
            title: "12K",
            image: "/images-2/run5.jpg",
        },
        {
            title: "RELAY",
            image: "/images-2/run6.jpg",
        },
    ];

    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    const changeCard = (direction) => {
        setFade(false);

        setTimeout(() => {
            setCurrent((prev) => {
                if (direction === "next") {
                    return prev === categories.length - 1 ? 0 : prev + 1;
                }

                return prev === 0 ? categories.length - 1 : prev - 1;
            });

            setFade(true);
        }, 300);
    };

    const nextCard = () => changeCard("next");

    const prevCard = () => changeCard("prev");

    useEffect(() => {
        const interval = setInterval(() => {
            nextCard();
        }, 5000);

        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="w-full max-w-md">

            {/* Card */}
            <div className="relative h-[450px] rounded-2xl overflow-hidden">

                {/* Background Image */}
                <div
                    className={`
                        absolute inset-0
                        bg-cover bg-center
                        transition-all duration-700 ease-in-out
                        ${fade ? "opacity-100 scale-100" : "opacity-0 scale-105"}
                    `}
                    style={{
                        backgroundImage: `url(${categories[current].image})`,
                    }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35" />

                {/* Text & Button */}
                <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-4">
                    <Typography
                        variant="h2"
                        color="pink"
                        className="tracking-[0.15em]"
                    >
                        {categories[current].title}
                    </Typography>
                </div>
            </div>


            {/* Buttons */}
            <div className="flex gap-3 mt-5">

                {/* Previous */}
                <button
                    onClick={prevCard}
                    className="
                        w-14 
                        h-14 
                        rounded-full
                        bg-white
                        text-[#d82370]
                        text-2xl
                        flex
                        items-center
                        justify-center
                        hover:scale-105
                        transition
                        
                    "
                >
                    ←
                </button>


                {/* Next */}
                <button
                    onClick={nextCard}
                    className="
                        w-14 
                        h-14 
                        rounded-full
                        bg-[#d82370]
                        text-black
                        text-2xl
                        flex
                        items-center
                        justify-center
                        hover:scale-105
                        transition
                    "
                >
                    →
                </button>

            </div>
        </div>
    );
}

export default RunningCategoryCard;