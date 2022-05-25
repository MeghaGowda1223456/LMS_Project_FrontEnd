import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  import React, { useState, useEffect } from "react";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  function BarChart2() {
    const [chartOptions, setChartOptions] = useState({});
    let labels = [2022, 2021, 2020, 2019, 2018, 2017, 2016];
    let datasets = [
      {
        data: [12, 55, 34, 120, 720, 800, 600, 500],
        borderColor: "#02C5E9",
        backgroundColor: "#02C5E9",
        borderRadius: 21,
        barThickness: 10,
      },
    ];
    useEffect(() => {
      setChartOptions({
        indexAxis: "y",
        scaleShowLabels: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            display: false,
          },
          y: {
            grid: {
              display: false,
            },
            display: true,
          },
        },
      });
    }, []);
    console.log(datasets, "Asad");
  
    return (
      <div className="App">
        <Bar
          options={chartOptions}
          data={{
            labels,
            datasets,
          }}
        />
      </div>
    );
  }
  
  export default BarChart2;
  