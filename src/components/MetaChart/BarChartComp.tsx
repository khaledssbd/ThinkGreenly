'use client';
import { metaService } from '@/services/MetaServices';
import React, { useEffect, useState } from 'react';
import {
  ChartContainer,
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart } from 'recharts';
import { useUser } from '@/context/UserContext';
import { CartesianGrid, XAxis } from 'recharts';
import { UsageStats } from '../Dashboard/CommonDashboard';

const BarChartComp = () => {
  const [data, setData] = useState<UsageStats | null>(null);
  const { isLoading } = useUser();

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
      color: '#2563eb',
    },
    AvgCount: {
      label: 'Avg-Count',
      color: '#60a5fa',
    },
  } satisfies ChartConfig;

  const barData = data?.data.barChartData;

  const formattedChartData = barData?.map((item: any) => {
    const date = new Date(item.month);
    const monthName = date.toLocaleString('default', { month: 'long' });

    return {
      month: monthName,
      count: item.count,
      AvgCount: item.count / 2,
    };
  });

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="border-2 h-[405px] rounded-2xl py-3 border-green-600 ">
          <div>
            <p className="font-bold mt-4 mb-10 ml-10">Bar Chart </p>
          </div>
          <ChartContainer config={chartConfig} className="h-[270px] w-full">
            <BarChart accessibilityLayer data={formattedChartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={value => value.slice(0, 3)}
              />

              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="count" fill="#067136" radius={4} />
              <Bar dataKey="AvgCount" fill="#A3C664" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      )}
    </div>
  );
};

export default BarChartComp;
