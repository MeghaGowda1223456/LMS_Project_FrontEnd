// import React, { useEffect } from "react";
// import ReactDOM from "react-dom";
// import { Doughnut, Pie } from "react-chartjs-2";

// const options = {
//   legend: {
//     display: false,
//     position: "left",
//   },
//   elements: {
//     arc: {
//       borderWidth: 0,
//     },
//   },
// };

// const pieOptions = {
//   legend: {
//     display: false,
//     position: "left",
//     legendCallback: function (chart) {
//       console.log(chart);
//       return [
//         <ul>
//           <li>z</li>
//           <li>zzzz</li>
//           <li>ppp</li>
//           <li>adasda</li>
//         </ul>,
//       ];
//     },
//   },
//   elements: {
//     arc: {
//       borderWidth: 0,
//     },
//   },
// };

// const data = {
//   maintainAspectRatio: false,
//   responsive: false,
//   labels: ["a", "b", "c", "d"],
//   datasets: [
//     {
//       data: [300, 50, 100, 50],
//       backgroundColor: "pink",
//       hoverBackgroundColor: "black",
//     },
//   ],
// };

// const pieData = {
//   maintainAspectRatio: false,
//   responsive: false,
//   labels: ["usa", "europe", "africa"],
//   datasets: [
//     {
//       data: [200, 150, 20, 10],
//       backgroundColor: "red",
//       hoverBackgroundColor: "yellow",
//     },
//   ],
// };

// function PiChart() {
//   let chartInstance = null;

//   return (
//     <div style={styles.relative}>
//       {/* <Doughnut data={data} options={options} /> */}
//       <div style={styles.pieContainer}>
//         <Pie
//           data={data}
//           options={pieOptions}
//           ref={(input) => {
//             chartInstance = input;
//           }}
//         />
//       </div>
//       <div id="legend" />
//     </div>
//   );
// }

// const styles = {
//   pieContainer: {
//     width: "40%",
//     height: "40%",
//     top: "50%",
//     left: "50%",
//     position: "absolute",
//     transform: "translate(-50%, -50%)",
//   },
//   relative: {
//     position: "relative",
//   },
// };

// export default PiChart;

import React from "react";

import { Pie } from "react-chartjs-2";

import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const PiChart = () => {
  const data = {
    labels: ["Excellent", "Good", "Above Average", "Average", "Below Average"],
    datasets: [
      {
        label: "# of Votes",
        data: [70, 30, 40, 20, 25],
        backgroundColor: [
          "#39BB5C",
          "#2DB5EE",
          "#E4D402",
          "#EA8604",
          "#E40347",
        ],
        borderColor: ["#39BB5C", "#2DB5EE", "#E4D402", "#EA8604", "#E40347"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      style={{
        width: "250px",
        height: "100px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Pie
        data={data}
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

export default PiChart;
