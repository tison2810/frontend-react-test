import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import MonoInputComponent from "../../components/form/form-elements/MonoInputComponent";
import SearchScoreTable from "../../components/tables/BasicTables/SearchScoreTable";
import PageMeta from "../../components/common/PageMeta";
import Alert from "../../components/ui/alert/Alert";
import axios from "../../utils/axios";
import { Scores } from "../../types/score";

export default function SearchScore() {
  const [score, setScore] = useState<Scores | null>(null);
  const [error, setError] = useState<boolean>(false);

  const handleSearch = async (regNum: string) => {
    try {
      const response = await axios.get(`/api/show/${regNum}`);
      setScore(response.data);
      setError(false); // Reset error nếu tìm thấy
    } catch (error) {
      console.error("Error fetching score", error);
      setScore(null);
      setError(true);
    }
  };

  return (
    <>
      <PageMeta title="Search Score" description="" />
      <PageBreadcrumb pageTitle="Search Score" />
      <div className="space-y-6">
        <MonoInputComponent onSubmit={handleSearch} />

        <ComponentCard title="Detailed Scores">
            {error && (
          <Alert
            variant="error"
            title="Not Found"
            message="Please check registration number again"
            showLink={false}
          />
        )}
          <SearchScoreTable score={score} />
        </ComponentCard>
      </div>
    </>
  );
}
