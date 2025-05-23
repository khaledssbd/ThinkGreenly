"use client";
import { UsageStats as OriginalUsageStats } from "@/components/Dashboard/CommonDashboard";

type UsageStats = OriginalUsageStats & {
  totalIdeaCount: number;
  underReviewIdeaCount: number;
  freeIdeaCount: number;
  paidIdeaCount: number;
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { metaService } from "@/services/MetaServices";
import React, { useEffect, useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

const FreeIdeaCount = () => {
  const [data, setData] = useState<UsageStats | null>(null);

  useEffect(() => {
    const getMeta = async () => {
      const res = await metaService();
     const data=res.data;
      setData({...data,totalIdeaCount:data.underReviewIdeaCount+data.freeIdeaCount+data.paidIdeaCount});
    };
    getMeta();
  }, []);

  const chartConfig = {
    count: {
      label: "Count",
      color: "#00C851", // brighter green for dark bg
    },
  } satisfies ChartConfig;

  const barData = data;

  const ideaKeys = [
    "totalIdeaCount",
    "freeIdeaCount",
    "paidIdeaCount",
    "underReviewIdeaCount",
  ] as const;

  const ideaArray = useMemo(() => {
    if (!barData) return [];
    return ideaKeys.map((key) => ({
      idea: key,
      count: barData[key] ?? 0,
    }));
  }, [barData]);

  return (
    <div className="w-full h-[400px]">
      <Card className="bg-white dark:bg-transparent border-2 border-green-600 h-full">
        <CardHeader className="mt-8">
          <CardTitle className="text-gray-900 dark:text-white">
            Idea Count
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={ideaArray} margin={{ top: 20 }}>
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                stroke="#444"
              />
              <XAxis
                dataKey="idea"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 10)}
                stroke="#ccc"
                className="flex flex-wrap"
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    hideLabel
                    className="bg-gray-800 text-gray-900 dark:text-white"
                  />
                }
              />
              <Bar dataKey="count" fill="var(--color-count)" radius={8}>
                <LabelList
                  dataKey="count"
                  position="top"
                  offset={12}
                  className="fill-gray-900 dark:fill-white"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeIdeaCount;
