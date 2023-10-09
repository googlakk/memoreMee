import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React, { FC } from "react";

import { Pie } from "react-chartjs-2";
import { useAuthContext } from "@app/hooks";

ChartJS.register(ArcElement, Tooltip, Legend);

type PieChartProps = {
  totalAnswers: number;
  correctAnswers: number;
  incorrectAnswers: number;
};
const PieChart: FC<PieChartProps> = ({
  totalAnswers,
  correctAnswers,
  incorrectAnswers,
}) => {
  const { user } = useAuthContext();

  const data = {
    labels: ["Правильные ответы", "Неправильные ответы"],
    datasets: [
      {
        data: [correctAnswers, incorrectAnswers],
        backgroundColor: ["#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
};
export default PieChart;
