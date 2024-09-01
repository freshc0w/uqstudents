import { ContentLayout } from "@/components/layouts";
import { Outlet } from "react-router-dom";
import { SearchInput } from "@/features/reviews/components/search-input";

export const ReviewsRoute = () => {
  return (
    <ContentLayout headerChildren={<SearchInput reviewType="lecturers" />}>
      <Outlet />
    </ContentLayout>
  );
};
