import { H2, H3 } from "@/components/typography";
import { useParams } from "react-router-dom";

type CourseReviewLayoutProps = {
  children: React.ReactNode;
};

export const CourseReviewLayout = ({ children }: CourseReviewLayoutProps) => {
  const { id } = useParams();
  return (
    <div className="flex flex-col sm:flex-row">
      <aside className="p-2 sm:p-3 md:p-5 lg:p-6 border border-red-200 sm:w-1/3">
        <H3>SECAT Evaluations</H3>
      </aside>
      <main className="p-2 sm:p-3 md:p-5 lg:p-6 border border-yellow-200 sm:w-2/3">
        {children}
      </main>
    </div>
  );
};
