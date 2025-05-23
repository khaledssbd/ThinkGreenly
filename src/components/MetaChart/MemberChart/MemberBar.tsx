/* eslint-disable react-hooks/exhaustive-deps */
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

interface MemberType {
  data: {
    formattedIdeaStatusDistribution?: Array<Record<string, any>>;
    myFreeIdeaCount: number;
    myIdeaBoughtCount: number;
    myIdeaSoldCount: number;
    myPaidIdeaCount: number;
    myTotalIdeaCount: number;
    myUnderReviewIdeaCount: number;
    totalRevenue: number;
  };
}

const MemberBar = () => {
  const [data, setData] = useState<MemberType | null>(null);
  useEffect(() => {
    const getMeta = async () => {
      const res = await metaService();
      setData(res);
    };

    getMeta();
  }, []);

  const barData = data?.data;

  const barKeys: Array<keyof MemberType['data']> = [
    'myFreeIdeaCount',
    'myIdeaBoughtCount',
    'myIdeaSoldCount',
    'myPaidIdeaCount',
    'myTotalIdeaCount',
    'myUnderReviewIdeaCount',
    'totalRevenue',
  ];

  const ideaArray = useMemo(() => {
    if (!barData) return [];

    return barKeys.map(key => ({
      idea: key,
      count: (barData[key] as any) ?? 0,
    }));
  }, [barData]);

  const chartConfig = {
    count: {
      label: 'Count',
      color: '#006400',
    },
  } satisfies ChartConfig;

  return (
    <div className="w-2/3">
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

export default MemberBar;
