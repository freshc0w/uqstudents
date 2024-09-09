import { ReviewLayout } from "@/components/layouts/review-layout";
import { H1, H2, H3, Medium, P } from "@/components/typography";
import { useParams } from "react-router-dom";
import courseInfos from "@/features/reviews/courses/assets/course-info.json"; // ! TEMPORARY
import BoxReveal from "@/components/ui/box-reveal";
import { CourseHeaderInfo } from "@/features/reviews/courses/components/course-header-info";
import { CourseInfo } from "@/features/reviews/courses/types";
import { SecatTable } from "@/features/reviews/courses/components/secat-table";
import { ReviewsList } from "@/features/reviews/courses/components/reviews-list";

// TODO: Implement Head for SEO
export const CourseRoute = () => {
  let { courseCode } = useParams<{ courseCode: string }>();
  courseCode = courseCode?.toUpperCase();
  const courseInfo = (courseInfos as CourseInfo[]).find(
    (course) => course.code === courseCode,
  );

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
      <aside className="p-2 sm:p-3 md:p-5 lg:p-6 sm:w-1/3 space-y-2">
        <SecatTable code={courseCode as string} />
      </aside>
      <main className="p-2 sm:p-3 md:p-5 lg:p-6 sm:w-2/3">
        <CourseHeaderInfo courseInfo={courseInfo} />
        <section className="py-2 md:py-4">
          <BoxReveal duration={0.5} boxColor="primary">
            <H2 className="border-none">What are other students saying?</H2>
          </BoxReveal>
          <ReviewsList />
        </section>
      </main>
    </ReviewLayout>
  );
};
