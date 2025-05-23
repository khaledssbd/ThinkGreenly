/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { UsageStats } from '@/components/Dashboard/CommonDashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { metaService } from '@/services/MetaServices';
import React, { useEffect, useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts';

const FreeIdeaCount = () => {
  const [data, setData] = useState<UsageStats | null>(null);
  useEffect(() => {
    const getMeta = async () => {
      const res = await metaService();
      setData(res);
    };

    getMeta();
  }, []);

  const chartConfig = {
    count: {
      label: 'Count',
      color: '#006400',
    },
  } satisfies ChartConfig;

  const barData = data?.data;

  const ideaKeys = [
    'totalIdeaCount',
    'freeIdeaCount',
    'paidIdeaCount',
    'underReviewIdeaCount',
  ] as const;

  const ideaArray = useMemo(() => {
    if (!barData) return [];

    return ideaKeys.map(key => ({
      idea: key,
      count: barData[key] ?? 0,
    }));
  }, [barData]);

  return (
    <div className="w-2/3 h-[320 px]">
      <Card className=" bg-[#101828] border-2  border-green-600">
        <CardHeader className="mt-8">
          <CardTitle>Idea Count </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={ideaArray}
              margin={{
                top: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="idea"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={value => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="count" fill="var(--color-count)" radius={8}>
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
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
