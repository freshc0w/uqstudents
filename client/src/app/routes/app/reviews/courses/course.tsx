import { ReviewLayout } from "@/components/layouts/review-layout";
import { H1, H2, P } from "@/components/typography";
import { useParams } from "react-router-dom";
import courseInfos from "@/features/reviews/courses/assets/course-info.json"; // ! TEMPORARY
import BoxReveal from "@/components/ui/box-reveal";
import { CourseHeaderInfo } from "@/features/reviews/courses/components/course-header-info";
import { CourseInfo } from "@/features/reviews/courses/types";
import { SecatTable } from "@/features/reviews/courses/components/secat-table";
import { ReviewsList } from "@/features/reviews/courses/components/reviews-list";
import { CourseDisplayInfo } from "@/features/reviews/courses/components/course-display-info";
import { Button } from "@/components/ui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { SquarePen } from "lucide-react";

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
        <CourseDisplayInfo courseInfo={courseInfo} />
      </aside>
      <main className="p-2 sm:p-3 md:p-5 lg:p-6 sm:w-2/3">
        <CourseHeaderInfo courseInfo={courseInfo} />
        <section className="py-2 md:py-4">
          <div className="flex items-center justify-between">
            <BoxReveal duration={0.5} boxColor="primary">
              <H2 className="border-none">What are other students saying?</H2>
            </BoxReveal>
            <Modal>
              <ModalTrigger className="flex justify-center group/modal-btn">
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                  Add a Review
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                  <SquarePen size={20} />
                </div>
              </ModalTrigger>
              <ModalBody>
                <div>Add your review goes here</div>
              </ModalBody>
            </Modal>
          </div>
          <ReviewsList />
        </section>
      </main>
    </ReviewLayout>
  );
};
