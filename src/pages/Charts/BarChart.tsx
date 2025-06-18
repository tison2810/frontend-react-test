import { useEffect, useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import BarChartOne from "../../components/charts/bar/BarChartOne";
import PageMeta from "../../components/common/PageMeta";
import axios from "../../utils/axios";
import { SUBJECT_LABELS } from "../../types/score";

interface ScoreStats {
  [subject: string]: {
    lv1: number;
    lv2: number;
    lv3: number;
    lv4: number;
  };
}

export default function BarChart() {
  const [data, setData] = useState<ScoreStats | null>(null);

  useEffect(() => {
    axios.get("/api/stat/all").then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data) return <p className="p-4">Loading...</p>;
  return (
    <div>
      <PageMeta
        title="Chart"
        description="This is React.js Chart Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Bar Chart" />
      <div className="space-y-6">
        {Object.entries(data).map(([subject, levels]) => (
            <ComponentCard
            key={subject}
            title={`${SUBJECT_LABELS[subject] || subject}`}
            >
            <BarChartOne subject={SUBJECT_LABELS[subject] || subject} levels={levels} />
            </ComponentCard>
        ))}
      </div>
    </div>
  );
}
