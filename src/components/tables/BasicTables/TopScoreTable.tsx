import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Scores, GroupName, GROUP_SUBJECTS, SUBJECT_LABELS } from "../../../types/score";


export default function TopScoreTable({
  score,
  group,
}: {
  score: Scores[] | null;
  group: GroupName;
}) {
  if (!score || score.length === 0)
    return <p className="text-gray-500 px-5 py-4">No score data available</p>;

  const subjects = ["reg_num", ...GROUP_SUBJECTS[group], "group_score"];

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              {subjects.map((subj) => (
                <TableCell
                  key={subj}
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {SUBJECT_LABELS[subj] || subj}
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {score.map((s) => (
              <TableRow key={s.reg_num}>
                {subjects.map((subj) => (
                  <TableCell
                    key={subj}
                    className="px-5 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400"
                  >
                    {s[subj as keyof Scores]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
