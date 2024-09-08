export type Response = {
  value: number;
  total: number;
  percent: number;
};

export type QuestionNums =
  | "q1"
  | "q2"
  | "q3"
  | "q4"
  | "q5"
  | "q6"
  | "q7"
  | "q8";

export type Sentiment =
  | "strong_disagree"
  | "disagree"
  | "neutral"
  | "agree"
  | "strong_agree";

export type Question = {
  description: string;
} & {
  [key in Sentiment]: Response;
};

export type SecatInfo = {
  course: string;
  description: string;
  year: string;
  enrolled: number;
  rate: string;
  semester: 1;
  questions: { [key in QuestionNums]: Question };
};
