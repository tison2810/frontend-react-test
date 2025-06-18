import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Scores } from "../../../types/score";

export default function SearchScoreTable({ score }: { score: Scores | null }) {
  if (!score) return
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Math
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Literature
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Foreign Language
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Physics
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Chemistry
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Biology
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                History
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Geography
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Civic Education
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Foreign Language ID
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              <TableRow key={score.reg_num}>
                <TableCell className="px-5 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {score.math == 13 ? "NA" : score.math}
                </TableCell>
                <TableCell className="px-5 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {score.literature  == 13 ? "NA" : score.literature}
                </TableCell>
                <TableCell className="px-5 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {score.f_language  == 13 ? "NA" : score.f_language}
                </TableCell>
                <TableCell className="px-5 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {score.physic  == 13 ? "NA" : score.physic}
                </TableCell>
                <TableCell className="px-5 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {score.chem  == 13 ? "NA" : score.chem}
                </TableCell>
                <TableCell className="px-5 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {score.biology  == 13 ? "NA" : score.biology}
                </TableCell>
                <TableCell className="px-5 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {score.history  == 13 ? "NA" : score.history}
                </TableCell>
                <TableCell className="px-5 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {score.geo  == 13 ? "NA" : score.geo}
                </TableCell>
                <TableCell className="px-5 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {score.ce  == 13 ? "NA" : score.ce}
                </TableCell>
                <TableCell className="px-5 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {score.f_language_id == "13" ? "NA" : score.f_language_id}
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
