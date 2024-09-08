import { Small } from "@/components/typography";
import { TableCell, TableRow } from "@/components/ui/table";
import { Question } from "@/features/reviews/courses/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import BlurIn from "@/components/ui/blur-in";

type SecatRowProps = {
  question: Question;
};

export const SecatRow = ({ question }: SecatRowProps) => {
  const getTextColor = (percent: number) => {
    if (percent >= 32.5) return "text-green-500";
    if (percent <= 12.5) return "text-red-500";
    return "text-foreground";
  };
  return (
    <TableRow>
      <TableCell className="overflow-hidden overflow-ellipsis">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <Small className="line-clamp-2 text-left">
                {question.description}
              </Small>
            </TooltipTrigger>
            <TooltipContent>
              <Small>{question.description}</Small>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </TableCell>
      {Object.values(question as Omit<Question, "description">)
        .slice(1)
        .reverse() // starting from strong_disagree
        .map((response, idx) => (
          <TableCell key={response.percent * idx}>
            <BlurIn duration={1}>
              <Small className={getTextColor(response.percent)}>
                {response.percent.toFixed(0)}%
              </Small>
            </BlurIn>
          </TableCell>
        ))}
    </TableRow>
  );
};
