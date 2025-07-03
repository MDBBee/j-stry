"use client";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartContainer = ({
  data,
}: {
  data: { month: string; count: number }[];
}) => {
  const chartData = data;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />

        <Bar
          dataKey="count"
          fill="#8884d8"
          activeBar={<Rectangle fill="#8884d8" stroke="#8884d8" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartContainer;
