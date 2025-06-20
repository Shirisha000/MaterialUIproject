import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Thirdgraph() {
  return (
    <BarChart
      xAxis={[{ data: ["group A", "group B", "group C"] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      height={300}
    />
  );
}
