function Typography({
    children,
    variant = "body",
    color = "dark",
    className = "",
}) {
    const variants = {
        display: "text-6xl md:text-8xl font-black leading-none",
        h1: "text-5xl md:text-7xl font-bold leading-tight",
        h2: "text-4xl md:text-6xl font-bold leading-tight",
        h3: "text-3xl md:text-4xl font-semibold leading-snug",
        h4: "text-2xl md:text-3xl font-semibold leading-snug",
        h5: "text-xl md:text-xl font-medium leading-normal",
        body: "text-base md:text-lg leading-relaxed",
        small: "text-sm md:text-base",
        tagline: "text-lg md:text-xl tracking-[0.25em] uppercase",
        date: "text-sm md:text-lg tracking-[0.2em] uppercase",
    };

    const colors = {
        white: "text-white",
        pink: "text-[#d82370]",
        dark: "text-[#242021]",
    };

    const Component = {
        display: "h1",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        body: "p",
        small: "span",
        tagline: "p",
        date: "p",
    }[variant];

    return (
        <Component
            className={`${variants[variant]} ${colors[color]} ${className}`}
        >
            {children}
        </Component>
    );
}

export default Typography;