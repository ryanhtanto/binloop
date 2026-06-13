import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage();

    return (
        <div className="flex gap-2">
            <button
                onClick={() => changeLanguage("id")}
                className={`px-4 py-2 rounded ${language === "id"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    }`}
            >
                🇮🇩 ID
            </button>

            <button
                onClick={() => changeLanguage("en")}
                className={`px-4 py-2 rounded ${language === "en"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    }`}
            >
                🇺🇸 EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;