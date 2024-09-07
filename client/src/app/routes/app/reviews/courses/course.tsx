import { CourseReviewLayout } from "@/components/layouts/course-review-layout";
import { H2 } from "@/components/typography";
import { useParams } from "react-router-dom";

// TODO: Implement Head for SEO
export const CourseRoute = () => {
  const params = useParams();
  return (
    <CourseReviewLayout>
      <H2>{params.id?.toUpperCase()}</H2>
    </CourseReviewLayout>
  );
};
