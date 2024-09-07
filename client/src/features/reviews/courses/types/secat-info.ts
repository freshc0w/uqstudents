type Response = {
  value: number;
  total: number;
  percent: number;
};

type Question = {
  description: string;
  strong_agree: Response;
  agree: Response;
  neutral: Response;
  disagree: Response;
  strong_disagree: Response;
};

export type SecatInfo = {
  course: string;
  description: string;
  year: string;
  enrolled: number;
  rate: string;
  semester: 1;
  questions: { [key: string]: Question };
};
