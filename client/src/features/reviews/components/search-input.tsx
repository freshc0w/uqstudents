import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import placeholders from "../assets/search-placeholder.json";
import { useState } from "react";
import { SearchInputProps, ReviewType } from "@/features/reviews/types";

export const SearchInput = ({
  reviewType,
  handleSearchSubmit,
}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const reviewTypes: ReviewType[] = ["courses", "lecturers", "clubs"];

  if (!reviewTypes.includes(reviewType as ReviewType)) {
    reviewType = "courses";
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearchSubmit(inputValue);
  };

  const getPlaceholders = (type: ReviewType) => {
    return placeholders[type];
  };

  return (
    <PlaceholdersAndVanishInput
      placeholders={getPlaceholders(reviewType as ReviewType)}
      onChange={handleChange}
      onSubmit={handleSubmit}
      className="focus-visible:ring-1 focus-visible:ring-ring shadow-sm hover:shadow-md text-accent-foreground border-2 focus:border-primary"
    />
  );
};
