import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Typography from "../components/typography/Typography";

function Rules() {

    const { t } = useLanguage();


    return (
        <>
            <div className="min-h-screen bg-[#242021] text-white pt-32 px-6">

                <div className="max-w-6xl mx-auto">

                    <Typography
                        variant="h2"
                        color="white"
                        className="text-center uppercase mb-16"
                    >
                        {t.rules.label}
                    </Typography>

                    <div
                        className="
                            rounded-3xl
                            border border-white/10
                            bg-white/5
                            backdrop-blur-sm
                            p-8
                            md:p-12
                        "
                    >
                        <Typography
                            variant="h3"
                            color="pink"
                            className="uppercase mb-6"
                        >
                            {t.rules.qualification.title}
                        </Typography>

                        <Typography
                            variant="body"
                            color="white"
                            className="opacity-80 mb-6"
                        >
                            {t.rules.qualification.description}
                        </Typography>

                        <Typography
                            variant="body"
                            color="white"
                            className="font-semibold"
                        >
                            {t.rules.qualification.introduction}
                        </Typography>
                        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {t.rules.qualification.categories.map((category, index) => (
                                <div
                                    key={category.title}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="
                                        rounded-2xl
                                        border border-white/10
                                        bg-white/5
                                        backdrop-blur-sm
                                        p-6
                                        transition-all
                                        duration-300
                                        hover:border-[#d82370]/60
                                        hover:bg-[#d82370]/10
                                        hover:-translate-y-2
                                        hover:shadow-[0_0_35px_rgba(216,35,112,0.25)]
                                    "
                                >
                                    {/* Card Title */}
                                    <Typography
                                        variant="h5"
                                        color="pink"
                                        className="mb-5 uppercase tracking-wider"
                                    >
                                        {category.title}
                                    </Typography>

                                    {/* Requirements */}
                                    <ul className="space-y-4">
                                        {category.items.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="mt-2 h-2 w-2 rounded-full bg-[#d82370] shrink-0" />

                                                <Typography
                                                    variant="small"
                                                    color="white"
                                                    className="opacity-80"
                                                >
                                                    {item}
                                                </Typography>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8 mt-10">
                        {t.rules.sections.map((section, index) => (
                            <div
                                key={section.title}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="
                                    rounded-3xl
                                    border border-white/10
                                    bg-white/5
                                    backdrop-blur-sm
                                    p-8
                                    transition-all
                                    duration-300
                                    hover:border-[#d82370]/40
                                    hover:shadow-[0_0_35px_rgba(216,35,112,0.18)]
                                "
                            >
                                <Typography
                                    variant="h3"
                                    color="pink"
                                    className="uppercase mb-6"
                                >
                                    {section.title}
                                </Typography>

                                {section.description && (
                                    <Typography
                                        variant="body"
                                        color="white"
                                        className="opacity-80 mb-6"
                                    >
                                        {section.description}
                                    </Typography>
                                )}

                                <ul className="space-y-4">
                                    {section.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="mt-2 h-2 w-2 rounded-full bg-[#d82370] shrink-0" />

                                            <Typography
                                                variant="body"
                                                color="white"
                                                className="opacity-80"
                                            >
                                                {item}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div
                        data-aos="fade-up"
                        className="
                            mt-10
                            rounded-3xl
                            border border-white/10
                            bg-white/5
                            backdrop-blur-sm
                            overflow-hidden
                        "
                    >
                        <div className="p-8 border-b border-white/10">
                            <Typography
                                variant="h3"
                                color="pink"
                                className="uppercase"
                            >
                                {t.rules.equipment.title}
                            </Typography>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-[#d82370]/15">
                                    <tr>
                                        <th className="p-5 text-left uppercase tracking-wider">
                                            Equipment
                                        </th>

                                        <th className="p-5 text-center uppercase tracking-wider w-56">
                                            Status
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {t.rules.equipment.table.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="border-t border-white/10 hover:bg-white/5 transition"
                                        >
                                            <td className="p-5">
                                                {item.equipment}
                                            </td>

                                            <td className="p-5 text-center">
                                                <span
                                                    className={`px-4 py-2 rounded-full text-sm font-bold ${
                                                        item.status === "Mandatory" ||
                                                        item.status === "Wajib"
                                                            ? "bg-red-500/20 text-red-300 border border-red-400/30"
                                                            : "bg-[#d82370]/20 text-[#ff8fc0] border border-[#d82370]/30"
                                                    }`}
                                                >
                                                    {item.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div
                        data-aos="fade-up"
                        className="
                            rounded-3xl
                            p-8
                            bg-white/5
                            border border-white/10
                            backdrop-blur-sm
                            mt-10
                        "
                    >
                        <Typography
                            variant="h3"
                            color="pink"
                            className="uppercase mb-4"
                        >
                            {t.rules.sanctions.title}
                        </Typography>

                        <Typography
                            variant="body"
                            color="white"
                            className="opacity-80 mb-8"
                        >
                            {t.rules.sanctions.intro}
                        </Typography>

                        {/* Table */}
                        <div className="overflow-x-auto rounded-2xl border border-white/10">

                            <table className="w-full">

                                <thead className="bg-[#d82370]/20">
                                    <tr>
                                        <th className="p-4 text-left uppercase">
                                            {t.rules.sanctions.headers.violation}
                                        </th>

                                        <th className="p-4 text-center uppercase w-72">
                                            {t.rules.sanctions.headers.penalty}
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {t.rules.sanctions.table.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="
                                                border-t
                                                border-white/10
                                                hover:bg-white/5
                                                transition
                                            "
                                        >
                                            <td className="p-4">
                                                {item.violation}
                                            </td>

                                            <td className="p-4 text-center">

                                                <span
                                                    className={`
                                                        px-4
                                                        py-2
                                                        rounded-full
                                                        text-sm
                                                        font-semibold
                                                        border
                                                        ${
                                                            item.penalty.includes("Disqualification") ||
                                                            item.penalty.includes("Diskualifikasi")
                                                                ? "bg-red-500/20 text-red-300 border-red-400/30"
                                                                : item.penalty.includes("Time") ||
                                                                item.penalty.includes("Penalti")
                                                                ? "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
                                                                : "bg-[#d82370]/20 text-[#ff8fc0] border-[#d82370]/30"
                                                        }
                                                    `}
                                                >
                                                    {item.penalty}
                                                </span>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>

                        </div>

                        {/* Note */}
                        <div
                            className="
                                mt-8
                                rounded-2xl
                                bg-[#d82370]/10
                                border
                                border-[#d82370]/30
                                p-6
                            "
                        >
                            <Typography
                                variant="body"
                                color="white"
                                className="opacity-90"
                            >
                                {t.rules.sanctions.note}
                            </Typography>
                        </div>

                    </div>
                    

                    <div
                        data-aos="fade-up"
                        className="rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-sm mt-10"
                    >
                        <Typography
                            variant="h3"
                            color="pink"
                            className="uppercase mb-6"
                        >
                            {t.rules.responsibility.title}
                        </Typography>

                        <div className="grid lg:grid-cols-2 gap-8">

                            {/* Runner */}
                            <div className="rounded-2xl bg-[#d82370]/10 border border-[#d82370]/30 p-6">
                                <Typography
                                    variant="h5"
                                    color="pink"
                                    className="mb-4"
                                >
                                    {t.rules.responsibility.runnerTitle}
                                </Typography>

                                <ul className="list-disc ml-6 space-y-3 text-white/80">
                                    {t.rules.responsibility.runnerItems.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Organizer */}
                            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                                <Typography
                                    variant="h5"
                                    color="pink"
                                    className="mb-4"
                                >
                                    {t.rules.responsibility.organizerTitle}
                                </Typography>

                                <ul className="list-disc ml-6 space-y-3 text-white/80">
                                    {t.rules.responsibility.organizerItems.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div
                        data-aos="fade-up"
                        className="rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-sm mt-10"
                    >
                        <Typography
                            variant="h3"
                            color="pink"
                            className="uppercase mb-6"
                        >
                            {t.rules.cancellation.title}
                        </Typography>

                        <ul className="space-y-4">
                            {t.rules.cancellation.items.map((item) => (
                                <li
                                    key={item}
                                    className="
                                        flex
                                        gap-4
                                        rounded-xl
                                        bg-white/5
                                        border border-white/10
                                        p-5
                                    "
                                >
                                    <span className="text-[#d82370] text-xl">•</span>

                                    <span className="text-white/80">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        data-aos="fade-up"
                        className="
                            rounded-3xl
                            p-8
                            mt-10
                            bg-gradient-to-r
                            from-[#d82370]/20
                            to-[#d82370]/5
                            border
                            border-[#d82370]/30
                            backdrop-blur-sm
                        "
                    >
                        <Typography
                            variant="h3"
                            color="pink"
                            className="uppercase mb-5"
                        >
                            {t.rules.runnerCancellation.title}
                        </Typography>

                        <Typography
                            variant="body"
                            color="white"
                            className="text-lg opacity-90"
                        >
                            {t.rules.runnerCancellation.description}
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Rules;