import { ReviewLayout } from "@/components/layouts/review-layout";
import { H1, H2, Muted, P } from "@/components/typography";
import { useParams } from "react-router-dom";
import courseInfos from "@/features/reviews/courses/assets/course-info.json"; // ! TEMPORARY
import BoxReveal from "@/components/ui/box-reveal";
import { CourseHeaderInfo } from "@/features/reviews/courses/components/course-header-info";

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
        <BoxReveal duration={0.5} boxColor="primary">
          <H2>SECAT Evaluations</H2>
        </BoxReveal>
      </aside>
      <main className="p-2 sm:p-3 md:p-5 lg:p-6 border border-yellow-200 sm:w-2/3">
        <CourseHeaderInfo courseInfo={courseInfo} />
      </main>
    </ReviewLayout>
  );
};
