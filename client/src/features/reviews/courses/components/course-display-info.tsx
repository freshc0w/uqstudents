import { Large, Small } from "@/components/typography";
import { Ratings } from "@/components/ui/ratings";
import { Separator } from "@/components/ui/separator";
import { CourseInfo } from "@/features/reviews/courses/types";

type CourseInfoProps = {
  courseInfo: CourseInfo;
};

export const CourseDisplayInfo = ({ courseInfo }: CourseInfoProps) => {
  return (
    <div className="flex gap-4 justify-around">
      <Ratings rating={3.5} variant="complementary" readOnly noText size={25} />
      <Separator orientation="vertical" className="w-[2px]" />
      <Small className="font-light">
        <Large className="inline text-complementary sm:text-xl md:text-2xl">
          98
        </Large>{" "}
        average of <span className="font-bold italic">35</span> reviews
      </Small>
    </div>

    
  );
};
