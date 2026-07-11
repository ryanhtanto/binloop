import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import Typography from "../components/typography/Typography";
import { useLanguage } from "../context/LanguageContext";

function Participant() {
    const [participants, setParticipants] = useState([]);
    const [search, setSearch] = useState("");
    const { t } = useLanguage();

    useEffect(() => {
        const loadExcel = async () => {
            const response = await fetch("/data/participant.xlsx");

            const arrayBuffer = await response.arrayBuffer();

            const workbook = XLSX.read(arrayBuffer, {
                type: "array",
            });

            const sheet = workbook.Sheets["Participant List"];

            

            const rawData = XLSX.utils.sheet_to_json(sheet, {
                header: 1,
            });

            const data = rawData.slice(1).map((row) => ({
                no: row[0],
                name: row[1],
                category: row[2],
            }));



            setParticipants(data);
        };

        loadExcel();
    }, []);


    const filteredParticipants = participants.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div className="min-h-screen bg-[#242021] text-white pt-32 px-6">

            <div className="max-w-6xl mx-auto">

                <Typography variant="h2" color="white" className="text-center uppercase mb-4 bold">
                    {t.participant.label}
                </Typography>


                {/* Search */}
                <input
                    type="text"
                    placeholder="Search participant..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="
                        w-full
                        mb-8
                        px-5
                        py-3
                        rounded-full
                        bg-white/10
                        border border-[#d82370]/30
                        outline-none
                        focus:border-[#d82370]
                    "
                />

                {/* <h3
                    className="
                        text-2xl 
                        font-black 
                        uppercase 
                        mb-8
                        text-center
                    "
                >
                    {t.comingSoon}
                </h3> */}

                {/* Table */}
                <div className="overflow-x-auto rounded-2xl border border-white/10">

                    <table className="w-full">

                        <thead>
                            <tr className="bg-[#d82370]/20">
                                <th className="p-4 text-left">
                                    No
                                </th>

                                <th className="p-4 text-left">
                                    Name
                                </th>

                                <th className="p-4 text-left">
                                    Category
                                </th>
                            </tr>
                        </thead>


                        <tbody>

                            {filteredParticipants.map((p, index) => (
                                <tr
                                    key={index}
                                    className="
                                        border-t border-white/10
                                        hover:bg-white/5
                                        transition
                                    "
                                >

                                    <td>{p.no}</td>


                                    <td>{p.name}</td>


                                    <td className="p-4">
                                        <span
                                            className="
                                                px-3
                                                py-1
                                                rounded-full
                                                bg-[#d82370]/20
                                                text-[#d82370]
                                                font-bold
                                            "
                                        >
                                            {p.category}
                                        </span>
                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default Participant;