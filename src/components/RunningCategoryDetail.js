import Typography from "./typography/Typography";

function RunningCategoryDetail({
    image,
    category,
    description,
    loops,
    cutOff,
    earlyBirdPrice,
    earlyBirdDate,
    earlyBirdLink,
    normalPrice,
    normalLink,
    reverse = false,
}) {
    return (
        <div
            className={`
                grid 
                grid-cols-1 
                lg:grid-cols-2 
                gap-12 
                items-center
                mb-12
                ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
            `}
        >
            {/* Left Image */}
            <div
                className="relative"
                data-aos={reverse ? "fade-left" : "fade-right"}
                data-aos-duration="1000"
            >
                <div
                    className="
                        absolute 
                        inset-0 
                        translate-x-4 
                        translate-y-4 
                        bg-[#d82370]/20 
                        rounded-2xl
                        blur-sm
                    "
                />

                <img
                    src={image}
                    alt={category}
                    className="
                        relative 
                        z-10
                        w-full
                        h-[300px]
                        md:h-[450px]
                        object-cover 
                        rounded-2xl
                    "
                />
            </div>


            {/* Right Content */}
            <div
                className={`
                    flex 
                    flex-col 
                    gap-10
                    ${reverse ? "lg:pr-8" : "lg:pl-8"}
                `}
                data-aos={reverse ? "fade-right" : "fade-left"}
                data-aos-duration="1000"
                data-aos-delay="200"
            >

                {/* Title */}
                <div>
                    <p
                        className="
                            text-[#d82370]
                            uppercase
                            tracking-[0.3em]
                            text-sm
                            mb-3
                        "
                    >
                        Running Category
                    </p>

                    <Typography
                        variant="h1"
                        color="white"
                        className="tracking-[0.15em]"
                    >
                        {category}
                    </Typography>

                    <Typography
                        variant="body"
                        color="white"
                        className="mt-4 max-w-xl opacity-80"
                    >
                        {description}
                    </Typography>
                </div>


                {/* Stats */}
                <div className="grid grid-cols-2 gap-8 max-w-md">

                    <div>
                        <h3 className="text-4xl font-black text-[#d82370]">
                            {loops}
                        </h3>

                        <p className="
                            text-white
                            uppercase
                            tracking-[0.2em]
                            text-sm
                        ">
                            Loops
                        </p>
                    </div>


                    <div>
                        <h3 className="text-4xl font-black text-[#d82370]">
                            {cutOff}
                        </h3>

                        <p className="
                            text-white
                            uppercase
                            tracking-[0.2em]
                            text-sm
                        ">
                            Cut Off
                        </p>
                    </div>

                </div>


                {/* Prices */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl">

                    {/* Early Bird */}
                    <a
                        href={earlyBirdLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            rounded-2xl
                            p-5
                            bg-[#d82370]/10
                            border border-[#d82370]/40
                            shadow-[0_0_30px_rgba(216,35,112,0.25)]
                            backdrop-blur-sm
                            transition-all duration-300
                            hover:-translate-y-2
                            hover:shadow-[0_0_45px_rgba(216,35,112,0.45)]
                        "
                        data-aos="zoom-in-up"
                        data-aos-duration="800"
                        data-aos-delay="300"
                    >
                        <p className="
                            text-[#d82370]
                            uppercase
                            tracking-[0.2em]
                            text-xs
                            font-bold
                            mb-2
                        ">
                            Early Bird
                        </p>

                        <h3 className="
                            text-white
                            text-3xl
                            font-black
                        ">
                            {earlyBirdPrice}
                        </h3>

                        <p className="text-white/60 text-sm mt-2">
                            {earlyBirdDate}
                        </p>

                        <p className="
                            mt-4 
                            text-[#d82370]
                            text-sm
                            opacity-0
                            group-hover:opacity-100
                            transition
                        ">
                            Register now →
                        </p>
                    </a>


                    {/* Normal Price */}
                    <a
                        href={normalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            rounded-2xl
                            p-5
                            bg-white/5
                            border border-white/15
                            backdrop-blur-sm
                            transition-all duration-300
                            hover:-translate-y-2
                            hover:bg-white/10
                        "
                        data-aos="zoom-in-up"
                        data-aos-duration="800"
                        data-aos-delay="500"
                    >
                        <p className="
                            text-white/70
                            uppercase
                            tracking-[0.2em]
                            text-xs
                            font-bold
                            mb-2
                        ">
                            Normal
                        </p>

                        <h3 className="
                            text-white
                            text-3xl
                            font-black
                        ">
                            {normalPrice}
                        </h3>

                        <p className="
                            mt-4 
                            text-white/70
                            text-sm
                            opacity-0
                            group-hover:opacity-100
                            transition
                        ">
                            Register now →
                        </p>
                    </a>

                </div>

            </div>

        </div>
    );
}

export default RunningCategoryDetail;