import React from "react";
import { useSelector } from "react-redux";
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChartDisplay = () => {
  const { monthlyApplications } = useSelector((store) => store.allJobs);
  return (
    <ResponsiveContainer>
      <AreaChart width={730} height={250} data={monthlyApplications}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartDisplay;
