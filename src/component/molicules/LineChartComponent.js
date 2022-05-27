// import React from "react";
// import { Line } from "react-chartjs-2";
// import moment from "moment";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//     LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const data = {
//   backgroundColor: "red",
//   labels: [],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 3,
//       fill: false,
//       borderColor: "#525252",
//     },
//   ],
// };

// export default function LineChartComponent() {
//   return (
//     <div style={{ width: "500px" }}>
//       <Line data={data} />
//     </div>
//   );
// }

import React from "react";
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

const options = {
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    xAxes: {
      grid: {
        display: false,
      },
    },
    yAxes: {
      grid: {
        display: true,
      },
      ticks: {
        padding: 5,
      },
      beginAtZero: false,
      display: true,
      title: {
        display: true,
      },
      grid: {
        display: false,
        lineWidth: 1,
        color: "#f5f4f5",
      },
    },
  },
  maintainAspectRatio: false,
};

const labels = ["Mock 1", "Mock 2", "Mock 3", "Mock 4", "Mock 5"];

export const data = {
  labels,
  datasets: [
    {
      data: [100, 200, 300, 100, 300],
      borderColor: "#FAA81D",
      backgroundColor: "#FAA81D",
    },
    // {
    //   label: "Dataset 2",
    //   data: labels.map((val) => {
    //     return val;
    //   }),
    //   borderColor: "",
    //   backgroundColor: "",
    // },
  ],
};

function LineChartComponent() {
  return (
    <div style={{ width: "1000px", height: "300px" }}>
      <Line options={options} data={data} />
    </div>
  );
}

export default LineChartComponent;
