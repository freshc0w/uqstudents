import { ContentLayout } from "@/components/layouts";
import { Outlet, useLocation } from "react-router-dom";
import { SearchInput } from "@/features/reviews/components/search-input";

export const ReviewsRoute = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop() ?? "courses";

  return (
    <ContentLayout headerChildren={<SearchInput reviewType={path} />}>
      <Outlet />
    </ContentLayout>
  );
};
