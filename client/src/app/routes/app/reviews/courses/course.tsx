import { ReviewLayout } from "@/components/layouts/review-layout";
import { H1, H2, Muted, P } from "@/components/typography";
import { useParams } from "react-router-dom";
import courseInfos from "@/features/reviews/courses/assets/course-info.json"; // ! TEMPORARY
import { Separator } from "@/components/ui/separator";
import { HalfSeparator } from "@/components/ui/half-separator";
import BoxReveal from "@/components/ui/box-reveal";

// TODO: Implement Head for SEO
export const CourseRoute = () => {
  let { courseCode } = useParams();
  courseCode = courseCode?.toUpperCase();
  const courseInfo = courseInfos.find((course) => course.code === courseCode);

  // TODO: Do the finding of the course, for now we'll use static

  if (!courseInfo) {
    return (
      <main className="text-center">
        <H1>Course not found for {courseCode}</H1>
        <P>Try Searching again</P>
      </main>
    );
  }

  return (
    <ReviewLayout>
      <aside className="p-2 sm:p-3 md:p-5 lg:p-6 border border-red-200 sm:w-1/3">
        <div>
          <H2>SECAT Evaluations</H2>
          <div>SECAT TABLE GOES HERE</div>
        </div>
      </aside>
      <main className="p-2 sm:p-3 md:p-5 lg:p-6 border border-yellow-200 sm:w-2/3">
        <BoxReveal duration={0.5} boxColor="primary">
          <H1>{courseInfo.code}</H1>
        </BoxReveal>
        <BoxReveal duration={0.5} boxColor="primary">
          <Muted>{courseInfo.title}</Muted>
        </BoxReveal>

        <HalfSeparator className="bg-primary mt-2" />
        <div className="mt-6">
          <BoxReveal duration={0.5} boxColor="primary">
            <P className="leading-normal">{courseInfo.summary}</P>
          </BoxReveal>
        </div>
        <Separator className="mt-3 sm:mt-5 md:mt-7" />
      </main>
    </ReviewLayout>
  );
};
