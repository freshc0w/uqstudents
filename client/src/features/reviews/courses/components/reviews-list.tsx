import { Review } from "@/features/reviews/courses/components/review";
import { Separator } from "@/components/ui/separator";

export const ReviewsList = () => {
  return (
    <div className="py-2 md:py-4">
      <Review />
      <Separator className="my-4 lg:my-6"/>
      <Review />
      <Separator className="my-4 lg:my-6"/>
      <Review />
    </div>
  );
};
