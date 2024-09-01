import { SearchBarProps } from "@/features/reviews/types";
import { SearchInput } from "@/features/reviews/components/search-input";

export const SearchBar = ({
  reviewType,
  handleSearchSubmit,
}: SearchBarProps) => {
  return (
    <div className="flex justify-center">
      <SearchInput
        reviewType={reviewType}
        handleSearchSubmit={handleSearchSubmit}
      />
    </div>
  );
};
