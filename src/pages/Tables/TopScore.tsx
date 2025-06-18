import { useState, useEffect } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
// import MonoInputComponent from "../../components/form/form-elements/MonoInputComponent";
import TopScoreTable from "../../components/tables/BasicTables/TopScoreTable";
import PageMeta from "../../components/common/PageMeta";
import axios from "../../utils/axios";
import { Scores } from "../../types/score";

export default function TopScore() {
    const [score, setScore] = useState<Scores[] | null>(null);
    const [group, setGroup] = useState<"A" | "B" | "A1">("A");
    const handleSearch = async (groupName: string) => {
        try {
            const response = await axios.get(`/api/top/${groupName}`);
            setScore(response.data);
        } catch (error) {
            console.error("Error fetching score", error);
            setScore(null);
        }
    };

    useEffect(() => {
        handleSearch(group);
    }, [group]);

    return (
        <>
            <PageMeta title="Top Scores" description="" />
            <PageBreadcrumb pageTitle="Top Scores" />

            <div className="space-y-6">
                <div className="px-5">
                    <label htmlFor="groupSelect" className="mr-2 font-medium text-sm">Select Group:</label>
                    <select
                        id="groupSelect"
                        value={group}
                        onChange={(e) => setGroup(e.target.value as "A" | "B" | "A1")}
                        className="border border-gray-300 rounded px-2 py-1 text-sm"
                    >
                        <option value="A">A (Math, Physics, Chemistry)</option>
                        <option value="B">B (Math, Chemistry, Biology)</option>
                        <option value="A1">A1 (Math, Physics, Foreign Language N1)</option>
                    </select>
                </div>

                <ComponentCard title="Top Scores">
                    <TopScoreTable score={score} group={group} />
                </ComponentCard>
            </div>
        </>
    );
}
