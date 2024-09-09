import { Large, Small } from "@/components/typography";
import { Ratings } from "@/components/ui/ratings";
import { Separator } from "@/components/ui/separator";
import { CourseInfo } from "@/features/reviews/courses/types";
import courseMap from "../assets/faculty.json";
import { cn } from "@/lib/utils";
import { TooltipProvider, Tooltip } from "@radix-ui/react-tooltip";
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import BlurIn from "@/components/ui/blur-in";

const BoldHighlightText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <Large
    className={cn(
      "inline text-complementary sm:text-xl md:text-2xl leading-none sm:leading-none md:leading-none lg:leading-none",
      className,
    )}
  >
    {children}
  </Large>
);

const InfoDisplay = ({
  label,
  info,
  className,
}: {
  label: string;
  info: string;
  className?: string;
}) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <div className="flex items-center gap-2 cursor-default">
          <Small className="italic text-sm sm:text-xs">{label}</Small>
          <BoldHighlightText
            className={cn("text-sm sm:text-md md:text-lg", className)}
          >
            {info}
          </BoldHighlightText>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <Small>{info}</Small>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

type CourseInfoProps = {
  courseInfo: CourseInfo;
};

export const CourseDisplayInfo = ({ courseInfo }: CourseInfoProps) => {
  const getFaculty = (faculty: string) => {
    const abbreviatedFaculty =
      courseMap[faculty.trim() as keyof typeof courseMap];

    return abbreviatedFaculty ?? faculty.trim();
  };
  return (
    <>
      <BlurIn duration={0.75}>
        <div className="flex gap-2 justify-around">
          <Ratings
            rating={3.5}
            variant="complementary"
            readOnly
            noText
            size={25}
          />
          <Separator orientation="vertical" className="w-[1.5px]" />
          <span className="flex gap-1">
            <BoldHighlightText>98</BoldHighlightText>{" "}
            <Small className="flex items-center gap-1">
              average of <i className="font-bold">35</i> reviews
            </Small>
          </span>
        </div>
        <div className="flex gap-2 justify-around">
          <InfoDisplay label="Faculty" info={getFaculty(courseInfo.faculty)} />
          <Separator orientation="vertical" className="w-[1.5px]" />
          <InfoDisplay label="Level" info={courseInfo.level} />
          <Separator orientation="vertical" className="w-[1.5px]" />
          <InfoDisplay label="Mode" info={courseInfo.mode} />
        </div>
      </BlurIn>
    </>
  );
};
