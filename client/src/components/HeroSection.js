import React, { useState } from "react";
import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";
import { Box, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);

function HeroSection() {
  const filterData = useSelector((state) => state.data);

  let dataArray = [];

  if (filterData.length > 0) {
    const dataKeys = Object?.keys(filterData[0]);
    dataKeys.forEach((el) => {
      if (el !== "_id") {
        dataArray.push(filterData[0][el]);
      }
    });
  }
  const data = {
    labels: ["Avg. Intensity", "Avg. Likelihood", "Avg. Relevance"],
    datasets: [
      {
        axis: "y",
        label: "Dataset",
        data: dataArray.length > 0 ? dataArray : [0, 0, 0],
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: { sm: 5 },
        display: "flex",
        flexDirection: { lg: "row", sm: "column", xs: "column" },
        justifyContent: "space-evenly",
      }}
    >
      <BarChart chartData={data} />
      <Divider sx={{ marginTop: 8, marginBottom: 8 }} />
      <PieChart chartData={data} />
    </Box>
  );
}

export default HeroSection;
