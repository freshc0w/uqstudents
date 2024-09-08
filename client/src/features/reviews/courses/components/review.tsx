import { H4, Lead, P, Small } from "@/components/typography";
import BlurIn from "@/components/ui/blur-in";
import BoxReveal from "@/components/ui/box-reveal";
import { ActionableIcon } from "@/features/reviews/courses/components/actionable-icon";
import { RatingChartComponent } from "@/features/reviews/courses/components/rating-chart-component";
import { ThumbsUp, ThumbsDown, MessageSquareText } from "lucide-react";

{
  /* TODO: Add REAL REVIEW values as props. */
}
export const Review = () => {
  return (
    <div className="py-2 flex">
      <div className="p-2 md:p-3 grid place-items-center">
        <RatingChartComponent value={Math.floor(Math.random() * 100)} />
      </div>
      <div className="flex-1 space-y-2">
        <BoxReveal duration={0.5} boxColor="primary">
          <H4>Anonymous Elephant</H4>
        </BoxReveal>
        <BlurIn duration={0.75}>
          <P className="overflow-hidden overflow-ellipsis line-clamp-3 leading-normal sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            excepturi maxime earum ab cupiditate accusamus perspiciatis a velit
            quidem eligendi, debitis nemo repellat porro quod dignissimos culpa
            voluptatem, alias consequatur incidunt libero dicta recusandae ullam
            mollitia ducimus? Minima, animi aperiam consequuntur fugit ducimus
            modi totam numquam exercitationem, laboriosam architecto
            consectetur, distinctio eos natus maxime optio sunt cum quasi error
            repellat?
          </P>
        </BlurIn>
        <div className="flex justify-between flex-col items-start md:flex-row md:items-center">
          <div className="flex gap-3 items-center">
            <Small className="text-secondary-foreground italic">
              08/09/2024
            </Small>
            <Lead className="text-accend text-xs sm:text-sm">
              Taken on Semester 1, 2024
            </Lead>
          </div>
          <div className="flex items-center justify-end gap-4">
            <ActionableIcon>
              <ThumbsUp size={20} />
              <Small>123</Small>
            </ActionableIcon>
            <ActionableIcon>
              <ThumbsDown size={20} />
              <Small>123</Small>
            </ActionableIcon>
            <ActionableIcon>
              <MessageSquareText size={20} />
              <Small>123</Small>
            </ActionableIcon>
          </div>
        </div>
      </div>
    </div>
  );
};
