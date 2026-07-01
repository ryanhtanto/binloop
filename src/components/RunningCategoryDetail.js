import Typography from "./typography/Typography";

function RunningCategoryDetail({
    image,
    category,
    categoryLogo,
    description,
    loops,
    cutOff,
    pricing,
    earlyBirdDate,
    earlyBirdLink,
    normalLink,
    reverse = false,
}) {
    const earlyBirdSold = earlyBirdLink?.toLowerCase() === "sold";
    const normalSold = normalLink?.toLowerCase() === "sold";
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
            {/* Desktop Image Only */}
            <div
                className="relative hidden lg:block"
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
                        h-[450px]
                        object-cover
                        rounded-2xl
                    "
                />
            </div>

            {/* Content */}
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
                {/* Category Header */}
                <div className="w-full max-w-md">

                    {/* Category Logo */}
                    <img
                        src={categoryLogo}
                        alt={category}
                        className="
                            w-full
                            sm:max-w-[380px]
                            md:max-w-[220px]
                            lg:max-w-[280px]
                            h-auto
                            object-contain
                        "
                    />

                    <Typography
                        variant="body"
                        color="white"
                        className="mt-6 max-w-xl opacity-80"
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

                        <p
                            className="
                                text-white
                                uppercase
                                tracking-[0.2em]
                                text-sm
                            "
                        >
                            Loops
                        </p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-black text-[#d82370]">
                            {cutOff}
                        </h3>

                        <p
                            className="
                                text-white
                                uppercase
                                tracking-[0.2em]
                                text-sm
                            "
                        >
                            Cut Off
                        </p>
                    </div>
                </div>

                {/* Prices */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
                    {/* Early Bird */}
                    {earlyBirdSold ? (
                        <div
                            className="
                                relative
                                overflow-hidden
                                rounded-2xl
                                p-6
                                bg-[#d82370]/20
                                border border-[#d82370]/40
                                backdrop-blur-sm
                            "
                        >
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="rotate-[-25deg] text-5xl md:text-6xl font-black text-white/10 tracking-[0.2em]">
                                    SOLD OUT
                                </span>
                            </div>

                            <div className="relative z-10">
                                <p className="text-[#ff8fc0] uppercase tracking-[0.2em] text-xs font-bold mb-2">
                                    Early Bird
                                </p>

                                <p className="text-white/60 text-sm mb-5">
                                    {earlyBirdDate}
                                </p>

                                <div className="space-y-3">
                                    {pricing.earlyBird.map((item) => (
                                        <div
                                            key={item.label}
                                            className="flex justify-between items-center border-b border-white/10 pb-2 last:border-none"
                                        >
                                            <div>
                                                <p className="text-white/70">{item.label}</p>

                                                {item.subtitle && (
                                                    <p className="text-xs text-white/40">
                                                        {item.subtitle}
                                                    </p>
                                                )}
                                            </div>

                                            <p
                                                className={`text-xl font-bold ${
                                                    item.highlight
                                                        ? "text-[#ff8fc0]"
                                                        : "text-white"
                                                }`}
                                            >
                                                {item.price}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <a
                            href={earlyBirdLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                rounded-2xl
                                p-6
                                bg-[#d82370]/10
                                border border-[#d82370]/40
                                shadow-[0_0_30px_rgba(216,35,112,0.25)]
                                backdrop-blur-sm
                                transition-all duration-300
                                hover:-translate-y-2
                                hover:shadow-[0_0_45px_rgba(216,35,112,0.45)]
                            "
                        >
                            <p className="text-[#d82370] uppercase tracking-[0.2em] text-xs font-bold mb-2">
                                Early Bird
                            </p>

                            <p className="text-white/60 text-sm mb-5">
                                {earlyBirdDate}
                            </p>

                            <div className="space-y-3">
                                {pricing.earlyBird.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex justify-between items-center border-b border-white/10 pb-2 last:border-none"
                                    >
                                        <div>
                                            <p className="text-white/70">{item.label}</p>

                                            {item.subtitle && (
                                                <p className="text-xs text-white/40">
                                                    {item.subtitle}
                                                </p>
                                            )}
                                        </div>

                                        <p
                                            className={`text-xl font-bold ${
                                                item.highlight
                                                    ? "text-[#ff8fc0]"
                                                    : "text-white"
                                            }`}
                                        >
                                            {item.price}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6">
                                <div
                                    className="
                                        w-full
                                        rounded-xl
                                        bg-[#d82370]
                                        py-3
                                        text-center
                                        font-bold
                                        tracking-wide
                                        text-white
                                        transition-all
                                        duration-300
                                        group-hover:bg-[#e63782]
                                        group-hover:shadow-[0_0_20px_rgba(216,35,112,.45)]
                                    "
                                >
                                    Register Here →
                                </div>
                            </div>
                        </a>
                    )}

                    {/* Normal */}
                    {normalSold ? (
                        <div
                            className="
                                relative
                                overflow-hidden
                                rounded-2xl
                                p-6
                                bg-[#d82370]/20
                                border border-[#d82370]/40
                                backdrop-blur-sm
                            "
                        >
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="rotate-[-25deg] text-5xl md:text-6xl font-black text-white/10 tracking-[0.2em]">
                                    SOLD OUT
                                </span>
                            </div>

                            <div className="relative z-10">
                                <p className="text-[#ff8fc0] uppercase tracking-[0.2em] text-xs font-bold mb-2">
                                    Normal
                                </p>

                                <p className="text-white/60 text-sm mb-5">
                                    Starts 8 July 2026
                                </p>

                                <div className="space-y-3">
                                    {pricing.normal.map((item) => (
                                        <div
                                            key={item.label}
                                            className="flex justify-between items-center border-b border-white/10 pb-2 last:border-none"
                                        >
                                            <div>
                                                <p className="text-white/70">{item.label}</p>

                                                {item.subtitle && (
                                                    <p className="text-xs text-white/40">
                                                        {item.subtitle}
                                                    </p>
                                                )}
                                            </div>

                                            <p className="text-xl font-bold text-white">
                                                {item.price}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <a
                            href={normalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                rounded-2xl
                                p-6
                                bg-white/5
                                border border-white/15
                                backdrop-blur-sm
                                transition-all duration-300
                                hover:-translate-y-2
                                hover:bg-white/10
                            "
                        >
                            <p className="text-white/70 uppercase tracking-[0.2em] text-xs font-bold mb-2">
                                Normal
                            </p>

                            <p className="text-white/60 text-sm mb-5">
                                Starts 8 July 2026
                            </p>

                            <div className="space-y-3">
                                {pricing.normal.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex justify-between items-center border-b border-white/10 pb-2 last:border-none"
                                    >
                                        <div>
                                            <p className="text-white/70">{item.label}</p>

                                            {item.subtitle && (
                                                <p className="text-xs text-white/40">
                                                    {item.subtitle}
                                                </p>
                                            )}
                                        </div>

                                        <p className="text-xl font-bold text-white">
                                            {item.price}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6">
                                <div
                                    className="
                                        w-full
                                        rounded-xl
                                        bg-[#d82370]
                                        py-3
                                        text-center
                                        font-bold
                                        tracking-wide
                                        text-white
                                        transition-all
                                        duration-300
                                        group-hover:bg-[#e63782]
                                        group-hover:shadow-[0_0_20px_rgba(216,35,112,.45)]
                                    "
                                >
                                    Register Here →
                                </div>
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RunningCategoryDetail;