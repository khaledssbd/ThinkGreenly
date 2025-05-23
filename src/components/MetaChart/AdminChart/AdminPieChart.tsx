"use client";
import { UsageStats } from "@/components/Dashboard/CommonDashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { metaService } from "@/services/MetaServices";
import React, { useEffect, useState } from "react";
import { LabelList, Pie, PieChart } from "recharts";

const AdminPieChart = () => {
  const [data, setData] = useState<UsageStats | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await metaService();
      setData(res);
    };
    fetchData();
  }, []);

  const pieData = data?.data.pieChartData;

  const chartConfig = {
    count: {
      label: "Counts",
    },
    UNDER_REVIEW: {
      label: "Under Review",
      color: "#228B22",
    },
    DRAFT: {
      label: "Draft",
      color: "#006400",
    },
    APPROVED: {
      label: "Approved",
      color: "#00FF7F",
    },
    REJECTED: {
      label: "Rejected",
      color: "#98FB98",
    },
    other: {
      label: "Other",
      color: "#D0F0C0",
    },
  } satisfies ChartConfig;

  const statusColorVars = {
    UNDER_REVIEW: "var(--color-UNDER_REVIEW)",
    DRAFT: "var(--color-DRAFT)",
    APPROVED: "var(--color-APPROVED)",
    REJECTED: "var(--color-REJECTED)",
  };

  const chartData = pieData?.map((item: any) => ({
    status: item.status,
    count: item.count,
    fill:
      statusColorVars[item.status as keyof typeof statusColorVars] ||
      (
        chartConfig[item.status as keyof typeof chartConfig] as {
          color: string;
        }
      )?.color ||
      "#A0A0A0", // fallback grey
  }));

  return (
    <div className="w-full h-[400px]">
      <Card className="flex flex-col bg-white dark:bg-transparent border-2 border-green-600 h-full">
        <CardHeader className="items-center pb-0 mt-8">
          <CardTitle className="text-gray-900 dark:text-white">
            User Status Chart
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pb-0 overflow-hidden">
          <ChartContainer
            config={chartConfig}
            className="mx-auto"
            style={{ width: 280, height: 280 }}
          >
            <PieChart width={280} height={280}>
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    nameKey="count"
                    hideLabel
                    className="bg-gray-800 text-white"
                  />
                }
              />
              <Pie
                data={chartData}
                dataKey="count"
                labelLine={false}
                outerRadius={120}
              >
                <LabelList
                  dataKey="status"
                  position="inside"
                  className="fill-white dark:fill-white"
                  stroke="none"
                  fontSize={12}
                  formatter={(value: keyof typeof chartConfig) =>
                    chartConfig[value]?.label ?? value
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

export default AdminPieChart;
