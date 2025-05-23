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
import React, { useEffect, useState } from 'react';
import { LabelList, Pie, PieChart } from 'recharts';

const MemberPie = () => {
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
      label: 'Counts',
    },
    UNDER_REVIEW: {
      label: 'UNDER_REVIEW',
      color: '#00FF7F',
    },
    DRAFT: {
      label: 'DRAFT',
      color: '#006400',
    },
    APPROVED: {
      label: 'APPROVED',
      color: '#228B22',
    },
    REJECTED: {
      label: 'REJECTED',
      color: '#98FB98',
    },
    other: {
      label: 'Other',
      color: '#D0F0C0',
    },
  } satisfies ChartConfig;

  const memberPie = data?.data?.formattedIdeaStatusDistribution;
  const statusColorVars = {
    UNDER_REVIEW: 'var(--color-UNDER_REVIEW)',
    DRAFT: 'var(--color-DRAFT)',
    APPROVED: 'var(--color-APPROVED)',
    REJECTED: 'var(--color-REJECTED)',
  };

  const chartData = memberPie?.map((item: any) => ({
    status: item?.status, 
    count: item?.count,
    fill:
      statusColorVars[item?.status as keyof typeof statusColorVars] ||
      'var(--color-default)',
  }));

  return (
    <div className="w-2/5">
      <Card className="flex flex-col bg-[#101828] border-2 border-green-600">
        <CardHeader className="items-center pb-0 mt-8">
          <CardTitle>User Status</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square [&_.recharts-text]:fill-background"
          >
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent nameKey="count" hideLabel />}
              />
              <Pie data={chartData} dataKey="count">
                <LabelList
                  dataKey="status"
                  className="fill-background"
                  stroke="none"
                  fontSize={12}
                  formatter={(value: keyof typeof chartConfig) =>
                    chartConfig[value]?.label
                  }
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default MemberPie;
