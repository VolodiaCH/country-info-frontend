import { Line } from "react-chartjs-2";
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
import { TPopulation } from "@/types/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface IPopulationChart {
  data: TPopulation[];
}

const PopulationChart: React.FC<IPopulationChart> = ({ data }) => {
  const minValue = Math.min(...data.map(entry => entry.value));
  const maxValue = Math.max(...data.map(entry => entry.value));

  const chartData = {
    labels: data.map(entry => entry.year),
    datasets: [
      {
        label: "Value Over Time",
        data: data.map(entry => entry.value),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
    },
    scales: {
      y: {
        min: Math.floor(minValue * 0.9),
        max: Math.ceil(maxValue * 1.1),
        ticks: {
          callback: (value: number | string) => {
            if (typeof value === "number") {
              return value.toLocaleString();
            }
            return value;
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default PopulationChart;
