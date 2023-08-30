import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartDisplay = () => {
  const { monthlyApplications } = useSelector((store) => store.allJobs);
  return (
    <ResponsiveContainer>
      <BarChart width={730} height={250} data={monthlyApplications} barSize={40}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#fd5732" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartDisplay;
