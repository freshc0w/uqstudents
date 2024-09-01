import { ContentLayout } from "@/components/layouts";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { SearchBar } from "@/features/reviews/components/search-bar";

export const ReviewsRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const paths = location.pathname.split("/");

  const findReviewType = (path: string[]) => {
    const reviewTypes = ["courses", "lecturers", "clubs"];
    return (
      (path.find((p) => reviewTypes.includes(p as string)) as string) ??
      "courses"
    );
  };

  const handleSearch = (searchTerm: string) => {
    console.log(
      "Navigating to",
      `/reviews/${findReviewType(paths)}/${searchTerm}`,
    );
    navigate(`/reviews/${findReviewType(paths)}/${searchTerm}`);
  };

  return (
    <ContentLayout
      headerChildren={
        <SearchBar
          reviewType={findReviewType(paths)}
          handleSearchSubmit={handleSearch}
        />
      }
    >
      <Outlet context={handleSearch} />
    </ContentLayout>
  );
};
