import dayjs from "dayjs";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  ReferenceLine,
  CartesianGrid,
} from "recharts";
import { calculateBiorhythmSeries } from "../calculation";

function formatDate(isoString) {
  return dayjs(isoString).format("D MMM ");
}
function biorhythmChart({ birthDate, targetDate }) {
  const startDate = dayjs(targetDate).subtract(15, "days").toISOString();
  const data = calculateBiorhythmSeries(
    birthDate,
    startDate,
    31
  ).map((item) => ({ ...item, date: formatDate(item.date) }));
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis
          dataKey="date"
          ticks={[data[3].date, data[15].date, data[27].date]}
        ></XAxis>
        <CartesianGrid vertical={false} strokeDasharray="3 3"></CartesianGrid>
        <ReferenceLine x={data[15].date}></ReferenceLine>
        <Line type="natural" dot={false} dataKey="physical" stroke="red"></Line>
        <Line
          type="natural"
          dot={false}
          dataKey="emotional"
          stroke="green"
        ></Line>
        <Line
          type="natural"
          dot={false}
          dataKey="intellectual"
          stroke="yellow"
        ></Line>
      </LineChart>
    </ResponsiveContainer>
  );
}

export default biorhythmChart;
