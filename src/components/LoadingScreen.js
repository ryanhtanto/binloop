import { useEffect, useState } from "react";
import Logo from "./Logo";

function LoadingScreen({ onComplete }) {
    const [showText, setShowText] = useState(false);
    const [hideText, setHideText] = useState(false);

    useEffect(() => {
        // Text appears
        setShowText(true);

        // Text fades out
        const textTimer = setTimeout(() => {
            setHideText(true);
        }, 2500);

        // Remove loading screen
        const finishTimer = setTimeout(() => {
            onComplete();
        }, 3500);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(finishTimer);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 bg-[#242021] flex items-center justify-center z-[9999]">
            <div
                className={`
                    text-center
                    transition-all duration-1000
                    ${
                        showText && !hideText
                            ? "opacity-100 scale-100"
                            : hideText
                            ? "opacity-0 scale-95"
                            : "opacity-0 scale-75"
                    }
                `}
            >
                <Logo />
            </div>
        </div>
    );
}

export default LoadingScreen;