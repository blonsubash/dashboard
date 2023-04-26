import React from "react";
import Chart from "react-apexcharts";

const ContentGraph = ({ type }) => {
  const apexBarChartStackedOpts = {};

  const apexBarChartStackedData = [44, 55, 41, 17, 15];

  return (
    <>
      <Chart
        options={apexBarChartStackedOpts}
        series={apexBarChartStackedData}
        type={type}
        height={320}
        className="apex-charts"
      />
    </>
  );
};

export default ContentGraph;
