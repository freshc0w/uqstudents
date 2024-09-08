import { H4, Lead, P, Small } from "@/components/typography";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

export const Review = () => {
  const chartData = [
    { browser: "safari", visitors: 1260, fill: "var(--color-primary)" },
  ];
  return (
    <div className="py-2 flex">
      <div className="p-2 md:p-3 grid place-items-center">IMAGE GOES HERE</div>
      <div className="flex-1 space-y-2">
        <H4>Anonymous Elephant</H4>
        <P className="overflow-hidden overflow-ellipsis line-clamp-3 leading-normal sm:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          excepturi maxime earum ab cupiditate accusamus perspiciatis a velit
          quidem eligendi, debitis nemo repellat porro quod dignissimos culpa
          voluptatem, alias consequatur incidunt libero dicta recusandae ullam
          mollitia ducimus? Minima, animi aperiam consequuntur fugit ducimus
          modi totam numquam exercitationem, laboriosam architecto consectetur,
          distinctio eos natus maxime optio sunt cum quasi error repellat?
        </P>
        <div className="flex gap-3 items-center">
          <Small className="text-secondary-foreground italic">08/09/2024</Small>
          <Lead className="text-accend sm:text-sm">
            Taken on Semester 1, 2024
          </Lead>
        </div>
      </div>
    </div>
  );
};
