import React from "react";

import { Doughnut } from "react-chartjs-2";

import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const DonutPiChart = () => {
  const data = {
    labels: ["male", "famale"],
    datasets: [
      {
        label: "# of Votes",
        data: [70, 30],
        backgroundColor: ["#086288", "#ED9232"],
        borderColor: ["#086288", "#ED9232"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      style={{
        width: "200px",
        height: "90px",
        display: "flex",
        alignItems: "center",
      }}
      className="mt-5"
    >
      <Doughnut
        data={data}
        // options={{
        //   maintainAspectRatio: false,
        //   legend: {
        //     labels: {
        //       fontSize: 25,
        //       usePointStyle: true,
        //     },
        //   },
        // }}

        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              labels: {
                usePointStyle: true,
              },
              position: "right",
              align: "center",
            },

            labels: {
              // fontSize: 50,
              usePointStyle: true,
            },
          },
        }}
      />
    </div>
  );
};

export default DonutPiChart;
