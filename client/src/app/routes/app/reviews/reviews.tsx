import { ContentLayout } from "@/components/layouts";
import { Outlet, useLocation } from "react-router-dom";
import { SearchInput } from "@/features/reviews/components/search-input";

export const ReviewsRoute = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  const reviewType = path ?? "courses";

  // TODO: navigate to reviews/courses/:id, where searchterm finds the id.
  const handleSearch = (searchTerm: string) => {
    // navigate(`/reviews/${reviewType}/${searchTermID}`);
    console.log("searching for", searchTerm);
  };

  return (
    <ContentLayout
      headerChildren={
        <SearchInput
          reviewType={reviewType}
          handleSearchSubmit={handleSearch}
        />
      }
    >
      <Outlet />
    </ContentLayout>
  );
};
