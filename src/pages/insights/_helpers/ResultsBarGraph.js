import React from "react";
import Chart from "react-apexcharts";

const ResultsBarGraph = ({ type }) => {
  const apexBarChartStackedOpts = {
    chart: {
      id: "basic-bar",

      toolbar: {
        show: false,
      },
    },
    options: {
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false, // if true, grid lines appears
      },
    },
    yaxis: {
      labels: {
        show: false, // if true, grid lines appears
      },
    },
  };

  const apexBarChartStackedData = [
    {
      name: "Results",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return (
    <>
      <Chart
        options={apexBarChartStackedOpts}
        series={apexBarChartStackedData}
        type={type}
        height={200}
        className="apex-charts"
      />
    </>
  );
};

export default ResultsBarGraph;
