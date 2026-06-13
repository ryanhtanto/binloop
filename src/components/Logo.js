import Typography from "./typography/Typography";

function Logo() {
    return (
        <>
            <Typography variant="display">
                <span className="text-[#d82370]">
                    binloop
                </span>

                <span className="text-white">
                    ultra
                </span>

                <span className="text-[#d82370] ml-2">
                    X
                </span>
            </Typography>

            <Typography
                variant="tagline"
                color="pink"
                className="mt-2"
            >
                a decade full of love
            </Typography>

            <Typography
                variant="date"
                color="white"
                className="mt-2"
            >
                7-9 MAY 2027
            </Typography>
        </>
    );
}

export default Logo;