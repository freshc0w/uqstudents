import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import placeholders from "../assets/search-placeholder.json";
import { useState } from "react";

type ReviewType = "courses" | "lecturers" | "clubs";

type SearchInputProps = {
  reviewType: string;
  handleSearchSubmit: (searchTerm: string) => void;
};

export const SearchInput = ({ reviewType, handleSearchSubmit }: SearchInputProps) => {
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
    />
  );
};
