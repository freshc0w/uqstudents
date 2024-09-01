import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import placeholders from "../assets/search-placeholder.json";

type ReviewType = "courses" | "lecturers" | "clubs";

type SearchInputProps = {
  reviewType: string;
};

export const SearchInput = ({ reviewType }: SearchInputProps) => {
  const reviewTypes: ReviewType[] = ["courses", "lecturers", "clubs"];

  if (!reviewTypes.includes(reviewType as ReviewType)) {
    reviewType = "courses";
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
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
