/* eslint-disable react/prop-types */
import StyleStatisticsGraph from "./style";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StatisticsGraph = ({ name, color, dataset, labels }) => {
  const data = {
    labels,
    datasets: [
      {
        data: dataset,
        borderWidth: 1,
        pointRadius: 3.3,
        borderColor: "#606873db",
        backgroundColor: color,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        padding: 20,
        font: { size: 16 },
        display: true,
        text: name,
      },
    },
  };

  return (
    <StyleStatisticsGraph>
      <Line options={options} data={data} />
    </StyleStatisticsGraph>
  );
};

export default StatisticsGraph;
