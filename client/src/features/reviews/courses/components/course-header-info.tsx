import { H1, Muted, P } from "@/components/typography";
import BoxReveal from "@/components/ui/box-reveal";
import { HalfSeparator } from "@/components/ui/half-separator";
import { CourseInfo } from "@/features/reviews/courses/types";
import { Separator } from "@radix-ui/react-dropdown-menu";

type CourseHeaderInfoProps = {
  courseInfo: CourseInfo;
};

export const CourseHeaderInfo = ({ courseInfo }: CourseHeaderInfoProps) => {
  const { code, title, summary } = courseInfo;
  return (
    <>
      <BoxReveal duration={0.5} boxColor="primary">
        <H1>{code}</H1>
      </BoxReveal>
      <BoxReveal duration={0.5} boxColor="primary">
        <Muted>{title}</Muted>
      </BoxReveal>
      <HalfSeparator className="bg-primary mt-2" />
      <div className="mt-6">
        <BoxReveal duration={0.5} boxColor="primary">
          <P className="leading-normal">{summary}</P>
        </BoxReveal>
      </div>
      <Separator className="mt-3 sm:mt-5 md:mt-7" />
    </>
  );
};