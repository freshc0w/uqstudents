import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

type RatingChartComponentProps = {
  value: number;
};

export function RatingChartComponent({ value }: RatingChartComponentProps) {
  const chartData = [
    {
      type: "overall",
      value: value,
      fill: "var(--color-overall)",
    },
  ];
  const chartConfig = {
    value: {
      label: "Value",
    },
    overall: {
      label: "Overall",
      color: "hsl(var(--primary))",
    },
  } satisfies ChartConfig;
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px] min-w-[100px]"
    >
      <RadialBarChart
        data={chartData}
        startAngle={180}
        endAngle={180 - chartData[0].value * 3.6}
        innerRadius={40}
        outerRadius={65}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
          polarRadius={[43, 37]}
        />
        <RadialBar dataKey="value" background max={100} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-lg font-bold"
                    >
                      {chartData[0].value.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 20}
                      className="fill-muted-foreground"
                    >
                      /100
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
