import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import { FC } from "react";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
  plugins: {},
};
interface AreaChartProps {
  data: any;
}
const labels = ["September", "Octomber"];
const AreaChart: FC<AreaChartProps> = ({ data }) => {
  console.log(data, " Data");

  const value = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Intellect",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="p-2">
      <Line options={options} data={value} />
    </div>
  );
};
export default AreaChart;
