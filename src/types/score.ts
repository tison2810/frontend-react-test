// src/types/score.ts

export interface Scores {
  group_total: number;
  reg_num: string;
  math: number;
  literature: number;
  f_language: number;
  physic: number;
  chem: number;
  biology: number;
  history: number;
  geo: number;
  ce: number;
  f_language_id: string;
}

export type GroupName = "A" | "B" | "A1";

export const GROUP_SUBJECTS: Record<GroupName, (keyof Scores)[]> = {
  A: ["math", "physic", "chem"],
  B: ["math", "chem", "biology"],
  A1: ["math", "physic", "f_language"],
};

export const SUBJECT_LABELS: Record<string, string> = {
  reg_num: "Registration Number",
  math: "Math",
  literature: "Literature",
  f_language: "Foreign Language",
  physic: "Physics",
  chem: "Chemistry",
  biology: "Biology",
  history: "History",
  geo: "Geography",
  ce: "Civic Education",
  f_language_id: "Language ID",
  group_score: "Total Score",
};
