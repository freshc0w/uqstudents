import { H2, Small } from "@/components/typography";
import BoxReveal from "@/components/ui/box-reveal";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import secatInfos from "@/features/reviews/courses/assets/secat-info.json"; // ! TEMPORARY
import { SecatRow } from "@/features/reviews/courses/components/secat-row";
import {
  QuestionNums,
  SecatInfo,
  Sentiment,
} from "@/features/reviews/courses/types";
import { Angry, Frown, Meh, Smile, Laugh } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SecatEnrolTable } from "@/features/reviews/courses/components/secat-enrol-table";

type SecatTableProps = {
  code: string;
};

const iconMap: { [key in Sentiment]: JSX.Element } = {
  strong_disagree: <Angry />,
  disagree: <Frown />,
  neutral: <Meh />,
  agree: <Smile />,
  strong_agree: <Laugh />,
};

export const SecatTable = ({ code }: SecatTableProps) => {
  // TODO: Implement api for fetching secats given a course code
  // for now we'll use static data
  const secatInfo = (secatInfos as SecatInfo[]).find(
    (info) => info.course === code,
  );

  return (
    <>
      <BoxReveal duration={0.5} boxColor="primary">
        <H2>SECAT Evaluations</H2>
      </BoxReveal>
      {!secatInfo ? (
        <p>No SECAT information available for this course</p>
      ) : (
        <>
          <SecatEnrolTable secatInfo={secatInfo} />
          <Table>
            <TableCaption>
              Semester {secatInfo?.semester}, Year {secatInfo?.year}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableCell /> {/*empty cell for question description*/}
                {secatInfo?.questions?.q1 &&
                  Object.keys(secatInfo.questions.q1)
                    .reverse() // start from strong_disagree
                    .map((responseKey) => (
                      <TableCell key={responseKey}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="cursor-default">
                              {iconMap[responseKey as Sentiment]}
                            </TooltipTrigger>
                            <TooltipContent>
                              <Small className="capitalize">
                                {responseKey.split("_").join(" ")}
                              </Small>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                    ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.keys(secatInfo.questions).map((questionNum) => (
                <SecatRow
                  key={questionNum}
                  question={secatInfo.questions[questionNum as QuestionNums]}
                />
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </>
  );
};
