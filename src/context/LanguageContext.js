import { createContext, useContext, useState, useMemo } from "react";

import id from "../locales/id";
import en from "../locales/en";

const languages = {
    id,
    en,
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "id"
    );

    const changeLanguage = (lang) => {
        if (!languages[lang]) return;

        localStorage.setItem("language", lang);
        setLanguage(lang);
    };

    const value = useMemo(
        () => ({
            language,
            changeLanguage,
            t: languages[language],
        }),
        [language]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage harus digunakan di dalam LanguageProvider"
        );
    }

    return context;
};