import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

import { FC } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type PieChartProps = {
  correctAnswers: number;
  incorrectAnswers: number;
};

const PieChart: FC<PieChartProps> = ({ correctAnswers, incorrectAnswers }) => {
  const data = {
    labels: ["Correct answer", "InCorrect answer"],
    datasets: [
      {
        data: [correctAnswers, incorrectAnswers],
        backgroundColor: ["#008170", "#FF6969"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
};
export default PieChart;
